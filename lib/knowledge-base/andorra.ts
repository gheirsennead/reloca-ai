import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const ANDORRA_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Income Tax & Savings Income (10% Maximum)',
    country: 'AD',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Andorra tax code; AndorraInc 2026 guide; Elysium Consulting; ICLG Private Client 2026',
    content: `Andorra income tax system — Europe's lowest rates (2026):
Personal income tax (IRPF):
- 0%: First €24,000
- 5%: €24,001-40,000
- 10%: Over €40,000
- Maximum rate: 10% (among lowest in Europe)
Savings income (dividends, interest, capital gains):
- Rate: 10% maximum
- First €3,000: EXEMPT (annual exemption)
- Dividends from Andorran companies: EXEMPT for residents
- Foreign dividends: 10% (after €3,000 exemption)
- Capital gains on securities: 10% (after €3,000 exemption)
- Capital gains held 10+ years: Exempt
- Bank interest: 10% (after €3,000 exemption)
No taxes on:
- Inheritance: 0%
- Wealth/net worth: 0%
- Gift tax: 0%
- Property tax: 0% (no annual property tax)
- Capital gains on property held 12+ years: 0%
Property transfer capital gains (progressive reduction):
- Year 1: Full gain taxed at 15%
- Years 2-12: Progressive reduction (1% per year)
- Year 12+: 0% (fully exempt)
Corporate tax:
- Standard rate: 10%
- Special regimes: Can reduce to 2% (holding companies, IP)
- International trading company: 2% on qualifying income
IGI (VAT equivalent):
- Standard rate: 4.5% (one of world's lowest)
- Reduced rates: 1% (food, books), 0% (healthcare, education)
- This is NOT a typo — Andorra's VAT is 4.5%
Tax residency requirement:
- Must reside 183+ days per year in Andorra
- Strictly enforced — Andorra monitors compliance
- Tax return filing: Required for income >€24,000`,
    gotchas: `The 183-day physical presence requirement is STRICTLY monitored in Andorra — they check. Unlike some countries where it's loosely enforced, Andorra takes this seriously because it's a key condition for the low-tax regime. The 10% maximum sounds low but applies to ALL income above €40K — there's no way to further reduce it (unlike non-dom systems). Foreign dividends ARE taxed at 10% (after €3,000 exemption) — it's not zero like Cyprus non-dom. Capital gains exemption after 10-12 years requires maintaining Andorran residence throughout. Tax treaties are limited compared to EU countries — only ~10 treaties. The IGI at 4.5% is genuine but means some imported goods have minimal tax.`,
    pro_tip: `Andorra's tax system is simple, predictable, and low — 10% maximum on everything with generous exemptions. The €24,000 tax-free threshold combined with €3,000 savings exemption means modest income earners pay nearly nothing. For entrepreneurs: the 10% corporate + 10% personal creates a combined effective rate far below EU averages. The 4.5% IGI (VAT) saves 15-20% on every purchase compared to EU neighbors. Strategy: structure Andorran company at 10%, distribute dividends from Andorran company (exempt for residents), hold investments for 10+ years for capital gains exemption. The simplicity is the feature — unlike complex EU regimes, Andorra's rules are straightforward and stable.`,
  },
  {
    topic: 'Corporate Tax & Special Regimes',
    country: 'AD',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Andorra corporate tax law; holding company regime; AndorraInc 2026',
    content: `Andorra corporate taxation (2026):
Standard corporate rate: 10%
Special regimes (can reduce to 2%):
- Holding company regime: 80% exemption on foreign-source income
  - Effective rate: 2% on qualifying income
  - Requirements: Hold qualifying participations (>5% or €1M in foreign companies)
  - Dividends from subsidiaries: 80% exempt
  - Capital gains from subsidiaries: 80% exempt
- International trading company: 80% exemption on international trade income
  - Effective rate: 2%
  - Must trade goods/services internationally
- IP regime: 80% deduction on qualifying IP income
  - Effective rate: 2%
  - Patents, software, trademarks
  - Must have substance in Andorra
New company incentives:
- First 3 years: Reduced rates possible with job creation
- Innovation incentives: Additional deductions for R&D
- Microenterprise (under €100K revenue): Simplified regime
Corporate structure options:
- SL (Societat Limitada): LLC equivalent, minimum capital €3,000
- SA (Societat Anònima): Corporation, minimum capital €60,000
- Branch office: Foreign company branch
- Formation time: 2-6 weeks
- Annual compliance: Corporate tax return + financial statements
Double taxation treaties:
- ~10 active treaties (growing but limited)
- Key treaties: Spain, France, Luxembourg, UAE, Portugal
- Missing: US, UK (in negotiation), most Asian countries
- Tax Information Exchange Agreements: 30+ countries`,
    gotchas: `The 2% effective rate through holding/IP/trading regimes requires genuine economic substance — Andorra tax authorities are increasingly scrutinizing structures. The limited treaty network means potential double taxation with many countries — this is Andorra's main corporate disadvantage vs Malta, Cyprus, or Netherlands. The 80% exemption on foreign dividends/gains requires specific participation thresholds. Annual compliance requirements are straightforward but must be met. The SL structure at €3,000 minimum capital is accessible but limited to 25 shareholders. Banking relationships are essential for corporate operations — Andorra has only 3 banks.`,
    pro_tip: `Andorra's 10% standard rate is simple and predictable — the special regimes (2% effective) are powerful but require proper structuring. The holding company regime is particularly attractive for investment holding — 80% exemption on foreign dividends and capital gains through qualifying participations. For tech/IP businesses, the IP regime at 2% rivals Cyprus (2.5%) and is simpler. The key limitation is the treaty network — if your business operates primarily with US/UK/Asian partners, double taxation risk exists. For EU-focused businesses, the Spain and France treaties cover key relationships. Consider Andorra for clean, simple corporate structuring at known rates rather than complex optimization schemes.`,
  },

  // === VISA ===
  {
    topic: 'Active Residency & Self-Employed Permits',
    country: 'AD',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Andorra immigration law; Omnibus 2 Law Jan 2026; AndorraInc; Advantia 2026',
    content: `Andorra active residency options (2026, updated with Omnibus 2 Law):
Self-Employed (Compte Propi):
- Deposit: €50,000 non-refundable to AFA (Andorran Financial Authority) — NEW 2026
  - Previously: Refundable deposit of €47,500
  - Omnibus 2 Law (Jan 2026): Changed to non-refundable €50,000
- Plus €9,500 per dependent (non-refundable)
- Requirements: Create or participate in Andorran company, own/rent property, reside 183+ days
- Processing: 3-6 months
- Annual renewal for first 2 years, then 10-year permits
Employed (Compte Alié):
- Job offer from Andorran company required
- Employer handles permit application
- Must reside 183+ days per year
- No deposit required from employee
- Processing: 2-4 months
Company formation route:
- Create SL (Societat Limitada): Minimum capital €3,000
- Foreign ownership: 100% allowed (since 2012)
- Must demonstrate economic activity
- At least one employee (can be owner)
- Office/commercial space required
Key requirements all active permits:
- Property: Own or rent in Andorra
- Physical presence: 183+ days/year (strictly enforced)
- Criminal record: Clean from all countries
- Health insurance: CASS enrollment mandatory
- Medical exam: Required during application
Common active residency paths for expats:
- Consultant/freelancer: SL company + self-employed permit
- eCommerce/digital: SL company + business operations
- Investor/director: Company director with local presence
- Professional: Employed by Andorran or foreign company with Andorran branch`,
    gotchas: `The Omnibus 2 Law (January 2026) changed the self-employed deposit from refundable €47,500 to NON-REFUNDABLE €50,000 — this is a significant cost increase. The 183-day requirement is strictly monitored — Andorra is small enough to check. Company formation requires real economic substance — shell companies will be rejected. The SL minimum capital (€3,000) is low but the company must demonstrate genuine activity. Property rental or purchase is mandatory — you can't use hotel addresses. Processing times can extend beyond estimates, especially during peak application periods. Andorra is NOT in the EU — no automatic EU market access for your company.`,
    pro_tip: `The self-employed route with SL company is the most popular path for entrepreneurs and consultants. Total startup costs: ~€50K deposit + €3K company capital + €3-5K legal fees + property rental (€800-1,500/month). Budget €60-70K for the first year all-in. The non-refundable deposit change (2026) makes it more expensive but doesn't change the core value proposition — 10% max tax in exchange for €50K entry cost pays for itself quickly on moderate income. The company must show real activity — invoicing clients, maintaining books, filing returns. Consider an Andorran gestor (tax/admin agent) for €100-200/month to handle compliance. The 183-day requirement means you're genuinely living in Andorra — this isn't a paper residency scheme.`,
  },
  {
    topic: 'Passive Residency & Digital Nomad Visa',
    country: 'AD',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Omnibus 2 Law January 2026; AndorraInc; Advantia; DigitalNomadTax',
    content: `Andorra passive residency and digital nomad options (2026, MAJOR 2026 CHANGES):
Passive Residency (MAJOR CHANGES — Omnibus 2 Law, January 2026):
- Investment: €1,000,000 MINIMUM (raised from €600K in 2025)
  - Real estate, government bonds, Andorran company shares, or combination
- Deposit: €50,000 non-refundable to AFA (was €47,500 refundable)
  - Plus €9,500 per dependent
- Physical presence: Minimum 90 days/year (NOT 183 — less than active)
- Cannot work: No employment or business activity in Andorra
- Duration: 2 years initial, then 10-year renewals
- Income: Must demonstrate sufficient means (no fixed minimum)
- This is for: Retirees, HNWI, investors with passive foreign income
Digital Nomad Visa (Law 42/2022):
- Cap: Maximum 50 applicants per year (very limited)
- Income: Minimum 3× minimum wage (~€3,900/month / €46,800/year)
- Remote work: Must work for non-Andorran companies
- Cannot work for Andorran businesses
- Duration: 1 year, renewable
- Processing: 2-4 months
- Physical presence: Must reside in Andorra during permit validity
- Tax: Becomes Andorran tax resident if 183+ days
Requirements for DN visa:
- Proof of remote employment or self-employment with foreign clients
- Income documentation (tax returns, bank statements)
- Health insurance
- Clean criminal record
- Accommodation in Andorra
Comparison:
- Active (self-employed): €50K deposit + company, 183 days, can work locally
- Passive: €1M investment + €50K deposit, 90 days, no local work
- Digital Nomad: No deposit, 50/year cap, remote work only`,
    gotchas: `The passive residency increase to €1,000,000 (from €600K) is MASSIVE — this now puts Andorra among the more expensive residency-by-investment programmes. The 50-applicant annual cap on DN visas creates artificial scarcity — apply early in the year. The non-refundable €50,000 deposit applies to BOTH passive and active residency — you don't get this back. Passive residency's 90-day minimum is genuinely low but the €1M investment threshold is high. The DN visa is new and administrative procedures are still being refined. Processing times can be unpredictable, especially for passive residency applications requiring investment verification. Andorra is NOT in the EU — no Schengen access automatically.`,
    pro_tip: `The 2026 changes significantly altered Andorra's value proposition: active residency (€50K non-refundable + company) remains competitive, but passive residency (€1M) is now expensive. For most expats, the active/self-employed route makes more sense — the €50K deposit + 10% tax regime creates excellent value. The DN visa cap of 50/year means only serious applicants should apply — have all documentation ready before the annual window. Consider: if you can create even minimal business activity in Andorra, active residency (€50K) is dramatically cheaper than passive (€1M). The DN visa is effectively a trial period before committing to active residency. Andorra's tax benefits compound over time — the entry cost is a one-time hurdle for long-term savings.`,
  },

  {
    topic: 'Self-Employment & Company Formation',
    country: 'AD',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Andorra business formation law; self-employed permit procedures 2026',
    content: `Andorra business formation for expat entrepreneurs (2026):
SL (Societat Limitada) formation:
- Minimum capital: €3,000 (very accessible)
- Formation cost: €1,000-2,000 (legal fees)
- Timeline: 2-6 weeks
- Foreign ownership: 100% allowed (since 2012 liberalization)
- Share structure: Minimum 1 share, maximum 25 shareholders
- Management: At least 1 manager (can be foreign)
Business activities allowed:
- Consulting, freelancing, professional services
- eCommerce, digital services, software development
- Import/export, trading (international trading regime at 2% tax)
- Tourism services, real estate, retail
- Investment holding (holding company regime at 2% tax)
- Intellectual property licensing (IP regime at 2% tax)
Annual compliance:
- Corporate tax return: Due March 31
- Financial statements: Annual filing required
- Gestor services: €100-300/month for accounting/compliance
- Minimum activity: Must demonstrate genuine business operations
Employment obligations:
- At least 1 employee: Can be the owner/manager
- Social security: CASS enrollment mandatory
- Employment contracts: Spanish/Catalan language
- Minimum wage: ~€1,300/month (2026)
Banking requirements:
- Corporate bank account: Required (one of 3 Andorran banks)
- Business address: Physical office/commercial space needed
- VAT registration: If revenue >€100K or import/export
Visa pathway:
- Self-employed permit: €50K non-refundable deposit + company formation
- 183-day residence: Mandatory physical presence
- Work authorization: Can work for own company in Andorra`,
    gotchas: `The €50,000 non-refundable deposit (changed January 2026) is a significant upfront cost. The company must demonstrate genuine business activity — shell companies will be rejected. The 183-day residence requirement is strictly monitored. You need a physical business address (not residential). Annual compliance must be maintained or risk losing residence. The minimum wage employee requirement (€1,300/month) adds ongoing costs. Banking relationships are crucial but limited to 3 banks. Some business activities may require special licenses or professional qualifications.`,
    pro_tip: `The SL + self-employed permit route is the most popular path for entrepreneurs — total first-year cost ~€60-70K (€50K deposit + €3K capital + legal fees + first year expenses). The 10% corporate tax + 10% personal tax creates a maximum 19% combined rate (10% corp + 10% on 90% remaining = 19% total). This beats most EU alternatives significantly. Use a gestor for €100-200/month to handle compliance — they know the system and prevent costly mistakes. The international trading and holding company regimes (2% effective rates) are powerful for larger operations. Consider Andorra for clean, simple business structuring rather than complex tax optimization schemes.`,
  },

  // === BANKING ===
  {
    topic: 'Andorran Banking System',
    country: 'AD',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Andorran banking sector; AFA regulations; expat banking experiences 2025-2026',
    content: `Andorra banking — private banking tradition (2026):
Banks (only 3 — small market):
- MoraBanc: Largest, most international, English services
- Andbank: Strong private banking, investment focus
- Creand (formerly Crèdit Andorrà): Traditional, largest branch network
Account opening:
- Requirements: Residence permit or application proof, passport, proof of income
- AML/KYC: Thorough documentation (source of funds, tax compliance certificates)
- Processing: 1-4 weeks
- Minimum deposit: Varies, typically €3,000-10,000
- In-person visit: Required for initial opening
Account features:
- Euro accounts: Standard (Andorra uses EUR, not EU member)
- Multi-currency: Available at all 3 banks
- Wealth management: Strong private banking tradition
- Investment services: Portfolio management, funds, advisory
- Online banking: Available, improving
- Monthly fees: €0-30 depending on account level
Banking advantages:
- Strong banking secrecy tradition (evolving with CRS compliance)
- Private wealth management expertise
- Stable banking sector (no 2008 crisis impact)
- Personal relationship banking (small market = personalized service)
- Euro-denominated without EU banking regulation overhead
Limitations:
- Only 3 banks: Limited competition
- SEPA: Andorra participates in SEPA (since 2019)
- International transfers: SEPA for EU, SWIFT for rest
- No fintech alternatives: Limited digital banking options
- ATM network: Small but adequate for country size
Deposit insurance:
- Andorran deposit guarantee: €100,000 per depositor per bank
- Not EU deposit insurance (Andorra is not EU member)
Crypto/fintech:
- Andorra is crypto-cautious — not a crypto hub
- Limited crypto services through traditional banks
- Growing interest in digital assets regulation`,
    gotchas: `Only 3 banks means limited choices and potentially less competitive pricing. AML documentation requirements are extensive — prepare detailed source of funds documentation. Andorra is NOT in the EU — SEPA access works but it's not EU-regulated banking. The banking secrecy tradition has been significantly reduced by CRS (Common Reporting Standard) compliance since 2017 — don't expect old-style Swiss-like secrecy. Some international transactions may face delays due to compliance checks. Digital banking options are limited compared to EU fintech alternatives. Revolut and N26 may not fully work for Andorran residents. The €100K deposit guarantee is Andorran (not EU-backed).`,
    pro_tip: `MoraBanc offers the best international services and English-language support. Andbank is excellent for private wealth management and investment advisory. The personal banking relationship in Andorra is genuinely valuable — you'll know your banker by name, and they'll know your situation. Use SEPA for EU transfers (cheap and efficient since 2019). For international transfers outside EU, negotiate rates — with only 3 banks, they compete for relationships. Consider maintaining an EU bank account alongside Andorran accounts for broader fintech access. The private banking tradition means excellent wealth management services — take advantage of the investment advisory if you have significant assets.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Property Market & Parish Guide',
    country: 'AD',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Versus Andorra 2026; PierceAndSharp; Andorra Services; Investropa',
    content: `Andorra real estate market — small but expensive (2026):
Country-wide average: ~€5,000/sqm (historic high, +5% in 2025)
By parish (Andorra's 7 administrative divisions):
- Andorra la Vella (capital): €5,000-6,500/sqm
  - Rent: €1,200-2,000/month (2BR)
  - Character: Main commercial center, government, shopping
  - Rental per sqm: €30.19/sqm/month (highest)
- Escaldes-Engordany: €4,500-6,000/sqm
  - Rent: €1,000-1,800/month (2BR)
  - Character: Thermal spa (Caldea), restaurants, adjacent to capital
  - Rental per sqm: €25.66/sqm/month
- La Massana: €3,500-5,000/sqm
  - Character: Ski access (Pal-Arinsal), nature, quieter
  - Growing expat community
- Ordino: €3,500-5,000/sqm
  - Character: Quietest parish, nature, cultural events, remote work friendly
  - Most "village feel" of all parishes
- Encamp: €3,000-4,500/sqm
  - Character: Most affordable urban parish, Grandvalira ski access
  - Highest % price increase recently (53%!)
- Canillo: €3,500-5,500/sqm
  - Character: Ski village, Grandvalira, seasonal tourism
- Sant Julià de Lòria: €3,000-4,000/sqm
  - Character: Southernmost, near Spain border, most affordable
  - Good value, close to Spanish shopping
Purchase process for foreigners:
- Authorization: Government approval required (15 days)
- Foreigners: Can buy property freely (since 2012 liberalization)
- Process: 2-4 months from offer to completion
- No annual property tax (major advantage)
Transaction costs:
- Transfer tax (ITP): 4% of property value (foreigners: sometimes 4.5%)
- Notary fees: 0.1-0.5%
- Registration: 0.1%
- Legal fees: 1-2%
- Total: ~5.5-7.5% buyer costs`,
    gotchas: `Andorra's property market is VERY expensive for its size — €5,000/sqm average is comparable to Barcelona. Limited supply in a 468 km² country means prices are structurally supported but can be overvalued. Encamp's 53% price increase suggests speculative activity. New construction is limited by geography (narrow valleys). Some properties are small by international standards — Andorran apartments can feel compact. Parking is scarce and often separate from purchase price. Winter heating can be significant (mountain climate). Property renovation in mountain buildings can be expensive. The government authorization process for foreign buyers is usually a formality but adds time.`,
    pro_tip: `No annual property tax is Andorra's major real estate advantage — zero ongoing tax costs make property investment attractive long-term. The capital gains exemption after 12 years rewards patient investors. For value, consider Sant Julià de Lòria (cheapest, close to Spain) or Encamp (growing, ski access). For lifestyle, Ordino offers the best combination of nature and tranquility. Andorra la Vella and Escaldes are for those wanting urban convenience in a mountain setting. Property serves double purpose: residence requirement satisfaction + investment with no annual tax drag. Budget for parking (€20-50K for a garage space) separately. The market is small enough that good agents are essential — work with established firms.`,
  },

  {
    topic: 'Property Purchase Process & Rental Market',
    country: 'AD',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Andorra property law; purchase procedures 2025-2026; rental market analysis',
    content: `Andorra property purchase and rental market (2026):
Foreign ownership:
- Fully liberalized since 2012 — foreigners can buy freely
- Government authorization required (formality, 15 days)
- No limit on number of properties
- No annual property tax (major advantage)
Purchase costs:
- ITP (transfer tax): 4-4.5% of purchase price
- Notary fees: 0.1-0.5%
- Registration: 0.1%
- Legal fees: 1-2%
- Total buyer costs: ~5.5-7.5%
Rental market:
- Very tight supply: Andorra has a genuine housing shortage
- Rent control: Some protection for existing tenants
- New leases: Market rates, typically 1-year minimum
- Furnished vs unfurnished: Both available, furnished more common for expats
- Deposit: 2 months typical
- Lease language: Catalan/Spanish
Investment metrics:
- Rental yields: 3-5% gross
- Appreciation: +5-8% annually (strong demand, limited supply)
- Vacancy: Very low (<2%)
- Capital gains: 0% after 12 years of ownership
Mortgage options:
- Andorran banks: 60-80% LTV for residents
- Rates: 2-4% (competitive)
- Maximum term: 20-30 years
- Non-residents: 50-60% LTV, higher rates`,
    gotchas: `The housing shortage is real — finding quality rental properties can take weeks, especially in Andorra la Vella and Escaldes. Prices have risen significantly in recent years — some properties may be overvalued. Mountain construction quality varies — inspect thoroughly. Some apartments are quite small by international standards. Parking spaces are often separate purchases (€20-50K). Winter access to some properties can be challenging in heavy snow. The tight market means landlords have significant leverage. Some older buildings lack proper insulation — heating costs can be high.`,
    pro_tip: `Start property searching 3-6 months before planned move — the market is tight. Zero annual property tax + 0% capital gains after 12 years makes Andorra excellent for long-term property investment. Consider buying rather than renting if staying 3+ years — the tax benefits compound and you avoid the tight rental market. For residency purposes, property ownership satisfies housing requirements for all visa types. Encamp and Sant Julià de Lòria offer 20-30% discounts vs Andorra la Vella while still providing easy access to services. The mortgage rates (2-4%) from Andorran banks are competitive and availability is good for residents.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'CASS Healthcare System',
    country: 'AD',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'CASS Andorra; WHO 2025 Andorra review; MCA Assessors; AndorraWay',
    content: `Andorra CASS (Caixa Andorrana de Seguretat Social) healthcare (2026):
System overview:
- CASS coverage: 75% of outpatient costs, 90% of hospital costs
- Patient copay: 25% outpatient, 10% hospital
- Occupational accidents and births: 100% covered
- Coverage: 98% of residents enrolled
- WHO assessment: "Top-tier health system" (2025 review)
CASS contributions:
- Employees: 3% of salary (employer pays 7%)
- Self-employed: 10% of declared income (minimum ~€200/month)
- Voluntary enrollment (not employed): €200-400/month
- Retirees: Reduced rates based on pension
Supplementary private insurance:
- Most residents add private insurance to cover 25% copay
- Cost: €50-150/month for comprehensive top-up
- Total healthcare cost: €250-550/month (CASS + private supplement)
Medical facilities:
- Hospital Nostra Senyora de Meritxell: Main hospital (only hospital)
  - Modern equipment, good quality
  - Emergency, surgery, maternity, most specialties
  - Limited capacity: 200 beds for 80,000 population
- Clinics: Several private clinics throughout parishes
- Dental: Private, not covered by CASS (separate insurance needed)
Healthcare quality:
- General care: Excellent for country size
- Life expectancy: Among world's highest (83+ years)
- Routine care: Very good
- Specialist care: Most common specialties available
- Complex/rare conditions: Referred to Barcelona or Toulouse
Medical evacuation:
- Barcelona: 2.5-3 hours by road (closest major hospital complex)
- Toulouse: 2-3 hours by road
- Air evacuation: Helicopter to Barcelona hospitals
- Agreement: Andorra has healthcare agreements with Spain and France
- Serious cases: Routinely transferred, well-coordinated system`,
    gotchas: `The 25% copay on outpatient care adds up — supplementary insurance is effectively mandatory for regular healthcare users. Only ONE hospital (200 beds) for 80,000 residents plus tourists — capacity can be strained during ski season injuries. Complex and rare conditions require transfer to Barcelona/Toulouse — factor travel and accommodation costs. No dental coverage through CASS — budget separately. Self-employed CASS contributions at 10% of declared income can be significant. Specialist availability is limited for less common conditions. Language: healthcare in Catalan/Spanish primarily, limited English.`,
    pro_tip: `CASS + private supplementary insurance (€50-150/month) provides excellent coverage for a small country. The Barcelona connection is Andorra's healthcare safety net — 2.5 hours by road gives access to world-class Spanish hospitals. Budget total healthcare at €300-500/month (CASS + supplement + dental). The 75/25 split means most people pay very little out of pocket with supplementary insurance. For retirees, the system is particularly good — routine care locally, specialist access in Barcelona. Register with CASS immediately upon residency — it's mandatory and coverage begins quickly. Consider a private health plan with international coverage that includes Spanish hospitals for the Barcelona evacuation scenario.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living Breakdown',
    country: 'AD',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Andorra cost of living 2026; MCA Assessors; Idealista; Numbeo data',
    content: `Andorra cost of living (2026):
Monthly budgets:
- Budget single: €2,000-2,500/month
- Comfortable single: €3,000-4,000/month
- Comfortable couple: €4,000-5,500/month
- Family of 4: €5,500-7,500/month
Detailed breakdown (comfortable single):
- Rent (1BR Andorra la Vella): €900-1,500/month
- Utilities: €80-150/month (heating significant in winter)
- Groceries: €250-400/month (low IGI helps)
- Dining out: €200-400/month (€15 casual, €50 dinner for two)
- Transportation: €50-150/month (car useful but country is tiny)
- Healthcare (CASS + private): €250-450/month
- Internet: €30-50/month
- Mobile phone: €20-40/month
- Entertainment: €100-200/month
- Ski pass (season): €600-900/year (optional but popular)
Tax savings that offset costs:
- IGI at 4.5% vs 21% VAT in Spain: ~15% savings on purchases
- No property tax: Saves €2,000-5,000/year vs most EU countries
- 10% income tax: Massive savings vs EU neighbors
- No inheritance tax: Protects generational wealth transfer
Shopping advantage:
- Duty-free shopping: Electronics, alcohol, tobacco, perfume
- Spanish border trips: 30 min to La Seu d'Urgell for lower food prices
- French border trips: Larger selection, different products
- Andorran supermarkets: Competitive due to low IGI
Seasonal costs:
- Winter: Higher heating, ski pass, winter tires
- Summer: Lower overall, hiking/outdoor activities free
- Ski season tourism: Some price inflation in resort areas`,
    gotchas: `Rent is Andorra's biggest expense — the tiny market means limited supply and high prices. Winter heating costs can be €200-400/month in mountain apartments. Car ownership isn't strictly necessary (country is 25km long) but useful for ski access and border shopping. Dining out is moderately expensive by Southern European standards. Some specialty goods must be imported (limited variety in small market). International school fees are significant if you have children. The 4.5% IGI is great but imported luxury goods can still be expensive. Seasonal tourism (ski season) inflates some costs during winter months.`,
    pro_tip: `The true cost analysis must factor in tax savings — someone earning €100K pays ~€7,600 in Andorran income tax vs €30-45K in France/Spain. That €22-37K annual savings MORE than covers higher rent. The IGI savings compound on every purchase — 4.5% vs 21% saves €1,500-3,000/year on normal spending. Shop in Spain for groceries (30 min drive to La Seu d'Urgell) for additional savings. The duty-free shopping on electronics and alcohol is a real benefit. For families, winter heating and international school fees are the biggest cost surprises. Consider Encamp or Sant Julià de Lòria for 20-30% rent savings while still having full Andorran benefits. The math overwhelmingly favors Andorra for anyone earning €60K+ — lower taxes fund the higher cost of living with substantial surplus.`,
  },
  {
    topic: 'Language & Integration',
    country: 'AD',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Andorra language environment; cultural integration experiences 2025-2026',
    content: `Andorra language environment and cultural integration (2026):
Language landscape:
- Official language: Catalan (only sovereign state with Catalan as sole official language)
- Spanish: Widely spoken by ~40% of population (largest immigrant community)
- French: Spoken by ~10%, especially near French border
- Portuguese: Significant community (~15% of population)
- English: Limited — improving but not reliable for daily life
Practical language needs:
- Government/legal: Catalan required for official documents
- Daily life: Spanish works in most situations
- Business: Spanish/Catalan for local, English increasingly for international
- Healthcare: Spanish/Catalan primarily
- Banking: Spanish/Catalan, some English at international desks
Language learning:
- Free Catalan courses: Government-funded integration program (Servei de Política Lingüística)
- Spanish courses: Widely available, €200-500/month
- English immersion: Limited — you're learning, not maintaining English
- Recommendation: Learn Spanish (practical daily use) + basic Catalan (official + cultural respect)
Cultural integration:
- Small community: Makes integration both easier (personal relationships) and harder (tight-knit locals)
- Expat networking: Growing events, especially in tech/entrepreneur community
- Outdoor clubs: Skiing, hiking, cycling — best social integration path
- Sports: FC Andorra (football), Rugby, skiing competitions
- Festivals: Carnival, National Day (Sept 8), Sant Jordi, local parish festivals
- Dining: Catalan/French/Spanish influences, excellent mountain cuisine
- Work culture: More relaxed than Northern Europe, influenced by Spanish/French norms`,
    gotchas: `Without Spanish or Catalan, daily life is genuinely challenging — English alone won't cut it in most situations. Government services are in Catalan — legal documents, tax filings, official correspondence. The Portuguese community is large but Portuguese doesn't help much with Catalan/Spanish. French speakers have an easier transition than English speakers. The small community means your language efforts (or lack thereof) are noticed — making the effort earns respect. Children integrate faster through Andorran schools but must learn Catalan. International schools exist but are limited and expensive.`,
    pro_tip: `Take the free government Catalan courses — it shows commitment and helps with official interactions. Spanish is the more practical daily language (larger speaker base, wider utility globally). The outdoor activity clubs are the #1 social integration pathway — join a skiing group, hiking club, or cycling team. These communities welcome foreigners and create genuine friendships. The expat entrepreneur community is growing — regular meetups in Andorra la Vella provide English-language networking. Embrace the tri-lingual environment as an opportunity — living in Andorra means passive exposure to Catalan, Spanish, and French simultaneously.`,
  },
  {
    topic: 'Mountain Lifestyle & Honest Assessment',
    country: 'AD',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Andorra lifestyle experiences; seasonal patterns; expat community data 2025-2026',
    content: `Andorra lifestyle — honest assessment for prospective expats (2026):
What Andorra IS:
- Tax-efficient mountain microstate with excellent outdoor lifestyle
- World-class skiing (Grandvalira — largest in Southern Europe)
- Stunning Pyrenean scenery, hiking, mountain biking
- Safe (almost zero violent crime)
- Clean air, nature everywhere
- Convenient: 2.5 hrs to Barcelona, 3 hrs to Toulouse, airports accessible
What Andorra is NOT:
- A cosmopolitan city with culture, nightlife, and variety
- A place with beaches, warm weather year-round, or tropical vibes
- A country with diverse dining, entertainment, or social options
- An easy place for non-Catalan/Spanish/French speakers
- A good fit for people who get bored in small communities
Honest challenges:
- Size: 468 km², population ~80,000 — genuinely tiny
- "Mountain fever": Like island fever but in valleys — feeling hemmed in
- Weather: Cold, snowy winters (-5 to 5°C), mild summers (15-25°C)
- Language: Catalan official, Spanish and French widely spoken, English limited
- Nightlife: Minimal — a few bars, no clubs worth mentioning
- Culture: Limited museums, theaters, concerts (Barcelona fills this gap)
- Dating/social: Very small pool — the joke is "everyone dated everyone"
- Bureaucracy: Improving but still micro-state quirks
- Internet: Good speeds (fiber widely available), reliable
Who thrives in Andorra:
- Outdoor enthusiasts (skiing, hiking, cycling, trail running)
- Families wanting safe, nature-rich environment
- Entrepreneurs willing to trade nightlife for tax efficiency
- Remote workers who need internet, not nightlife
- Retirees wanting mountain peace + financial optimization
- People who already love the Pyrenees/Alps lifestyle
Who doesn't:
- Night owls, party people, social butterflies
- Beach lovers, warm-weather seekers
- Those needing diverse cultural stimulation
- Singles looking for active dating scenes
- People who don't enjoy winter/mountain sports
Access:
- No airport: Nearest are Barcelona (2.5 hrs), Toulouse (3 hrs)
- No train: Car or bus only
- Mountain roads: Can close in heavy snow (rare but possible)
- Border crossings: France and Spain, sometimes queues`,
    gotchas: `The lack of airport/train means every trip starts with a 2.5-3 hour drive — this gets tiring fast. Mountain roads in winter require winter tires (mandatory) and can be challenging. The small population means limited social and professional networking opportunities. Language barrier is real — Catalan is the official language and daily interactions often default to Spanish. Summer temperatures are pleasant but winters are genuinely cold. The "everyone knows everyone" dynamic means limited privacy. International schools exist but options are limited. Barcelona is the cultural escape valve — budget for regular trips. Some expats find the mountain valley geography claustrophobic compared to coastal/flatland living.`,
    pro_tip: `Andorra works best when you embrace the mountain lifestyle fully — ski in winter, hike in summer, trail run in autumn, mountain bike in spring. If outdoor activities are your passion, Andorra is paradise with tax benefits. View Barcelona as your "big city extension" — 2.5 hours for flights, culture, beach, shopping. Build a routine: weekdays in Andorra (work, outdoor exercise, family), weekends alternating between local mountains and Barcelona trips. Learn Spanish at minimum (Catalan ideal but Spanish works daily) — it transforms the experience. The expat community is growing and increasingly international — networking events exist but you have to seek them out. The 183-day rule means you can still spend significant time elsewhere — use summer for extended travel. The financial math + outdoor lifestyle + safety + nature = excellent quality of life for the right person.`,
  },
];
