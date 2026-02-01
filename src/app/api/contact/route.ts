import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Escape user input for HTML
    const safeName = escapeHtml(data.name);
    const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br>');

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to DevLogic
    await resend.emails.send({
      from: 'DevLogic Contact Form <noreply@devlogic.hr>',
      to: 'info@devlogic.hr',
      replyTo: data.email,
      subject: `New Contact Form Message from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: 'DevLogic <noreply@devlogic.hr>',
      to: data.email,
      subject: 'Thank you for contacting DevLogic',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${safeName},</p>
        <p>I've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Igor @ DevLogic</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
