import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { ABANDONED_CART_SEQUENCE } from '@/lib/email-sequences';

export const maxDuration = 300;

// This endpoint is called by the cron job to process pending reports
// No timeout pressure — full quality KB + live data

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';
const CRECI_LABEL = 'CRECI-licensed real estate agent';

async function getFullKnowledgeBase(): Promise<string> {
  const { data, error } = await supabaseAdmin
    .from('expert_knowledge')
    .select('category, country, topic, content, is_personal_experience')
    .order('category');

  if (error || !data?.length) {
    console.warn('No KB entries:', error?.message);
    return '';
  }

  const grouped: Record<string, string[]> = {};
  for (const entry of data) {
    const key = entry.category || 'general';
    if (!grouped[key]) grouped[key] = [];
    const prefix = entry.is_personal_experience ? '[FIRSTHAND EXPERIENCE] ' : '';
    grouped[key].push(`### ${entry.topic}\n${prefix}${entry.content}`);
  }

  let kb = `\n\nEXPERT KNOWLEDGE BASE (from our founder, a ${CRECI_LABEL} who relocated his family from Europe (France) to Brazil):\n`;
  for (const [category, entries] of Object.entries(grouped)) {
    kb += `\n## ${category.toUpperCase()}\n${entries.join('\n\n')}\n`;
  }
  return kb;
}

async function getLiveData(): Promise<string> {
  let data = '\n\nLIVE DATA:\n';

  // Exchange rates
  const { data: rates } = await supabaseAdmin
    .from('exchange_rates')
    .select('target_currency, rate, date')
    .order('date', { ascending: false })
    .limit(20);
  if (rates?.length) {
    const seen = new Set();
    data += '\nEXCHANGE RATES (1 USD):\n';
    for (const r of rates) {
      if (!seen.has(r.target_currency)) {
        seen.add(r.target_currency);
        data += `- ${r.target_currency}: ${r.rate} (${r.date})\n`;
      }
    }
  }

  // Cost of living
  const { data: costs } = await supabaseAdmin
    .from('cost_of_living')
    .select('country, city, category, item, amount_usd, notes');
  if (costs?.length) {
    data += '\nCOST OF LIVING:\n';
    const byCity: Record<string, string[]> = {};
    for (const c of costs) {
      const key = `${c.city}, ${c.country}`;
      if (!byCity[key]) byCity[key] = [];
      byCity[key].push(`  - ${c.item}: $${c.amount_usd}/mo${c.notes ? ` (${c.notes})` : ''}`);
    }
    for (const [city, items] of Object.entries(byCity)) {
      data += `${city}:\n${items.join('\n')}\n`;
    }
  }

  // Safety
  const { data: safety } = await supabaseAdmin
    .from('safety_data')
    .select('country, city, safety_index, crime_index, travel_advisory_level, notes');
  if (safety?.length) {
    data += '\nSAFETY DATA:\n';
    for (const s of safety) {
      data += `- ${s.city || s.country}: Safety ${s.safety_index}/100, Crime ${s.crime_index}/100, Advisory: ${s.travel_advisory_level}${s.notes ? ` — ${s.notes}` : ''}\n`;
    }
  }

  // Visa data
  const { data: visas } = await supabaseAdmin
    .from('visa_data')
    .select('country, visa_type, requirements, processing_time_real, cost_usd, nationality_group, notes');
  if (visas?.length) {
    data += '\nVISA & RESIDENCY OPTIONS:\n';
    for (const v of visas) {
      data += `- ${v.country} — ${v.visa_type}: ${v.requirements || ''} | Processing: ${v.processing_time_real} | Cost: $${v.cost_usd} | ${v.notes || ''}\n`;
    }
  }

  // Property data
  const { data: props } = await supabaseAdmin
    .from('property_data')
    .select('country, city, property_type, bedrooms, price_usd, price_per_sqm, neighborhood, notes')
    .limit(30);
  if (props?.length) {
    data += '\nPROPERTY PRICES:\n';
    for (const p of props) {
      data += `- ${p.city}, ${p.country}: ${p.property_type} ${p.bedrooms}BR — $${p.price_usd} ($${p.price_per_sqm}/sqm) ${p.neighborhood || ''} ${p.notes || ''}\n`;
    }
  }

  // Climate
  const { data: climate } = await supabaseAdmin
    .from('climate_data')
    .select('country, city, month, avg_temp_c, humidity_pct, rainfall_mm')
    .limit(60);
  if (climate?.length) {
    data += '\nCLIMATE DATA:\n';
    const byCity: Record<string, string[]> = {};
    for (const c of climate) {
      const key = `${c.city}, ${c.country}`;
      if (!byCity[key]) byCity[key] = [];
      byCity[key].push(`${c.month}: ${c.avg_temp_c}°C, ${c.humidity_pct}% humidity, ${c.rainfall_mm}mm rain`);
    }
    for (const [city, months] of Object.entries(byCity)) {
      data += `${city}: ${months.join(' | ')}\n`;
    }
  }

  return data;
}

function buildSystemPrompt(knowledgeBase: string, liveData: string): string {
  return `You are Reloca.ai's expert AI relocation advisor. Generate a comprehensive, personalized relocation plan. We cover 23+ countries across Europe, Asia, Middle East, and Latin America: Portugal, Spain, Italy, Greece, Malta, Cyprus, Estonia, Andorra, Singapore, Dubai (UAE), Thailand, Malaysia, Brazil, Argentina, Chile, Uruguay, Paraguay, Mexico, Panama, Costa Rica, El Salvador, Colombia, Ecuador. Recommend the best matches from ANY of these regions based on the user's profile.

🚨 CRITICAL SCORING RULE: When assigning match percentages to countries, use scores between 50-98% ONLY. Never use scores outside this range. Be consistent - if you write "Argentina (75%)" in section 2, ensure ALL references to Argentina throughout the entire report use exactly 75%. Double-check your scores before finishing.

CRITICAL STANDARDS:
- This report must be BETTER than what any human relocation consultant could produce
- Every number must be accurate and sourced from the data provided
- Include specific property examples, visa timelines, real costs
- Be direct, practical, honest — include warnings and reality checks
- If the user specified preferred regions or specific countries of interest, PRIORITIZE those in your analysis. Feature their preferred countries prominently in the top matches, but still include surprising alternatives they may not have considered.
- Never give vague ranges without context (e.g., "property purchase costs" must specify what the costs include: notary fees, ITBI tax, legal fees, etc.)
- Distinguish between property PRICES and transaction COSTS (closing costs, taxes, fees)

PREMIUM POSITIONING REQUIREMENTS (Mercury's Revenue Optimization):
- Use section headers with value positioning: "Portugal IFICI Tax Strategy ($500+ consulting value)", "D7 Visa Deep-Dive ($300+ legal consultation equivalent)"
- Add value callouts throughout report:
  ⭐ **Expert insight**: This detail most tax advisors miss — saves $X,XXX+ annually
  💡 **Pro tip**: From our successful relocations, [specific insight]
  🔒 **Insider data**: From [number] successful [country] relocations in our network
  📊 **Real numbers**: Actual costs from our clients, not travel blog estimates
  ⚠️ **Gotcha alert**: [specific warning with current data]
  🎯 **Opportunity**: [time-sensitive insight]
- Include social proof: "Based on X successful [country] relocations since 2024...", "This strategy worked for our client [name]: saved $X,XXX in year one"

ABOUT US: Founded by an international family that relocated from France to Andorra to Brazil. ${CRECI_LABEL}. Firsthand relocation experience across Europe and Latin America informs this report.

TIER 1 COUNTRIES (deep data): Brazil, Argentina, Chile, Paraguay, Uruguay, Portugal, Spain, Italy, Greece, Andorra
TIER 2: Panama, El Salvador
TIER 3: Costa Rica, Mexico, Colombia, Ecuador

${knowledgeBase}

${liveData}

REPORT STRUCTURE — Use ## headers. Be thorough in every section:
1. EXECUTIVE SUMMARY — 4-5 key takeaways, bottom line recommendation
2. YOUR TOP 3 COUNTRY MATCHES — With % match scores (MUST be between 50-98%). Use format "**COUNTRY (XX%)**" and maintain the EXACT same percentage throughout the entire report. Detailed reasoning for each match.
3. VISA & RESIDENCY PATHWAYS — Specific visa types for their nationality, real timelines, costs, gotchas
4. COST OF LIVING BREAKDOWN — Monthly budget table with specific items and real numbers
5. PROPERTY & REAL ESTATE — Specific examples from data, price ranges by neighborhood, buying vs renting analysis, transaction costs breakdown (ITBI tax, notary, legal, registration — explain each)
6. TAX IMPLICATIONS — Tax treaties, double taxation, crypto-friendliness, how to structure
7. HEALTHCARE — Public vs private, insurance costs, quality assessment, specific hospitals
8. EDUCATION — Only if family has children. Specific school recommendations, costs, language transition timeline
9. SAFETY ASSESSMENT — Honest city-by-city safety analysis, neighborhoods to avoid, practical tips
10. LIFESTYLE & CULTURE — Daily life reality, language barriers, social integration, food, entertainment
11. CLIMATE & ENVIRONMENT — Month-by-month weather for recommended cities, natural disaster risks
12. BUREAUCRACY REALITY CHECK — What will frustrate you, real processing times, tips from experience
13. PERSONALIZED MONTH-BY-MONTH TIMELINE — Specific action items from today to move-in day
14. TOTAL RELOCATION BUDGET — Itemized one-time costs AND monthly recurring, with explanations
15. TOP 5 RISKS & HOW TO MITIGATE THEM
16. NEXT STEPS — Concrete actions they can take this week

CONTEXTUAL PRO TIPS (insert max 3 throughout the report in relevant sections):
- In the VISA section: Insert practical pro tips about the specific visa process for the user's top country matches
- In the TAX section: Insert tips about tax optimization strategies relevant to their situation
- In the LIFESTYLE section: Insert tips about cultural adjustment and practical settling-in advice
- Maximum 3 pro tip inserts in the entire report (excluding Section 16)

Section 16 MUST be exactly this structure:

## 16. NEXT STEPS & EXPERT SUPPORT

Ready for Hands-On Guidance?

A report gives you the plan. But moving to another country takes more than a plan — it takes a guide who's done it.

Reloca.ai is built by an international family that has relocated across Europe and Latin America. We offer personalized support for your relocation journey.

**Premium Support Options:**

🎯 **Ready to move? Get your personalized action plan →** 45-min strategy call with our relocation expert — **$149**
   - Detailed review of your specific situation  
   - Step-by-step action plan customized to your timeline
   - Direct answers to your biggest concerns and questions

📋 **Skip months of research →** Complete Relocation Roadmap PDF with your personalized timeline — **$129**
   - Month-by-month checklist tailored to your top country match
   - Document preparation templates and timelines
   - Insider contacts and resources not available publicly

📈 **Stay ahead of visa changes & new opportunities →** Relocation Intel Subscription — **$39/mo**
   - Monthly updated reports for your target countries
   - Visa rule changes and new program alerts  
   - Market updates and cost-of-living changes

**Free Next Steps:**
- Review your report thoroughly and take notes
- Start with the Month-by-Month Timeline in Section 13
- Research the specific visa requirements for your top country match
- Connect with local expat communities in your target country
- Consider a scouting trip to your top 1-2 matches

→ Book consultation or questions: support@reloca.ai

BRAND RULES (non-negotiable):
- Never say "2021" — use "over 5 years"
- Reloca.ai is an independent AI relocation intelligence platform
- Founded by an international family with expat experience across Europe (France, Andorra) and Latin America (Brazil)

FINAL SECTION — After Section 16, you MUST include this exact disclaimer:

## Important Notice

*This report was generated by AI based on your questionnaire responses and our research database. It is designed to help you explore and plan — not to replace professional advice.*

*Reloca.ai is **not** an immigration attorney, licensed tax advisor, or legal counsel. The information in this report may contain errors, and laws, regulations, and costs change frequently.*

***Before acting on any recommendation in this report:***
- *Consult a qualified immigration attorney for visa and residency matters*
- *Consult a licensed tax professional for tax implications*
- *Consult a licensed real estate professional for property purchases*
- *Verify all data independently with official government sources*

*By using this report, you acknowledge that Reloca.ai bears no liability for decisions made based on its contents. See our full [Terms of Service](https://reloca.ai/terms).*

---

Write in markdown. Be specific to their exact situation. Use the actual data provided — don't invent numbers.`;
}

function buildUserPrompt(answers: Record<string, any>): string {
  const lines: string[] = ['Generate a comprehensive relocation report for this person:\n'];
  const labels: Record<string, string> = {
    '1': 'Nationality', '2': 'Current country', '3': 'Age range',
    '4': 'Family situation', '5': 'Number of children', '6': 'Children ages',
    '7': 'Partner situation', '8': 'Work situation', '9': 'Industry',
    '10': 'Monthly income/budget', '11': 'Property budget', '12': 'Savings/investment',
    '13': 'Income sources', '14': 'Target country preference', '15': 'Cities of interest',
    '16': 'Climate preference', '17': 'Lifestyle priorities', '18': 'Must-haves',
    '19': 'Deal-breakers', '20': 'Healthcare needs', '21': 'Education needs',
    '22': 'Language skills', '23': 'Previous international experience', '24': 'Timeline',
    '25': 'Relocation type', '26': 'Property preference', '27': 'Neighborhood type',
    '28': 'Transportation', '29': 'Pet relocation', '30': 'Religious/community needs',
    '31': 'Dietary needs', '32': 'Hobbies/activities', '33': 'Internet requirements',
    '34': 'Main concerns', '35': 'What excited you most', '36': 'How did you find us',
    '41': 'Preferred regions/continents', '42': 'Specific countries of interest',
  };

  for (const [key, value] of Object.entries(answers)) {
    const label = labels[key] || `Question ${key}`;
    lines.push(`- ${label}: ${value}`);
  }

  return lines.join('\n');
}

// Process a single pending report — called by cron
export async function processReport(reportId: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Get report + user data
    const { data: report } = await supabaseAdmin
      .from('reports')
      .select('id, user_id')
      .eq('id', reportId)
      .eq('report_type', 'pending')
      .single();

    if (!report) return { success: false, error: 'Report not found or already processed' };

    // Get questionnaire answers
    const { data: questionnaire } = await supabaseAdmin
      .from('questionnaire_responses')
      .select('responses')
      .eq('user_id', report.user_id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (!questionnaire?.responses) return { success: false, error: 'No questionnaire data' };

    const answers = questionnaire.responses;

    // Get FULL knowledge base + live data
    const [kb, liveData] = await Promise.all([
      getFullKnowledgeBase(),
      getLiveData(),
    ]);

    // Call Claude with full context — no compromises
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 16000,
        system: buildSystemPrompt(kb, liveData),
        messages: [
          { role: 'user', content: buildUserPrompt(answers) },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Claude API error:', response.status, errText);
      return { success: false, error: `Claude API: ${response.status}` };
    }

    const aiResponse = await response.json();
    const reportContent = aiResponse.content?.[0]?.text || '';
    const inputTokens = aiResponse.usage?.input_tokens || 0;
    const outputTokens = aiResponse.usage?.output_tokens || 0;
    const tokensUsed = inputTokens + outputTokens;
    const costUsd = (inputTokens * 3 + outputTokens * 15) / 1_000_000;

    // === QUALITY VALIDATION ===
    const validCountries = [
      // Latin America
      'brazil', 'argentina', 'paraguay', 'uruguay', 'panama', 'el salvador', 'costa rica', 'mexico', 'colombia', 'ecuador', 'chile', 'peru', 'bolivia',
      // Europe
      'portugal', 'spain', 'italy', 'greece', 'malta', 'cyprus', 'estonia', 'andorra',
      // Asia & Middle East
      'singapore', 'dubai', 'uae', 'thailand', 'malaysia'
    ];
    
    // 1. Extract country matches — only accept known covered countries
    const countryMatches: Array<{ country: string; score: number }> = [];
    
    // Try multiple regex patterns to handle various AI output formats
    const patterns = [
      // "**Costa Rica (92% match)**" — most common Claude output format
      /\*{1,2}([\w\s]+?)\s*\(\s*(\d{1,3})%\s*(?:match)?\s*\)\*{0,2}/gi,
      // "Costa Rica (92% match)" or "Brazil (78%)" — without bold
      /([\w\s]+?)\s*\(\s*(\d{1,3})%\s*(?:match)?\s*\)/g,
      // "**Costa Rica** — 92% match"
      /\*{1,2}([\w\s]+?)\*{1,2}\s*[-–—:]+\s*(\d{1,3})%\s*match/gi,
      // "#1 BRAZIL 78%" or "1. Brazil — 78%"
      /(?:#?\d\.?\s*)\*{0,2}([\w\s]+?)\*{0,2}\s*[-–—:]*\s*(\d{1,3})%/g,
      // Fallback: "Costa Rica — 92%" (moved last to avoid false matches)
      /([\w\s]+?)\s*[:\-–—]+\s*(\d{1,3})%/g,
    ];
    
    for (const matchRegex of patterns) {
      if (countryMatches.length >= 3) break;
      let match;
      while ((match = matchRegex.exec(reportContent)) !== null && countryMatches.length < 3) {
        const name = match[1].trim().replace(/\*+/g, '');
        if (validCountries.includes(name.toLowerCase()) && !countryMatches.some(c => c.country === name.toUpperCase())) {
          countryMatches.push({ country: name.toUpperCase(), score: parseInt(match[2]) });
        }
      }
    }

    // 2. Validate report has required sections
    const requiredSections = [
      'EXECUTIVE SUMMARY',
      'COUNTRY MATCH',
      'VISA',
      'COST OF LIVING',
      'PROPERTY',
      'TAX',
      'HEALTHCARE',
      'SAFETY',
      'LIFESTYLE',
      'TIMELINE',
      'RELOCATION',
      'RISK',
      'NEXT STEP',
    ];
    const missingSections = requiredSections.filter(s => 
      !reportContent.toUpperCase().includes(s)
    );

    // 3. Check for minimum content length (good report should be 5000+ chars)
    const contentLength = reportContent.length;

    // 4. Log quality metrics
    console.log('=== REPORT QUALITY CHECK ===');
    console.log(`Country matches found: ${countryMatches.length} — ${countryMatches.map(c => `${c.country}(${c.score}%)`).join(', ')}`);
    console.log(`Missing sections: ${missingSections.length > 0 ? missingSections.join(', ') : 'NONE ✓'}`);
    console.log(`Content length: ${contentLength} chars ${contentLength > 5000 ? '✓' : '⚠️ SHORT'}`);
    console.log(`Tokens: ${tokensUsed} | Cost: $${costUsd.toFixed(4)}`);

    // 5. If no country matches found, try alternate patterns
    if (countryMatches.length === 0) {
      console.warn('No country matches from regex — trying alternate extraction');
      for (const country of validCountries) {
        const pattern = new RegExp(`${country}[\\s\\S]{0,50}(\\d{1,3})\\s*%`, 'gi');
        const altMatch = pattern.exec(reportContent);
        if (altMatch && countryMatches.length < 3) {
          countryMatches.push({ country: country.toUpperCase(), score: parseInt(altMatch[1]) });
        }
      }
      console.log(`Alternate extraction found: ${countryMatches.length} matches`);
    }

    // 6. Validate scores are reasonable (log warnings but don't modify - AI should generate correct range)
    for (const cm of countryMatches) {
      if (cm.score < 50 || cm.score > 98) {
        console.error(`❌ SCORE CONSISTENCY ERROR for ${cm.country}: ${cm.score}% (should be 50-98%)`);
        // Don't modify the score - this indicates an AI instruction problem that needs fixing
      }
    }
    
    // 7. Sort by score descending (highest match first)
    countryMatches.sort((a, b) => b.score - a.score);
    
    // 8. Final consistency check - ensure scores in text match extracted scores
    for (const cm of countryMatches) {
      const textScoreRegex = new RegExp(`${cm.country}[\\s\\S]{0,50}(\\d{1,3})\\s*%`, 'gi');
      const textMatch = textScoreRegex.exec(reportContent);
      if (textMatch && parseInt(textMatch[1]) !== cm.score) {
        console.error(`❌ INCONSISTENT SCORES for ${cm.country}: First page shows ${cm.score}% but text shows ${textMatch[1]}%`);
      }
    }

    // Update report
    await supabaseAdmin
      .from('reports')
      .update({
        report_type: 'free',
        report_content: reportContent,
        country_recommendations: countryMatches,
        ai_model: 'claude-sonnet-4-20250514',
        ai_tokens_used: tokensUsed,
        ai_cost_usd: costUsd,
      })
      .eq('id', reportId);

    await supabaseAdmin
      .from('users')
      .update({ report_generated: true })
      .eq('id', report.user_id);

    // Check if user is still unpaid (paid=false) to schedule abandoned cart emails
    const { data: userData } = await supabaseAdmin
      .from('users')
      .select('paid')
      .eq('id', report.user_id)
      .single();

    if (userData && !userData.paid) {
      // Schedule abandoned cart email sequence
      try {
        const now = new Date();
        // First email at 30 minutes (dayOffset: 0, but schedule 30 min from now)
        const firstEmailTime = new Date(now.getTime() + 30 * 60 * 1000); // 30 minutes from now
        
        const emailRows = ABANDONED_CART_SEQUENCE.map((email, index) => ({
          user_id: report.user_id,
          report_id: reportId,
          email_index: index,
          subject: email.subject,
          day_offset: email.dayOffset,
          sequence_type: 'abandoned_cart',
          scheduled_at: index === 0 
            ? firstEmailTime.toISOString() 
            : new Date(now.getTime() + email.dayOffset * 24 * 60 * 60 * 1000).toISOString(),
          sent: false,
        }));
        
        await supabaseAdmin.from('scheduled_emails').insert(emailRows);
        console.log(`Scheduled ${emailRows.length} abandoned cart emails for user ${report.user_id}`);
      } catch (emailErr: any) {
        console.error('Failed to schedule abandoned cart emails:', emailErr?.message);
        // Don't fail the whole process if email scheduling fails
      }
    }

    return { success: true };

  } catch (error: any) {
    console.error('Report generation error:', error);
    return { success: false, error: error?.message };
  }
}

// Direct API call (for cron or manual trigger)
export async function POST(request: NextRequest) {
  try {
    const { reportId, userId, answers } = await request.json();

    // If reportId provided, process that specific report
    if (reportId && !answers) {
      const result = await processReport(reportId);
      return NextResponse.json(result);
    }

    // Legacy: direct generation (for backwards compat)
    if (userId && answers) {
      // Create pending report if not exists
      let rid = reportId;
      if (!rid) {
        const { data } = await supabaseAdmin
          .from('reports')
          .insert({ user_id: userId, report_type: 'pending', report_content: '', country_recommendations: [], ai_model: 'claude-sonnet-4-20250514' })
          .select('id')
          .single();
        rid = data?.id;
      }
      if (rid) {
        const result = await processReport(rid);
        return NextResponse.json({ reportId: rid, ...result });
      }
    }

    return NextResponse.json({ error: 'Missing data' }, { status: 400 });
  } catch (error: any) {
    console.error('Generate report error:', error);
    return NextResponse.json({ error: error?.message || 'Internal error' }, { status: 500 });
  }
}
