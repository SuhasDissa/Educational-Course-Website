import { auth } from '$lib/server/lucia'
import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { prisma } from '$lib/server/prisma'

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (session) {
		throw redirect(302, '/profile')
	}
}

export const actions = {
	default: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData());

		const data = formData as {
			name: string;
			username: string;
			password: string;
			phone: string;
			school: string;
		};

		try {
			await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: data.username.trim().toUpperCase(),
					password: data.password
				},
				attributes: {
					name: data.name,
					username: data.username.trim().toUpperCase(),
					school: data.school,
					phone: data.phone,
					role: data.username.toLowerCase() == "admin" ? "admin" : "user"
				}
			})
			const key = await auth.useKey('username', data.username.trim().toUpperCase(), data.password)
			const userId = key.userId

			await prisma.progress.create({
				data: {
					userId: userId
				}
			})
			const session = await auth.createSession({ userId, attributes: {} })
			locals.auth.setSession(session)
		} catch (err) {
			console.error(err)
			return fail(400, { message: 'Could not register user' })
		}
		throw redirect(302, '/profile')
	}
};
