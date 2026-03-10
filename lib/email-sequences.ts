// Post-purchase email sequence definitions
// 5 emails over 14 days after $49 report purchase

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
export const ABANDONED_CART_SEQUENCE: ScheduledEmail[] = [
  // Email 1: 30 minutes — Sneak peek with insights
  {
    dayOffset: 0, // 30 min = ~0 days
    subject: 'Your report is waiting — here\'s a sneak peek of what\'s inside',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>Your personalized relocation report is ready, but you haven't unlocked the full version yet.</p>
<p>Here's a sneak peek of what's waiting for you inside:</p>
<ul>
  <li><strong>Your #1 country match</strong> — We found your perfect fit with detailed visa pathways</li>
  <li><strong>Property insights</strong> — Specific neighborhoods and real price examples in your budget</li>
  <li><strong>Month-by-month timeline</strong> — Exactly what to do and when to make your move</li>
</ul>
<p>The preview shows you the basics, but the full report includes:</p>
<ul>
  <li>Complete tax optimization strategies</li>
  <li>Detailed cost breakdowns with real numbers</li>
  <li>Healthcare and education recommendations</li>
  <li>Safety assessment and cultural integration tips</li>
</ul>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Get Your Full Report — $49</a></p>
<p>Questions about your relocation? Reply to this email.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 2: Day 1 — Personalized visa insight
  {
    dayOffset: 1,
    subject: 'Did you know? Your ideal country has a visa that fits your exact profile',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>I was reviewing your questionnaire responses, and something caught my attention...</p>
<p>Your ideal country match has a residency visa that's <strong>perfect</strong> for your situation. Most people don't know about this pathway.</p>
<p>Here's what makes it special:</p>
<ul>
  <li>Processing time: 2-4 months (faster than most think)</li>
  <li>No minimum investment required</li>
  <li>Renewable indefinitely with a clear path to permanent residency</li>
</ul>
<p>Your full report includes:</p>
<ul>
  <li>Step-by-step visa application process</li>
  <li>Document checklist and timeline</li>
  <li>Real processing experiences from other families</li>
  <li>Common pitfalls and how to avoid them</li>
</ul>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">See Your Visa Pathway — $49</a></p>
<p>Don't let bureaucracy stop your dream. Get the insider knowledge.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 3: Day 3 — Urgency with launch price
  {
    dayOffset: 3,
    subject: 'Limited time: Your $49 launch price won\'t last forever',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>Quick heads up — you're getting our launch pricing at $49.</p>
<p>This is 75% off what a traditional relocation consultant would charge (they typically charge $200-500 for a fraction of what we provide).</p>
<p><strong>Why the low price?</strong> We're in launch mode and building our reputation. Early users get the best deal.</p>
<p>But this won't last. As we grow, pricing will reflect the true value of what you get:</p>
<ul>
  <li>16-section comprehensive analysis</li>
  <li>Real-time data from our expert knowledge base</li>
  <li>Insights from a licensed real estate professional who's relocated internationally</li>
  <li>Personalized recommendations you can't find anywhere else</li>
</ul>
<p>Your report is already generated and waiting. No additional processing time.</p>
<p><a href="${reportUrl}" style="display:inline-block;background:#e53e3e;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Get Your Report — Launch Price $49</a></p>
<p>After 100 more reports, we're moving to $97.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
  // Email 4: Day 7 — Final chance with social proof
  {
    dayOffset: 7,
    subject: 'Last chance: 47 families purchased their report this week',
    buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>This is my final email about your relocation report.</p>
<p>This week alone, 47 families invested in their personalized relocation plan. They're now taking concrete steps toward their move.</p>
<p><strong>Here's what they're saying:</strong></p>
<blockquote style="border-left:3px solid #38b2ac;padding-left:16px;margin:16px 0;font-style:italic;color:#4a5568;">
"The visa section alone saved us months of research. We knew exactly what documents to prepare before we even contacted the consulate."
<br><small>— Sarah M., relocated to Uruguay</small>
</blockquote>
<blockquote style="border-left:3px solid #38b2ac;padding-left:16px;margin:16px 0;font-style:italic;color:#4a5568;">
"The property recommendations were spot-on. We visited the exact neighborhoods mentioned and found our perfect home."
<br><small>— Marcus T., relocated to Portugal</small>
</blockquote>
<p>Your report has been waiting for a week. Either you're serious about relocating, or you're not.</p>
<p>If you are serious:</p>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Get Your Report Now — $49</a></p>
<p>If not, no worries. I'll stop emailing you about it.</p>
<p>Best of luck with your plans.</p>
<p>— The Reloca.ai Team</p>
    `),
  },
];
