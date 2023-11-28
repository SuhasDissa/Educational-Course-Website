import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ params, locals }) => {
    const session = await locals.auth.validate()
    if (!session) {
        throw redirect(302, '/login')
    }
    const user = await prisma.authUser.findUnique({
        where: {
            id: params.id
        },
        include: {
            progress: true
        }
    }
    )
    if (!user) {
        throw error(404, 'User not found')
    }
    return {
        user: user
    }
}

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        const data = formData as {
            id: string;
            name: string;
            username: string;
            role: string;
            practical: string;
        };

        try {
            await prisma.authUser.update({
                where: {
                    id: data.id
                },
                data: {
                    name: data.name,
                    username: data.username.toUpperCase(),
                    role: data.role
                }
            })
            await prisma.progress.update({
                where: {
                    userId: data.id
                },
                data: {
                    practical: data.practical == "true"
                }
            })
        } catch (err) {
            console.error(err)
            return fail(400, { message: 'Could not update user' })
        }
        throw redirect(302, '/admin')
    }
}
