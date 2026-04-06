import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { ABANDONED_CART_SEQUENCE } from '@/lib/email-sequences';
import { detectLanguage } from '@/lib/language-detection';

const TEST_EMAILS_EXCLUDE = ['vitagreg@gmail.com'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, answers, skipped } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Detect user language from email and headers
    const acceptLanguage = request.headers.get('accept-language') || '';
    const userAgent = request.headers.get('user-agent') || '';
    const detectedLanguage = detectLanguage({ 
      email, 
      acceptLanguage, 
      userAgent 
    });

    // 1. Upsert user
    const { data: existingUser } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single();

    let userId: string;

    if (existingUser) {
      userId = existingUser.id;
      await supabaseAdmin
        .from('users')
        .update({ 
          questionnaire_completed: true,
          language: detectedLanguage
        })
        .eq('id', userId);
    } else {
      const { data: newUser, error: userError } = await supabaseAdmin
        .from('users')
        .insert({
          email: email.toLowerCase().trim(),
          questionnaire_completed: true,
          language: detectedLanguage,
          utm_source: body.utm_source || null,
          utm_medium: body.utm_medium || null,
          utm_campaign: body.utm_campaign || null,
        })
        .select('id')
        .single();

      if (userError || !newUser) {
        console.error('User creation error:', userError);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
      }
      userId = newUser.id;
    }

    // 2. Save questionnaire responses
    const questionsAnswered = Object.keys(answers).length;
    const questionsSkipped = skipped?.length || 0;

    const { error: qError } = await supabaseAdmin
      .from('questionnaire_responses')
      .insert({
        user_id: userId,
        responses: answers,
        nationality: answers['1'] || answers[1] || null,
        current_country: answers['2'] || answers[2] || null,
        family_type: answers['4'] || answers[4] || null,
        work_situation: answers['8'] || answers[8] || null,
        income_range: answers['10'] || answers[10] || null,
        property_budget: answers['11'] || answers[11] || null,
        target_country: answers['14'] || answers[14] || null,
        climate_preference: answers['16'] || answers[16] || null,
        timeline: answers['24'] || answers[24] || null,
        referral_source: answers['36'] || answers[36] || null,
        questions_answered: questionsAnswered,
        questions_skipped: questionsSkipped,
      });

    if (qError) {
      console.error('Questionnaire save error:', qError);
      return NextResponse.json({ error: 'Failed to save responses' }, { status: 500 });
    }

    // 2b. Auto-log uncovered country requests
    const targetCountry = answers['14'] || answers[14] || null;
    if (targetCountry && targetCountry !== 'exploring' && targetCountry !== 'no-idea') {
      const COVERED = ['argentina', 'brazil', 'paraguay', 'uruguay', 'panama', 'el salvador'];
      if (!COVERED.includes(targetCountry.toLowerCase())) {
        // Log to country_requests for demand tracking
        try {
          await supabaseAdmin.from('country_requests').insert({
            user_id: userId,
            email: email.toLowerCase().trim(),
            country: targetCountry,
          });
        } catch { /* non-blocking */ }
      }
    }

    // 3. Create a placeholder report so we have an ID to redirect to
    const { data: report, error: reportError } = await supabaseAdmin
      .from('reports')
      .insert({
        user_id: userId,
        report_type: 'pending',
        report_content: '',
        country_recommendations: [],
        ai_model: 'claude-sonnet-4-20250514',
      })
      .select('id')
      .single();

    if (reportError || !report) {
      console.error('Report placeholder error:', reportError);
      return NextResponse.json({ error: 'Failed to create report' }, { status: 500 });
    }

    // 4. Generate referral code for this user
    let referralCode = '';
    try {
      const { data: existingRef } = await supabaseAdmin
        .from('user_referral_codes')
        .select('referral_code')
        .eq('email', email.toLowerCase().trim())
        .single();
      
      if (existingRef) {
        referralCode = existingRef.referral_code;
      } else {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        referralCode = 'REF-';
        for (let i = 0; i < 5; i++) referralCode += chars.charAt(Math.floor(Math.random() * chars.length));
        
        await supabaseAdmin.from('user_referral_codes').insert({
          email: email.toLowerCase().trim(),
          referral_code: referralCode,
          created_at: new Date().toISOString(),
        });
      }
    } catch { /* non-blocking */ }

    // 5. Schedule abandoned cart nurture email sequence (if user hasn't paid)
    // Excluded: test emails
    const normalizedEmail = email.toLowerCase().trim();
    if (!TEST_EMAILS_EXCLUDE.includes(normalizedEmail)) {
      try {
        const now = new Date();
        // Offsets in milliseconds
        const scheduleOffsets = [
          30 * 60 * 1000,              // Email 1: 30 minutes
          24 * 60 * 60 * 1000,         // Email 2: 24 hours
          3 * 24 * 60 * 60 * 1000,     // Email 3: 3 days
          7 * 24 * 60 * 60 * 1000,     // Email 4: 7 days
        ];

        const emailRows = ABANDONED_CART_SEQUENCE.map((emailDef, index) => ({
          user_id: userId,
          report_id: report.id,
          email_index: index,
          subject: emailDef.subject,
          sequence_type: 'abandoned_cart',
          day_offset: emailDef.dayOffset,
          scheduled_at: new Date(now.getTime() + scheduleOffsets[index]).toISOString(),
          sent: false,
        }));

        await supabaseAdmin.from('scheduled_emails').insert(emailRows);
        console.log(`Scheduled ${emailRows.length} abandoned cart emails for user ${userId}`);
      } catch (emailErr: any) {
        console.error('Failed to schedule abandoned cart emails:', emailErr?.message);
        // Non-blocking — don't fail the request
      }
    }

    return NextResponse.json({
      reportId: report.id,
      userId,
      referralCode,
      status: 'pending',
    });

  } catch (error) {
    console.error('Questionnaire API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
