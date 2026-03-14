import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { ABANDONED_CART_SEQUENCE } from '@/lib/email-sequences';
import { PORTUGAL_KNOWLEDGE_BASE, formatKnowledgeForPrompt, type KnowledgeBaseEntry } from '@/lib/knowledge-base-schema';

export const maxDuration = 300;

// This endpoint is called by the cron job to process pending reports
// No timeout pressure — full quality KB + live data

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';
const CRECI_LABEL = 'CRECI-licensed real estate agent';

// Structured knowledge base — will grow per country
const STRUCTURED_KB: KnowledgeBaseEntry[] = [
  ...PORTUGAL_KNOWLEDGE_BASE,
  // TODO: Add more countries as knowledge base entries are provided
];

async function getFullKnowledgeBase(matchedCountries?: string[]): Promise<string> {
  // 1. Get existing Supabase KB (founder's experience)
  const { data, error } = await supabaseAdmin
    .from('expert_knowledge')
    .select('category, country, topic, content, is_personal_experience')
    .order('category');

  let founderKb = '';
  if (data?.length) {
    const grouped: Record<string, string[]> = {};
    for (const entry of data) {
      const key = entry.category || 'general';
      if (!grouped[key]) grouped[key] = [];
      const prefix = entry.is_personal_experience ? '[FIRSTHAND EXPERIENCE] ' : '';
      grouped[key].push(`### ${entry.topic}\n${prefix}${entry.content}`);
    }

    founderKb = `\n\nFOUNDER'S EXPERT KNOWLEDGE BASE (${CRECI_LABEL} who relocated his family from Europe (France) to Brazil):\n`;
    for (const [category, entries] of Object.entries(grouped)) {
      founderKb += `\n## ${category.toUpperCase()}\n${entries.join('\n\n')}\n`;
    }
  } else if (error) {
    console.warn('No founder KB entries:', error.message);
  }

  // 2. Get structured KB entries relevant to matched countries
  let structuredKb = '';
  if (matchedCountries?.length) {
    const countryMap: Record<string, string> = {
      'portugal': 'PT', 'spain': 'ES', 'italy': 'IT', 'greece': 'GR',
      'brazil': 'BR', 'argentina': 'AR', 'paraguay': 'PY', 'uruguay': 'UY',
      'panama': 'PA', 'mexico': 'MX', 'costa rica': 'CR', 'colombia': 'CO',
      'uae': 'AE', 'thailand': 'TH', 'malaysia': 'MY', 'singapore': 'SG',
      'malta': 'MT', 'cyprus': 'CY', 'estonia': 'EE', 'andorra': 'AD',
      'el salvador': 'SV', 'chile': 'CL', 'ecuador': 'EC',
    };
    const countryCodes = matchedCountries.map(c => countryMap[c.toLowerCase()]).filter(Boolean);
    const relevantEntries = STRUCTURED_KB.filter(e => countryCodes.includes(e.country));
    if (relevantEntries.length) {
      structuredKb = formatKnowledgeForPrompt(relevantEntries);
    }
  } else {
    // No matched countries yet — include all structured KB
    structuredKb = formatKnowledgeForPrompt(STRUCTURED_KB);
  }

  return founderKb + structuredKb;
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
  return `You are Reloca.ai's Relocation Intelligence Engine. Generate a comprehensive, personalized Strategic Relocation Analysis. We cover 23+ countries across Europe, Asia, Middle East, and Latin America: Portugal, Spain, Italy, Greece, Malta, Cyprus, Estonia, Andorra, Singapore, Dubai (UAE), Thailand, Malaysia, Brazil, Argentina, Chile, Uruguay, Paraguay, Mexico, Panama, Costa Rica, El Salvador, Colombia, Ecuador. Recommend the best matches from ANY of these regions based on the user's profile.

🚨 CRITICAL SCORING RULE: When assigning match percentages to countries, use scores between 50-98% ONLY. Never use scores outside this range. Be consistent - if you write "Argentina (75%)" in section 2, ensure ALL references to Argentina throughout the entire report use exactly 75%. Double-check your scores before finishing.

═══════════════════════════════════════════
8 MANDATORY INTELLIGENCE RULES
═══════════════════════════════════════════

RULE 1 — NAME SPECIFIC PROGRAMS
❌ "Tax incentive programs exist for foreign residents"
✅ "The IFICI regime (replacing NHR as of Jan 2024) offers a 20% flat tax rate for 10 years"
Always name the exact program, law, or regulation. Include the program name, year enacted or updated, and key qualifying criteria.

RULE 2 — INCLUDE EXACT NUMBERS & DEADLINES
❌ "You'll need to show minimum income"
✅ "D7 visa requires proof of €820/month passive income (€9,840/year)"
Every claim MUST have a specific number, date, or percentage. No vague qualifiers like "some," "various," or "significant."

RULE 3 — COMPARE ALTERNATIVES
❌ "Several visa options are available"
✅ "D7 vs Golden Visa vs Digital Nomad Visa: D7 best for passive income (€820/mo, 4-month processing). Golden Visa for investors (€500K fund, 12-18 months). Digital Nomad for high-earners (€3,280/mo, tech sector)."
When multiple options exist, create a clear comparison with criteria, costs, timelines, and best-fit profiles.

RULE 4 — FLAG RECENT CHANGES
❌ "Tax programs have changed recently"
✅ "⚠️ As of January 2024, NHR was replaced by IFICI. Key differences: narrower qualifying activities, pension income now taxed at 10% (was 0%)"
Always specify WHEN a change happened and WHAT specifically changed. Use the ⚠️ marker for changes in the last 12 months.

RULE 5 — ACTIONABLE "DO THIS, NOT THAT"
❌ "Processing times vary by consulate"
✅ "Apply at the Lisbon consulate (6-week average) rather than Porto (12-week backlog as of Q1 2026). Book 3-4 months ahead — slots fill fast."
Every recommendation must be specific enough that the reader can ACT on it today.

RULE 6 — REFERENCE SOURCES
❌ "According to local regulations..."
✅ "According to Portuguese Tax Authority Circular 4/2024 and AIMA guidelines updated January 2026..."
Cite the specific authority, document, or data source. Use the knowledge base sources provided.

RULE 7 — PERSONALIZE TO USER PROFILE
Tailor every section to the user's specific profile from quiz answers:
- Retirees → pension taxation, healthcare access, cost of living on fixed income
- Founders/Entrepreneurs → corporate structures, startup visas, business tax optimization
- Remote Workers → digital nomad visas, coworking, internet quality, time zones
- Families → international schools, safety ratings, pediatric healthcare, child-friendly neighborhoods
- Investors → property ROI, fund options, tax-efficient structures

RULE 8 — PROFESSIONAL RECOMMENDATIONS
❌ "Consider hiring a local attorney"
✅ "Look for attorneys registered with the Portuguese Bar Association (Ordem dos Advogados) specializing in immigration law. Budget €1,500-3,000 for full visa process support."
Name the specific professional body, qualification, and expected cost.

═══════════════════════════════════════════
PREMIUM LANGUAGE FRAMEWORK
═══════════════════════════════════════════

Use premium language throughout — this is a Strategic Analysis, not a blog post:
- "Information" → "Intelligence"
- "Report" → "Strategic Analysis"
- "Tips" → "Insider Strategies"
- "Data" → "Expert Research"
- "Advice" → "Strategic Guidance"
- "Options" → "Pathways"

Section header format — use value positioning:
- "Tax Information for Portugal" → "Portugal Tax Optimization Strategy"
- "Visa Options" → "Visa & Residency Pathways: Strategic Analysis"
- "Cost of Living" → "Cost of Living Intelligence: Real Numbers"
- "Property Guide" → "Property & Real Estate: Market Intelligence"

Value callouts — insert naturally throughout (max 6 total, where they add genuine value):
⭐ **Expert insight**: [Specific detail that saves money or time — must have a real number]
💡 **Pro tip**: [Actionable insider advice from knowledge base]
📊 **Real numbers**: [Actual costs/data, not blog estimates]
⚠️ **Gotcha alert**: [Specific warning with current data]
🎯 **Opportunity**: [Time-sensitive or little-known benefit]
🔒 **Verified intelligence**: Based on our structured knowledge base and official sources

Social proof — use ONLY these approved formulations (NO fake numbers):
✅ "Trusted by expats relocating across 22+ countries"
✅ "Based on verified data from official government sources and our structured knowledge base"
✅ "Insights from our founder's personal relocation experience across Europe and Latin America"
❌ Do NOT fabricate specific numbers of clients, relocations, or savings amounts without real data to back them up

CRITICAL STANDARDS:
- This analysis must be BETTER than what any human relocation consultant could produce
- Every number must be accurate and sourced from the knowledge base or live data provided
- Include specific property examples, visa timelines, real costs
- Be direct, practical, honest — include warnings and reality checks
- If the user specified preferred regions or specific countries of interest, PRIORITIZE those in your analysis. Feature their preferred countries prominently in the top matches, but still include surprising alternatives they may not have considered.
- Never give vague ranges without context (e.g., "property purchase costs" must specify what the costs include: notary fees, transfer tax, legal fees, etc.)
- Distinguish between property PRICES and transaction COSTS (closing costs, taxes, fees)

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

    // Extract country preferences from answers for targeted KB lookup
    const preferredCountries: string[] = [];
    if (answers['14']) preferredCountries.push(...String(answers['14']).split(/[,;]+/).map((s: string) => s.trim().toLowerCase()));
    if (answers['42']) preferredCountries.push(...String(answers['42']).split(/[,;]+/).map((s: string) => s.trim().toLowerCase()));

    // Get FULL knowledge base + live data
    const [kb, liveData] = await Promise.all([
      getFullKnowledgeBase(preferredCountries.length ? preferredCountries : undefined),
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
    // Collect ALL country+score matches from AI output, then dedup and take top 3
    const allMatches = new Map<string, number>(); // country -> highest score found
    
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
      let match;
      while ((match = matchRegex.exec(reportContent)) !== null) {
        const name = match[1].trim().replace(/\*+/g, '');
        const normalizedName = name.toUpperCase();
        const score = parseInt(match[2]);
        if (validCountries.includes(name.toLowerCase())) {
          // Keep the first (highest-context) score found for each country
          if (!allMatches.has(normalizedName)) {
            allMatches.set(normalizedName, score);
          }
        }
      }
    }
    
    // Convert to array, sort by score descending, take top 3
    const countryMatches: Array<{ country: string; score: number }> = 
      Array.from(allMatches.entries())
        .map(([country, score]) => ({ country, score }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

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
      const altMatches = new Map<string, number>();
      for (const country of validCountries) {
        const pattern = new RegExp(`${country}[\\s\\S]{0,50}(\\d{1,3})\\s*%`, 'gi');
        const altMatch = pattern.exec(reportContent);
        if (altMatch && !altMatches.has(country.toUpperCase())) {
          altMatches.set(country.toUpperCase(), parseInt(altMatch[1]));
        }
      }
      // Replace countryMatches with alt results, sorted by score, top 3
      const altArray = Array.from(altMatches.entries())
        .map(([country, score]) => ({ country, score }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      countryMatches.push(...altArray);
      console.log(`Alternate extraction found: ${countryMatches.length} matches`);
    }

    // 6. Validate scores are reasonable (log warnings but don't modify - AI should generate correct range)
    for (const cm of countryMatches) {
      if (cm.score < 50 || cm.score > 98) {
        console.error(`❌ SCORE CONSISTENCY ERROR for ${cm.country}: ${cm.score}% (should be 50-98%)`);
      }
    }
    
    // 7. Already sorted by score descending from extraction step
    
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
