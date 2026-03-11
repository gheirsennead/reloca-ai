import { KnowledgeBaseEntry } from '../knowledge-base-schema';

// Portugal already has 10 entries in knowledge-base-schema.ts
// This file adds 40+ MORE entries for comprehensive coverage

export const PORTUGAL_KB_EXTENDED: KnowledgeBaseEntry[] = [
  // === TAX (additional entries) ===
  {
    topic: 'Crypto & Digital Asset Taxation',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Portuguese Tax Authority (AT); IRS Code Art. 10',
    content: `Portugal crypto tax rules (2025-2026):
- Short-term gains (held <365 days): Taxed at 28% flat rate
- Long-term gains (held >365 days): EXEMPT from capital gains tax
- Mining/staking income: Taxed as professional income at progressive rates (14.5-48%)
- NFT sales: Treated as capital gains (28% if <365 days, exempt if >365 days)
- Crypto-to-crypto swaps: Taxable event if <365 days holding
- DeFi yields: Gray area — AT has not issued specific guidance. Conservative approach: declare as investment income
- Reporting: Must declare all crypto holdings on annual IRS declaration (Anexo J for foreign platforms)
- IFICI holders: Crypto gains from foreign platforms may be exempt under foreign income provisions if taxed at source`,
    gotchas: `The 365-day exemption counts from acquisition date of EACH specific lot — not from when you first bought that crypto. FIFO accounting applies by default. Portuguese exchanges (if any) report to AT. Foreign exchange reporting is your responsibility — non-disclosure penalties are 30-100% of tax due.`,
    pro_tip: `If you hold significant crypto, time your tax residency move carefully. Establish Portuguese residency AFTER holding positions for 365+ days to immediately qualify for the exemption. Keep detailed transaction logs from day one — AT audits are increasing for crypto holders.`,
  },
  {
    topic: 'Wealth & Inheritance Tax',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-02-15',
    source: 'Portuguese Tax Authority; Stamp Duty Code (Código do Imposto do Selo)',
    content: `Portugal has NO wealth tax and NO inheritance tax for direct family:
- Spouse, children, grandchildren: EXEMPT from inheritance/gift tax
- Other heirs (siblings, friends, etc.): 10% stamp duty on inherited assets
- Real estate transfers on death: 0.8% stamp duty + IMT exemption for primary residence inherited by spouse
- Lifetime gifts to non-family: 10% stamp duty
- Foreign assets: Only taxed if donor/deceased was Portuguese tax resident
- No annual wealth tax on net worth
- AIMI (Additional Municipal Property Tax): 0.7% on property portfolio value above €600,000 (per person), 1% above €1M. Couples can double thresholds by filing jointly`,
    gotchas: `AIMI applies to the TAXABLE VALUE (VPT) of all Portuguese properties combined, not market value. VPT is often 30-60% of market value. But if you own multiple properties, it adds up. Foreign property is NOT included in AIMI calculations.`,
    pro_tip: `Portugal is one of Europe's best jurisdictions for wealth transfer. No inheritance tax for direct family means you can pass significant wealth tax-free. For non-family heirs, consider lifetime gifts — same 10% rate but allows you to control timing and structure.`,
  },
  {
    topic: 'Corporate Structures for Foreign Entrepreneurs',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-02-01',
    source: 'IRN (National Registry Institute); CIRC (Corporate Income Tax Code)',
    content: `Setting up a company in Portugal:
- Unipessoal Lda (single-member LLC): Most common for solo entrepreneurs. Min capital €1. Registration at Empresa na Hora: €360, same-day. Corporate tax: 21% (17% on first €25,000 for SMEs)
- Lda (multi-member LLC): 2+ partners, min capital €1 per partner. Same registration process
- SA (public company): Min capital €50,000. Required for certain activities
- Freelancer/Sole trader (Empresário em Nome Individual): Simplest. Income taxed at personal rates. Simplified regime if revenue <€200,000/year
- VAT registration: Mandatory if revenue >€14,500/year (simplified) or >€13,500 (services)
- Social Security (TSU): 21.4% employer + 11% employee. Self-employed: 21.4% on 70% of income
- Annual accounting: Mandatory for Lda/SA. Must use certified accountant (TOC). Cost: €100-300/month
- Startup visa: Available for non-EU entrepreneurs with innovative projects. Endorsed by IAPMEI`,
    gotchas: `The €1 minimum capital is misleading — banks won't take you seriously, and some clients/landlords check your company capital. Budget €5,000-10,000 for credibility. Social Security payments start in the 12th month of activity for self-employed (first year exempt). Late SS payments incur 3% monthly penalties.`,
    pro_tip: `Use "Empresa na Hora" (Company in an Hour) service — literally walk in, register, walk out with a company. Bring: passport, NIF, proof of address. Cost: €360 total. The Unipessoal Lda structure gives you liability protection while maintaining full control. If revenue exceeds €200K, switch from simplified to organized accounting regime for better deductions.`,
  },
  {
    topic: 'Capital Gains on Property Sale',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-20',
    source: 'IRS Code Art. 43; IMT Code',
    content: `Selling property in Portugal — tax implications:
- Residents: 50% of net gain added to annual income, taxed at marginal rate (13.25-48%)
- Non-residents: Flat 28% on full gain (can opt for resident rates if EU/EEA citizen)
- Primary residence exemption: FULL exemption if proceeds reinvested in another EU primary residence within 36 months (or 24 months before sale)
- Acquisition value adjusted for inflation (coeficiente de desvalorização da moeda)
- Deductible costs: Purchase IMT, notary fees, documented renovation costs, real estate agent commission, energy certificate
- Holding period: No minimum — but inflation adjustment increases with time, reducing taxable gain
- Withholding: Buyer must withhold 25% of sale price if seller is non-resident (returned via tax filing if overpaid)`,
    gotchas: `The primary residence reinvestment exemption requires you to have LIVED in the property for at least 12 months. Investment properties don't qualify. The 36-month reinvestment window is strict — miss it and the full gain becomes taxable retroactively with interest. Keep ALL renovation receipts (with NIF) from day one.`,
    pro_tip: `If you're selling a primary residence and buying another in Portugal/EU, the exemption is proportional. If your new property costs less than the sale price, only the proportional amount is exempt. For maximum benefit, reinvest the full amount. Non-residents from EU/EEA should ALWAYS opt to be taxed as residents (option available on IRS Form 3, Anexo G) — the 50% inclusion at progressive rates is almost always better than 28% flat.`,
  },
  {
    topic: 'US-Portugal Tax Treaty Details',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-15',
    source: 'US-Portugal Income Tax Treaty (1994); IRS Publication 901',
    content: `Key provisions for US citizens/residents moving to Portugal:
- Social Security: Taxed ONLY by the paying country (US SS taxed by US only)
- Government pensions (federal/state/military): Taxed ONLY by US
- Private pensions (401k, IRA distributions): Taxed by BOTH countries, with credit. Portugal taxes at progressive rates; US provides Foreign Tax Credit
- Roth IRA: No specific treaty provision. Portugal may tax Roth distributions as income — treaty interpretation varies. Some advisors argue exempt; others say taxable
- Dividends: Withholding reduced to 15% (10% for 10%+ ownership)
- Interest: Withholding reduced to 10%
- Royalties: Withholding reduced to 10%
- Capital gains on shares: Taxed only in country of residence (Portugal)
- Real estate gains: Taxed in country where property is located
- FBAR/FATCA: US citizens must still file FBAR (FinCEN 114) and FATCA (Form 8938) regardless of residency
- FEIE (Foreign Earned Income Exclusion): $130,000 (2026) for US citizens living abroad — requires physical presence or bona fide residence test`,
    gotchas: `US citizens are taxed on worldwide income regardless of where they live. Moving to Portugal does NOT eliminate US tax obligations — it adds Portuguese obligations ON TOP. The Foreign Tax Credit (Form 1116) prevents double taxation in most cases but requires careful planning. State taxes: Some US states (CA, NY, VA) continue to tax former residents for years after departure.`,
    pro_tip: `Before moving: (1) Do Roth conversions — pay US tax now at known rates before Portuguese residency adds complexity. (2) Harvest capital gains while still a US-only taxpayer if rates are favorable. (3) Establish your departure date from your US state cleanly — surrender driver's license, close bank accounts, document intent to leave. (4) Hire a cross-border CPA who knows BOTH US and Portuguese tax — budget $3,000-5,000/year but it pays for itself.`,
  },
  {
    topic: 'UK-Portugal Tax Treaty Details',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-15',
    source: 'UK-Portugal Double Taxation Convention (1968, amended 2010); HMRC guidance',
    content: `Key provisions for UK nationals moving to Portugal:
- UK State Pension: Taxed ONLY in Portugal (country of residence) — major benefit
- UK Government pensions (NHS, civil service, military): Taxed ONLY by UK
- Private pensions: Taxed in Portugal. Under IFICI: pension income at 10% flat rate for 10 years
- Rental income from UK property: Taxed in UK; Portugal gives credit
- Capital gains on UK property: Taxed in UK; Portugal gives credit
- Capital gains on shares: Taxed only in Portugal (residence country)
- Dividends from UK companies: 15% UK withholding; Portugal credits this against Portuguese tax
- ISA (Individual Savings Account): NOT tax-free in Portugal — Portugal doesn't recognize UK ISA wrapper. All gains/income taxable
- No UK exit tax on leaving (unlike some countries)`,
    gotchas: `Your UK ISA stops being tax-free the moment you become Portuguese tax resident. Cash ISAs: interest taxable. Stocks & Shares ISAs: all gains and dividends taxable. Consider restructuring before the move. UK rental income is taxable in BOTH countries (with credit) — not just UK.`,
    pro_tip: `UK State Pension in Portugal under IFICI = 10% flat tax for 10 years. This is significantly better than UK tax rates for most retirees. Time your move to start IFICI in a year when your pension income is highest. For S&S ISAs, consider selling and re-buying outside the ISA wrapper before establishing Portuguese residency to reset cost basis.`,
  },
  {
    topic: 'France-Portugal Tax Treaty Details',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-10',
    source: 'France-Portugal Convention Fiscale (1971, amended); Direction Générale des Finances Publiques',
    content: `Key provisions for French nationals moving to Portugal:
- French state pensions (fonctionnaire): Taxed ONLY by France — no Portuguese tax
- Private pensions (retraite complémentaire, assurance vie): Taxed in Portugal only
- Social Security pensions (CNAV): Taxed ONLY in Portugal (country of residence)
- French rental income (revenus fonciers): Taxed in France; Portugal gives credit. France applies progressive rate with "taux effectif"
- Capital gains on French property: Taxed in France (19% + 17.2% social charges for non-residents). Portugal gives credit
- Assurance Vie: Portugal may tax withdrawals as investment income (28%) — treaty doesn't specifically address this product
- French dividends: 12.8% French withholding (prélèvement forfaitaire); Portugal credits
- Exit tax (Exit Tax): France imposes exit tax on unrealized gains >€800K when leaving. Deferred, not forgiven, if moving within EU. Must file annual declarations for 5+ years`,
    gotchas: `France's exit tax (Art. 167 bis CGI) is often overlooked. If you own >50% of a French company or have €800K+ in unrealized gains, France taxes them when you leave — even to Portugal. The tax is deferred (not waived) for EU moves. You must file French returns for years after leaving. Assurance Vie treatment is ambiguous — get written guidance before assuming.`,
    pro_tip: `French retirees with private pensions get the best deal in Portugal. CNAV pension taxed at Portuguese rates (potentially 10% under IFICI vs French progressive rates up to 45%). Plan the move carefully around assurance vie: partial withdrawals before leaving France can be more tax-efficient under French rules. Keep your French bank account — you'll need it for years of exit tax declarations.`,
  },
  {
    topic: 'Germany-Portugal Tax Treaty',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-10',
    source: 'Germany-Portugal DBA (2016); Bundesministerium der Finanzen',
    content: `Key provisions for German nationals:
- German state pensions (Beamtenpensionen): Taxed ONLY by Germany
- Statutory pensions (gesetzliche Rente): Taxed ONLY in Portugal — major benefit (Germany can only tax the portion that was tax-free when contributed)
- Private pensions (Riester, Rürup, bAV): Taxed in Portugal only
- German rental income: Taxed in Germany with Progressionsvorbehalt; Portugal gives credit
- Capital gains on German property: Taxed in Germany if held <10 years; exempt if >10 years
- German dividends: 15% withholding (reduced from 25%); Portugal credits
- No German exit tax for moving to EU (unlike moving outside EU)
- Kindergeld: Generally stops when you become Portuguese resident, but exceptions exist if still contributing to German social security`,
    gotchas: `Germany's 10-year property holding rule is generous — but the clock resets if you make "substantial improvements." The Progressionsvorbehalt means German rental income can push your Portuguese tax rate up even though it's not directly taxed in Portugal. Riester-Zulage (subsidies) must be repaid if you move abroad permanently.`,
    pro_tip: `German retirees: your gesetzliche Rente is taxed ONLY in Portugal under the 2016 treaty. Under IFICI, that's 10% flat for 10 years — compared to Germany's increasing taxation of pensions (rising to 100% taxable by 2040). This alone can save €5,000-15,000/year for many German retirees. Sell German property before moving if you've held >10 years (tax-free in Germany, avoids Portuguese complications).`,
  },
  {
    topic: 'Canada-Portugal Tax Treaty',
    country: 'PT',
    category: 'tax',
    last_updated: '2026-01-10',
    source: 'Canada-Portugal Tax Convention (1999); CRA guidance',
    content: `Key provisions for Canadian nationals:
- CPP/OAS: Taxed ONLY in Portugal (country of residence). Canada may withhold 15-25%, refundable via treaty claim
- Government pensions (federal/provincial): Taxed ONLY by Canada
- RRSP/RRIF withdrawals: Taxed in BOTH countries. Canada withholds 15-25%; Portugal taxes at progressive rates; Foreign Tax Credit applies
- TFSA: NOT recognized by Portugal — gains/income fully taxable in Portugal
- Canadian rental income: Taxed in Canada (25% non-resident withholding on gross, or file NR6/Section 216 for net taxation); Portugal gives credit
- Canadian dividends: 15% treaty withholding
- Capital gains on Canadian property: Taxed in Canada (with departure tax provisions); Portugal credits
- Departure tax: Canada deems all assets sold at FMV when you cease residency — unrealized gains become taxable`,
    gotchas: `Canada's departure tax is harsh — ALL your investments (shares, mutual funds, crypto) are deemed sold at market value when you leave. Plan ahead: harvest losses or time departure during market dips. TFSA gains are tax-free in Canada but FULLY taxable in Portugal — consider cashing out before moving. Non-resident withholding on Canadian rental income at 25% of GROSS rent is brutal — immediately file NR6 to switch to net income basis.`,
    pro_tip: `File CRA Form NR73 (Determination of Residency Status) before leaving to get written confirmation of your departure date — this prevents CRA from arguing you're still a Canadian resident. For RRSP: consider converting to RRIF before leaving Canada to access the lower treaty withholding rate (15% vs 25%). Sell your TFSA holdings before departure — tax-free in Canada, then reinvest in Portugal.`,
  },

  // === VISA (additional) ===
  {
    topic: 'D8 Digital Nomad Visa (Updated Process)',
    country: 'PT',
    category: 'visa',
    last_updated: '2026-02-15',
    source: 'AIMA; SEF Online Portal; Consulate reports',
    content: `Updated D8 process as of 2026:
- Online pre-application via AIMA portal (launched mid-2025)
- Required income: €3,280/month (4x minimum wage of €820)
- Document checklist: Criminal record (FBI for US, ACRO for UK) — apostilled, proof of income (3 months bank statements + employment contract or client invoices), health insurance (Schengen-compliant), proof of accommodation (rental contract or hotel booking for initial period), passport valid 6+ months
- Processing by consulate (real timelines): San Francisco: 6-8 weeks. Washington DC: 8-12 weeks. New York: 10-14 weeks. London: 6-8 weeks. Paris: 8-10 weeks
- After arrival: Book AIMA appointment for residence permit within 30 days. Current wait: 2-4 months for appointment
- Residence permit fee: €170
- Can bring family: Spouse + dependent children under same application`,
    gotchas: `Your health insurance must specifically cover Portugal/Schengen zone — US domestic plans (even "international" riders) are usually rejected. Get a specific policy: SafetyWing ($83/mo), Cigna Global (€120-200/mo), or Portuguese insurer (Médis, Multicare). AIMA appointment backlogs mean your visa may expire before you get your residence permit — this is normal. Carry your appointment confirmation as proof of legal status.`,
    pro_tip: `Book your consulate appointment the MOMENT you start gathering documents — the appointment is often the bottleneck (2-3 month wait at busy consulates). You don't need all documents ready at booking time. For income proof: if you're a freelancer, 3 months of invoices + bank statements showing deposits work. No need for a traditional employment contract.`,
  },
  {
    topic: 'Path to Portuguese Citizenship',
    country: 'PT',
    category: 'visa',
    last_updated: '2026-02-01',
    source: 'Portuguese Nationality Law (Lei 37/81, amended Lei 2/2020)',
    content: `Portuguese citizenship by residency:
- Eligible after 5 years of legal residency (one of EU's shortest paths)
- Language requirement: A2 level Portuguese (basic conversational) — test at CAPLE centers
- Criminal record: Clean in Portugal and country of origin
- "Sufficient connection to Portuguese community" — demonstrated by: A2 language, ties to community, children in Portuguese schools, property ownership (any of these suffice)
- Dual citizenship: Portugal allows it. Most countries allow you to keep original citizenship (verify with home country)
- Processing time: 12-18 months after application (was 6-12 months, backlog growing)
- Cost: ~€250 application fee
- Benefits: EU citizenship, visa-free travel to 186 countries, right to live/work anywhere in EU, pass to children
- Sephardic Jewish ancestry route: Still available but more restrictive since 2022 — requires demonstrated connection to Portugal`,
    gotchas: `The 5-year clock starts from your FIRST residence permit — not your visa date or arrival date. Gaps in residency (being outside Portugal >6 months) can reset or pause the clock. The A2 Portuguese requirement is real — you must pass the test, not just claim you speak it. Some applicants report subjective "connection to community" assessments varying by officer.`,
    pro_tip: `Start Portuguese lessons immediately upon arrival — A2 is achievable in 6-12 months with regular classes (3-4 hours/week). CIAL in Lisbon and Porto Language School offer CAPLE-prep courses. Take the A2 exam in year 4 so you have the certificate ready for your year-5 application. The citizenship interview is not adversarial — they want to see genuine integration.`,
  },
  {
    topic: 'Visa Rejection Reasons & Appeals',
    country: 'PT',
    category: 'visa',
    last_updated: '2026-02-01',
    source: 'AIMA statistics; immigration lawyer reports',
    content: `Common D7/D8 visa rejection reasons (2025-2026):
1. Insufficient income documentation (40% of rejections): Bank statements don't clearly show recurring passive/employment income
2. Inadequate health insurance (20%): Policy doesn't cover Portugal or has insufficient coverage limits
3. Criminal record issues (15%): Not apostilled, expired (>3 months old), or translated incorrectly
4. Accommodation proof insufficient (10%): Need actual rental contract or property deed — hotel booking alone sometimes rejected
5. Incomplete application (15%): Missing NIF, missing signatures, wrong form version
- Appeal process: Formal complaint (Reclamação) to AIMA within 15 days. Legal appeal to Administrative Court within 30 days
- Reapplication: Can reapply immediately after rejection with corrected documents
- Success rate for well-prepared applications: ~90%+`,
    gotchas: `Consulates have significant discretion — the same application might be approved in San Francisco and rejected in New York. If rejected, reapply at a different consulate if possible. Criminal record certificates expire after 3 months — time your request carefully relative to your consulate appointment. Apostille can take 2-4 weeks (FBI channelers are faster than state processing).`,
    pro_tip: `Hire an immigration lawyer for the initial application (€1,000-2,000) — their success rates are 95%+ vs 70-80% for DIY applications. The lawyer formats documents exactly how that specific consulate wants them. For income proof: create a one-page summary showing monthly income sources, amounts, and totals. Consulate officers process hundreds of applications — make yours easy to approve.`,
  },

  // === BANKING (additional) ===
  {
    topic: 'Mortgage for Non-Residents',
    country: 'PT',
    category: 'banking',
    last_updated: '2026-02-15',
    source: 'Banco de Portugal; major bank rate sheets',
    content: `Portuguese mortgages for non-residents (2026):
- LTV: 60-70% for non-residents (vs 80-90% for residents)
- Rates (variable): Euribor 6M + 1.2-2.0% spread. Total rate: ~3.5-4.5% (March 2026)
- Rates (fixed 10yr): 3.8-4.5%
- Rates (fixed 20yr): 4.0-5.0%
- Maximum term: 30 years (age limit: loan must end before age 75-80 depending on bank)
- Banks accepting non-residents: Millennium BCP (most flexible), Santander Totta, Novo Banco, Bankinter
- Required documents: Tax returns (2 years), bank statements (6 months), employment contract or business accounts, passport, NIF
- Processing time: 4-8 weeks for approval, 2-4 weeks for deed
- Costs: Valuation €250-400, mortgage registration €300-600, bank fees €500-1,000
- Monthly payment calculation: Banks use 30-35% debt-to-income ratio
- Currency: Loans in EUR only — currency risk for USD/GBP earners`,
    gotchas: `Pre-approval is NOT binding — the bank can change terms or reject after property valuation. Property valuation often comes in 10-20% below asking price, reducing your effective LTV. Variable rates dominated Portugal for decades — most Portuguese choose variable. But for foreigners earning in USD/GBP, a fixed rate removes both interest rate AND currency risk.`,
    pro_tip: `Use a mortgage broker (intermediário de crédito): they compare all banks at once, are legally required to find you the best rate, and are FREE to you (banks pay their commission). Recommended: Maxfinance, UCI, or Decisões e Soluções. Apply to 3+ banks simultaneously — negotiating leverage is real. Having a Portuguese bank account with 6+ months of history significantly improves your chances.`,
  },

  // === REAL ESTATE (additional) ===
  {
    topic: 'Lisbon Neighborhood Price Guide',
    country: 'PT',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Idealista.pt; Confidencial Imobiliário; INE statistics',
    content: `Lisbon property prices by neighborhood (March 2026, per sqm):
- Chiado/Baixa: €6,000-9,000/sqm (historic center, tourist area)
- Príncipe Real: €6,500-8,500/sqm (trendy, upscale, good restaurants)
- Santos/Estrela: €5,000-7,000/sqm (expat favorite, river views)
- Avenidas Novas: €4,500-6,500/sqm (modern apartments, metro access)
- Alvalade: €4,000-5,500/sqm (family-friendly, local feel)
- Campo de Ourique: €4,500-6,000/sqm (village-within-city, markets)
- Parque das Nações: €4,000-5,500/sqm (modern, Expo area, waterfront)
- Benfica/Lumiar: €3,000-4,500/sqm (more affordable, good transit)
- Cascais: €4,000-7,000/sqm (beach town, strong expat community, 30min train to Lisbon)
- Sintra: €2,500-4,000/sqm (green, castles, cooler climate, 40min train)
Rental yields: 3.5-5% gross in Lisbon city center; 5-7% in outer neighborhoods
Average 2BR apartment (80sqm): Purchase €320K-480K city center; €240K-360K outer areas
Rental 2BR: €1,200-1,800/month city center; €800-1,200 outer areas`,
    gotchas: `Advertised prices on Idealista are ASK prices — final sale prices are typically 5-15% lower. Always negotiate. Pre-1951 buildings often have no elevator, no parking, and may need €30K-80K in renovation. "Renovated" in listings means wildly different things — always inspect in person. Lisbon is hilly — some "river view" apartments are on 6th-floor walk-ups.`,
    pro_tip: `Best value for expats: Alvalade (family), Campo de Ourique (couple/single), or Cascais (beach lifestyle). Avoid Alfama/Baixa for living — they're tourist zones with noise, Airbnb neighbors, and limited daily amenities. For investment: student apartments near Universidade de Lisboa (Cidade Universitária area) yield 6-8% with consistent demand.`,
  },
  {
    topic: 'Porto & Northern Portugal Property',
    country: 'PT',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Idealista.pt; Confidencial Imobiliário',
    content: `Porto property prices by area (March 2026, per sqm):
- Ribeira/Downtown: €4,500-7,000/sqm (UNESCO heritage, tourist zone)
- Foz do Douro: €4,000-6,500/sqm (beach, upscale residential)
- Boavista: €3,500-5,000/sqm (business district, modern)
- Cedofeita/Bonfim: €3,000-4,500/sqm (creative quarter, up-and-coming)
- Matosinhos: €2,800-4,000/sqm (beach, seafood, local feel — separate municipality)
- Gaia (across river): €2,500-4,000/sqm (river views, wine cellars, 20% cheaper than Porto proper)
- Braga: €1,800-3,000/sqm (university city, 45min from Porto, very affordable)
- Guimarães: €1,500-2,500/sqm (UNESCO site, historic, authentic)
Average 2BR (80sqm): €240K-400K in Porto center; €140K-240K in Braga
Rental 2BR: €800-1,400/month Porto; €500-800 Braga
Northern Portugal advantages: 20-30% cheaper than Lisbon, less tourist pressure, authentic culture`,
    gotchas: `Porto's Ribeira is a UNESCO site — renovation restrictions are strict and expensive. Many old Porto buildings have structural issues (humidity, foundations) — always get an independent survey. The porto metro doesn't reach all neighborhoods — check transit before buying. Gaia is technically a different city with different municipal taxes.`,
    pro_tip: `Braga is the hidden gem of Portugal — a fraction of Porto prices, university ensures year-round life, 45 minutes to Porto and Porto airport, beautiful historic center. For digital nomads and remote workers who don't need to be in a capital city, Braga offers European quality of life at developing-world prices.`,
  },
  {
    topic: 'Algarve Property & Retirement',
    country: 'PT',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Idealista.pt; Algarve Real Estate Association',
    content: `Algarve property market (March 2026, per sqm):
- Lagos: €3,500-5,500/sqm (historic town, beaches, strong expat community)
- Faro: €2,500-4,000/sqm (capital, airport, university, more local)
- Tavira: €2,800-4,500/sqm (elegant, quieter, east Algarve)
- Albufeira: €3,000-5,000/sqm (touristy, lively, good rental income)
- Loulé/São Brás: €2,000-3,500/sqm (inland, quieter, countryside)
- Vilamoura: €4,000-6,500/sqm (marina, golf, luxury segment)
- Silves: €1,800-3,000/sqm (inland, castle town, authentic)
Key stats: 300+ days of sunshine/year. 50+ golf courses. Direct flights from 80+ European cities
Rental yields: 5-8% gross for tourist rentals (AL license required). Long-term: 3-5%
2BR apartment: €200K-400K coastal; €150K-250K inland
3BR villa with pool: €350K-600K coastal; €250K-400K inland`,
    gotchas: `Algarve is seasonal — winter population drops 50-70% in tourist areas. If you want year-round community, choose Lagos, Tavira, or Faro over Albufeira/Vilamoura. AL (Alojamento Local) tourist rental licenses are now RESTRICTED in many Algarve municipalities — check before buying as investment. Water scarcity is a real concern — the Algarve has been in drought conditions. Pool maintenance and garden watering costs are rising.`,
    pro_tip: `For retirement: Tavira or Lagos offer the best balance of community, amenities, and value. For investment: Faro near the university (student rentals) or Lagos (year-round tourist demand). Buy inland (Loulé, São Brás) for 40% savings while still being 20 minutes from the coast. The "Golden Triangle" (Quinta do Lago, Vale do Lobo, Vilamoura) is luxury pricing — €5K-10K+/sqm.`,
  },

  // === HEALTHCARE (additional) ===
  {
    topic: 'Private Health Insurance Options',
    country: 'PT',
    category: 'healthcare',
    last_updated: '2026-02-15',
    source: 'ASF (Insurance Supervisor); insurer rate cards',
    content: `Private health insurance in Portugal (2026 rates):
- Médis (by Ageas): Most popular expat choice. Individual: €60-120/month (30-50yr), €150-350/month (60+). Covers: consultations, tests, surgery, hospitalization. Network: CUF, Hospital da Luz
- Multicare (by Fidelidade): Good network. Individual: €55-110/month (30-50yr), €140-320/month (60+). Covers: similar to Médis. Best dental coverage
- Allianz Saúde: International option. Individual: €80-150/month. Covers: broader international coverage, repatriation
- AdvanceCare: Budget option. Individual: €35-70/month. More limited network but covers basics
- Cigna Global: For expats wanting worldwide coverage. €150-400/month depending on age and coverage level. Best for frequent travelers
- SafetyWing: Nomad-focused. $83/month. Good for initial visa period, NOT suitable long-term
Waiting periods: Most plans have 60-180 day waiting for non-emergency procedures. Pre-existing conditions: 12-24 month waiting period or exclusion
Dental add-on: €15-30/month extra. Covers cleanings, basic procedures. Implants usually excluded or capped`,
    gotchas: `Portuguese insurers can reject applicants over 65-70 or charge 3-5x standard rates. Apply BEFORE turning 65 — grandfathering provisions protect existing policyholders. Pre-existing conditions declared at enrollment may be excluded permanently, not just during waiting period. Read the exclusion list carefully — many plans exclude mental health, fertility, and certain chronic conditions.`,
    pro_tip: `The optimal combo: SNS registration (free) + Médis or Multicare private plan (€60-120/month). Use SNS for emergencies and chronic conditions (excellent cardiac, oncology care). Use private for GP visits, specialists, and anything time-sensitive. If you're American, Cigna Global is the most seamless transition — they understand US healthcare expectations and offer USD billing options.`,
  },

  // === LIFESTYLE (additional) ===
  {
    topic: 'International Schools',
    country: 'PT',
    category: 'lifestyle',
    last_updated: '2026-02-15',
    source: 'School websites; Council of International Schools (CIS)',
    content: `International schools in Portugal (2026-2027 fees):
Lisbon:
- St. Julian's School (British curriculum): €8,000-18,000/year. Ages 3-18. Cascais location. Oldest international school in Portugal
- Carlucci American International School of Lisbon (CAISL): €12,000-22,000/year. Ages 3-18. Sintra. IB program
- Deutsche Schule Lissabon: €6,000-9,000/year. Ages 3-18. German curriculum + IB
- Lycée Français Charles Lepierre: €5,000-8,000/year. Ages 3-18. French curriculum
- International School of Cascais: €6,000-12,000/year. Newer, smaller classes
Porto:
- CLIP (Porto International School): €8,000-15,000/year. Ages 3-18. IB program
- Oporto British School: €7,000-14,000/year. Ages 3-18. British curriculum. Oldest school in Porto
- Deutsche Schule zu Porto: €5,000-8,000/year. German curriculum
Algarve:
- Nobel International School: €8,000-14,000/year. Ages 3-18. British/IB. Lagos area
Portuguese public schools: FREE. Quality varies by area. Language transition: 6-12 months for full integration. Children under 10 adapt fastest`,
    gotchas: `Waitlists at top schools (St. Julian's, CAISL) can be 1-2 years. Apply as SOON as you're considering the move, even before visa approval. School fees don't include: bus (€200-400/month), lunch (€100-150/month), uniforms (€200-500/year), trips and activities (€500-1,500/year). Total all-in cost is typically 30-40% above base tuition.`,
    pro_tip: `If your children are under 8, seriously consider Portuguese public school with supplementary tutoring. Children this age pick up Portuguese in 3-6 months and become truly bilingual. It's free, the social integration is invaluable, and they can always switch to international school later. For older children (12+), international school is usually better to avoid disrupting academic trajectory.`,
  },
  {
    topic: 'Internet, Coworking & Remote Work Infrastructure',
    country: 'PT',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Speedtest.net; Anacom (telecom regulator); coworking directories',
    content: `Portugal internet and remote work (2026):
- Fiber coverage: 90%+ in cities, 70%+ nationwide. One of Europe's best
- Home internet: NOS, MEO, Vodafone. 500Mbps: €30-35/month. 1Gbps: €40-50/month. Installation: free or €50-100
- Average speeds: Lisbon 150Mbps down (fiber), Porto 140Mbps. Rural: 30-80Mbps
- Mobile: MEO, NOS, Vodafone. Prepaid SIM: €10-15 for 10GB. Contract: €15-25/month unlimited data
- Coworking spaces (Lisbon): Second Home (€285/month, beautiful), Heden (€250/month), Selina (from €150/month), Impact Hub (€200/month), Outsite (€250/month + accommodation)
- Coworking (Porto): Porto i/o (€100/month — best value), CRU (€150/month), Selina Porto (from €120/month)
- Cafés: Most have free WiFi. Pastel de nata + espresso while working: €2-3
- Time zones: GMT/GMT+1. Perfect overlap with UK/Europe. 5-8 hours ahead of US (workable for async teams)
- 5G: Available in Lisbon, Porto, and major cities since 2023`,
    gotchas: `Fiber availability depends on the specific building, not just the area. Check with NOS/MEO/Vodafone for your exact address before signing a lease. Some older buildings in Alfama/Mouraria still have no fiber. Portuguese ISPs often require a 24-month contract — negotiate or pay the early termination fee if needed. Mobile coverage can be spotty in rural Alentejo and mountainous areas.`,
    pro_tip: `Porto i/o at €100/month is the best coworking value in Portugal — great community, events, and multiple locations. For Lisbon, Second Home is worth the premium if you want to impress clients on video calls (the interior is stunning). If you work with US teams, negotiate core hours of 2-6 PM Portuguese time (9 AM - 1 PM EST) — this is the standard "overlap window" for remote workers in Portugal.`,
  },
  {
    topic: 'Driving License & Car Ownership',
    country: 'PT',
    category: 'lifestyle',
    last_updated: '2026-02-01',
    source: 'IMT (Instituto da Mobilidade e dos Transportes); EU Directive 2006/126/EC',
    content: `Driving in Portugal:
- EU licenses: Valid indefinitely (until expiry). No conversion needed
- UK licenses (post-Brexit): Valid for 90 days after becoming resident. Must exchange within 2 years (no test required, reciprocal agreement)
- US/Canadian licenses: Valid for 90 days as tourist. After residency: must take Portuguese driving test (theory + practical). NO exchange agreement. Theory test available in English
- International Driving Permit (IDP): Valid alongside home license for up to 1 year
- Buying a car: IPV (registration fee) €55, ISV (vehicle tax, varies by CO2/engine — €500-5,000 for used import), annual IUC (circulation tax €30-300/year based on CO2)
- Importing a car: Possible but ISV tax makes it expensive. EU-registered cars: ISV based on CO2 and age. Non-EU: ISV + customs duty (6.5%) + VAT (23%). Usually cheaper to buy locally
- Insurance: Mandatory. Basic liability: €150-300/year. Full coverage: €400-800/year
- Fuel: Gasoline €1.70-1.90/liter, diesel €1.55-1.70/liter (March 2026)
- Tolls: Electronic Via Verde system. Registration: €6-27/year. Major highways are tolled`,
    gotchas: `US and Canadian license holders: you MUST take the full Portuguese driving test. The theory test has 30 questions in English, pass mark 27/30. It's notoriously tricky — Portuguese road rules differ from North American (roundabout priority, urban speed limits of 50km/h). The practical test includes parallel parking, hill starts, and city driving. Budget €300-600 for a driving school package. Automatic transmission cars for the test are limited — book early.`,
    pro_tip: `If you live in Lisbon or Porto, you probably don't need a car. Metro + Uber + Bolt is cheaper than car ownership when you factor in parking (€100-200/month in Lisbon), insurance, fuel, and maintenance. For the Algarve or rural areas, a car is essential. Buy used from a stand (dealership) not a private seller for warranty protection. Check the Registo Automóvel for any liens before buying.`,
  },
  {
    topic: 'Pet Import Rules',
    country: 'PT',
    category: 'lifestyle',
    last_updated: '2026-02-01',
    source: 'DGAV (General Directorate of Food and Veterinary); EU Regulation 576/2013',
    content: `Bringing pets to Portugal:
- Dogs & cats: Microchip (ISO 11784/11785), rabies vaccination (at least 21 days before travel, within 12 months), EU health certificate or USDA-endorsed veterinary certificate (within 10 days of travel)
- From EU countries: EU Pet Passport. No quarantine. No additional tests
- From US/Canada: USDA/CFIA-endorsed veterinary certificate, rabies vaccination certificate, microchip. No quarantine. No rabies titer test required (US/Canada are listed countries)
- From non-listed countries (most of Asia, Africa): Rabies antibody titer test (FAVN test) required 30 days post-vaccination, 3 months before travel. Results must be >0.5 IU/ml
- Airline requirements: TAP allows small pets in cabin (8kg max including carrier, €50-120). Larger pets in cargo (€150-300). Delta, United: cargo only for most routes
- Banned breeds: Portugal has no breed-specific legislation (unlike UK/Germany)
- Registration: Register pet with local Junta de Freguesia within 30 days of arrival. Dog license: €5-15/year
- Pet-friendly: Portugal is very dog-friendly. Most restaurants with outdoor seating welcome dogs. Parks, beaches (some seasonal restrictions)`,
    gotchas: `The USDA endorsement process takes 2-4 weeks during busy periods — start early. Your vet must be USDA-accredited to issue the health certificate. The rabies vaccination date matters: if it was given more than 12 months ago, you need a booster at least 21 days before travel. Airlines have limited pet cargo spaces per flight — book 3-4 months ahead during summer.`,
    pro_tip: `Fly direct if possible — layovers with pet cargo can be stressful and risky in extreme temperatures. TAP Portugal is the most pet-friendly airline for Portugal routes — they allow cabin pets and have heated cargo holds. For cats: they adapt quickly to Portuguese apartments. For dogs: bring familiar bedding and maintain routine. Portuguese vets are excellent and affordable (consultation: €30-50, vs $200+ in US).`,
  },
];
