import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const { data: existing } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('email', normalizedEmail)
      .single();

    if (existing) {
      // Already exists — that's fine, just acknowledge
      return NextResponse.json({ status: 'subscribed' });
    }

    // Create new user (newsletter subscriber, no questionnaire yet)
    const { error } = await supabaseAdmin
      .from('users')
      .insert({
        email: normalizedEmail,
        questionnaire_completed: false,
        utm_source: 'homepage_email_capture',
      });

    if (error) {
      console.error('Subscribe error:', error);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ status: 'subscribed' });
  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
