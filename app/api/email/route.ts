// app/api/email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.NODEMAILER_EMAIL, // Alamat email pengirim
        pass: process.env.NODEMAILER_PASSWORD, 
      },
    });

    const mailOptions = {
      from: email, // Alamat email pengirim 
      to: process.env.MY_EMAIL, // Alamat email penerima 
      subject: `Pesan dari Formulir Kontak: ${subject}`,
      html: `
        <h3>Informasi Pengirim:</h3>
        <p>Nama: ${name}</p>
        <p>Email: ${email}</p>
        <br>
        <h3>Pesan:</h3>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}