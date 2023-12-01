import { PDFDocument, StandardFonts } from 'pdf-lib'
import { error, redirect, type RequestHandler } from '@sveltejs/kit'
import { prisma } from '$lib/server/prisma'
import fs from 'node:fs'
import QRCode from 'qrcode'

function replaceNonASCII(str: string) {
    return str.replace(/[^\x00-\x7F]/g, "?");
}

export const GET: RequestHandler = async ({ locals, params }) => {
    const session = await locals.auth.validate()
    if (!session) {
        throw redirect(302, '/')
    }
    const user = await prisma.authUser.findUnique({
        where: {
            id: params.id
        }
    })
    if (!user) {
        throw error(404, 'User not found')
    }

    const progressUrl = `https://uva-edu.onrender.com/progress/${user.id}`
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const filePath = './static/files/certificate.pdf';
    const fileBuffer = fs.readFileSync(filePath);

    const pdfDoc = await PDFDocument.load(fileBuffer)

    const notoFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

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

    const rawUpdateFieldAppearances = form.updateFieldAppearances.bind(form);
    form.updateFieldAppearances = function () {
        return rawUpdateFieldAppearances(notoFont);
    };

    form.updateFieldAppearances(notoFont)

    form.getTextField('name').setText(replaceNonASCII(user.name));
    form.getTextField('school').setText(replaceNonASCII(user.school));
    form.getTextField('id').setText(replaceNonASCII(user.username));
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