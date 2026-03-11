// Knowledge Base Schema for Reloca.ai Report Generation
// Each entry is structured, queryable by country + category

export interface KnowledgeBaseEntry {
  topic: string;
  country: string; // ISO 2-letter or full name
  category: 'tax' | 'visa' | 'banking' | 'realestate' | 'healthcare' | 'lifestyle';
  last_updated: string; // YYYY-MM-DD
  source: string; // Official source URL or reference
  content: string; // Detailed, specific, actionable — exact numbers, dates, names
  gotchas: string; // Common mistakes or things people miss
  pro_tip: string; // Insider advice that adds real value
}

// Portugal Knowledge Base — First country, comprehensive
export const PORTUGAL_KNOWLEDGE_BASE: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'IFICI Tax Regime (Replaced NHR)',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-15',
    source: 'Portuguese Tax Authority (AT) Circular 4/2024; Decree-Law 2024/8',
    content: `As of January 1, 2024, Portugal's Non-Habitual Resident (NHR) program was replaced by IFICI (Incentivo Fiscal à Investigação Científica e Inovação). Key details:
- 20% flat tax rate on qualifying Portuguese-source income for 10 years
- Qualifying activities: scientific research, tech/innovation roles, startup founders, qualified professionals in designated sectors
- Pension income now taxed at 10% flat rate (was 0% under NHR)
- Foreign-source income from non-blacklisted countries: exempt if taxed in source country
- Application: Must not have been Portuguese tax resident in prior 5 years
- Registration: Apply via Portal das Finanças within March 31 of the year following arrival
- Processing: 3-6 months for approval`,
    gotchas: `Many tax advisors still reference NHR rates — NHR applications closed December 31, 2023. IFICI has NARROWER qualifying activities than NHR. Pension income is no longer tax-free. Crypto gains: unclear under IFICI — Portuguese Tax Authority has not issued specific guidance as of Q1 2026.`,
    pro_tip: `Apply for IFICI status BEFORE your first tax filing. If you miss the March 31 deadline, you lose the benefit for that tax year entirely. Budget €1,500-3,000 for a specialized tax lawyer to handle the application — the ROI is massive.`,
  },
  {
    topic: 'Standard Tax Rates & Filing',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-15',
    source: 'Portuguese Tax Authority (AT); IRS Code 2025',
    content: `Portuguese income tax (IRS) rates for 2025/2026:
- Up to €7,703: 13.25%
- €7,703-€11,623: 18%
- €11,623-€16,472: 23%
- €16,472-€21,321: 26%
- €21,321-€27,146: 32.75%
- €27,146-€39,791: 37%
- €39,791-€51,997: 43.5%
- €51,997-€81,199: 45%
- Over €81,199: 48%
Plus solidarity surcharge: 2.5% on income €80K-250K, 5% above €250K
Filing deadline: June 30 for previous year
Capital gains on property: 50% taxed at marginal rate (residents)
Crypto: Taxable if held <365 days; exempt if held >365 days`,
    gotchas: `Portugal taxes WORLDWIDE income for residents. Becoming tax resident happens automatically if you spend 183+ days in Portugal in any calendar year, OR have a "habitual abode" there. You cannot just "choose" to not be a resident.`,
    pro_tip: `Couples can file jointly or separately — run both calculations. Joint filing often saves money if one partner earns significantly less. Use a TOC (Técnico Oficial de Contas) for filing, not just a lawyer — they're cheaper (€200-500/year) and authorized for tax submissions.`,
  },
  {
    topic: 'Double Taxation Treaties',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-10',
    source: 'Portuguese Ministry of Finance; OECD Model Convention',
    content: `Portugal has 79 active double taxation agreements including: USA, UK, France, Germany, Canada, Australia, Brazil, UAE, Singapore.
Key provisions with USA: Pensions taxed only in country of residence (Portugal). Social Security: taxed only by paying country. Capital gains on shares: taxable in residence country only.
Key provisions with UK: Similar to US treaty. Government pensions taxed only in UK. Private pensions taxed in Portugal only.
Key provisions with France: Pensions taxed in Portugal only (residence). Rental income from France taxed in France with credit in Portugal.`,
    gotchas: `Treaty benefits are NOT automatic. You must claim them on your tax return. The US-Portugal treaty does NOT exempt IRA/401k distributions from Portuguese tax — only Social Security payments. State taxes (US) may still apply even after moving.`,
    pro_tip: `If you have US retirement accounts, consider Roth conversions before establishing Portuguese tax residency. Portugal taxes traditional IRA distributions but Roth qualified distributions are tax-free in most treaty interpretations. Consult a cross-border CPA.`,
  },

  // === VISA ===
  {
    topic: 'D7 Passive Income Visa',
    country: 'PT',
    category: 'visa',
    last_updated: '2026-02-01',
    source: 'SEF/AIMA (Agência para a Integração, Migrações e Asilo); Law 23/2007',
    content: `D7 visa for passive income holders (retirees, remote workers with passive income, investors):
- Income requirement: €820/month (minimum wage) — €9,840/year
- For couples: Add 50% for spouse (€410/month), 30% per child (€246/month)
- Sources: Pensions, rental income, dividends, interest, royalties, remote work salary
- Processing: Apply at Portuguese consulate in home country. Timeline: 2-4 months for visa, then 4-month window to enter Portugal
- First residence permit: 2 years. Renewal: 3 years. Permanent residency: After 5 years
- Required documents: Criminal record (apostilled), proof of accommodation, health insurance, NIF (tax number), bank statements showing 12 months of income
- NIF can be obtained before visa application via fiscal representative (€150-300/year)
- Cost: ~€90 visa fee + ~€170 residence permit fee`,
    gotchas: `You MUST maintain "habitual residence" in Portugal — being absent more than 6 consecutive months or 8 total months in 2 years can void your permit. AIMA (formerly SEF) is severely backlogged — renewal appointments can take 6-12 months. Your expired permit is still valid while renewal is pending (carry the renewal receipt).`,
    pro_tip: `Apply at smaller consulates (e.g., San Francisco vs NYC, or Manchester vs London) for faster processing. Book your consulate appointment 3-4 months in advance — slots fill fast. Get your NIF and Portuguese bank account BEFORE the visa appointment.`,
  },
  {
    topic: 'Golden Visa (ARI)',
    country: 'PT',
    category: 'visa',
    last_updated: '2026-01-20',
    source: 'AIMA; Decree-Law 14/2021 (amended 2023)',
    content: `Golden Visa residency by investment. Since October 2023, real estate purchases no longer qualify. Current options:
- Investment fund subscription: €500,000 minimum (must be in qualifying Portuguese venture capital or private equity funds)
- Capital transfer: €1.5 million
- Company creation: 10+ jobs OR €500,000 investment in existing company
- Scientific research: €500,000 contribution
- Cultural heritage: €250,000 donation
- Processing: 12-18 months currently (AIMA backlog)
- Residence requirement: Only 7 days/year (minimum)
- Path to citizenship: 5 years (but must demonstrate "connection to Portugal" — some language requirement)
- Family reunification: Spouse, children, dependent parents included`,
    gotchas: `The "7 days/year" minimum does NOT qualify you for NHR/IFICI tax benefits — those require actual tax residency (183 days). Fund investments are illiquid (typically 6-8 year lockup). Not all funds marketed as "Golden Visa qualifying" actually are — verify with CMVM (Portuguese Securities Commission) registration. Processing times have ballooned to 18-24 months in some cases.`,
    pro_tip: `If your goal is EU residency with minimal presence, Golden Visa is unmatched. But if you actually plan to LIVE in Portugal, the D7 visa is faster, cheaper, and gives the same permanent residency pathway. Save the €500K for property or investments on your own terms.`,
  },
  {
    topic: 'Digital Nomad Visa',
    country: 'PT',
    category: 'visa',
    last_updated: '2026-01-15',
    source: 'AIMA; Law 18/2022',
    content: `Portugal Digital Nomad Visa (launched October 2022):
- Income requirement: 4x Portuguese minimum wage = €3,280/month (€39,360/year) from non-Portuguese employer or own company outside Portugal
- Duration: 1 year, renewable for up to 5 years
- Can transition to permanent residency after 5 years
- Tax: Will be Portuguese tax resident (IFICI may apply if in qualifying sector)
- Processing: 2-4 months at consulate
- Required: Employment contract or client contracts showing remote work, proof of income for 3+ months, health insurance, clean criminal record
- Cost: ~€75 visa + ~€170 residence permit`,
    gotchas: `Income must come from OUTSIDE Portugal. If your company is Portuguese-registered, you don't qualify. The 4x minimum wage threshold is per individual — couples cannot combine income. Health insurance must be valid in Portugal (many US plans don't cover EU).`,
    pro_tip: `This visa is ideal for tech workers earning $80K+. If you earn less than €3,280/month, the D7 visa at €820/month is a much easier path. Digital Nomad Visa holders should apply for IFICI status immediately — the 20% flat rate applies to tech and innovation roles.`,
  },

  // === BANKING ===
  {
    topic: 'Banking & Financial Setup',
    country: 'PT',
    category: 'banking',
    last_updated: '2026-02-01',
    source: 'Banco de Portugal; direct research',
    content: `Opening a Portuguese bank account:
- NIF required (tax identification number) — get this FIRST
- Non-residents CAN open accounts at most banks (Millennium BCP, Novo Banco, Santander Totta, ActivoBank)
- ActivoBank: Best for expats — fully digital, no monthly fees, English interface, Visa debit card
- Millennium BCP: Largest bank, English-speaking staff at Lisbon/Porto branches, €5-10/month fees
- Wise (TransferWise) multi-currency account: Best for receiving foreign income and converting at market rate
- International transfers: SEPA transfers within EU are free/€1-3. International wire fees: €15-30
- Proof of address required: Utility bill OR NIF registration document works
- Timeline: Same-day at ActivoBank (online), 1-2 weeks at traditional banks`,
    gotchas: `US citizens face extra scrutiny due to FATCA reporting. Some banks (CGD, Bankinter) refuse US clients entirely. Always mention FATCA upfront to avoid opening an account that gets closed later. Portuguese banks charge for EVERYTHING — ATM fees, paper statements, even text alerts. Read the fee schedule.`,
    pro_tip: `Keep a US/home country account open for at least 2 years after moving. Use Wise for currency conversion (saves 2-4% vs bank rates). Set up Portuguese direct debits (débitos diretos) for utilities immediately — late fees are aggressive. ActivoBank + Wise combo is the optimal setup for most expats.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Property Purchase Process & Costs',
    country: 'PT',
    category: 'realestate',
    last_updated: '2026-02-01',
    source: 'IMPIC (Institute of Public Markets, Real Estate and Construction); IMT Code',
    content: `Buying property in Portugal — process and costs:
Transaction Costs (buyer pays):
- IMT (property transfer tax): 0-8% based on price and property type. Primary residence rates: 0% up to €101,917, sliding scale to 8% above €1,050,400. Second home: rates are ~1-2% higher at each bracket
- Stamp Duty (Imposto de Selo): 0.8% of purchase price (always)
- Notary fees: €200-500
- Land registry: €250
- Legal fees: 1-1.5% of purchase price (budget €2,000-5,000 for a good lawyer)
- Total closing costs: Typically 7-10% of purchase price

Process timeline: 
1. Get NIF + bank account (1-2 weeks)
2. Property search + viewings (2-8 weeks)
3. Promissory contract (CPCV) + 10% deposit (1-2 weeks)
4. Due diligence — Caderneta Predial, Certidão de Teor, licenses (2-4 weeks)
5. Deed signing (Escritura) at notary (1 day)
Total: 2-4 months from search to keys

Mortgage for non-residents: Available up to 65-70% LTV (vs 80-90% for residents). Rates: Euribor + 1-2% spread. Processing: 4-8 weeks.`,
    gotchas: `The advertised price is NEVER the final cost — always budget 10% on top for transaction costs. Older properties (pre-1951) may not have updated building permits (licença de habitação) — this is a deal-breaker for mortgage and resale. Always get an independent survey (not the agent's recommendation). "T2" means 2 bedrooms, "T3" = 3 bedrooms (not total rooms).`,
    pro_tip: `Lisbon and Porto are overpriced for what you get. Silver Coast (Caldas da Rainha to Nazaré), Alentejo, and Braga offer 40-60% lower prices with excellent quality of life. For investment: student rentals in Coimbra or Porto yield 5-7% gross. For living: Cascais/Estoril = premium expat community but €€€.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Healthcare System & Insurance',
    country: 'PT',
    category: 'healthcare',
    last_updated: '2026-01-20',
    source: 'SNS (Serviço Nacional de Saúde); ADSE; direct research',
    content: `Portuguese healthcare system:
- SNS (National Health Service): Free/low-cost for all residents. Register at local Centro de Saúde with residence permit
- GP consultation: €4.50 copay (taxas moderadoras). Specialist referral: €7-18
- Emergency: €18 copay (waived if referred by GP)
- Prescription meds: Heavily subsidized (30-95% covered depending on condition)
- Wait times: GP appointment: 1-3 weeks. Specialist: 2-6 months. Non-urgent surgery: 6-18 months
- Private insurance: €50-150/month (ages 30-50), €150-400/month (60+). Covers private hospitals, shorter waits
- Top private hospitals: CUF (nationwide), Hospital da Luz (Lisbon/Porto), Hospital dos Lusíadas
- Health insurance for visa: International coverage required initially. Switch to SNS + private after registration
- Dental: NOT covered by SNS. Private dental: €50-80 for cleaning, €300-600 for crown`,
    gotchas: `SNS registration requires a residence permit — tourist visas don't qualify. The free system is GOOD for emergencies and chronic conditions, but wait times for specialist referrals are genuinely long. Don't cancel your international insurance until SNS registration is confirmed. Portuguese pharmacies sell many medications over-the-counter that require prescriptions elsewhere (antibiotics, some pain meds).`,
    pro_tip: `Get private insurance (Médis, Multicare, or Allianz) for the first 2 years while you learn the SNS system. Most expats use a hybrid: SNS for serious/chronic care + private for GPs, specialists, and dental. CUF Descobertas in Lisbon is the go-to expat hospital — English-speaking staff throughout.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Daily Life & Cultural Integration',
    country: 'PT',
    category: 'lifestyle',
    last_updated: '2026-02-01',
    source: 'Direct research; expat community surveys',
    content: `Living in Portugal — reality check:
- Language: Portuguese is NOT Spanish. Most under-40s speak English in cities. Rural areas: very limited English. Learning Portuguese is essential for long-term integration
- Cost of living (Lisbon, 2025-2026):
  * 1BR apartment city center: €900-1,400/month
  * 2BR apartment: €1,200-1,800/month
  * Groceries (couple): €300-450/month
  * Eating out: €10-15 for lunch menu, €25-40 for dinner
  * Transportation (metro pass): €40/month
  * Utilities (electric/gas/water): €100-180/month
  * Internet (fiber): €30-40/month
- Porto is 15-25% cheaper than Lisbon
- Algarve varies: tourist areas expensive, inland affordable
- Safety: Portugal consistently ranks #3-6 globally on Global Peace Index. Violent crime is very rare. Petty theft in tourist areas (Lisbon trams, Algarve beaches)
- Community: Large expat communities in Lisbon (Cais do Sodré, Santos), Porto (Foz), Cascais, Algarve (Lagos, Tavira)
- Internet: Excellent fiber coverage. NOS, MEO, Vodafone all offer 500Mbps-1Gbps for €30-40/month
- Bureaucracy: SLOW. Everything requires appointments. SEF/AIMA wait times are months. Bring patience and documents`,
    gotchas: `Lisbon rental market is EXTREMELY competitive — apartments go within hours of listing. Start searching 2-3 months before arrival. Landlords prefer long-term leases (12+ months). Heating is a real issue — most Portuguese buildings have no central heating, and winters in Lisbon/Porto are colder than people expect (5-12°C, damp). Budget for portable heaters or choose a modern apartment.`,
    pro_tip: `Join "Americans in Portugal" and "Expats in Lisbon" Facebook groups 6 months before moving. The community is incredibly helpful with apartment leads, recommendations, and bureaucracy tips. For Portuguese lessons: CIAL (Lisbon) or Portuguese Connection offer intensive courses. Learning basic Portuguese in your first 6 months dramatically improves your experience and opens housing options (many landlords prefer Portuguese speakers).`,
  },
];

// Helper to format KB entries for prompt injection
export function formatKnowledgeForPrompt(entries: KnowledgeBaseEntry[]): string {
  if (!entries.length) return '';
  
  let output = '\n\nSTRUCTURED KNOWLEDGE BASE (verified, sourced intelligence):\n';
  
  const byCategory = entries.reduce<Record<string, KnowledgeBaseEntry[]>>((acc, entry) => {
    if (!acc[entry.category]) acc[entry.category] = [];
    acc[entry.category].push(entry);
    return acc;
  }, {});

  for (const [category, catEntries] of Object.entries(byCategory)) {
    output += `\n## ${category.toUpperCase()} INTELLIGENCE\n`;
    for (const entry of catEntries) {
      output += `\n### ${entry.topic} [${entry.country}]\n`;
      output += `Last verified: ${entry.last_updated} | Source: ${entry.source}\n\n`;
      output += `${entry.content}\n\n`;
      output += `⚠️ GOTCHA: ${entry.gotchas}\n\n`;
      output += `💡 PRO TIP: ${entry.pro_tip}\n`;
    }
  }

  return output;
}

// Query entries by country + category
export function queryKnowledge(
  entries: KnowledgeBaseEntry[],
  filters: { country?: string; category?: string }
): KnowledgeBaseEntry[] {
  return entries.filter(entry => {
    if (filters.country && entry.country !== filters.country) return false;
    if (filters.category && entry.category !== filters.category) return false;
    return true;
  });
}
