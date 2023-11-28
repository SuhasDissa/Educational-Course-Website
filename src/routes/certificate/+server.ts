import { PDFDocument } from 'pdf-lib'
import { error, redirect, text, type RequestHandler } from '@sveltejs/kit'
import { prisma } from '$lib/server/prisma'
import fs from 'node:fs'
import QRCode from 'qrcode'

export const GET: RequestHandler = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (!session) {
        throw redirect(302, '/')
    }
    const user = await prisma.authUser.findUnique({
        where: {
            id: session.user.userId
        },
        include: {
            progress: true
        }
    })
    if (!user) {
        throw error(404, 'User not found')
    }

    if (!user.progress?.practical) {
        throw redirect(302, '/profile')
    }

    const progressUrl = `https://uva-edu.onrender.com/progress/${user.id}`
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const filePath = './static/files/certificate.pdf';
    const fileBuffer = fs.readFileSync(filePath);
    const existingPdfBytes = Buffer.from(fileBuffer);

    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    const firstPage = pdfDoc.getPage(0)

    const qrImageBuffer = await QRCode.toBuffer(progressUrl)
    const image = await pdfDoc.embedPng(qrImageBuffer)

    firstPage.drawImage(image, {
        x: 650,
        y: 230,
        width: 80,
        height: 80
    })

    const form = pdfDoc.getForm()

    form.getTextField('name').setText(user.name);
    form.getTextField('school').setText(user.school);
    form.getTextField('id').setText(user.username);
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