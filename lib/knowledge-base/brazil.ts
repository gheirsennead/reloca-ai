import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const BRAZIL_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Income Tax (IRPF) — 2026 Reform',
    country: 'BR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Receita Federal; Law 15,270/2025; gov.br IRPF tables 2026',
    content: `Brazil personal income tax (IRPF) 2026 — MAJOR REFORM (Law 15,270/2025):
Monthly progressive rates:
- Up to R$5,000/month (~$900 USD): 0% (EXEMPT — raised from R$2,824 in 2025)
- R$5,000–R$7,350: Gradual reduction (phased discount — effective 0-15%)
- R$7,350–R$9,922.28: 15% (deduction R$1,120.39)
- R$9,922.28–R$13,167.00: 22.5% (deduction R$1,864.14)
- Above R$13,167.00/month: 27.5% (deduction R$2,522.43)
Annual equivalent: Up to R$60,000/year exempt. Gradual reduction R$60K-R$88.2K. Full rates above R$88.2K
NEW for 2026 — IRPFM (Minimum Income Tax on High Earners):
- Annual income above R$600,000 (~$108K USD): Subject to minimum effective tax of 0-10%
- Progressive: 0% at R$600K, scaling linearly to 10% at R$1.2M+
- Applies to ALL income including dividends, capital gains, and previously exempt sources
- Designed to ensure high earners pay at least 10% effective rate
NEW for 2026 — Dividend Taxation:
- 10% withholding on dividends >R$50,000/month from a single company (previously 100% exempt)
Tax residency: 183+ days in Brazil within a 12-month period. Also triggered by: permanent visa, or arrival with intent to stay (even before 183 days)
Filing: Annual (March-May). DIRPF via Receita Federal online system
Worldwide income: Residents taxed on worldwide income from day 1 of residency`,
    gotchas: `The 2026 reform is the biggest change in Brazilian personal taxation in decades. The R$5,000 exemption benefits lower earners, but the IRPFM (minimum tax on R$600K+ earners) is a net negative for high-income expats and investors. Dividends, previously 100% tax-free, are now taxed at 10% above R$50K/month — this affects anyone with significant Brazilian business income. The worldwide income obligation means ALL foreign income (US dividends, overseas rentals, etc.) must be declared and taxed from day 1 of Brazilian residency. There is NO territorial exemption and NO grace period.`,
    pro_tip: `The R$5,000/month exemption (~$900) is irrelevant for most expats — you'll be in higher brackets. Focus on the 27.5% top rate (quite low compared to Europe) and the new IRPFM. If you earn under R$600K/year ($108K), the IRPFM doesn't apply — this is where Brazil remains competitive. For exit planning: formally declare your departure from Brazil (Declaração de Saída Definitiva) to stop worldwide income obligations. Without this filing, Brazil may continue treating you as a tax resident indefinitely.`,
  },
  {
    topic: 'INSS Social Security & Exit Tax',
    country: 'BR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'INSS (Instituto Nacional do Seguro Social); Receita Federal; US-Brazil Totalization Agreement',
    content: `INSS (Social Security) contributions — mandatory for all workers in Brazil:
Employee rates (progressive, 2026):
- Up to R$1,518 (1 minimum wage): 7.5%
- R$1,518–R$2,793.88: 9%
- R$2,793.88–R$4,190.83: 12%
- R$4,190.83–R$8,157.41 (ceiling): 14%
- Maximum employee contribution: ~R$951/month (~$170)
Employer contribution: 20% of payroll (+ other social charges totaling ~28-36% of salary)
Self-employed (contribuinte individual): 20% of declared income (cap at ceiling). Simplified plan: 11% of minimum wage (~R$167/month) for basic benefits
Total employer cost: Salary + ~70-80% in mandatory charges (INSS, FGTS, 13th salary, vacation pay, meal vouchers) — Brazil has the highest total labor costs in LATAM
Exit tax planning — Declaração de Saída Definitiva:
- When leaving Brazil permanently: Must file Comunicação de Saída Definitiva within February of the year after departure
- Then file Declaração de Saída Definitiva (tax return for final year)
- Without these filings: Brazil continues treating you as tax resident, taxing worldwide income, and potentially blocking CPF
- Post-exit: Non-resident flat rate of 25% on Brazilian-source income (employment/services). 15% on investment income. 25% on rental income
US-Brazil Totalization Agreement (since Oct 2018): Prevents double social security taxation. Get a Certificate of Coverage to avoid paying both INSS and US Social Security`,
    gotchas: `Brazil's employer social charges are brutal — hiring someone at R$10,000/month costs the employer ~R$17,000-18,000 total. Many companies use PJ (Pessoa Jurídica) contractors to avoid this, but Receita Federal is cracking down on disguised employment. The exit tax process is frequently overlooked — if you leave Brazil without filing Comunicação de Saída, you remain a tax resident in Brazil's eyes. This means your worldwide income is still taxable, and you may face penalties when trying to use your CPF or sell Brazilian assets later. The US-Brazil Totalization Agreement is critical for US expats — without it, you'd pay both INSS and SECA.`,
    pro_tip: `If you plan to leave Brazil eventually: the exit tax filing is CRUCIAL. Do it properly with an accountant (R$500-1,500 for the filing). After exit: maintain a non-resident tax advisor to handle any remaining Brazilian-source income at flat rates. For self-employed expats: the 11% simplified INSS plan (~R$167/month) gives you basic health (SUS) and pension rights — worth it for the access alone. Use a Brazilian contador (accountant) for all tax matters — R$200-500/month for ongoing compliance.`,
  },
  {
    topic: 'Property Tax (IPTU) & Capital Gains',
    country: 'BR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Receita Federal; municipal tax codes; Law 14,973/2024',
    content: `Property taxes and capital gains in Brazil:
IPTU (Imposto Predial e Territorial Urbano) — annual property tax:
- Rate: Varies by municipality. Typically 0.5%–1.5% of assessed value
- São Paulo: 1.0% residential, 1.5% commercial
- Rio: 0.6%–1.0% residential
- Florianópolis: 0.4%–0.8%
- Assessed value (valor venal): Set by municipality, often 40-70% below market value
- Due: Typically January-February. Can pay in installments (8-12 months)
ITBI (property transfer tax): 2-3% of sale price (buyer pays). São Paulo: 3%. Rio: 2%
Capital gains tax on property:
- Resident: 15% on gains up to R$5M, 17.5% on R$5M–10M, 20% on R$10M–30M, 22.5% above R$30M
- Primary residence exemption: If proceeds are used to purchase another residential property within 180 days, capital gains are EXEMPT (one use per 5 years)
- Reduced rates for properties held since before 1988 (grandfather provisions reduce taxable gain)
- Non-residents: 25% flat on all capital gains (no primary residence exemption)
ITCMD (inheritance/gift tax): State-level, 2-8% depending on state. São Paulo: 4%. Rio: 4-8% progressive
Rental income: Taxed as regular income (progressive rates 0-27.5%). Monthly carnê-leão (estimated payment) required`,
    gotchas: `The primary residence capital gains exemption is powerful but strict: you must reinvest the ENTIRE proceeds in a new residential property within 180 days, and can only use this exemption once every 5 years. If you sell and don't reinvest: 15%+ capital gains tax. Non-residents get the worst deal: 25% flat capital gains with NO exemptions. Exit Brazil properly before selling if you plan to sell after leaving. IPTU assessed values lag market values significantly — this helps keep annual taxes low but means the actual effective rate is 0.2-0.7% of market value.`,
    pro_tip: `For property investors: Brazil's effective property tax (IPTU) is very low — 0.2-0.7% of market value. Combined with the primary residence capital gains exemption, the tax burden on property is among the lowest in LATAM. For rental income: deduct IPTU, condomínio fees, maintenance, insurance, and property management (20-30% of rent is common) to reduce taxable rental income. Use carnê-leão monthly payments to avoid penalties. A good contador costs R$200-500/month and handles everything.`,
  },

  // === VISA ===
  {
    topic: 'Digital Nomad Visa (VITEM XIV — Nômade Digital)',
    country: 'BR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ministério da Justiça; MJSP Resolution 36/2024; Consulate reports',
    content: `Brazil Digital Nomad Visa:
- Income requirement: $1,500 USD/month (or $18,000/year) OR R$1,500/month from savings in a Brazilian bank account
- Duration: 1 year, renewable for 1 additional year (2 years total)
- Eligibility: Remote workers employed by or contracting with companies outside Brazil. Cannot work for Brazilian companies
- Documents: Passport (6+ months validity), proof of remote employment/contract, bank statements (3-6 months showing income), clean criminal record (from home country + any country resided in for 1+ year), health insurance valid in Brazil, application form
- Application: At Brazilian consulate (before travel) or can convert tourist visa to DN visa within Brazil via MJSP online portal
- Processing: 2-8 weeks at consulate. In-country conversion: 2-4 weeks
- Cost: $100-160 consular fee
- Tax: DN visa holders staying 183+ days become tax residents — worldwide income taxable. Below 183 days: non-resident status
- Dependents: Spouse and children can be included
- NOT required for 90-day tourist stays (most Western passports get visa-free entry)`,
    gotchas: `The $1,500/month threshold is among the lowest globally — but the tax trap is real. If you stay 183+ days, you become a Brazilian tax resident with worldwide income obligations at up to 27.5% (and now the IRPFM minimum tax for high earners). Many digital nomads don't realize this until tax season. The DN visa doesn't automatically mean you're a tax resident — it's the 183-day threshold that triggers it. Stay under 183 days and you avoid Brazilian taxation entirely.`,
    pro_tip: `If you plan to stay under 183 days: the DN visa isn't necessary — just enter on the 90-day visa-free entry and extend once for another 90 days. The DN visa is only worth getting if you plan to stay 6+ months AND are comfortable with Brazilian tax residency. The $1,500/month income requirement is easy to meet — focus your planning on the tax implications instead. For health insurance: international plans (SafetyWing, World Nomads) are accepted for the visa. Budget ~$50-80/month.`,
  },
  {
    topic: 'Investor Visa (VITEM IX) & Retirement Visa',
    country: 'BR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'MJSP; Cancillería; Resolution 36/2024; consulate requirements',
    content: `Brazil residency visa categories:
1. Investor Visa (VITEM IX):
- Minimum investment: R$500,000 (~$90,000 USD at March 2026 rates)
- Investment must be in a Brazilian company (new or existing), registered with the Central Bank
- Business plan required: Must demonstrate job creation and economic benefit
- Duration: 2-year temporary residency, renewable. Permanent residency (VIPER) possible after demonstrating productive investment
- Must maintain active investment and business operations
- Can work in Brazil (through your company)
2. Retirement Visa (VITEM XIV — Aposentado):
- Income: $2,000 USD/month minimum from permanent pension
- Must be from recognized pension source (Social Security, government, private pension fund)
- Duration: Temporary residency (2 years), renewable indefinitely. Permanent after demonstrating ongoing pension income
- Cannot work in Brazil (pension income only)
- Transfer R$6,000+ BRL equivalent monthly to Brazilian bank account as proof
3. Family Reunion (VITEM V):
- For spouses, children, parents of Brazilian citizens or residents
- Marriage or stable union (união estável) with Brazilian national
- Immediate temporary residency, permanent after 1 year
4. Mercosul Agreement:
- Citizens of Mercosul member states (Argentina, Paraguay, Uruguay) and associated states: Simplified residency process. 2-year temporary → permanent
Path to citizenship: 4 years of residency (1 year if married to Brazilian citizen or have Brazilian child). Portuguese-speaking country nationals: 1 year`,
    gotchas: `The R$500K investor visa requires a REAL business — not just parking money. The Central Bank (BACEN) reviews the investment, and MJSP evaluates the business plan. Shell companies or passive investments (just buying property) don't qualify — you need an active business with employees and operations. The retirement visa's $2,000/month must be from a PERMANENT pension — not investment withdrawals or savings. Property purchase alone does NOT grant any visa or residency in Brazil. Brazil's path to citizenship (4 years) is among the fastest in the world — and Brazil allows dual citizenship.`,
    pro_tip: `Brazil is one of the fastest paths to a second passport in the world: 4 years of residency → citizenship, and dual citizenship is allowed (unlike Singapore). For the investor visa: R$500K in a small business (restaurant, consultancy, tech startup) that creates 10+ Brazilian jobs will be favorably reviewed. The family reunion visa through marriage/stable union with a Brazilian is the fastest path — immediate residency, permanent after 1 year, citizenship after 1 year of permanent. For retirees: the $2,000/month threshold is very achievable with US Social Security.`,
  },
  {
    topic: 'Tourist Entry, CPF & CRNM Registration',
    country: 'BR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Polícia Federal; Receita Federal; Ministério da Justiça',
    content: `Essential admin for living in Brazil:
Tourist entry:
- US citizens: Visa-free for 90 days (since Jan 2025 — previously required e-visa). Extendable once for 90 more days at Polícia Federal
- EU, UK, Canada, Australia: 90 days visa-free. Extension possible
- Maximum stay: 180 days per 12-month period on tourist status
CPF (Cadastro de Pessoas Físicas) — Brazilian tax ID:
- Required for: Bank accounts, phone contracts (postpaid), property purchase, vehicle registration, health insurance, employment, many online purchases, even buying a SIM in some cases
- How to get: (a) At any Receita Federal office in Brazil with passport + proof of address. FREE, same-day. (b) At Brazilian consulate before arrival. (c) Online via Receita Federal website (requires Brazilian digital certificate or attorney)
- CPF is a NUMBER — no physical card is standard (you get a printout or access via Receita Federal app)
CRNM (Carteira de Registro Nacional Migratório) — Foreigner registration card:
- Required after visa approval. Replaces the old RNE/RNM
- Applied for at Polícia Federal with visa stamp + documents
- Processing: 30-90 days. Temporary CRNM receipt issued at appointment
- Required for: Full banking, formal employment, INSS enrollment, property registration
- Cost: R$204.77 (GRU federal payment form)
Registro at Polícia Federal: Must register within 90 days of arrival on any visa (tourist exempt for stays under 90 days). Appointment via SEI (electronic information system) — book early, slots fill fast in major cities`,
    gotchas: `CPF is Brazil's gateway to EVERYTHING. Without it, you cannot open bank accounts, get a phone plan, buy property, or even make some online purchases. Get it immediately — on day 1 if possible. The Receita Federal office in airports (Guarulhos/GRU has one) can issue CPF to arriving tourists. CRNM processing has improved but still takes 30-90 days in major cities. During this time, the temporary receipt + passport serves as valid ID. Polícia Federal appointment slots (agendamento) in São Paulo and Rio fill within hours of release — check daily at 6 AM.`,
    pro_tip: `Get your CPF at Guarulhos airport (GRU) arrivals — there's a Receita Federal office in Terminal 3. Alternatively, get it at any Receita Federal office in Brazil — Florianópolis and smaller city offices are much faster than São Paulo. Once you have CPF: open a Nubank account immediately (app-based, English-friendly, no fees). The CPF + Nubank combo gives you 90% of the financial access you need in Brazil. For CRNM: use a despachante (document processing agent, R$300-800) to handle the Polícia Federal paperwork — worth every centavo.`,
  },

  // === BANKING ===
  {
    topic: 'Banking for Expats',
    country: 'BR',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Banco Central do Brasil; bank websites; expat community reports',
    content: `Brazilian banking for expats (2026):
Requirements: CPF (mandatory). Some banks also require CRNM/visa
Digital banks (easier for foreigners):
- Nubank: Brazil's largest digital bank (100M+ customers). Opens with CPF + passport. English-friendly app. No fees. Credit card, savings (CDB at 100% CDI ~13.25%), loans. BEST first bank for expats
- Banco Inter: Opens with CPF. Checking, savings, investments, shopping cashback. No fees. Growing rapidly
- C6 Bank: Premium digital bank. Opens with CPF. Multi-currency account (USD, EUR). Global account for international transfers
- PicPay: Digital wallet + bank. Opens with CPF
Traditional banks (may require CRNM):
- Itaú Unibanco: Brazil's largest private bank. Best for premium banking. Requires CRNM for full account. Personnalité tier from R$15K/month income or R$250K invested
- Bradesco: Second largest. Requires CRNM usually. Extensive branch/ATM network
- Banco do Brasil: State bank. Best for government-related transactions. Often requires CRNM
- Santander: Sometimes opens with CPF + passport alone (branch-dependent)
PIX — Brazil's instant payment system:
- FREE, instant bank transfers 24/7. Linked to CPF, phone, email, or random key
- Accepted EVERYWHERE — restaurants, street vendors, utilities, rent. QR code or key-based
- Replaced cash, credit cards, and boletos for most transactions
- Brazil is one of the world's most digitally advanced payment economies
CDI/Selic rate (March 2026): ~13.25% — savings accounts and CDB investments pay close to this
Boleto: Payment slip system. Still used for bills, rent, taxes. Pay at any bank, lottery house, or digitally`,
    gotchas: `Brazilian banks are bureaucratic — even digital banks occasionally freeze accounts for "compliance review" with little warning. Keep at least 2 bank accounts active. Itaú and Bradesco require extensive documentation for foreigners (CRNM, proof of income, proof of address — the dreaded comprovante de residência). International transfers to/from Brazil trigger Central Bank reporting and can take 3-5 days. The IOF tax (0.38% on foreign exchange, 1.1% on credit purchases abroad) applies to all international transactions.`,
    pro_tip: `Banking stack: Nubank on day 1 (CPF + passport, instant), then C6 Bank for international transfers (multi-currency), then Itaú Personnalité once you have CRNM and income proof (best premium banking). PIX is revolutionary — embrace it fully. Send rent via PIX, pay restaurants via PIX QR code, receive payments via PIX. The CDI rate (~13.25%) means even basic savings accounts earn meaningful returns — R$100K in a CDB earns ~R$13,250/year. Compare: US savings at 4-5%. Use Wise or Remessa Online for international transfers — 50-70% cheaper than bank wires.`,
  },
  {
    topic: 'Investment & Currency',
    country: 'BR',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'CVM (Securities Commission); B3 (stock exchange); Banco Central',
    content: `Investment and currency in Brazil:
BRL exchange rate (March 2026): ~R$5.55 per USD. Range 2025: R$4.80–6.20 (volatile)
Investment options for residents (CPF required):
- CDB (Certificado de Depósito Bancário): Bank certificates. 100% CDI (~13.25%) at Nubank/Inter. FGC guaranteed up to R$250K per institution. Zero tax on first R$2M aggregate
- Tesouro Direto: Brazilian government bonds. Inflation-linked (IPCA+6-7%), fixed rate (14-15%), or Selic-linked. From R$30 minimum. R$1M/month purchase limit
- B3 stock exchange: Brazilian stocks, ETFs, REITs (FIIs). Foreigners can invest via CPF + brokerage account
- FIIs (Fundos de Investimento Imobiliário): Brazilian REITs. Dividends tax-free for individuals. Yields 8-12%
- Crypto: Legal. B3 has Bitcoin/Ethereum ETFs. Exchanges: Mercado Bitcoin, Binance, Bitso. Capital gains taxed at 15-22.5%
Tax on investments:
- Fixed income (CDB, Tesouro): Regressive — 22.5% (<180 days), 20% (181-360), 17.5% (361-720), 15% (>720 days)
- Stocks: 15% on swing trade gains, 20% on day trade. Exempt on monthly sales under R$20K
- FII dividends: Tax-free for individuals (key advantage)
- IOF: 0.38% on FX transactions. 1.1% on international credit card purchases
International transfers:
- Wise: Best rates. BRL available. R$1M limit
- Remessa Online: Brazilian Wise competitor. Competitive rates. Popular with expats
- Bank wire (SWIFT): Expensive ($30-60 fee + 1-3% spread). Only for large amounts`,
    gotchas: `Brazil's high interest rates (CDI ~13.25%) make fixed income very attractive — but remember, inflation runs 4-5%, so real returns are 8-9%. The BRL is one of the world's most volatile major currencies — it can swing 10-15% in months. If you earn in USD and spend in BRL, a weakening BRL is great; a strengthening BRL hurts. FII (REIT) dividends are tax-free — one of Brazil's best investment benefits. The investment tax regressive structure rewards holding: 22.5% under 6 months vs 15% after 2 years. Be patient.`,
    pro_tip: `For expats earning in USD: the combination of high BRL interest rates + weak BRL = exceptional returns on dollar-cost-averaged investments. Convert USD→BRL monthly via Wise, park in Tesouro Selic or CDB, earn 13%+ in BRL. Even after 15% tax, you earn ~11% net — far above US rates. FIIs are the hidden gem: tax-free dividends at 8-12% yield, listed on B3, liquid. Open a brokerage account (NuInvest, Inter, or Rico) with your CPF. Warning: only invest money you're willing to leave in BRL — the currency risk is real.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'São Paulo Neighborhood Guide',
    country: 'BR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'ZAP Imóveis; Quinto Andar; TheLatinvestor; SECOVI-SP',
    content: `São Paulo property prices by neighborhood (March 2026, per sqm):
- Jardins (Jardim Paulista/América/Europa): R$17,000–35,000/sqm ($3,060–$6,300). São Paulo's most prestigious. Tree-lined streets, luxury shopping (Rua Oscar Freire), restaurants. 2BR (70sqm): R$1.2M–2.5M
- Itaim Bibi: R$18,000–30,000/sqm ($3,240–$5,400). Finance/tech hub. Modern towers, rooftop bars, Faria Lima corridor. 2BR: R$1.3M–2.1M
- Pinheiros: R$15,000–25,000/sqm ($2,700–$4,500). Creative/startup scene. Vila Madalena adjacent. Craft beer, galleries. 2BR: R$1.1M–1.8M
- Vila Madalena: R$12,000–20,000/sqm ($2,160–$3,600). Bohemian. Street art, live music, bars. Younger crowd. 2BR: R$850K–1.4M
- Moema: R$14,000–22,000/sqm ($2,520–$3,960). Family-friendly. Near Ibirapuera Park. Quiet, residential. 2BR: R$1M–1.5M
- Vila Mariana: R$10,000–16,000/sqm ($1,800–$2,880). Middle-class, good metro. 2BR: R$700K–1.1M
- Brooklin/Chácara Santo Antônio: R$12,000–20,000/sqm. Growing corporate area (WTC, multinational offices). 2BR: R$850K–1.4M
- Tatuapé/Mooca (East Zone): R$7,000–12,000/sqm. More affordable, improving. 2BR: R$500K–850K
Rentals (furnished, 2BR): Jardins R$5,000–10,000/mo ($900–1,800). Pinheiros R$4,000–7,000. Vila Madalena R$3,000–5,500
São Paulo is Brazil's economic engine — 33% of GDP. Population: 12M (city), 22M (metro)`,
    gotchas: `São Paulo traffic is legendary — the city regularly has 300+ km of congestion during rush hour. Live near where you work/socialize. The metro is excellent but limited (5 lines). Faria Lima corridor (Itaim Bibi/Pinheiros) is the finance/tech center — if you work in this sector, live nearby. Furnished rentals for expats carry a 40-60% premium vs unfurnished. Security buildings (portaria 24h) are standard and expected — budget for condomínio fees of R$800–2,000/month on top of rent.`,
    pro_tip: `Pinheiros and Vila Madalena are São Paulo's best value for quality of life — 25-35% cheaper than Jardins/Itaim with arguably better culture, dining, and nightlife. Moema is the family sweet spot — near Ibirapuera Park, excellent schools, quieter streets. For investment: Vila Mariana and Tatuapé are appreciating fastest as the metro expands. Use Quinto Andar (digital rental platform) to find apartments — most transparent pricing and no agent fees for tenants.`,
  },
  {
    topic: 'Rio de Janeiro Neighborhood Guide',
    country: 'BR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'ZAP Imóveis; OLX; TheLatinvestor',
    content: `Rio de Janeiro property prices by neighborhood (March 2026, per sqm):
- Leblon: R$20,000–30,000/sqm ($3,600–$5,400). Brazil's most expensive neighborhood. Beach, restaurants, safety. 2BR: R$1.5M–2.5M
- Ipanema: R$18,000–25,000/sqm ($3,240–$4,500). Iconic beach, vibrant nightlife, international crowd. 2BR: R$1.3M–1.8M
- Botafogo: R$10,000–16,000/sqm ($1,800–$2,880). Up-and-coming. Bay views, startup scene (new "Silicon Valley of Rio"). 2BR: R$700K–1.1M
- Flamengo: R$8,000–14,000/sqm ($1,440–$2,520). Traditional, Flamengo Park, bayside. 2BR: R$560K–1M
- Copacabana: R$10,000–15,000/sqm ($1,800–$2,700). Iconic but aging. Tourist-heavy. Mix of luxury and modest. 2BR: R$700K–1.1M
- Barra da Tijuca: R$8,000–14,000/sqm ($1,440–$2,520). Suburban beach. Gated condominiums, malls. Families. Fast growth (+12% YoY). 2BR: R$560K–1M
- Santa Teresa: R$6,000–12,000/sqm ($1,080–$2,160). Bohemian hillside. Colonial houses, art studios. 2BR: R$420K–850K
- Tijuca: R$6,000–10,000/sqm ($1,080–$1,800). Middle-class, near Tijuca Forest. 2BR: R$420K–700K
Rentals (furnished, 2BR): Leblon R$6,000–12,000/mo. Ipanema R$5,000–9,000. Botafogo R$3,000–5,500. Barra R$3,000–6,000
Rental yields: Leblon/Ipanema 3-5%. Botafogo/Flamengo 5-7%. Barra 5-8%`,
    gotchas: `Rio's safety varies DRAMATICALLY by block — even within "safe" neighborhoods, some streets border favelas. Always ask locals about specific streets. Ipanema/Leblon are genuinely safe with heavy police presence, but petty theft (phone snatching) still occurs on the beach. Copacabana has more crime than Ipanema despite being adjacent. Barra da Tijuca is safe but car-dependent — no metro connection (BRT only). Santa Teresa is charming but the road up is notoriously dangerous at night. Never display phones, watches, or jewelry on the street in any Rio neighborhood.`,
    pro_tip: `Botafogo is Rio's best value play — 35-50% cheaper than Ipanema/Leblon with a surging food/startup/culture scene, bay views, and excellent metro access. Flamengo offers even better value with the same bayside location. For families: Barra da Tijuca's gated communities offer the most peace of mind, but you need a car. For investment: Botafogo is appreciating fastest as tech companies establish there. Avoid buying in Copacabana — aging building stock and declining desirability despite the famous name.`,
  },
  {
    topic: 'Florianópolis, Fortaleza & Northeast',
    country: 'BR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'ZAP Imóveis; TheLatinvestor; VivaReal',
    content: `Florianópolis property (March 2026):
- Jurerê Internacional: R$12,000–22,000/sqm ($2,160–$3,960). Luxury beach. "Brazilian Hamptons." Seasonal. 2BR: R$850K–1.5M
- Lagoa da Conceição: R$8,000–14,000/sqm ($1,440–$2,520). Expat favorite. Lagoon, restaurants, nightlife. Surf culture. 2BR: R$560K–1M
- Campeche: R$7,000–12,000/sqm ($1,260–$2,160). Growing fast. Beach, more affordable. 2BR: R$500K–850K
- Centro: R$6,000–10,000/sqm ($1,080–$1,800). Urban, walkable, university. 2BR: R$420K–700K
- Ingleses: R$5,000–9,000/sqm ($900–$1,620). Budget beach option. Brazilian tourist crowd. 2BR: R$350K–630K
Rentals (2BR): Lagoa R$2,500–5,000/mo. Campeche R$2,000–3,500. Centro R$1,800–3,000
Fortaleza (Northeast):
- Meireles: R$7,000–12,000/sqm ($1,260–$2,160). Premium beachfront. International expats. 2BR: R$500K–850K
- Aldeota: R$5,000–8,000/sqm ($900–$1,440). Upscale residential. Shopping, restaurants. 2BR: R$350K–560K
- Praia do Futuro: R$4,000–7,000/sqm ($720–$1,260). Beach, more affordable. 2BR: R$280K–500K
Rentals (2BR): Meireles R$1,800–3,500/mo. Aldeota R$1,500–2,800
Other Northeast cities: Natal (R$4,000–8,000/sqm), João Pessoa (R$3,500–7,000/sqm), Salvador (R$5,000–10,000/sqm Barra/Ondina)
Northeast advantages: 40-60% cheaper than São Paulo/Rio. Year-round tropical sun. Growing digital nomad scene`,
    gotchas: `Florianópolis has extreme seasonality — population doubles December-March (Brazilian summer). Rental prices spike 2-3x during this period. Outside summer, many beach towns feel empty. Internet infrastructure is weaker outside Lagoa da Conceição/Centro. The island's geography means traffic bottlenecks at the bridges and on the SC-401 highway. Fortaleza is Gregory's focus area — Meireles/Aldeota are safe and well-serviced, but venture outside these neighborhoods with caution. The Northeast coast is stunning but infrastructure (roads, hospitals, internet) is notably weaker than the South/Southeast.`,
    pro_tip: `Florianópolis is Brazil's best quality-of-life city — combination of beach, nature, tech ecosystem (growing startup scene), safety, and Southern European-influenced culture. Lagoa da Conceição is the expat hub. For Gregory's LATAM Estates clients: Fortaleza offers exceptional value — beachfront property at a fraction of Rio prices, growing infrastructure (new airport terminal, metro expansion), and year-round warmth (26-32°C). The Dual Paradise concept (Guaramiranga mountain + Fortaleza coast) is genuinely unique. Northeast property is appreciating 8-12% annually as remote work drives demand.`,
  },
  {
    topic: 'Property Purchase Process & Costs',
    country: 'BR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Cartório regulations; notary fee tables; registry procedures',
    content: `Buying property in Brazil — process and costs:
Foreigners: FULL ownership rights for urban property. Rural property >3 "módulos fiscais" requires INCRA approval
Transaction costs (buyer):
- ITBI (transfer tax): 2-3% of sale price (São Paulo 3%, Rio 2%)
- Cartório/registry fees: 1-2% (notary registration + title transfer)
- Legal fees: 1-2% (independent lawyer — ESSENTIAL in Brazil)
- Total: ~5-7% of purchase price
Process:
1. Get CPF (essential — cannot buy without it)
2. Property search (ZAP Imóveis, Quinto Andar, local agents)
3. Due diligence: Matrícula (title history) from Cartório de Registro de Imóveis. Check: Certidões negativas (clear of liens, taxes, lawsuits). Verify IPTU is current. Check for any ônus (encumbrances)
4. Contrato de Promessa de Compra e Venda (purchase agreement). Typically 10-30% deposit
5. Escritura Pública (public deed) at Cartório de Notas (notary office). Both parties sign
6. Registration at Cartório de Registro de Imóveis. Property is ONLY officially yours when registered in the matrícula
Timeline: 4-8 weeks total for a clean transaction. Complex cases: 3-6 months
The Cartório system: Brazil's notary/registry system is bureaucratic but provides strong title security. Every property has a matrícula (registration number) at the local Cartório de Registro de Imóveis — this is the definitive proof of ownership`,
    gotchas: `The Cartório system is Brazil's bureaucratic landmark — every document must be notarized, registered, and stamped (sometimes multiple times at different offices). A property purchase involves 2-3 different Cartórios. Factor in 2-4 extra weeks for Cartório processing. NEVER buy without an independent lawyer reviewing the matrícula — encumbrances, pending lawsuits (ações judiciais), and environmental restrictions (APP zones on coastal property) can make a property unmarketable. The compra e venda contract is binding — losing your deposit is the consequence of backing out.`,
    pro_tip: `Brazil's title system, while bureaucratic, is actually very secure — the matrícula provides definitive proof of ownership history. This is more secure than many LATAM countries. Hire a lawyer who does a "due diligence imobiliária completa" — R$2,000-5,000 for a full check of the matrícula, certidões negativas (liens, taxes, lawsuits), environmental restrictions, and zoning. Use a despachante (document processor, R$500-1,500) to handle Cartório filings. For financing: Brazilian mortgages are available to foreigners with CRNM — rates are high (9-12%/year) but exist.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'SUS Public Healthcare',
    country: 'BR',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Ministério da Saúde; SUS (Sistema Único de Saúde); ANS (Agência Nacional de Saúde Suplementar)',
    content: `SUS (Sistema Único de Saúde) — Brazil's universal public healthcare:
- Coverage: FREE for everyone — citizens, residents, tourists, undocumented immigrants. No enrollment required. Just show up with CPF or passport
- Funded by: Federal, state, and municipal governments
- What's covered: Everything — GP, specialists, surgery, hospitalization, maternity, prescriptions (Farmácia Popular program for free/subsidized medications), vaccines, cancer treatment, dialysis, organ transplants, mental health, dental
- Access points: UBS (Unidade Básica de Saúde) for primary care. UPA (Unidade de Pronto Atendimento) for urgent care. Public hospitals for emergencies and complex care
- Quality: HIGHLY variable by region and facility. São Paulo, Curitiba, Porto Alegre have excellent SUS hospitals. Northeast and rural areas: overwhelmed and underfunded
- Wait times: GP at UBS: 1-4 weeks. Specialist referral: 2-12 months (varies wildly). Elective surgery: 6-18 months. Emergency: immediate
- Farmácia Popular: Government program providing free or heavily subsidized medications for chronic conditions (hypertension, diabetes, asthma)
- Vacinas: Free comprehensive vaccination program at any UBS. One of the world's best immunization systems
Brazil health stats: Life expectancy 76.6 years. Public hospitals perform 98% of organ transplants (world's largest public transplant system)`,
    gotchas: `SUS quality is a tale of two Brazils. São Paulo's Hospital das Clínicas is world-class (Latin America's largest hospital complex). Meanwhile, public hospitals in the Northeast can be overwhelmed, under-equipped, and have multi-month waits. Emergency rooms (pronto socorro) at public hospitals can have 6-12 hour waits for non-critical cases. Portuguese is essential for SUS — very few staff speak English. Medications at Farmácia Popular require a Brazilian prescription (receita médica).`,
    pro_tip: `SUS is genuinely excellent for: vaccines (free at any UBS — no appointment), emergency care (stabilization is immediate), chronic disease management (free medications via Farmácia Popular), and complex procedures (Brazil's cancer treatment and organ transplant programs are globally competitive). For day-to-day healthcare, supplement with a private plano de saúde. The dual system works well: SUS for emergencies and chronic care, private for routine consultations and faster specialist access.`,
  },
  {
    topic: 'Private Health Insurance (Planos de Saúde)',
    country: 'BR',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'ANS (Agência Nacional de Saúde Suplementar); insurer websites',
    content: `Private healthcare in Brazil (planos de saúde) — 2026:
Major providers:
- Unimed: Brazil's largest health cooperative. Nationwide (but plans are regional — verify coverage area). Most doctors accept Unimed. Plans: R$300–800/month (individual, age 30-50)
- Amil (UnitedHealth Group): Best hospital network in São Paulo/Rio. English-speaking doctors available. Plans: R$400–1,200/month
- SulAmérica: Premium. Best for executives. Comprehensive network including Albert Einstein and Sírio-Libanês. Plans: R$500–2,000/month
- Bradesco Saúde: Solid mid-range. Extensive network. Plans: R$350–900/month
- Notre Dame Intermédica (Hapvida): Budget option. Largest in number of members. Plans: R$200–500/month
- Porto Seguro Saúde: Good reputation, especially in São Paulo. Plans: R$350–800/month
Top private hospitals (among Latin America's best):
- Hospital Albert Einstein (São Paulo): World-class. JCI accredited. Forbes Global Best Hospitals list
- Hospital Sírio-Libanês (São Paulo): Elite. Presidential and celebrity patients
- Hospital Copa Star (Rio): Premium
- Hospital Moinhos de Vento (Porto Alegre): Excellent
Cost comparison: GP visit (private): R$200-500 ($36-90). Specialist: R$300-800. MRI: R$800-2,000. A/C hospital room: R$1,500-4,000/day`,
    gotchas: `Brazilian health insurance has mandatory 180-day waiting periods (carência) for most procedures — no coverage for pre-existing conditions during this period. Obstetric coverage: 300-day wait. Emergency: 24 hours only. ANS regulates plans and guarantees coverage of a minimum set of procedures (Rol de Procedimentos). Unimed is excellent but each Unimed is a separate cooperative — "Unimed São Paulo" and "Unimed Floripa" are DIFFERENT entities with different networks. Always verify your specific Unimed plan's coverage area and hospital list.`,
    pro_tip: `For expats: Amil or SulAmérica are the best options — broader networks, English-speaking doctors in major cities, and coverage at Albert Einstein/Sírio-Libanês. Budget R$500-800/month for a comprehensive plan in São Paulo/Rio. For the Northeast: Hapvida/Notre Dame has the largest network but lower quality. If cost matters: the SUS + Unimed basic plan ($200-300/month) combo gives you 90% of what you need. Dental plans are separate — R$30-100/month for basic coverage. Brazilian dental care is excellent and affordable even without insurance.`,
  },

  // === REAL ESTATE (additional) ===
  {
    topic: 'Curitiba & Southern Brazil',
    country: 'BR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'ZAP Imóveis; VivaReal; TheLatinvestor',
    content: `Southern Brazil property — European-influenced, cooler climate:
Curitiba (Paraná):
- Batel/Água Verde: R$8,000–14,000/sqm ($1,440–$2,520). Premium residential. Parks, restaurants. 2BR: R$560K–1M
- Centro Cívico/Juvevê: R$6,000–10,000/sqm ($1,080–$1,800). Central, cultural. 2BR: R$420K–700K
- Ecoville: R$7,000–11,000/sqm ($1,260–$1,980). Modern, family-friendly, near parks. 2BR: R$490K–770K
- Santa Felicidade: R$5,000–9,000/sqm ($900–$1,620). Italian heritage, restaurants, quieter. 2BR: R$350K–630K
Rentals (2BR): Batel R$2,500–4,500/mo ($450–810). Centro R$1,500–3,000
Curitiba advantages: Best urban planning in Brazil (BRT pioneer). European culture (German, Italian, Polish, Ukrainian heritage). 4 distinct seasons. Cool winters (10-18°C June-Aug). Safe — one of Brazil's safest major cities
Porto Alegre (Rio Grande do Sul):
- Moinhos de Vento/Bela Vista: R$8,000–14,000/sqm. Premium. 2BR: R$560K–1M
- Cidade Baixa: R$5,000–8,000/sqm. Bohemian, nightlife. 2BR: R$350K–560K
Porto Alegre: Gateway to Serra Gaúcha wine country (Bento Gonçalves, Gramado). Strong German/Italian culture. Challenging security situation (improving post-2024 floods recovery)
Balneário Camboriú (Santa Catarina): "Brazil's Dubai." R$12,000–25,000/sqm. Luxury towers, beach. Popular with Argentinians and Paraguayans. Very seasonal`,
    gotchas: `Southern Brazil has actual winter — Curitiba and Porto Alegre drop to 5-15°C (41-59°F) in June-August, occasionally below freezing. Most Brazilian buildings have NO central heating — bring warm clothes and space heaters. Porto Alegre experienced devastating floods in May 2024 — check flood zone maps before buying. Balneário Camboriú prices have overheated — comparable to Florianópolis premium areas but with less culture and more concrete.`,
    pro_tip: `Curitiba is Brazil's best-kept secret for quality of life — excellent infrastructure, green spaces (52 sqm of green area per person), safe, affordable, and culturally rich. If you don't need beach access, it's arguably Brazil's best city to live in. The BRT system (Curitiba invented bus rapid transit) makes it one of the few Brazilian cities where you can comfortably live without a car. For investment: Curitiba is undervalued compared to São Paulo and Rio — expect above-average appreciation as remote workers discover it.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living by City',
    country: 'BR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; DIEESE; Expatistan; direct research; March 2026 rate R$5.55/USD',
    content: `Monthly cost of living for a couple (comfortable), in USD:
São Paulo: $2,200–$4,000
- Rent 2BR (Pinheiros): R$4,000–7,000 ($720–1,260). Groceries: R$1,500–2,500 ($270–450). Dining: R$1,000–2,000 ($180–360). Transport: R$400–800 ($72–144, metro R$4.40/ride). Utilities: R$400–700 ($72–126). Internet: R$100–150 ($18–27). Health: R$500–1,500 ($90–270)
Rio de Janeiro: $2,000–$3,800
- Rent 2BR (Botafogo): R$3,000–5,500. Groceries: R$1,200–2,200. Dining: R$800–1,800. Transport: R$350–700
Florianópolis: $1,800–$3,200
- Rent 2BR (Lagoa): R$2,500–5,000. Groceries: R$1,200–2,000. Dining: R$700–1,500
Fortaleza: $1,200–$2,200
- Rent 2BR (Meireles): R$1,800–3,500. Groceries: R$1,000–1,800. Dining: R$500–1,000. Transport: R$200–400
Curitiba: $1,500–$2,500
- Rent 2BR: R$2,000–4,000. European-influenced city. Excellent public transit. Cool climate
Key costs:
- Domestic worker (diarista, 2x/week): R$800–1,500/month ($145–270)
- Private school (bilingual): R$2,000–5,000/month ($360–900)
- Gym: R$80–200/month ($14–36)
- Haircut: R$30–80 ($5–14)
Brazil minimum wage 2026: R$1,518/month (~$275). Average salary: ~R$3,000/month (~$540)`,
    gotchas: `Brazil's cost of living has increased significantly (inflation + BRL recovery). "Cheap Brazil" depends entirely on where you are. São Paulo's Jardins/Itaim is comparable to Southern Europe. Fortaleza at $1,200-1,500/month is genuine value. Import duties of 60%+ on electronics mean: buy your laptop, phone, and tech BEFORE arriving. A MacBook costs 60-80% more in Brazil than the US. Cars are also expensive (IPI tax + import duties). Supermarket prices for imported goods (cheese, wine, olive oil) are shockingly high.`,
    pro_tip: `The Northeast (Fortaleza, Natal, João Pessoa) is where the real value is — $1,200-1,500/month for a couple living comfortably in a safe beachfront neighborhood. Buy local: Brazilian fruits, vegetables, meat, and fish are excellent and cheap. Feiras (open-air markets, usually weekly) offer produce at 40-60% less than supermarkets. "Prato feito" or "PF" (fixed plate lunch at local restaurants) costs R$15-25 ($3-5) for a full meal. The quality of life in Brazil — beaches, nature, culture, food, social warmth — is exceptional relative to cost outside the premium SP/Rio neighborhoods.`,
  },
  {
    topic: 'Safety, Culture & Bureaucracy',
    country: 'BR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Fórum Brasileiro de Segurança Pública; Global Peace Index; Anuário Brasileiro de Segurança 2025',
    content: `Safety and culture in Brazil:
SAFETY: Highly neighborhood-dependent. Brazil has significant crime, but expat areas are much safer than statistics suggest
- Homicide rate: ~22 per 100K (national). São Paulo city: ~6 per 100K (comparable to US cities). Jardins/Pinheiros: near-zero for expats
- Safest cities: Florianópolis, Curitiba, Belo Horizonte, Porto Alegre (mostly). São Paulo's premium neighborhoods
- Highest risk: Small/medium Northeastern cities, Rio favelas and surroundings, border regions
- Expat-relevant crimes: Phone/bag snatching (most common — Rio beaches, São Paulo street), credit card cloning, express kidnapping (rare in premium areas since 2020s crackdown)
- Rules: Don't use phone on street. Don't display jewelry/watches. Use ride apps (99, Uber) not street taxis at night. Stay in well-lit areas. Keep phone in front pocket
BUREAUCRACY:
- Cartório system: Notarize EVERYTHING. Birth certificates, contracts, powers of attorney, signatures — all require Cartório authentication (reconhecimento de firma)
- CPF for everything: Can't buy a SIM, open streaming accounts, or even shop online without CPF
- Jeitinho brasileiro: The "Brazilian way" — creative problem-solving around bureaucratic obstacles. Part frustration, part cultural charm
- Punctuality: Flexible. "Brazilian time" means 15-30 min late is normal for social events. Business meetings are more punctual
CULTURE:
- Warmth: Brazilians are among the most welcoming people globally. Physical affection (hugs, cheek kisses) is the norm
- Portuguese: ESSENTIAL. Unlike some LATAM countries, very few Brazilians speak English outside tourist areas and corporate environments
- Food: Regional diversity is extraordinary. Feijoada (national dish), açaí (Amazon), churrasco (South), acarajé (Bahia)
- Music: Samba, bossa nova, forró, sertanejo, funk — music is everywhere and inescapable`,
    gotchas: `Don't let crime statistics scare you — São Paulo's premium neighborhoods are safer than many US cities. The key is neighborhood selection. The gap between a "safe" and "dangerous" area can be literally 2 blocks. Ask locals (porteiro, neighbors, real estate agent) about specific streets. The Cartório system will test your patience — budget extra time for EVERY document. Plan for half-day visits. Learn Portuguese — unlike Mexico or Colombia where you can get by with basic Spanish, Brazil requires real Portuguese proficiency for daily life, bureaucracy, and banking.`,
    pro_tip: `For language: invest in Portuguese from day 1. Brazilian Portuguese is different from European Portuguese — use Brazilian resources (Preply with Brazilian tutors, Babbel's Brazilian course). R$50-100/hour for private tutoring ($9-18). In 3-6 months, you'll be conversational — and it transforms your experience. For safety: the same precautions as any large city, plus: never use your phone on the street in Rio (this is the #1 crime against foreigners), Uber/99 everywhere at night, and choose your neighborhood carefully. The "jeitinho" cultural trait is actually useful — Brazilians are incredibly helpful when you need creative solutions to bureaucratic problems. Ask for help, smile, and be patient.`,
  },
  {
    topic: 'Internet, Remote Work & Coworking',
    country: 'BR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Anatel (telecom regulator); Speedtest.net; ISP websites',
    content: `Internet and remote work in Brazil (2026):
Home fiber ISPs:
- Vivo (Telefônica): Largest nationwide. 300Mbps–1Gbps from R$120–200/month ($22–36). Best coverage
- Claro: Second largest. 250Mbps–750Mbps from R$100–180/month ($18–32)
- TIM Live: Fiber expanding rapidly. 300Mbps–1Gbps from R$100–170/month ($18–31). Best value where available
- Brisanet: Northeast regional (Fortaleza, Natal, etc.). Excellent in coverage area. 200–500Mbps from R$70–120/month ($13–22)
- Local ISPs: Many excellent regional providers. Often better service than nationals
Average speeds: São Paulo 150Mbps, Rio 120Mbps, Florianópolis 130Mbps, Fortaleza 100Mbps. Brazil has good urban fiber coverage
Mobile: Vivo, Claro, TIM, Oi. Prepaid SIM: R$20-40 for 10-25GB. Postpaid: R$55-120 for 25-100GB. 5G in major cities
Coworking:
- São Paulo: WeWork (from R$900/month), Spaces (R$800+), Regus (R$600+), ImpactHub (R$500+), countless local spaces (R$300-600)
- Rio: WeWork, Stone Co-working, Templo (Botafogo, R$500+)
- Florianópolis: VillageMall, Nuvem Coworking, Selina (R$400-700)
- Fortaleza: Impact Hub, My Cowork (R$300-500). Growing scene
Time zone: BRT (UTC-3). 2 hours ahead of EST. Good US overlap. Same as Argentina
Starlink: Available in Brazil. R$230/month + R$2,400 equipment. Game-changer for rural/beach areas with poor fiber coverage`,
    gotchas: `Brazilian ISPs oversell bandwidth — test actual speeds before signing a 12-month contract. Afternoon slowdowns are common in residential buildings. Power outages affect internet (no UPS in most routers) — buy a no-break (UPS, R$200-500). Phone contracts require CPF. The mandatory 12-month loyalty clause (fidelidade) with ISPs means early termination fees of R$200-500. In beach areas and the Northeast, internet can be unreliable during heavy rain — Starlink is the solution for remote workers in these areas.`,
    pro_tip: `BRT (UTC-3) is PERFECT for US clients — only 2 hours ahead of EST. Your 9 AM = their 7 AM. Full overlap during US business hours. For Fortaleza: Brisanet offers the best value fiber in the Northeast — R$70-100/month for 200-500Mbps. In São Paulo: TIM Live has the best price/performance. For reliability: always have a mobile hotspot backup (Vivo 4G/5G). The remote work scene in Florianópolis and Fortaleza is growing rapidly — both have dedicated digital nomad communities and coworking spaces. Brazil's timezone advantage over Europe-focused competitors (Portugal is UTC+0, Spain UTC+1) makes it ideal for teams straddling US and LATAM markets.`,
  },
  {
    topic: 'Import Duties, Shopping & Electronics',
    country: 'BR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Receita Federal; customs regulations; Remessa Conforme program',
    content: `Import duties and shopping in Brazil:
Import tax on goods:
- Standard rate: 60% tax on international purchases over $50 USD (previously $0 threshold before 2024 reform)
- Remessa Conforme program (2024+): International retailers registered with Receita Federal (AliExpress, Amazon Global, Shein, Shopee) charge 20% ICMS at checkout for purchases under $50, and 60% + ICMS for purchases over $50
- Personal imports via mail/courier: 60% import tax + ICMS (~17%). Total effective duty: ~80-90% of item value
- Electronics specifically: MacBook Air M3 costs ~R$10,000-14,000 in Brazil ($1,800-2,520) vs $1,099 in US. iPhone 16: ~R$7,000-10,000 ($1,260-1,800) vs $799
- Traveler's exemption: $500 per person arriving by air (duty-free). Over $500: 50% tax on excess
- Free trade zone: Manaus (Zona Franca) has reduced taxes on electronics — some products manufactured there are cheaper
Practical impact:
- Bring ALL electronics from abroad (laptop, phone, tablet, camera, headphones)
- Brazilian-made goods (food, clothing, furniture, services) are affordable
- Imported goods (wine, cheese, electronics, luxury brands) are 50-100% more expensive than abroad
- Cars: IPI (industrial tax) + import duties make vehicles 30-60% more expensive. A Honda Civic costs R$120K-140K (~$22K-25K) vs ~$24K in US (less difference due to local manufacturing)`,
    gotchas: `The 60% import duty is the #1 unexpected cost for expats. Everything you order from abroad — Amazon, eBay, specialty items — gets hit with 60% + ICMS. A $100 item costs you $180+ delivered. This applies to GIFTS too. The only workaround: keep individual packages under $50 (subject to 20% ICMS only through Remessa Conforme retailers). Wine lovers: prepare for sticker shock. A $10 wine in the US costs R$80-120 ($14-22) in Brazil due to duties. Brazilian wines (from Rio Grande do Sul) are improving and much cheaper.`,
    pro_tip: `Pack strategically before moving: bring every electronic device, spare cables, adapters, and specialty items you might need for 2+ years. Buy a second laptop charger abroad. Use your $500 duty-free allowance smartly when visiting home. For shopping in Brazil: Mercado Livre (Brazilian Amazon) often has better prices than international imports due to local sellers. Black Friday (November) is genuine in Brazil — 20-50% discounts at major retailers. For specialty items: Paraguayan border towns (Ciudad del Este from Foz do Iguaçu) offer duty-free electronics — popular Brazilian tradition. Brazilian alternatives exist: Positivo computers, Intelbras networking, and Multilaser accessories are decent local brands at fair prices.`,
  },
  {
    topic: 'Climate Zones & Best Time to Move',
    country: 'BR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'INMET (Instituto Nacional de Meteorologia); tourism authority',
    content: `Brazil's climate diversity — 5 distinct climate zones:
TROPICAL NORTHEAST (Fortaleza, Natal, Recife, Salvador):
- Year-round 24-32°C (75-90°F). Rainy season: April-July (short afternoon showers). Dry season: Sept-Feb
- Best for: Sun-seekers, beach lovers, budget-conscious expats. Year-round warmth, no winter
TROPICAL SOUTHEAST (Rio de Janeiro):
- Summer (Dec-Mar): 25-40°C, humid, heavy rain. Winter (Jun-Aug): 18-27°C, dry. Best weather: April-May, Sep-Oct
- Best for: Outdoor lifestyle, beach culture. Warning: summer heat is intense with high humidity
SUBTROPICAL SOUTH (São Paulo, Curitiba, Florianópolis, Porto Alegre):
- 4 distinct seasons. Summer: 25-35°C. Winter: 5-18°C. Floripa gets cold ocean in winter
- Best for: Those who miss seasons. European climate feel. Curitiba is coolest major city
EQUATORIAL NORTH (Amazon, Manaus):
- 25-35°C year-round. Extremely humid. Wet season (Dec-May) vs less wet season (Jun-Nov)
- Not typical for expats. Adventure/ecotourism focused
CERRADO/CENTRAL (Brasília, Goiânia):
- Dry season (May-Sep): 15-30°C, very low humidity (10-20%). Wet season (Oct-Apr): 20-35°C, daily thunderstorms
Best time to arrive: March-May (autumn — pleasant weather nationwide, lower rent demand, easier apartment hunting)`,
    gotchas: `São Paulo never gets truly hot OR truly cold — but the in-between with pollution can feel oppressive. Rio summers (Dec-Mar) are brutally hot and humid — 40°C with 90% humidity is common. A/C is essential. The Northeast rainy season (April-July) is mild compared to monsoons elsewhere — usually 1-2 hours of afternoon rain, then sunshine. Don't let "rainy season" deter you from the Northeast. Florianópolis has beautiful summers but genuinely cold winters for a beach city — ocean water drops to 16°C.`,
    pro_tip: `For Gregory's LATAM Estates focus: Fortaleza (tropical Northeast) offers the most consistent year-round warmth in Brazil. The "Dual Paradise" concept is climatically perfect: Guaramiranga mountain (~22°C year-round, cool escape) + Fortaleza coast (26-32°C). Move in March-May to get settled before Brazilian winter (June-Aug), which barely affects the Northeast but makes the South uncomfortable for those expecting tropical weather.`,
  },
];
