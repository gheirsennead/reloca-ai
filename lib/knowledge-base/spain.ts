import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const SPAIN_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Spanish Income Tax (IRPF) Rates & Filing',
    country: 'ES',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Agencia Tributaria (AEAT); Ley del IRPF; IRPF brackets 2026',
    content: `Spain personal income tax (IRPF) 2026 — progressive rates on general income (state + regional combined):
- €0–€12,450: 19%
- €12,450–€20,200: 24%
- €20,200–€35,200: 30%
- €35,200–€60,000: 37%
- €60,000–€300,000: 45%
- Over €300,000: 47%
Savings income (dividends, interest, capital gains) taxed separately:
- Up to €6,000: 19%
- €6,000–€50,000: 21%
- €50,000–€200,000: 23%
- €200,000–€300,000: 27%
- Over €300,000: 28%
Tax residency: 183+ days in Spain per calendar year, OR center of economic interests in Spain, OR spouse and dependent minor children reside in Spain (rebuttable presumption)
Filing deadline: June 30 for the previous calendar year (Renta campaign opens April 1)
Regional variations: Autonomous communities set their own regional tranche (roughly half of IRPF). Catalunya and Valencia apply higher rates; Madrid applies lower rates. Effective top rate ranges from ~43% (Madrid) to ~50%+ (Catalunya)`,
    gotchas: `Spain's tax residency trap: if your spouse and minor children live in Spain, YOU are presumed tax resident even if you spend less than 183 days there. The burden of proof is on you to demonstrate otherwise. Regional rate differences are significant — the same €80K salary is taxed ~€2,000–4,000 less in Madrid than in Barcelona. Non-residents pay a flat 24% (EU/EEA) or 24% on Spanish-source income.`,
    pro_tip: `If you have flexibility on where to establish residence within Spain, Madrid's autonomous community offers the lowest regional IRPF rates plus a 100% wealth tax exemption (see wealth tax entry). For a high earner, the Madrid vs Catalunya difference can be €5,000–15,000/year in tax savings.`,
  },
  {
    topic: 'Beckham Law (Régimen Especial de Impatriados)',
    country: 'ES',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Ley del IRPF Art. 93; Royal Decree 687/2005; AEAT guidance 2025',
    content: `The Beckham Law allows qualifying expats to be taxed as non-residents for 6 years:
- Flat 24% tax on Spanish-source employment income up to €600,000
- Income above €600,000: taxed at 47%
- Foreign-source income (excluding employment): EXEMPT from Spanish tax entirely
- Duration: Year of arrival + 5 subsequent tax years (6 total)
- Eligibility: (1) Not been Spanish tax resident in the prior 5 years, (2) Move to Spain due to an employment contract with a Spanish entity OR as a director of a Spanish company (with <25% ownership), (3) Since 2023 reform: also available to remote workers, entrepreneurs, and professionals under the Digital Nomad Visa framework
- Application: File Modelo 149 within 6 months of starting work/activity in Spain
- Capital gains on Spanish assets: Taxed at 24% (not savings rates)
- Dividends/interest from Spanish sources: Taxed at 24%
- Wealth tax: EXEMPT on non-Spanish assets (only Spanish assets count)`,
    gotchas: `Under Beckham Law, you file as a non-resident (IRNR) not IRPF — different form, different rules. You CANNOT claim most personal deductions or allowances available to regular residents. Joint filing with a spouse is not available. If your spouse doesn't qualify for Beckham Law, they file as a regular resident at progressive rates — potentially creating a complex household tax situation. The 2023 expansion to remote workers requires you to derive at least 60% of your income from outside Spain.`,
    pro_tip: `Beckham Law is most valuable for incomes between €60K–€600K. Below €60K, the savings over regular IRPF are modest. Above €600K, the 47% rate kicks in. For a €150K salary, Beckham saves roughly €15K–20K/year vs standard IRPF. Apply IMMEDIATELY — missing the 6-month window means losing the entire benefit. Use a gestoría or tax lawyer (€1,000–2,000) to file Modelo 149 correctly.`,
  },
  {
    topic: 'Wealth Tax & Solidarity Tax',
    country: 'ES',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Ley del Impuesto sobre el Patrimonio; Ley 38/2022 (Solidarity Tax); Comunidad de Madrid regulations',
    content: `Spain has TWO wealth taxes — regional and national:
1. Regional Wealth Tax (Impuesto sobre el Patrimonio):
- Applies to worldwide net assets for residents (Spanish assets only for non-residents)
- Exemption: First €700,000 of net worth + €300,000 for primary residence
- Rates: 0.2% to 3.5% (varies by region)
- Madrid: 100% bonification (effectively 0% wealth tax)
- Andalucía: 100% bonification for net worth under €3M
- Catalunya: Full rates apply, highest in Spain (up to 2.75%)
- Valencia: Full rates, up to 3.5%
2. National Solidarity Tax (Impuesto Temporal de Solidaridad de las Grandes Fortunas):
- Introduced 2023, designed to override regional exemptions for high-net-worth individuals
- Applies UNIFORMLY across all regions (including Madrid and Andalucía)
- Thresholds: 0% up to €3M net worth, 1.7% on €3M–€5M, 2.1% on €5M–€10M, 3.5% above €10M
- Deducts any regional wealth tax paid — so it only hits those in regions with low/zero wealth tax
- "Temporary" but extended through at least 2025/2026 tax years`,
    gotchas: `The Solidarity Tax was specifically designed to punish Madrid and Andalucía residents who benefited from 0% regional wealth tax. If your net worth exceeds €3M, living in Madrid no longer provides full wealth tax protection. The €700K exemption applies per person — married couples filing separately each get €700K. Primary residence exemption of €300K is per person too. Modelo 720 (foreign asset declaration) feeds directly into wealth tax calculations — Hacienda knows your global assets.`,
    pro_tip: `For net worth under €3M: Madrid is the clear winner — zero wealth tax and the Solidarity Tax doesn't apply. For €3M+: the math gets complex. Some high-net-worth individuals are structuring assets through holding companies (which get different valuation rules) or timing asset disposals around December 31 (wealth tax is assessed on that date). Consider a specialized wealth tax advisor — the stakes at €3M+ justify the €3,000–5,000 fee.`,
  },
  {
    topic: 'Modelo 720 & 721: Foreign Asset Reporting',
    country: 'ES',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'AEAT; Ley 7/2012; EU Court ruling C-788/19 (2022); Modelo 721 crypto regulations',
    content: `Spain requires extensive foreign asset reporting:
Modelo 720 — Foreign assets in 3 categories (each with €50,000 threshold):
1. Foreign bank accounts (balances as of Dec 31 or average Q4 balance >€50,000)
2. Foreign securities, funds, insurance, annuities (value >€50,000)
3. Foreign real estate (value >€50,000)
Filing deadline: March 31 of the following year
Re-filing: Only required if a category increases by >€20,000 from last declaration
Modelo 721 — Crypto assets held on foreign platforms:
- Threshold: €50,000 total value as of December 31
- First filing year: 2024 (for 2023 holdings)
- Same March 31 deadline
Penalties (post-2022 reform):
- Late filing: €100–€1,500 per asset group
- Omission or inaccuracy: Up to €5,000 per item of data
- The draconian pre-2022 penalties (150% surcharge, no statute of limitations) were struck down by the EU Court of Justice in January 2022. Spain amended the law in March 2022 to align with standard tax penalty frameworks`,
    gotchas: `Even though the extreme penalties were struck down, Modelo 720 is still MANDATORY. Failure to file can result in Hacienda treating undeclared foreign assets as unjustified capital gains in the oldest open tax year — taxed at up to 47% plus interest. Crypto held on Spanish exchanges (Bit2Me, etc.) is NOT reported on 721 — only foreign platforms (Coinbase, Kraken, Binance). Self-custody wallets are a gray area — conservative approach is to declare.`,
    pro_tip: `File Modelo 720 even if you're slightly unsure whether you hit the €50,000 threshold — the penalty for filing unnecessarily is zero, but the penalty for not filing when required is severe. Use a tax advisor for your first filing (€300–500) to establish the format. Subsequent years only require re-filing if values increase by €20K+. Keep a December 31 screenshot of all foreign account balances — Hacienda can request documentation.`,
  },
  {
    topic: 'Crypto & Digital Asset Taxation',
    country: 'ES',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'AEAT; Ley del IRPF; DAC8 (EU Directive 2023/2226); Modelo 721',
    content: `Spain crypto taxation (2026):
- Capital gains on crypto disposals: Taxed as savings income at 19–28% (same brackets as stocks/dividends)
- Crypto-to-crypto swaps: Taxable events — each swap triggers capital gains calculation
- Mining income: Taxed as economic activity (general income, progressive rates 19–47%)
- Staking rewards: Taxed as savings income (capital gains) when received
- Airdrops: Taxed as general income at market value on receipt
- DeFi yields: Treated as savings income
- NFT sales: Capital gains on disposal
- Reporting: Annual IRPF declaration (Renta) + Modelo 721 for foreign platform holdings >€50,000
- DAC8 enforcement: Starting 2026, EU-wide automatic exchange of crypto transaction data between tax authorities. Spanish and EU exchanges report all transactions to Hacienda
- Loss offsetting: Crypto losses can offset crypto gains and other savings income (up to 25% of savings income base)`,
    gotchas: `Spain is one of the STRICTEST EU countries on crypto taxation. Every single swap, sale, or conversion is a taxable event — including stablecoins. FIFO (First In, First Out) accounting is the default method. DAC8 means Hacienda will receive transaction data directly from exchanges starting 2026 — the era of unreported crypto is over in Spain. Beckham Law holders: crypto gains from foreign platforms may be exempt as foreign-source income, but AEAT guidance is evolving.`,
    pro_tip: `Use Koinly, CoinTracking, or Accointing to track all transactions and generate Spanish tax reports (Modelo D format). The cost (€50–200/year) is trivial compared to the penalty risk. If you're considering moving to Spain with significant crypto: realize gains BEFORE establishing tax residency if possible. Spain has no long-term holding exemption (unlike Portugal's 365-day rule).`,
  },
  {
    topic: 'Autónomo (Self-Employed) Tax & Social Security',
    country: 'ES',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Seguridad Social; Royal Decree-Law 13/2022; Ministry of Inclusion 2026 tables',
    content: `Autónomo (freelancer/self-employed) regime in Spain (2026):
Registration: Alta en RETA (Régimen Especial de Trabajadores Autónomos) via Seguridad Social
Income tax: Standard IRPF progressive rates on net profit. Quarterly estimated payments (Modelo 130): 20% of net profit
IVA (VAT): 21% standard rate. File quarterly (Modelo 303). 10% reduced rate on food, transport, hospitality. 4% super-reduced on bread, milk, books, medicine
Social Security contributions (2026 — income-based system, 15 brackets):
- Net income up to €670/month: €217/month
- €670–€900: €225/month
- €900–€1,125: €230/month
- €1,125–€1,350: €260/month
- €1,350–€1,700: €290/month
- €1,700–€1,850: €320/month
- €1,850–€2,030: €370/month
- €2,030–€2,330: €390/month
- €2,330–€2,760: €420/month
- €2,760–€3,190: €445/month
- €3,190–€3,620: €490/month
- €3,620–€4,050: €535/month
- €4,050–€6,000: €715/month
- Over €6,000: €796/month
New autónomos (tarifa plana): €80/month for first 12 months regardless of income (24 months if income stays below minimum wage)
Benefits included: Public healthcare (SNS), pension, sick leave after day 4, maternity/paternity leave`,
    gotchas: `The 2023–2025 transitional system let autónomos still partially choose their contribution base. From 2026, it's strictly income-based — Seguridad Social will reconcile your actual income against your declared bracket and charge the difference. If you underestimate your income bracket, you'll owe back-contributions with interest. Social Security is NOT tax-deductible against IRPF (it's a separate obligation), but it does reduce your net taxable income as a business expense.`,
    pro_tip: `The tarifa plana (€80/month for 12 months) is incredible for new freelancers — register as autónomo the day you start earning, not before. For digital nomad visa holders working as autónomos: combine Beckham Law (24% flat on Spanish income) with tarifa plana (€80/month SS) for an extremely tax-efficient first year. After tarifa plana ends, the contribution jump is steep — plan your cash flow accordingly.`,
  },

  // === VISA ===
  {
    topic: 'Digital Nomad Visa (Visado para Teletrabajo)',
    country: 'ES',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ley 28/2022 (Startup Law); UGE (Unidad de Grandes Empresas); Consulate reports',
    content: `Spain Digital Nomad Visa (launched January 2023):
- Income requirement: 200% of SMI (Salario Mínimo Interprofesional) = €2,850/month (€34,200/year) for 2026
- Dependents: +75% SMI for first dependent (~€1,070), +25% SMI for each additional (~€357)
- Eligibility: Remote workers employed by or contracting with companies outside Spain. Max 20% of income from Spanish entities
- Duration: Initial visa 1 year. Renewable residence permit for up to 5 years (3-year renewal)
- Processing: Apply at Spanish consulate or, if already legally in Spain, directly at UGE (Unidad de Grandes Empresas)
- Documents: Employment contract or client contracts, proof of 3 months income, criminal record (apostilled), health insurance (Spanish provider required for residency), university degree or 3+ years professional experience
- Tax: Eligible for Beckham Law (24% flat rate for 6 years) — must apply separately via Modelo 149
- Path to permanent residency: After 5 years. Citizenship after 10 years (2 years if from Latin American country, Philippines, Andorra, Portugal, or Equatorial Guinea)
- Cost: ~€80 visa fee + ~€170 residence card (TIE)`,
    gotchas: `The "20% from Spanish entities" rule means if you pick up Spanish freelance clients, you must keep them under 20% of total income. Health insurance must be from a Spanish-authorized provider — SafetyWing alone is NOT sufficient for the residency permit (it works for the initial visa). Consulate processing times vary wildly: Madrid and Barcelona consulates are backlogged (8–12 weeks), while smaller consulates (Houston, Chicago, Edinburgh) process in 4–6 weeks. The income threshold rises when SMI increases — it went up in 2024, 2025, and 2026.`,
    pro_tip: `Apply for Beckham Law SIMULTANEOUSLY with your Digital Nomad Visa residency. The combination of 24% flat tax + foreign income exemption is one of Europe's best tax deals for remote workers earning $80K–$300K. If your company is US-based, structure a "remote work agreement" (not a Spanish employment contract) to satisfy the foreign-employer requirement. Budget €2,000–3,000 for an immigration lawyer to handle the full package.`,
  },
  {
    topic: 'Non-Lucrative Visa (Visado de Residencia No Lucrativa)',
    country: 'ES',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ley Orgánica 4/2000; Royal Decree 557/2011; IPREM 2026',
    content: `Non-Lucrative Visa — for retirees and passive income holders:
- Income requirement: 400% of IPREM (Indicador Público de Renta de Efectos Múltiples) = ~€2,400/month (€28,800/year) for main applicant
- Each dependent: +100% IPREM (~€600/month, €7,200/year)
- Income must be PASSIVE: pensions, rental income, investment returns, savings. NO active work permitted
- Duration: Initial 1-year visa → 2-year residence permit → renewable for 2 more years → permanent after 5 years
- Documents: Criminal record (apostilled + Hague), proof of income/savings (12 months bank statements), health insurance (full coverage, no copays, from Spanish provider), proof of accommodation
- Processing: 1–3 months at consulate
- Cost: ~€80 visa + ~€170 TIE card
- Key restriction: You CANNOT work in Spain — not even remotely. Any employment or self-employment activity violates the visa terms`,
    gotchas: `The "no work" restriction is absolute — you cannot be an autónomo, cannot have a Spanish employment contract, and technically cannot work remotely for a foreign company. If authorities discover active work, your visa can be revoked. The IPREM-based income requirement changes annually. Health insurance must have NO copays and NO waiting periods — most international plans don't meet this. Sanitas or Adeslas "visa-compliant" plans are specifically designed for this.`,
    pro_tip: `For retirees with pension income >€2,400/month, this is the simplest path to Spain. Unlike the Digital Nomad Visa, there's no degree or experience requirement. If you have rental income from property back home plus a pension, combine them to meet the threshold. After 1 year, you can switch to a work permit residency if you find an employer or want to become autónomo. The Non-Lucrative Visa is a foot in the door, not a permanent limitation.`,
  },
  {
    topic: 'Golden Visa (Ended April 2025) & Alternatives',
    country: 'ES',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ley 14/2013 (International Entrepreneurs Law); Royal Decree-Law 2025 abolishing RE route',
    content: `Spain's Golden Visa for real estate investment was ABOLISHED on April 3, 2025:
- Previously: €500,000+ property investment = residency permit with minimal presence requirement
- Reason: Government cited housing affordability crisis. 94% of Golden Visas were real estate-linked
- Existing holders: Permits remain valid and renewable. No retroactive cancellation
- Non-real-estate investment routes still available (rarely used):
  * €1M in Spanish company shares or bank deposits
  * €2M in Spanish government bonds
  * Business project of "general interest" (job creation, innovation)
  * These routes were always minor — <6% of Golden Visa applications
Alternatives for residency-through-investment:
- Portugal Golden Visa: €500K investment fund (no real estate since 2023)
- Greece Golden Visa: €250K–€500K real estate (depending on location)
- Italy Investor Visa: €250K+ in Italian startup or €2M government bonds
- Digital Nomad or Non-Lucrative Visa: If you have income/savings, these are now the primary Spain paths`,
    gotchas: `If you purchased Spanish property before April 3, 2025 with a Golden Visa, your permit is secure and renewable. But NEW applications based on real estate contracts signed after April 3, 2025 are rejected. Some buyers who signed promissory contracts (arras) before the cutoff but hadn't completed the purchase are in legal limbo — consult an immigration lawyer. The remaining investment routes (€1M shares, €2M bonds) are not cost-effective for most people — the Non-Lucrative or Digital Nomad Visa is a better path.`,
    pro_tip: `Don't chase Golden Visas in other EU countries just because Spain's ended. If you actually want to LIVE in Spain, the Digital Nomad Visa (for workers) or Non-Lucrative Visa (for retirees) are faster, cheaper, and give the same path to permanent residency and citizenship. The Golden Visa's only advantage was minimal presence — 7 days/year. If you plan to be in Spain more than that, you don't need it.`,
  },
  {
    topic: 'NIE, TIE & Empadronamiento — Essential Admin',
    country: 'ES',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Policía Nacional; Ayuntamiento procedures; extranjería offices',
    content: `Three essential admin steps for living in Spain:
1. NIE (Número de Identidad de Extranjero) — Foreigner ID number:
- Required for: Opening bank accounts, signing rental contracts, paying taxes, buying property, getting a phone contract
- How to get: Appointment at Policía Nacional extranjería office (Cita Previa system) or at Spanish consulate before arrival
- Documents: Passport, EX-15 form, reason for request (job offer, property purchase, etc.), Tasa 790-012 payment (€12)
- Timeline: Issued same day at appointment. Getting the APPOINTMENT is the hard part — 2–8 week waits in major cities
2. TIE (Tarjeta de Identidad de Extranjero) — Physical residence card:
- Must be applied for within 30 days of arrival in Spain (after visa)
- Documents: Passport, visa, EX-17 form, biometric photo, proof of address, Tasa 790-012 (€16.32)
- Issued 2–6 weeks after fingerprinting appointment
3. Empadronamiento — Municipal census registration:
- Register at your local Ayuntamiento (town hall) with proof of address
- Required for: Public healthcare (tarjeta sanitaria), children's school enrollment, utility contracts, residency renewals, eventually citizenship
- FREE. Usually same-day or within 1 week
- Must be updated every time you change address within Spain`,
    gotchas: `The Cita Previa (appointment) system is Spain's biggest bureaucratic nightmare. Online appointment slots for NIE/TIE in Barcelona and Madrid often sell out within seconds of release (typically at midnight). Many people resort to gestorías (administrative agencies) that use bots to grab appointments — cost: €50–150 for the appointment booking alone. If you arrive on a visa and DON'T apply for TIE within 30 days, you're technically in violation — though enforcement is lax, it can cause problems at renewal.`,
    pro_tip: `Get your NIE at the Spanish consulate in your home country BEFORE arriving — this skips the worst bottleneck. For TIE appointments: check the Cita Previa website daily at midnight, or use the Telegram group "Cita Previa España" where people share available slots. Empadronamiento is often overlooked but is critical — without it, you can't access public healthcare, and your years of residence may not count toward permanent residency or citizenship.`,
  },

  // === BANKING ===
  {
    topic: 'Banking for Expats',
    country: 'ES',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Banco de España; bank websites; expat community reports',
    content: `Opening a Spanish bank account (2026):
- Requirements: Passport + NIE (some banks accept passport alone for non-resident accounts)
- Banks accepting expats easily:
  * BBVA: Most foreigner-friendly major bank. English-language app. Online account opening possible with NIE. No monthly fees on basic account (Cuenta Online)
  * Sabadell: Good expat services, English-speaking staff in tourist areas. €0 fees on basic account
  * CaixaBank: Spain's largest bank. Extensive ATM/branch network. €6–12/month fees unless conditions met
  * Openbank (by Santander): Fully digital, no fees, English interface. Requires NIE
  * N26: German neobank, EU-licensed. Opens with passport (no NIE needed initially). Great for starting before NIE arrives
  * Wise: Multi-currency account. Best for receiving USD/GBP and converting to EUR
- SEPA transfers: Free within EU/EEA
- International wire fees: €15–30 at traditional banks
- Bizum: Spain's ubiquitous P2P payment system (like Venmo). Integrated into all major bank apps. Essential for daily life — used by 90%+ of the population
- Mortgage access: Available for non-residents at 60–70% LTV. Residents: up to 80% LTV. Rates: Euribor + 1–2%`,
    gotchas: `Most Spanish banks charge monthly maintenance fees (€3–12) unless you meet conditions (direct deposit, minimum balance, or linked insurance/investment products). Read fee schedules carefully. CaixaBank bought Bankia in 2021 and now has the most ATMs — but also the most complaints. Santander requires very specific documentation and is the least foreigner-friendly of the major banks. Opening a business account (cuenta de empresa) as a foreigner requires NIE + alta de autónomo + business plan in some cases.`,
    pro_tip: `The optimal setup: N26 or Wise on arrival (no NIE needed), then BBVA once you have your NIE. Use Wise for all currency conversion — saves 2–4% vs bank FX rates. Set up Bizum immediately — it's how landlords collect rent, friends split bills, and small businesses accept payment. Without Bizum, you're socially handicapped in Spain.`,
  },
  {
    topic: 'Investment & Crypto Platforms',
    country: 'ES',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'CNMV (Securities Commission); platform websites',
    content: `Investment platforms available in Spain:
- Spanish brokers: Renta 4 (full-service, Spanish stocks), MyInvestor (commission-free Spanish ETFs/funds, also offers mortgages and savings accounts — popular with Spanish millennials)
- EU-licensed brokers: DEGIRO (Netherlands, low fees), Trade Republic (Germany, commission-free), Interactive Brokers (best for US stocks)
- Robo-advisors: Indexa Capital (Spain's largest, Vanguard-based portfolios), InbestMe, Finizens
- Crypto exchanges: Bit2Me (Spanish, regulated by Banco de España), Binance, Kraken, Coinbase
- Savings accounts: MyInvestor (2.5% on first €70K, March 2026), Trade Republic (3.25% on uninvested cash), Openbank (2.27%)
- Letras del Tesoro (Spanish T-bills): 2.5–3% yield (March 2026). Buy direct at tesoro.es with Spanish bank account + digital certificate. €1,000 minimum
- SOCIMI (Spanish REITs): Listed on BMV. 0% corporate tax if they distribute 80%+ of profits. Yields 4–7%`,
    gotchas: `All Spanish-based platforms report to Hacienda (AEAT) automatically. International platforms (DEGIRO, IBKR, Coinbase) report under DAC/CRS frameworks — Hacienda receives your data with a 1-year delay. MyInvestor's high savings rate requires you to invest part of the deposit in their funds — read conditions carefully. Modelo 720 applies if your total foreign platform holdings exceed €50,000 per category.`,
    pro_tip: `MyInvestor is the sweet spot for expats in Spain — savings account, index fund investing, and mortgage all in one. Their Vanguard fund access at 0% commission is unmatched in Spain. For US stock access, Interactive Brokers is the clear winner. If holding crypto: use Bit2Me (Spanish, no Modelo 721 required since it's domestic) for your trading, and keep cold storage holdings documented for Modelo 721 if on foreign platforms.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Barcelona Neighborhood Guide',
    country: 'ES',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Idealista.com; Fotocasa; Ajuntament de Barcelona statistics',
    content: `Barcelona property prices by neighborhood (March 2026, per sqm):
- Eixample (Dreta/Esquerra): €5,000–€7,500/sqm. Modernist architecture, wide boulevards, central. Most popular expat area. 2BR: €350K–550K
- Gràcia: €4,500–€6,500/sqm. Village feel, plazas, independent shops. Young creative community. 2BR: €300K–450K
- Poblenou: €4,000–€6,000/sqm. Former industrial, now "22@" tech district. Beaches, loft-style living. Fastest appreciation. 2BR: €280K–420K
- Sarrià-Sant Gervasi: €5,500–€8,000/sqm. Upscale residential, international schools, quiet. Family favorite. 2BR: €400K–600K
- Sant Martí: €3,500–€5,000/sqm. Large, diverse. Parts near beach (Diagonal Mar) are premium. 2BR: €250K–350K
- Sants-Montjuïc: €3,000–€4,500/sqm. Working class going gentrified. Good transit. 2BR: €220K–320K
- Nou Barris: €2,000–€3,000/sqm. Most affordable in BCN. Furthest from center. 2BR: €140K–220K
Rentals (2BR): Eixample €1,400–2,000/month. Gràcia €1,200–1,800. Poblenou €1,100–1,700
Rental yields: 3.5–5% gross in city center. 5–6% in outer districts
Note: Barcelona has RENT CONTROL (Ley de Vivienda 2023) in designated "stressed" zones — most of the city. New rental contracts are capped at the reference price index`,
    gotchas: `Barcelona's rent control law means many landlords prefer short-term tourist rentals (which pay more) or leave apartments empty rather than accept capped rents. This makes finding a rental EXTREMELY competitive. Be prepared to offer 2–3 months deposit, provide proof of income (3x rent), and sign a 5-year lease (standard minimum in Spain for individual landlords, 7 years for corporate). Eixample buildings are beautiful but often lack elevators, modern plumbing, and insulation — 1900s construction.`,
    pro_tip: `For buying: Poblenou is Barcelona's best value play — tech companies (Amazon, Meta offices), beach proximity, and prices 20–30% below Eixample with faster appreciation. For renting: the October–January period is least competitive. For families: Sarrià has the international schools (British School of Barcelona, American School, Benjamin Franklin) but comes at a premium. Check the "índex de referència de preus" (reference price index) before signing any rental — landlords cannot legally exceed it.`,
  },
  {
    topic: 'Madrid Neighborhood Guide',
    country: 'ES',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Idealista.com; Fotocasa; INE statistics',
    content: `Madrid property prices by neighborhood (March 2026, per sqm):
- Salamanca: €6,000–€10,000/sqm. Most exclusive. Luxury shopping (Calle Serrano). Embassy district. 2BR: €450K–750K
- Chamberí: €5,000–€7,500/sqm. Traditional upscale. Beautiful buildings, local shops. 2BR: €380K–550K
- Malasaña: €4,500–€6,500/sqm. Hipster/creative hub. Nightlife, vintage shops, young crowd. 2BR: €320K–470K
- Chueca: €4,500–€6,500/sqm. LGBTQ+ friendly, vibrant, central. 2BR: €320K–470K
- La Latina: €4,000–€6,000/sqm. Historic, tapas bars, El Rastro flea market. 2BR: €280K–430K
- Retiro: €4,500–€6,500/sqm. Family-friendly, near Retiro Park. Quiet residential. 2BR: €330K–470K
- Lavapiés: €3,500–€5,000/sqm. Multicultural, edgy, rapidly gentrifying. 2BR: €250K–360K
- Tetuán: €3,000–€4,500/sqm. Working class, good metro. Affordable close to center. 2BR: €220K–330K
- Vallecas/Carabanchel: €2,000–€3,000/sqm. Most affordable in Madrid proper. 2BR: €140K–220K
Rentals (2BR): Salamanca €1,800–2,800. Chamberí €1,400–2,000. Malasaña €1,200–1,800
Note: Madrid does NOT have rent control (as of March 2026). The Comunidad de Madrid has resisted implementing the national rent control law`,
    gotchas: `Madrid's rental market is nearly as competitive as Barcelona's despite no rent control. Landlords require: 2 months deposit (fianza) + 1 month agency fee + first month rent upfront. That's 4 months of rent on day one. Gentrification in Lavapiés and Malasaña means prices are rising 8–12% annually. Salamanca and Chamberí are stable but premium. Madrid's summer heat (40°C+) makes air conditioning essential — older buildings may not have it, and retrofitting costs €2,000–4,000.`,
    pro_tip: `Madrid's biggest advantage: 0% wealth tax (regional exemption) + lower IRPF regional rates. If you earn €100K+ and plan to buy property €500K+, Madrid vs Barcelona saves you €5,000–15,000/year in taxes PLUS lower property prices per sqm. For living: Chamberí is the sweet spot — traditional, walkable, excellent food, central, and 15–20% cheaper than Salamanca. For investment: Tetuán is Madrid's up-and-coming area — new metro connections and regeneration projects.`,
  },
  {
    topic: 'Valencia & Costa del Sol Property',
    country: 'ES',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Idealista.com; Fotocasa; INE',
    content: `Valencia property prices (March 2026, per sqm):
- El Carmen (Old Town): €3,000–€4,500/sqm. Historic, nightlife, tourist area. 2BR: €200K–320K
- Ruzafa: €3,200–€4,800/sqm. BCN's "Gràcia" equivalent. Trendiest neighborhood, cafés, galleries. 2BR: €220K–340K
- Eixample (Ensanche): €2,800–€4,200/sqm. Modernist grid, wide streets. 2BR: €200K–300K
- Ciutat Vella: €2,500–€3,800/sqm. Historic, near Mercado Central. 2BR: €175K–270K
- Poblats Marítims (beach): €2,500–€4,000/sqm. Beachfront, Malvarrosa, Cabanyal. 2BR: €180K–285K
- Outer districts (Benimaclet, Patraix): €1,800–€2,800/sqm. Local feel, affordable. 2BR: €130K–200K
Rentals (2BR): Ruzafa €900–1,400. Eixample €800–1,200. Beach €850–1,300

Málaga/Costa del Sol (March 2026, per sqm):
- Málaga Centro: €3,500–€5,500/sqm. Historic, booming tech hub. 2BR: €250K–400K
- Málaga Este/Pedregalejo: €3,000–€4,500/sqm. Beach, local feel. 2BR: €220K–325K
- Marbella: €3,500–€7,000/sqm. Luxury, Golden Mile. 2BR: €300K–500K
- Estepona: €2,500–€4,000/sqm. Growing fast (+17% YoY). 2BR: €180K–285K
- Fuengirola/Benalmádena: €2,500–€3,800/sqm. Large expat communities, affordable beach. 2BR: €175K–270K
Rental yields: Valencia 5–7%, Costa del Sol 5–8% (tourist rentals)`,
    gotchas: `Valencia has rent control (Ley de Vivienda applies). Tourist rental licenses (VT - Vivienda de Uso Turístico) are heavily restricted in Valencia city center since 2024 — verify license availability before buying as investment. Costa del Sol prices have surged 15–20% since 2023 — some areas (Estepona, Málaga Centro) show signs of overheating. Valencia's October 2024 DANA floods damaged parts of La Horta/L'Albufera area — check flood risk maps before buying in southern suburbs.`,
    pro_tip: `Valencia is Spain's best value major city — a third of Barcelona prices with comparable quality of life, beach, international airport, and a growing tech scene. Ruzafa is the smart buy for younger expats; Eixample for families. For Costa del Sol: skip Marbella (overpriced, tourist-oriented) and look at Málaga Centro (Europe's fastest-growing tech hub — Google, Vodafone, TDK all have offices) or Estepona (still affordable, improving fast).`,
  },
  {
    topic: 'Property Purchase Process & Costs',
    country: 'ES',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Notario requirements; Registro de la Propiedad; ITP rates by region',
    content: `Buying property in Spain — costs and process:
Transaction costs (buyer pays):
- ITP (Transfer Tax, resale properties): 6–10% depending on region. Andalucía 7%, Catalunya 10%, Madrid 6%, Valencia 10%
- IVA (VAT, new builds): 10% + AJD (stamp duty) 0.5–1.5%
- Notary fees: 0.1–0.5% (€600–2,000 for typical transaction)
- Land registry: 0.1–0.3% (€400–1,000)
- Legal fees: 1–1.5% (€1,500–4,000 for independent lawyer)
- Gestoría (admin handler): €300–600
- Total closing costs: 10–13% of purchase price
Process:
1. Get NIE + Spanish bank account (1–4 weeks)
2. Property search + viewings (2–8 weeks)
3. Reservation deposit: €3,000–6,000 (holds property off market 1–2 weeks)
4. Contrato de arras (earnest money agreement): 10% deposit (legally binding — buyer loses deposit if they withdraw; seller pays 2x if they withdraw)
5. Due diligence: Nota simple from Registro de la Propiedad (title check), verify debts, IBI (property tax) paid, community fees current, building license
6. Escritura pública (deed) signed before notario + registration
Timeline: 4–8 weeks from arras to completion. Mortgage adds 4–6 weeks`,
    gotchas: `ITP rates vary dramatically by region — the SAME €400K apartment costs €24K in Madrid tax vs €40K in Catalunya or Valencia. This is a 4% difference that many buyers overlook. The arras contract is legally binding — if you sign and then can't get mortgage approval, you LOSE your 10% deposit unless you specifically negotiate a mortgage contingency clause (not standard in Spain). Always get a Nota Simple from the Registro — it confirms ownership, liens, and charges. Don't rely on the seller's copy.`,
    pro_tip: `Hire an independent lawyer (abogado) — NOT the agent's recommended notary. The notary in Spain is neutral and doesn't protect buyer interests. Budget €1,500–3,000 for a good real estate lawyer; they'll catch issues the notary won't flag. For foreigners: get mortgage pre-approval BEFORE signing arras, and include a mortgage contingency clause. Madrid's 6% ITP is the lowest in mainland Spain — another tax advantage of the capital.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Healthcare System & Tarjeta Sanitaria',
    country: 'ES',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Ministerio de Sanidad; SNS (Sistema Nacional de Salud); regional health services',
    content: `Spanish public healthcare (SNS):
- Universal coverage for all legal residents (with social security contributions or convenio especial)
- Tarjeta Sanitaria Individual (TSI): Your health card. Apply at local Centro de Salud with empadronamiento + NIE + social security number
- GP (médico de cabecera): Free. Assigned based on your registered address. Wait: 1–7 days typically
- Specialist referrals: Free. Wait: 2–6 months depending on specialty and region
- Emergency (Urgencias): Free. Walk-in. No appointment needed
- Hospital care: Free. Quality is excellent — Spain ranks 7th globally in Bloomberg Health Index
- Prescriptions: Subsidized. Workers pay 40% (capped at €10–60/month depending on income). Pensioners pay 10% (capped at €8–18/month)
- Dental: NOT covered by SNS (except emergency extractions and children's dental under 15)
- Convenio Especial: For residents without employment/autónomo status (e.g., Non-Lucrative Visa holders). Pay ~€60/month (under 65) or ~€157/month (65+) for full SNS access
- Regional variation: Catalonia, Basque Country, and Navarra have their own health systems (CatSalut, Osakidetza, SNS-Navarra) — generally higher quality and shorter waits`,
    gotchas: `Non-Lucrative Visa holders are NOT automatically covered by SNS — you need private insurance for the visa AND must apply separately for Convenio Especial if you want public access. Wait times for specialist referrals vary enormously: 45 days in Basque Country vs 150+ days in Andalucía or Canarias. Mental health is chronically underfunded — expect 2–4 month waits for psychology/psychiatry through SNS. Emergency rooms are heavily used for non-emergencies (it's free) — expect 4–8 hour waits for non-urgent issues.`,
    pro_tip: `Register at your Centro de Salud the DAY you get your empadronamiento — GP assignment can take 2–4 weeks. For the best public healthcare, live in: Basque Country, Navarra, or Catalunya — consistently ranked top 3 in Spain. For dental: prices are competitive without insurance — cleaning €40–70, crown €250–450, implant €600–1,200. Far cheaper than UK/US. Most dental clinics offer free initial consultation.`,
  },
  {
    topic: 'Private Health Insurance',
    country: 'ES',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Insurer rate cards; UNESPA (insurance association); visa requirement documentation',
    content: `Private health insurance in Spain (2026):
- Sanitas (owned by Bupa): Most popular with expats. Plans from €50–120/month (30–50yr), €100–250/month (50–65), €200–500/month (65+). English-speaking doctors. Visa-compliant plans available. Largest private hospital network
- Adeslas (owned by SegurCaixa): Spain's largest private insurer. Plans from €45–100/month (30–50yr). Extensive network, especially outside major cities. Less English-language support
- DKV: Plans from €50–110/month. Good coverage, smaller network. Strong in Catalonia
- Asisa: Plans from €40–90/month. Most affordable. Cooperative model. Good hospital network
- Cigna Spain: International option. €100–250/month. Best for frequent travelers. Full English service
- MAPFRE Salud: Plans from €50–120/month. Bundled with home/car insurance for discounts
Visa-compliant requirements: No copays, no waiting periods for basic coverage, minimum €30,000 coverage for hospitalization. Sanitas "My Health" and Adeslas "Completa" meet these requirements
Dental: Usually separate add-on. €8–20/month extra. Covers: cleanings, X-rays, basic fillings. Implants usually excluded or capped`,
    gotchas: `Spanish private insurers can refuse applicants over 65–70 or charge 3–5x standard rates. Apply BEFORE turning 65. Pre-existing conditions: 6–24 month waiting period (carencia). Some conditions may be permanently excluded. Sanitas and Adeslas don't cover: mental health inpatient, fertility treatments, or experimental treatments on basic plans. Always verify your plan meets visa requirements — some "basic" plans have copays that disqualify them for Non-Lucrative Visa renewal.`,
    pro_tip: `The optimal combo for long-term residents: SNS (public, free or €60/month via Convenio Especial) + a mid-range private plan (Sanitas or Adeslas, €60–100/month). Use private for GPs, specialists, dental (shorter waits). Use public for emergencies, complex surgeries, and chronic conditions (world-class, free). Total: ~€120–160/month for comprehensive dual coverage — a fraction of US insurance costs.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living by City',
    country: 'ES',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'INE; Numbeo; Expatistan; direct research',
    content: `Monthly cost of living for a couple (comfortable, not luxury) in EUR:
Barcelona: €2,800–€4,200
- Rent 2BR: €1,400–2,000. Groceries: €350–500. Dining: €250–400. Transport: €80–120 (T-Casual 10-trip card €11.35). Utilities: €120–180. Internet: €30–40
Madrid: €2,600–€4,000
- Rent 2BR: €1,300–1,900. Groceries: €300–450. Dining: €250–400. Transport: €55–70 (Abono monthly pass). Utilities: €120–180. Internet: €30–40
Valencia: €2,000–€3,200
- Rent 2BR: €900–1,400. Groceries: €280–400. Dining: €200–350. Transport: €40–55 (Bonobús). Utilities: €100–160. Internet: €30–35
Málaga: €2,100–€3,400
- Rent 2BR: €1,000–1,600. Groceries: €280–400. Dining: €200–350. Transport: €40–80. Utilities: €110–170. Internet: €30–35
Alicante/Costa Blanca: €1,800–€2,800
- Rent 2BR: €750–1,200. Groceries: €250–350. Dining: €180–300. Transport: €35–60. Utilities: €100–150. Internet: €30–35
Smaller cities (Salamanca, Granada, Bilbao): €1,600–€2,600
- Rent 2BR: €600–1,100. Groceries: €250–350. Dining: €150–280. Transport: €30–50. Utilities: €90–140

Spain minimum wage (SMI) 2026: €1,425/month (14 payments) = €17,094/year
Average salary: ~€2,200/month gross (€1,700 net)`,
    gotchas: `Barcelona and Madrid are NO LONGER cheap — they're approaching Southern European capital prices. A comfortable expat lifestyle in BCN or MAD requires €3,000+/month for a couple. Utilities in Spain include separate bills for electricity, gas, and water — plus community fees (€50–150/month) if you own. Summer A/C in the south adds €50–100/month to electricity. Madrid's summer heat and Barcelona's summer humidity are both brutal — budget for climate control.`,
    pro_tip: `Valencia is Spain's best value: 30–40% cheaper than Barcelona with beach, international airport, excellent food, and growing tech scene. For Mercadona-level grocery shopping: €60–80/week for a couple eating well. The "menú del día" (lunch set menu) at local restaurants runs €10–14 for 3 courses + drink — the best deal in European dining. Cook at home for dinner, eat menú del día for lunch = optimal cost/quality ratio.`,
  },
  {
    topic: 'Internet, Remote Work & Coworking',
    country: 'ES',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'CMT (telecom commission); Speedtest.net; coworking directories',
    content: `Internet and remote work in Spain (2026):
- Home fiber: Movistar (300Mbps–1Gbps, €35–55/month), Orange (500Mbps–1Gbps, €35–50), Vodafone (600Mbps–1Gbps, €40–55), MásMóvil/Yoigo (best value, 600Mbps from €25/month)
- Average speeds: Madrid 180Mbps, Barcelona 160Mbps, Valencia 140Mbps. Spain has 90%+ fiber coverage — one of the best in Europe
- Mobile: Movistar, Vodafone, Orange (big 3). MVNOs: Simyo, Lowi, Pepephone — much cheaper (€10–20/month for 20–50GB)
- 5G: Available in all major cities since 2023
- Coworking (Barcelona): WeWork (from €300/month), MOB (€195/month — best community), Aticco (€200/month), Betahaus (€225/month), CloudCoworking (€150/month)
- Coworking (Madrid): WeWork (from €290/month), Impact Hub (€210/month), Utopicus (€250/month), La Nave (public, subsidized — from €100/month)
- Coworking (Valencia): Wayco (€120/month — excellent), Vortex (€100/month), Lanzadera (€150/month, startup-focused)
- Time zone: CET (UTC+1)/CEST (UTC+2). 6–9 hours ahead of US. Good overlap with UK and Europe. Workable with US East Coast (2–6 PM Spain = 8 AM–12 PM EST)`,
    gotchas: `Spanish ISPs bundle fiber + mobile + TV aggressively — it's often cheaper to get a pack than standalone fiber. But contracts are typically 12–24 months with early termination fees (€100–300). Movistar has the best rural coverage but is the most expensive. In tourist areas during summer, shared building connections can slow significantly. Spain's siesta culture means many local businesses close 2–5 PM — coworking spaces stay open.`,
    pro_tip: `MásMóvil/Yoigo offers the best price/performance for fiber: 600Mbps for ~€25/month. For mobile, Simyo or Lowi (MVNOs) offer 20–30GB for €8–15/month — no reason to pay Movistar's €40+. Valencia's Wayco is the best coworking value in Spain — great community, events, €120/month for dedicated desk. Spain's time zone is ideal for remote workers serving EU clients but requires discipline for US collaboration — block morning hours for deep work, afternoon for calls.`,
  },
  {
    topic: 'Safety, Culture & Integration',
    country: 'ES',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'INE; Global Peace Index; Ministry of Interior crime statistics',
    content: `Safety and cultural integration:
SAFETY: Spain is very safe — #31 on Global Peace Index (2025), safer than France, Italy, UK, and US
- Violent crime: Extremely rare against expats. Homicide rate: 0.6 per 100K (vs US 6.3, France 1.3)
- Petty crime: Pickpocketing in Barcelona (Las Ramblas, metro, beaches) and Madrid (Sol, Gran Vía) is common. Tourist zones only
- Scams: Rental scams (paying deposits on fake listings) are prevalent — never pay without viewing. Fake police (asking to see wallet). Overcharging at tourist restaurants (always check menú)
CULTURE:
- Meal times: Lunch 2–3:30 PM (main meal). Dinner 9–10:30 PM. Restaurants don't open for dinner before 8:30 PM
- Social life: Centered around tapas, terraces, plazas. Spanish people socialize late — events starting at 10 PM are normal
- Language: Spanish is essential for long-term integration. English spoken widely in Barcelona, Madrid expat areas, and tourist zones. Very limited English in smaller cities and rural areas. Valencia and Barcelona also have regional languages (Valenciano, Català) — learning basic phrases helps enormously
- Bureaucracy: Notoriously slow. Everything requires cita previa (appointment). Patience is survival
- Work culture: Spain has one of Europe's longest work days (9 AM – 7 PM with 2-hour lunch break). Slowly shifting to continuous schedule (8 AM – 4 PM) in some companies`,
    gotchas: `Barcelona has a real pickpocketing problem — it's the #1 city in Europe for this crime. Watch your phone, wallet, and bag at all times on public transport and tourist areas. Use a money belt or front-pocket wallet. Don't leave phones on restaurant tables. Rental scam season peaks May–September when demand is highest — never wire money before seeing the property in person and verifying the landlord's identity (check DNI/NIE and property ownership via Nota Simple).`,
    pro_tip: `The fastest way to integrate: join a local "intercambio" (language exchange) — every city has weekly meetups. Learn Spanish to B1 level within your first year (take classes at Enforex, don Quijote, or International House — €150–300/month for group classes). The social payoff is massive. For daily safety: Spain is genuinely safe if you take basic precautions. The quality of life — walkable cities, excellent public transit, low crime, great food — is why Spain consistently ranks among the top expat destinations globally.`,
  },
  {
    topic: 'Pet Import & Veterinary Care',
    country: 'ES',
    category: 'lifestyle',
    last_updated: '2026-02-15',
    source: 'MAPA (Ministry of Agriculture); EU Regulation 576/2013',
    content: `Bringing pets to Spain:
- Dogs & cats from EU: EU Pet Passport with valid rabies vaccination. No quarantine. No additional tests
- From US/Canada: Microchip (ISO 11784/11785), rabies vaccination (21+ days before travel, within 12 months), USDA/CFIA-endorsed health certificate (within 10 days of travel). No quarantine for listed countries
- From non-listed countries: FAVN rabies titer test required (≥0.5 IU/ml), 3-month waiting period after test
- Dangerous breeds (PPP — Perro Potencialmente Peligroso): Pit Bull, Rottweiler, Staffordshire, Dogo Argentino, Fila Brasileiro, Tosa Inu, Akita Inu, Presa Canario. Require: liability insurance (€120K+), psychological fitness test, no criminal record, registration with Ayuntamiento. Fine for non-compliance: €2,400+
- Veterinary costs: Consultation €30–50. Annual vaccines €80–120. Spay/neuter €150–300. Emergency: €200–500. Pet insurance: €15–40/month
- Pet-friendly: Spain is very dog-friendly. Most outdoor restaurant terraces welcome dogs. Many beaches have designated dog areas (seasonally restricted in summer)
- Registration: Register pet with your Ayuntamiento within 3 months of arrival. Dog license required in most municipalities`,
    gotchas: `Spain's PPP (dangerous breed) law is strict — if your dog is on the list, you need liability insurance, a psychological evaluation, and annual registration. Some municipalities add additional breeds to the list. Not complying can result in fines AND confiscation. Airlines restrict brachycephalic breeds (pugs, bulldogs) in cargo during summer. USDA health certificate endorsement can take 2–3 weeks during busy periods.`,
    pro_tip: `Fly into Madrid-Barajas (best-organized veterinary control point) with all documents in a clear folder. TAP via Lisbon is often cheapest and most pet-friendly route from the US. Spanish vets are excellent and affordable — UNAM-trained vets are common. For pet insurance: Barkibu or Santévet offer comprehensive plans from €15/month. Register your pet's microchip at the European Pet Network (europetnet.com) for cross-border identification.`,
  },
];
