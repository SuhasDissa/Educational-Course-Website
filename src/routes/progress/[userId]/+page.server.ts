import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import type { Module } from '$lib/server/types';
import { modules } from '$lib/server/modules';

export const load: PageServerLoad = async ({ params }) => {
	const user = await prisma.authUser.findUnique({
		where: {
			id: params.userId
		},
		include: {
			progress: true
		}
	});
	if (!user) {
		throw error(404, 'User not found');
	}
	let pg = user.progress;
	if (!pg) {
		throw error(404, 'User not found');
	}
	const progress = [
		pg.module1,
		pg.module2,
		pg.module3,
		pg.module4,
		pg.module5,
		pg.module6,
		pg.module7,
		pg.module8
	];
	const updateProgress = (modules: Module[], progress: Boolean[]) => {
		let incomplete = true;
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
	};
};
