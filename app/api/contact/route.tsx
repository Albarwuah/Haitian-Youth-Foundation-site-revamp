import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactConfirmationEmail from '@/components/emails/contact-confirmation';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, message } = await req.json();

    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: 'Message too long' }, { status: 400 });
    }

    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({ firstname, lastname, email, message });

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
    }

    const html = await render(<ContactConfirmationEmail firstname={firstname} />);
    const { error: emailError } = await resend.emails.send({
      from: 'onboarding@resend.dev', // swap to noreply@haitianyouth.org once verified
      to: email,
      subject: 'We received your message — Haitian Youth Foundation',
      html,
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      // Submission is already saved, so don't fail the whole request — just log it
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}