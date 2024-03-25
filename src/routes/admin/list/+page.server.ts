import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import type { AuthUser } from '@prisma/client';

const rowsPerPage = 300;

export const load: PageServerLoad = async ({ locals, url }) => {
	const session = await locals.auth.validate();
	if (!session) {
		throw redirect(302, '/account');
	}
	const user = await prisma.authUser.findUnique({
		where: {
			id: session.user.userId
		}
	});
	if (!user) {
		throw error(404, 'User not found');
	}
	if (user.role != 'admin') {
		throw redirect(302, '/');
	}
	const query = url.searchParams.get('q');

	const pg = url.searchParams.get('page');

	const page = stringToInt(pg);

	var users: AuthUser[];

	if (query != null && query.length != 0) {
		users = await prisma.authUser.findMany({
			include: {
				progress: true
			},
			where: {
				OR: [{ username: { contains: query, mode: 'insensitive', } }, { name: { contains: query, mode: 'insensitive', } }]
			}
		});
	} else {
		users = await prisma.authUser.findMany({
			orderBy: {
				name: 'asc'
			},
			include: {
				progress: true
			},
			skip: (page - 1) * rowsPerPage,
			take: rowsPerPage
		});
	}

	const count = await prisma.authUser.count();

	return {
		users: users,
		count: count,
		rowsPerPage: rowsPerPage,
		query: query,
		page: page,
		totalPages: Math.ceil(count / rowsPerPage)
	};
};

function stringToInt(value: string | null): number {
	if (value === null) {
		return 1;
	}
	const intValue = parseInt(value.trim(), 10);
	return isNaN(intValue) ? 1 : intValue;
}
