import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const ESTONIA_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Corporate Tax: 0% Retained, 22% Distributed',
    country: 'EE',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Estonian Tax & Customs Board; e-Resident.gov.ee 2026; TaxRavens 2026; Unicount 2026',
    content: `Estonia corporate tax — unique 0% on retained earnings (2026):
Corporate income tax:
- Retained/reinvested profits: 0% (no tax until distribution)
- Distributed profits: 22% (raised from 20% effective January 2025)
- Effective rate on distribution: 28.21% (taxable base divided by 0.78 coefficient)
- Regular dividend reduction: 14% rate on regularly distributed dividends (lower rate applies to recurring distributions that don't exceed average of previous 3 years' taxable distributions)
- No annual corporate tax filing needed if no distributions made
How it works:
- Company earns €100K: Pays €0 in tax
- Company retains and reinvests: Still €0 in tax
- Company distributes €100K as dividends: Pays €22K tax (22%)
- Brilliant for growth: Reinvest profits tax-free, only pay when you take money out
Personal income tax:
- Flat rate: 20% (one of Europe's simplest)
- Tax-free allowance: €7,848/year (2026)
- Dividends received: Already taxed at corporate level — additional 7% personal tax (if corporate 14% rate applied) or 0% (if corporate 22% rate applied)
- Employment income: 20% flat + 33% social tax (employer pays)
No taxes on:
- Inheritance: 0%
- Gift tax: 0%
- Wealth/net worth: 0%
VAT:
- Standard rate: 24% (raised from 22% in 2025, one of EU's highest)
- Reduced: 13% (accommodation, press), 5% (e-books)`,
    gotchas: `The 22% distribution tax (up from 20%) and 24% VAT (up from 22%) represent significant increases in 2025 — Estonia is becoming less tax-competitive than before. The 0% retained earnings is genuine but you eventually pay when extracting money. The 14% reduced rate for regular dividends requires 3 years of consistent distributions — new companies don't qualify immediately. Social tax at 33% makes employment expensive. The 20% personal flat tax is simple but not low compared to non-dom regimes elsewhere. VAT at 24% is among EU's highest — impacts daily costs.`,
    pro_tip: `The 0% on retained earnings makes Estonia perfect for bootstrapping businesses — reinvest everything, compound tax-free, distribute later when ready. Strategy: Estonian OÜ (LLC) at 0% retained → reinvest → only distribute when you need income, paying 22%. For recurring distributions, build up 3 years of history to qualify for the 14% reduced rate. The e-Residency program lets you manage your Estonian company remotely from anywhere. Compare with Cyprus (12.5% corporate but immediate) — Estonia wins if you can defer distributions for years.`,
  },
  {
    topic: 'E-Residency Program (Digital Business Only)',
    country: 'EE',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'e-Resident.gov.ee 2026; Estonian Police and Border Guard Board',
    content: `Estonia e-Residency — the world's first digital residency (2026):
CRITICAL: E-Residency is NOT physical residency:
- Does NOT give right to live in Estonia
- Does NOT give right to enter Estonia or EU
- Does NOT make you Estonian tax resident
- Does NOT replace visa requirements
- IS a digital identity for running an Estonian company remotely
What e-Residency provides:
- Digital ID card: Smartcard for digital signatures and authentication
- Company formation: Open and manage an Estonian OÜ (LLC) remotely
- Banking access: Open Estonian business bank account (via partners)
- EU business address: Operate within EU digital single market
- Tax filing: File corporate returns electronically
- Cost: €120 application fee + €20-40 pickup fee
Application process:
- Online application: 15 minutes
- Processing: 3-8 weeks
- Pickup: At Estonian embassy or designated location worldwide
- 100,000+ e-residents from 170+ countries (as of 2026)
Company formation via e-Residency:
- OÜ (LLC): Minimum share capital €2,500 (can be deferred)
- Formation: 1-3 days online
- Annual reporting: Required, can be done digitally
- Accounting: Must use Estonian accountant (€50-200/month)
- Business address: Virtual office service required (€30-100/month)
Who it's actually for:
- Location-independent entrepreneurs who want EU company
- Freelancers invoicing EU clients
- Digital businesses wanting EU market access
- People who want Estonian corporate tax advantages remotely`,
    gotchas: `The #1 misconception: e-Residency = residency. It absolutely does NOT. You cannot live in Estonia with e-Residency alone. You need a separate visa/TRP for physical residency. Banking can be challenging — traditional Estonian banks (LHV, SEB) are cautious about e-resident accounts. Many e-residents use fintech alternatives (Wise, Payoneer) for business banking. Estonian accountant is mandatory — budget €100-200/month. Your personal tax obligations remain in your country of tax residence — e-Residency doesn't change that. The 22% distribution tax applies regardless of where you live.`,
    pro_tip: `E-Residency is best as a business tool, not a relocation tool. Ideal use case: live in a low-tax country (Portugal, Georgia, UAE), run Estonian OÜ for EU credibility, retain profits at 0%, distribute minimally. For banking, LHV Bank is most e-resident-friendly, but also set up Wise Business as backup. Use authorized service providers (Xolo, Unicount, 1Office) for turnkey company management. The €2,500 share capital can be contributed as you earn — no need to deposit upfront. E-Residency + actual residency elsewhere = powerful combination.`,
  },

  // === VISA ===
  {
    topic: 'Digital Nomad Visa & Temporary Residence Permits',
    country: 'EE',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Estonian Police and Border Guard Board; Techloy 2026; Wise 2026; CitizenRemote',
    content: `Estonia visa and residency options for expats (2026):
Digital Nomad Visa (DNV):
- Type C (short-stay): Up to 365 days
- Type D (long-stay): Up to 365 days
- Income requirement: €4,500/month (over 6 months preceding application) — HIGH threshold
- Must work for: Non-Estonian employer or own foreign-registered company
- Cannot work for: Estonian companies
- Processing: 2-4 weeks
- Cost: €80-100
- Renewability: Once (maximum 2 years total)
Temporary Residence Permit (TRP):
- Enterprise TRP: €65,000 minimum investment in Estonian company
- Employment TRP: Job offer from Estonian employer, salary requirements
- Startup Visa: For innovative startups, requires evaluation by Startup Estonia
  - Up to 18 months initial, extendable
  - Must have scalable business model
  - Evaluated by expert committee
- Student TRP: For university enrollment
- Duration: 1-5 years, renewable
- Path to permanent: After 5 years of continuous residence
EU Blue Card:
- For highly skilled workers
- Salary threshold: 1.5× average Estonian salary (~€2,700/month in 2026)
- Duration: Up to 4 years
EU citizens:
- Automatic right to live and work
- Register within 3 months
Permanent residence:
- After 5 years of continuous legal residence
- Estonian language requirement: B1 level
- Citizenship: After 8 years of residence + B2 Estonian`,
    gotchas: `The €4,500/month DNV income requirement is among Europe's highest — filters out most applicants. The DNV maximum of 2 years means you'll need to transition to TRP or leave. The Enterprise TRP requires genuine €65,000 investment AND the business must benefit Estonian economy — it's not rubber-stamped. Estonian language for permanent residence (B1) and citizenship (B2) is genuinely difficult — Estonian is a Finno-Ugric language with 14 grammatical cases. Winter conditions (-20°C, 6 hours daylight in December) make physical adjustment challenging. The startup visa requires committee evaluation — many applications are rejected.`,
    pro_tip: `The DNV → TRP → Permanent Residence pathway works but plan carefully: start with DNV (if you meet €4,500/month), then transition to Enterprise TRP (invest €65,000 in your own Estonian company) during year 2. This gives 5+ years for permanent residence track. Start learning Estonian immediately — B1 for PR takes 2-3 years of serious study. The startup visa is excellent for genuine tech founders — Estonia's startup ecosystem is world-class (4 unicorns per capita, highest in Europe). Consider the EU Blue Card if you can get employment — lower barrier than Enterprise TRP.`,
  },

  {
    topic: 'Startup Visa & EU Blue Card',
    country: 'EE',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Startup Estonia 2026; Estonian Police and Border Guard Board; Techloy',
    content: `Estonia startup visa and professional immigration (2026):
Startup Visa:
- Purpose: For founders of innovative, scalable startups
- Evaluation: By Startup Estonia expert committee
- Duration: Up to 18 months initial
- Extendable: To full TRP if startup proves viability
- Requirements: Scalable business model, team, funding plan
- Minimum capital: No fixed requirement (unlike Enterprise TRP €65K)
- Process: Apply to Startup Estonia → evaluation → visa application
- Success rate: ~40-50% of applications approved
- Benefits: Access to Estonian startup ecosystem, mentoring, events
Enterprise TRP:
- Investment: €65,000 minimum in Estonian company
- Must: Genuinely benefit Estonian economy (jobs, tax revenue)
- Duration: 1-5 years, renewable
- Can lead to: Permanent residence after 5 years
- More certain: Higher approval rate than startup visa but higher capital requirement
Path to permanent residence:
- 5 years of continuous legal residence on TRP
- Estonian language: B1 level required
- Stable income: Must demonstrate
- Integration: Expected participation in society
Citizenship:
- After 8 years of residence
- Estonian language: B2 level
- Civic exam
- EU passport: Visa-free to 180+ countries`,
    gotchas: `The startup visa has a ~50% rejection rate — your business must genuinely be innovative and scalable. "I'm a freelance web developer" won't qualify — they want startups with growth potential. The Enterprise TRP's €65K is a real investment that must benefit Estonia — not just parking money. The 5-year path to permanent residence requires continuous physical presence and B1 Estonian — both are non-trivial commitments. Citizenship requires B2 Estonian — this takes most learners 4-5+ years of dedicated study.`,
    pro_tip: `The startup visa is Estonia's best immigration product for genuine founders — lower capital requirement than Enterprise TRP, access to world-class ecosystem, and credibility. Apply with a solid pitch deck showing scalability, target market, and why Estonia specifically (EU access, digital infrastructure, talent). If rejected for startup visa, the Enterprise TRP at €65K is your backup — form an OÜ, invest, demonstrate economic contribution. Start Estonian language immediately upon arrival — B1 in 5 years is achievable with consistent effort (2-3 hours/week).`,
  },

  // === BANKING ===
  {
    topic: 'Estonian Banking & Digital Finance',
    country: 'EE',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Estonian banking sector 2025-2026; e-resident banking experiences',
    content: `Estonia banking — digital-first but cautious (2026):
Major banks:
- LHV Pank: Most e-resident/startup friendly, digital-first Estonian bank
- SEB Estonia: Swedish parent, conservative, good for established businesses
- Swedbank Estonia: Largest by customers, very conservative about non-residents
- Luminor: Nordic merger bank, moderate openness
Account opening for residents:
- With TRP/ID card: Straightforward at any bank
- Required: Estonian ID card, proof of address, income documentation
- Processing: 1-2 weeks
- Monthly fees: €0-5/month for basic accounts
E-resident business accounts:
- LHV: Best option, still requires justification and substance
- Process: Remote application with e-Residency card
- Requirements: Business plan, expected turnover, client information
- Rejection rate: High — banks are cautious post-money-laundering scandals
- Processing: 2-8 weeks
Fintech alternatives (widely used):
- Wise Business: Most popular among e-residents, multi-currency
- Payoneer: Good for marketplace sellers
- Mercury: US-focused but used by Estonian OÜs
- Relay: European business banking alternative
Digital infrastructure:
- Everything digital: Tax filing, signatures, voting, prescriptions
- Smart-ID: Mobile authentication (like ID card but on phone)
- X-Road: Government digital backbone, all services interconnected
- 99% of government services available online`,
    gotchas: `Estonian banks were burned by the Danske Bank money laundering scandal (€200B laundered through Estonian branch) — compliance is now extremely strict. Many e-residents struggle to open bank accounts — prepare thorough documentation. Swedbank is essentially closed to non-residents. LHV is best but still scrutinizes applications. Fintech accounts (Wise, Payoneer) don't fully replace bank accounts for all business needs. The digital infrastructure is genuinely world-class but assumes tech literacy — paper alternatives are limited.`,
    pro_tip: `Start with Wise Business (easy to open) and apply to LHV in parallel — this way you're operational immediately while the bank application processes. For LHV success: provide detailed business plan, show legitimate client contracts, demonstrate Estonian connection. The all-digital infrastructure is Estonia's superpower — once set up, you can manage everything from your phone. Smart-ID replaces the physical ID card for most operations — set it up immediately. Consider joining Startup Estonia or e-Residency community events for banking introductions.`,
  },

  {
    topic: 'Wise, LHV & Fintech Banking Solutions',
    country: 'EE',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Estonian fintech ecosystem; Wise; LHV Bank; e-resident banking data 2026',
    content: `Estonia fintech banking — the practical reality (2026):
For e-residents (no physical presence):
- Wise Business: De facto standard — multi-currency, instant setup, reasonable fees
  - Holds EUR, USD, GBP + 40 currencies
  - IBAN for receiving payments
  - Not a full bank: no loans, limited features
  - Fees: 0.35-1.5% on conversions, free for same-currency
- LHV Bank: Best traditional option for e-residents
  - Full banking: loans, overdrafts, cards
  - Monthly fee: €7-15/month
  - Application: Online with e-Residency card
  - Approval: 50-70% for well-documented applications
  - Key: Present strong business case and client documentation
For physical residents:
- LHV: Best for tech/startup, digital-first
- SEB: Conservative, established businesses
- Swedbank: Largest, but most restrictive for foreigners
- Luminor: Middle ground
- All require: TRP/ID card, proof of address, income documentation
- Opening: 1-3 days in person
Crypto and digital assets:
- Estonia was crypto-friendly (2017-2020) — issued many licenses
- Crackdown since 2022: Most licenses revoked, strict AML
- Current: Some regulated crypto exchanges remain
- Overall: No longer a crypto-friendly jurisdiction`,
    gotchas: `E-resident banking remains the biggest friction point — even Wise has limits (not a full bank). LHV rejection rates for e-residents are 30-50%. Swedbank is effectively closed to non-residents. The crypto licensing crackdown was dramatic — Estonia went from 1,000+ licensed firms to fewer than 50. Banking compliance is strict post-Danske scandal — prepare for thorough documentation. Some business banking features (loans, overdrafts) are only available from traditional banks, not fintech. EUR is the currency — no currency risk within the Eurozone.`,
    pro_tip: `The winning combo: Wise Business for daily operations + LHV for full banking. Apply to both simultaneously — Wise is instant, LHV takes weeks. For LHV success: provide 6 months of business bank statements, client contracts, and a clear business description. The e-Residency community forums share real-time banking success/failure stories — study them before applying. For physical residents, LHV is the clear choice — they understand tech companies and startups. Consider Payoneer as a third backup for marketplace income.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Tallinn Property Market & Neighborhoods',
    country: 'EE',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Investropa Tallinn 2026; Estonian Land Board; property market analysis',
    content: `Tallinn real estate market (2026):
Hottest neighborhoods (fastest price growth):
- Kalamaja/Telliskivi: €3,500-5,000/sqm — Tallinn's Brooklyn, creative hub, renovated wooden houses + new builds, most popular expat area
  - Rent 1BR: €900-1,200/month
  - Rent 2BR: €1,200-1,800/month
  - Purchase: €220,000-350,000 for quality apartment
- Noblessner: €4,000-6,000/sqm — Waterfront development, marina, restaurants, premium
- Ülemiste City: €3,000-4,500/sqm — Tech campus area, near airport, Rail Baltica terminal coming
- Old Town (Vanalinn): €4,000-7,000/sqm — Historic center, tourist-heavy, charming but noisy
  - Rent 1BR: €1,000-1,500/month
- Pirita: €3,000-4,500/sqm — Beach suburb, family-friendly, quieter
- Kristiine/Mustamäe: €2,000-3,000/sqm — Residential suburbs, best value, good transport
  - Rent 1BR: €600-900/month
TARTU (university city, 2nd largest):
- Average: €2,000-3,000/sqm (30-40% cheaper than Tallinn)
- Rent 1BR: €400-700/month
- Character: Academic, cultural, quieter, student atmosphere
Market overview:
- Tallinn average: ~€3,200/sqm (asking prices 14-20% above transaction prices — negotiate!)
- Annual growth: 3-5% in 2025-2026
- Rental yields: 4-6% gross
- Foreign ownership: No restrictions
- Transaction costs: ~5-7% (notary, state fee, agent)`,
    gotchas: `Asking prices in Tallinn are 14-20% above actual transaction prices — always negotiate aggressively. Kalamaja has gentrified rapidly and may be overpriced for what you get. Winter heating costs in older buildings can be €200-400/month — check energy ratings. Some Soviet-era buildings have been renovated but others remain low quality. Outside Tallinn, property values drop dramatically. The property market has softened in 2025-2026 — buyer's market in some segments. Old Town apartments look charming but can be tourist-noisy and parking is impossible.`,
    pro_tip: `Kalamaja is the clear expat favorite — walkable, trendy, restaurants, tech community. For value, look at Kristiine or Mustamäe (30-40% cheaper, good tram connections). The 14-20% gap between asking and transaction prices means serious negotiation room — use this data. Consider Tartu if you don't need Tallinn's startup scene — 40% cheaper with excellent quality of life. The Rail Baltica terminal (opening 2030) will transform Ülemiste — potential for appreciation. Winter energy costs are the hidden expense — prioritize energy-efficient buildings.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'EHIF Public Healthcare & Private Options',
    country: 'EE',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Estonian Health Insurance Fund (EHIF); Confido; Qvalitas; healthcare data 2025-2026',
    content: `Estonia healthcare system (2026):
EHIF (Estonian Health Insurance Fund):
- Coverage: For employed/self-employed residents paying social tax
- Social tax: 33% of salary (employer pays), 13% goes to health insurance
- Coverage includes: GP visits, specialist referrals, hospital, prescriptions (copay), dental (limited)
- Quality: Good for routine care, improving
- Digital: E-prescriptions, e-health records, digital referrals
- Wait times: Can be long for specialists (weeks to months)
Private healthcare:
- Confido: Largest private clinic network, modern, English-speaking
- Qvalitas: Second major private network
- East Tallinn Central Hospital: Major public hospital
- North Estonia Medical Centre: Largest public hospital
Private costs:
- GP visit: €40-60
- Specialist: €60-120
- MRI: €150-300
- Private insurance: €80-200/month
- Dental: €50-100 per visit
Quality assessment:
- Routine care: Good quality, digital-first
- Specialist depth: Limited for rare conditions
- Complex cases: May need referral to Helsinki (80km ferry), Stockholm, or other EU centers
- Emergency care: Good, modern equipment
- Digital health: World-leading — e-prescriptions, health records, remote consultations
For DN visa holders:
- Must have health insurance (private)
- Not automatically covered by EHIF
- Budget €100-200/month for comprehensive private coverage`,
    gotchas: `EHIF requires social tax contributions — DN visa holders and e-residents are NOT automatically covered. Private insurance is mandatory for DN visa. Specialist wait times in the public system can be weeks to months. Complex medical conditions may require travel to Helsinki (2-hour ferry) for treatment. Dental coverage through EHIF is very limited — budget separately. The healthcare system is good but small — population of 1.3M limits specialist diversity. Language barrier in public hospitals — Estonian primarily, English improving but not guaranteed.`,
    pro_tip: `Confido is the go-to for English-speaking healthcare — modern, efficient, reasonable prices. Register with EHIF immediately if employed (automatic through social tax). For DN visa holders, get international health insurance with EU coverage — this protects you for complex cases requiring Helsinki/Stockholm referral. The digital health system is genuinely world-class — your entire health record is accessible online, e-prescriptions work at any pharmacy. For serious dental work, consider traveling to Finland or Latvia where costs are similar but specialist availability is better.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living & Digital Society',
    country: 'EE',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Estonia cost of living 2026; Investropa; expat surveys; Numbeo',
    content: `Estonia cost of living and lifestyle (2026):
Monthly budgets (Tallinn):
- Budget single: €1,500-1,800/month
- Comfortable single: €2,000-2,800/month
- Comfortable couple: €3,000-4,000/month
- Family of 4: €4,000-5,500/month
Detailed breakdown (comfortable single, Tallinn):
- Rent (1BR Kalamaja): €900-1,200/month
- Utilities: €100-250/month (heating HIGH in winter)
- Groceries: €250-400/month
- Dining out: €150-300/month (€10-15 lunch, €25-40 dinner)
- Transportation: €50-100/month (excellent public transport, €30 monthly pass)
- Healthcare: €100-200/month (private insurance)
- Internet: €20-30/month (excellent speeds, 1Gbps common)
- Entertainment: €100-200/month
Digital society reality:
- 99% of government services online
- Digital ID for everything: banking, voting, prescriptions, contracts
- X-Road: Government backbone connecting all systems
- 4 unicorns per capita (highest in world): Skype, Wise, Bolt, Pipedrive
- Startup density: One of Europe's highest
Climate (the honest truth):
- Summer (June-August): 15-25°C, 18+ hours daylight, beautiful
- Winter (November-February): -10 to -20°C, 6 hours daylight (December)
- Spring/Autumn: Brief but pleasant (April-May, September-October)
- Snow: November to March typically
- The darkness: Winter depression is real — light therapy recommended
Population: 1.3 million (tiny) — Tallinn: ~450,000`,
    gotchas: `Winter is the dealbreaker for many — -20°C with only 6 hours of daylight in December is genuinely harsh. Seasonal Affective Disorder is common — take it seriously. Heating costs in winter can double your utility bill. The 24% VAT raises prices on everything. Tallinn is increasingly expensive — no longer the budget Eastern European destination it was. Outside Tallinn, services and English drop dramatically. The startup scene is concentrated in Tallinn — Tartu has university life but limited professional options. Estonian language is very difficult — 14 grammatical cases, Finno-Ugric family (unrelated to most European languages).`,
    pro_tip: `Estonia works best for: tech professionals, startup founders, digital nomads who value digital infrastructure over climate. The summer is genuinely magical — 18+ hours of daylight, old town terraces, islands. Strategy: spend summers in Estonia (June-September), winters elsewhere (Portugal, Thailand) while maintaining tax residency via employment/company. The 30€ monthly public transport pass in Tallinn is excellent value. Join Latitude59 (annual startup conference) and regular meetups for networking. Budget €300-500 extra per month October-March for heating and light therapy. Tallinn-Helsinki ferry (2 hours) gives easy access to Finland.`,
  },
  {
    topic: 'Startup Ecosystem & Expat Community',
    country: 'EE',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Startup Estonia; Estonian startup ecosystem data 2025-2026; expat community surveys',
    content: `Estonia's tech ecosystem and expat life (2026):
Startup ecosystem:
- Unicorns: 4 per capita (world's highest): Skype, Wise, Bolt, Pipedrive
- Startups per capita: Among Europe's highest
- Latitude59: Annual flagship tech conference
- Startup visa: Government program for international founders
- sTARTUp Day: Tartu's startup conference
- Funding: Active VC scene, government grants available
- Ecosystem value: €25B+ (remarkable for 1.3M population)
Expat community:
- Growing international community, especially in Tallinn
- Kalamaja/Telliskivi: Main expat neighborhood
- English widely spoken in Tallinn tech/business circles
- International schools: Tallinn International School, Audentes
- Expat groups: Active Facebook/Telegram communities
- Tech meetups: Regular events in Tallinn
Language reality:
- Estonian: Official, very difficult (Finno-Ugric, 14 cases)
- Russian: 25% of population speaks Russian (especially Tallinn, Narva)
- English: Good in Tallinn tech/business, limited in rural areas and older generation
- Learning Estonian: Free government courses available, 2-4 years for conversational
Quality of life:
- Safety: Very low crime, safe even at night
- Nature: Forests, bogs, islands, beaches (2,222 islands!)
- Sauna culture: Essential Estonian experience (public, private, smoke saunas)
- Culture: Tallinn Song Festival, medieval Old Town, contemporary art scene
- Food: Nordic-Baltic fusion, improving restaurant scene, foraging culture
- Work-life balance: Good by European standards, flexible tech culture`,
    gotchas: `The tech community is excellent but concentrated in Tallinn — if you're outside tech, professional networking is limited. The Russian-speaking minority creates some social complexity. International school options are limited and expensive. Cultural integration beyond the expat bubble requires Estonian language — this is a genuine multi-year effort. Entertainment and nightlife are limited compared to larger European cities. The small population means limited dating pool and social circles. Weather dominates lifestyle decisions — plan your year around seasons.`,
    pro_tip: `Embrace the sauna culture — it's Estonia's social glue and genuinely transformative (especially after winter swimming). The tech ecosystem is world-class for the country's size — if you're in tech, the density of talent and events per capita is unmatched. Join the e-Residency community even before arriving — excellent networking. Tallinn's medieval Old Town is a UNESCO World Heritage site and genuinely enchanting. The island of Saaremaa is Estonia's hidden gem — peaceful, beautiful, cheap. Learn even basic Estonian — the effort is noticed and appreciated far more than in larger countries.`,
  },
];
