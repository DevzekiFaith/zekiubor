import { Resend } from 'resend'

// NOTE: Resend requires a verified domain for the FROM address.
// Use 'onboarding@resend.dev' for testing, or set FROM_EMAIL to
// a verified domain address (e.g. noreply@zekiubor.com) in production.
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev'

// Email function using Resend
export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured. Email not sent:', { to, subject });
      // In development, we return success: true so the UI can proceed normally
      if (process.env.NODE_ENV === 'development') {
        console.log('DEV MODE: Simulating successful email delivery.');
        return { success: true, data: { devMode: true } };
      }
      return { success: false, error: 'Email service not configured - missing RESEND_API_KEY' };
    }

    const resend = new Resend(resendApiKey)

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [to],
      subject,
      html,
    })

    if (error) {
      console.error('Resend API error:', error)
      return { success: false, error: error.message || 'Resend API error' }
    }

    console.log('Email sent successfully:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}






