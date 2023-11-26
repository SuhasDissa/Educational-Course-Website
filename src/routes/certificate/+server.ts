import { PDFDocument } from 'pdf-lib'
import { error, redirect, type RequestHandler } from '@sveltejs/kit'
import { prisma } from '$lib/server/prisma'
import fs from 'node:fs'

export const GET: RequestHandler = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (!session) {
        throw redirect(302, '/')
    }
    const user = await prisma.authUser.findUnique({
        where: {
            id: session.user.userId
        }
    })
    if (!user) {
        throw error(404, 'User not found')
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const filePath = './static/files/certificate.pdf';
    const fileBuffer = fs.readFileSync(filePath);
    const existingPdfBytes = Buffer.from(fileBuffer);

    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    const form = pdfDoc.getForm()

    form.getTextField('name').setText(user.name);
    form.getTextField('school').setText(user.school);
    form.getTextField('id').setText(user.id_no);
    form.getTextField('date').setText(formattedDate);

    form.flatten()

    const output = await pdfDoc.save()

    return new Response(output, {
        status: 200, headers: {
            "Content-type": "application/pdf",
            "Content-Disposition": "attachment; filename=certificate.pdf"
        }
    })


}