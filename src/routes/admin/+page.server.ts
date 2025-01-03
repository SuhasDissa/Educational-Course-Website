import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
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

	const [
		allCount,
		adminCount,
		practical,
		module1,
		module2,
		module3,
		module4,
		module5,
		module6,
		module7,
		module8
	] = await prisma.$transaction([
		prisma.authUser.count(),
		prisma.authUser.count({
			where: {
				role: 'admin'
			}
		}),
		prisma.progress.count({ where: { practical: true } }),
		prisma.progress.count({ where: { module1: true } }),
		prisma.progress.count({ where: { module2: true } }),
		prisma.progress.count({ where: { module3: true } }),
		prisma.progress.count({ where: { module4: true } }),
		prisma.progress.count({ where: { module5: true } }),
		prisma.progress.count({ where: { module6: true } }),
		prisma.progress.count({ where: { module7: true } }),
		prisma.progress.count({ where: { module8: true } })
	]);

	const output = {
		allCount: allCount,
		adminCount: adminCount,
		progress: {
			module1: module1, // Count for users who completed module1
			module2: module2, // Count for users who completed module2
			module3: module3,
			module4: module4,
			module5: module5,
			module6: module6,
			module7: module7,
			module8: module8,
			practical: practical // Count for users who completed the practical section
		},
		progressPercent: {
			module1: ((module1 / allCount) * 100).toFixed(2),
			module2: ((module2 / allCount) * 100).toFixed(2),
			module3: ((module3 / allCount) * 100).toFixed(2),
			module4: ((module4 / allCount) * 100).toFixed(2),
			module5: ((module5 / allCount) * 100).toFixed(2),
			module6: ((module6 / allCount) * 100).toFixed(2),
			module7: ((module7 / allCount) * 100).toFixed(2),
			module8: ((module8 / allCount) * 100).toFixed(2),
			practical: ((practical / allCount) * 100).toFixed(2)
		}
	};

	console.log(output);

	return output;
};
