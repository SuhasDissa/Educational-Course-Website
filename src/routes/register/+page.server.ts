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
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		const data = formData as {
			name: string;
			username: string;
			password: string;
			phone: string;
			id_no: string;
			school: string;
		};

		try {
			await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: data.username,
					password: data.password
				},
				attributes: {
					name: data.name,
					username: data.username,
					school: data.school,
					phone: data.phone,
					id_no: data.id_no,
					role: data.username == "admin" ? "admin" : "user"
				}
			})
		} catch (err) {
			console.error(err)
			return fail(400, { message: 'Could not register user' })
		}
		throw redirect(302, '/login')
	}
};
