import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.NODEMAILER_EMAIL, 
        pass: process.env.NODEMAILER_PASSWORD, 
      },
    });

	const mailOptions = {
	  from: `"${name}" <${email}>`,
	  to: process.env.MY_EMAIL,
	  subject: `📬 Pesan Baru dari 0xilham.my.id: ${subject}`,
	  html: `
		<div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px;">
		  <div style="max-width: 520px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); padding: 32px;">
			<h2 style="color: #2d3748; margin-bottom: 8px;">📧 Pesan Baru dari Form Kontak</h2>
			<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;">
			<h3 style="color: #4a5568; margin-bottom: 4px;">👤 Informasi Pengirim</h3>
			<p style="margin: 0 0 4px 0;"><strong>Nama:</strong> ${name}</p>
			<p style="margin: 0 0 12px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3182ce;">${email}</a></p>
			<h3 style="color: #4a5568; margin-bottom: 4px;">💬 Pesan</h3>
			<div style="background: #f1f5f9; border-radius: 8px; padding: 16px; color: #2d3748;">
			  ${message.replace(/\n/g, '<br>')}
			</div>
			<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 8px 0;">
			<p style="font-size: 12px; color: #a0aec0; text-align: center;">Email ini dikirim otomatis dari website 0xilham.</p>
		  </div>
		</div>
	  `,
	};

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}