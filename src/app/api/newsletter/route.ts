import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send notification to admin
    const emailResult = await sendEmail(
      'unovaconsultingfirstafrica@gmail.com',
      'New Newsletter Subscription',
      `
      <div style="font-family: sans-serif; padding: 20px; line-height: 1.6;">
        <h2 style="color: #0D1B2A;">New Architecture Letter Subscriber</h2>
        <p>A new visionary has joined the list.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> Website Newsletter Form</p>
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
    console.error('Newsletter form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
