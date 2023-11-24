import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';


export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (!session) {
		throw redirect(302, '/account');
	}

	const getUser = async (userId: string) => {
		const user = await prisma.authUser.findUnique({
			where: {
				id: userId
			}
		})
		if (!user) {
			throw error(404, 'User not found')
		}

		return user
	}

	return {
		user: getUser(session.user.userId)
	}
}