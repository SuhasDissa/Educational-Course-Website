import { redirect, type RequestHandler } from '@sveltejs/kit'
import { prisma } from '$lib/server/prisma'

export const GET: RequestHandler = async ({ locals, params }) => {
    const session = await locals.auth.validate()
    if (!session) {
        throw redirect(302, '/')
    }
    if (!params.id) {
        throw redirect(302, '/nodules')
    }
    const id = parseInt(params.id)
    if (id < 1 || id > 8) {
        throw redirect(302, '/modules')
    }
    await prisma.progress.update({
        where: {
            userId: session.user.userId
        },
        data: {
            [`module${params.id}`]: true
        }
    })

    throw redirect(302, '/modules')
}