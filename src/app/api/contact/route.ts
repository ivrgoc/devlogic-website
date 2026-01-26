import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.service || !data.message) {
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

    // In production, integrate with Resend or other email service
    // For now, log the message and return success
    console.log('Contact form submission:', data);

    // Example Resend integration (uncomment when RESEND_API_KEY is set):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'DevLogic <noreply@devlogic.hr>',
      to: 'info@devlogic.hr',
      subject: `New Contact Form: ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: 'DevLogic <noreply@devlogic.hr>',
      to: data.email,
      subject: 'Thank you for contacting DevLogic',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The DevLogic Team</p>
      `,
    });
    */

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
