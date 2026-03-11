import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const PARAGUAY_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Territorial Tax — 10% Local, 0% Foreign',
    country: 'PY',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SET (Subsecretaría de Estado de Tributación); GoParaguay tax guide 2026; Melvato analysis',
    content: `Paraguay territorial tax system (2026):
CORE: Paraguay taxes ONLY income sourced within Paraguay. Foreign income = 0% tax
Personal Income Tax (IRP — Impuesto a la Renta Personal):
- Progressive rates on Paraguay-sourced income:
  - Up to PYG 50M (~$6,500/year): 8%
  - Above PYG 50M: 10%
- Threshold: Only applies if total income exceeds ~PYG 80M/year (~$10,400). Below this: exempt
Foreign-sourced income: 0% — completely exempt regardless of amount:
- Foreign pensions and Social Security: $0 Paraguay tax
- Foreign dividends and interest: $0
- Foreign capital gains: $0
- Remote work for foreign employers: $0
- Foreign rental income: $0
- Offshore business profits: $0
Corporate tax (IRACIS): 10% on Paraguay-sourced profits. One of lowest in the world
VAT (IVA): 10% standard rate. 5% reduced rate (basic necessities, agricultural products)
NO wealth tax. NO inheritance tax. NO gift tax. NO capital gains tax on foreign investments
Social Security (IPS): Employee 9% + employer 16.5% of salary (Paraguay employment only)
Property tax: 0.5-1% of assessed fiscal value (significantly below market value)
RUC (tax ID): Required for all residents. Obtained at SET offices`,
    gotchas: `The territorial system is genuine and well-established — Paraguay has maintained it for decades. However: if you provide services TO Paraguayan clients from Paraguay, that income IS Paraguay-sourced and taxed at 8-10%. Remote work for foreign clients: genuinely $0 Paraguay tax. The IRP threshold (~$10,400/year) means most local casual income is also exempt. You MUST obtain a RUC (tax ID) and file annually even if you owe $0 — non-filing can create issues. Paraguay is on various international watchlists — ensure full compliance to avoid future problems.`,
    pro_tip: `Paraguay offers the simplest, cheapest tax jurisdiction in the Americas: 0% on foreign income, permanently, with no time limit or investment requirement. Unlike Uruguay's 11-year holiday or Panama's more complex structure, Paraguay's territorial system is unconditional and indefinite. For digital nomads and remote workers: this is the lowest tax option in LATAM period. Combined with the lowest cost of living and fastest residency, Paraguay is the ultimate tax/residency optimization play. Register your RUC immediately after getting cédula — tax compliance is simple and cheap (accountant $50-100/month).`,
  },
  {
    topic: 'Corporate Structure & Tax Planning',
    country: 'PY',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SET; corporate law guides; business formation resources 2025-2026',
    content: `Paraguay corporate and business taxation (2026):
Corporate tax (IRACIS): 10% flat on Paraguay-sourced profits
Dividend distribution: 8% withholding on dividends paid to individuals (5% to non-residents)
Effective corporate + dividend rate: ~17.2% combined (10% corporate + 8% on remaining 90%)
Business structures:
- S.A. (Sociedad Anónima): Corporation. Most common for foreign investors. Minimum 3 shareholders
- S.R.L. (Sociedad de Responsabilidad Limitada): LLC equivalent. 2-25 partners. Simpler
- Unipersonal (sole proprietorship): Simplest. Individual trading under RUC
- Branch office: For foreign companies operating in Paraguay
Setup costs: S.R.L. $800-2,000 including legal fees. S.A. $1,500-3,000. Timeline: 2-4 weeks
Annual compliance: Bookkeeping, annual tax filing, municipal licenses. $100-200/month for accountant
Special zones:
- Maquila regime: Reduced 1% tax for export-oriented manufacturing
- Free trade zones: Reduced taxation for qualifying businesses
- Ciudad del Este: Special commercial zone (historically tax-friendly for trade)
Transfer pricing: Rules exist but enforcement is limited compared to developed countries
Tax treaties: Limited network — Paraguay has few double taxation agreements`,
    gotchas: `The 10% corporate rate is attractive but the additional 8% dividend withholding brings effective rate to ~17.2% — still competitive but not the "10% flat" it appears. S.A. formation requires 3 shareholders (can use nominee shareholders). Annual compliance is required even for dormant companies. The maquila regime (1% tax) is genuine but requires actual manufacturing/export activity. Paraguay's limited tax treaty network can create issues for some international structures. Banking for companies is harder than personal — see banking entry.`,
    pro_tip: `For most expats: the unipersonal (sole proprietorship) or S.R.L. is sufficient. Only create an S.A. for larger operations. The maquila regime is exceptional for any business that can structure as export-oriented — 1% tax is among the lowest globally. Paraguay's corporate setup costs ($800-3,000) are among the cheapest in LATAM. For international entrepreneurs: combine Paraguayan residency (personal 0% foreign income) with a Paraguayan company (10% on local income) for optimal tax structure. Work with a Paraguayan accountant from day 1 — they're inexpensive ($50-200/month) and essential.`,
  },

  // === VISA ===
  {
    topic: 'Permanent Residency — Fastest in the World',
    country: 'PY',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Dirección General de Migraciones; SUACE program; Paraguay Sovereign; Destination Paraguay 2026',
    content: `Paraguay permanent residency (2026):
TWO pathways:
1. Standard process (temporary → permanent):
- Temporary residency: 1-2 years. Then apply for permanent
- Requirements: Passport, clean criminal record (apostilled), birth certificate (apostilled), health certificate
- Processing: 4-8 weeks for temporary
2. SUACE fast-track (direct to permanent):
- Available since 2025. Bypasses temporary residency entirely
- Requirements: Same documents + business registration or economic activity proof
- Processing: 2-4 WEEKS for permanent residency (among fastest globally)
- Cost: Government fees ~$300-500 + legal fees $1,000-3,000
KEY CHANGE: Paraguay eliminated the $5,000 bank deposit requirement in October 2022
Current requirements (just 4 documents):
1. Valid passport (6+ months validity)
2. Clean criminal record (apostilled, from home country)
3. Birth certificate (apostilled)
4. Health certificate (can be obtained in Paraguay, $50-100)
NO income requirement. NO investment minimum. NO bank deposit. NO language test. NO medical exam (beyond basic health cert)
Cédula (national ID): Issued after residency approval. Required for banking, employment, daily life
Citizenship: 3 years of residency → eligible for Paraguayan citizenship. Dual citizenship allowed
Mercosur benefit: Paraguay residency grants travel/work rights across Mercosur bloc
Must-not-leave rule: Cannot be absent from Paraguay for more than 3 consecutive years (previously reported as 1 year — verify current rule)`,
    gotchas: `The SUACE fast-track requires some form of economic activity in Paraguay — typically registering a small company (S.R.L., $800-1,500) or obtaining an RUC as unipersonal. The "4 documents only" claim is accurate for basic requirements, but immigration officers may request additional documentation (proof of address, photos, etc.). Processing times vary — 2-4 weeks is optimistic, 4-8 weeks more realistic. The absence rule is important: extended absence without returning can result in loss of residency. Some sources report 1 year, others 3 years — verify current regulation with your lawyer.`,
    pro_tip: `Paraguay permanent residency is the world's fastest and cheapest "Plan B" residency. Strategy: (1) Get documents apostilled at home, (2) Fly to Asunción, (3) Register S.R.L. ($800-1,500), (4) Apply through SUACE, (5) Receive permanent residency in 2-4 weeks, (6) Get cédula, (7) Open bank account. Total cost including flights: $3,000-5,000. Total time on ground: 2-4 weeks. You then have: permanent residency, Mercosur travel rights, 0% foreign income tax, path to citizenship (3 years), and one of the world's strongest "Plan B" options. Use an established immigration firm — Paraguay Sovereign, Creimerman Law, or GoParaguay are well-known.`,
  },
  {
    topic: 'Absence Rules, Citizenship & Mercosur',
    country: 'PY',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Migration law; citizenship requirements; Mercosur agreements',
    content: `Paraguay residency maintenance and citizenship path:
Absence rules:
- Permanent residents: Must not be absent from Paraguay for more than 3 consecutive years
- If exceeded: Residency may be revoked (must reapply)
- Simple maintenance: Enter Paraguay at least once every 3 years (even brief visit counts)
- Temporary residents: Must be present more regularly (check current requirements)
- Tax residency: Triggered by 120+ days/year in Paraguay (for IRP purposes)
Citizenship (3-year path):
- Eligibility: After 3 years of permanent residency
- Requirements: Basic Spanish proficiency, knowledge of Paraguayan history/constitution (basic exam), clean criminal record, proof of means of support
- Processing: 6-12 months after application
- Benefits: Paraguayan passport (visa-free to 146 countries including EU Schengen), voting rights, full rights
- Dual citizenship: Paraguay allows dual citizenship — no need to renounce original nationality
Mercosur benefits (with residency):
- Freedom of movement within Mercosur bloc (Argentina, Brazil, Uruguay, Bolivia + associate members)
- Right to work in member states
- Access to education and healthcare in member states
- Travel with cédula (no passport needed) within Mercosur
Passport power: Paraguayan passport ranks ~35th globally. Visa-free: EU/Schengen (90 days), UK, most of LATAM, some Asia`,
    gotchas: `The 3-year absence rule is generous but MUST be tracked — set calendar reminders. Tax residency (120 days) is different from immigration residency (3-year absence rule) — you can maintain immigration residency with brief visits while not being tax resident. Citizenship requires basic Spanish — study before the exam. The citizenship process (6-12 months) is slower than residency but still fast by global standards. Paraguayan passport is good but not elite — no visa-free access to US, Canada, Australia, or Japan.`,
    pro_tip: `The 3-year window is the key to Paraguay as a "Plan B" — you don't need to live there full-time. Visit once every 2-3 years to maintain status. For citizenship: the 3-year path is among the fastest globally and gives you an EU/Schengen-access passport. Learn basic Spanish ($5-10/hour tutoring in Paraguay) — the citizenship exam is not difficult. The Mercosur travel/work rights are underrated — residency in Paraguay opens doors to Argentina, Brazil, and Uruguay. For families: children born in Paraguay to resident parents receive Paraguayan citizenship automatically.`,
  },

  {
    topic: 'Property Tax & Investment Incentives',
    country: 'PY',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SET; municipal tax codes; investment promotion law',
    content: `Paraguay property and investment taxation (2026):
Property tax (Impuesto Inmobiliario):
- Rate: 0.5-1% of fiscal value (valor fiscal)
- Fiscal value: Set by DINAC (National Cadastre). Typically 20-40% below market value
- Effective rate on market value: ~0.2-0.5%
- Vacant land: Higher rates (up to 1.5%) to discourage speculation
- Agricultural land: Similar rates but based on agricultural productivity zones
Transfer tax: 1.5-2% of declared value (buyer typically pays)
Capital gains: Included in IRP at 8-10% for individuals. Corporate: 10% under IRACIS
Rental income: Taxed as personal income at 8-10% (if Paraguay-source). Foreign rental income: 0%
Investment incentives (Law 60/90):
- Tax exemptions for approved investment projects
- Benefits: Import duty exemption on capital goods, VAT exemption on construction materials, income tax holidays for qualifying projects
- Sectors: Agriculture, manufacturing, tourism, technology, forestry
- Minimum investment: Varies by sector. ~$5,000-50,000+ depending on project
- Duration: Up to 10 years of tax benefits
Maquila Law (Law 1064):
- 1% tax on value added for export-oriented operations
- Import duty exemption on inputs
- Popular with Brazilian/Argentine companies using Paraguay as low-cost manufacturing base`,
    gotchas: `Fiscal values for property tax lag far behind market values — this helps keep annual taxes low but creates discrepancies at sale. The Law 60/90 investment incentive requires government approval and compliance reporting — not automatic. Maquila benefits require actual manufacturing/export activity and Ministry approval. Transfer tax declarations are sometimes understated to reduce costs — this creates legal risk. Keep documentation clean.`,
    pro_tip: `Paraguay's effective property tax (0.2-0.5% of market value) is among the lowest globally. Combined with low purchase prices, holding costs are minimal. Law 60/90 incentives are real and accessible for small businesses — a tourism project, small factory, or agricultural operation can qualify. The maquila regime at 1% tax is extraordinary for businesses that can structure exports. For real estate investors: the combination of low purchase prices + low property tax + 6-10% rental yields makes Paraguay one of the best risk-adjusted property investments in South America.`,
  },
  {
    topic: 'Tourist Entry & Digital Nomad Strategy',
    country: 'PY',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Dirección General de Migraciones; entry requirements 2025-2026',
    content: `Paraguay entry and digital nomad strategy (2026):
Tourist entry:
- US, EU, UK, Canada, Australia: 90 days visa-free
- Extension: Can extend 90 days at immigration office (~$30 fee)
- Maximum: 180 days per year on tourist status
- Border runs: Historically tolerated (exit to Argentina/Brazil, re-enter) but increasingly scrutinized
Digital nomad approach (no dedicated DN visa):
- No specific digital nomad visa exists
- Strategy 1: Enter as tourist, work remotely for foreign clients — gray area but widely practiced
- Strategy 2: Apply for permanent residency immediately (2-4 weeks) — then legal with 0% foreign income tax
- Strategy 3: Tourist entry → apply for residency from within Paraguay
Tax trigger: 120+ days/year in Paraguay = tax resident. Below 120 days: no Paraguay tax obligations
Why residency beats tourist status:
- Legal certainty (no gray area)
- Banking access (cédula required)
- 0% foreign income tax (with proper RUC registration)
- Mercosur travel rights
- Path to citizenship
- Low cost ($3,000-5,000 total)
Recommendation: Just get residency. It's so fast and cheap that tourist status makes no sense for stays beyond a few weeks`,
    gotchas: `Working remotely on tourist visa is a legal gray area. The immigration office increasingly questions "perpetual tourists." Tax residency triggers at 120 days — lower than most countries (183 days). If staying 120+ days, you MUST register with SET (tax authority). The smart move is always just getting residency — it's too fast and cheap to justify tourist status risks.`,
    pro_tip: `Paraguay's residency is so fast (2-4 weeks) and affordable ($3,000-5,000) that there's no reason to operate in the tourist gray area. Arrive, apply immediately, get cédula, register RUC — 100% legal with 0% foreign income tax. The 120-day tax threshold means even moderate time triggers obligations — but since those obligations are $0 on foreign income, this is a feature, not a bug.`,
  },

  // === BANKING ===
  {
    topic: 'Banking & Financial Services',
    country: 'PY',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'BCP (Banco Central del Paraguay); bank requirements; expat banking guides 2025-2026',
    content: `Paraguay banking for expats (2026):
Currency: Guaraní (PYG). ~PYG 7,700/USD (March 2026). Relatively stable
Requirement: Paraguayan cédula (national ID) required for ALL bank accounts. No passport-only options
Major banks:
- Itaú Paraguay: Largest private bank. Best digital banking. USD + PYG accounts. Most expat-friendly
- Sudameris: Second largest. International banking experience. Good service
- Banco Continental: Large local bank. Extensive branch network
- Banco Nacional de Fomento (BNF): State bank. More accessible but basic services
- Banco Regional: Growing. Agricultural sector focus
Digital banks:
- Ueno: Digital-first. Opens with cédula + phone. No fees. Growing rapidly. Best for daily payments
- Eko: Digital wallet. Simple setup. QR payments
Traditional account opening:
- Documents: Cédula, proof of address, proof of income/source of funds, RUC (tax ID)
- Initial deposit: PYG 500,000-2,000,000 ($65-260) depending on bank
- Processing: 1-3 weeks
- USD accounts: Available at major banks. Important for savings
- Account fees: $5-15/month for basic accounts
International transfers: Limited and often slow. SWIFT wires: $30-75 fees + unfavorable spreads
ATM network: Growing but limited outside Asunción. Cash is still king in much of Paraguay`,
    gotchas: `Banking is Paraguay's weakest infrastructure area. ALL banks require cédula — you cannot open an account without completing residency first. International transfers are expensive and slow compared to regional peers. USD accounts are available but with limited functionality. Digital banking (Ueno) is improving but still basic compared to Brazil's Nubank or Argentina's Brubank. ATMs outside Asunción are scarce — carry cash. Some banks are reluctant to open accounts for new residents without clear income proof. Credit cards have high interest rates (30-50% annually in PYG).`,
    pro_tip: `Banking strategy: (1) Complete residency and get cédula FIRST, (2) Open Ueno digital account immediately (easiest), (3) Then Itaú for full banking with USD account, (4) Use Wise for international transfers (much cheaper than bank wires). Keep most savings in USD accounts or offshore — guaraní depreciation is gradual but real. Ueno is the game-changer for daily life — QR payments are widely accepted in Asunción. For larger financial needs: Sudameris or Itaú offer the best service for foreign residents. Paraguay's banking system is developing — expect improvements but plan for current limitations.`,
  },

  {
    topic: 'Currency, Transfers & Crypto',
    country: 'PY',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'BCP; remittance providers; crypto adoption data 2025-2026',
    content: `Paraguay currency and financial transfers (2026):
Guaraní (PYG):
- Exchange rate: ~PYG 7,700/USD (March 2026). Relatively stable (5-8% annual depreciation vs USD)
- No currency controls (unlike Argentina). Free conversion PYG↔USD
- Cash economy: Paraguay is heavily cash-based, especially outside Asunción. ATM withdrawals in PYG
- USD: Widely accepted for larger transactions (property, vehicles, rent). Many prices quoted in USD
International transfers:
- Wise: Available for PYG. Best rates for regular transfers. $5-15 fees
- Western Union/MoneyGram: Physical locations throughout Asunción. Higher fees but immediate cash pickup
- Bank SWIFT: Slow (3-7 days) and expensive ($30-75 + poor exchange rates). Avoid for regular use
- Remittance apps: Growing options for PYG corridor
Cryptocurrency:
- Legal status: Not regulated but not prohibited. Growing adoption
- Paraguay produces ~15% of global Bitcoin mining (cheap hydroelectric power from Itaipú)
- Crypto exchanges: Binance, local OTC dealers
- P2P trading: Common for larger amounts
- Mining operations: Major industry in Paraguay due to world's cheapest electricity (~$0.03/kWh)
Financial planning:
- Keep USD savings outside Paraguay (limited domestic options)
- Use PYG for daily expenses
- International brokerage accounts accessible from Paraguay
- Paraguay has no foreign exchange controls — move money freely in/out`,
    gotchas: `Paraguay's cash economy means you'll need physical PYG regularly. ATM withdrawal limits are low (~PYG 2M, ~$260). Bring USD cash for initial weeks. International wire transfers through Paraguayan banks are slow and expensive — minimize bank-to-bank transfers. Crypto mining is booming but electricity rates for miners are increasing as the government reconsiders subsidies. The free capital movement is genuine — no restrictions on sending money in or out.`,
    pro_tip: `The lack of currency controls is a major advantage over Argentina (cepo) and historically over Brazil. Strategy: receive income in USD internationally (Wise account), convert to PYG as needed via Wise for daily expenses. Keep investments in international brokerages. Paraguay's cheap electricity ($0.03/kWh) makes it attractive for crypto mining — some expats combine residency with mining operations. The PYG is relatively stable for a small economy — less volatile than Argentine peso, though not as strong as Uruguayan peso.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Asunción Neighborhood Guide',
    country: 'PY',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'InfoCasas Paraguay; Destination Paraguay; local market data 2026',
    content: `Asunción property by neighborhood (2026):
Premium:
- Villa Morra: $1,200-2,000/sqm. Asunción's most upscale. Shopping, restaurants, embassies. Studios from $35K (pre-construction), 2BR: $70K-150K. Luxury houses: $400K-1M+
- Carmelitas: $1,000-1,800/sqm. Adjacent to Villa Morra. Trendy, nightlife, dining. 2BR: $60K-130K
- Las Mercedes: $1,100-1,900/sqm. Newer developments. Modern towers. 2BR: $65K-140K
- Manorá: $900-1,500/sqm. Residential, quieter. Families. 2BR: $55K-110K
Mid-range:
- Recoleta: $800-1,400/sqm. Growing area. Good infrastructure. 2BR: $50K-100K
- Sajonia: $600-1,000/sqm. Near river. Developing. 2BR: $35K-70K
- Barrio Herrera: $700-1,200/sqm. Central. Mix of old and new. 2BR: $40K-85K
Rentals (furnished, 2BR):
- Villa Morra/Carmelitas: $400-800/month
- Las Mercedes/Manorá: $350-650/month
- Recoleta: $300-500/month
- Budget areas: $200-350/month
Rental yields: 6-10% gross (among highest in LATAM due to low purchase prices)
New construction boom: Asunción is experiencing rapid development. Pre-construction prices 15-25% below completion. Many new towers in Villa Morra/Las Mercedes
Asunción metro population: ~2.5 million`,
    gotchas: `Asunción's property market is developing — quality varies significantly between buildings. Inspect thoroughly. New construction quality can be inconsistent — hire an independent engineer for any purchase over $50K. The "luxury" market is growing but still small compared to regional capitals. Resale market is less liquid than Buenos Aires or São Paulo — selling can take months. Title searches are important — verify at the Dirección General de Registros Públicos. Some areas flood during heavy rains — check flood maps.`,
    pro_tip: `Paraguay offers the lowest property prices of any capital city in South America. Villa Morra and Carmelitas are the safe defaults for expats — walkable, modern, good services. Pre-construction ("en pozo") offers 15-25% discounts with 20% down payment — best value for patient buyers. Rental yields (6-10%) are exceptional — a $70K apartment renting at $400-500/month. For investment: the construction boom means oversupply risk in some areas — focus on premium locations (Villa Morra, Las Mercedes). Use InfoCasas.com.py for market research.`,
  },
  {
    topic: 'Encarnación, Ciudad del Este & Property Purchase',
    country: 'PY',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Local real estate markets; property law; transaction guides 2026',
    content: `Paraguay beyond Asunción + purchase process:
Encarnación (southeastern Paraguay):
- "Pearl of the South." On Paraná River across from Posadas, Argentina
- Property: $500-1,200/sqm. River-view apartments: $800-1,500/sqm
- Rentals: $200-500/month (2BR)
- Climate: Subtropical, warm. Carnival city (largest in Paraguay)
- Growing expat community (mix of Paraguayan, Argentine, international)
Ciudad del Este (tri-border area):
- Third largest city. On Brazilian border (Foz do Iguaçu)
- Property: $400-1,000/sqm. Commercial real estate significant
- Known for: Shopping/trade (electronics, goods from Brazil). Commercial hub
- Expat appeal: Low cost, border convenience (Brazilian healthcare/shopping nearby)
- Drawbacks: Less refined than Asunción. Security concerns in some areas
Rural/agricultural land:
- Agricultural land: $2,000-6,000/hectare (among cheapest in South America)
- Cattle ranching: Expanding sector. Land appreciation 8-15% annually
- Soy/agriculture: Major export sector. Foreign ownership allowed
Property purchase process:
- Foreigners: FULL ownership rights. No restrictions on urban or rural land
- Process: Title search at Registros Públicos → Preliminary agreement (boleto) → Notary deed (escritura pública) → Registration
- Transaction costs: Transfer tax 1-2%, notary 1-2%, legal 1-2%. Total: ~4-6%
- Financing: Limited for foreigners. Cash purchases dominate. Some developer financing
- Timeline: 2-4 weeks for clean transactions`,
    gotchas: `Ciudad del Este has security concerns — the tri-border area has historical issues. Stick to established areas. Rural land purchases require extra due diligence — boundary disputes and unclear titles are more common outside Asunción. Agricultural land near Brazilian border has appreciated significantly — verify pricing is current. Financing for foreigners is essentially unavailable from banks — bring cash or arrange financing abroad. Property taxes are low (0.5-1%) but must be kept current to avoid issues at sale.`,
    pro_tip: `Encarnación is Paraguay's lifestyle play — better climate than Asunción, river culture, growing amenities, and very affordable. Ciudad del Este works for those who want proximity to Brazilian infrastructure (hospitals, shopping, airports in Foz do Iguaçu). Agricultural land is the long-term investment play — Paraguay is one of the world's top soy producers, and land prices are still a fraction of neighboring Argentina or Brazil. For property purchase: always use an independent lawyer. Title searches at Registros Públicos are essential — never skip this step.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Healthcare System & Private Options',
    country: 'PY',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Ministry of Public Health; hospital data; expat healthcare guides 2025-2026',
    content: `Paraguay healthcare (2026):
Public system (IPS — Instituto de Previsión Social):
- Coverage: Formal employees and their families (funded by social security contributions)
- Quality: Basic. Limited resources, long waits, overcrowding
- Not recommended for expats except for very basic needs
Public hospitals (Ministry of Health):
- Free for all. Very basic quality. Limited equipment and specialists
- Acceptable for emergencies. Not for routine or complex care
Private healthcare — best option for expats:
Top private facilities in Asunción:
- Sanatorio Migone: Most well-known private hospital. Good general care. Emergency department
- Hospital Italiano: Well-regarded. General surgery, cardiology
- Sanatorio Americano: Growing. Modern facilities
- Hospital Bautista: Good reputation. Multiple specialties
- Centro Médico La Costa: Maternity and pediatrics
Private costs (out-of-pocket):
- GP consultation: $20-40
- Specialist visit: $30-60
- Blood work panel: $15-30
- MRI: $150-300
- Hospital room: $100-250/night
- Minor surgery: $500-2,000
- C-section delivery: $1,500-3,000
Private insurance: International plans recommended ($100-300/month). Local plans limited
CRITICAL: For serious/complex conditions (cancer treatment, neurosurgery, cardiac procedures) — medical evacuation to Buenos Aires (1-hour flight) or São Paulo is standard practice`,
    gotchas: `Paraguay's healthcare is the weakest point for expats. Private facilities in Asunción are adequate for routine care but limited for complex conditions. No JCI-accredited hospitals. English-speaking doctors are rare — learn medical Spanish. Outside Asunción, healthcare quality drops dramatically. Medical evacuation insurance is ESSENTIAL — serious conditions require treatment in Buenos Aires or São Paulo. Pharmacies are well-stocked but verify medications (quality control less strict than developed countries). Dental care is affordable but quality varies.`,
    pro_tip: `Healthcare strategy for Paraguay: (1) International health insurance with evacuation coverage ($150-300/month — Cigna Global, Aetna International), (2) Use Asunción private hospitals for routine care, (3) Plan for Buenos Aires or São Paulo for anything serious. Sanatorio Migone is the "go-to" for expats. Private care is extremely affordable by global standards — a full check-up with blood work costs $100-200. Stock up on medications during visits to Buenos Aires or bring from home. The savings on cost of living ($800-1,500/month) more than cover international insurance premiums.`,
  },

  {
    topic: 'Medical Evacuation & Regional Healthcare',
    country: 'PY',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Air ambulance services; regional hospital comparisons; evacuation insurance providers',
    content: `Paraguay medical evacuation and regional healthcare access (2026):
Medical evacuation planning (ESSENTIAL for Paraguay residents):
- Primary evacuation destination: Buenos Aires, Argentina (1-hour flight from Asunción)
  - Hospital Alemán, Hospital Italiano, Fundación Favaloro — world-class facilities
  - Spanish-speaking, no language barrier
  - Commercial flights: $150-400 roundtrip (frequent daily flights)
  - Air ambulance: $5,000-15,000 (emergency medical evacuation)
- Secondary: São Paulo, Brazil (1.5-hour flight)
  - Hospital Albert Einstein, Sírio-Libanês — Latin America's best
  - Portuguese language (manageable from Paraguay)
- Ciudad del Este residents: Can access Foz do Iguaçu (Brazil) hospitals in 30 minutes
  - Hospital Costa Cavalcanti, Hospital Ministro Costa Cavalcanti
  - Brazilian private hospitals significantly better than Paraguayan equivalents
Evacuation insurance:
- Cigna Global: $200-500/month. Includes evacuation. Recommended
- Aetna International: $180-450/month. Good evacuation coverage
- GeoBlue: $150-400/month. Strong US network for return trips
- Local plans: Limited evacuation coverage — supplement with international plan
Cost comparison: GP visit in Paraguay $20-40 vs Buenos Aires $40-80 vs São Paulo $50-100. Surgery: Paraguay $500-2,000 vs Buenos Aires $2,000-8,000 vs São Paulo $3,000-12,000
Dental tourism: Paraguay offers very cheap dental work ($10-30 per filling, $300-600 for crown) but quality varies. Buenos Aires dental is better quality at still-affordable prices`,
    gotchas: `Medical evacuation is NOT optional in Paraguay — it's essential planning. Serious conditions (cancer, complex cardiac, neurosurgery, high-risk pregnancy) should be treated in Buenos Aires or São Paulo. The 1-hour flight to Buenos Aires is Paraguay's healthcare safety net. Air ambulance costs ($5,000-15,000) make evacuation insurance critical — a single emergency without insurance can cost more than years of premiums. Ciudad del Este residents have the advantage of Brazilian healthcare access across the bridge.`,
    pro_tip: `Budget $200-300/month for international health insurance with evacuation — this is non-negotiable for Paraguay. The savings on cost of living ($1,000-2,000/month vs Buenos Aires) more than cover this premium. Strategy: use Asunción private hospitals for routine care (cheap and adequate), plan Buenos Aires trips for annual check-ups and specialist consultations, and have evacuation coverage for emergencies. Keep a "medical fund" of $2,000-3,000 accessible for emergency travel. The Ciudad del Este→Foz do Iguaçu bridge gives border residents access to significantly better Brazilian healthcare.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living — Lowest in South America',
    country: 'PY',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; ExpatSettle; Benoit Properties 2026 guide; March 2026 rates',
    content: `Paraguay cost of living (2026, all USD at PYG 7,700/USD):
Asunción (comfortable couple):
- Rent: $300-600/month (2BR in good neighborhood). $600-1,000 (premium Villa Morra)
- Groceries: $150-250/month (local produce very cheap, imported goods more)
- Dining out: $100-200/month (local restaurants $5-10/meal, upscale $15-30)
- Transportation: $50-100/month (bus $0.35, Uber/Bolt $2-5)
- Utilities: $50-100/month (electricity, water, gas)
- Internet: $20-35/month (fiber 50-100 Mbps in Asunción)
- Mobile: $10-20/month
- Healthcare: $100-300/month (international insurance)
- TOTAL: $800-1,500/month (budget to comfortable)
- TOTAL premium: $1,500-2,500 (Villa Morra lifestyle with dining out)
Encarnación: 20-30% cheaper than Asunción
Ciudad del Este: Similar to Asunción center
Individual costs:
- Restaurant meal: $5-10 (local). $15-30 (upscale)
- Beer: $1-2 (local). $3-5 (craft/imported)
- Coffee: $1-2
- Domestic help: $300-450/month (full-time). $8-12/day
- Gym: $20-40/month
- Haircut: $3-8
- Gasoline: $1.10-1.30/liter (~$4.50/gallon)
Paraguay minimum wage (2026): PYG 2,798,309/month (~$363)`,
    gotchas: `Paraguay IS genuinely cheap — but you get what you pay for. Infrastructure, services, and amenities are developing-world level in many areas. Imported goods (electronics, specialty foods, international brands) are expensive relative to local costs. Quality restaurants and nightlife are limited compared to Buenos Aires or São Paulo. Air conditioning costs add to electricity bills in summer (40°C+). Car ownership is useful but roads outside Asunción are often unpaved.`,
    pro_tip: `Paraguay is the CHEAPEST option in South America for expats — $1,000-1,500/month buys a comfortable life in Asunción. Embrace local: Paraguayan beef, fruits, vegetables, and yerba mate are excellent and dirt cheap. Domestic help at $300-450/month full-time is a lifestyle upgrade. The savings vs. other LATAM destinations are dramatic: Uruguay $2,500-3,500, Brazil $2,000-4,000, Argentina $1,800-3,500 vs Paraguay $800-1,500. The math is simple: if you earn $3,000/month remotely with 0% tax and spend $1,200, you save $1,800/month. That's $21,600/year in savings — hard to beat anywhere.`,
  },
  {
    topic: 'Climate, Infrastructure & Daily Life',
    country: 'PY',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'DINAC (meteorological); infrastructure reports; expat experience 2025-2026',
    content: `Paraguay climate and infrastructure:
Climate:
- Subtropical. HOT summers, mild winters
- Summer (Dec-Feb): 30-42°C (86-108°F). Extreme heat waves can exceed 45°C. Humid. AC essential
- Winter (Jun-Aug): 10-22°C (50-72°F). Mild but can drop to 5°C at night
- Spring/Autumn: Pleasant 18-28°C. Best seasons
- Rainfall: October-March (wet season). Afternoon thunderstorms common
Infrastructure:
- Roads: Major highways improving. Many secondary roads unpaved. Asunción traffic growing
- Public transport: Buses in Asunción (basic, crowded, $0.35). No metro/subway
- Airport: Silvio Pettirossi International (ASU). Limited international connections — usually connect through São Paulo, Buenos Aires, or Lima
- Internet: Fiber available in Asunción (50-100 Mbps, $20-35/month). 4G mobile decent in cities. Rural: limited
- Electricity: Generally reliable in Asunción. Outages in storms. Paraguay produces massive hydroelectric power (Itaipú, Yacyretá)
- Water: Tap water generally safe in Asunción. Filtered/bottled recommended elsewhere
Language: Spanish + Guaraní (both official). Most people speak both. English: very limited
Safety: Generally safe for LATAM. Asunción: moderate petty crime (phone theft, bag snatching). Violent crime lower than Brazil/Colombia. Ciudad del Este: higher risk near border
Culture: Guaraní indigenous culture blended with Spanish. Family-oriented. Religious (Catholic majority). Terere (cold mate) is the national drink. Slower pace of life`,
    gotchas: `The summer heat is NO JOKE — 40-45°C with humidity is brutal. AC is mandatory December-March. Power costs spike in summer. International connectivity is limited — few direct flights to US/Europe. Language barrier is real — very few people speak English, and Guaraní (not just Spanish) is spoken widely. Infrastructure outside Asunción is developing-world level — unpaved roads, limited internet, basic services. Bureaucracy moves slowly. Cultural pace is very relaxed — "Paraguayan time" is even more relaxed than Argentine time.`,
    pro_tip: `Paraguay is NOT a lifestyle destination — it's a tax and residency optimization play. Be honest about this. If you want cultural richness, nightlife, beaches, or world-class dining: look elsewhere. If you want: the fastest residency, lowest taxes, cheapest living costs, and a solid Plan B: Paraguay is unmatched. The key is managing expectations. Many expats use Paraguay as their legal/tax base while spending significant time in Buenos Aires (1hr flight), São Paulo, or other regional cities. The terere culture (cold yerba mate) is genuinely enjoyable — embrace it, especially in summer heat.`,
  },
  {
    topic: 'Gotchas, Limitations & Who Paraguay Is For',
    country: 'PY',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Expat community consensus; immigration advisories; practical guides 2025-2026',
    content: `Paraguay honest assessment — who it's for and who it's not:
Paraguay IS for:
- Tax optimizers: 0% foreign income + 8-10% local = lowest in Americas
- Plan B seekers: Fastest permanent residency globally (2-4 weeks)
- Budget-conscious expats: $800-1,500/month comfortable living
- Digital nomads: 0% tax on remote income + cheap living = maximum savings
- Citizenship collectors: 3-year path to passport with EU/Schengen access
- Agricultural investors: Cheap land, growing sector, strong returns
- Mercosur access: Gateway to work/travel across South America
Paraguay is NOT for:
- Lifestyle seekers: Limited nightlife, dining, culture vs. Buenos Aires/São Paulo/Lisbon
- Beach lovers: Landlocked country. Nearest beaches: Brazil (12+ hours) or Uruguay
- Quality healthcare demanders: Serious conditions require evacuation to Argentina/Brazil
- English-only speakers: Very limited English. Spanish + Guaraní environment
- Cold-averse people: Winter is mild but summer heat is extreme
- Infrastructure-dependent: Developing infrastructure outside Asunción
Practical limitations:
- Flight connections: Limited international routes. Buenos Aires or São Paulo as hubs
- International schools: Very few. Quality uncertain. Consider homeschooling or online
- Cultural activities: Limited compared to larger capitals. Improving but slowly
- Banking: Basic compared to regional peers. International transfers difficult
- Imported goods: Expensive. Limited selection
Bottom line: Paraguay is the world's best tax/residency optimization tool. It's not where most people want to spend 365 days a year — and it doesn't need to be. Use it strategically.`,
    gotchas: `Don't move to Paraguay expecting Buenos Aires or Lisbon lifestyle — you'll be disappointed. The expat community is small and focused on tax/business optimization (not retiree/lifestyle expats). Social life requires Spanish + patience. The gap between "nice areas" and "everything else" in Asunción is stark. Some immigration firms oversell Paraguay as paradise — it's a strategic tool, not a dream destination. Infrastructure improvements are happening but slowly.`,
    pro_tip: `The optimal Paraguay strategy: (1) Obtain permanent residency (2-4 weeks, $3,000-5,000 total), (2) Set up tax residency and banking, (3) Use Paraguay as your legal/tax base, (4) Split time between Paraguay (120+ days for tax residency) and preferred lifestyle destinations (Buenos Aires, Florianópolis, Medellín), (5) Return every 1-3 years minimum to maintain immigration residency. This gives you: 0% foreign income tax, cheap cost base, Mercosur mobility, path to second passport, and freedom to live where you actually want most of the year. Paraguay is the means, not necessarily the end.`,
  },
];
