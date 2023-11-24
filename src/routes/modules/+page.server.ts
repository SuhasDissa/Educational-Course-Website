import { modules } from '$lib/server/modules.js';
import type { Module } from '$lib/server/types.js';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (!session) {
		throw redirect(302, '/account')
	}
	let mods: Module[] = modules;
	return {
		modules: mods
	};
}