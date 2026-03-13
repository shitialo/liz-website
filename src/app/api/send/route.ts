import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend provides this for testing
      to: ['Lizwakesho4@gmail.com'],
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: serif; padding: 20px; border: 1px solid #D4AF37;">
          <h2 style="color: #D4AF37;">New Inquiry: Prime Minister's Portal</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0.5px solid #eee;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}