import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const COLOMBIA_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Colombian Income Tax (Impuesto de Renta) & Residency',
    country: 'CO',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'DIAN (Dirección de Impuestos y Aduanas Nacionales); Estatuto Tributario; UVT Resolution 2025',
    content: `Colombia income tax 2026 — progressive rates for residents (in UVT, 1 UVT = COP 52,374 for 2026):
- 0–1,090 UVT (up to ~COP 57.1M / ~$13,600 USD): 0%
- 1,090–1,700 UVT (~COP 57.1M–89M / $13,600–$21,200): 19%
- 1,700–4,100 UVT (~COP 89M–214.7M / $21,200–$51,200): 28%
- 4,100–8,670 UVT (~COP 214.7M–454M / $51,200–$108,200): 33%
- 8,670–18,970 UVT (~COP 454M–993.5M / $108,200–$237,000): 35%
- 18,970–31,000 UVT (~COP 993.5M–1.62B / $237,000–$387,500): 37%
- Over 31,000 UVT (above ~COP 1.62B / $387,500): 39%
Note: 2026 Financing Law proposed raising marginal rates by 2 percentage points for income above 4,100 UVT — check DIAN for final enacted rates
Tax residency trigger: 183+ days in Colombia within any 365-day rolling period (not calendar year)
Non-residents: Flat 35% on Colombian-source income only
Capital gains: 15% flat rate (sale of assets held 2+ years)
VAT: 19% standard rate. 5% reduced on certain goods. 0% on basic food, health, education
Filing deadline: August–October (varies by last digit of NIT/cédula)
SMMLV 2026: COP 1,750,905/month (~$420 USD). Transport allowance: COP 249,095. Total: COP 2,000,000`,
    gotchas: `The 183-day rule uses a ROLLING 365-day window — not a calendar year. This means you can trigger residency by spending 92 days in Q4 of one year and 91 days in Q1 of the next. Many expats miscalculate this. The 2026 Financing Law (emergency measures, Decree 1474) significantly changed wealth tax thresholds — confirm all rates with DIAN's latest resolution. Colombia taxes on a worldwide income basis for residents, but there's a critical 5-year exemption (see territorial tax entry).`,
    pro_tip: `Structure your initial Colombia stay carefully around the 183-day rule if you want to delay tax residency. Many expats do 4 months in Colombia, then travel the region (Ecuador, Panama, Brazil) before returning. This keeps them under 183 days while still enjoying most of the year in LATAM. For reporting: DIAN uses the Colombian tax calendar where your filing month depends on your NIT number's last two digits.`,
  },
  {
    topic: 'Territorial Tax System (First 5 Years)',
    country: 'CO',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Estatuto Tributario Art. 25; DIAN guidance on foreign income for new residents',
    content: `Colombia's territorial tax benefit for new residents:
- If you were NOT a Colombian tax resident for the 5 years prior to becoming resident, only Colombian-source income is taxed during your first 5 years of residency
- Foreign-source income (foreign employment, foreign rental income, foreign dividends, foreign capital gains) is EXEMPT for those initial 5 years
- After 5 years: worldwide income becomes taxable at standard progressive rates
- This effectively creates a 5-year territorial tax system for new expats
- Colombian-source income during those 5 years IS still taxed at regular progressive rates
- Qualifying: Must prove 5 consecutive years of non-residency before establishing Colombian tax residence
- Documentation: Tax returns or certificates of tax residency from your prior country for 5 years`,
    gotchas: `This benefit is frequently misunderstood. It does NOT mean zero tax for 5 years — only foreign-source income is exempt. If you work for a Colombian company, earn Colombian rental income, or have Colombian-source business income, that's fully taxable from day one. The 5-year lookback is strict — if you were briefly Colombian tax resident at any point in the prior 5 years (e.g., 184 days in 2021), the benefit may not apply. Consult a Colombian tax advisor before relying on this.`,
    pro_tip: `This is one of LATAM's best tax benefits for remote workers and investors. If you work 100% remotely for a foreign company and your income is classified as foreign-source, you could pay 0% Colombian income tax for 5 years while living in Medellín. Combine this with Digital Nomad Visa status for the optimal setup. Keep meticulous records of your income sources — DIAN may request proof that income is genuinely foreign-sourced.`,
  },
  {
    topic: 'Wealth Tax (Impuesto al Patrimonio) — 2026 Reform',
    country: 'CO',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'KPMG Colombia Flash Jan 2026; Decree 1474/2025; Estatuto Tributario',
    content: `Colombia wealth tax 2026 — MAJOR CHANGES via Financing Law:
Previous threshold (2022-2025): 72,000 UVT (~COP 3.59B / ~$850K USD)
NEW threshold (2026+): 40,000 UVT (~COP 2.09B / ~$500K USD) — significantly lower
Progressive rates on net assets (2026):
- 0–40,000 UVT (up to ~$500K): 0%
- 40,000–70,000 UVT (~$500K–$875K): 0.5%
- 70,000–120,000 UVT (~$875K–$1.5M): 1%
- 120,000–240,000 UVT (~$1.5M–$3M): 2%
- 240,000–2,000,000 UVT (~$3M–$25M): 3%
- Over 2,000,000 UVT (above ~$25M): 5%
Assessed on: Net worldwide assets as of January 1 of each tax year (for residents)
Non-residents: Only Colombian-located assets count
Includes: Property, investments, bank accounts, crypto, vehicles, art — minus debts
Annual obligation: Filed with income tax return`,
    gotchas: `The 2026 threshold drop from 72,000 to 40,000 UVT is a 44% decrease — many expats who were previously exempt now owe wealth tax. If you own a $300K apartment in Medellín plus $250K in global investments, you're likely above the $500K threshold. Colombian property is valued at cadastral value (avalúo catastral), which is typically 30–60% below market value — this helps reduce your wealth tax base. The COP/USD exchange rate fluctuations can push you above or below the threshold year to year.`,
    pro_tip: `Colombian property's cadastral valuation is your friend — a $300K market-value apartment might have an avalúo catastral of $120K–180K. This significantly reduces your wealth tax exposure. However, DIAN is gradually updating cadastral values to be closer to market. For the 5-year territorial period, only Colombian assets count for wealth tax — foreign assets are excluded during those first 5 years. Time your move strategically.`,
  },
  {
    topic: 'Financial Transaction Tax (GMF) & Crypto',
    country: 'CO',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'DIAN; Estatuto Tributario Art. 871; Ley 2277/2022',
    content: `Financial Transaction Tax (GMF — Gravamen a los Movimientos Financieros):
- Rate: 0.4% (4 per thousand) on financial transactions
- Applies to: Bank transfers, withdrawals, check payments, credit card payments from savings accounts
- Exemptions: One designated savings account per person exempt on first COP 12.4M/month (~$3,000 USD) in withdrawals. Must request exemption from your bank (Cuenta AFC or designated 4x1000 exempt account)
- 50% of GMF paid is deductible against income tax
Crypto taxation:
- Capital gains: Treated as capital gains at 15% (assets held 2+ years) or as ordinary income (progressive rates) for trading gains under 2 years
- No specific crypto legislation yet — DIAN treats crypto as "intangible assets"
- No VAT on crypto transactions
- Wealth tax: Crypto holdings count toward net worth assessment
- Exchanges: Bitso (largest in LATAM, operates in Colombia), Binance (banned P2P in COP but exchange still accessible), Buda.com, local platforms
- DIAN reporting: Must declare crypto holdings in your annual tax return if you're a tax resident`,
    gotchas: `The 4x1000 tax catches every new expat off guard. Every time you move money through the banking system, 0.4% vanishes. On a $50,000 transfer, that's $200 gone. This applies to BOTH sending and receiving — so a round-trip costs 0.8%. Request the 4x1000 exemption account immediately when opening your bank account. Crypto regulation in Colombia is evolving — there's no specific crypto law, but DIAN increasingly monitors exchange activity. Binance's COP P2P ban in 2024 pushed many users to Bitso.`,
    pro_tip: `Minimize banking transactions to reduce GMF exposure. Use your exempt account for all personal withdrawals. For large transfers: Wise or PayPal to Bancolombia (one transaction vs multiple smaller ones). The 50% income tax deduction on GMF helps but doesn't eliminate the cost. For crypto: use Bitso for COP on-ramps — it's regulated, integrated with Colombian banks, and avoids the Binance P2P issues.`,
  },
  {
    topic: 'Property Tax & Rental Income',
    country: 'CO',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Municipal tax codes (Bogotá, Medellín); Estatuto Tributario',
    content: `Property taxes in Colombia:
- Impuesto Predial (annual property tax): 0.3%–3.3% of cadastral value depending on municipality and property type
  * Medellín: Typically 0.4%–1.2% of avalúo catastral
  * Bogotá: 0.4%–1.6% (higher for commercial and luxury residential)
  * Cartagena: 0.3%–1.3%
- Avalúo catastral: Government-assessed value, typically 30–60% below market value
- Impuesto de Industria y Comercio (ICA): If renting property commercially, 0.2%–1.4% of gross revenue
- Rental income tax: Taxed as ordinary income at progressive rates (19–39% for residents)
- Withholding on rent: Tenants must withhold 3.5% on monthly rent payments >27 UVT (~COP 1.41M/$340)
- Capital gains on property sale: 15% on gains if held 2+ years. Ordinary income rates if held <2 years
- Sale withholding: 1% of sale price withheld at notary for tax purposes
- Property purchase costs (buyer): ~1.5%–3% total — registration tax (1%), notary fees (0.3–0.5%), legal fees (0.5–1%)`,
    gotchas: `Property rental income is ALWAYS taxable from day one — the 5-year territorial benefit does NOT apply since the property is in Colombia. If you rent on Airbnb, you owe both income tax on the rental income AND ICA (commercial activity tax) to the municipality. Many expats ignore ICA — municipalities are starting to cross-reference Airbnb listings with tax records. The 3.5% withholding on rent is the tenant's obligation — if your tenant doesn't withhold, YOU are still liable for the tax.`,
    pro_tip: `Colombia's low cadastral valuations make property taxes very reasonable — a $200K market-value apartment might have a $80K catastral value, resulting in ~$320–960/year in predial tax. Pay predial early (January/February) for a 10% discount in most municipalities. For rental income: deduct all expenses (maintenance, HOA, insurance, depreciation at 5%/year) to reduce taxable rental income. Keep receipts for everything.`,
  },

  // === VISA ===
  {
    topic: 'Digital Nomad Visa (Visa V — Nómada Digital)',
    country: 'CO',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Migración Colombia; Cancillería Resolution 5477/2022; SMMLV 2026',
    content: `Colombia Digital Nomad Visa (V-type, Nómada Digital):
- Income requirement: 3x SMMLV = COP 5,252,715/month (~$1,250 USD/month at March 2026 rates)
- Duration: Up to 2 years (some sources cite 3 years — currently issued as 2-year V-type visa, renewable)
- Eligibility: Remote workers employed by or contracting with foreign companies. Must work via digital means/internet. Company must be registered outside Colombia
- Documents: Valid passport (6+ months), proof of employment/contract with foreign company, bank statements showing 3 months of income meeting threshold, health insurance valid in Colombia, clean criminal record, professional degree or 3 years experience
- Application: Online through Cancillería website. Processing: 5–30 business days. Can apply from within Colombia or abroad
- Cost: ~$52 USD (visa study fee) + ~$177 USD (visa issuance) = ~$230 total
- Work restriction: CANNOT work for Colombian companies or clients. Foreign-source income only
- Dependents: Spouse and children can apply for beneficiary visas (V-type) — same application process
- Tax: Digital nomad visa holders who stay 183+ days become tax residents — but benefit from 5-year territorial exemption on foreign income`,
    gotchas: `The income threshold is deceptively low (~$1,250/month) but remember it's 3x minimum wage which increases annually (2026 saw a 23.7% increase). The threshold will continue climbing. Processing times vary wildly — some approvals come in 5 days, others take the full 30. If denied, you can appeal once. The 2-year vs 3-year confusion: the law allows up to 3 years, but Cancillería currently issues 2-year visas in practice. You must NOT earn any Colombian-source income on this visa.`,
    pro_tip: `Colombia's Digital Nomad Visa has the lowest income threshold of any major DN visa globally — $1,250/month vs Spain's $3,400, Portugal's $3,500, etc. Apply from within Colombia after entering visa-free (most Western passports get 90 days). This lets you test the waters before committing. For the application: bank statements should clearly show regular deposits from a foreign employer — annotate transfers if needed. Use a Colombian immigration lawyer ($300–500) to avoid common rejection reasons.`,
  },
  {
    topic: 'Migrant Visa (M-Type) — Investor & Property Owner',
    country: 'CO',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Cancillería Resolution; Migración Colombia; SMMLV-based thresholds 2026',
    content: `Colombia Migrant Visa (M-type) — investment routes:
1. Property Owner Visa (M-10):
- Minimum investment: 350 SMMLV = COP 612,816,750 (~$146,000 USD at March 2026 rates)
- Must own property registered in your name at Oficina de Registro de Instrumentos Públicos
- Duration: Up to 3 years, renewable
- Path to permanent residency (R-type): After 5 consecutive years on M-visa
2. Company Investor Visa (M-6):
- Minimum investment: 100 SMMLV = COP 175,090,500 (~$42,000 USD) in a Colombian company
- Company must be registered with Cámara de Comercio and have active operations
- Must demonstrate the investment creates jobs or benefits the economy
- Duration: Up to 3 years, renewable
3. Retirement/Pension Visa (M-13):
- Income: 3x SMMLV = COP 5,252,715/month (~$1,250 USD/month)
- Must be from a recognized pension source (Social Security, government pension, private pension fund)
- Duration: Up to 3 years, renewable
- Cannot work in Colombia (pension income only)
General M-visa benefits: Work authorization in Colombia, cédula de extranjería, path to R-visa after 5 years`,
    gotchas: `Investment thresholds are tied to SMMLV which increases every year — the 2026 SMMLV jumped 23.7%. The property threshold went from ~$111K in 2025 to ~$146K in 2026. ALWAYS invest ABOVE the minimum because next year's increase could put you below threshold at renewal. The company investor route ($42K) sounds cheap but requires an operating company with real activities — shell companies are rejected. Cédula de extranjería processing after visa approval takes 3–6 months in 2026 — plan accordingly.`,
    pro_tip: `The property investor visa is the most popular path for expats buying in Medellín or Cartagena. Buy above the threshold — a $170K+ apartment gives you buffer against SMMLV increases AND is a solid investment in El Poblado or Laureles. For the retirement visa: Social Security, military pension, or any recognized pension fund qualifies. The $1,250/month threshold is very achievable for most Western retirees. Combine with the 5-year territorial tax exemption for an extremely tax-efficient retirement.`,
  },
  {
    topic: 'Cédula de Extranjería & Essential Admin',
    country: 'CO',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Migración Colombia; Registraduría Nacional',
    content: `Essential documents for living in Colombia:
1. Cédula de Extranjería (CE) — Foreigner ID card:
- Required for: Bank accounts, phone contracts, property purchase, tax filing (NIT), healthcare enrollment, vehicle registration
- Issued by: Migración Colombia after visa approval
- Process: Apply online, attend biometric appointment, wait for processing
- Timeline: 3–6 months processing time in 2026 (major cities). Some satellite offices faster
- Cost: ~COP 310,000 (~$75 USD)
- Temporary CE (contraseña): Issued at biometric appointment — valid as ID while waiting for physical card
2. NIT (Número de Identificación Tributaria):
- Colombia's tax ID number. Applied for at DIAN office with cédula or passport
- Required for: Tax filing, business activities, invoicing
- Process: Walk-in at DIAN office, same-day issuance with CE
3. RUT (Registro Único Tributario):
- Tax registration document tied to your NIT
- Required for opening bank accounts, formal employment, business registration
- Free, issued at DIAN
4. Apostille requirements: Criminal record from home country must be apostilled (Hague Convention). University degrees need apostille for professional visa routes`,
    gotchas: `The cédula de extranjería bottleneck is REAL — 3-6 months is current reality in Bogotá and Medellín. During this time, you technically have a valid visa but no cédula, which means you CANNOT open a bank account (most banks require CE, not just visa). The contraseña (temporary receipt) is accepted by some banks (Davivienda is the most flexible) but not all. Plan your finances — bring enough cash/have Wise access to survive 3-6 months without a Colombian bank account.`,
    pro_tip: `Apply for your cédula appointment the DAY your visa is approved — appointments fill fast. Medellín's Migración office in Centro Administrativo La Alpujarra processes faster than the El Poblado office. While waiting for CE: Davivienda sometimes opens accounts with contraseña + passport. Nequi (digital wallet) works with passport for basic transactions. For NIT: go to a small-town DIAN office (Envigado, Sabaneta) for same-day processing — Medellín's main DIAN office has multi-hour waits.`,
  },

  // === BANKING ===
  {
    topic: 'Banking for Expats',
    country: 'CO',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Superfinanciera Colombia; bank websites; expat community reports',
    content: `Colombian banking for expats (2026):
- Requirement: Cédula de extranjería (CE) for most banks. Some accept contraseña temporarily
- Major banks:
  * Bancolombia: Largest bank (~16M clients). Best app, widest ATM network. Account opening requires CE + proof of income. International transfers available after 6 months (NEW restriction). Monthly fee: ~COP 20,000 ($5)
  * Davivienda: Most foreigner-friendly. Sometimes opens accounts with contraseña + passport. Good for international transfers. App in English. Monthly fee: ~COP 15,000 ($4)
  * Banco de Bogotá: Second largest. Competitive rates. CE required. Monthly fee: ~COP 18,000 ($4)
  * BBVA Colombia: Familiar brand for Europeans. Standard CE requirement
- Digital wallets (no CE needed):
  * Nequi (by Bancolombia): Works with passport. P2P payments, online purchases, ATM withdrawals up to COP 3M/month. FREE
  * Daviplata (by Davivienda): Passport-compatible. Similar to Nequi
- International transfer: Wise (send USD→COP to Bancolombia/Davivienda), Remitly, Western Union
- ATM withdrawal limit: COP 600,000–1,000,000 per transaction (~$140–240)
- ATM fees: COP 5,000–15,000 per withdrawal ($1.20–3.60)
- Credit cards: Difficult to get without 6+ months of banking history and credit footprint (DataCrédito)`,
    gotchas: `The biggest shock: since 2025, some Colombian banks block international transfers for the first 6 months after account opening. This means you can't send money FROM your home country TO your new Bancolombia account for 6 months. Workaround: use Wise to send directly to your Bancolombia account (Wise processes it as a local transfer, bypassing the restriction in most cases). Credit cards require Colombian credit history — start by getting a postpaid phone plan and a savings account to build DataCrédito history.`,
    pro_tip: `Optimal banking stack: Nequi immediately (passport only, free, handles daily payments), then Davivienda once you have contraseña (most flexible with foreigners), then Bancolombia once you have CE (best overall bank). Use Wise for all USD→COP transfers — saves 3–5% vs bank wire fees. The Bancolombia app (Bancolombia a la Mano) is excellent for a traditional bank. For building credit: open a savings account, make regular deposits for 3 months — Bancolombia auto-reports to DataCrédito.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Medellín Neighborhood Guide',
    country: 'CO',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Finca Raíz; Ciencuadras; Metro Cuadrado; local agents; Medellín Advisors',
    content: `Medellín property prices by neighborhood (March 2026, per sqm):
- El Poblado: COP 7–12M/sqm ($1,650–$2,850/sqm). Premium expat area, restaurants, nightlife, international community. Strata 5-6. 2BR (80sqm): $130K–230K
  * Sub-neighborhoods: Provenza (trendiest), Manila (quieter), Astorga (mid-range), Alejandría (luxury)
- Laureles: COP 4.5–6.5M/sqm ($1,050–$1,550/sqm). Best value for quality of life. Local feel with growing international scene. Strata 4-5. 2BR: $85K–125K
- Envigado: COP 4–6M/sqm ($950–$1,400/sqm). Adjacent municipality, quieter, family-friendly. Excellent infrastructure. Strata 3-5. 2BR: $75K–115K
- Sabaneta: COP 3.5–5M/sqm ($830–$1,200/sqm). Growing fast, young vibe, metro extension. 2BR: $65K–95K
- Belén: COP 3–4.5M/sqm ($710–$1,050/sqm). Traditional middle-class, good metro access. 2BR: $55K–85K
- Itagüí: COP 2.5–4M/sqm ($600–$950/sqm). Industrial-turned-residential, very affordable. 2BR: $50K–75K
Rentals (furnished, 2BR): El Poblado $700–1,400/mo. Laureles $450–800/mo. Envigado $400–700/mo
Average Medellín: ~COP 6M/sqm ($1,400/sqm). 10.3% appreciation in 2025
Colombian "estrato" system: Properties rated 1 (lowest) to 6 (highest). Strata 1-3 receive subsidized utilities. Strata 5-6 pay premium. Expat areas are typically strata 4-6`,
    gotchas: `Medellín prices have surged 10%+ annually — "cheap Colombia" is fading fast in desirable neighborhoods. El Poblado is approaching small European city prices. The estrato system directly affects your utility bills: strata 6 pays 2-3x more for electricity, water, and gas than strata 3. An identical apartment in strata 4 vs strata 6 can differ by $100+/month in utilities alone. Furnished rentals for expats often carry a 30-50% premium over unfurnished — consider buying furniture locally (IKEA Colombia, Homecenter).`,
    pro_tip: `Laureles is Medellín's best value play — 35–50% cheaper than El Poblado with equal or better walkability, restaurant scene, and safety. Envigado is the family pick — excellent schools, parks, and lower cost of living. For investment: Sabaneta is appreciating fastest (metro extension, new developments). For the investor visa: buy in El Poblado or Laureles above COP 615M (~$146K) to meet the 350 SMMLV threshold with buffer. Always verify the property has a clear Certificado de Tradición y Libertad.`,
  },
  {
    topic: 'Bogotá Neighborhood Guide',
    country: 'CO',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Finca Raíz; Metro Cuadrado; DANE statistics',
    content: `Bogotá property prices by neighborhood (March 2026, per sqm):
- Usaquén: COP 6–10M/sqm ($1,400–$2,400/sqm). Upscale, restaurants, parks, embassies. Strata 5-6. 2BR: $115K–190K
- Chapinero Alto: COP 5.5–8.5M/sqm ($1,300–$2,000/sqm). Bohemian, LGBTQ+-friendly, universities, nightlife. Strata 4-5. 2BR: $100K–160K
- Rosales/Nogal: COP 8–14M/sqm ($1,900–$3,300/sqm). Most exclusive. Near Parque de la 93. Strata 6. 2BR: $150K–260K
- La Candelaria: COP 3–5M/sqm ($710–$1,200/sqm). Historic center, colonial architecture, cultural heart. Strata 2-3. 2BR: $55K–95K. Safety concerns at night
- Cedritos/Colina: COP 4–6M/sqm ($950–$1,400/sqm). Middle-class residential, good transit. Strata 3-4. 2BR: $75K–115K
- Chía/Cajicá (satellite towns): COP 3–5M/sqm ($710–$1,200/sqm). Growing rapidly, more space, family-oriented. Country club lifestyle. 2BR: $55K–95K
Rentals (furnished, 2BR): Usaquén $600–1,200/mo. Chapinero $500–1,000/mo. Cedritos $350–650/mo
Note: Bogotá at 2,640m (8,660 ft) elevation — altitude sickness common for first 1–2 weeks. Average temp: 13–19°C (55–66°F) year-round. No A/C needed but heating sometimes wanted`,
    gotchas: `Bogotá's altitude is no joke — 2,640m causes headaches, fatigue, and shortness of breath for most newcomers. Give yourself 1-2 weeks to acclimatize before making decisions. Traffic is brutal — the city has no metro (under construction, scheduled for 2028). TransMilenio (BRT system) is crowded but functional. Many expats choose to live near work to avoid 2-hour commutes. La Candelaria is charming by day but safety degrades significantly after dark — don't walk alone at night.`,
    pro_tip: `Chapinero Alto is Bogotá's best expat value — vibrant, walkable, great food scene, and 30–40% cheaper than Rosales. The Zona T and Zona G restaurant districts are nearby. For families: Usaquén or Chía. The coming metro (Line 1, 2028) will dramatically change property values along its route — buy near planned stations for long-term appreciation. Bogotá's cool climate is ideal for those who dislike tropical heat — it's "eternal spring" like Medellín but cooler.`,
  },
  {
    topic: 'Cartagena & Caribbean Coast Property',
    country: 'CO',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Finca Raíz; local agents; tourism authority',
    content: `Cartagena & Caribbean Coast property (March 2026):
- Bocagrande: COP 6–10M/sqm ($1,400–$2,400/sqm). Beachfront high-rises, tourist center, modern. 2BR: $110K–190K
- Getsemaní: COP 5–9M/sqm ($1,200–$2,150/sqm). Bohemian historic quarter, street art, nightlife. Gentrifying fast. Studios/1BR: $60K–120K
- Centro Amurallado (Walled City): COP 7–15M/sqm ($1,650–$3,600/sqm). Colonial mansions, boutique hotels. Premium investment. Restored colonials: $200K–500K+
- Manga: COP 4–7M/sqm ($950–$1,650/sqm). Residential island, local upper class, underrated. 2BR: $75K–130K
- Santa Marta (Rodadero): COP 3–5M/sqm ($710–$1,200/sqm). Beach, Sierra Nevada access, more affordable than Cartagena. 2BR: $55K–95K
Cartagena rental yields: 5–8% for long-term, 8–15% for short-term/Airbnb (high season Dec–Feb, June–Aug)
Climate: HOT. 28–33°C (82–91°F) year-round. High humidity. A/C is essential = higher utility costs
Key warning: Cartagena property is primarily vacation/investment — most full-time expats prefer Medellín or Bogotá for daily life`,
    gotchas: `Cartagena has a two-tier pricing system — "gringo pricing" is real. Sellers quote inflated prices to foreigners. Always hire an independent Colombian real estate lawyer (not the seller's agent) and get an independent appraisal. Airbnb regulation is tightening — some buildings and neighborhoods have banned short-term rentals. Verify the property's POT (Plan de Ordenamiento Territorial) zoning allows tourist rental before buying for Airbnb. The walled city has strict renovation regulations — budget 2-3x for colonial property restoration.`,
    pro_tip: `Manga is Cartagena's hidden gem — 30% cheaper than Bocagrande with character, safety, and easy Walled City access. For investment: Getsemaní was the street art/backpacker area that's now going upscale — buy now before it reaches Walled City prices. Santa Marta is the value alternative to Cartagena — similar beaches, Sierra Nevada nearby, Tayrona National Park, at 40-60% of Cartagena prices. For year-round living, Medellín beats Cartagena — the heat becomes exhausting after the vacation glow fades.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Healthcare System — EPS, Prepagada & Private',
    country: 'CO',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Ministerio de Salud; Superintendencia Nacional de Salud; insurer websites',
    content: `Colombian healthcare system (3 tiers):
1. EPS (Entidades Promotoras de Salud) — Mandatory public system:
- Enrollment: Mandatory for all legal residents (visa holders). Contributions: 12.5% of income (employee: 4%, employer: 8.5%). Self-employed: full 12.5% on declared income. Minimum contribution base: 1 SMMLV
- Covers: GP, specialists, hospitalization, surgery, maternity, prescriptions, lab work
- Top EPS providers: Sura (best reputation), Nueva EPS (largest), Sanitas, Compensar, Famisanar
- Wait times: GP 2–15 days, specialists 2–8 weeks, surgery 1–6 months
- Quality: Varies dramatically by EPS. Sura and Compensar are excellent. Others can be frustrating
- Cost on SMMLV: ~COP 219,000/month ($52/month) for self-employed declaring minimum income
2. Prepagada (Prepaid private complement):
- Requires active EPS enrollment first (cannot be standalone)
- Adds: Private hospital access, shorter waits, English-speaking doctors, private rooms
- Providers: Colsanitas (largest), Sura Prepagada, Médisanitas, Colmédica
- Cost: COP 200,000–600,000/month ($48–$143) depending on age and plan. Under 40: ~$60–80/month
3. Póliza de Salud (Private health insurance):
- Standalone private insurance. Does NOT require EPS enrollment
- Useful for: Digital nomad visa holders, those wanting to opt out of EPS
- Providers: AXA Colpatria, Zurich, BUPA (international), Cigna
- Cost: $100–300/month depending on coverage and age`,
    gotchas: `EPS is MANDATORY — if you have a visa and cédula, you must enroll. Non-enrollment can result in fines and complications at visa renewal. Prepagada requires active EPS — you can't skip EPS and just buy prepagada. The EPS you choose matters enormously — Sura provides a fundamentally different experience than, say, Sanitas or Nueva EPS. Prescription drugs on EPS are covered but limited to the PBS (Plan Básico de Salud) formulary — some newer/imported drugs require tutela (legal petition) to get covered.`,
    pro_tip: `The optimal combo: Sura EPS (base, ~$52/month minimum) + Colsanitas Prepagada (~$60–80/month for under 40). Total: ~$110–130/month for comprehensive coverage with access to Colombia's best private hospitals (Fundación Santa Fe, Clínica del Country, Clínica Las Américas). Colombia ranks 22nd globally in healthcare quality — medical tourism is a $1B+ industry. Dental is included in EPS/prepagada and incredibly affordable. A dental crown costs $150–300, root canal $80–150, cleaning $20–40.`,
  },

  // === HEALTHCARE (additional) ===
  {
    topic: 'Medical Tourism & Dental Care',
    country: 'CO',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'ProColombia medical tourism reports; hospital websites; patient reviews',
    content: `Colombia medical tourism (2026):
- Top hospitals: Fundación Santa Fe de Bogotá (JCI accredited), Fundación Cardiovascular de Colombia (Bucaramanga, world-class cardiac), Clínica del Country (Bogotá), Clínica Las Américas (Medellín), Hospital Pablo Tobón Uribe (Medellín)
- JCI accredited hospitals: 10+ nationwide — among highest in Latin America
- Popular procedures: Cosmetic surgery (Medellín = "surgery capital of the world"), dental work, bariatric surgery, orthopedic, cardiac, eye surgery (LASIK)
- Price comparison vs US:
  * Dental crown: $150–300 (US: $800–1,500)
  * Dental implant: $500–900 (US: $3,000–5,000)
  * Root canal: $80–150 (US: $700–1,200)
  * LASIK: $800–1,500 (US: $4,000–6,000)
  * Knee replacement: $5,000–12,000 (US: $35,000–60,000)
  * Cosmetic (rhinoplasty): $2,500–5,000 (US: $8,000–15,000)
- Emergency: Call 123 (national emergency number). Ambulance response: 10–30 minutes in cities
- Pharmacies: Drogas La Rebaja, Farmatodo, Cruz Verde. Many medications available OTC that require prescription elsewhere (antibiotics, some pain meds)`,
    gotchas: `Medellín's cosmetic surgery industry has a dark side — unlicensed clinics and "recovery houses" (casas de recuperación) with minimal medical oversight. Complications and deaths occur annually. ONLY use JCI-accredited hospitals or clinics recommended by your EPS/prepagada. For dental: Colombia is excellent but vet your dentist through reviews on Google Maps (Colombian reviews are honest) and ask for before/after photos. Emergency rooms (urgencias) in public hospitals can be chaotic and overcrowded.`,
    pro_tip: `Colombia's healthcare value is extraordinary — EPS + prepagada costs $110–130/month and covers almost everything including dental and vision. For planned procedures: Medellín's Clínica Las Américas and Bogotá's Fundación Santa Fe are world-class at 60–80% less than US prices. Many Colombian dentists trained in the US — ask for credentials. The drugstore culture is convenient — pharmacists can recommend and sell many common medications directly, saving a doctor visit for minor issues.`,
  },

  // === BANKING (additional) ===
  {
    topic: 'Money Transfer & Currency',
    country: 'CO',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Banco de la República; Wise/Remitly/WU rate comparisons',
    content: `Transferring money to/from Colombia:
- COP exchange rate (March 2026): ~COP 4,200 per USD. Range last 12 months: COP 3,900–4,500
- Best USD→COP transfer options:
  * Wise: Best rates (mid-market + 0.5–1% fee). COP delivery to Bancolombia/Davivienda in 1–2 business days. Up to $1M/transfer
  * Remitly: Competitive rates for smaller amounts (<$2,500). Faster delivery options
  * Western Union: Available everywhere but worst rates (2–5% spread). Useful for cash pickup
  * Bank wire (SWIFT): Slowest (3–5 days), most expensive ($25–50 fees + 1–3% spread). Only for large amounts
- COP→USD (sending money OUT of Colombia):
  * Much harder. Colombian banks charge high fees and poor rates for outbound transfers
  * Wise: Supports COP→USD but requires Colombian bank account
  * Crypto bridge: Some expats convert COP→USDT→USD as workaround (tax implications)
  * DIAN reporting: Transfers >USD 10,000 require declaration
- Cash: Colombia is still 40–50% cash economy. ATMs dispense COP. USD accepted nowhere (except airport exchange)
- Nequi/Daviplata: Essential for daily payments — taxis, small shops, street vendors increasingly accept them`,
    gotchas: `The COP is volatile — it swung 25% in 2022 and 15% in 2024. If you earn in USD and spend in COP, this works in your favor when COP weakens but hurts when it strengthens. Don't convert large sums at once — dollar-cost average your transfers. Colombia has strict anti-money-laundering controls: large/frequent transfers trigger Banco de la República reporting. The 4x1000 tax (0.4%) applies to every bank transaction including receiving wire transfers. Keep your exempt account designated properly.`,
    pro_tip: `Set up Wise with your Bancolombia account for the best rates. Transfer monthly (dollar-cost averaging) rather than large lump sums. Keep 2–3 months of expenses in COP and the rest in USD — this naturally hedges currency risk. For the best exchange rates: transfer on Tuesdays/Wednesdays (COP tends to be weakest mid-week due to oil payment flows). Never exchange at airport or hotel — rates are 5–10% worse than Wise.`,
  },

  // === VISA (additional) ===
  {
    topic: 'Visa-Free Entry & Border Runs',
    country: 'CO',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Migración Colombia; Cancillería regulations',
    content: `Visa-free entry to Colombia:
- Most Western passports (US, Canada, EU, UK, Australia): 90 days visa-free upon entry
- Extension: Can extend for additional 90 days at any Migración Colombia office (COP 130,000 / ~$31). Must apply before initial 90 days expire
- Maximum stay: 180 days per calendar year on tourist status (90 + 90 extension)
- Border run: After 180 days, you must leave Colombia. Common routes: Panama (Panamá City or David), Ecuador (Quito or Otavalo), Peru (Lima)
- Re-entry after 180 days: No mandatory waiting period — you can technically leave for 1 day and return, but Migración officers may question frequent border runs
- Overstay penalty: COP 850,000–2,500,000 (~$200–$595) fine + potential visa denial
- Salvoconducto: If you overstay, apply for a "safe conduct" pass at Migración to leave legally without arrest/detention
- PIP check point: At departure, Migración checks your stay duration. Fines collected at airport/border`,
    gotchas: `The 180-day annual limit is strictly enforced at departure — Migración Colombia's system automatically calculates your total days. Budget travelers doing "perpetual tourism" (180 days, leave 1 day, return) are increasingly questioned and sometimes denied entry. Migración officers at Bogotá airport are stricter than land borders. If you plan to stay long-term, get a proper visa — the Digital Nomad Visa costs only ~$230 and gives you 2 years of legal status plus tax benefits.`,
    pro_tip: `Use the initial 90-day visa-free period to test cities before committing. Common itinerary: 30 days Medellín, 20 days Bogotá, 15 days Cartagena/coast, 25 days back to your favorite. Apply for the 90-day extension at Medellín's Migración office (Centro Administrativo La Alpujarra) — less crowded than Bogotá. If you decide to stay: apply for Digital Nomad Visa while still in Colombia on tourist status. You don't need to leave the country to apply.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living by City',
    country: 'CO',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; DANE; Expatistan; direct research; March 2026 exchange rate ~COP 4,200/USD',
    content: `Monthly cost of living for a single expat (comfortable) and couple, in USD:
Medellín — Single: $1,200–$1,800 | Couple: $1,500–$2,200
- Rent 1BR furnished (El Poblado): $500–$900. Laureles: $350–$550
- Groceries: $150–$250 (Éxito, Carulla, D1)
- Dining out: $150–$300 (almuerzo ejecutivo $3–5, upscale dinner $15–25)
- Transport: $25–$50 (metro COP 3,250/ride. Taxi/DiDi avg COP 10,000–25,000)
- Utilities: $60–$100 (electricity, water, gas, internet. Higher strata = higher cost)
- Internet: $20–$30 (fiber 100–300Mbps from Claro, ETB, Tigo)
- Health: $50–$130 (EPS + prepagada)
Bogotá — Single: $1,400–$2,200 | Couple: $1,800–$2,800
- 15–25% more expensive than Medellín, especially rent and transport
Cartagena — Single: $1,100–$1,700 | Couple: $1,400–$2,000
- Rent similar to Medellín. Food cheaper. Utilities higher (A/C essential)
Santa Marta — Single: $900–$1,400 | Couple: $1,200–$1,800
- Most affordable coastal city. Great for budget-conscious expats
Colombian minimum wage: COP 1,750,905/month (~$420 USD). Average professional salary: ~COP 3–5M ($700–$1,200)
Note: These budgets assume a comfortable Western lifestyle — not luxury, not backpacker`,
    gotchas: `Colombia's cost of living has risen 20–30% since 2021 due to inflation (13.1% in 2023) and peso devaluation recovery. "I can live like a king on $1,000/month" is outdated advice — realistic comfortable budget for Medellín is $1,500+/month. Strata directly impacts utility costs — budget $40–60/month more for strata 5-6 vs strata 3 for the same usage. The COP/USD exchange rate fluctuates 10–15% per year — your real cost of living can change significantly without any behavior change.`,
    pro_tip: `The almuerzo ejecutivo (set lunch) is Colombia's best deal — a full meal (soup, main, juice, dessert) for COP 12,000–22,000 ($3–5). Eat almuerzo for lunch, cook simple dinners, and your food budget drops to $200/month. D1 and Ara discount supermarkets are 20–40% cheaper than Éxito/Carulla for basics. For long-term stays: unfurnished apartments are 30–50% cheaper — buy furniture at Homecenter or IKEA Medellín. The COP is still favorable for USD/EUR earners — $2,000/month buys a very comfortable life.`,
  },
  {
    topic: 'Internet, Coworking & Remote Work Infrastructure',
    country: 'CO',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Speedtest.net; ISP websites; coworking reviews',
    content: `Internet and remote work in Colombia (2026):
- Home fiber ISPs:
  * Claro (largest): 100–500Mbps from COP 60,000–120,000/month ($14–28)
  * ETB (Bogotá-focused): 200–600Mbps from COP 50,000–100,000/month ($12–24)
  * Tigo/UNE (Medellín-based): 100–600Mbps from COP 55,000–110,000/month ($13–26)
  * Somos Internet (Medellín startup): 200–1000Mbps from COP 65,000–130,000/month — best speeds, growing coverage
- Average speeds: Bogotá 80Mbps, Medellín 75Mbps, Cartagena 50Mbps (improving). Top-tier fiber: 300–600Mbps in urban centers
- Mobile: Claro, Movistar, Tigo. Prepaid SIM: COP 5,000–10,000 for 5–15GB. Postpaid: COP 45,000–90,000 for unlimited data
- 4G: Excellent coverage in cities. 5G: Rolling out in Bogotá and Medellín (limited)
- Coworking (Medellín):
  * Selina (El Poblado): $150–250/month. Social scene, rooftop
  * Tinkko (various locations): COP 400,000–600,000/month ($95–143). Professional
  * WeWork (El Poblado): COP 750,000+/month ($180+). Premium
  * Atomhouse (Laureles): COP 350,000/month ($83). Best community, events
  * Day passes widely available: COP 30,000–60,000/day ($7–14)
- Coworking (Bogotá): WeWork, Spacesuite, HubBOG. Prices similar to Medellín
- Time zone: COT (UTC-5). Same as US Eastern Standard. Perfect overlap with US business hours`,
    gotchas: `Power outages happen — 2-5 per year in Medellín, more frequent in Cartagena and smaller cities. Get a UPS (uninterruptible power supply, COP 200,000–400,000) for your router and laptop. Internet speeds are advertised in Mbps but real-world performance in buildings can be 50–70% of advertised. Ask neighbors about their actual speeds before signing a 12-month contract. Cartagena's internet infrastructure is notably worse than Medellín or Bogotá — serious remote workers should consider this.`,
    pro_tip: `Colombia's UTC-5 timezone is the #1 selling point for remote workers with US clients — zero time difference from EST, 2 hours from PST. No late-night calls, no early mornings. Medellín's Laureles has the best coworking density — 5+ spaces within walking distance. Atomhouse is the digital nomad community hub. For home internet: Somos Internet (Medellín) offers the best speeds at competitive prices — they're the disruptor brand. Always get a backup mobile hotspot (Claro 4G) for meeting days.`,
  },
  {
    topic: 'Safety, Culture & Expat Integration',
    country: 'CO',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Policía Nacional statistics; InSight Crime; expat community surveys',
    content: `Safety and cultural context:
SAFETY: Colombia has improved dramatically but varies enormously by area
- Medellín: Transformed from "most dangerous city" (1991) to major expat/tourist destination. Homicide rate dropped 95% since peak. Safe in expat areas (El Poblado, Laureles, Envigado). Petty theft exists — phone snatching most common crime against foreigners
- Bogotá: Safe in northern neighborhoods (Usaquén, Chapinero, Rosales). South and parts of center are higher risk. TransMilenio has pickpocketing issues
- Cartagena: Tourist areas (Walled City, Bocagrande) well-policed. Beach vendors can be aggressive. Common scams: taxi overcharging, rigged ATMs
- General rules: Don't display expensive phones/watches. Don't use phone on street. Use DiDi/InDrive instead of hailing taxis. Don't walk alone late at night in unfamiliar areas
CULTURE:
- Colombians are among the warmest, most social people globally
- Tinto (coffee) culture: Offered everywhere, always accept
- Meal times: Lunch 12–2 PM (main meal), dinner 7–9 PM
- Language: Spanish essential. English spoken in upscale Medellín/Bogotá expat areas only. Very limited outside cities
- Bureaucracy: Everything takes longer than expected. "Mañana" culture is real — patience required
- Expat communities: Large in Medellín (10,000+ estimated), growing in Bogotá, established in Cartagena`,
    gotchas: `Colombia's biggest safety risk for expats is "papaya" — giving someone an easy opportunity to rob you. Don't use your phone on the street (especially in Bogotá), don't carry large amounts of cash, don't wear flashy jewelry, don't leave bags unattended. Scopolamine (devil's breath) drugging exists — never accept drinks from strangers. The risk is very low in daily life but exists in nightlife settings. Dating app scams targeting foreigners are common in Medellín and Cartagena.`,
    pro_tip: `Learn Spanish to conversational level within your first 6 months — it transforms your experience. Medellín "paisa" Spanish is considered clearest in the Spanish-speaking world — ideal for learners. Take classes at Centro Catalina, EAFIT, or Colombian Immersion ($150–300/month for group classes). Join the Medellín Expats or Colombia Expat Junkies Facebook groups for real-time advice. The Colombian government actively courts remote workers — Medellín has official digital nomad support programs and events through organizations like Ruta N.`,
  },
  {
    topic: 'Climate & Geographic Diversity',
    country: 'CO',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'IDEAM (Colombian Meteorological Institute); tourism authority',
    content: `Colombia's climate varies by altitude, not season:
- Medellín (1,495m / 4,905 ft): "City of Eternal Spring." 18–28°C (64–82°F) year-round. No A/C or heating needed. Rainy seasons: March–May, Sept–Nov (afternoon showers, rarely all day). Best climate for daily living
- Bogotá (2,640m / 8,661 ft): Cool highland. 8–19°C (46–66°F). Can feel cold, especially at night. Bring layers. Altitude sickness for first 1–2 weeks common: headache, fatigue, shortness of breath. Drink lots of water, avoid alcohol first days
- Cartagena (sea level): Tropical hot. 27–33°C (81–91°F) year-round. High humidity. A/C essential ($50–100+/month extra in utilities). Hurricane-free (south of hurricane belt)
- Cali (1,018m / 3,340 ft): Warm. 19–30°C (66–86°F). Salsa capital. Less developed expat infrastructure than Medellín
- Santa Marta (sea level): Similar to Cartagena but less humid. Gateway to Tayrona Park and Lost City trek
- Coffee Region (Pereira/Armenia/Manizales, ~1,400m): Perfect climate, stunning landscapes, very affordable. Emerging expat destination
Geographic diversity: Only country with both Pacific and Caribbean coasts. Amazon jungle, Andes mountains, Caribbean beaches, coffee highlands — all within 1-hour flights`,
    gotchas: `Bogotá's altitude causes real problems: headaches, insomnia, breathlessness for 5–14 days upon arrival. Don't sign a lease or make major decisions during acclimatization. Some people never fully adjust — consider doing a 2-week trial before committing. Medellín's "eternal spring" marketing is mostly accurate but: rainy season means 2–4 hours of rain most days, and the valley location means air quality can deteriorate (PM2.5 spikes October–March). Cartagena's heat is exhausting for daily life — most long-term expats eventually move to Medellín's climate.`,
    pro_tip: `Medellín's climate is genuinely one of the best in the world for humans — no A/C, no heating, comfortable 365 days. If climate matters to you, Medellín wins. For Bogotá acclimatization: coca tea (available at any tienda de naturales) helps with altitude symptoms — it's legal and traditional. The Coffee Region (especially Pereira) is Colombia's next frontier for expats — Medellín quality of life at 40% of the cost, surrounded by coffee farms and hot springs. Direct flights to Bogotá and Medellín.`,
  },
];
