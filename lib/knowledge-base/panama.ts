import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const PANAMA_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Territorial Tax System — Zero Tax on Foreign Income',
    country: 'PA',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'DGI (Dirección General de Ingresos); IMI Daily territorial tax analysis 2026',
    content: `Panama territorial tax system (2026):
CORE PRINCIPLE: Panama taxes ONLY income earned within Panama. Foreign-sourced income is 100% TAX-FREE regardless of residency status
What's exempt (foreign-sourced):
- Remote work income from foreign employers/clients: $0 Panama tax
- Foreign pensions and Social Security: $0 Panama tax
- Foreign investment income (dividends, interest, capital gains): $0 Panama tax
- Foreign rental income: $0 Panama tax
- Offshore business profits: $0 Panama tax
What IS taxed (Panama-sourced income only):
Personal income tax — progressive rates:
- Up to $11,000/year: 0%
- $11,000–$50,000/year: 15%
- Above $50,000/year: 25%
Non-residents: Flat 15% on Panama-sourced income
Corporate tax: 25% on Panama-sourced profits
Special economic zones (reduced/zero corporate tax):
- Colón Free Zone: 0% on re-export profits
- Panama Pacífico: Reduced rates for qualifying businesses
- SEM (Multinational Headquarters — Sede de Empresas Multinacionales): Tax incentives for regional HQs
- City of Knowledge: Tax benefits for research/education entities
NO wealth tax. NO inheritance tax. NO gift tax. NO capital gains tax on foreign investments
ITBMS (VAT): 7% on most goods and services. Essentials (food, medicine) exempt
Social Security (CSS): Employee 9.75%, employer 12.25% of salary (Panama employment only)`,
    gotchas: `The territorial system is genuine and well-established — Panama has maintained it for decades. However: if you set up a Panama business that serves foreign clients, the income MAY be considered Panama-sourced if the work is performed in Panama (interpretation varies — get professional advice). US citizens still owe US tax on worldwide income regardless of Panama's territorial system — the FEIE ($130,000+ exclusion in 2026) helps but doesn't eliminate all obligations. Panama has been improving tax transparency (CRS reporting) — don't assume privacy.`,
    pro_tip: `Panama's territorial tax system is the cleanest in the Americas — no gray areas for purely foreign income. For digital nomads and remote workers: your foreign employer income is genuinely $0 Panama tax. Combined with the dollar economy (no currency risk) and low cost of living, this is one of the world's best tax jurisdictions for location-independent earners. For business owners: the SEM (multinational HQ) program offers significant incentives for companies managing regional operations from Panama. Work with a Panama tax advisor ($100-300/month) to structure properly.`,
  },
  {
    topic: 'Property Tax & Real Estate Taxation',
    country: 'PA',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'DGI; Panama property tax code; TheLatinvestor 2026',
    content: `Panama property taxes (2026):
Annual property tax (Impuesto de Inmueble):
Primary residence:
- Under $120,000 assessed value: EXEMPT (0%)
- $120,000–$700,000: 0.5%
- Above $700,000: 0.7%
Investment/non-primary residence:
- Under $30,000: EXEMPT
- $30,000–$250,000: 0.6%
- $250,000–$500,000: 0.8%
- Above $500,000: 1.0%
New construction tax exemption: 5-20 years depending on property type and location. Verify specific exemption period with developer/lawyer — some newer builds still qualify
Transfer tax (ITBI): 2% of sale price or assessed value (whichever is higher). Paid by buyer at closing
Capital gains on Panama property: 10% of gain (or 3% of total sale price as alternative — whichever is lower). First sale of property: 10% advance withholding
Rental income (Panama property): Taxed as regular income at progressive rates (0-25%). Deductions for expenses, depreciation, maintenance
Corporate ownership: Many properties held in Panama S.A. (corporation) — transfer via share sale avoids transfer tax (2%) but subject to scrutiny
No property tax on foreign real estate (territorial system — only Panama assets taxed)`,
    gotchas: `The $120,000 primary residence exemption is generous but applies to ASSESSED value, which may differ from market value. New construction tax exemptions (5-20 years) are property-specific — don't assume all new builds qualify. The corporate ownership structure (Panama S.A.) was popular for avoiding transfer tax but is under increasing scrutiny — verify with lawyer before using this strategy. The 2% transfer tax and 10% capital gains tax apply on top of purchase costs.`,
    pro_tip: `Panama's property tax regime is very favorable — especially for primary residences under $120K assessed value (common outside Panama City). The new construction exemption can save thousands annually for 5-20 years — ask developers specifically about tax exemption status. For investment properties: the corporate S.A. structure may still work for larger portfolios but requires proper legal setup. Budget 4-6% total transaction costs (transfer tax + legal + registration). Panama property held in a foundation (fundación de interés privado) offers estate planning benefits.`,
  },

  // === VISA ===
  {
    topic: 'Friendly Nations Visa (FNV)',
    country: 'PA',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'SNM (Servicio Nacional de Migración); Executive Decree 722; consulate requirements',
    content: `Panama Friendly Nations Visa (2026):
Eligibility: Citizens of 50+ countries including US, Canada, UK, Australia, most EU, Japan, South Korea, Israel, South Africa, Mexico, Brazil, Argentina, and more
Requirements:
- Economic tie to Panama — ONE of: (a) Employment contract with Panama company, (b) Own a Panama business (register an S.A. or SRL), (c) Purchase real estate in Panama ($200,000+ recommended), (d) Open a bank account with $5,000+ balance
- Clean criminal record (apostilled)
- Passport with 6+ months validity
- Health certificate
- 5 passport photos
Benefits:
- PERMANENT residency from day 1 (not temporary → permanent like most countries)
- Work authorization in Panama
- Path to citizenship after 5 years of residency
- Can include spouse and children under 18
- No minimum stay requirement — but must enter Panama at least once every 2 years to maintain status
Processing: 3-6 months (improved from previous 6-12 months). Immigration lawyer recommended ($2,000-5,000 total including fees)
Government fees: ~$250 (migración fees) + $800 (cédula processing) + legal/document costs
Key advantage: One of the EASIEST permanent residency programs globally — no income requirement, no investment minimum (just $5,000 bank deposit option)`,
    gotchas: `The FNV does NOT automatically grant a work permit — you get residency and can THEN apply for work authorization. The "economic tie" requirement is the main hurdle: the $5,000 bank deposit option sounds easy but requires actually OPENING a Panama bank account first (see banking entry — this can take weeks). The business registration option ($1,500-3,000 to set up an S.A.) is the most common path. Real estate purchase works but ties up significant capital. Processing times have improved but still vary — 3-6 months is realistic.`,
    pro_tip: `The FNV is the gold standard of easy residency programs — permanent residency with minimal requirements. Strategy: register a Panama S.A. ($1,500-2,500 setup) as your "economic tie," then apply for FNV. The S.A. can be a genuine business or a holding company for your other assets. Use an established immigration lawyer (Kraemer & Kraemer, Pardini & Asociados are well-known). Start the bank account process BEFORE applying for FNV — it's often the bottleneck. The "no minimum stay" provision means you can maintain Panama residency while living elsewhere — visit once every 2 years.`,
  },
  {
    topic: 'Pensionado Visa (Retiree Program)',
    country: 'PA',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'SNM; Panama Pensionado program regulations; retiree benefits law',
    content: `Panama Pensionado Visa — the world's best retiree program:
Income requirement: $1,000/month lifetime pension (or $750/month if you also buy $100,000+ Panama real estate)
Accepted pension sources: Government social security (US SSA, Canada CPP, UK State Pension), military retirement, government employee pensions, private pension funds with lifetime payout
Additional per dependent: $250/month per spouse or child
Age: No minimum age (despite "retiree" name — any age with qualifying pension)
Benefits — Panama Pensionado discounts (UNIQUE globally):
- 25% off airline tickets (domestic flights)
- 25% off monthly energy bills
- 50% off entertainment (movies, concerts, sporting events)
- 30% off bus, boat, and train fares
- 25% off restaurant meals (Mon-Thu) and 15% (Fri-Sun)
- 15% off hospital bills
- 10% off prescription medications
- 20% off doctor consultations
- 25% off closing costs on home loans
- 50% off hotel stays (Mon-Thu)
- Import one vehicle duty-free every 2 years (up to $30,000 value)
Residency status: PERMANENT from approval
Processing: 3-6 months. Government fees ~$300-500 + legal fees $1,500-3,000
Path to citizenship: 5 years of residency → citizenship application
No minimum stay requirement but must enter Panama at least once every 2 years`,
    gotchas: `The pension MUST be "lifetime" — 401(k) withdrawals, IRA distributions, or investment income don't qualify. Only pensions with guaranteed lifetime payments work. The discounts are real and enforced by law — businesses are REQUIRED to honor them, though enforcement varies outside Panama City. The $1,000/month threshold hasn't changed in years — excellent value. Vehicle import duty-free benefit is significant (saves $5,000-15,000) but bureaucratically complex. Pensionado status doesn't grant work authorization — you cannot work in Panama on this visa.`,
    pro_tip: `The Pensionado is arguably the world's best retiree visa — the discount package alone saves $3,000-8,000/year for active retirees. US Social Security averaging ~$1,900/month easily qualifies. For couples: only ONE spouse needs the pension; the other is included as dependent ($250/month additional). Carry your Pensionado carné (card) everywhere — present it BEFORE ordering at restaurants and BEFORE purchasing tickets. Some businesses resist honoring discounts — politely insist, as it's legally required. The duty-free vehicle import every 2 years is a hidden gem — bring a reliable SUV from the US.`,
  },
  {
    topic: 'Qualified Investor Visa & Self-Economic Solvency',
    country: 'PA',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'SNM; Executive Decree; Global Residence Index 2026',
    content: `Panama investment-based residency options:
1. Qualified Investor Visa (QIV):
- Investment options (choose one):
  a) $300,000+ in Panama real estate (titled, lien-free)
  b) $500,000+ in Panama stock market (Bolsa de Valores de Panamá)
  c) $750,000+ in fixed-term bank deposit (CD, minimum 5-year term)
- Benefit: PERMANENT residency in as fast as 30 days (fastest in LATAM)
- Work authorization included
- Dependents: Spouse and children under 25
- Investment must be maintained for minimum 5 years
- Government fees: ~$5,000-8,000 + legal $3,000-5,000
- No income requirement beyond the investment
2. Self-Economic Solvency Visa:
- $300,000 fixed-term deposit in a Panama bank (minimum 3 years)
- OR $300,000 investment in Panama real estate (can combine bank + property)
- Benefit: Temporary residency (2 years), then permanent
- Processing: 3-6 months
- Slower path than QIV but more flexible investment options
- Dependents: $2,000 additional deposit per dependent
Both programs:
- Open to ALL nationalities (not limited to Friendly Nations list)
- Path to citizenship after 5 years
- No minimum stay (enter once every 2 years)
- Can be combined with territorial tax benefits (foreign income untaxed)`,
    gotchas: `The QIV's $300K real estate option is the most popular — but the property must be in YOUR name (not corporate), titled, and free of liens at time of application. Pre-construction purchases count if you've paid $300K+. The bank deposit options ($500K stock, $750K CD) lock your capital for 5+ years — less liquid than real estate. The "30-day processing" for QIV is theoretical — real-world processing is 2-4 months. Self-Economic Solvency gives temporary residency first (not immediate permanent like QIV). All investment visa programs require maintaining the investment — selling early voids your residency.`,
    pro_tip: `For high-net-worth individuals: the QIV is the fastest path to permanent residency in the Americas. $300K in Panama real estate gives you: permanent residency, work authorization, territorial tax benefits (foreign income untaxed), path to citizenship, and a tangible asset in a dollar economy. Compare: Portugal Golden Visa ($500K+, temporary), US EB-5 ($800K+, years of processing). Panama is faster, cheaper, and offers better tax treatment. For the bank deposit route: negotiate CD rates (3-5% in USD) — your investment earns returns while securing residency.`,
  },

  // === BANKING ===
  {
    topic: 'Banking for Expats — Compliance & Setup',
    country: 'PA',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Superintendencia de Bancos de Panamá; bank requirements; FATF compliance updates',
    content: `Panama banking for expats (2026):
Currency: US Dollar (Balboa pegged 1:1, US bills circulate freely). NO CURRENCY RISK
Banking landscape: Major international financial center. 70+ banks operating
Major banks for expats:
- Banco General: Panama's largest private bank. Best overall. Requires residency or investment proof. $1,000+ initial deposit
- BAC International: Regional bank. More flexible with foreigners. $500+ initial deposit
- Global Bank: Mid-size, expat-friendly. $500+ initial deposit
- Banistmo (Bancolombia subsidiary): Large network. $300+ initial deposit
- Multibank: Smaller, sometimes easier for foreigners. $200+ initial deposit
Account opening requirements (POST-FATF compliance — strict):
- Valid passport + copy
- Residency permit OR proof of economic activity in Panama
- Reference letters: 2 bank references + 1 personal reference (from existing banks)
- Proof of income/source of funds (tax returns, employment letters, financial statements)
- Utility bill or proof of address (Panama or home country)
- Criminal background check (some banks)
Processing time: 2-6 WEEKS (not days). Some accounts take months
Non-resident accounts: Possible but much harder. $250,000+ deposit often required. Limited options
FATF history: Panama was on FATF gray list (removed 2023). Banks remain extremely cautious with compliance — extensive KYC/AML procedures
Digital banking: Limited compared to other countries. No Revolut/Wise accounts in PAB. Traditional banking dominates`,
    gotchas: `Banking is Panama's #1 frustration for new expats. Post-FATF compliance, banks are EXTREMELY cautious — rejections are common, especially for US citizens (FATCA reporting burden makes banks reluctant). Start the process IMMEDIATELY upon arrival — don't wait until you need the account. Reference letters must be from BANKS (not just personal references) — get these from your home country bank before leaving. Some banks refuse certain nationalities or business types entirely. Once opened, accounts work well — it's getting through the door that's painful.`,
    pro_tip: `Strategy for opening a Panama bank account: (1) Get 2 bank reference letters from your home bank BEFORE arriving, (2) Prepare a "compliance package" — 2 years tax returns, employment verification, proof of address, source of funds letter, (3) Start with Banco General or BAC (most expat experience), (4) Bring your immigration lawyer to the bank appointment — they know which officers are responsive, (5) Be persistent — first rejection doesn't mean final rejection. Consider Wise (multi-currency account) for initial needs while the Panama account processes. Once opened, banking is smooth — free domestic transfers, USD accounts, reasonable international wire fees ($25-50).`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Panama City Neighborhood Guide',
    country: 'PA',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'TheLatinvestor; Encuentra24; local real estate data March 2026',
    content: `Panama City property by neighborhood (2026):
Premium:
- Casco Viejo (Old Town): $3,400-4,200/sqm. UNESCO heritage. Restored colonial buildings. Boutique hotels, rooftop bars. 2BR: $250K-450K. Limited supply, heritage premium
- Punta Pacífica: $2,900-3,700/sqm. Modern towers. Ocean views. Hospital Punta Pacífica (Johns Hopkins). 2BR: $220K-380K. Premium expat area
- Costa del Este: $2,800-3,500/sqm. Planned community. Families, international schools. Modern towers + houses. 2BR: $210K-350K. Growing rapidly
- Santa María: $4,000-5,500/sqm. Ultra-premium golf community. Newest luxury development. 2BR: $350K-600K
Mid-range:
- El Cangrejo: $1,800-2,600/sqm. Central, walkable. Restaurants, nightlife. University area. 2BR: $130K-210K. Best value in central Panama City
- Obarrio/Bella Vista: $2,000-3,000/sqm. Financial district. Banks, corporate offices. 2BR: $150K-240K
- Clayton (former US military base): $2,200-3,200/sqm. Green, quiet, family-friendly. Near parks and Canal area. 2BR: $160K-260K
- San Francisco: $1,600-2,400/sqm. Growing area. Cinta Costera promenade access. 2BR: $120K-195K
Rentals (furnished, 2BR):
- Punta Pacífica/Costa del Este: $1,500-2,500/month
- El Cangrejo/Obarrio: $800-1,500/month
- Clayton: $1,200-2,000/month
- Casco Viejo: $1,200-2,200/month
Rental yields: 5-8% gross (among highest in LATAM). Oversupply in some towers keeps prices competitive`,
    gotchas: `Panama City has significant condo oversupply in certain areas — some towers are 30-40% empty. This is good for renters (negotiating power) but concerning for investors (vacancies). Casco Viejo is beautiful but still gentrifying — some streets are rough. Construction quality varies dramatically — inspect thoroughly and hire an independent engineer. Costa del Este is car-dependent despite being "modern." Traffic in Panama City is terrible — the Cinta Costera helped but rush hour (7-9 AM, 5-8 PM) is gridlocked. The metro (2 lines) helps but coverage is limited.`,
    pro_tip: `El Cangrejo is Panama City's hidden gem — central location, walkable, excellent restaurants, 30-50% cheaper than Punta Pacífica with similar amenities. For families: Costa del Este or Clayton — international schools, parks, newer infrastructure. For investment: look for distressed sales in oversupplied towers — 20-30% below asking prices achievable with patience. The rental market is strong for furnished units targeting corporate expats — 5-8% gross yields. Use Encuentra24.com (Panama's #1 real estate portal) for market research. Always negotiate — listed prices are starting points.`,
  },
  {
    topic: 'Boquete, Coronado & Beach/Mountain Living',
    country: 'PA',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Local real estate markets; expat community data; TheLatinvestor 2026',
    content: `Panama outside the city — popular expat destinations:
Boquete (Chiriquí Province — mountain town):
- Property: $180,000-450,000 for homes. Luxury estates: $500K-1M+. Land: $15-50/sqm
- Rentals: $800-2,500/month (2BR house)
- Climate: Spring-like year-round. 15-25°C (60-77°F). Cool nights. Minimal AC needed
- Elevation: 1,200m (3,900ft). Coffee country
- Expat community: Large, established (mostly North American retirees). English widely spoken
- Drawbacks: Limited nightlife, small town feel, medical emergencies require David (30 min) or Panama City flight
Coronado (Pacific beach):
- Property: $150,000-400,000 for condos/houses. Beachfront premium
- Rentals: $800-1,800/month
- Climate: Tropical. Hot and humid (28-33°C). Dry season Dec-April
- Location: 1.5 hours from Panama City by car. Weekend getaway popular
- Community: Mix of retirees and weekenders. Golf course, restaurants
- Cost of living: ~$2,500/month for couple
Bocas del Toro (Caribbean archipelago):
- Property: $100,000-350,000 (island properties). Overwater bungalows: $200K-500K
- Rentals: $600-1,500/month
- Climate: Caribbean tropical. Hot, humid, rain year-round
- Vibe: Backpacker-meets-expat. Surf, diving, island life
- Drawbacks: Limited infrastructure, unreliable electricity/internet, remote
Pedasi (Azuero Peninsula):
- Property: $80,000-250,000. Beachfront lots from $50K
- Emerging destination. Quieter, less developed
- Growing surf community
General: Foreigners can own property freely in Panama (restriction: within 10km of borders and some island coastal areas require special permits)`,
    gotchas: `Boquete is lovely but isolated — the nearest major hospital is 30 minutes away in David. Serious medical issues require air evacuation to Panama City. Internet in Boquete has improved but still lags Panama City. Coronado is a beach resort community — empty during weekdays. Bocas del Toro has beautiful islands but unreliable infrastructure (power outages, internet drops, flooding). Coastal properties near borders require special permits for foreigners. The 10km border restriction affects properties near Costa Rica and Colombia.`,
    pro_tip: `Boquete is perfect for retirees who prioritize climate, nature, and community over city amenities — the cool mountain weather is a genuine advantage in tropical Panama. Coronado works as a weekend beach house if you're based in Panama City. For investment: Pedasi is the emerging play — early-stage development with surf tourism growing. Bocas is for adventurous types only — beautiful but requires tolerance for infrastructure challenges. Consider renting 3-6 months in any location before buying — Panama's regional differences are significant.`,
  },
  {
    topic: 'Property Purchase Process',
    country: 'PA',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Panama property law; notary procedures; closing cost analysis 2026',
    content: `Buying property in Panama — process and costs:
Foreign ownership: Full rights for most urban and suburban property. Restrictions: within 10km of international borders, some island coastal zones (Comarca indigenous territories)
Two property types:
1. Titled property (propiedad titulada): Full ownership with Public Registry title. Standard in Panama City, developed areas. PREFERRED for buyers
2. Rights of Possession (derecho posesorio): Common in rural/beach areas. NOT registered in Public Registry. Requires adjudication process to convert to title. RISKY for foreigners
Purchase process (titled property):
1. Due diligence: Public Registry search (verify title, liens, encumbrances). Municipal tax clearance
2. Promise to Purchase (Promesa de Compra-Venta): 10% deposit typical
3. Final deed (Escritura Pública): Signed at notary. Both parties present
4. Public Registry inscription: 2-4 weeks. Property officially transferred
Transaction costs:
- Transfer tax: 2% of registered value or sale price (whichever higher)
- Registration fees: 0.3%
- Legal fees: 1-2% (independent lawyer essential)
- Notary fees: 0.1-0.3%
- Total buyer costs: ~3.5-5% of purchase price
Financing: Available for residents from Panama banks. Rates 5-7% (USD — low by LATAM standards). LTV: 70-80% for residents, 60-70% for non-residents
Closing timeline: 4-8 weeks for clean titled properties. Rights of Possession: 6-18 months (avoid if possible)`,
    gotchas: `NEVER buy "Rights of Possession" property without experienced legal counsel — these properties are NOT in the Public Registry and disputes are common. The adjudication process to convert RP to titled property takes 6-18 months and may fail. Always verify the property is TITLED. The 2% transfer tax is based on registered value OR sale price (whichever is higher) — some sellers register lower values to reduce tax, but this creates issues for buyers later. Corporate-owned properties (S.A.) can transfer via share sale, avoiding transfer tax — but verify the S.A. has no hidden liabilities.`,
    pro_tip: `Panama's property market offers genuine value — USD-denominated, clear title system (for titled properties), no foreign restrictions in most areas, and financing available at reasonable rates. Always use an independent lawyer (not the seller's or developer's lawyer). For new construction: negotiate — Panama City's oversupply gives buyers leverage. Pre-construction discounts of 10-20% are common. Panama foundations (Fundación de Interés Privado) are excellent estate planning tools for property holding — assets pass outside of probate. Budget $3,000-5,000 for full legal services including due diligence, closing, and registration.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Healthcare System & Hospitals',
    country: 'PA',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Ministry of Health; hospital accreditations; medical tourism reports 2025-2026',
    content: `Panama healthcare system (2026):
Public system (CSS — Caja de Seguro Social):
- Coverage: Employed workers and their dependents (mandatory enrollment through employment)
- Quality: Adequate for basic care. Long wait times for specialists and elective procedures
- Hospitals: CSS hospitals throughout country. Quality varies by location
- Cost: Free for enrolled members (funded through payroll contributions)
- Foreigners: Can enroll if formally employed in Panama
Private healthcare — among the best in Central America:
TOP hospitals:
- Hospital Punta Pacífica (Pacífica Salud): Johns Hopkins International affiliated. JCI accredited. Panama's best. English-speaking staff. Full-service including cancer center, cardiology, neurology
- Hospital Nacional: Large private hospital. Good emergency department. Reasonable prices
- Hospital Santa Fe: Established private hospital. Good general services
- Hospital Chiriquí (David): Best private hospital outside Panama City. Serves Boquete/Chiriquí area
- Clínica Hospital San Fernando: Growing private hospital. Modern facilities
Medical tourism: Panama is a major destination. Procedures cost 40-70% less than US:
- Dental crown: $300-600 (vs $1,000-1,500 US)
- Knee replacement: $12,000-18,000 (vs $35,000-50,000 US)
- Cosmetic surgery: 50-70% savings
- Many doctors US-trained, English-speaking
US veterans: VA Foreign Medical Program covers service-connected care at Pacífica Salud (Johns Hopkins) — direct billing`,
    gotchas: `Healthcare quality drops dramatically outside Panama City. Boquete/Coronado expats must factor in travel time to Panama City for serious conditions. CSS public system has long wait times — months for specialist appointments. Private hospitals in Panama City are excellent but NOT cheap by local standards — a hospital stay can run $1,000-3,000/day. Outside Panama City, English-speaking medical staff are rare. Emergency services (911) are improving but response times vary.`,
    pro_tip: `Hospital Punta Pacífica (Johns Hopkins) is genuinely world-class — the affiliation is real, not just branding. For US veterans: the VA FMP program at Pacífica Salud is a game-changer — service-connected care at a world-class hospital with no out-of-pocket costs. For retirees in Boquete: establish a relationship with Hospital Chiriquí in David (30 min away) for routine care, and plan for Panama City transport for complex procedures. Medical tourism is legitimate — dental work in particular is exceptional value. Pharmacies (farmacias) sell many medications without prescription at low costs.`,
  },
  {
    topic: 'Private Health Insurance',
    country: 'PA',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Insurance company data; expat insurance comparison; 2025-2026 rates',
    content: `Private health insurance options in Panama (2026):
Local insurers:
- ASSA Compañía de Seguros: Panama's largest insurer. Plans: $150-400/month (age 30-60). Good network including Punta Pacífica
- Mapfre Panama: International insurer. Plans: $130-350/month. Reliable claims processing
- Generali Panama: European insurer. Plans: $140-380/month
- Pan American Life: Regional insurer. Plans: $120-300/month
International insurance (popular with expats):
- Cigna Global: $200-600/month. Worldwide coverage. Best for those who travel frequently
- Aetna International: $180-500/month. Strong US network if returning for care
- GeoBlue (BCBS): $150-450/month. Good for US citizens
- Pacific Prime: Broker offering multiple carrier comparison
Coverage tiers:
- Basic (hospitalization + emergency): $100-200/month
- Mid-range (+ outpatient, specialists): $200-350/month
- Comprehensive (+ dental, vision, wellness): $300-500/month
- Premium (+ US/global coverage): $400-700/month
Pensionado discount: 20% off doctor visits, 15% off hospital bills, 10% off medications (ON TOP of insurance)
Pre-existing conditions: 12-24 month waiting period typical. Some plans exclude permanently
Age limits: Most local plans accept up to age 65-70 for new enrollment`,
    gotchas: `Insurance costs rise significantly after age 60 — budget for 30-50% increases per decade. Pre-existing conditions are the biggest obstacle — many plans exclude them permanently or impose long waiting periods. Local plans may not cover treatment outside Panama — consider international insurance if you travel. Dental coverage is typically limited or excluded from medical plans. Claims processing can be slow with local insurers — 30-60 days for reimbursement.`,
    pro_tip: `For retirees: combine a local plan (ASSA or Mapfre, $150-250/month) with the Pensionado discounts — the 20% doctor and 15% hospital discounts apply to out-of-pocket costs AFTER insurance. For younger expats: GeoBlue or Cigna Global provide flexibility if you travel. Budget $200-400/month for comprehensive coverage. Private hospitals often offer "hospital membership" programs — annual fee ($500-1,000) for discounted rates, faster appointments, and concierge service. Compare quotes through Pacific Prime or Aetna direct — rates vary significantly for the same coverage level.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living',
    country: 'PA',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; International Living; expat cost surveys; 2025-2026 data',
    content: `Panama cost of living (2026, all in USD — dollar economy):
Panama City (comfortable couple):
- Rent: $800-2,000/month (2BR, area dependent — El Cangrejo $800-1,200, Punta Pacífica $1,500-2,500)
- Groceries: $350-500/month (mix of local and imported)
- Dining out: $300-500/month (local restaurants $8-15/meal, upscale $30-60)
- Transportation: $100-200/month (metro $0.35/ride, Uber $3-8, no car needed in city center)
- Utilities: $100-200/month (electricity high due to AC — $80-150 alone)
- Internet: $30-60/month (50-100 Mbps fiber)
- Mobile: $15-30/month (unlimited data plans)
- Healthcare: $150-400/month (private insurance)
- TOTAL: $1,800-3,500/month
Boquete (couple):
- Rent: $800-1,500/month (house with garden)
- Total: $1,500-2,500/month (lower utilities — no AC needed)
Coronado (couple):
- Total: $1,800-3,000/month
Individual costs:
- Restaurant meal: $8-15 (local). $25-60 (upscale)
- Coffee: $1.50-4
- Beer: $1.50-4 (local). $4-7 (craft/imported)
- Gym: $30-70/month
- Movie ticket: $5-8
- Domestic help: $400-600/month (full-time). $15-25/day (part-time)
- Gasoline: $3.50-4.50/gallon (lower than most neighbors)
Panama minimum wage: $585-780/month (varies by sector). Average salary: ~$900/month`,
    gotchas: `Electricity is Panama's biggest surprise expense — AC runs $80-150/month in the tropical heat. Budget for this. Imported goods (cheese, wine, specialty items) are 30-50% more than US prices. Fresh local produce and seafood are affordable. Car ownership is expensive: import duties, registration, insurance, and terrible traffic. Boquete's "lower cost" depends on not needing frequent Panama City trips (flights or 6-hour drive). The dollar economy means no currency risk but also no arbitrage opportunity — what you see is what you pay.`,
    pro_tip: `The dollar economy is Panama's underrated advantage — no mental currency conversion, no exchange rate risk, no transfer fees from USD accounts. Budget $2,000-2,500/month for a comfortable couple in Panama City outside premium areas. Pensionado discounts save $200-400/month on dining, entertainment, and services — carry the card everywhere. The metro ($0.35/ride) is clean, modern, and expanding — live near a station to avoid Panama City's horrible traffic. Local mercados (markets) offer produce at 50% less than supermarkets. Domestic help ($400-600/month full-time) is affordable and common.`,
  },
  {
    topic: 'Climate, Infrastructure & Daily Life',
    country: 'PA',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'ETESA (Panama meteorological); infrastructure reports; expat guides 2026',
    content: `Panama climate and infrastructure:
Climate:
- Tropical. Two seasons: dry (December–April, "summer") and rainy (May–November, "winter")
- Panama City: 24-33°C (75-91°F) year-round. High humidity (80-90%). AC is essential
- Rainy season: Heavy afternoon thunderstorms (2-4 hours), then clears. NOT all-day rain
- Boquete: 15-25°C (60-77°F). Cool, spring-like. Less humidity. Occasional rain year-round
- Bocas del Toro: Caribbean tropical. Rain year-round, heaviest Sept-Oct and Dec-Jan
- Panama is BELOW the hurricane belt — no hurricanes (major advantage over Caribbean islands)
Infrastructure:
- Metro: 2 lines (Line 1: north-south, Line 2: east to Airport/Tocumen). Clean, modern, $0.35. Line 3 under construction
- Roads: Major highways good. City traffic terrible (2-3 hour commutes possible)
- Internet: Fiber available in cities (50-200 Mbps). Cable & Wireless (CWP), Tigo main providers
- Tocumen Airport (PTY): Major hub. Direct flights to US (Miami 2.5h, Houston 3.5h, NYC 5h), Europe, South America
- Panama Canal: Drives economy. Colón Free Zone (second largest free zone globally)
Language: Spanish (primary). English widely spoken in business, tourism, and expat areas
Safety: Generally safe for LATAM. Panama City tourist areas well-policed. Avoid: Colón city center, El Chorrillo, Curundú
Timezone: EST (UTC-5). Same as US East Coast — perfect for business
Government: Stable democracy. Strong rule of law by LATAM standards. Pro-business environment`,
    gotchas: `The humidity is relentless — new arrivals from dry climates struggle for 1-3 months adjusting. AC costs are real ($80-150/month electricity). Rainy season (8 months!) means daily afternoon storms — plan outdoor activities for mornings. Panama City traffic is genuinely terrible and getting worse despite metro expansion — location matters more than anywhere. Water is safe to drink in Panama City but not universally. Colón (free zone city, 1 hour from Panama City) has serious safety concerns — avoid outside the free zone area.`,
    pro_tip: `The no-hurricane advantage is massive — while Caribbean islands rebuild every few years, Panama is untouched. The EST timezone is perfect for remote work with US clients — same hours, no adjustment needed. Plan life around the rain: mornings for outdoor activities, afternoons indoors when storms hit. Live near the metro if possible — it transforms the city from gridlocked to manageable. Tocumen Airport's hub status means cheap flights to the US, Central America, and South America — great for frequent travelers. Panama's stability and dollar economy make it the "Singapore of the Americas" for business.`,
  },
  {
    topic: 'Bureaucracy, Residency Gotchas & Integration',
    country: 'PA',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Immigration experience reports; legal advisories; expat community feedback 2025-2026',
    content: `Panama practical challenges and integration:
Bureaucratic realities:
- Immigration processing: 3-6 months for most visas. Patience required
- Banking setup: 2-6 weeks minimum. Often the biggest bottleneck
- Cédula (ID card): Issued after residency approval. Required for many services
- Driver's license: Convert foreign license within 90 days. Requires medical exam, eye test, written test
- Vehicle registration: Complex process, import duties 15-25% on vehicles
- Utilities: Connection can take 1-4 weeks. Deposits required ($100-300)
Common expat mistakes:
1. Assuming FNV = immediate work permit (it doesn't — separate application needed)
2. Not starting bank account process early enough
3. Underestimating rainy season duration (8 months, not 4)
4. Choosing neighborhood based on price alone (traffic makes location critical)
5. Not learning Spanish (English-speaker bubble exists but limits you)
Expat communities:
- Panama City: Large, diverse (US, Canadian, European, Venezuelan, Colombian). Active social clubs
- Boquete: Tight-knit, mostly North American retirees. Very English-friendly
- Coronado: Weekend community, less tight-knit
- Bocas del Toro: Younger, adventurous crowd
Spanish: Essential for daily life outside expat bubbles. Medical, legal, banking — Spanish helps enormously
Pro tip resources: Internations Panama, Panama Relocation Tours, Panama Expat Forum
Cost of immigration lawyer: $2,000-5,000 for full visa process. ESSENTIAL — do not DIY Panama immigration`,
    gotchas: `The FNV work authorization misconception burns many expats — you need SEPARATE work authorization even with permanent residency (except QIV and certain visa categories). Banking remains the #1 frustration — prepare thoroughly and start immediately. The cédula (national ID) is crucial but can take weeks after residency approval — plan for this gap. Domestic flights to Bocas del Toro and David are unreliable — delays and cancellations common. Property management companies for rental income vary wildly in quality.`,
    pro_tip: `The key to smooth Panama integration: hire an immigration lawyer before arriving, start bank account preparation from your home country (reference letters), and plan for 3-6 months of "setup time" before everything is running. Join Internations Panama events immediately — the networking accelerates everything (introductions to bankers, doctors, real estate agents). Learn survival Spanish even if you plan to use English mostly — it transforms bureaucratic interactions. The expat community in Panama is welcoming and well-organized — you won't be alone in navigating the process.`,
  },
  {
    topic: 'Internet, Connectivity & Remote Work',
    country: 'PA',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Speedtest data; ISP websites; coworking directories 2025-2026',
    content: `Panama internet and remote work (2026):
ISPs and speeds:
- Cable & Wireless (CWP/+Móvil): Largest provider. Fiber 100-500 Mbps. $40-80/month. Best coverage
- Tigo: Second largest. Fiber 50-300 Mbps. $35-65/month. Competitive pricing
- Claro: Mobile and some fixed. 4G/5G expanding
- Average speeds: Panama City 80-150 Mbps. Boquete 30-80 Mbps. Coronado 40-100 Mbps. Bocas 10-30 Mbps
- Starlink: Available in Panama. $110/month + equipment. Essential for Bocas/rural areas
Mobile: +Móvil, Tigo, Claro. Prepaid SIM: $5-15 for 5-15GB. Unlimited postpaid: $25-45/month. 5G in Panama City
Coworking:
- Panama City: Selina (Casco Viejo, from $150/month), WeWork (Obarrio/financial district, from $250/month), Regus (multiple locations), Impact Hub, La Roca
- Boquete: Limited formal spaces. Cafés with good WiFi common. Habla Ya language school has coworking
- Day passes: $10-25. Monthly desks: $150-350
Timezone: EST (UTC-5) — identical to US East Coast. Zero timezone friction for US clients
Panama as digital nomad hub:
- Dollar economy = no FX issues for USD earners
- Territorial tax = remote income untaxed
- Good internet in Panama City
- Growing nomad community but smaller than Medellín/Mexico City/Lisbon
- No dedicated digital nomad visa (use FNV or tourist status for <180 days)`,
    gotchas: `Internet in Panama City is solid but outside the capital, speeds drop significantly. Bocas del Toro is particularly challenging — power outages and internet drops are common. Boquete has improved but still inconsistent during heavy rain. No dedicated coworking scene outside Panama City — café WiFi is the norm elsewhere. Panama has no digital nomad visa — use tourist entry (180 days max) or apply for FNV if staying longer. The remote work community is growing but still smaller than competitors (Colombia, Mexico, Portugal).`,
    pro_tip: `For remote workers: Panama's combination of territorial taxation (foreign income untaxed) + dollar economy + EST timezone is unmatched in the Americas. Live in Panama City for best connectivity. The Casco Viejo/Selina ecosystem is the remote worker hub. Redundancy matters: have both fiber and mobile hotspot. For Boquete: Starlink is increasingly popular and solves the connectivity gap. Panama's hub airport (Tocumen) means weekend trips to Medellín, Cartagena, or San José are $100-200 roundtrip — great for variety while maintaining Panama as home base.`,
  },
];
