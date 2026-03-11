import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { reportId, rating, comment, canPublish, displayName } = await req.json();

    if (!reportId || !rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Invalid feedback data' }, { status: 400 });
    }

    // Store feedback
    const { data, error } = await supabase.from('feedback').insert({
      report_id: reportId,
      rating,
      comment: comment || null,
      can_publish: canPublish || false,
      display_name: displayName || null,
    }).select().single();

    if (error) {
      console.error('Feedback insert error:', error);
      return NextResponse.json({ error: 'Failed to save feedback' }, { status: 500 });
    }

    // If rating <= 2, send alert email via Resend
    if (rating <= 2) {
      try {
        const resendKey = process.env.RESEND_API_KEY;
        if (resendKey) {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${resendKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'Reloca.ai <notifications@reloca.ai>',
              to: ['gheirsennead@proton.me'],
              subject: `⚠️ Low Rating (${rating}/5) on Report ${reportId}`,
              html: `
                <h2>Low Feedback Alert</h2>
                <p><strong>Rating:</strong> ${'⭐'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)</p>
                <p><strong>Report ID:</strong> ${reportId}</p>
                <p><strong>Comment:</strong> ${comment || 'No comment provided'}</p>
                <p><strong>Name:</strong> ${displayName || 'Anonymous'}</p>
                <p><a href="https://reloca.ai/report/${reportId}">View Report</a></p>
              `,
            }),
          });
        }
      } catch (emailError) {
        // Non-blocking — log but don't fail the response
        console.error('Failed to send low-rating alert:', emailError);
      }
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Feedback error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// GET: Fetch published feedback for homepage
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('feedback')
      .select('rating, comment, display_name, created_at')
      .eq('can_publish', true)
      .gte('rating', 4)
      .order('created_at', { ascending: false })
      .limit(6);

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch feedback' }, { status: 500 });
    }

    return NextResponse.json({ feedback: data || [] });
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
