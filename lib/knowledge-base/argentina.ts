import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const ARGENTINA_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Income Tax — Progressive Rates & Worldwide Taxation',
    country: 'AR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'AFIP (Administración Federal de Ingresos Públicos); KPMG Argentina Tax Guide 2026',
    content: `Argentina personal income tax (Impuesto a las Ganancias) 2026:
Progressive rates — 9 brackets:
- Up to ARS 1,520,372 (~$1,050): 5%
- ARS 1,520,372–3,040,744 (~$1,050–2,100): 9%
- ARS 3,040,744–4,561,116 (~$2,100–3,150): 12%
- ARS 4,561,116–6,081,488 (~$3,150–4,200): 15%
- ARS 6,081,488–7,601,860 (~$4,200–5,250): 19%
- ARS 7,601,860–9,122,232 (~$5,250–6,300): 23%
- ARS 9,122,232–15,203,720 (~$6,300–10,500): 27%
- ARS 15,203,720–46,181,290 (~$10,500–31,900): 31%
- Above ARS 46,181,290 (~$31,900): 35%
Exchange rate reference: ~ARS 1,450/USD (March 2026 average)
Tax residency: 183+ days in Argentina, or Argentine domicile. Also triggered by employment or principal business in Argentina
Worldwide income: Residents taxed on worldwide income. Non-residents: only Argentine-source income at progressive rates
Filing: Annual (January–June for prior year). Online through AFIP system
Deductions: Personal allowances, mortgage interest (on Argentine property), medical expenses, charitable contributions
Employer withholdings: Monthly advance payments through payroll (automatic withholding)`,
    gotchas: `The 35% top rate kicks in at relatively low income levels (~$32K USD). Argentina taxes worldwide income from day 1 of residency — no grace period or territorial exemption. AFIP has extensive information-sharing agreements and can track foreign income. The peso/dollar exchange rate fluctuation means your tax burden in USD terms varies significantly. File in ARS, but if you earn in USD, currency volatility affects effective rates. Social security contributions are separate and mandatory.`,
    pro_tip: `Argentina's tax rates look high but remember the context: extremely low cost of living means high purchasing power. The ARS 1.52M first bracket (~$1,050) exemption covers basic living costs. For expats: keep detailed records of foreign tax paid for potential credits. Consider the "investment visa" tax benefits (see separate entry) if you qualify. Exit planning: Argentina has exit tax rules for residents who leave — consult a local tax advisor before departure.`,
  },
  {
    topic: 'Investment Visa Tax Benefits & RIGI Program',
    country: 'AR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'RIGI Law (Régimen de Incentivo para Grandes Inversiones); Ministry of Economy 2025-2026 reforms',
    content: `NEW 2025-2026: Argentina Investment Tax Incentives
Investment Visa Holder Benefits (launched 2025):
- ZERO tax on foreign-source income for 15 years from visa approval date
- Capital gains from foreign investments: EXEMPT for 15 years
- Dividend income from abroad: EXEMPT for 15 years
- Only Argentine-source income taxed at standard progressive rates (5-35%)
- Minimum investment: $500,000 USD in approved sectors (agribusiness, renewable energy, technology, tourism infrastructure, mining)
- Must maintain investment and business operations for full 15-year benefit
RIGI (Régimen de Incentivo para Grandes Inversiones) — Large Investment Regime:
- Minimum investment: $200 million USD
- Benefits: 30 years of legal and tax stability, accelerated depreciation, currency stability guarantees
- Corporate tax: reduced rates for qualifying investments
- Target: mining, energy, forestry, technology, infrastructure projects
Regular Wealth Tax (Impuesto a los Bienes Personales):
- Residents: Progressive 0.5-1.25% on worldwide assets above ARS 27 million (~$18,600)
- Non-residents: Only on Argentine assets above threshold
- Primary residence: 50% reduction in taxable value (up to ARS 108 million)
- Investment visa holders: Foreign assets EXEMPT from wealth tax for 15 years`,
    gotchas: `The investment visa tax benefits are REAL and unprecedented in Argentina — 15 years of foreign income tax exemption. But the $500K minimum investment must be in an ACTIVE business (not just parking money). You must maintain the investment and business operations for the full 15-year period. If you sell/close the business early: benefits end immediately. RIGI is for mega-projects only ($200M+). The wealth tax exemption for investment visa holders is a massive benefit for high-net-worth individuals.`,
    pro_tip: `This is Argentina's most aggressive attempt to attract foreign capital ever. The investment visa tax benefits essentially make Argentina a territorial tax country for foreign income — better than many traditional offshore jurisdictions. Target sectors are strategic: renewable energy and agribusiness align with Argentina's natural advantages. For family offices: the wealth tax exemption on foreign assets for 15 years is exceptional. Structure your affairs properly before applying — once you get the visa, you're locked into the business investment.`,
  },
  {
    topic: 'Social Security & Exit Tax Planning',
    country: 'AR',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'ANSES (Administración Nacional de la Seguridad Social); AFIP exit procedures',
    content: `Argentina Social Security (Seguridad Social) contributions:
Employee contributions (mandatory):
- Pension (jubilación): 11% of salary
- Healthcare (obra social): 3% of salary  
- Unemployment insurance: 1.5% of salary (capped)
- Family allowances: 1.5% of salary (capped)
- Total employee: ~17% of gross salary
Employer contributions: ~23-27% of payroll (pension, healthcare, work risk insurance, unemployment, family allowances)
Maximum salary for contributions: ~ARS 2,300,000/month (~$1,590) — above this, contributions are capped
Self-employed (monotributo): Simplified regime with fixed monthly payments based on income category (ARS 15,000-120,000/month, $10-83)
International totalization: Argentina has limited agreements (Spain, Italy) — verify coverage to avoid double taxation
Exit tax procedures (for tax residents leaving Argentina):
- Certificado de No Retención: Required for residents moving abroad permanently
- Must file final tax return within 6 months of departure
- AFIP clearance needed to avoid future withholding obligations
- Property ownership: Continuing to own Argentine property may trigger ongoing tax residency
- Professional advice essential — improper exit can result in indefinite tax obligations`,
    gotchas: `Argentina's social security burden is heavy — ~17% employee + ~25% employer = ~40% total. This makes employment expensive and drives many arrangements toward contractor/services structures. The monotributo simplified regime is popular but has strict income limits. Exit tax procedures are frequently overlooked by expats — without proper AFIP clearance, Argentina may continue treating you as a tax resident indefinitely. Property ownership can complicate exit — owning real estate may trigger ongoing obligations.`,
    pro_tip: `For employees: understand your total compensation cost including employer social security contributions. For contractors: monotributo can be very favorable if your income fits the categories. For exit planning: start the process 6-12 months before departure. Work with an Argentine accountant who specializes in expat departures. Consider selling Argentine property before exit to simplify the process. The investment visa foreign income exemption makes Argentina attractive as a new tax residence, but plan your exit from your current residence carefully first.`,
  },

  // === VISA ===
  {
    topic: 'Work Visa & Employment',
    country: 'AR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Argentine labor law; Ministry of Labor; work permit procedures 2025-2026',
    content: `Work and employment visas in Argentina:
Work Visa (Visa de Trabajo):
- Requires job offer from Argentine employer before application
- Employer must demonstrate no suitable Argentine candidate available (labor market test)
- Duration: 1 year initially, renewable with continued employment
- Path to residency: Convert to temporary residency after 2+ years of work authorization
- Salary requirements: Must meet minimum wage standards (~$200/month minimum, typically much higher for skilled positions)
- Processing: 3-6 months from initial application
- Sectors with opportunities: Technology, agriculture, mining, tourism, English teaching
Employment for residents:
- Temporary/permanent residents: Full work authorization without additional permits
- DNI required for formal employment and social security enrollment
- Labor protections: Strong employee rights, difficult to terminate, generous benefits
- Taxes: Income tax withheld from salary + social security contributions (~17% employee, ~25% employer)
- 13th salary (aguinaldo): Mandatory extra month salary paid in two installments (June/December)
- Vacation: 14-35 days annually based on tenure
Digital nomads/remote work:
- No specific work authorization required for foreign employers
- Must pay Argentine income tax if tax resident (183+ days)
- Growing freelancer/contractor economy (especially tech sector)
- Monotributo: Simplified tax regime for independent contractors
- Co-working spaces popular in Buenos Aires: La Maquinita, Area Tres, Hub Porteño`,
    gotchas: `Argentine labor law is extremely employee-friendly — firing costs are high, making employers cautious about hiring. The formal economy has high tax burdens (~40% total employment cost including social security). Many arrangements are structured as contractor relationships to avoid employment obligations. Work visas require employer sponsorship, which many companies avoid due to bureaucracy and cost. Digital nomads can work remotely but must pay taxes if resident >183 days.`,
    pro_tip: `For skilled professionals: Argentina's economic volatility creates opportunities as multinationals struggle to retain talent. Technology sector particularly open to foreign workers. English teachers are in high demand — British/US qualifications valued. For entrepreneurs: consider contractor status initially rather than employment — more flexibility and potentially lower tax burden. Buenos Aires has a thriving startup ecosystem — networking events at Endeavor, NXTP Labs. The monotributo system is freelancer-friendly if your income fits the categories (up to ~$10K/month).`,
  },

  // === VISA (continued) ===
  {
    topic: 'Rentista Visa (Independent Means) & Retirement',
    country: 'AR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Dirección Nacional de Migraciones; Argentine consulate requirements 2025-2026',
    content: `Argentina Rentista Visa (Independent Means/Passive Income):
Income requirement: 5x Argentine minimum wage = ~$1,400-2,000 USD/month in proven passive income
Sources accepted: Pension, social security, investment dividends, rental income, annuities, trust distributions, government benefits
MUST be passive income — salary/employment income doesn't qualify
Documents: Income source verification (pension letters, bank statements, investment account statements — 6 months), clean criminal record (apostilled), birth certificate (apostilled), health certificate, passport (6+ months validity)
Duration: 1 year initially, renewable annually up to 3 years. Permanent residency after demonstrating continued income
Processing: 2-4 months at Argentine consulate (apply before travel). Can also apply in Argentina on tourist visa but must exit and re-enter
Cost: ~$600 USD (consular fees + document preparation)
Bank transfer requirement: Must transfer monthly income to Argentine bank account as proof
Retirement Visa (Pensionado):
Similar to Rentista but specifically for retirees with government or private pension
Same income threshold (~$1,400-2,000/month)
More streamlined process if pension source is government (Social Security, federal/state retirement)
Private pension sources require more documentation but accepted
Family inclusion: Spouse and unmarried children under 21 can be included in application
Path to citizenship: Rentista/Pensionado → 2 years continuous residency → Argentine citizenship (with Spanish language requirement)`,
    gotchas: `The "5x minimum wage" requirement fluctuates with economic changes — verify current amount before applying. Passive income requirement is STRICT — work income or consulting fees don't qualify. You must actually transfer the monthly income to an Argentine bank account, which triggers currency conversion at official rates (not blue dollar rates). The income must be verifiable from the source (not just showing bank balance). Renewals require proving CONTINUED income — if your pension or investments decline, visa may not be renewed.`,
    pro_tip: `Argentina's Rentista requirements are among the most achievable in LATAM. US Social Security (~$1,500-3,000/month for most retirees) easily qualifies. For investment income: dividend-paying stock portfolios or bond ladders work well. Rental property income is accepted but requires more documentation. Open a bank account immediately upon arrival — Banco Galicia and Banco Supervielle are expat-friendly. The path to citizenship (2 years) is among the fastest globally, and Argentina allows dual citizenship.`,
  },
  {
    topic: 'Investment Visa & New Citizenship Program',
    country: 'AR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ministry of Interior; Citizenship by Investment Program (expected launch 2026)',
    content: `Argentina Investment Opportunities (2025-2026):
NEW: Citizenship by Investment Program (launching late 2025/early 2026):
- Investment threshold: $500,000 USD minimum
- Target sectors: Agribusiness, renewable energy, technology, tourism infrastructure, mining
- Benefit: Direct path to Argentine citizenship (not just residency)
- Timeline: 18-24 months from investment to citizenship
- 15-year tax exemption on foreign income included
- Family inclusion: Spouse and children under 21
- Due diligence: Background check, source of funds verification
- Must maintain investment for minimum 5 years post-citizenship
Traditional Investment Residency:
- Real estate investment: No specific minimum but typically $100,000+ to demonstrate financial capacity
- Business investment: Create employment for Argentine citizens, register with AFIP
- Bank deposit: $100,000+ in Argentine bank (frozen for residency period)
- Duration: 1-year temporary residency, renewable. Permanent after 3 years with maintained investment
Mercosur Residency (for qualifying nationalities):
- Citizens of Brazil, Paraguay, Uruguay, Bolivia, Chile, Colombia, Ecuador, Peru: Simplified residency process
- Requirements: Clean criminal record, proof of income/employment
- Processing: 3-6 months, much faster than other nationality tracks
- Benefit: Automatic work authorization throughout Mercosur bloc
- Family: Spouse and children included`,
    gotchas: `The new citizenship by investment program is still developing — final regulations not yet published. Expected launch Q4 2025/Q1 2026. The $500K investment must be ACTIVE business creation (not passive real estate purchase). Traditional investment residency requires maintaining the investment throughout the residency period — selling early ends your status. Mercosur citizens have significant advantages but must still complete full paperwork and background checks.`,
    pro_tip: `Wait for official citizenship program launch if you're considering $500K+ investment — direct citizenship is far more valuable than residency. For traditional routes: real estate investment is most straightforward but offers fewer tax benefits than business investment. Mercosur citizens should prioritize Argentina over other LATAM options — the regional work authorization is unique. Buenos Aires is becoming a tech hub — technology investments may receive favorable government treatment. Partner with local lawyers/business advisors from day 1.`,
  },
  {
    topic: 'DNI Process & Document Requirements',
    country: 'AR',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'RENAPER (Registro Nacional de las Personas); immigration law updates 2025-2026',
    content: `Argentina DNI (National Identity Document) process for foreigners:
Timeline: 2-6 months after residency approval (varies by region and season)
RENAPER appointment required: Book through turnos.renaper.gob.ar or Mi Argentina app
Documents for DNI appointment:
- Temporary residency certificate (Certificado de Residencia Precaria)
- Passport + photocopies
- Proof of address (utility bill, rental contract)
- Birth certificate (apostilled + translated)
- Marriage certificate if spouse included (apostilled + translated)
- Criminal background check from home country (apostilled + translated, must be within 3 months)
Processing phases:
1. Initial residency approval → Precaria certificate (valid for work, banking, temporary ID)
2. RENAPER appointment → Biometric data collection
3. DNI production: 4-8 weeks
4. Collection: Return to RENAPER office or postal delivery
DNI importance: Required for bank accounts, employment, property purchase, voting, travel within Mercosur, access to public healthcare, university enrollment
Renewal: Permanent residents: renew every 15 years. Temporary residents: renew with visa renewal
Address changes: Must update DNI address within 90 days of moving
Lost DNI: Report immediately to police, then RENAPER for replacement (2-4 weeks, ARS 5,000+ fee)`,
    gotchas: `DNI processing is SLOW — 2-6 months is normal, sometimes longer. Buenos Aires and Córdoba: longest waits. Smaller cities: faster processing. RENAPER appointments are limited and fill quickly — book immediately after getting residency approval. All foreign documents must be apostilled AND officially translated in Argentina (expect ARS 15,000-30,000 for translation costs, $10-20). Criminal background checks expire in 3 months — time this carefully. Without DNI: limited banking, no formal employment, no property purchase.`,
    pro_tip: `Start document preparation before arrival: apostille everything in your home country (much cheaper than doing it in Argentina). Use a gestoria (document service) to handle translations and RENAPER appointments — worth the ARS 50,000-100,000 ($35-70) cost. While waiting for DNI: the Precaria certificate works for most purposes including banking and employment. Mendoza and Salta have faster DNI processing than Buenos Aires. Keep photocopies of DNI everywhere — originals are frequently requested. The DNI enables access to Argentina's excellent public university system (free for residents).`,
  },

  // === BANKING ===
  {
    topic: 'Banking & Currency for Expats',
    country: 'AR',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Banco Central de la República Argentina; bank websites; March 2026 rates',
    content: `Argentina banking and currency (2026 update):
Currency rates (March 2026):
- Official rate: ~ARS 1,430-1,450 per USD
- Blue dollar (informal): ~ARS 1,480-1,500 per USD  
- MEP dollar (financial): ~ARS 1,460-1,480 per USD
- Gap between rates: <5% (historically low)
Banking requirements: Argentine DNI for full accounts. Some banks accept Precaria + passport for basic accounts
Digital banks (easier for expats):
- Brubank: Opens with DNI/Precaria. Zero fees. USD deposits allowed. English-friendly app
- Uala: Digital account + prepaid card. Lower requirements. Popular with younger expats
- Mercado Pago: Digital wallet + basic banking. Opens with CUIL/CUIT number
Traditional banks:
- Banco Galicia: Expat-friendly. USD and ARS accounts. International transfers
- Banco Santander: Global bank experience. Premium services for high balances
- Banco Supervielle: Good expat service. Multi-currency accounts
- BBVA: International expertise. Wealth management services
Peso devaluation trends: Controlled depreciation under Milei (~1%/month vs USD in 2025-2026)
Currency controls (cepo): Significantly relaxed but not eliminated. USD purchases: $200/month limit for residents, higher limits for investors
International transfers: Improved under current government. Wise/Western Union available. Banks: $50-100 fees + spread`,
    gotchas: `The gap between official and blue dollar rates has narrowed dramatically under Milei (from 100%+ in 2022-23 to <5% in 2026). This is good for expats using official banking but reduces the "cheap Argentina" arbitrage opportunity. DNI is still required for full banking — expect 2-6 month wait. Currency controls persist: you can't freely buy unlimited USD even with DNI. Peso depreciation continues but at controlled pace (~12-15% annually vs USD).`,
    pro_tip: `The currency situation has stabilized significantly under Milei but remains volatile. Open both peso and USD accounts — peso for daily expenses, USD for savings/major purchases. Brubank and Galicia are the most expat-friendly. Use Wise for international transfers (50-70% cheaper than bank wires). Keep some cash USD for emergencies and blue dollar opportunities. The narrowing exchange rate gap means Argentina is no longer "ultra-cheap" for USD holders but still excellent value.`,
  },
  {
    topic: 'Investment & Financial Services',
    country: 'AR',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'CNV (Comisión Nacional de Valores); Buenos Aires Stock Exchange',
    content: `Argentina investment landscape (2026):
Local investment options:
- MERVAL index: Buenos Aires stock exchange. Blue-chip stocks (YPF, Banco Macro, Mercado Libre)
- CEDEARs: Argentine depositary receipts for US stocks (Apple, Microsoft, etc. traded in ARS)
- Government bonds: USD and ARS denominated. Yields 8-15% but sovereign risk
- Time deposits (plazo fijo): ARS deposits 40-60% annual interest (but peso depreciation)
- UVAs: Inflation-adjusted instruments. Principal + inflation + modest real return
- Crypto: Legal and popular. Exchanges: Bitso, Binance, SatoshiTango
International investing:
- Foreign brokerage accounts: Allowed but subject to AFIP reporting
- Offshore banking: Legal but must be declared. High scrutiny from AFIP
- Investment visa holders: Can freely invest abroad without AFIP complications
Real estate investment:
- Property transactions often in USD cash (despite formal peso requirements)
- Buenos Aires yields: 3-6% rental yield
- Secondary cities: Higher yields (6-9%) but lower liquidity
Inflation hedging:
- USD cash/bank deposits (if accessible)  
- Real estate (historically tracks inflation)
- Stocks (companies with dollar revenues)
- Foreign investments (for eligible investors)
Tax implications: Capital gains on local investments generally taxed at progressive rates. Investment visa holders: foreign gains tax-exempt for 15 years`,
    gotchas: `Argentina's investment environment is improving under Milei but remains complex. High local interest rates (40-60% ARS) look attractive but peso depreciation (12-15% annually) erodes real returns. CEDEARs provide USD exposure but trade at premium to US markets. Crypto is popular as inflation hedge but volatile. Real estate transactions formally in pesos but practically priced in USD. Foreign investment reporting requirements are strict for regular residents.`,
    pro_tip: `For inflation protection: prioritize USD assets, real estate, or foreign investments. Local peso investments only make sense for very short term (< 6 months) liquidity. CEDEARs offer exposure to global stocks without foreign account complications. The investment visa foreign income tax exemption is a game-changer for serious investors. Real estate remains the preferred store of value for wealthy Argentines — follow local money. Crypto adoption is high but use established exchanges and declare properly to AFIP.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Buenos Aires Neighborhood Guide',
    country: 'AR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'TheLatinvestor; Zonaprop; Argenprop; March 2026 pricing',
    content: `Buenos Aires property by neighborhood (March 2026):
Premium neighborhoods:
- Puerto Madero: ARS 9.2M/sqm (~$6,100). Ultra-modern. Waterfront towers. 2BR: $400K-800K. Best infrastructure but tourist-heavy
- Palermo: ARS 5.1M/sqm (~$3,400). Trendy, expat favorite. Palermo Hollywood/Soho for nightlife. 2BR: $250K-500K
- Recoleta: ARS 4.8M/sqm (~$3,200). Elegant, traditional. Museums, cafes. French architecture. 2BR: $230K-450K
- Núñez: ARS 5.0M/sqm (~$3,350). Family-friendly, riverside. River Plate stadium. Quiet, residential. 2BR: $240K-470K
- Belgrano: ARS 4.2M/sqm (~$2,800). Upscale residential. Good schools. Chinatown area. 2BR: $200K-400K
Mid-range options:
- San Telmo: ARS 3.5M/sqm (~$2,330). Historic, bohemian. Sunday antiques market. Tango culture. 2BR: $170K-330K
- Barracas: ARS 2.8M/sqm (~$1,870). Up-and-coming. Art galleries, young professionals. 2BR: $135K-260K
- Villa Crick: ARS 3.2M/sqm (~$2,130). Growing area. Near Palermo but more affordable. 2BR: $155K-300K
Rentals (furnished, 2BR, monthly):
- Puerto Madero: $2,000-3,500
- Palermo/Recoleta: $1,200-2,000  
- Núñez/Belgrano: $1,000-1,800
- San Telmo: $800-1,400
Buenos Aires metro population: 15.5 million. Neighborhood safety varies dramatically — research specific blocks`,
    gotchas: `Buenos Aires real estate prices are quoted in USD but transactions legally occur in pesos at official rate (creating informal USD cash market). Puerto Madero is gorgeous but sterile — lacks neighborhood character. San Telmo is charming but has security concerns after dark. Barracas is gentrifying rapidly but still rough around edges. The subway (Subte) network is limited compared to other major cities — consider proximity to your daily needs. Noise levels are high citywide — invest in good windows.`,
    pro_tip: `Palermo (especially Palermo Hollywood) is the expat sweet spot — walkable, vibrant, safe, great dining scene. Recoleta for European elegance and culture (but quieter). Núñez for families — riverside parks, less touristic, authentic porteño experience. Belgrano offers the best value for families — excellent schools and amenities at reasonable prices. Always visit neighborhoods at different times of day and week before deciding. The rental market strongly favors landlords — expect high deposits and guarantía requirements for long-term leases.`,
  },
  {
    topic: 'Secondary Cities — Mendoza, Bariloche & Salta',
    country: 'AR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'TheLatinvestor; local real estate markets; March 2026 data',
    content: `Argentina secondary cities property (2026):
Mendoza (wine country):
- Average: $1,200/sqm (~ARS 1.75M/sqm)
- City center: $1,500-3,000/sqm. Historic buildings, walkable
- Chacras de Coria: $2,000-4,000/sqm. Upscale suburb, vineyards nearby  
- Godoy Cruz: $1,000-2,000/sqm. Modern developments
- Rentals: $400-800/month (2BR furnished)
- Climate: 4 seasons, dry, 300+ sunny days/year
- Advantages: Wine tourism, Andes proximity, earthquake-resistant construction
Bariloche (Patagonia):
- Average: $1,800-3,500/sqm
- Centro: $2,500-4,000/sqm. Lake views, walkable
- West side (Llao Llao area): $3,000-8,000/sqm. Premium lakefront
- Rentals: $600-1,200/month (2BR). Highly seasonal — summer 2-3x winter rates
- Climate: Alpine, cold winters, mild summers. Ski season June-Sept
- Challenges: Very seasonal economy, expensive for daily goods
Córdoba:
- Average: $1,000-2,500/sqm  
- Nueva Córdoba: $1,500-2,800/sqm. University area, young vibe
- Centro: $800-1,800/sqm. Historic but some areas declining
- Rentals: $350-600/month (2BR)
- Advantages: Major university city, lower cost of living, central location
Salta (northwest):
- Average: $800-1,800/sqm
- Centro histórico: $1,000-2,200/sqm. Colonial architecture
- Modern developments: $1,200-2,500/sqm
- Rentals: $300-550/month (2BR)
- Advantages: Colonial charm, lower costs, gateway to northwest adventures`,
    gotchas: `Secondary cities are 30-60% cheaper than Buenos Aires but with trade-offs: fewer flights, limited services, smaller expat communities. Mendoza earthquakes are real — ensure proper construction standards. Bariloche is tourist-dependent and expensive relative to income levels. Salta can feel isolated — nearest major city is 12+ hours by road. All secondary cities have limited public transport — budget for a car. Internet speeds are generally slower than Buenos Aires.`,
    pro_tip: `Mendoza offers the best combination of lifestyle, cost, and infrastructure for expats — wine culture, great weather, reasonable prices, modern amenities. Bariloche is stunning but very seasonal — consider it for lifestyle/retirement rather than investment. Córdoba is Argentina's second city but often overlooked by expats — university town energy at very affordable prices. For investment: focus on tourist rental potential in Mendoza and Bariloche, long-term rentals to locals in Córdoba. Each city has distinct personality — visit in different seasons before deciding.`,
  },
  {
    topic: 'Rental Market & Garantía System',
    country: 'AR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Argentine rental law; real estate agencies; expat rental experiences 2025-2026',
    content: `Argentina rental system for expats:
Rental types:
1. Temporary rentals (alquiler temporario): 1-12 months, furnished, higher rates, USD often accepted informally
2. Traditional rentals (contratos de 2-3 años): 2-3 year contracts, unfurnished, peso contracts with inflation adjustment, requires garantía
Garantía system (property guarantee):
- Traditional requirement: Someone who OWNS property in Argentina must co-sign as guarantor
- Guarantor's property value must equal 2-3x the annual rent
- Guarantor liable for all rent and damages
- Alternative for expats: Insurance garantía (Finaer, La Segunda) — insurance company acts as guarantor for premium (~2-4% of annual rent)
- Another alternative: Higher security deposits (6-12 months rent) without garantía
Rental law (Ley de Alquileres):
- 3-year minimum contracts (previously 2 years)
- Annual rent increases tied to official inflation index (ICL)
- Tenant-friendly: difficult to evict, rent control mechanisms
- Deposit maximum: 1 month rent + 1 month agency fee
Agent fees:
- Tenant pays: 1-4.17% of annual rent to real estate agency
- Landlord also pays separate agency commission
- Negotiable but standard practice
Temporary rental market:
- Airbnb widely available
- Purpose-built temporary rental agencies (ByT Argentina, Areas, PampaHousing)
- Rates: $800-2,500/month (1-2BR furnished, prime areas)`,
    gotchas: `The garantía system is the biggest obstacle for expats. Most don't have property-owning friends willing to risk their assets. Insurance garantía services exist but add 2-4% to annual costs. Traditional 3-year contracts favor landlords heavily — difficult to break early. Peso contracts with inflation adjustments mean rent rises 30-60% annually during high inflation periods. Rental law changes frequently — verify current regulations. Agent fees are paid by tenant AND landlord (double commission system).`,
    pro_tip: `For short-term stays (<1 year): temporary rentals are simpler despite higher costs. For long-term: negotiate higher deposits instead of garantía if possible. Use insurance garantía companies (Finaer is most established) — worth the premium for access to better properties. Avoid peso contracts during inflation spikes if possible — negotiate USD-linked terms informally. Best rental websites: Zonaprop, Argenprop for traditional rentals; ByT Argentina, PampaHousing for temporary. Always visit properties in person — photos can be misleading.`,
  },
  {
    topic: 'Property Purchase Process & Costs',
    country: 'AR',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Argentine property law; notary procedures; buyer cost breakdowns 2026',
    content: `Buying property in Argentina — process and costs:
Foreigners: NO restrictions on urban property ownership. Rural property: some restrictions on border areas
Purchase process:
1. Property search and preliminary agreement (boleto de compraventa) — typically 10-30% deposit
2. Due diligence: Title search (informe de dominio), municipal taxes current, no liens/mortgages
3. Final contract and deed (escritura pública) at notary (escribanía)  
4. Property registry (Registro de la Propiedad) — ownership officially transferred
Transaction costs (buyer pays):
- Notary fees: 0.5-1.5% of sale price
- Property transfer tax (Impuesto de Sellos): 1-3% (varies by province)
- Registration fees: 0.1-0.3%
- Legal fees: 1-2% (independent lawyer recommended)
- Appraisal: $300-800
- Total buyer costs: ~3-7% of purchase price
Financing options:
- Cash purchases: 90%+ of transactions. USD cash common despite legal peso requirement
- Mortgages: Available for residents with DNI and income proof. Rates 15-25%/year. 50-70% LTV maximum
- Seller financing: Sometimes available for larger properties
Title system: Torrens-like system with strong registry protections. Title insurance not standard but recommended for large purchases
Property taxes: Municipal taxes 0.5-2% annually of assessed value (typically below market value)`,
    gotchas: `Argentina property transactions are complex despite foreign ownership rights. The informal USD cash market conflicts with formal peso requirements — navigate carefully with experienced local counsel. Mortgages are expensive (15-25% rates) and difficult for new residents. Title issues from Argentina's economic history require thorough due diligence. Provincial taxes vary significantly — verify local rates. Buenos Aires city has higher transfer taxes than province. Some older properties have complex title histories.`,
    pro_tip: `Argentina offers strong property rights with no foreign ownership restrictions — unusual in LATAM. Use an independent lawyer (not just the real estate agent's lawyer) for due diligence. For large purchases: consider title insurance despite it not being standard. The informal USD market means properties are often priced in dollars but transactions legally occur in pesos — understand both rates. Property taxes are low (0.5-2% annually) making ownership cost-effective. Buenos Aires property has historically held value during peso devaluations — good inflation hedge for peso earners.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Public Healthcare System',
    country: 'AR',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Ministry of Health; WHO Argentina report 2025; hospital system analysis',
    content: `Argentina public healthcare system (2026):
System structure:
- COVERAGE: Free for everyone — citizens, residents, tourists. No enrollment or ID required for emergency care
- FUNDING: Government-funded (national, provincial, municipal levels)
- ACCESS: Present at any public hospital or clinic with passport/DNI
Quality and facilities:
- Buenos Aires: World-class public hospitals — Hospital Italiano (teaching), Hospital de Clínicas (University of Buenos Aires), Hospital Británico
- Córdoba, Mendoza, Rosario: Good regional hospitals with specialties
- Rural areas: Basic health posts (postas sanitarias) and regional hospitals
- Specialties: Strong in cardiology, oncology, infectious diseases, psychiatry
- Medical education: Argentina trains excellent doctors — many work internationally
What's covered: Primary care, specialist consultations, surgery, hospitalization, maternity care, psychiatric care, emergency services, prescriptions (through public pharmacies), diagnostic tests, vaccines
Wait times: Emergency care: immediate. Routine specialist appointments: 2-8 weeks. Elective surgery: 1-6 months (varies by procedure and location)
Challenges: Overcrowding in popular hospitals, aging facilities, supply shortages (medications, equipment), long waits for non-urgent care
Prescription medications: Public hospitals dispense generic medications free. Brand medications available at subsidized prices`,
    gotchas: `Argentina's public healthcare is genuinely free and high-quality in major cities, but expect crowds and waits. Language barrier is significant — very few public hospital staff speak English. Emergency care is excellent, but routine care can involve long queues. Medication availability can be inconsistent — public hospitals may not have specific brands or newest treatments. Rural healthcare is basic — serious conditions require transfer to regional centers.`,
    pro_tip: `Argentina's public system is among the best free healthcare systems globally — comparable to European standards in Buenos Aires. Use it for emergencies and serious conditions. For routine care: combine with private insurance for shorter waits and English-speaking doctors. Hospital Italiano and Hospital de Clínicas are world-class teaching hospitals that accept public patients. The medical training in Argentina is excellent — don't assume private is automatically better quality, just more convenient. Learn basic Spanish medical vocabulary or bring a translator for non-emergency visits.`,
  },
  {
    topic: 'Private Health Insurance (Obras Sociales & Medicine Prepaga)',
    country: 'AR',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'PAMI; insurance company websites; expat healthcare costs 2025-2026',
    content: `Argentina private healthcare (2026):
Private insurance types:
1. Medicina Prepaga (private health insurance): Full private system. Best hospitals, shortest waits, English-speaking doctors
2. Obra Social: Employment-based social insurance. Middle ground between public and private
Major private insurers:
- OSDE: Premium insurer. Best hospital network. Plans: $80-300/month (age/coverage dependent)
- Swiss Medical: High-quality. Strong hospital network including Swiss Medical Center. Plans: $65-250/month
- Medicus: Well-regarded. Good coverage, reasonable prices. Plans: $55-200/month
- Galeno: Quality insurer. Plans: $60-220/month  
- Sancor Salud: Budget option with decent coverage. Plans: $45-150/month
Top private hospitals:
- Hospital Alemán: German hospital, excellent facilities
- Swiss Medical Center: Modern, well-equipped
- Hospital Británico: Historic British hospital, high reputation
- Sanatorio de Los Arcos: Premium facility
- Fleni: Neurological specialties
Coverage typically includes: GP visits, specialist consultations, diagnostic tests, surgery, hospitalization, maternity care, dental (basic), optical (basic)
Waiting periods: 3-6 months for pre-existing conditions, 10-12 months for maternity
Age restrictions: Some insurers limit enrollment age (60-70 years maximum)
Employee contributions: Formal employees: 3% salary deduction for obra social`,
    gotchas: `Private insurance in Argentina is excellent value but has waiting periods for pre-existing conditions. Age limits for new enrollment (often 60-70 years) can exclude older expats. Dental and optical coverage is basic — expect additional costs. Some insurers require Argentine employment or residency for enrollment. Coverage can vary significantly between insurers — verify specific doctors and hospitals before enrolling. Pre-authorization required for many procedures.`,
    pro_tip: `OSDE is the gold standard but expensive. Swiss Medical and Medicus offer 80% of the quality at 70% of the cost. For retirees: investigate if your age allows enrollment — some insurers are flexible with the age limit for existing residents. Combine private insurance with public system access — use private for routine care, public for emergencies if needed. English-speaking doctors are available at major private hospitals in Buenos Aires. Consider international health insurance if you travel frequently or plan to return home for major procedures.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living by Region',
    country: 'AR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Numbeo; expat cost surveys; TheLatinvestor; March 2026 exchange rates',
    content: `Argentina cost of living (March 2026, USD at blue dollar rates):
Buenos Aires (comfortable couple):
- Rent: $800-1,800/month (2BR in good neighborhood)  
- Groceries: $350-500/month (mix of local and imported items)
- Dining out: $250-400/month (mix of local restaurants and upscale)
- Transportation: $50-100/month (mostly Uber/taxi + some public transport)
- Utilities: $80-150/month (electricity, gas, water, internet, phone)
- Entertainment: $200-350/month (theater, movies, cultural events)
- Healthcare: $100-300/month (private insurance)
- TOTAL: $1,800-3,600/month
Secondary cities (Mendoza, Córdoba, Salta):
- 20-40% cheaper than Buenos Aires
- Rent: $400-1,000/month (2BR)
- Total for couple: $1,200-2,500/month
Individual costs:
- Restaurant meal: $8-25 (neighborhood parrilla to upscale)
- Coffee: $1.50-4 (local café to Starbucks)
- Taxi ride: $2-8 (city center distances)
- Movie ticket: $4-8 
- Gym membership: $25-60/month
- Domestic help: $8-12/hour
- Haircut: $5-15
- Wine: $3-8 (excellent local wines)
Argentina minimum wage (2026): ~$200/month. Average salary: ~$500/month`,
    gotchas: `Cost advantages depend heavily on exchange rates — blue dollar vs official rate gap affects real costs for USD earners. Imported goods are expensive due to high tariffs — electronics, cars, specialty foods cost 50-100% more than US prices. Inflation remains volatile — these costs can change significantly month-to-month. Transportation costs are rising as fuel subsidies are reduced. Private school costs ($300-800/month) add significantly for families.`,
    pro_tip: `Argentina remains one of the world's best value destinations for quality of life — world-class dining, culture, and services at fraction of developed world costs. Embrace local products: Argentine beef, wine, and produce are world-class and inexpensive. Avoid imported goods except necessities. Buenos Aires offers developed world amenities at developing world prices. The gap between peso and dollar costs creates arbitrage opportunities for dollar earners, but this advantage has diminished under Milei's reforms.`,
  },
  {
    topic: 'Culture, Language & Integration',
    country: 'AR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Cultural guides; expat community reports; language learning resources',
    content: `Argentine culture and integration (2026):
Language:
- Spanish (Rioplatense dialect with distinctive "voseo" — "vos" instead of "tú")
- Pronunciation: "ll" and "y" pronounced as "sh" — "calle" sounds like "cashe"
- Italian influence: Hand gestures, intonation, many Italian words mixed in
- English: Limited outside tourist areas and multinational companies. Essential to learn Spanish
- Portuguese/French: More widely spoken than English due to immigration
Cultural characteristics:
- Late dining: Dinner typically 9-11 PM. Restaurants don't fill until 9:30 PM
- Kiss greetings: Cheek kiss (one kiss, right cheek) for all social interactions
- Punctuality: Social events start 15-30 minutes late ("hora argentina"). Business meetings more punctual
- Family-centric: Sunday family asados (barbecues) are sacred. Extended family relationships important
- Passionate: Sports (especially football), politics, culture discussed intensively
- Psychotherapy: Highest rate of therapists per capita globally. Mental health discussions are normal
- Café culture: Long conversations over coffee. WiFi everywhere
- Evening lifestyle: Restaurants open 8 PM, bars start busy at midnight, nightclubs 2 AM+
European influences: Italian (food, gestures), Spanish (language, architecture), French (fashion, culture), German (in Patagonia)
Tango: Cultural export but mostly tourist-oriented in Buenos Aires. Some authentic milongas (tango clubs) remain
Integration tips: Learn Spanish, embrace late dining hours, understand football culture (River Plate vs Boca Juniors rivalry), participate in asado social events`,
    gotchas: `Porteños (Buenos Aires residents) can seem direct or argumentative — it's cultural, not personal. Everything happens later than scheduled — adjust expectations. Political discussions are intense and frequent — Argentines are passionate about politics. Don't expect "mañana" service culture like other LATAM countries — Argentines are more European in work ethic but still relaxed about time. The economic crisis creates ongoing stress and conversation topics.`,
    pro_tip: `Argentines are incredibly welcoming once you make an effort with Spanish and show cultural interest. Take Spanish lessons immediately — the Rioplatense accent is distinctive and worth learning properly. Embrace the late lifestyle — dinner at 10 PM, drinks at midnight. Learn about football even if you don't care — it's social currency. Argentine culture is sophisticated and European-influenced — more like living in southern Europe than typical Latin America. The psychotherapy culture makes Argentines very emotionally aware and direct in personal discussions.`,
  },
  {
    topic: 'Safety & Regional Variations',
    country: 'AR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Crime statistics; expat safety reports; regional security assessments 2025-2026',
    content: `Argentina safety landscape (2026):
Buenos Aires:
- Safest areas: Recoleta, Palermo, Puerto Madero, Belgrano, Núñez (day and night)
- Caution areas: San Telmo (after dark), Once/Constitución (anytime), La Boca (tourist areas OK, surroundings avoid)
- Common crimes: Pickpocketing, phone snatching, motorcycle theft ("motochorros"), express kidnapping (rare in expat areas)
- Violent crime: Lower than most major LATAM cities. Homicide rate ~4 per 100K (Buenos Aires city)
Regional safety:
- Safest provinces: Mendoza, San Luis, Córdoba (capital), Santa Fe (Rosario has higher crime)
- Patagonia: Generally very safe. Bariloche, El Calafate, Ushuaia have minimal crime
- Northern provinces: Vary significantly. Salta (city) is safe; rural/border areas need caution
- Western provinces: San Juan, La Rioja generally safe but remote
Safety rules:
- Don't use phones on street in Buenos Aires (especially subway/bus stations)
- Avoid displaying jewelry, expensive watches, or cameras
- Use registered taxis/Uber rather than street taxis at night
- Stay in well-lit, populated areas after dark
- Protest awareness: Political demonstrations are frequent but mostly peaceful
Police: Federal police in tourist areas are professional. Local police quality varies
Emergency numbers: 911 (general), 101 (police), 107 (ambulance), 100 (fire)`,
    gotchas: `Argentina's reputation for safety can create overconfidence. Phone theft is extremely common — never use phones on Buenos Aires streets. "Motochorros" (motorcycle thieves) target pedestrians with phones/bags — stay alert. Express kidnapping exists but mainly affects wealthy locals, rarely expats. Protests can shut down major streets with little warning — avoid demonstration areas. Rural areas may have limited police response times.`,
    pro_tip: `Argentina is much safer than most South American countries — similar to southern Europe in major cities. Use common urban sense: don't flash wealth, stay aware of surroundings, avoid empty areas at night. The biggest risk is opportunistic theft, not violent crime. Mendoza and Patagonia are exceptionally safe — comparable to rural Europe/US. Buenos Aires crime is concentrated in certain neighborhoods — good area selection makes a huge difference. Local friends are your best safety resource — they know current hotspots to avoid.`,
  },
  {
    topic: 'Bureaucracy, Politics & Economic Volatility',
    country: 'AR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Government efficiency reports; Milei administration updates; economic stability indicators',
    content: `Argentina bureaucracy and politics (2026 under Milei administration):
Bureaucratic challenges:
- Government offices: Often slow, limited hours, multiple visits required
- Documentation: Everything requires official stamps, certified copies, apostilles
- Banks: Opening accounts remains bureaucratic despite improvements
- Utility connections: Can take weeks to months for electricity, gas, internet
- Government website services: Improving but still limited online options
- "Tramitadores": Professional bureaucracy navigators — worth hiring for complex processes
Political environment (Milei era, 2024-2026):
- Economic reforms: Aggressive devaluation, spending cuts, deregulation
- Inflation: Reduced from 300%+ to ~56% annually (March 2026)
- Currency controls: Relaxed but not eliminated
- Foreign investment: Actively encouraged through new visa programs
- Social tensions: Economic adjustment creates protests and strikes
- Stability: More economically orthodox than previous governments
Economic volatility patterns:
- Currency: More stable under current management but still volatile by global standards
- Inflation: Declining but remains high (4-5% monthly in early 2026)
- Interest rates: High (~75% annually) but falling
- Import restrictions: Significantly reduced
- Price controls: Mostly eliminated
- Purchasing power: Improving for peso earners, less clear advantage for dollar earners
Planning considerations:
- Keep multiple financial options (peso accounts, USD savings, foreign accounts)
- Understand that economic policies can change with elections (next presidential election 2027)
- Monitor inflation for rental/salary negotiations
- Budget for administrative costs and delays`,
    gotchas: `Argentina's bureaucracy can be frustrating — simple tasks require multiple office visits, long waits, and extensive paperwork. Don't underestimate time and energy required for administrative processes. Political volatility means economic policies can change dramatically between administrations. The current pro-market approach could reverse after 2027 elections. Strikes and protests can disrupt daily life with minimal warning. Some progress on reducing bureaucracy but still significantly more complex than developed countries.`,
    pro_tip: `Hire gestorías (administrative service companies) for complex bureaucracy — DNI applications, business registrations, tax matters. They know the system and can save months of frustration. Build relationships with bank managers, government office staff — personal connections speed up processes. Keep physical and digital copies of ALL documents. Argentina's political swings are predictable — pro-market reforms followed by populist reversals every 8-12 years. Plan accordingly for long-term stays. The current moment (2024-2026) is favorable for foreign investment and expat integration — take advantage while policies are supportive.`,
  },
  {
    topic: 'Internet, Technology & Digital Infrastructure',
    country: 'AR',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Internet speed tests; telecom providers; digital nomad community reports 2025-2026',
    content: `Argentina digital infrastructure (2026):
Internet speeds and providers:
- Average speeds: Buenos Aires 50-100 Mbps, secondary cities 25-50 Mbps
- Fiber providers: Telecentro, Movistar, Claro, Personal. Fiber coverage ~70% in Buenos Aires, 40% nationally
- Costs: $15-40/month for 50-100 Mbps home fiber
- Reliability: Generally good in cities, intermittent power outages can affect service
- Mobile data: 4G widely available, 5G launching in major cities. Unlimited plans $20-35/month
Coworking scene:
- Buenos Aires: 50+ coworking spaces. La Maquinita (Palermo), Area Tres (San Telmo), Hub Porteño (Microcentro), Espacio Cowork (multiple locations)
- Pricing: $8-20/day, $80-200/month for fixed desk, $150-400/month for private office
- Secondary cities: Growing scenes in Córdoba, Mendoza, Rosario
- Remote work culture: Accelerated post-COVID. Many Argentine companies now remote-friendly
Time zone advantages:
- ART (Argentina Time): UTC-3. Perfect overlap with US East Coast business hours
- Same zone as Brazil (except brief summer period when AR doesn't use daylight saving)
- 5-6 hours behind Europe — good for afternoon/evening calls
Tech ecosystem:
- Buenos Aires: Major tech hub. MercadoLibre (NASDAQ:MELI) headquartered here
- Startup scene: Palermo/Las Cañitas concentration. Government incentives for tech sector
- Developer talent: Strong programming education, competitive salaries vs US (but growing)
- Fintech boom: Many Argentina-founded financial services companies
- English proficiency: High in tech sector, lower in general population
Banking/payments technology:
- Digital banking: Brubank, Uala, Mercado Pago highly developed
- QR payments: Widespread adoption. Most small businesses accept QR code payments
- Cryptocurrency: High adoption due to inflation. P2P trading popular
- Online shopping: MercadoLibre dominates. Growing international e-commerce access`,
    gotchas: `Power outages can be frequent, especially in summer — invest in UPS/backup power for critical work. Internet speeds vary dramatically by neighborhood even within Buenos Aires. Rural areas have limited fiber coverage. Argentina's economic volatility affects tech salaries and purchasing power for equipment. Import restrictions can make electronics expensive (30-50% above US prices). Some international services geo-block Argentina or charge higher rates.`,
    pro_tip: `Argentina's timezone (UTC-3) is perfect for US-based remote work — better than Mexico or Colombia. Buenos Aires has emerged as a major LATAM tech hub — great for networking and opportunities. Palermo is the epicenter of the startup scene — live there for maximum tech community access. The local fintech innovation is world-class — Argentina often pilots financial services technologies. For equipment: buy laptops/phones before arriving due to import duties. Starlink is available for remote area coverage. Argentina produces excellent software developers — great place to build technical teams.`,
  },
];