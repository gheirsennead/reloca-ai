import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

function getResend() {
  const { Resend } = require('resend');
  return new Resend(process.env.RESEND_API_KEY || 'placeholder');
}

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, country, articleSlug } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }
    if (!firstName || firstName.trim().length === 0) {
      return NextResponse.json({ error: 'First name required' }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const tag = `blog_reader_${(country || 'general').toLowerCase().replace(/\s+/g, '_')}`;

    // Check if user already exists
    const { data: existing } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('email', normalizedEmail)
      .single();

    if (existing) {
      // Already exists — just acknowledge
      return NextResponse.json({ status: 'subscribed' });
    }

    // Create new user with blog reader tag
    const { error: dbError } = await supabaseAdmin
      .from('users')
      .insert({
        email: normalizedEmail,
        questionnaire_completed: false,
        utm_source: `blog_${articleSlug || 'unknown'}`,
      });

    if (dbError) {
      console.error('Blog subscribe DB error:', dbError);
    }

    // Send to Resend with tag
    try {
      const resend = getResend();
      await resend.contacts.create({
        email: normalizedEmail,
        firstName: firstName.trim(),
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID || '',
      });
    } catch (resendErr) {
      // Don't fail the request if Resend errors — email is captured in DB
      console.error('Resend contact creation error:', resendErr);
    }

    return NextResponse.json({ status: 'subscribed', tag });
  } catch (error) {
    console.error('Blog subscribe API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
