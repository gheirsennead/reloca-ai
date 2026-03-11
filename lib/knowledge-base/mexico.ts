import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const MEXICO_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Mexican Tax Residency & Rates',
    country: 'MX',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SAT (Servicio de Administración Tributaria); Ley del ISR',
    content: `Mexico income tax (ISR) for residents (2026):
- Progressive rates: 1.92% (up to MXN 8,952) to 35% (above MXN 4.5M/~$225K USD)
- Tax residency: 183+ days in Mexico per calendar year, OR "center of vital interests" (home, >50% income from Mexico)
- Non-residents: 25% flat on Mexican-source income. 0-30% on other income types
- Capital gains (residents): Added to annual income, taxed at progressive rates
- Capital gains (non-residents): 25% on net gain or 35% on gross without deductions
- Dividends from Mexican companies: 10% additional tax on distribution (on top of corporate 30%)
- Annual filing deadline: April 30 for previous year
- RFC (tax ID): Required for all residents. Obtain at SAT office with passport, CURP, proof of address. Free, same-day
- Social Security (IMSS): 2-5% employee contribution depending on salary level`,
    gotchas: `Mexico taxes WORLDWIDE income for residents. The 183-day rule counts calendar year, not rolling 12 months. "Center of vital interests" can trap you: if your spouse lives in Mexico full-time, you may be considered resident even if YOU spend less than 183 days. Mexico has NO tax treaties with many countries (though it does with US, UK, France, Germany, Canada). The SAT is increasingly aggressive with audits on foreigners — keep immaculate records.`,
    pro_tip: `If you earn in USD and spend in MXN, the favorable exchange rate (~20:1) amplifies your purchasing power but also inflates your peso-denominated taxable income. Use the "small taxpayer" regime (RESICO) if your annual income is under MXN 3.5M (~$175K) — flat 1-2.5% tax rate on gross income. This is Mexico's best-kept tax secret for qualifying individuals.`,
  },
  {
    topic: 'RESICO Simplified Tax Regime',
    country: 'MX',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SAT; Ley del ISR Art. 113-E through 113-J',
    content: `RESICO (Régimen Simplificado de Confianza) — Mexico's flat tax for individuals:
- Eligibility: Annual income up to MXN 3.5M (~$175K USD). Must be individual (not corporate). Must issue electronic invoices (CFDI)
- Tax rates: 1% on income up to MXN 300K, 1.1% up to MXN 600K, 1.5% up to MXN 1M, 2% up to MXN 2.5M, 2.5% up to MXN 3.5M
- Monthly provisional payments based on actual invoiced income
- No deductions needed (rate is already low). No annual declaration adjustments
- Must issue CFDIs for ALL income. Must file monthly declarations by 17th of following month
- Available to: Freelancers, sole proprietors, small business owners. NOT available to: salaried employees, partners in companies, or anyone with income >MXN 3.5M`,
    gotchas: `RESICO has strict compliance requirements — miss TWO monthly filings and you're automatically kicked back to the general regime (up to 35% tax). You MUST invoice through SAT's electronic system. Foreign-source income may or may not qualify — SAT guidance is ambiguous. If you exceed the MXN 3.5M threshold in any year, you're removed from RESICO for the NEXT 5 years.`,
    pro_tip: `For digital nomads and freelancers earning $50K-$150K, RESICO is extraordinary — 1-2.5% effective tax rate vs 20-35% under the general regime. The key requirement is electronic invoicing, which requires an RFC and e.firma (digital signature). Set this up with a Mexican accountant (contador) — budget MXN 3,000-5,000 ($150-250) for initial setup and MXN 1,000-2,000/month for ongoing filing.`,
  },
  {
    topic: 'US-Mexico Tax Treaty',
    country: 'MX',
    category: 'tax',
    last_updated: '2026-02-15',
    source: 'US-Mexico Income Tax Treaty (1992, Protocol 2002); IRS Publication 901',
    content: `Key US-Mexico treaty provisions:
- Social Security: Taxed ONLY by the paying country (US SS taxed by US only, IMSS by Mexico only)
- Pensions: Taxed ONLY in country of residence (Mexico). US can withhold per domestic law, but Mexico gives full credit
- Dividends: 10% withholding (5% for 10%+ ownership)
- Interest: 15% withholding (10% for bank interest, 4.9% for certain bonds)
- Royalties: 10% withholding
- Capital gains on real estate: Taxed in the country where property is located
- Capital gains on shares: Taxed in country of residence (Mexico) unless >25% ownership in last 12 months
- Independent personal services: Taxed in Mexico if performed in Mexico OR if Mexico is habitual base
- FBAR/FATCA: US citizens must still file regardless of Mexican residency
- FEIE: Available for US citizens resident in Mexico ($130,000 exclusion for 2026)`,
    gotchas: `The treaty does NOT eliminate the requirement to FILE in both countries — it eliminates double TAXATION through credits. US citizens in Mexico must file both IRS returns AND SAT returns. Mexican bank accounts >$10,000 must be reported on FBAR. Mexico's SAT and the IRS share information under FATCA — unreported Mexican income WILL be discovered.`,
    pro_tip: `The FEIE ($130,000 for 2026) combined with Mexico's RESICO (1-2.5%) creates one of the lowest-tax legal structures available: exclude the first $130K from US tax, pay 1-2.5% Mexican tax on your income. Total effective rate: under 3% on income up to $175K. Requires physical presence test (330 days outside US in 12-month period) or bona fide residence test.`,
  },
  {
    topic: 'Crypto & Digital Assets Taxation',
    country: 'MX',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SAT; Ley del ISR; Ley Fintech (2018)',
    content: `Mexico crypto taxation (2026):
- No specific crypto tax law — taxed under existing income/capital gains framework
- Capital gains on crypto: Taxed as "enajenación de bienes" (asset disposal) at progressive rates up to 35%
- Mining/staking income: Taxed as ordinary income at progressive rates
- Crypto received as payment: Income at market value on receipt date
- SAT reporting: No specific crypto reporting form, but must declare on annual filing
- Exchanges: Bitso (Mexico's largest, regulated under Ley Fintech), Binance, Volabit
- Bitso can issue CFDIs (invoices) for transactions — helpful for RESICO compliance
- No withholding on crypto transactions (unlike stocks)
- NFTs: Not specifically addressed — likely taxed as digital asset sales`,
    gotchas: `Mexico's Ley Fintech (2018) regulates crypto exchanges but doesn't provide tax clarity. SAT has not issued comprehensive crypto guidance. The prevailing interpretation is capital gains tax applies. Keep detailed transaction records — SAT is expected to issue specific crypto regulations by 2027. Bitso reports to SAT — don't assume transactions are invisible.`,
    pro_tip: `If you're a crypto trader moving to Mexico, the RESICO regime could apply if your total income (including crypto gains) stays under MXN 3.5M. This would mean 1-2.5% tax on ALL income including crypto gains — far better than the 35% progressive rate. Consult a Mexican crypto-savvy accountant. Recommended: Taxfyle or Kresston for cross-border crypto tax.`,
  },
  {
    topic: 'Corporate Structures for Foreigners',
    country: 'MX',
    category: 'tax',
    last_updated: '2026-02-15',
    source: 'Ley General de Sociedades Mercantiles; SAT',
    content: `Mexican business structures for foreigners:
- S.A. de C.V. (Sociedad Anónima de Capital Variable): Most common. Min 2 shareholders. Min capital: MXN 50,000 (~$2,500). Corporate tax: 30% flat. Setup: 2-4 weeks, MXN 15,000-30,000 ($750-1,500)
- S. de R.L. de C.V. (Sociedad de Responsabilidad Limitada): LLC equivalent. Min 2 partners. More flexible management structure. Same 30% tax rate
- SAPI (Sociedad Anónima Promotora de Inversión): For startups seeking investment. More flexible share classes. Popular with VC-funded companies
- Sole proprietorship (Persona Física con Actividad Empresarial): Simplest. Income taxed at personal rates (1.92-35%, or RESICO 1-2.5%)
- Foreign ownership: 100% foreign ownership allowed in most sectors. Restricted sectors: oil, electricity, nuclear, mail, certain telecom, >49% in airlines/media
- RFC required for all business entities. CFDI electronic invoicing mandatory
- Monthly tax declarations (ISR provisional payments + IVA)
- IVA (VAT): 16% on most goods/services. 0% on food, medicine, books`,
    gotchas: `Even though min capital is MXN 50,000, banks require more to open a business account (MXN 100,000+). The "2 shareholder" requirement for S.A. de C.V. means you need a second person — many expats use their spouse or a trusted partner with 1% ownership. Monthly tax filings are NOT optional — penalties for late filing are immediate and escalate. A Mexican notario público (notary, a quasi-judicial role) must authenticate the company formation — fees: MXN 20,000-50,000.`,
    pro_tip: `For most solo entrepreneurs, a Persona Física with RESICO is far simpler and cheaper than forming a company. Only form an S.A. de C.V. if you need: (1) multiple shareholders, (2) limited liability protection for high-risk activities, or (3) credibility with Mexican corporate clients. Accounting: budget MXN 5,000-10,000/month ($250-500) for a competent firm. Recommended: BDO Mexico or RSM for international clients.`,
  },
  {
    topic: 'Property Tax & Real Estate Taxation',
    country: 'MX',
    category: 'tax',
    last_updated: '2026-02-15',
    source: 'State tax codes; Ley del ISR',
    content: `Property taxation in Mexico:
- Predial (annual property tax): 0.1-0.3% of assessed value (catastral value, often 30-60% of market value). Varies by state/municipality. Much lower than US/Canada property taxes
- ISAI/ISR on purchase: 2-5% acquisition tax (varies by state): CDMX 4.5%, Jalisco 3%, Quintana Roo 2-3%, Yucatán 2%
- Capital gains on sale (residents): 20% on net gain OR added to annual income (whichever is lower). Deductible: purchase price (inflation-adjusted), notary fees, renovation costs, agent commission
- Capital gains on sale (non-residents): 25% on net gain. Notary withholds at closing
- Primary residence exemption: Gains up to ~MXN 12.3M (~$615K) exempt on primary residence sale (once every 3 years)
- Rental income: Taxed at progressive rates. Can deduct 35% flat (blind deduction) or actual expenses
- Trust (Fideicomiso): Required for foreigners buying in restricted zone (50km from coast, 100km from border). Bank trust, 50-year renewable term. Annual fee: $500-1,500 USD`,
    gotchas: `The Fideicomiso is NOT ownership — it's a trust where a Mexican bank holds title and you're the beneficiary. This means: bank approval needed for modifications, annual fees, and the bank can (rarely) go bankrupt. Some lenders won't provide mortgages through fideicomiso structures. The "assessed value" for predial is almost always below market value, which helps with property tax but hurts when calculating capital gains deductions (use assessed value at time of purchase, not market value).`,
    pro_tip: `Pay predial in January — most municipalities offer a 5-15% early payment discount. For capital gains: the inflation adjustment (factor de actualización) on your purchase price can significantly reduce your taxable gain on older properties. Keep EVERY receipt for renovations — they're deductible on sale. If selling after 5+ years, the inflation adjustment alone can reduce gains by 20-30%.`,
  },

  // === VISA ===
  {
    topic: 'Temporary Resident Visa (Residente Temporal)',
    country: 'MX',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'INM (Instituto Nacional de Migración); Ley de Migración',
    content: `Mexico Temporary Resident Visa:
- Duration: 1-4 years (initial grant usually 1 year, renewable up to 4 total)
- Income requirements (2026, varies by consulate):
  * Monthly income: $2,700 USD (MXN 54,000) for last 6 months, OR
  * Bank balance: $45,000 USD (MXN 900,000) average over last 12 months, OR
  * Property ownership in Mexico valued over $400,000 USD, OR
  * Family ties (married to Mexican national, parent of Mexican child)
- Processing: 2-4 weeks at consulate. Then 30-day "canje" (exchange) at INM office in Mexico for actual card
- Work permit: Included — can work for any Mexican employer or self-employed
- Documents: Passport, proof of income/savings, completed application form, photos (specific Mexican format), interview
- Cost: ~$40 USD consulate fee + ~$300 USD INM card fee
- Renewal: Apply 30 days before expiry at local INM office`,
    gotchas: `Income requirements change annually and vary by consulate — always verify current numbers before applying. Bank statements must show YOUR name (joint accounts may be questioned). Day-trading or volatile account balances may not satisfy the "average" requirement. The 30-day window to complete the "canje" in Mexico is STRICT — if you miss it, your visa is void and you must start over from your home country. INM offices outside Mexico City can have 2-3 week wait times for canje appointments.`,
    pro_tip: `Apply at a smaller consulate (e.g., Denver, Atlanta, Austin rather than NYC or LA) for faster processing and easier interviews. The "bank balance" path is often easier to document than monthly income — a single screenshot showing $45K+ is cleaner than 6 months of income statements. If you're married to a Mexican national, skip the financial requirements entirely — the family unity visa is faster and has no income threshold.`,
  },
  {
    topic: 'Permanent Resident Visa (Residente Permanente)',
    country: 'MX',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'INM; Ley de Migración Art. 54',
    content: `Mexico Permanent Residency:
- Path 1: After 4 years as Temporary Resident → automatic eligibility for Permanent
- Path 2: Direct application with higher financial requirements:
  * Monthly income: $4,200 USD (MXN 84,000) for last 6 months, OR
  * Bank balance: $180,000 USD (MXN 3.6M) average over last 12 months
- Path 3: Family unity — spouse/parent of Mexican national (immediate)
- Path 4: Retirement — pension income of $2,700+/month
- No renewal needed — permanent card valid indefinitely (replace every 10 years for photo update)
- Work rights: Can work for any employer, self-employed, or own a business
- Can be absent from Mexico up to 5 years without losing status (vs 18 months for Temporary)
- Cost: ~$40 consulate fee + ~$350 INM card fee
- Path to citizenship: After 5 years of residency (2 years if married to Mexican). Requires Spanish proficiency and Mexican history/civics test`,
    gotchas: `Switching from Temporary to Permanent is NOT automatic — you must apply before your Temporary permit expires. If it lapses, you lose your time and must restart. The 5-year absence allowance means you can keep Permanent Residency while living mostly elsewhere — but you won't accumulate time toward citizenship. Mexican citizenship requires renouncing other citizenships in the oath — but Mexico's constitution allows you to "recover" your original citizenship afterward (a legal fiction that effectively allows dual citizenship).`,
    pro_tip: `If you can meet the Permanent Resident financial requirements, apply directly — skip the 4-year Temporary path. The ~$180K bank balance requirement is a one-time documentation need, not a permanent hold. You can move the money after approval. For citizenship: the Spanish and civics test is at intermediate level. Start studying when you apply for Permanent status — you'll have 3-5 years to prepare.`,
  },
  {
    topic: 'Digital Nomad & Remote Worker Options',
    country: 'MX',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'INM; Mexican Senate records',
    content: `Mexico does NOT have an official "Digital Nomad Visa" (as of March 2026):
- Tourist visa (FMM): 180 days. NO work permit. Technically, remote work for a non-Mexican employer is in a gray area — widely practiced but not explicitly legal
- Temporary Resident with work permit: The proper legal path for remote workers intending to stay long-term
- "Visa run" practice: Leaving Mexico and re-entering for a new 180-day FMM. Common but immigration officers increasingly scrutinize repeat entries. Some people report being given only 30-90 days on re-entry
- Tax implications: Spending 183+ days makes you a tax resident regardless of visa status. Many digital nomads unknowingly create tax obligations
- Proposed legislation: Digital Nomad Visa bill introduced in Mexican Senate (2024) but not yet passed as of March 2026. Would formalize remote work for foreigners earning from abroad
- INM enforcement: Generally lenient toward remote workers who don't compete in the local job market. But no legal protection if questioned`,
    gotchas: `The biggest risk isn't immigration — it's tax. If you spend 183+ days in Mexico, SAT can claim you as a tax resident owing Mexican tax on worldwide income. The "I'm just a tourist working remotely" argument has no legal basis. Some accountants advise the "digital nomad loophole" isn't a loophole — it's tax evasion. Border agents at airports increasingly ask digital nomads about their work plans, especially those with one-way tickets and laptops.`,
    pro_tip: `If you plan to stay in Mexico long-term (6+ months/year): get a Temporary Resident visa and register with SAT under RESICO. The 1-2.5% tax rate is cheaper than the legal risk of non-compliance. If you want to stay short-term (under 183 days/year): the tourist FMM works fine legally. Track your days carefully — use a day-counter app. The 183-day rule is per CALENDAR YEAR, not rolling 12 months.`,
  },

  // === BANKING ===
  {
    topic: 'Banking for Foreigners',
    country: 'MX',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'CNBV (National Banking Commission); bank requirements',
    content: `Opening a Mexican bank account (2026):
- Requirements: Passport, proof of Mexican address (utility bill, rental contract), visa/residency card (FMM accepted at some banks), RFC (tax ID — recommended but not always required initially)
- Banks accepting foreigners (tourist FMM):
  * BBVA Mexico: Most foreigner-friendly. Accepts FMM. Walk-in account opening. Mobile app in English
  * Banorte: Accepts FMM at some branches. Good ATM network
  * Hey Banco (by Banregio): Digital bank. Accepts foreigners with temporary residency
  * Nu Mexico (Nubank): Digital bank, very easy signup, debit card. Limited services but growing
- Banks requiring residency: Santander Mexico, Citibanamex, HSBC Mexico (Temporary/Permanent only)
- Account types: "Cuenta de Ahorro" (savings) for tourists, "Cuenta de Cheques" (checking) for residents
- Debit cards: VISA/Mastercard. Work internationally. Contactless available
- International transfers: SWIFT incoming: $15-30 fee. Wise works well MXN→USD and vice versa
- SPEI (Mexican instant transfer system): Free, immediate domestic transfers. Similar to Zelle/PIX`,
    gotchas: `Branch experience varies wildly — the same bank can approve a tourist account at one branch and refuse at another. If rejected, try a different branch (ideally in an expat-heavy area like Roma Norte, Playa del Carmen, or San Miguel de Allende). Some banks freeze accounts if they detect "too much" international activity without proper documentation. Keep your bank informed about incoming international transfers. ATM withdrawal limits: typically MXN 7,000-10,000/transaction.`,
    pro_tip: `BBVA Mexico + Wise is the optimal combo. BBVA for local peso account (bills, rent, daily spending) and Wise for receiving USD/EUR and converting at market rate. Open your BBVA account at a Roma Norte (CDMX) or Playa del Carmen branch — staff are experienced with foreign clients. For large international transfers ($10K+): use Wise or OFX rather than bank wire — saves 2-4% on exchange rate.`,
  },
  {
    topic: 'Cryptocurrency & Investment Accounts',
    country: 'MX',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'CNBV; Ley Fintech; broker websites',
    content: `Investment and crypto in Mexico:
- Mexican brokerages: GBM+ (most popular, low fees), Bursanet (by Actinver), Kuspit. All accept foreigners with RFC
- US brokerage access: Schwab, Interactive Brokers — some accept Mexican residents. Fidelity does not
- Crypto exchanges: Bitso (Mexico's largest, regulated, MXN deposits/withdrawals), Binance, Kraken
- Bitso: KYC required. MXN deposits via SPEI (instant). Trading fees: 0.1-0.6%. Good liquidity for BTC, ETH, XRP
- GBM+: Commission-free stock trading (Mexican market). US stocks via SIC (international quotes system). Min deposit: MXN 1,000
- CETES (Mexican treasury bonds): Available to foreigners with RFC. Returns: 10-11% in MXN (March 2026). Buy directly at cetesdirecto.com — MXN 100 minimum
- Real estate investment: FIBRAs (Mexican REITs) traded on BMV. Yields: 7-10%. Tax-advantaged structure
- Capital gains tax: 10% on stock market gains (brokerage withholds). Crypto: progressive rates (general regime)`,
    gotchas: `CETES yields are in MXN — the 10-11% nominal return loses ~4-6% to USD/MXN depreciation in a typical year. Net real USD return: ~4-6%. Still attractive but not the windfall the headline number suggests. GBM+'s US stock access is via the SIC market — liquidity can be lower than US exchanges, and not all US stocks are available. Bitso is well-regulated but was hacked in 2019 — use 2FA and don't store large amounts on-exchange.`,
    pro_tip: `CETES at 10-11% are one of the best risk-free-ish returns globally right now. If you're earning in USD and spending in MXN, parking your peso spending money in CETES while waiting to use it is nearly free money. Buy 28-day or 91-day CETES for liquidity. For equity investing: keep US brokerages for US stocks, use GBM+ only for Mexican market exposure and FIBRAs.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Mexico City Neighborhood Guide',
    country: 'MX',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Inmuebles24; Propiedades.com; direct research',
    content: `CDMX property prices by colonia (March 2026, per sqm):
- Polanco: MXN 80,000-120,000/sqm ($4,000-6,000). Luxury. Embassy district. Galleries, restaurants
- Condesa: MXN 55,000-85,000/sqm ($2,750-4,250). Tree-lined streets, parks, café culture. Most popular expat area
- Roma Norte: MXN 50,000-75,000/sqm ($2,500-3,750). Hip, restaurants, galleries. Slightly edgier than Condesa
- Roma Sur: MXN 40,000-60,000/sqm ($2,000-3,000). Up-and-coming. Good value adjacent to Roma Norte
- Del Valle: MXN 35,000-55,000/sqm ($1,750-2,750). Family-friendly. Good schools, parks, local feel
- Narvarte: MXN 30,000-45,000/sqm ($1,500-2,250). Working class going gentrified. Best value in central CDMX
- Coyoacán: MXN 40,000-65,000/sqm ($2,000-3,250). Bohemian, UNAM area, Frida Kahlo museum
- Santa Fe: MXN 35,000-60,000/sqm ($1,750-3,000). Corporate district. Modern high-rises. Car-dependent
Rental 2BR: Condesa $1,200-2,000/month. Roma Norte $1,000-1,800. Del Valle $700-1,200
Rental yields: 5-7% gross in prime areas. 7-9% in emerging areas`,
    gotchas: `Condesa and Roma Norte are in seismic zone III (highest risk in CDMX). The 2017 earthquake devastated many older buildings in these neighborhoods. Only buy/rent in buildings constructed after 2017 or formally retrofitted. Check the "Plataforma CDMX" for building safety certificates. Ground-floor apartments in these areas can have subsidence issues — Mexico City is sinking at 20+ inches/year in some areas.`,
    pro_tip: `Best value play: Roma Sur and Narvarte. 30-40% cheaper than Condesa/Roma Norte but walkable to both. The L9 metro line and Metrobús make these areas well-connected. For investment: short-term rentals (Airbnb) in Condesa yield 8-10% but require a permit (licencia de uso de suelo turístico). Long-term rentals in Del Valle are more stable at 6-7%.`,
  },
  {
    topic: 'Riviera Maya & Quintana Roo Property',
    country: 'MX',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Inmuebles24; AMPI (Mexican Real Estate Association)',
    content: `Quintana Roo property prices (March 2026):
- Cancún Hotel Zone: $3,000-6,000/sqm. Beachfront condos. Tourist rentals 8-12% yield
- Cancún Centro: $1,200-2,500/sqm. Local area. Affordable. 10-15 min from beaches
- Playa del Carmen: $2,000-4,000/sqm. Walkable downtown. Expat hub. 5th Avenue nightlife
- Tulum: $2,500-5,000/sqm. Boho-chic, eco-developments. Prices dropped 10-15% from 2024 peak
- Puerto Morelos: $1,800-3,000/sqm. Quiet fishing village between Cancún and Playa. Growing
- Bacalar: $1,000-2,000/sqm. "Lake of Seven Colors." Early stage, huge appreciation potential
- Mérida (Yucatán, nearby): $800-2,000/sqm. Colonial city, best value in southeast Mexico
Fideicomiso required for ALL purchases (coastal restricted zone). Annual fee: $500-1,500
Pre-sale developments: 20-40% cheaper but higher risk. Delivery delays of 6-24 months common
Rental occupancy: Cancún 70-80% annual. Playa 60-70%. Tulum 50-60% (seasonal)`,
    gotchas: `Tulum has MASSIVE development problems: no municipal sewer system (septic tanks contaminating cenotes), inadequate roads (single highway), and power outages. The eco-luxury brand masks real infrastructure deficiencies. Many Tulum pre-sales by Mexican developers have been delayed 2-3 years or never delivered — always use escrow. Playa del Carmen's 5th Avenue area has increasing security concerns at night. Cancún Hotel Zone properties have high HOA fees ($300-800/month) and hurricane exposure.`,
    pro_tip: `Mérida is the smartest buy in southeast Mexico right now — colonial city, UNESCO heritage, international airport, excellent healthcare (Hospital Star Médica), no fideicomiso needed (not in restricted zone), and 30-40% cheaper than the Riviera Maya. For beach investment: Puerto Morelos offers the best risk/reward — quieter than Playa, more affordable, and growing organically. Use a US/Mexico cross-border real estate attorney for any purchase — budget $2,000-4,000.`,
  },
  {
    topic: 'Property Purchase Process',
    country: 'MX',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Ley de Inversión Extranjera; Notario público requirements',
    content: `Buying property in Mexico — process and costs:
Transaction costs (buyer):
- Acquisition tax (ISAI): 2-4.5% depending on state (CDMX 4.5%, Quintana Roo 2-3%, Jalisco 3%)
- Notary fees: 0.5-1.5% of property value (notario is required for all real estate transactions)
- Fideicomiso setup (restricted zone): $1,500-3,000 initial + $500-1,500/year
- Appraisal: $300-600
- Title search/certificate: $200-500
- Legal fees (if using separate attorney): $1,500-3,000
- Total closing costs: 5-8% of purchase price
Process:
1. Find property, negotiate price (offers typically 5-15% below asking)
2. Sign Promesa de Compraventa (purchase promise) + 10% deposit (held in escrow recommended)
3. Fideicomiso application if in restricted zone (4-8 weeks)
4. Due diligence: verify title (Registro Público), no liens, property tax paid, building permits
5. Escritura (deed) signed before Notario Público
6. Registration at Registro Público de la Propiedad (2-4 weeks)
Timeline: 6-12 weeks total. Fideicomiso adds 4-8 weeks`,
    gotchas: `Mexico does NOT have a reliable MLS (Multiple Listing Service). The same property can be listed by 5 different agents at different prices. Always verify the asking price independently. Ejido land (communal agricultural land) CANNOT be sold to foreigners and titles are murky — never buy ejido property without a specialized attorney confirming regularization. Some popular areas (Tulum, parts of Oaxaca coast) have widespread ejido title issues. The Notario Público is NOT your lawyer — they represent the government. Hire your own independent attorney.`,
    pro_tip: `Use Stewart Title or Fidelity National Title for escrow — they provide US-standard title insurance in Mexico (available in most tourist/expat areas). This protects against the most common fraud: someone selling property they don't actually own (more common than you'd think with ejido conversions). For negotiation: cash buyers (no mortgage) can typically negotiate 10-15% off asking. Mexican sellers respond to speed — demonstrate you can close quickly.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Healthcare System Overview',
    country: 'MX',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'IMSS; INSABI/IMSS-Bienestar; hospital websites',
    content: `Mexican healthcare system:
- IMSS (social security): Available to formal employees and voluntary enrollees. Monthly voluntary contribution: ~MXN 7,000-12,000/year (~$350-600). Covers: GP, specialists, hospitalization, surgery, dental, maternity. Quality: variable — good for routine care, long waits for specialists
- IMSS-Bienestar (formerly INSABI): Free public healthcare for uninsured. Basic coverage. Long waits. Quality varies significantly by location
- Private healthcare: World-class in major cities. Costs 60-80% less than US equivalent
  * GP consultation: $30-60 USD
  * Specialist: $50-100 USD
  * MRI: $200-400 USD (vs $1,500-3,000 in US)
  * Dental cleaning: $40-80 USD
  * Dental crown: $200-400 USD
  * LASIK surgery: $1,500-2,500 both eyes
- Top private hospitals: Hospital ABC (CDMX), Médica Sur (CDMX), Hospital Angeles (nationwide chain — 28 hospitals), Hospital Star Médica (nationwide), Galenia (Cancún), Amerimed (Riviera Maya)
- Pharmacies: Many medications available without prescription (antibiotics, blood pressure meds, pain meds). Farmacias del Ahorro, Farmacias Guadalajara — walk-in doctor consultations for MXN 35-50 ($2-3)`,
    gotchas: `"World-class" only applies to private hospitals in major cities. Rural healthcare is basic. IMSS voluntary enrollment has a 1-year pre-existing condition exclusion period. Emergency care is universally available (public hospitals must treat anyone) but non-emergency IMSS wait times can be 3-6 months for specialist appointments. Ambulance response times outside major cities are unreliable — if you're in a rural area, have a plan to get to a hospital independently.`,
    pro_tip: `The Farmacia del Ahorro/Guadalajara walk-in doctor is Mexico's healthcare secret weapon. For $2-3, you see a licensed GP who can diagnose, prescribe, and treat most common conditions on the spot. Medications are dispensed immediately from the pharmacy — often without separate prescription cost. For serious conditions: Hospital ABC in CDMX is the gold standard (comparable to Johns Hopkins). For dental tourism: Los Algodones (on the US border) has 350+ dental clinics — prices 70% less than US.`,
  },
  {
    topic: 'Health Insurance for Expats',
    country: 'MX',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Insurance broker reports; policy comparisons',
    content: `Health insurance options in Mexico (2026):
- IMSS Voluntary: MXN 7,000-12,000/year ($350-600). Best value. Covers everything but wait times are long. Apply with RFC + proof of address + ID
- GNP Seguros: Mexico's largest private insurer. Plans from MXN 15,000-80,000/year ($750-4,000). Good hospital network. Spanish-language service
- AXA Keralty: MXN 12,000-60,000/year ($600-3,000). Includes own clinic network. Popular with expats
- Seguros Monterrey: MXN 18,000-70,000/year ($900-3,500). Premium network
- Cigna Global: $150-400/month. International coverage. Best for frequent travelers. English-language support
- IMG (International Medical Group): $100-250/month. Good mid-range option
- SafetyWing: $83/month. Basic nomad coverage. Limited network
- Bupa Mexico: MXN 20,000-90,000/year. International standard
Note: Mexican insurers are much cheaper than international plans but typically only cover Mexico. Pre-existing conditions: 12-24 month exclusion is standard. Age limits: Some Mexican insurers won't issue new policies after age 64-70`,
    gotchas: `Mexican insurance plans often have deductibles of MXN 15,000-50,000 ($750-2,500) before coverage kicks in. Read the fine print on coverage limits — some plans cap hospitalization at MXN 5-10M lifetime (sounds like a lot but a complex surgery can reach MXN 2-3M). Mental health coverage is minimal or excluded on most Mexican plans. Dental is usually a separate add-on. COVID and pandemic exclusions are still common.`,
    pro_tip: `The optimal strategy: IMSS voluntary (for routine/chronic care, $400/year) + a Mexican private plan with high deductible (for serious/emergency care, $1,000-2,000/year). Total: ~$1,500-2,500/year for comprehensive coverage. This is 80-90% cheaper than equivalent US coverage. For Americans: you can still use US-based health plans for telehealth and returning-to-US care while using Mexican insurance locally.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living by City',
    country: 'MX',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; Expatistan; direct research',
    content: `Monthly cost of living for a couple (comfortable, not luxury) in USD:
Mexico City (Condesa/Roma): $2,200-3,500
- Rent 2BR: $1,000-1,800. Groceries: $300-450. Dining out: $200-400. Transport: $80-150. Utilities: $60-100. Internet: $25-35
Playa del Carmen: $2,000-3,200
- Rent 2BR: $900-1,600. Groceries: $300-400. Dining: $200-350. Transport: $50-100. Utilities: $80-130 (A/C)
San Miguel de Allende: $1,800-3,000
- Rent 2BR: $800-1,500. Groceries: $250-400. Dining: $150-300. Transport: $50-100. Utilities: $50-80
Puerto Vallarta: $1,800-3,000
- Rent 2BR: $800-1,400. Groceries: $300-400. Dining: $200-350. Transport: $50-100. Utilities: $70-120
Mérida: $1,500-2,500
- Rent 2BR: $600-1,200. Groceries: $250-350. Dining: $150-300. Transport: $40-80. Utilities: $80-130 (A/C critical)
Oaxaca City: $1,400-2,200
- Rent 2BR: $500-1,000. Groceries: $200-300. Dining: $150-250. Transport: $30-60. Utilities: $40-70
Lake Chapala/Ajijic: $1,500-2,500
- Rent 2BR: $600-1,200. Groceries: $250-350. Dining: $150-250. Transport: $50-80. Utilities: $50-80`,
    gotchas: `These costs assume a comfortable but not extravagant lifestyle — eating local food, shopping at markets not Costco/Walmart, and renting long-term not Airbnb. Airbnb monthly rates are 40-80% higher than direct annual rental contracts. Air conditioning in hot areas (Yucatán, Riviera Maya) can add $50-100/month to electricity. Car ownership adds $300-500/month (insurance, gas, maintenance, parking).`,
    pro_tip: `Live like a local, not a tourist, to hit the lower end of these ranges. Shop at mercados (markets) not supermarkets — 30-50% cheaper for produce, meat, and prepared food. For groceries: Mercado Roma (CDMX), Mercado 28 (Cancún), Mercado Lucas de Gálvez (Mérida). Negotiate annual rental contracts directly with landlords (not through Airbnb/agencies) for the best rates. The "comida corrida" (set lunch menu) is the Mexican working class secret: full meal for MXN 70-120 ($3.50-6).`,
  },
  {
    topic: 'Internet & Remote Work Infrastructure',
    country: 'MX',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'IFT (telecom regulator); Speedtest.net',
    content: `Internet in Mexico (2026):
- Home fiber: Telmex/Infinitum (50-200Mbps, MXN 499-899/month), TotalPlay (100-500Mbps, MXN 499-799), Izzi (100-300Mbps, MXN 449-699)
- Average speeds: CDMX 80-120Mbps, Guadalajara 60-100Mbps, Playa del Carmen 40-80Mbps, Mérida 50-90Mbps
- Fiber availability: Excellent in major cities. Limited in smaller towns and rural areas
- Mobile: Telcel (best coverage), AT&T Mexico, Movistar. Prepaid: MXN 200-300/month ($10-15) for 5-10GB. Unlimited plans: MXN 500-800/month
- Coworking (CDMX): WeWork (from $200/month), Selina (from $100/month), Público (MXN 2,500/month), Impact Hub ($150/month)
- Coworking (Playa del Carmen): Nest (from $100/month), Bunker (from $80/month), Selina ($90/month)
- 5G: Limited rollout in CDMX, Monterrey, Guadalajara. Not widely available yet
- Starlink: Available in Mexico. MXN 1,130/month ($57). Good option for rural/beach areas with poor fiber`,
    gotchas: `Telmex has a near-monopoly outside major cities and service can be frustratingly unreliable. Installation wait times: 1-4 weeks. Outages are common during rainy season (June-October). Always have a mobile data backup for video calls. In beach areas (Tulum especially), infrastructure is poor — many properties max out at 30-50Mbps even with "fiber" plans. Power outages in smaller cities can knock out internet for hours — invest in a UPS ($50-100).`,
    pro_tip: `Get TotalPlay if available at your address — best reliability and speeds. For redundancy: home fiber + Telcel unlimited mobile plan ($30-40/month) ensures you're never offline for important calls. Starlink is a game-changer for rural/beach properties where fiber isn't available. Many coworking spaces offer day passes ($5-15) — useful when your home internet is down. Time zone advantage: CDMX is CST (UTC-6), perfect overlap with US EST/CST business hours.`,
  },
  {
    topic: 'Safety & Security by City',
    country: 'MX',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'SESNSP (National Public Security System); OSAC (US State Dept)',
    content: `Safety assessment for expat destinations (2026):
VERY SAFE for expats:
- Mérida: One of Mexico's safest cities. Low crime rate comparable to US suburbs. Family-friendly
- San Miguel de Allende: Tourist/expat bubble. Very low crime. Walkable day and night
- Querétaro: Industrial city but extremely safe. Growing expat community. Excellent quality of life
GENERALLY SAFE with normal precautions:
- Mexico City (Condesa/Roma/Polanco/Coyoacán): Safe in expat neighborhoods. Avoid: Tepito, Doctores at night, Iztapalapa. Metro pickpocketing common. Use Uber/DiDi not street taxis
- Puerto Vallarta: Safe tourist zone. Standard precautions outside hotel zone
- Oaxaca City: Safe downtown and surrounding areas. Occasional political protests (roadblocks)
- Lake Chapala/Ajijic: Safe. Large elderly expat community
REQUIRES MORE CAUTION:
- Playa del Carmen: Increasing incidents in nightlife areas. 5th Avenue after midnight requires awareness. Daytime generally safe
- Cancún: Hotel Zone very safe. Downtown (Región 500+) has higher crime. Taxi scams common
- Tulum: Rising petty crime. Police presence inconsistent. Safe during daytime in town
DO NOT TRAVEL (US State Dept Level 4):
- Sinaloa, Tamaulipas, Guerrero (Acapulco), Michoacán (outside Morelia), Zacatecas, Colima`,
    gotchas: `Mexico's violence is overwhelmingly concentrated in specific areas and between criminal organizations — it rarely affects tourists or expats who avoid high-risk areas. However, being in the wrong place at the wrong time IS possible. Never drive at night on highways outside major cities. Never get in an unmarked taxi (use Uber, DiDi, or official taxi stands). Don't flash expensive jewelry, watches, or phones in public. Car theft is common — never leave valuables visible.`,
    pro_tip: `Use DiDi (the "Chinese Uber") for rides — often cheaper than Uber in Mexico and more reliable in smaller cities. Install the "Citizen 911" app or follow @LOSJODIDOS_MX on Twitter for real-time crime alerts in your area. For home security: most Mexican neighborhoods have private security guards (vigilantes) — this is normal and expected. Budget MXN 500-1,500/month for building/neighborhood security contribution. Always carry a copy of your visa/ID — police checkpoints exist, especially in Quintana Roo.`,
  },
  {
    topic: 'Domestic Help & Services',
    country: 'MX',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Ley Federal del Trabajo; domestic worker associations',
    content: `Domestic help in Mexico:
- Full-time live-in housekeeper/nanny: MXN 8,000-15,000/month ($400-750). Includes: cleaning, cooking, laundry, childcare
- Part-time cleaning (2-3 days/week): MXN 3,000-6,000/month ($150-300)
- Full-time gardener: MXN 5,000-10,000/month ($250-500)
- Full-time driver: MXN 8,000-15,000/month ($400-750)
- Private chef: MXN 15,000-25,000/month ($750-1,250) for daily meal prep
- Since 2019 reform: Domestic workers must be registered with IMSS (social security). Employer pays 3-5% of salary
- Mandatory benefits: Christmas bonus (15 days salary), vacation (12 days after 1 year), vacation premium (25% of vacation days' salary)
- Legal minimum wage (domestic work, 2026): MXN 7,468/month ($373) for 6-day work week`,
    gotchas: `Since the 2019 labor reform, domestic workers have FULL labor rights. Failing to register them with IMSS is illegal and can result in fines. The Christmas bonus (aguinaldo) is legally required — budget for it. Firing a domestic worker requires severance payment (3 months salary + 20 days per year worked). Many expats don't realize this and face legal disputes. Verbal agreements are enforceable in Mexican labor law — write a contract.`,
    pro_tip: `Hiring domestic help is culturally normal and expected at middle-class+ income levels in Mexico. It creates genuine employment and is mutually beneficial when done properly. Always pay at or above market rate — below-market workers are more likely to leave or have issues. Use "Aliada" or "Clean & Simple" apps for vetted, insured cleaning professionals if you prefer not to manage directly. Treat domestic workers with respect and dignity — they are professionals, not servants.`,
  },
  {
    topic: 'Pet Import & Veterinary Care',
    country: 'MX',
    category: 'lifestyle',
    last_updated: '2026-02-15',
    source: 'SENASICA (agriculture/food safety authority)',
    content: `Bringing pets to Mexico:
- Dogs & cats: Rabies vaccination certificate (at least 15 days old, less than 12 months). Health certificate from licensed vet (issued within 72 hours of travel). NO apostille needed
- From US: USDA endorsement of health certificate. APHIS form 7001 for dogs
- No quarantine for healthy pets from US/Canada/EU
- No breed restrictions in Mexico
- Airlines: Volaris allows pets in cabin (5kg max, ~$50). VivaAerobus (6kg, ~$50). American/United: cargo (varies)
- Arrival: Present documents at SENASICA counter in airport. Inspection takes 15-30 minutes. Free for personal pets
- Mexican vet care: Excellent and affordable. Consultation: MXN 300-600 ($15-30). Spay/neuter: MXN 1,000-3,000 ($50-150). Annual vaccines: MXN 500-1,500 ($25-75)
- Pet supplies: Petco and PetSmart operate in Mexico. Local stores (Maskota) are cheaper
- Dog walking: MXN 1,500-3,000/month ($75-150)`,
    gotchas: `The "72-hour" health certificate rule is strict — if your vet issues it on Monday and you fly Thursday, it's technically expired. Time it carefully. Mexican airlines have LIMITED cabin pet spots per flight — book early. For flights from the US, check both US departure requirements AND Mexican arrival requirements — they differ. In summer months, airlines embargo pet cargo when temperatures exceed 85°F at origin or destination — this affects most of Mexico May-September.`,
    pro_tip: `The easiest import: fly into Mexico City (best-organized SENASICA office), with documents in a clear folder, during weekday daytime hours. If driving across the US border with pets, the Laredo or El Paso crossings have the most experienced inspectors. Mexican vets are well-trained (UNAM has one of Latin America's top vet schools) — many speak English in expat areas. For emergency vet care: Hospital Veterinario UNAM (CDMX) is 24/7 and world-class.`,
  },
];
