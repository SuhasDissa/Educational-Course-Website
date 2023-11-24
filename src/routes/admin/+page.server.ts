import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (!session) {
        throw redirect(302, '/login')
    }
    const user = await prisma.authUser.findUnique({
        where: {
            id: session.user.userId
        }
    })
    if (!user) {
        throw error(404, 'User not found')
    }
    if (user.role != "admin") {
        throw redirect(302, '/')
    }

    const users = prisma.authUser.findMany()

    return {
        users: users
    }

}