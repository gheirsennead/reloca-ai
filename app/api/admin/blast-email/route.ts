import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabase';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '10f34574c2510a38ae6caad89e45a7f5';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reloca.ai';
const EXCLUDED_EMAILS = ['vitagreg@gmail.com'];

function isAuthorized(request: NextRequest): boolean {
  const adminPass = request.headers.get('x-admin-password');
  if (adminPass === ADMIN_PASSWORD) return true;
  if (ADMIN_API_KEY) {
    const apiKey = request.headers.get('x-api-key') || new URL(request.url).searchParams.get('key');
    if (apiKey === ADMIN_API_KEY) return true;
  }
  return false;
}

function buildBlastEmail(name: string, country: string, score: number, daysAgo: number, reportUrl: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a365d;line-height:1.7;">

<h2 style="color:#1a365d;">Hi ${name},</h2>

<p>You took our relocation quiz ${daysAgo === 0 ? 'today' : daysAgo === 1 ? 'yesterday' : `${daysAgo} days ago`} and your results are still waiting.</p>

<p>We're running a <strong>21-day Launch Special</strong>: share your match card with a friend and get your full report for just <strong>$29</strong> (normally $49).</p>

<div style="background:#f0fdf4;border:2px solid #22c55e;border-radius:12px;padding:20px;text-align:center;margin:24px 0;">
  <p style="font-size:14px;color:#166534;margin:0 0 8px;">Your #1 Match</p>
  <p style="font-size:28px;font-weight:bold;color:#1a365d;margin:0;">${country}</p>
  <p style="font-size:18px;color:#38b2ac;margin:4px 0 0;font-weight:bold;">${score}% compatibility</p>
</div>

<p>Your full report includes:</p>
<ul style="padding-left:20px;">
  <li>→ Visa pathways for YOUR situation</li>
  <li>→ Tax optimization strategy</li>
  <li>→ Cost of living breakdown</li>
  <li>→ Property market analysis</li>
  <li>→ 12 more personalized sections</li>
</ul>

<p style="text-align:center;margin:32px 0;">
  <a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:16px;">🚀 Claim Your Launch Special →</a>
</p>

<p style="text-align:center;color:#dc2626;font-weight:600;font-size:14px;">This offer ends April 5.</p>

<p>— Gregory, Founder of Reloca.ai</p>

<hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0 16px;">
<p style="font-size:11px;color:#a0aec0;text-align:center;">
  Reloca.ai — AI-powered relocation intelligence<br>
  <a href="${SITE_URL}/unsubscribe" style="color:#a0aec0;">Unsubscribe</a>
</p>
</body></html>`;
}

function formatCountryName(country: string): string {
  const map: Record<string, string> = {
    uae: 'UAE', usa: 'USA', 'el salvador': 'El Salvador', 'costa rica': 'Costa Rica',
  };
  const lower = country.toLowerCase();
  if (map[lower]) return map[lower];
  return country.replace(/\b\w/g, c => c.toUpperCase());
}

// GET: Preview — show who would receive the blast (dry run)
export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const candidates = await getCandidates();
  return NextResponse.json({
    total: candidates.length,
    preview: candidates.slice(0, 10).map(c => ({
      email: c.email,
      country: c.country,
      score: c.score,
      days_ago: c.daysAgo,
      report_id: c.reportId,
    })),
    _note: 'POST to send. Pass ?batch=50 to control batch size.',
  });
}

// POST: Send the blast
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const batchSize = parseInt(searchParams.get('batch') || '50');
  const dryRun = searchParams.get('dry') === 'true';

  const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');
  const candidates = await getCandidates();

  if (dryRun) {
    return NextResponse.json({
      dry_run: true,
      would_send: candidates.length,
      batch_size: batchSize,
      batches: Math.ceil(candidates.length / batchSize),
    });
  }

  let sent = 0;
  const errors: string[] = [];
  const batch = candidates.slice(0, batchSize); // Send one batch per call

  for (const c of batch) {
    try {
      const name = c.name || 'there';
      const country = formatCountryName(c.country);
      const reportUrl = `${SITE_URL}/report/${c.reportId}?promo=share`;
      const html = buildBlastEmail(name, country, c.score, c.daysAgo, reportUrl);

      await resend.emails.send({
        from: 'Gregory from Reloca.ai <hello@reloca.ai>',
        to: c.email,
        subject: 'Your relocation report just got 40% cheaper',
        html,
      });

      // Mark as sent in Supabase
      try {
        await supabaseAdmin.from('blast_email_log').insert({
          email: c.email,
          report_id: c.reportId,
          blast_type: 'share_discount_launch_2026_03',
          sent_at: new Date().toISOString(),
        });
      } catch {
        // Table might not exist yet, non-blocking
      }

      sent++;

      // Small delay between sends (100ms)
      await new Promise(r => setTimeout(r, 100));
    } catch (err: any) {
      errors.push(`${c.email}: ${err?.message}`);
    }
  }

  return NextResponse.json({
    sent,
    total_candidates: candidates.length,
    remaining: Math.max(0, candidates.length - batchSize),
    errors: errors.length > 0 ? errors : undefined,
    _note: candidates.length > batchSize ? `Call POST again to send next batch of ${batchSize}` : 'All sent!',
  });
}

async function getCandidates() {
  // Get non-paid users with completed questionnaires
  const { data: users } = await supabaseAdmin
    .from('users')
    .select('id, email, created_at')
    .eq('paid', false)
    .eq('questionnaire_completed', true);

  if (!users?.length) return [];

  // Get their free reports
  const userIds = users.map(u => u.id);
  const { data: reports } = await supabaseAdmin
    .from('reports')
    .select('id, user_id, country_recommendations, created_at')
    .eq('report_type', 'free')
    .in('user_id', userIds);

  if (!reports?.length) return [];

  // Check who already received this blast
  let alreadySent: any[] = [];
  try {
    const { data } = await supabaseAdmin
      .from('blast_email_log')
      .select('email')
      .eq('blast_type', 'share_discount_launch_2026_03');
    alreadySent = data || [];
  } catch {
    // Table might not exist yet
  }

  const sentEmails = new Set((alreadySent || []).map((r: any) => r.email?.toLowerCase()));

  // Build user map
  const userMap = new Map(users.map(u => [u.id, u]));
  const candidates: Array<{
    email: string;
    name: string;
    reportId: string;
    country: string;
    score: number;
    daysAgo: number;
  }> = [];
  const seen = new Set<string>();

  // Sort reports by created_at desc so we get most recent per user
  const sortedReports = [...reports].sort((a, b) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  for (const r of sortedReports) {
    const u = userMap.get(r.user_id);
    if (!u?.email) continue;

    const email = u.email.toLowerCase();
    if (EXCLUDED_EMAILS.includes(email)) continue;
    if (seen.has(email)) continue;
    if (sentEmails.has(email)) continue;
    seen.add(email);

    const recs = (r.country_recommendations || []) as Array<{ country: string; score: number }>;
    const top = [...recs].sort((a, b) => b.score - a.score);
    const country = top[0]?.country || 'Unknown';
    const score = top[0]?.score || 0;

    const created = new Date(r.created_at);
    const daysAgo = Math.floor((Date.now() - created.getTime()) / (1000 * 60 * 60 * 24));

    candidates.push({
      email,
      name: 'there', // No first_name column
      reportId: r.id,
      country,
      score,
      daysAgo,
    });
  }

  return candidates;
}
