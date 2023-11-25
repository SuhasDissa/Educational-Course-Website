import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import type { Module } from '$lib/server/types';
import { modules } from '$lib/server/modules';
import { t } from '$lib/i18n';


export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (!session) {
		throw redirect(302, '/account');
	}

	const user = await prisma.authUser.findUnique({
		where: {
			id: session.user.userId
		},
		include: {
			progress: true
		}
	})
	if (!user) {
		throw error(404, 'User not found')
	}
	let pg = user.progress
	if (!pg) {
		pg = await prisma.progress.create(
			{
				data: {
					userId: session.user.userId
				}
			}
		)
	}
	const progress = [pg.module1, pg.module1, pg.module1, pg.module1, pg.module1, pg.module1, pg.module1, pg.module1]

	const updateProgress = (modules: Module[], progress: Boolean[]) => {
		let incomplete = true
		for (let i = 0; i < modules.length; i++) {
			if (progress[i]) {
				modules[i].progress = 2;
			} else {
				if (incomplete) {
					modules[i].progress = 1;
					incomplete = false;
				} else {
					modules[i].progress = 0;
				}
			}
		}

		return modules;
	};

	return {
		user: user,
		modules: updateProgress(modules, progress)
	}
}