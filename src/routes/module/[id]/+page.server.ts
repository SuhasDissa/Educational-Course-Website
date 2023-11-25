import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { modules } from '$lib/server/modules';

export const load: PageServerLoad = async ({ params, locals }) => {
    const session = await locals.auth.validate()
    if (!session) {
        throw redirect(302, '/login')
    }
    const user = await prisma.authUser.findUnique({
        where: {
            id: session.user.userId
        }
    }
    )
    if (!user) {
        throw error(404, 'User not found')
    }
    const module = modules[params.id - 1]
    return {
        module: module
    }
}