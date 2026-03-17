// Post-purchase email sequence definitions
// 5 emails over 14 days after $29 report purchase

export interface ScheduledEmail {
  dayOffset: number;
  subject: string;
  buildHtml: (firstName: string, reportUrl: string) => string;
}

const UTM_REPORT = '?utm_source=relocaai&utm_medium=email&utm_campaign=post_purchase';

function wrap(body: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a365d;line-height:1.7;">
${body}
<hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0 16px;">
<p style="font-size:12px;color:#718096;">Reloca.ai — AI-powered relocation intelligence</p>
</body></html>`;
}

export const POST_PURCHASE_SEQUENCE: ScheduledEmail[] = [
  // Email 1: Day 0 — Report delivery, NO pitch
  {
    dayOffset: 0,
    subject: 'Your Relocation Report is Ready 🎉',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>Your personalized relocation report is ready. Here's what to do next:</p>
<ol>
  <li>Read your top country matches (Sections 1-3)</li>
  <li>Review the visa options for your situation (Section 4)</li>
  <li>Check the cost breakdown (Sections 5-6)</li>
  <li>Share the PDF with your partner/family</li>
</ol>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">View Your Report</a></p>
<p>Questions? Reply to this email.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 2: Day 3 — Educational value, no pitch
  {
    dayOffset: 3,
    subject: '3 things most people miss when planning an international move',
    buildHtml: (firstName, _reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>After helping hundreds of families plan their move, here are the 3 mistakes we see most often:</p>
<h3 style="color:#38b2ac;">1. Underestimating visa timelines</h3>
<p>Most visa processes take 2-6 months. Start early — especially for Brazil and Argentina. Your report's Section 4 has the exact timeline for your situation.</p>
<h3 style="color:#38b2ac;">2. Skipping the banking setup</h3>
<p>Opening a local bank account before you arrive saves weeks of frustration. Some countries (like Paraguay) let you do this remotely. Others require in-person visits with specific documents.</p>
<h3 style="color:#38b2ac;">3. Missing school enrollment deadlines</h3>
<p>If you have kids, international schools often have enrollment windows 6-12 months ahead. Don't assume you can register on arrival.</p>
<p>Your report covers all of this in detail — check Sections 3, 8, and 12.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 3: Day 5 — Engagement / deeper value
  {
    dayOffset: 5,
    subject: 'Go deeper: compare your top countries side by side',
    buildHtml: (firstName, _reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>You've got your report — you know WHERE to go and WHAT it costs.</p>
<p>But here's what many of our users tell us: the hardest part isn't picking a country — it's comparing the details side by side.</p>
<p>That's why we're building <strong>Reloca Pro</strong> — premium features for serious relocators:</p>
<ul>
  <li>Side-by-side country comparisons</li>
  <li>Monthly data refresh alerts</li>
  <li>Visa timeline tracker</li>
  <li>Cost of living calculator for your specific situation</li>
</ul>
<p>Want early access when it launches? Just reply to this email and we'll add you to the list.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 4: Day 9 — Social proof
  {
    dayOffset: 9,
    subject: 'Families are making their move',
    buildHtml: (firstName, _reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>Quick update from the Reloca.ai community:</p>
<ul>
  <li><strong>Brazil</strong> continues to be the #1 destination for relocating families</li>
  <li><strong>Paraguay</strong> is surging in popularity — thanks to its 0% foreign income tax</li>
  <li><strong>Uruguay</strong> remains the top pick for safety-focused families</li>
</ul>
<p>Many of our users are already planning their move. We're building premium tools to help with the next steps — country comparisons, visa trackers, and ongoing monitoring.</p>
<p>Your report is still waiting for you if you want to revisit it. The data stays fresh.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 5: Day 14 — Reloca Pro pitch
  {
    dayOffset: 14,
    subject: 'Your report is 2 weeks old — things have changed',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>Two weeks ago you got your <a href="${reportUrl}" style="color:#38b2ac;">relocation report</a>. Since then:</p>
<ul>
  <li>Visa rules may have shifted</li>
  <li>Property prices have moved</li>
  <li>Cost of living data has been updated</li>
</ul>
<p>Your report is a snapshot. <strong>Reloca Pro keeps it alive.</strong></p>
<p>For <strong style="color:#38b2ac;">$29/month</strong>, you get:</p>
<ul>
  <li>Monthly updated reports reflecting the latest data</li>
  <li>Market alerts for your top countries</li>
  <li>Priority support from our team</li>
</ul>
<p>Cancel anytime. No commitment.</p>
<p><a href="${reportUrl.split('/report')[0]}/dashboard" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Stay Updated with Reloca Pro — $29/mo</a></p>
<p>Still just researching? No worries. Your report is always available at the link above.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
];

// Abandoned cart email sequence for non-paying users who completed quiz but didn't buy
// Nurture sequence — educate first, sell gently
// NOTE: Exclude test email vitagreg@gmail.com from this sequence
export const ABANDONED_CART_SEQUENCE: ScheduledEmail[] = [
  // Email 1: 30 min after quiz — Sneak peek of what's inside (soft tone)
  {
    dayOffset: 0, // scheduled_at is set to +30 min explicitly in the API
    subject: 'A peek inside your relocation report 👀',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName || 'there'},</h2>
<p>You just finished your relocation assessment — great work. That's the hardest part.</p>
<p>Your personalized report has been prepared based on your answers. Here's a glimpse of what's inside:</p>
<ul>
  <li>🌍 <strong>Your #1 country match</strong> — with the specific visa pathway that fits your profile</li>
  <li>💰 <strong>Real cost estimates</strong> — what your life would actually cost there, month by month</li>
  <li>🗓️ <strong>A timeline</strong> — what to do in the next 30, 60, and 90 days to make it real</li>
</ul>
<p>The free preview gives you the basics. The full report — all 16 sections — unlocks the complete picture for $29.</p>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">See Your Report →</a></p>
<p style="font-size:12px;color:#718096;margin-top:16px;">🛡️ 30-day money-back guarantee — no questions asked.</p>
<p>Take your time. We'll be here.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 2: Day 1 — Educational value, NOT a hard sell
  {
    dayOffset: 1,
    subject: 'How families actually pull off an international move',
    buildHtml: (firstName, _reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName || 'there'},</h2>
<p>Relocating internationally can feel overwhelming. But the families who do it successfully usually follow the same playbook:</p>
<h3 style="color:#38b2ac;">Step 1: Pick the right country (not just the prettiest)</h3>
<p>Most people pick based on lifestyle — beaches, culture, weather. But the families who thrive abroad also factor in visa feasibility, tax implications, healthcare access, and cost of living relative to their income. Your report does this analysis for you.</p>
<h3 style="color:#38b2ac;">Step 2: Understand the visa timeline BEFORE you commit</h3>
<p>Visa processing times range from 1 month (Paraguay) to 12+ months (Portugal NHR). Getting this wrong can derail your whole plan. Most people only discover this after they've already given notice at their job.</p>
<h3 style="color:#38b2ac;">Step 3: Build your financial runway</h3>
<p>The first 3-6 months abroad are expensive. Setup costs — banking, housing deposits, school registration, legal fees — can add up to $5,000–$15,000 before you've settled in. Planning for this changes everything.</p>
<p>These are the kinds of details your report covers — specific to your situation, not generic advice.</p>
<p>No pressure. Just wanted to share something useful today.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 3: Day 3 — Social proof + $29 value prop
  {
    dayOffset: 3,
    subject: 'What families are saying about their Reloca reports',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName || 'there'},</h2>
<p>We thought you'd like to hear from some of the families who've used Reloca to plan their moves:</p>
<blockquote style="border-left:3px solid #38b2ac;padding-left:16px;margin:16px 0;font-style:italic;color:#4a5568;">
"$29 versus the months I spent researching all of this by hand. The visa section alone saved us so much time."
<br><small>— Hispanic Nomad, <a href="https://x.com/hispanicnomad" style="color:#38b2ac;">@hispanicnomad</a></small>
</blockquote>
<blockquote style="border-left:3px solid #38b2ac;padding-left:16px;margin:16px 0;font-style:italic;color:#4a5568;">
"The tax section alone saved me more than $10K. I had no idea about the NHR program."
<br><small>— Marcus T., London → Spain</small>
</blockquote>
<blockquote style="border-left:3px solid #38b2ac;padding-left:16px;margin:16px 0;font-style:italic;color:#4a5568;">
"We were deciding between 5 countries for retirement. Reloca narrowed it down to 3 with real data. We booked our scouting trip the next week."
<br><small>— David & Linda R., Canada → Ecuador</small>
</blockquote>
<p>Your report is already built and waiting. For $29, you get 16 sections of personalized relocation intelligence — the kind of analysis that used to cost $2,000+ with a relocation consultant.</p>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Unlock Your Full Report — $29 →</a></p>
<p style="font-size:12px;color:#718096;margin-top:16px;">🛡️ 30-day money-back guarantee. If you're not happy with your report, we'll refund you. No questions asked.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 4: Day 7 — Final gentle reminder, then silence
  {
    dayOffset: 7,
    subject: 'Your report is still here — just wanted you to know',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName || 'there'},</h2>
<p>This is the last time I'll mention your relocation report. I don't believe in pestering people.</p>
<p>If the timing isn't right — totally fine. Relocation planning happens on your schedule, not ours.</p>
<p>If you're still thinking about it: your report is ready, it's $29, and it comes with a 30-day money-back guarantee. No risk.</p>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">View Your Report →</a></p>
<p>Whatever you decide — good luck with your plans. Moving abroad is one of the most rewarding decisions a family can make. We hope to help you get there.</p>
<p>— The Reloca.ai Team</p>
<p style="font-size:12px;color:#718096;margin-top:24px;">You won't receive any more emails about this report after today.</p>
    `),
  },
];
