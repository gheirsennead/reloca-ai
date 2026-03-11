import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// Capture quiz lead email + answers before showing results
// This feeds the email drip sequence (Resend integration TBD)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, answers, topMatches } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Upsert into quiz_leads table
    const { error } = await supabaseAdmin
      .from('quiz_leads')
      .upsert({
        email: cleanEmail,
        quiz_answers: answers || {},
        top_matches: topMatches || [],
        converted_to_paid: false,
        created_at: new Date().toISOString(),
      }, { onConflict: 'email' });

    if (error) {
      console.error('Quiz lead save error:', error);
      // Don't block the user — fall through even on error
    }

    // TODO: Resend email drip integration
    // Day 1: Results + $49 CTA
    // Day 3: Deep dive on #1 match  
    // Day 7: Last chance + $5 off coupon
    //
    // When Resend is configured, add:
    // await resend.emails.send({
    //   from: 'Reloca.ai <hello@reloca.ai>',
    //   to: cleanEmail,
    //   subject: 'Your Relocation Results Are Ready!',
    //   ...
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quiz lead API error:', error);
    return NextResponse.json({ success: true }); // Don't block user
  }
}
