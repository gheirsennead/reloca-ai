import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const COSTA_RICA_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Territorial Tax System — Foreign Income Exempt',
    country: 'CR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Ministerio de Hacienda; Ley del Impuesto sobre la Renta; BDO Costa Rica 2026 brackets',
    content: `Costa Rica operates a TERRITORIAL tax system — only income sourced within Costa Rica is taxed. Foreign-source income is completely exempt regardless of your residency status.
This means:
- Remote work income from foreign employers/clients: NOT taxed in Costa Rica
- Foreign rental income: NOT taxed
- Foreign dividends, interest, capital gains: NOT taxed
- Foreign pensions: NOT taxed (only CCSS contributions apply)
- Income from a Costa Rican business or employment: TAXED at progressive rates
There is NO threshold, NO time limit, NO special regime needed — this is the default system for everyone. Unlike Colombia's 5-year exemption or Spain's Beckham Law, Costa Rica's territorial system is permanent.
Costa Rica has NO worldwide taxation for individuals. Period.
Note: There have been periodic discussions about moving to worldwide taxation (especially under OECD pressure), but as of March 2026, no legislation has been enacted.`,
    gotchas: `The territorial system is Costa Rica's biggest tax advantage, but it has nuances. If you work remotely for a foreign company BUT your work is performed in Costa Rica, tax authorities could theoretically argue the income is Costa Rican-sourced. In practice this is not enforced for remote workers, but the legal basis is debatable. If you create a Costa Rican entity (S.A. or SRL) to invoice foreign clients, the income flows through a local company and becomes Costa Rican-sourced — taxable. Structure carefully.`,
    pro_tip: `For remote workers, Costa Rica's territorial system is arguably the best in the Americas. No need to track days, no special visa required for the benefit, no application — just don't earn Costa Rican-source income. Keep your employment contract with a foreign entity, invoice from abroad (not through a local company), and your effective Costa Rican income tax is zero. The only mandatory cost is CCSS (healthcare) once you're a resident.`,
  },
  {
    topic: 'Income Tax Rates (Costa Rican-Source Income)',
    country: 'CR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Ministerio de Hacienda; Decree 45333-H; BDO CR brackets 2026',
    content: `Costa Rica income tax 2026 — applies ONLY to Costa Rican-sourced income:
Employed individuals (wage tax, monthly):
- Up to ₡918,000 (~$1,750): 0% (exempt)
- ₡918,000–₡1,347,000 (~$1,750–$2,565): 10%
- ₡1,347,000–₡2,364,000 (~$2,565–$4,500): 15%
- ₡2,364,000–₡4,727,000 (~$4,500–$9,000): 20%
- Over ₡4,727,000 (~$9,000+): 25%
Self-employed/independent (annual):
- Up to ₡6,244,000 (~$11,900): 0% (exempt)
- ₡6,244,000–₡8,329,000 (~$11,900–$15,865): 10%
- ₡8,329,000–₡10,414,000 (~$15,865–$19,835): 15%
- ₡10,414,000–₡20,872,000 (~$19,835–$39,750): 20%
- Over ₡20,872,000 (~$39,750): 25%
Corporate tax:
- Revenue up to ₡119,174,000/year: Progressive 5%/10%/15%/20%
- Revenue above ₡119,174,000/year: Flat 30%
Capital gains tax: 15% on profits from asset sales (introduced 2019). Properties acquired before July 2019: option to pay flat 2.25% of sale price instead
VAT (IVA): 13% standard rate. 4% on health services. 2% on basic basket goods. 1% on some medications
Tax credits: ₡1,710/month per child, ₡2,590/month per spouse`,
    gotchas: `The maximum personal income tax rate is only 25% — significantly lower than most Western countries. But remember: this only applies to Costa Rican-source income. If you're a remote worker with zero CR-source income, your effective rate is 0%. The 2019 capital gains tax was a major change — previously Costa Rica had NO capital gains tax. Properties bought before July 2019 can still use the favorable 2.25% flat rate on the sale price (not profit). Corporate tax at 30% is high — many small businesses prefer operating as individuals at 25% max.`,
    pro_tip: `If you need a local entity for business, consider an SRL (Sociedad de Responsabilidad Limitada) over an SA (Sociedad Anónima). SRLs have fewer reporting requirements and lower maintenance costs. For rental income from CR property: declare as business income (up to 25% rate) and deduct all expenses (maintenance, depreciation, insurance, CCSS). If your CR-source income is under ₡6.244M/year (~$11,900), you pay zero income tax even on local income.`,
  },
  {
    topic: 'Property Tax & Real Estate Costs',
    country: 'CR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Municipalidad tax codes; Registro Nacional; notary fee schedules',
    content: `Costa Rica property taxes and transaction costs:
Annual property tax: 0.25% of registered value (one of the lowest in the Americas)
- Registered value is usually BELOW market value (set at time of purchase)
- Paid quarterly to the local Municipalidad
- Luxury home tax (Impuesto Solidario): Additional 0.25%–0.55% on homes valued over ₡137M (~$260K). Progressive surcharge on luxury properties
Transaction costs (buying):
- Transfer tax: 1.5% (split buyer/seller by custom — typically buyer pays full amount)
- Legal/notary fees: 1%–1.5% (notary is mandatory for property transfers)
- Stamps and registration: 0.5%–0.8%
- Total closing costs: ~3.5%–4.5% of purchase price (very low by international standards)
Title system: Costa Rica uses a centralized Registro Nacional (National Registry). Title searches are reliable. "Plano catastrado" (cadastral plan) is mandatory — ensures exact boundaries
Foreigners: FULL property ownership rights, same as citizens. No restrictions on foreign ownership (exception: Maritime Zone — first 200m from high tide requires concession, not ownership)`,
    gotchas: `The Luxury Home Tax (Impuesto Solidario) catches many expats off guard — it's separate from the regular 0.25% property tax and applies to homes valued over ~$260K. A $400K home could pay $400–700/year in luxury tax on top of regular property tax. The Maritime Zone (Zona Marítima Terrestre — ZMT) is critical: the first 50m from high tide is PUBLIC land (no building), the next 150m requires a government concession — you don't own it, you lease it. This affects many beach properties in Guanacaste and Pacific coast. Always verify ZMT status before buying coastal property.`,
    pro_tip: `Costa Rica's 0.25% property tax and ~3.5% closing costs are among the lowest in the Americas. Compare: Spain 10-13%, Colombia 1.5-3%, US 2-5%. For the luxury tax: the assessed value is based on the construction value declared to the municipality — some properties have lower declared values, reducing the tax burden. Have your lawyer review this at purchase. Title insurance is available but rarely used — the Registro Nacional system is reliable. Budget $1,000-2,000 for a lawyer to handle due diligence and closing.`,
  },

  // === VISA ===
  {
    topic: 'Digital Nomad Visa (Visa de Nómada Digital)',
    country: 'CR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'DGME (Dirección General de Migración y Extranjería); Law 10.008/2021',
    content: `Costa Rica Digital Nomad Visa:
- Income requirement: $3,000/month individual OR $4,000/month for families (via employment or business income from abroad)
- Duration: 1 year, renewable for 1 additional year (2 years total)
- Eligibility: Remote workers employed by or contracting with companies outside Costa Rica. Freelancers with foreign clients qualify
- Documents: Passport, proof of income (3+ months bank statements, employment letter, or contracts), health insurance valid in Costa Rica (travel insurance or Caja enrollment), criminal background check (apostilled), application form
- Application: Online through DGME portal or in-person at migration offices
- Processing: 15-30 business days typically
- Cost: $100-150 application fee
- Tax benefit: Income earned from abroad is NOT taxable under territorial system (same benefit as regular residents, but DN visa confirms your right to work remotely without local work permit)
- NOT required to enroll in CCSS (healthcare) — health insurance is accepted
- Dependents: Spouse and children can be included on the same application (+$4,000/month total for families)
- Cannot work for Costa Rican companies or clients`,
    gotchas: `The DN visa is technically NOT residency — it's a special stay permit. This means: no path to permanent residency from DN visa alone, no DIMEX card, no ability to open bank accounts requiring residency. You're still legally a "long-term visitor." The $3,000/month threshold is higher than Colombia ($1,250) but lower than Bermuda ($6,250). If you plan to stay long-term, the Rentista or Investor visa is better — they provide actual residency with path to citizenship.`,
    pro_tip: `The DN visa is best for testing Costa Rica for 1-2 years before committing to formal residency. If you earn $3,000+/month remotely, you'd qualify anyway. The main advantage over tourist status: you get 1-2 years instead of 90-day visa runs, and it's explicit authorization to work remotely. For health insurance: travel insurance (World Nomads, SafetyWing ~$45/month) is accepted for DN visa — no need for expensive local plans. If you love Costa Rica after year 1, switch to Rentista for permanent residency path.`,
  },
  {
    topic: 'Rentista, Pensionado & Investor Visas',
    country: 'CR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'DGME; Ley General de Migración y Extranjería No. 8764',
    content: `Costa Rica residency visa categories:
1. Rentista (Stable Income):
- Income: $2,500/month for minimum 2 years, guaranteed by a Costa Rican bank
- Sources: Investment returns, rental income, business income, annuities — must be stable and documented
- Duration: 2-year temporary residency, renewable. Permanent after 3 years
- Bank guarantee: Must deposit $60,000 (24 × $2,500) into a Costa Rican bank account which is disbursed to you monthly
- CCSS enrollment: MANDATORY upon approval
2. Pensionado (Retiree):
- Income: $1,000/month from a recognized pension (Social Security, government, military, private pension fund)
- Pension must be permanent/lifetime — 401(k) withdrawals may not qualify
- Duration: 2-year temporary residency, renewable. Permanent after 3 years
- CCSS enrollment: MANDATORY
- Cost: Lowest residency threshold in Costa Rica
3. Inversionista (Investor):
- Investment: $150,000 minimum in approved activities
- Options: Real estate, active Costa Rican business, government-recognized projects (reforestation, tourism, export businesses)
- Duration: 2-year temporary residency. Permanent after 3 years
- Must maintain investment for the duration of residency
- CCSS enrollment: MANDATORY
Path to permanent residency: 3 years of temporary residency
Path to citizenship: 7 years of residency (5 years for citizens of Spain, Latin American countries)
All categories: Must be physically present in Costa Rica at least 1 day per year to maintain residency`,
    gotchas: `The Rentista bank deposit requirement is unusual — you must deposit $60,000 into a Costa Rican bank account upfront, which is then released to you at $2,500/month. This capital is locked for 2 years. Many expats find this surprising. The Pensionado visa requires a LIFETIME pension — not just savings withdrawals. If your income is from investments or savings, use Rentista instead. ALL residency categories require CCSS enrollment — even if you already have private insurance. This is non-negotiable and costs $80-350/month depending on declared income.`,
    pro_tip: `Pensionado ($1,000/month) is the cheapest path to Costa Rica residency. Social Security checks qualify, and the threshold is very achievable. For Investor: buying a $150K+ property gives you residency AND an asset. Combined with territorial tax system (zero tax on foreign income) and mandatory Caja healthcare (~$80-140/month for pensionados), the total cost of Costa Rica residency is remarkably low. The 1-day-per-year physical presence requirement is the most lenient in LATAM — you can maintain residency from abroad easily.`,
  },
  {
    topic: '90-Day Tourist Entry & "Perpetual Tourist" Crackdown',
    country: 'CR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'DGME; Bill to Regulate Re-Entry (2025); immigration enforcement reports',
    content: `Tourist entry to Costa Rica:
- Most Western passports (US, Canada, EU, UK, Australia): Up to 90 days visa-free
- No extension available — 90 days is the maximum per entry
- Border run: Historically, tourists would leave for 72 hours (usually to Panama or Nicaragua) and return for a new 90-day stamp
- Perpetual tourist crackdown (2025-2026): DGME has introduced legislation requiring tourists who exceed their permitted stay to wait 90 DAYS before re-entering. Immigration officers now have discretion to:
  * Grant fewer than 90 days (some officers give 30-60 days based on documentation)
  * Deny entry to frequent border-runners
  * Ask for return ticket, proof of accommodation, proof of funds
- Current enforcement: Stricter at Juan Santamaría (SJO) airport than at land borders (Paso Canoas/Panama, Peñas Blancas/Nicaragua)
- Overstay fine: ~$100 per month of overstay
- Common border run routes: Panamá (David or Bocas del Toro, 6-8 hours by bus from San José), Nicaragua (Managua, 8-10 hours)
- There is NO annual limit on total days like Colombia's 180-day rule — but repeated entries are increasingly scrutinized`,
    gotchas: `The perpetual tourist era is ending. Immigration officers are now trained to identify repeat border-runners and can deny entry or reduce stay duration. Some expats who've done this for years have been denied re-entry or given only 30 days. Having a return ticket, hotel booking, and proof of $500+ in your bank account significantly improves your chances of getting the full 90 days. If you plan to live in Costa Rica long-term, get proper residency — the Pensionado visa ($1,000/month) or DN visa ($3,000/month) is far less stressful than quarterly border runs.`,
    pro_tip: `If you must do a border run: Panama is the easier/safer route. Bocas del Toro is a nice 2-3 day trip. The Nicaragua border at Peñas Blancas is faster but more chaotic. Always get your exit stamp from Costa Rica AND entry stamp from Panama/Nicaragua — and the reverse on return. Missing stamps creates problems. Better approach: apply for the Digital Nomad Visa while on tourist status — it gives you 1-2 years and eliminates the border run issue entirely.`,
  },
  {
    topic: 'DIMEX Card & Residency Processing',
    country: 'CR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'DGME processing reports; immigration lawyer estimates',
    content: `DIMEX (Documento de Identidad Migratoria para Extranjeros) — Costa Rica's foreign resident ID:
- Issued after residency approval by DGME
- Required for: Bank accounts (full access), CCSS enrollment, vehicle registration, SIM contracts, property transactions (helpful but passport also works)
- Processing timeline (2026): 6-12 months from application to DIMEX in hand. Some cases take 18+ months
- Steps: (1) Submit application + documents to DGME, (2) Wait for resolution (approval/denial), (3) If approved: biometric appointment, (4) DIMEX card produced and mailed/picked up
- During processing: You receive a "comprobante" (receipt) that serves as temporary proof of residency application
- Cost: ~$50 for the card itself + ~$200-300 for fingerprinting and processing
- Renewal: Every 2 years (temporary) or 5 years (permanent)
- Citas (appointments): Booked through DGME online system — slots fill fast in San José
Immigration lawyers: Essential for navigating the process
- Cost: $1,500-3,000 for full residency application (lawyer + filing fees + CCSS setup)
- Recommended: AG Legal, CRIE, Outlier Legal, Expats Legal (reputable firms serving foreigners)`,
    gotchas: `The 6-12 month DIMEX processing time is the single biggest frustration for Costa Rica expats. During this limbo: you technically have residency (if approved) but no card. Banks vary on accepting the comprobante — BAC Credomatic is most flexible. Without DIMEX, you can't easily register a vehicle, get a local phone plan, or access some government services. Some applicants wait 18+ months — budget accordingly. The DGME system moves slowly and there's no way to expedite it.`,
    pro_tip: `Start your residency application IMMEDIATELY after deciding to stay. The clock doesn't start until you file. Use an experienced immigration lawyer — the $1,500-3,000 fee saves months of frustration navigating DGME's Spanish-only bureaucracy. While waiting for DIMEX: BAC Credomatic in expat-heavy areas (Escazú, Tamarindo) will often open accounts with passport + comprobante. Get a Kolbi prepaid SIM (passport only) for mobile. The comprobante is legally valid as ID for most purposes — carry it everywhere.`,
  },

  // === BANKING ===
  {
    topic: 'Banking for Expats',
    country: 'CR',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'SUGEF (financial regulator); bank websites; expat community reports',
    content: `Costa Rica banking for expats (2026):
- Currency: Costa Rican Colón (CRC/₡). 1 USD ≈ ₡525 (March 2026). Banks offer both CRC and USD accounts
- Banks:
  * BAC Credomatic: Most expat-friendly. Opens accounts for non-residents with passport + proof of income. English-speaking staff in major branches. Best app. USD and CRC accounts. No minimum balance (basic account)
  * Banco Nacional: Largest state bank. DIMEX or cédula required. Lower fees. Less English support
  * Banco de Costa Rica (BCR): State bank. Will open accounts for tourists in some branches. Limited English
  * Scotiabank (now absorbed into Davivienda CR): Being integrated — check current status
  * Mucap: Mutual fund/savings institution. Popular for CRC savings (higher interest rates)
- Account types: Savings (no minimum), checking ($50-100 minimum), USD savings, certificates of deposit
- ATM: Widespread in cities and tourist areas. Daily limit: ₡500,000-1,000,000 (~$950-1,900) or $500-1,000 USD
- International transfers: Possible via SWIFT (fees: $25-50). SINPE (local instant transfer system — like Venmo) is essential for daily life
- Credit cards: Available after 6-12 months of account history. Colones and USD cards available
- SINPE Móvil: Costa Rica's mobile payment system. Linked to phone number. Accepted everywhere — markets, taxis, restaurants. Essential for daily life`,
    gotchas: `Costa Rica has strict anti-money-laundering (AML) compliance — banks will ask for detailed proof of income origin, especially for USD deposits >$10,000. Some banks freeze accounts pending documentation. The CRC/USD dual-currency system is convenient but: banks give poor exchange rates (2-4% spread). Use Wise for large transfers from abroad. SINPE Móvil requires a Costa Rican bank account — without it, you can't use the country's primary payment system. BAC is the only reliable option for non-residents.`,
    pro_tip: `Banking stack: BAC Credomatic immediately (passport account), then Banco Nacional once you have DIMEX (lower fees, state bank security). Set up SINPE Móvil on your BAC account day one — it's how Costa Rica pays for everything. For USD→CRC conversion: Wise to BAC USD account, then convert to CRC within BAC (better rate than Wise's CRC rate). Keep both USD and CRC accounts — many bills (rent, car payments) are priced in USD while daily expenses are in CRC.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Central Valley — Escazú, Santa Ana & Highland Towns',
    country: 'CR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Encuentra24.com; Point2Homes; local agents; TheLatinvestor 2026',
    content: `Central Valley property — the "civilized" expat corridor:
- Escazú: $1,500–$3,000/sqm (condos $2,000–$3,500). Most upscale expat suburb. International restaurants, CIMA Hospital, Country Day School, multiplexas. 2BR condo: $150K–350K. Rentals: $1,000–2,200/month
- Santa Ana: $1,200–$2,500/sqm. Adjacent to Escazú, slightly cheaper. Growing fast. Forum Santa Ana mall. 2BR: $120K–280K. Rentals: $800–1,800/month
- Rohrmoser/Sabana: $1,000–$2,000/sqm. Closer to San José center. More urban. 2BR: $90K–200K. Rentals: $700–1,400/month
- Atenas: $800–$1,500/sqm. "Best Climate in the World" marketing. Small-town feel, large expat retiree community. Cooler altitude (~700m). Houses: $120K–300K. Rentals: $500–1,000/month
- Grecia: $700–$1,200/sqm. Colonial town, friendly locals, growing expat community. 2BR house: $80K–180K. Rentals: $400–800/month
- San Ramón: $600–$1,000/sqm. University town, cooler climate, most affordable in Central Valley. 2BR: $60K–150K. Rentals: $350–700/month
- Heredia: $900–$1,600/sqm. University town near San José, coffee culture. 2BR: $80K–160K
Climate: Year-round 18–28°C (64–82°F). "Eternal spring." Rainy season (May-Nov) = afternoon showers, mornings clear. No A/C needed
Infrastructure: Best roads, hospitals, schools, internet in the country`,
    gotchas: `Escazú has become Costa Rica's Beverly Hills — prices approach US suburban levels for premium properties. Traffic on the Escazú-San José corridor is brutal (45-90 min for 10km during rush hour). Atenas and Grecia are charming but car-dependent — no useful public transit. Central Valley is NOT beachy — the coast is 2-4 hours away. If you want beach and convenience, look at Guanacaste. Many Central Valley homes are on mountainsides — verify access road quality during rainy season before buying.`,
    pro_tip: `Santa Ana is the best value in the Central Valley expat corridor — 80% of Escazú's amenities at 70% of the price. For retirees: Atenas and Grecia offer incredible value with established English-speaking expat communities and temperate climate. San Ramón is the emerging pick — affordable, university town energy, 45 min from SJO airport. For investment: Central Valley has lower rental yields than beach areas (4-6% vs 7-10%) but much more stable appreciation and year-round demand.`,
  },
  {
    topic: 'Guanacaste & Pacific Coast',
    country: 'CR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Encuentra24; Coldwell Banker CR; local agents; TheLatinvestor 2026',
    content: `Guanacaste & Pacific Coast property (March 2026):
- Tamarindo: $2,500–$5,000/sqm. Premier surf/expat beach town. International restaurants, nightlife. 2BR condo: $200K–400K. Rentals: $1,500–2,500/month. Airbnb yields: 8–12%
- Nosara (Playa Guiones/Pelada): $2,500–$5,000/sqm. Yoga/wellness/surf community. Very exclusive. Limited development (Blue Zone adjacent). 2BR: $250K–500K. Rentals: $1,500–3,000/month
- Playas del Coco: $1,500–$3,000/sqm. More affordable beach option. Diving, fishing. Large Canadian expat community. 2BR: $120K–250K. Rentals: $800–1,500/month
- Flamingo: $2,000–$4,000/sqm. Upscale marina town. Luxury condos. 2BR: $180K–350K
- Sámara: $1,500–$3,000/sqm. Family-friendly, laid-back. Growing but less developed. 2BR: $130K–280K
- Papagayo Peninsula: $3,000–$8,000+/sqm. Ultra-luxury (Four Seasons, Andaz). Investment properties $500K–$3M+
- Southern Pacific (Dominical/Uvita/Ojochal): $1,200–$3,000/sqm. Emerging area. Cheaper than Guanacaste. Whale-watching, waterfalls. 2BR: $100K–250K
Climate: Hot and dry (Dec-Apr), hot and wet (May-Nov). Guanacaste is the driest province. A/C essential year-round. 28–35°C
Airports: Daniel Oduber (LIR) in Liberia serves Guanacaste — direct flights from US/Canada`,
    gotchas: `Beach town prices are 20–40% higher than Central Valley for comparable quality. Maintenance costs are higher too — salt air corrodes everything, A/C runs constantly ($100–200/month electricity). Rainy season (May-Nov) dramatically reduces tourist rental income — budget for 5–6 strong months, not 12. The Maritime Zone (ZMT) affects many coastal properties: first 50m from high tide is public, next 150m is concession (government lease, not ownership). A "titled" property vs "concession" property is a CRITICAL distinction — always verify. Water availability is a growing issue in Guanacaste — some developments have restrictions during dry season.`,
    pro_tip: `Playas del Coco is Guanacaste's best value — beach life at 40–60% of Tamarindo/Nosara prices, with the Liberia airport 25 min away. For Airbnb investment: Tamarindo leads in occupancy (70%+ high season) but management costs are 25–35% of revenue. The Southern Pacific (Uvita/Ojochal) is the "next Nosara" — buy now at half the price. For families: Sámara has the safest swimming beach and best community feel. Always buy TITLED property, not concession — concessions can be revoked and are harder to finance.`,
  },
  {
    topic: 'Caribbean Coast & Other Regions',
    country: 'CR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Encuentra24; local agents; expat community reports',
    content: `Caribbean Coast & Other Regions:
- Puerto Viejo de Talamanca: $1,000–$2,500/sqm. Bohemian Caribbean vibe, reggae culture, coral reefs. Afro-Caribbean/indigenous influence. 2BR: $80K–200K. Rentals: $500–1,200/month
- Cahuita: $800–$1,800/sqm. Quieter than Puerto Viejo, national park. 2BR: $60K–150K
- Limón Province: Most affordable coast. Limited infrastructure. Caribbean climate (rain year-round, no true dry season)
- Arenal/La Fortuna: $800–$1,500/sqm. Volcano, hot springs, adventure tourism. Small expat community. 2BR: $60K–130K
- Monteverde: $900–$1,800/sqm. Cloud forest, eco-tourism. Cool climate (like Central Valley). Very small, limited inventory
- Jacó: $1,200–$2,800/sqm. Closest beach to San José (1.5 hrs). Party town. Condo-heavy. 2BR: $100K–230K. Airbnb popular
Caribbean notes: Culturally distinct from Pacific side. English Creole spoken widely in Limón Province. More affordable, less developed, fewer expat services. Rain is year-round (not seasonal like Pacific). Infrastructure weaker — power outages more frequent`,
    gotchas: `Puerto Viejo is beautiful but isolated — the road from San José takes 4-5 hours, the nearest hospital is basic (serious cases go to Limón or San José), internet can be unreliable, and property titles are complicated (many indigenous/Afro-Caribbean land claims). Caribbean coast has NO dry season — expect rain any month. Jacó's proximity to San José makes it convenient but it's Costa Rica's most "party" town — drugs and nightlife are more visible than other beach towns.`,
    pro_tip: `Puerto Viejo is Costa Rica's best-kept budget secret — Caribbean vibes, snorkeling, surfing, and property at half Pacific coast prices. Perfect for adventurous expats comfortable with less infrastructure. Arenal is ideal for nature lovers who want cool evenings and hot springs on their doorstep. For investment: Jacó has the highest short-term rental demand due to San José proximity — weekend getaway market is strong year-round.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'CCSS (Caja) Public Healthcare',
    country: 'CR',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'CCSS (Caja Costarricense de Seguro Social); contribution rate tables; expat enrollment guides',
    content: `Costa Rica's Caja (CCSS) — universal public healthcare:
ENROLLMENT: MANDATORY for all legal residents — even if you have private insurance
Contribution rates (based on declared income):
- Pensionados: 12–14% of declared pension ($1,000 minimum = ~$120–140/month)
- Rentistas: 12–14% of declared income ($2,500 minimum = ~$300–350/month)
- Investors: Based on declared income, minimum ~$80/month
- Employees: 10.67% employee + 26.67% employer
- Voluntary (asegurado voluntario): ~₡42,000/month (~$80) — minimum for those without formal income
COVERAGE: Comprehensive — GP, specialists, surgery, hospitalization, maternity, prescriptions, lab work, imaging. Dental (basic). Mental health
Wait times: GP 1–3 weeks. Specialists 2–6 months. Surgery 3–12 months (non-emergency). Emergency: immediate
Quality: EBAIS (local clinics) for primary care — basic but functional. Hospitals (CCSS) for everything else. Best hospitals: Hospital México, Hospital San Juan de Dios, Hospital Calderón Guardia (all in San José metro)
World ranking: Costa Rica has higher life expectancy than the US (80.3 vs 77.5 years) and spends 7.6% of GDP on healthcare
Blue Zones: Nicoya Peninsula is one of 5 global Blue Zones — population lives to 90+ at exceptional rates`,
    gotchas: `CCSS is MANDATORY even if you have CIMA or Clínica Bíblica private insurance. Failing to pay CCSS can block your residency renewal. The $300-350/month cost for Rentistas is a hidden expense many don't budget for. Wait times for specialists can be frustratingly long — 4-6 months for non-urgent appointments is normal. EBAIS clinics in rural areas may have limited English. Medications on the CCSS formulary are free, but newer/brand-name drugs may not be available — you'll need to buy them privately.`,
    pro_tip: `The Caja is excellent for emergencies, chronic disease management, and basic care. Supplement with a private plan for faster specialist access. The most cost-effective approach: Caja (mandatory, $80-350/month) + annual checkup at CIMA or Bíblica (~$200-400 out of pocket). For dental: CCSS covers basic work. Private dental is still very affordable ($40-80 cleaning, $200-400 crown, $500-900 implant). Costa Rica's healthcare outcomes rival the US at a fraction of the cost — don't underestimate the Caja.`,
  },
  {
    topic: 'Private Healthcare — CIMA, Clínica Bíblica & Insurance',
    country: 'CR',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'CIMA Hospital; Clínica Bíblica; insurance provider rates',
    content: `Private healthcare in Costa Rica (2026):
Top private hospitals:
- CIMA Hospital (Escazú): Part of International Hospital Corporation. JCI accredited. Full English-speaking staff. All specialties. Emergency room. Similar to US hospital experience. Costs: 40-60% less than comparable US care
- Clínica Bíblica (San José + Santa Ana): Costa Rica's most respected private hospital. JCI accredited. Health navigator program for foreign patients. Excellent oncology, cardiology, orthopedic
- Hospital La Católica (Guadalupe): Good mid-range option. English available. Less expensive than CIMA/Bíblica
Price examples (CIMA/Bíblica, cash pay, 2026):
- GP consultation: $60-100
- Specialist visit: $80-150
- Blood panel: $50-120
- CT scan: $600-1,100
- MRI: $800-1,500
- Knee replacement: $12,000-18,000 (US: $35,000-60,000)
- Dental implant: $600-1,200
- LASIK: $1,200-2,000
Private insurance options:
- Local: INS (Instituto Nacional de Seguros) — state insurer, plans from $100-300/month
- International: Cigna, Bupa, Allianz — $200-500/month. Better for medical evacuation and multi-country coverage
- Medical tourism: Costa Rica is a major medical tourism destination — procedures + recovery vacation packages available`,
    gotchas: `CIMA is excellent but expensive by Costa Rican standards — a simple ER visit can run $500-1,500 before tests. Without insurance, a hospitalization at CIMA can quickly reach $10,000+. Clínica Bíblica is generally 20-30% cheaper than CIMA for comparable quality. Private insurance in Costa Rica does NOT replace CCSS — you must pay both. The INS (state insurer) private plans are affordable but have limited hospital networks. International plans (Cigna, Bupa) accept CIMA and Bíblica but premiums are 2-3x local plans.`,
    pro_tip: `The optimal healthcare setup: CCSS (mandatory) + INS basic private plan ($100-150/month) for faster specialist access and CIMA/Bíblica emergencies. Total: ~$200-500/month for comprehensive dual coverage. For medical tourism visitors: Clínica Bíblica's international patient department handles everything — airport pickup, accommodation, translator, treatment, follow-up. Dental tourism is especially popular: a full mouth restoration costs $8,000-15,000 vs $30,000-60,000 in the US.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living by Region',
    country: 'CR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; Expatistan; INEC; expat community surveys; March 2026 rates (₡525/USD)',
    content: `Monthly cost of living for a couple (comfortable), in USD:
Central Valley (Escazú/Santa Ana): $2,200–$3,500
- Rent 2BR: $1,000–2,000. Groceries: $350–500. Dining: $200–400. Transport: $100–200 (car essential). Utilities: $100–180. Internet: $40–60. Health (CCSS+private): $200–500
Central Valley (Atenas/Grecia/San Ramón): $1,500–$2,500
- Rent 2BR: $500–1,000. Groceries: $300–450. Dining: $150–300. Transport: $80–150. Utilities: $80–150. Internet: $40–55
Guanacaste beaches (Tamarindo/Nosara): $2,500–$4,000+
- Rent 2BR: $1,500–2,500. Groceries: $400–600 (higher — fewer supermarkets). Dining: $300–500. Utilities: $150–250 (A/C!). Transport: $80–150
Pacific beaches (Playas del Coco/Sámara): $2,000–$3,200
- Rent 2BR: $800–1,500. Groceries: $350–500. Dining: $200–400. Utilities: $120–200
Caribbean (Puerto Viejo): $1,200–$2,200
- Rent 2BR: $500–1,000. Groceries: $250–400. Dining: $150–300. Utilities: $80–150
Key costs:
- Gasoline: $1.20-1.40/liter (expensive for LATAM)
- Car: Almost essential outside San José. Used SUV: $15K-25K. Import taxes make vehicles expensive (40-80% duty)
- Domestic worker: $400-600/month (common for middle-class households)
- Private school: $300-800/month (bilingual schools)`,
    gotchas: `Costa Rica is NOT a budget destination — it's the most expensive country in Central America. Beach towns are 20-40% pricier than Central Valley, and imported goods carry heavy tariffs. Cars are shockingly expensive — a Toyota RAV4 that costs $30K in the US costs $45K+ in Costa Rica due to import duties. Groceries at AutoMercado (premium) are near US prices. Use Megasuper or PriceSmart (Costco-equivalent) for savings. Electricity is expensive ($0.15-0.20/kWh) — A/C in beach areas adds $100-200/month.`,
    pro_tip: `The ferias (weekly farmers markets) are where locals shop — fruits, vegetables, eggs, and cheese at 40-60% less than supermarkets. Every town has one, usually Saturday mornings. PriceSmart membership ($35/year) is essential for bulk buying at US-level prices. Cook at home using local ingredients (rice, beans, plantains, fresh fish) and your food budget drops dramatically. For vehicles: buy used within Costa Rica (avoid import duties) through Craigslist Costa Rica or Encuentra24. The "soda" (local family restaurant) serves casado lunch for $4-6 — rice, beans, protein, salad, plantain. Eat sodas for lunch, cook dinner.`,
  },
  {
    topic: 'Internet, Remote Work & Coworking',
    country: 'CR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'SUTEL (telecom regulator); Speedtest.net; ISP websites; coworking directories',
    content: `Internet and remote work in Costa Rica (2026):
- Home fiber ISPs:
  * Kolbi (ICE — state telco): Most widespread. 50–300Mbps from ₡18,000–55,000/month ($34–105). Best rural coverage
  * Tigo (Liberty Latin America): 100–500Mbps from ₡20,000–60,000/month ($38–114). Best speeds in Central Valley
  * Cabletica: 50–200Mbps from ₡15,000–45,000/month ($29–86). Cable-based, good in select areas
  * Claro: Mobile-focused but offers home internet in some areas
- Average speeds: San José metro 80-120Mbps. Beach towns 30-80Mbps. Rural 10-30Mbps
- Fiber availability: Good in Central Valley, spotty outside. Guanacaste beach towns improving rapidly
- Mobile: Kolbi, Claro, Movistar. Prepaid SIM: ₡2,000-5,000 for 3-10GB. Postpaid: ₡10,000-25,000 for unlimited
- 4G: Good in cities and beach towns. Weak in mountains and rural Caribbean
- Coworking:
  * San José/Escazú: Impact Hub ($200/month), WeWork ($250+), Coworking CR ($150/month)
  * Tamarindo: Tropical Coworking ($200/month), Selina ($10-15/day)
  * Nosara: Outsite ($300/month — includes accommodation), The Bodhi ($12/day)
  * Puerto Viejo: Selina ($8-12/day), limited options
- Time zone: CST (UTC-6). 1 hour behind US Eastern. Excellent for US clients. 7-8 hours behind Europe`,
    gotchas: `Internet outside the Central Valley can be unreliable — especially during rainy season (May-Nov) when power outages knock out routers. Beach town internet has improved dramatically but still lags behind San José. Nosara and Puerto Viejo can have multi-hour outages. Essential: get a backup 4G hotspot (Kolbi or Claro) for critical meetings. Home installation can take 2-4 weeks — plan ahead if renting. Starlink is available in Costa Rica ($120/month + $599 equipment) and is the go-to for rural properties.`,
    pro_tip: `For remote workers: Escazú/Santa Ana offers the best internet reliability (fiber 200Mbps+) with the most coworking options. If you need beach life + reliable internet: Tamarindo is the safest bet — most developed digital infrastructure of any beach town. Always test internet at your rental BEFORE signing a lease — ask for a Speedtest screenshot. For backup: Kolbi 4G gives 20-40Mbps on a good day — sufficient for video calls. The CST timezone makes Costa Rica ideal for US companies: your 9-5 aligns perfectly with EST (1 hour offset) and overlaps well with PST.`,
  },
  {
    topic: 'Safety, Nature & Pura Vida Culture',
    country: 'CR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'OIJ (Organismo de Investigación Judicial); Global Peace Index; UNDP',
    content: `Safety and culture:
SAFETY: Costa Rica is the safest country in Central America and one of the safest in LATAM
- Global Peace Index rank: ~39 (2025) — safer than France, Italy, and most of LATAM
- No military — abolished in 1948. Police and coast guard only
- Crime profile: Petty theft (break-ins, car theft) is the main risk. Violent crime against expats is rare but increasing in tourist hotspots
- Safest areas: Central Valley suburbs (Escazú, Santa Ana, Heredia), Grecia, Atenas, Sámara
- Higher-risk areas: Parts of San José (downtown at night), Limón city, Jacó (drug-related)
- Break-ins: The most common crime affecting expats. Secure your home — alarm systems, bars on windows (rejas), guard dogs
NATURE: 5% of world's biodiversity. 25% of territory is protected. Sloths, toucans, monkeys, sea turtles, whale sharks
CULTURE:
- "Pura Vida": Not just a slogan — genuine attitude of contentment, friendliness, and simplicity
- Ticos (Costa Ricans) are warm, polite, indirect. Confrontation is avoided
- Language: Spanish required for integration. English widely spoken in tourist/expat areas
- Bureaucracy: SLOW. "Mae" (dude) — you'll hear it constantly
- Sustainability: World leader in renewable energy (98%+), reforestation, eco-tourism
- Education: 97% literacy rate. Strong public university system (UCR, UNA, TEC)`,
    gotchas: `Property break-ins are common enough that locals budget for security (rejas, alarm, camera system = $500-1,500). Never leave valuables visible in a parked car — windows WILL be smashed. Costa Rica's "indirect" culture means people rarely say "no" — "maybe tomorrow" or "we'll see" often means no. Driving in Costa Rica requires patience: roads outside the Central Valley are often unpaved, potholed, or single-lane bridges (puentes de un solo carril). Rainy season (May-Nov) makes some roads impassable — 4WD recommended outside the Central Valley.`,
    pro_tip: `"Pura Vida" is real but requires adjustment — things move slower, deadlines are flexible, and punctuality is... aspirational. Embrace it rather than fight it. For home security: a good alarm system (ADT or local provider, $30-50/month) plus a friendly dog is the most effective combination. Join your local Facebook expat group (every area has one) for real-time security alerts and community support. Invest in a 4WD vehicle if living outside the Central Valley — you'll need it 6 months of the year. Costa Rica's renewable energy means guilt-free A/C usage if that matters to you.`,
  },
  {
    topic: 'Driving, Transport & Vehicle Ownership',
    country: 'CR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'COSEVI (traffic authority); RITEVE (vehicle inspection); import duty schedules',
    content: `Transportation in Costa Rica (2026):
DRIVING:
- Foreign license: Valid for 90 days (tourist visa duration). After residency: must get Costa Rican license
- License conversion: Written test + eye exam. Can use foreign license during first year of residency
- Roads: Central Valley highways are decent. Outside: expect potholes, unpaved roads, river crossings, narrow bridges. Google Maps often underestimates travel times by 30-50%
- Fuel: $1.20-1.40/liter. Stations are spread thin outside cities — don't let your tank get below half
- Restricción vehicular: San José plate-based driving restriction. Different plates banned on different weekdays during rush hours (6-8:30 AM, 4-6 PM)
VEHICLE COSTS (why cars are expensive):
- Import duty: 40-80% on new/used vehicles depending on age, engine size, and type
- Marchamo (annual registration/insurance): Mandatory. 0.5-3.8% of vehicle's fiscal value. Includes liability insurance
- RITEVE (annual inspection): Mandatory. ~₡12,000 ($23). Strict — many used cars fail
- Example: A used 2020 Toyota RAV4 costs $35K-45K in Costa Rica (vs $25K-30K in the US)
PUBLIC TRANSPORT:
- San José: Bus system (extensive, cheap — ₡300-700 per ride/$0.60-1.35). No metro
- Taxis: Red taxis (María meter). Uber/DiDi operate but in legal gray area
- Between cities: Bus network covers most destinations. San José→Tamarindo: ~5 hrs, $10-15. San José→Puerto Viejo: ~4.5 hrs, $10
- Domestic flights: Sansa Airlines serves 12+ destinations. San José→Tamarindo: 45 min, $90-130 one way`,
    gotchas: `Cars are the single biggest unexpected expense for Costa Rica expats. The 40-80% import duty is brutal, and there's no way around it. Used cars retain value well because of this (good for resale, bad for buying). RITEVE inspection is strict — a cracked windshield, worn tires, or faulty lights = fail and re-inspection fee. The Marchamo is due every December and can be $300-1,500+ for a normal vehicle. Waze is more reliable than Google Maps in Costa Rica — use it religiously. During rainy season, flash floods can make roads impassable with zero warning.`,
    pro_tip: `Buy a used vehicle WITHIN Costa Rica to avoid import duties. The best deals are from expats leaving the country — check Craigslist Costa Rica and Facebook Marketplace groups. Toyota, Hyundai, and Suzuki have the best service networks. A Suzuki Jimny 4WD ($18K-25K used) is the ultimate Costa Rica vehicle — cheap, reliable, goes anywhere. For the Central Valley only: a smaller 2WD is fine. ALWAYS budget the Marchamo as an annual cost — many expats forget and face a December surprise.`,
  },
];
