import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { prisma } from '$lib/server/prisma'

export const POST: RequestHandler = async ({ locals, request }) => {
    const session = await locals.auth.validate()
    if (!session) {
        throw redirect(302, '/')
    }
    const formData = Object.fromEntries(await request.formData());
    const data = formData as {
        id: string;
    }
    await prisma.progress.update({
        where: {
            userId: session.user.userId
        },
        data: {
            [`module${data.id}`]: true
        }
    })

    throw redirect(302, '/modules')
}