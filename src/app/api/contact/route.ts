import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to administrator
    const emailResult = await sendEmail(
      'lightwavesupport@gmail.com',
      `New Inquiry: ${body.subject || 'No Subject'}`,
      `
      <div style="font-family: sans-serif; padding: 20px; line-height: 1.6;">
        <h2 style="color: #0D1B2A;">New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${body.subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #F5F0E8; padding: 15px; border-radius: 4px;">
          ${message}
        </div>
      </div>
      `
    );

    if (!emailResult.success) {
      console.error('Email service failure:', emailResult.error);
      return NextResponse.json(
        { success: false, error: 'Email service failure', details: emailResult.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
