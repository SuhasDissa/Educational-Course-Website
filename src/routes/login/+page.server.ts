import { auth } from '$lib/server/lucia'
import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (session) {
		throw redirect(302, '/')
	}
}

export const actions = {
	default: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData());
		console.log(formData);

		const data = formData as {
			username: string;
			password: string;
		};

		try {
			const key = await auth.useKey('username', data.username, data.password)
			const userId = key.userId
			const session = await auth.createSession({ userId, attributes: {} })
			locals.auth.setSession(session)
		} catch (err) {
			console.error(err)
			return fail(400, { message: 'Could not login user.' })
		}
		throw redirect(302, '/')
	}
};
