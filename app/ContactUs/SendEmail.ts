'use server'

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name')?.toString();
  const subject = formData.get('subject')?.toString();
  const email = formData.get('email')?.toString();
  const message = formData.get('message')?.toString();

    if (!name || !email || !message || !subject) {
        throw new Error('Missing fields')
    }

    const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com', // custom domain SMTP
        port: 465,
        secure: true, // true for 465, false for 587
        auth: {
            user: process.env.SMTP_USER!,
            pass: process.env.SMTP_PASS!,
        },
    })

    await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`, // Use your domain email
        to: `<${process.env.SMTP_USER}>`, // where the contact form sends messages
        subject: subject,
        text: `${message} \n\n From: ${name} \n Return address ${email}`,
    })

    return { success: true }
}