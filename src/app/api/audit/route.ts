import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email;
    const name = body.name || 'Visionary';
    const company = body.company;
    const role = body.role;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send notification to admin
    const emailResult = await sendEmail(
      'unovaconsultingfirstafrica@gmail.com',
      'New Architecture Audit Request',
      `
      <div style="font-family: sans-serif; padding: 20px; line-height: 1.6;">
        <h2 style="color: #0D1B2A;">Audit Diagnostic Initiated</h2>
        <p>A new visionary has requested an Architecture Audit.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Role:</strong> ${role || 'Not provided'}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #666;">This request was generated via the Architecture Audit form.</p>
      </div>
      `
    );

    if (!emailResult.success) {
      return NextResponse.json({ success: false, error: 'Service failure' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Audit form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
