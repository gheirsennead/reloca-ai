import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const ECUADOR_KB: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Income Tax System & Foreign Income Treatment',
    country: 'EC',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SRI (Servicio de Rentas Internas); tax brackets 2025-2026; TaxesForExpats',
    content: `Ecuador income tax for residents and expats (2026):
Progressive tax rates (2026, in USD — Ecuador uses US Dollar):
- 0%: Up to $12,081
- 5%: $12,081-15,399
- 10%: $15,399-19,595
- 12%: $19,595-25,637
- 15%: $25,637-33,738
- 20%: $33,738-44,721
- 25%: $44,721-59,537
- 30%: $59,537-79,388
- 35%: $79,388-108,810
- 37%: Over $108,810
Tax residency triggers:
- 183+ days in Ecuador in a 12-month period
- Center of vital/economic interests in Ecuador
- Ecuadorian nationality (unless proven tax resident elsewhere)
Foreign income treatment:
- Residents: Technically worldwide income, BUT foreign-source income is practically exempt for most retirees/expats
- Remittances: Money sent TO Ecuador from abroad is NOT taxed as income (transfer, not earnings)
- Foreign pensions: Generally only taxable if you also earn Ecuador-source income above threshold
- Non-residents: 25% flat withholding on Ecuador-source income only
Key exemptions and deductions:
- Personal deduction: ~$12,081 tax-free threshold (indexed to inflation)
- Medical expenses: Deductible
- Education expenses: Deductible
- Housing expenses: Deductible (rent, mortgage interest)
- Total deductions: Capped at ~$17,000/year
Dollar economy advantage: No currency risk — all transactions in USD. No exchange rate losses on foreign income`,
    gotchas: `Ecuador technically taxes worldwide income for residents, but enforcement on foreign-source income is weak for individuals with no Ecuador-source income. This could change — SRI (tax authority) is modernizing. Remittances (money transfers) are NOT income and are correctly not taxed, but some expats confuse this with a foreign income exemption. If you earn money from consulting for Ecuadorian clients while resident, that IS taxable. The personal deduction structure is generous for moderate income levels. Non-residents face a flat 25% on any Ecuador-source income — establish residency before earning locally.`,
    pro_tip: `Ecuador's effective tax rate for retirees living on foreign pensions/Social Security is close to 0% — the combination of high personal deduction ($12,081), allowable expenses deductions, and weak foreign income enforcement means most retirees pay nothing or very little. The dollar economy eliminates currency risk entirely — your SS check deposits at full value. Strategy: keep investments outside Ecuador, receive only what you need as remittances, deduct housing/medical/education expenses to reduce any taxable Ecuador-source income. Professional tax advice costs $200-500/year in Ecuador — worth it for peace of mind.`,
  },
  {
    topic: 'Property Tax & Transaction Costs',
    country: 'EC',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'Municipal property tax regulations; real estate transaction procedures 2025-2026',
    content: `Ecuador property taxes and real estate transaction costs (2026):
Annual property tax:
- Rate: 0.025%-0.5% of cadastral (municipal) value
- Cadastral values: Typically 30-60% of market value
- Effective rate: ~0.1-0.3% of market value
- Payment: Annual, to municipal government
- Urban vs rural: Slightly different rate structures
- Tercera Edad discount: 50% off property tax for residents 65+
Property transfer taxes:
- Alcabala (transfer tax): 1% of declared value
- Municipal registration: 0.5-1% of property value
- Notary fees: 0.2-0.5% of property value
- Legal fees: 1-2% of property value
- Total transaction costs: ~3-5% of property value
Capital gains:
- Plusvalía (value increase tax): 10% of profit on sale
- Municipal calculation: Based on cadastral value increase
- In practice: Often minimal due to low cadastral values
- Capital gains on stocks/investments: Taxed as ordinary income
Rental income:
- Taxed as ordinary income (progressive rates 0-37%)
- Expenses deductible (maintenance, repairs, property tax, insurance)
- Depreciation: 5% per year deductible on building value
- Short-term rental: Same tax treatment, harder to enforce`,
    gotchas: `Cadastral values significantly understate market values — this benefits property tax calculation but can create issues with capital gains if values are updated. The Plusvalía tax is based on cadastral increase, not market value increase — usually manageable. All property documents must be in Spanish. Municipal property tax varies by city — Quito and Guayaquil have different rate structures. The 50% Tercera Edad discount on property tax is a significant benefit for retirees 65+. Property tax bills can be confusing — multiple municipal charges bundled together.`,
    pro_tip: `Ecuador property taxes are among the lowest in the Americas — effective rates of 0.1-0.3% of market value make holding costs minimal. The Tercera Edad 50% discount further reduces this for retirees 65+. Combined with low purchase prices (especially in Cuenca), total ownership costs are remarkably low. Strategy: purchase property early in residency to establish roots, then benefit from low annual costs. The cadastral value system keeps taxes predictable, though municipalities occasionally update values. Budget 3-5% for total transaction costs including legal fees — always use a bilingual lawyer familiar with expat transactions.`,
  },

  // === VISA ===
  {
    topic: 'Retirement (Jubilado) Visa & Tercera Edad Benefits',
    country: 'EC',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'EcuaPass; Grace & Nelson Law; visa requirements updated for 2026 SBU ($486)',
    content: `Ecuador Retirement/Pensioner (Jubilado) Visa (2026):
Requirements (based on 2026 SBU of $486):
- Income: 3× SBU = $1,458/month minimum pension income
- Source: Government pension (Social Security, military, civil service, etc.)
- Duration: 2-year temporary residence, renewable
- Age: No minimum age requirement for visa itself
- Dependents: Can include spouse and minor children
- Processing: 2-4 months typical
- Cost: $450-800 in government fees + legal costs ($800-1,500)
Documents required:
- Pension proof: Official letter from pension provider (apostilled)
- Criminal record: From all countries lived in past 5 years (apostilled)
- Passport: Valid 6+ months
- Health insurance: Required until IESS enrollment
- Police check: FBI or equivalent
Tercera Edad (Senior) Benefits (age 65+, ANY visa type):
- 50% off domestic airline tickets
- 50% off public transportation
- 50% off cultural events, movies, entertainment
- 50% off utilities (up to certain thresholds)
- 50% off property tax
- Priority service at banks, government offices
- VAT refund: Up to $120/month on purchases
- These benefits apply to ALL residents 65+, not just retirees
Path to permanent residency:
- After 2 years of temporary residence
- Must maintain income requirement
- Clean criminal record in Ecuador
- Permanent residence → citizenship after 3 years (5 total)`,
    gotchas: `The 2026 SBU increase to $486 raised the income requirement to $1,458/month (was $1,410 in 2025). This changes annually — verify current amount before applying. Social Security/pension must be from a GOVERNMENT source — private pensions may require the Rentista visa instead. Tercera Edad benefits are extraordinary but require cedula and residency to claim. The VAT refund requires collecting receipts and filing monthly. Processing times have lengthened — budget 3-4 months minimum. Dependents increase the income requirement. Criminal background checks from multiple countries are expensive and time-consuming.`,
    pro_tip: `The Jubilado visa + Tercera Edad benefits make Ecuador arguably the world's best retirement destination for those 65+ on government pensions. The 50% discounts on flights, transport, entertainment, utilities, and property tax effectively multiply your purchasing power. The $1,458/month threshold is easily met with US Social Security for most retirees. Strategy: apply for visa, get cedula, immediately register for Tercera Edad card, enroll in IESS ($85/month healthcare). Total monthly spend for comfortable couple lifestyle in Cuenca: $1,500-2,000 including everything. The VAT refund alone can save $1,000+/year on everyday purchases.`,
  },
  {
    topic: 'Professional, Investor & Rentista Visas',
    country: 'EC',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'SERMIG Ecuador; EcuaPass 2026 visa amounts; Expat Law Group',
    content: `Ecuador non-retirement visa options for expats (2026, based on SBU $486):
Professional Visa:
- Income: 1× SBU = $486/month minimum
- Requirement: University degree registered with SENESCYT (credential recognition)
- Credential process: Degree apostilled + SENESCYT registration (can take weeks)
- Best for: Younger professionals, digital workers with degrees
- Duration: 2 years temporary residence
- Cost: $400-600 government fees + legal
Investor Visa:
- Investment: 100× SBU = $48,600 minimum
- Options: Real estate purchase, bank CD (fixed-term deposit), business investment
- Most popular: Real estate (buy property ≥$48,600 = visa qualification)
- Duration: 2 years temporary residence
- Advantage: Property AND residency in one transaction
- Processing: 2-4 months
Rentista (Income) Visa:
- Income: 3× SBU = $1,458/month from non-pension foreign sources
- Sources: Rental income, investments, business income, trust distributions
- Proof: 6 months of bank statements showing consistent income
- Duration: 2 years temporary residence
- Best for: Digital nomads, remote workers, investors with passive income
Digital Nomad considerations:
- No dedicated DN visa (as of 2026)
- Professional visa ($486/month) is cheapest option for degree holders
- Tourist entry: 90 days visa-free for most Western nationalities
- Remote work on tourist visa: Gray area, widely practiced
All visa paths lead to:
- Permanent residency: After 2 years of temporary
- Citizenship: After 3 years of permanent (5 total)
- Dual citizenship: Ecuador allows it`,
    gotchas: `The SENESCYT credential registration for Professional Visa can take 4-8 weeks — start early. Investor visa requires the $48,600 to remain invested for the duration of your visa. Bank CDs earn low interest (2-4%). Real estate investment counts but property must be titled in your name. Rentista income must be consistently demonstrable — sporadic freelance income won't qualify. Tourist visa doesn't allow working for Ecuadorian employers. All documents need apostille + sworn Spanish translation — expensive and time-consuming. Criminal background checks needed from every country you've lived in for 5+ years.`,
    pro_tip: `The Investor visa via real estate purchase is the smartest path for most non-retirees — you get property AND residency for $48,600 (among the lowest investment visa thresholds globally). In Cuenca, $48,600 buys a decent 1-2BR apartment that can generate rental income. The Professional visa at just $486/month is the cheapest residency option but requires degree credential registration. For digital nomads without degrees, consider the Rentista visa if income exceeds $1,458/month. The path to citizenship (5 years total) is reasonable and Ecuador allows dual citizenship. All visa types grant equal access to IESS healthcare and Tercera Edad benefits (age-dependent).`,
  },

  {
    topic: 'Permanent Residency & Citizenship Path',
    country: 'EC',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Ecuador nationality law; citizenship requirements 2025-2026',
    content: `Ecuador permanent residency and citizenship (2026):
Permanent residency:
- Eligibility: After 21 months (effectively 2 years) of temporary residence
- Any visa type: Jubilado, Investor, Professional, Rentista — all qualify
- Requirements: Maintained original visa conditions + clean record + physical presence
- Processing: 2-4 months
- Benefits: Indefinite stay, work freedom, full IESS access
- Renewal: Every 5 years (administrative, usually automatic)
Citizenship by naturalization:
- Timeline: 3 years of permanent residence (5 years total from first temporary visa)
- Requirements: Basic Spanish proficiency, Ecuadorian history/civics knowledge
- Test: Oral interview (not written exam), basic level
- Cost: $200-500 in government fees
- Dual citizenship: Ecuador permits — no need to renounce original nationality
- Processing: 6-12 months after application
Ecuadorian passport benefits:
- Visa-free access: ~90 countries
- Mercosur associate: Travel/work rights in South America
- Growing passport strength (improving over time)
Citizenship by birth:
- Children born in Ecuador to foreign parents: Ecuadorian citizens automatically
- Jus soli (right of the soil) applies
Practical benefits of citizenship:
- Voting rights (mandatory for citizens 18-65)
- Full political rights
- Cannot be deported
- Easier access to government services and programs
- No visa renewal requirements`,
    gotchas: `The 5-year total path (2 temporary + 3 permanent) is straightforward but requires maintaining legal status throughout. Physical presence requirements are moderate — you can travel but should maintain Ecuador as your primary residence. The Spanish language interview is basic but must be passed. Citizenship processing has slowed (6-12 months typical). Ecuadorian passport, while improving, is weaker than Chilean or Uruguayan passports. Mandatory voting is enforced for citizens — fines for not voting. Once naturalized, Ecuadorian tax obligations become harder to avoid (citizenship = domicile presumption).`,
    pro_tip: `Ecuador's 5-year citizenship path with dual citizenship allowed is among the most accessible in Latin America. The citizenship interview is in Spanish and covers basic history/civics — prepare with a tutor ($10-15/session in Cuenca) for a few months before the interview. Children born in Ecuador get automatic citizenship — valuable for families. The combination of low cost of residency + fast citizenship + dual nationality makes Ecuador an excellent "second passport" strategy. Start learning Spanish seriously from year 1 — it helps both the citizenship test and daily quality of life.`,
  },

  // === BANKING ===
  {
    topic: 'Banking & Dollar Economy',
    country: 'EC',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Ecuadorian banking sector; expat account experiences 2025-2026',
    content: `Ecuador banking and dollar economy for expats (2026):
Dollar economy fundamentals:
- Official currency: US Dollar (USD) since 2000
- No exchange rate risk: All transactions in USD
- ATMs: Dispense USD. No conversion fees for US account holders
- Local coins: Ecuador mints its own centavo coins (same size as US cents)
- Cash economy: Many transactions still cash-based outside major cities
Major banks for expats:
- Banco Pichincha: Largest bank, most ATMs, app-based withdrawals (no card needed)
- Produbanco: Strong international banking, good for larger accounts
- Banco de Guayaquil: Growing expat services, modern digital banking
- Banco del Austro: Popular in Cuenca, good local service
- Banco Bolivariano: Strong in Guayaquil
Account opening requirements:
- Cédula de extranjero (foreigner ID) — requires residency visa
- Passport + visa documentation
- Proof of address (utility bill, rental contract)
- Initial deposit: $200-500 typical
- Income documentation or reference letter
- Some banks accept passport + tourist visa for basic accounts
Account features:
- Checking accounts: $0-10/month maintenance
- Savings accounts: 2-4% interest (in USD — competitive)
- Fixed-term CDs: 5-8% for 1-year term (excellent for USD savings)
- Debit cards: Work internationally, Visa/Mastercard
- Online banking: Available at major banks, improving rapidly
International transfers:
- Wise: Excellent for receiving USD in Ecuador (low fees)
- Bank SWIFT: Slow (3-5 days) and expensive ($25-50)
- Western Union: Physical locations throughout Ecuador`,
    gotchas: `Account opening without residency is difficult — most banks require cédula. The dollar economy means your money doesn't lose value to local currency fluctuation, but Ecuador has no central bank ability to print money (depends on USD flowing in). ATM withdrawal limits are typically $300-500/day. International wire transfers are expensive through Ecuadorian banks. Some banks have limited English-speaking staff. Fixed-term CDs are attractive (5-8% USD) but lock up funds. Banking technology is improving but still behind developed country standards. Monthly maintenance fees and transaction fees add up — read fine print carefully.`,
    pro_tip: `The dollar economy is Ecuador's single biggest financial advantage — zero currency risk, no conversion costs, your Social Security deposits at face value. Start with Banco Pichincha for widest ATM coverage and best app, then consider Produbanco for larger banking needs. The 5-8% CD rates in USD are exceptional — consider parking emergency fund in Ecuadorian CDs (COSEDE deposit insurance covers up to $32,000 per bank). Strategy: receive income internationally via Wise, maintain Ecuadorian account for daily expenses, invest surplus in CDs. Cuenca has multiple bank branches with bilingual staff accustomed to expat needs. The app-based ATM withdrawals (Banco Pichincha) eliminate card skimming risk.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Cuenca: The Retiree Capital',
    country: 'EC',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Cuenca real estate listings; International Living; EcuaPass 2026',
    content: `Cuenca real estate market — Ecuador's premier expat destination (2026):
Why Cuenca dominates:
- 10,000+ expat residents (largest expat community in Ecuador)
- UNESCO World Heritage colonial center
- Perfect spring-like climate year-round (14-21°C / 57-70°F)
- Altitude: 2,560m (8,400ft) — needs acclimatization
- Excellent healthcare infrastructure for a city of 400,000
Neighborhoods and prices:
- El Centro Histórico: Colonial charm, walkable, $500-800/month rent, purchase $60-120K for apartments
- Yanuncay: Residential area, newer buildings, popular with expats, $400-700/month rent, purchase $50-90K
- El Vergel: Upscale area near river, $600-1,000/month rent, purchase $80-150K
- Gringolandia (near Río Tomebamba): High expat concentration, English-friendly, $500-900/month rent
- Puertas del Sol: Newer suburban development, affordable, $350-550/month rent
Price per sqm:
- Premium areas: $800-1,200/sqm
- Mid-tier: $600-800/sqm
- Budget areas: $400-600/sqm
Rental market:
- Furnished 1BR: $350-600/month
- Furnished 2BR: $500-900/month
- Furnished 3BR house: $700-1,500/month
- Short-term furnished: $40-80/day (tourism premium)
Investment metrics:
- Rental yields: 5-8% gross
- Appreciation: 3-5% annually (stable, USD-denominated)
- Vacancy rates: Low in expat-popular areas
- Tourism demand: Growing Airbnb market`,
    gotchas: `Altitude (2,560m) causes real health issues for some — headaches, shortness of breath, sleep disruption for first 1-2 weeks. Some people never fully adjust. "Gringolandia" nickname reflects genuine concentration of expats that can create price inflation and cultural bubble. Rainy season (October-May) is wet — bring rain gear. Internet reliability varies by neighborhood. Some colonial buildings have structural issues — always get professional inspection. Cuenca is not Quito — limited direct international flights (connect through Guayaquil or Quito). Local construction quality varies — inspect carefully before purchasing.`,
    pro_tip: `Rent for 3-6 months before buying — Cuenca neighborhoods have very different personalities. El Centro is charming but can be noisy and touristy. Yanuncay offers best value for money with modern construction. The river neighborhoods (El Vergel, areas near Tomebamba) combine quality of life with walkability. For investment, focus on furnished 2BR apartments near El Centro — strong tourism and expat rental demand. The USD-denominated market means your property value won't erode to currency devaluation. Consider altitude carefully before committing — visit for at least 2 weeks to see how your body responds.`,
  },
  {
    topic: 'Quito & Coastal Property Markets',
    country: 'EC',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Quito real estate market; coastal property analysis 2025-2026',
    content: `Ecuador real estate beyond Cuenca: Quito and coastal markets (2026):
Quito neighborhoods:
- La Floresta: Bohemian, artistic, cafes and galleries, $500-900/month rent, purchase $80-150K
- González Suárez: Upscale high-rises, mountain views, $700-1,200/month rent, purchase $120-250K
- Cumbayá: Suburban valley, luxury gated communities, $1,000-2,500/month rent, purchase $200-500K+
- La Carolina: Central park area, good amenities, $500-800/month rent, purchase $80-160K
- Tumbaco: Adjacent to Cumbayá, more affordable, $600-1,000/month rent
Quito characteristics:
- Altitude: 2,850m (9,350ft) — higher than Cuenca, more altitude adjustment needed
- Population: 2.7 million (Ecuador's capital)
- International flights: Direct to US cities, European connections
- Culture: Museums, restaurants, nightlife — more cosmopolitan than Cuenca
- Safety: Improving, but petty crime common — neighborhood selection crucial
Coastal destinations:
- Salinas: Beach resort town, popular with expats and wealthy Ecuadorians
  - Beachfront condos: $80-200K, rentals $600-1,200/month
  - Strong vacation rental market
- Montañita: Surf town, younger crowd, bohemian vibe
  - Budget rentals: $300-600/month
  - Party atmosphere — not for everyone
- Playas (General Villamil): More authentic Ecuadorian beach town
  - Affordable: $200-400/month rent, purchase $40-80K
- Manta/San Clemente: Growing expat communities, good fishing
  - Mid-range: $300-600/month rent, purchase $60-120K
Coastal considerations:
- Hot and humid year-round (25-32°C / 77-90°F)
- No altitude issues (sea level)
- Security concerns: Coast generally has more crime than highlands
- Infrastructure: Variable — major cities better than small towns
- Internet: Less reliable than highland cities`,
    gotchas: `Quito's 2,850m altitude is even higher than Cuenca — more challenging for some. Security concerns in Quito are real, especially at night in certain neighborhoods. Coastal humidity accelerates building deterioration — maintenance costs higher. Beach properties can face erosion and flooding risks. Some coastal areas have seasonal water shortages. Guayaquil (Ecuador's largest city) has significant security issues — most expats avoid it for permanent residence. Montañita is fun for visits but party atmosphere makes it challenging for family living. Coastal internet and infrastructure lag behind highland cities significantly.`,
    pro_tip: `Quito offers the most cosmopolitan lifestyle in Ecuador — direct international flights, better restaurants, more cultural events. La Floresta is the Brooklyn of Quito — hip, creative, walkable. For luxury living, Cumbayá offers US-standard gated communities at a fraction of US prices. Coastal living suits those who want beach lifestyle and can handle heat/humidity — Salinas has best infrastructure and strongest rental market. Consider "two-base" strategy: highland home as primary (climate, healthcare) + affordable beach property for weekends/rentals. The coast is 3-4 hours from Quito or Cuenca — doable for regular visits.`,
  },
  {
    topic: 'Property Purchase Process',
    country: 'EC',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Ecuador property law; purchase procedures for foreigners 2025-2026',
    content: `Ecuador property purchase process for foreigners (2026):
Foreign ownership rights:
- Full ownership: Foreigners can buy property freely (no restrictions)
- No residency required: Can buy on tourist visa
- Land included: Can own land (unlike some Asian countries)
- Border restrictions: Cannot buy within 50km of border or coast (security zones) — waiver possible
- No limit: No cap on number of properties or total value
Purchase process:
1. Find property: Real estate agents, online listings (Plusvalía.com, OLX)
2. Due diligence: Title search through Registro de la Propiedad
3. Negotiate price: Bargaining expected and common
4. Promise contract (Promesa de Compraventa): Preliminary agreement, 10% deposit typical
5. Notary deed (Escritura Pública): Formalized at Notaría
6. Registration: Title registered at Registro de la Propiedad
7. Tax registration: Update municipal cadastral records
Transaction costs:
- Alcabala (transfer tax): 1% of declared value
- Registration fees: 0.5-1%
- Notary fees: 0.2-0.5%
- Legal fees: 1-2% (bilingual lawyer recommended)
- Total: ~3-5% of property value
Financing:
- Local mortgages: Available for residents, 8-12% interest rates
- Cash purchases: Most common for expats (lower cost, faster)
- Seller financing: Occasionally available, negotiable terms
- Foreign financing: Use home country equity/loans
Investor visa bonus: Property purchase ≥$48,600 qualifies for Investor Visa`,
    gotchas: `The 50km border/coast restriction can affect beach properties — waiver process adds time and cost. Title searches are essential — Ecuador has some complex property histories, especially in rural areas and indigenous communities. Declared values on deeds are sometimes understated (to reduce taxes) — this creates legal risk and affects future capital gains calculations. Local mortgages at 8-12% are expensive compared to other countries. Some properties don't have clear water/sewer connections — verify utilities. Construction permits and building quality vary — always hire independent inspector. Power of attorney possible for purchase if you can't be present.`,
    pro_tip: `The ability to buy property without residency AND use it to qualify for Investor Visa ($48,600 minimum) makes Ecuador uniquely accessible. Strategy: visit on tourist visa, find property, purchase, then apply for Investor Visa using the same property. This gets you residency + investment in one step. Always use a bilingual lawyer experienced with expat transactions — budget $1,000-2,000 for legal costs. The bargaining culture means listed prices are starting points — 10-20% negotiation is normal. For Cuenca properties, multiple expat-focused real estate agencies exist with English-speaking staff. Insist on clean title search through Registro de la Propiedad before signing anything.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'IESS Public Insurance & Private Healthcare',
    country: 'EC',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'IESS voluntary affiliation; EcuaPass healthcare guide 2026; hospital pricing',
    content: `Ecuador healthcare system for expats (2026):
IESS (Instituto Ecuatoriano de Seguridad Social):
- Voluntary affiliation: Available to ALL residents with cédula
- Cost: ~$85/month (based on SBU, adjusted annually)
- Coverage: Comprehensive — GP, specialists, surgery, hospitalization, dental, vision
- No pre-existing condition exclusions (major advantage)
- No age limits or age-based pricing
- 6-month waiting period for some procedures after enrollment
- Quality: Variable by facility — busy urban hospitals better than rural
- Wait times: Can be long for specialists (weeks to months)
Private healthcare costs:
- GP consultation: $25-40
- Specialist visit: $40-80
- MRI scan: $200-400
- Blood work panel: $30-60
- Dental cleaning: $35
- Root canal: $100-200
- Emergency room: $50-150
- X-ray: $20-40
Top private facilities:
- Hospital Metropolitano (Quito): Best in country, international standards
- Hospital Vozandes (Quito): Mission hospital, excellent reputation
- Clínica Santa Inés (Cuenca): Best private hospital in Cuenca
- Hospital Monte Sinaí (Cuenca): Growing, modern facility
- Hospital Kennedy (Guayaquil): Top Guayaquil private hospital
Private insurance options:
- Local plans (Salud SA, BMI): $80-200/month
- International plans (Cigna, Bupa): $150-400/month
- Recommended: IESS + supplemental private plan for best coverage
Medical tourism:
- Cuenca emerging as dental tourism hub
- Dental implant: $500-800 (vs $3,000-5,000 US)
- Cosmetic procedures: 50-70% less than US`,
    gotchas: `IESS quality varies dramatically by location — Quito and Guayaquil facilities are better than smaller cities. Wait times for IESS specialists can be very long (weeks to months). The 6-month waiting period means you need private insurance or cash for initial months. IESS dental is basic — serious dental work may need private providers. Language barrier significant in healthcare — few English-speaking doctors outside major private hospitals. Medication availability can be spotty for specialty drugs — bring supply from home country. Mental health services limited throughout Ecuador. Emergency services (ambulance) are inconsistent outside major cities.`,
    pro_tip: `The IESS at $85/month with no pre-existing condition exclusions is arguably the best healthcare value in the Americas. Strategy: enroll in IESS immediately upon getting cédula, then supplement with a $80-150/month private plan for faster access to specialists. Total healthcare cost: $165-235/month for comprehensive coverage. For retirees 65+, the Tercera Edad benefits add priority service. Cuenca expats report high satisfaction with Clínica Santa Inés for routine/specialist care and IESS for prescriptions and dental. The dental tourism value is real — many expats plan dental work around visits. Keep a relationship with a bilingual doctor in private practice as your medical navigator.`,
  },
  {
    topic: 'Altitude Health Considerations',
    country: 'EC',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Altitude medicine; expat health experiences in highland Ecuador 2025-2026',
    content: `Altitude health considerations for Ecuador highland cities (2026):
Altitude overview:
- Cuenca: 2,560m (8,400ft)
- Quito: 2,850m (9,350ft)
- Ambato: 2,500m (8,200ft)
- Riobamba: 2,750m (9,020ft)
- Coastal cities: Sea level (no altitude issues)
Common altitude effects (first 1-2 weeks):
- Headaches (most common, affecting 50-75% of arrivals)
- Shortness of breath (especially with exertion)
- Sleep disruption (waking at night, vivid dreams)
- Fatigue and reduced energy
- Mild nausea
- Increased urination
- Faster heart rate
Serious altitude sickness (rare but possible):
- Severe persistent headache
- Confusion or disorientation
- Fluid in lungs (HAPE) — medical emergency
- Brain swelling (HACE) — medical emergency
- Treatment: Descend to lower altitude immediately
Who should be cautious:
- Heart conditions: Consult doctor before relocating
- Lung conditions (COPD, emphysema): May struggle permanently
- Sleep apnea: Can worsen at altitude
- Anemia: Makes altitude adjustment harder
- Elderly: Longer adjustment period typical
Adaptation timeline:
- Days 1-3: Most symptoms appear
- Week 1-2: Gradual improvement for most people
- Month 1-3: Full physiological adaptation
- Some people: Never fully adapt (5-10% of arrivals)
Mitigation strategies:
- Hydrate aggressively (3-4 liters/day)
- Avoid alcohol first week
- Take it easy first 48 hours (no strenuous activity)
- Coca tea: Traditional remedy, mild altitude relief
- Acetazolamide (Diamox): Prescription preventive, discuss with doctor
- Sleep with head elevated
- Arrive via lower-altitude city first (Guayaquil, then drive up)`,
    gotchas: `Altitude is the single most underestimated challenge for Ecuador highland relocation. About 5-10% of people never fully adapt and must relocate to coastal areas. Pre-existing heart and lung conditions can make altitude dangerous — get medical clearance before committing. Sleep quality is permanently affected for some people — a real quality of life issue. Cooking at altitude requires recipe adjustments (water boils at lower temperature). Athletic performance permanently reduced (less oxygen). UV radiation intensity is significantly higher at altitude — sunburn risk even on cloudy days. The perfect climate often overshadows the altitude reality in marketing materials.`,
    pro_tip: `Test altitude tolerance before committing to highland living — spend 3-4 weeks in Cuenca or Quito to see how your body responds. If you experience persistent symptoms after 2 weeks, consider coastal alternatives (Salinas, Manta). The "arrive low, go high" strategy works well — fly into Guayaquil, spend a day at sea level, then travel up to Cuenca (gradual ascent helps). Hydration is critical — carry water everywhere and drink more than you think you need. The altitude-climate trade-off is real: highland cities have nearly perfect weather but altitude challenges, while coastal cities have no altitude issues but are hot and humid. Some retirees solve this with dual-base strategy: highland primary home + coastal escape.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living Breakdown',
    country: 'EC',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'EcuaPass 2026 budgets; CuencaHighLife; International Living',
    content: `Ecuador cost of living for expats (2026, all in USD):
Monthly budget ranges (Cuenca — most popular expat city):
- Budget lifestyle (single): $750-1,000/month
- Comfortable lifestyle (couple): $1,500-2,500/month
- Luxury lifestyle (couple): $3,000-4,500/month
Detailed breakdown (comfortable couple, Cuenca):
- Rent (furnished 2BR): $500-900/month
- Utilities (electric, water, gas): $40-80/month
- Internet (fiber where available): $30-50/month
- Groceries: $250-400/month
- Dining out (2-3x/week): $100-200/month
- Transportation (taxi/bus): $50-100/month
- Healthcare (IESS + supplemental): $170-300/month
- Entertainment: $50-150/month
- Domestic help (weekly): $80-120/month
- Miscellaneous: $100-200/month
Food costs:
- Local restaurant meal: $3-6
- Mid-range restaurant: $15-25 for two
- Coffee: $1.50-3
- Beer (local): $2-3
- Market groceries: Extremely affordable ($30-50/week for couple)
- Imported goods: More expensive (US brands at premium)
Regional comparison:
- Cuenca: Baseline (cheapest major expat destination)
- Quito: 20-30% more expensive
- Guayaquil: Similar to Cuenca
- Coastal towns: 10-20% cheaper than Cuenca (basic amenities)
- Vilcabamba: Similar to Cuenca, smaller scale
Dollar advantage:
- No exchange rate losses on income
- US bank cards work everywhere
- Prices stable (no devaluation risk)
- Social Security deposits at full value`,
    gotchas: `"$1,000/month in Ecuador" marketing is misleading — that's bare-bones, not comfortable. Realistic comfortable couple budget is $1,800-2,500. Imported goods (electronics, US brands, specialty foods) are expensive. Restaurant prices have increased significantly 2024-2026. Utilities are cheap but internet quality varies dramatically by location. Domestic help is affordable but comes with legal obligations (social security contributions, 13th/14th month bonuses). Gasoline is subsidized but prices fluctuating. Some areas have seasonal water restrictions. The USD economy means prices can only go up — no devaluation "discount" possible.`,
    pro_tip: `The dollar economy is both Ecuador's biggest advantage and misconception source. Advantage: zero currency risk, simple finances, no conversion costs. Misconception: prices are absolute, not relative — there's no "weak local currency" making things cheaper, they're just genuinely low-cost. Buy local produce at mercados (markets) for 50-70% savings over supermarkets. Domestic help at $80-120/month for weekly cleaning is transformative for quality of life. Consider a Cuenca lifestyle where $2,000/month buys what $5,000+ buys in a US city. The Tercera Edad discounts for 65+ reduce effective costs by another 15-20%. Track your actual spending for 3 months before setting long-term budget.`,
  },
  {
    topic: 'Security Situation & Safety',
    country: 'EC',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'US Embassy security alerts March 2026; crime statistics; expat safety reports',
    content: `Ecuador security situation for expats (March 2026):
Current status (CRITICAL UPDATE):
- US Travel Advisory: Level 2 — "Exercise Increased Caution"
- State of Emergency: Active in several provinces (as of early March 2026)
- US military: Joint operations on Ecuadorian soil (2026)
- Drug trafficking: Root cause — Ecuador positioned between Colombia and Peru cocaine routes
- Gang violence: Primarily affects coastal cities and border regions
Regional safety assessment:
- Cuenca (Highland): SAFEST major city in Ecuador. Violent crime rare for expats
  - Common crimes: Petty theft, pickpocketing in tourist areas
  - Expat community: Well-established, mutual support networks
  - Police presence: Adequate in tourist/expat areas
- Quito (Highland): Moderate risk. Petty crime common, violent crime concentrated in specific neighborhoods
  - Safe areas: La Floresta, Cumbayá, González Suárez (well-patrolled)
  - Avoid: South Quito after dark, isolated areas
- Guayaquil (Coast): Highest risk. Significant violent crime
  - NOT recommended for expat residence
  - Transit only if necessary
- Coastal areas: Variable. Salinas safer than average, border areas dangerous
- Galápagos: Very safe (isolated, tourism-dependent economy)
Practical safety guidelines:
- Don't display wealth (expensive jewelry, phones, flashy clothing)
- Use registered taxis or ride-share apps
- Avoid walking alone after dark in unfamiliar areas
- Keep copies of documents separate from originals
- Use hotel/apartment safes for valuables
- Stay informed via US Embassy alerts and local news
- Build local network — neighbors and community are your safety net
Context:
- 1.4 million+ tourists visited Ecuador in 2025 with no incidents
- Violent crime targeting expats in highland cities is rare
- Property crime is the primary concern for residents
- Security situation has improved under current government anti-gang operations`,
    gotchas: `Ecuador's security situation has genuinely deteriorated since 2023 — this is not fear-mongering. Gang violence related to drug trafficking has brought states of emergency and military operations. However, the violence is heavily concentrated in coastal/border areas and rarely affects highland expat communities. Cuenca remains remarkably safe for its region. Insurance premiums may increase due to country risk ratings. Some expats have left due to security concerns — this is a personal risk tolerance decision. Don't dismiss security concerns, but don't let them override the reality that millions live safely in Ecuadorian highlands.`,
    pro_tip: `The security situation requires honest assessment, not panic. Cuenca's safety record for expats remains excellent — the violence is concentrated in ports, borders, and coastal areas connected to drug trafficking. Strategy: live in highland cities (Cuenca, Quito neighborhoods), avoid Guayaquil except for airport transit, skip border areas entirely. Register with your embassy for security alerts. The 10,000+ expat community in Cuenca provides genuine mutual support and current safety information. If security is your primary concern, Cuenca's crime rate is comparable to many mid-sized US cities. The state of emergency and military operations are actually improving safety in affected areas — the government is taking action, not ignoring the problem.`,
  },
  {
    topic: 'Climate & Geography Diversity',
    country: 'EC',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Ecuador climate data; geographic zones; lifestyle considerations 2025-2026',
    content: `Ecuador climate and geographic diversity (2026):
Four distinct regions:
1. Sierra (Highlands): 
   - Climate: "Eternal spring" — 14-21°C (57-70°F) year-round
   - Seasons: Wet (Oct-May) and dry (June-Sep), minimal temperature variation
   - Best for: Year-round comfortable living, those who prefer mild temperatures
   - Cities: Cuenca, Quito, Ambato, Loja, Vilcabamba
   - Altitude: 2,000-3,000m — adaptation needed
2. Costa (Coast):
   - Climate: Tropical, hot and humid — 25-32°C (77-90°F)
   - Seasons: Wet (Dec-May) and dry (June-Nov)
   - Best for: Beach lovers, those who prefer warmth, no altitude tolerance
   - Cities: Guayaquil, Salinas, Manta, Montañita, Playas
   - Altitude: Sea level — no adaptation
3. Oriente (Amazon):
   - Climate: Tropical rainforest, hot and very humid
   - Not typically for permanent expat residence
   - Tourism/adventure destination
4. Galápagos Islands:
   - Climate: Subtropical, moderate temperatures
   - Limited residence options, expensive, highly regulated
   - Tourist destination, not typical expat target
Ecuador's unique advantage:
- Equatorial location: 12 hours of daylight year-round (no SAD/seasonal depression)
- Biodiversity: Most biodiverse country per square kilometer globally
- Weekend escapes: Beach, mountains, jungle all within 3-4 hours
- Volcanic activity: Active volcanoes near Quito (Cotopaxi, Tungurahua) — monitored
- Earthquakes: Periodic risk, especially coast (major quake 2016)
Cuenca specific:
- Temperature: 14-21°C daily, 8-12°C nights (cool, never cold)
- Humidity: Moderate (40-65%)
- Rain: Afternoon showers common Oct-May, dry June-September
- No heating or AC needed (massive savings)
- UV intensity: Very high at altitude — sunscreen essential daily`,
    gotchas: `"Eternal spring" marketing overlooks that Cuenca nights can be cool (8-12°C) and buildings lack heating — dress warmly indoors. The equatorial sun is intense at altitude — UV radiation significantly higher than sea level, sunburn possible in 15 minutes. Afternoon rain in wet season is almost daily — plan activities for mornings. Volcanic and earthquake risk is real, though well-monitored. The coast gets very hot and humid — AC is expensive to run. Internet and infrastructure quality varies dramatically between climate zones. Galápagos residency is extremely restricted and expensive — not a realistic option for most expats.`,
    pro_tip: `Ecuador packs four climate zones into a country the size of Colorado — take advantage of this diversity. Base in Cuenca for the climate and healthcare, then explore coast for beach weekends, Amazon for adventure, and highlands for trekking. The "no heating, no AC" climate of Cuenca saves $100-200/month vs comparable quality of life elsewhere. The 12 hours of consistent daylight year-round is an underrated quality of life benefit — no seasonal depression or winter darkness. Consider the UV radiation seriously — quality sunscreen, hats, and sunglasses are daily essentials at highland altitude. The geographic diversity means you can find your perfect microclimate within 3-4 hours of any base.`,
  },

  // === ADDITIONAL ENTRIES ===
  {
    topic: 'Retiree Discounts (Tercera Edad) Deep Dive',
    country: 'EC',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Ecuador Tercera Edad law; benefit calculations 2025-2026',
    content: `Ecuador Tercera Edad (Senior/Third Age) benefits — detailed breakdown (2026):
Eligibility:
- Age: 65 years or older
- Status: Must be legal resident with cédula
- Nationality: Available to ALL residents, not just Ecuadorian citizens
- Enrollment: Automatic with cédula showing age 65+
Discount categories:
- Domestic flights: 50% off economy class (including flights originating in Ecuador to international destinations)
- Public transportation: 50% off (buses, Metro)
- Utilities: 50% off on first $15 of electricity, first $8 of water
- Property tax: 50% reduction
- Entertainment: 50% off movies, theaters, concerts, museums
- Sporting events: 50% off admission
- Priority service: Front-of-line at banks, government offices, healthcare
VAT refund (IVA Devolución):
- Eligible purchases: Up to 5× SBU monthly ($2,430)
- VAT rate: 12% (15% on some items)
- Maximum monthly refund: ~$120/month ($1,440/year)
- Process: Collect electronic receipts (facturas), file through SRI portal
- Frequency: Monthly or quarterly refund to bank account
Savings calculations (typical retiree couple, both 65+):
- Utility discounts: $20-30/month savings
- VAT refunds: $100-240/month (combined for couple)
- Property tax: $50-100/year savings
- Entertainment: $30-50/month savings
- Flights: $100-300/year savings
- Total estimated: $200-350/month in savings ($2,400-4,200/year)
Effective income boost:
- On a $2,000/month budget, Tercera Edad benefits provide 10-17% effective income increase
- Combined with low base costs, this creates extraordinary purchasing power`,
    gotchas: `VAT refund requires consistent collection of electronic invoices (facturas electrónicas) — you must ask vendors to issue facturas with your cédula number. Not all merchants issue facturas readily — some try to avoid it. The VAT refund process through SRI can be confusing initially — consider getting help from a local accountant ($20-30/visit). Flight discounts apply to domestic carriers, and some international legs originating in Ecuador — not all airlines comply equally. Utility discounts have caps that limit savings for high-consumption households. The benefits are extraordinary but require active management — they don't apply automatically to most purchases.`,
    pro_tip: `The Tercera Edad benefits are Ecuador's secret weapon for retirees — no other country offers such comprehensive senior discounts to foreign residents. The VAT refund alone can return $1,000-2,800/year to a couple. Key: always ask for "factura con cédula" at every purchase — restaurants, pharmacies, hardware stores, supermarkets. Set up the SRI online portal early and file monthly for fastest refunds. Combined with already-low costs, a couple on $2,500/month in Cuenca with full Tercera Edad benefits lives the equivalent of $3,000-3,500/month lifestyle. This is the mathematical case for Ecuador over competing retiree destinations (Panama, Portugal, Thailand).`,
  },
];
