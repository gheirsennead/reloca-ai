import { KnowledgeBaseEntry } from '../knowledge-base-schema';

export const CHILE_KNOWLEDGE_BASE: KnowledgeBaseEntry[] = [
  // === TAX ===
  {
    topic: 'Income Tax System & Foreign Income Exemption',
    country: 'CL',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SII (Servicio de Impuestos Internos); tax reform updates 2025-2026',
    content: `Chile income tax system for residents and expats (2026):
Progressive tax rates (2026):
- 0%: Up to UTM 13.5 (~$850/month, ~$10,200/year)
- 4%: UTM 13.5-30 ($850-1,890/month)
- 8%: UTM 30-50 ($1,890-3,150/month)
- 13.5%: UTM 50-70 ($3,150-4,410/month)
- 23%: UTM 70-90 ($4,410-5,670/month)
- 30.4%: UTM 90-120 ($5,670-7,560/month)
- 35.5%: Above UTM 120 ($7,560+/month)
Note: UTM (Unidad Tributaria Mensual) = $63 in March 2026
Tax residency triggers:
- Physical presence: 183+ days in any calendar year
- Domicile: Legal residence in Chile (regardless of days)
- Center of vital interests: Family, economic ties in Chile
Foreign income exemption (NEW RESIDENTS):
- First 3 years: 0% tax on foreign income (automatic)
- Extension possible: Additional 3 years (6 total) with SII approval
- Requirement: Must be genuinely new to Chile (never been tax resident)
- Covers: Foreign employment, business income, investment returns, rental income
- Exceptions: Chilean-source income always taxed, even during exemption period
Tax treaty network: 30+ treaties (US, UK, Germany, Canada, Australia, etc.) providing relief from double taxation`,
    gotchas: `The 6-year foreign income exemption is ONLY for genuinely new residents — if you were previously tax resident in Chile, you don't qualify. The exemption doesn't cover Chilean-source income. Tax residency triggers at 183 days, lower than many countries. UTM rates change monthly — tax brackets adjust with inflation. SII (tax authority) is increasingly sophisticated in tracking international income after the grace period ends. Keep detailed records of pre-residency vs post-residency income sources.`,
    pro_tip: `The 6-year foreign income exemption makes Chile one of the most tax-efficient jurisdictions for new expat residents in Latin America. Strategy: establish tax residency, keep foreign investments and income streams outside Chile during the exemption period, then reassess after 6 years. Unlike territorial systems (Paraguay, Panama), you eventually face worldwide taxation — but 6 years is substantial. The progressive system is reasonable for local Chilean income, and the tax treaty network is excellent for avoiding double taxation post-exemption.`,
  },
  {
    topic: 'Corporate Tax & Business Structure',
    country: 'CL',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SII corporate tax regulations; business formation requirements 2026',
    content: `Chile corporate taxation and business structures (2026):
Corporate income tax:
- Standard rate: 27% (reduced from 35% in tax reform)
- Small business rate: 25% for companies with revenue <UF 25,000 (~$1.1M)
- First category tax: 27% on retained profits
- Additional tax: Up to 35% on profit distributions to non-residents
Business structures available to expats:
- SpA (Sociedad por Acciones): Most flexible, single shareholder allowed, minimum capital CLP $0
- Limitada (SRL): Traditional LLC structure, 2-50 partners, profit sharing flexibility
- EIRL (Individual Limited Liability): Single-person entity, good for consultants/freelancers
- Branch office: Foreign company branch, simpler but less tax efficient
VAT (IVA): 19% standard rate (one of highest in LATAM)
- Services: Generally subject to 19% IVA
- Exports: 0% rate (competitive advantage)
- Threshold: All businesses must register for IVA regardless of size
RUT (Tax ID):
- Required for all business activity
- Obtained after residency visa approval
- Essential for banking, contracts, invoicing`,
    gotchas: `The 27% corporate rate is competitive globally, but the 35% additional tax on distributions to non-residents creates high effective rates for foreign investors. 19% VAT applies broadly — factor into pricing. RUT requirement means you need residency visa before serious business activity. SII requires detailed accounting in Spanish. The tax reform removed some business deductions — professional advice essential for optimization. Branch offices of foreign companies face restrictions on profit repatriation.`,
    pro_tip: `SpA structure offers maximum flexibility for expats — single shareholder, variable capital, board structure adaptable. For digital services exported outside Chile, the 0% VAT rate creates competitive advantage. Consider timing of profit distributions during the foreign income exemption period — receiving corporate dividends as a non-tax-resident might optimize overall tax burden. The 25% small business rate provides meaningful savings for companies under ~$1.1M revenue. Professional tax advice is non-negotiable — Chilean tax law is complex and penalties are severe.`,
  },
  {
    topic: 'Property Tax & Transfer Taxes',
    country: 'CL',
    category: 'tax',
    last_updated: '2026-03-01',
    source: 'SII property tax rates; real estate transaction costs 2025-2026',
    content: `Chile property taxes and real estate transaction costs (2026):
Property tax (Contribuciones):
- Rate: 1.2% of fiscal value annually (residential)
- Commercial property: 1.4% of fiscal value
- Luxury property: Additional 0.025% on properties >UF 8,000 (~$352K)
- Payment: Quarterly installments or annual with discount
- Exemption: Properties <UF 225 (~$9,900) are exempt
Transfer taxes on property purchase:
- Property transfer tax: 2.4% of greater of sale price or fiscal value
- Stamp duty: 0.2% of transaction value
- Notary fees: 0.2-0.4% of transaction value
- Registry fees: 0.1-0.2% of transaction value
- Total transaction costs: ~3-3.5% of property value
Capital gains tax on property sale:
- Residents: Integrated into income tax (up to 35.5% on gains)
- Non-residents: 35% withholding tax on gross sale price
- Principal residence exemption: Available for primary home (conditions apply)
- Holding period: No preferential rates for long-term holdings
Fiscal vs market value:
- Fiscal values: Set by SII, typically 70-85% of market value
- Assessment updates: Every 2-3 years, significant jumps possible
- Impact: Property tax based on fiscal value, but transfer tax uses higher of fiscal/market value`,
    gotchas: `Chile property taxes are moderate (1.2%) but fiscal values can jump significantly in reassessments. Capital gains tax at income rates (up to 35.5%) makes Chile less attractive for property investment compared to neighbors. The 35% withholding tax on non-residents is brutal — factor into exit planning. Luxury property surtax kicks in at relatively modest levels ($352K). Transaction costs at 3-3.5% are reasonable but must be budgeted. Principal residence exemption has strict conditions — professional advice needed.`,
    pro_tip: `For investment property, consider timing of purchase/sale around the foreign income exemption period — capital gains might be exempt if the property is considered foreign-source income (complex). The fiscal value system creates predictable property taxes, unlike market-value assessments elsewhere. For residents, the integrated capital gains tax means property gains are taxed as ordinary income — consider this in overall investment allocation. Professional valuation during purchase can help establish cost basis for future capital gains calculations.`,
  },

  // === VISA ===
  {
    topic: 'Temporary Residence Pathways',
    country: 'CL',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'SERMIG (Servicio Nacional de Migraciones); visa requirements 2025-2026',
    content: `Chile temporary residence visa options for expats (2026):
Work visa (Residencia Temporal - Trabajo):
- Requirement: Job offer from Chilean employer
- Duration: Up to 2 years, renewable
- Processing time: 4-8 months at Extranjería
- Employer sponsorship: Must be maintained throughout visa period
- Path to permanent: Apply after 1 year of temporary residence
Investment visa (Residencia Temporal - Inversionista):
- Minimum investment: No fixed amount, but typically $100K+ in productive activity
- Business plan: Required showing job creation or economic benefit
- Duration: Up to 2 years, renewable
- Processing: 6-12 months (complex documentation)
Rentista visa (Independent means):
- Income requirement: No fixed amount, but must demonstrate sustainable foreign income
- Documentation: Bank statements, income proof, clean criminal record
- Target: Retirees, digital nomads, those with passive income
- Duration: Up to 2 years
Family reunification:
- Available for spouses, children, parents of Chilean residents/citizens
- Duration: Tied to sponsor's status
- Processing: 3-6 months typically
Student visa transition:
- Chilean university graduates can transition to work visa
- Requirement: Job offer in field of study
- Growing tech sector creates opportunities for graduates`,
    gotchas: `Extranjería processing is notoriously slow (6-12 months typical). All documents need apostille + sworn translation to Spanish — expensive and time-consuming. Investment visa requires demonstrating economic benefit to Chile, not just parking money. Work visa ties you to specific employer — changing jobs requires visa modification. Criminal background checks needed from all countries lived in 5+ years. Processing times have worsened post-COVID. No guarantee of approval even with complete documentation.`,
    pro_tip: `Apply early — Chilean visa processing is among the slowest in Latin America. Consider hiring Chilean immigration lawyer from the start — the bureaucracy is complex and mistakes cause major delays. For investment visa, focus on job creation and technology sectors — government prioritizes applications showing clear economic benefit. Tourist visa allows 90 days to explore and potentially start application process. The rentista option is underused — good for digital nomads with documented remote income. Keep all documentation in both original language and Spanish throughout the process.`,
  },
  {
    topic: 'Digital Nomad Visa (Launched 2024)',
    country: 'CL',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'SERMIG digital nomad visa program; application process 2025-2026',
    content: `Chile Digital Nomad Visa (Visa de Nómada Digital) launched 2024:
Eligibility requirements (2026):
- Remote work: Must work for foreign company or foreign clients
- Income threshold: Minimum $2,000/month demonstrated income (verified last 6 months)
- Employment: Cannot work for Chilean companies while on DN visa
- Insurance: Health insurance covering Chile required
- Clean record: Criminal background check from home country
- Education: University degree OR 3+ years relevant work experience
Duration and renewal:
- Initial period: 1 year (non-renewable)
- Extension: Can apply for temporary residence after 1 year if meeting requirements
- Multiple entry: Visa allows multiple entries during validity period
- Tax implications: Becomes Chilean tax resident if present 183+ days
Application process:
- Online application through SERMIG portal
- Required documents: Employment contracts, income proof, insurance, criminal record
- Processing time: 30-60 days (faster than traditional visa types)
- Visa fee: $200 application fee
- Location: Can apply from outside Chile
Benefits:
- Work legally: Can work remotely for foreign employers
- Bank account: Eligible to open Chilean bank account with DN visa
- Healthcare: Can access private healthcare system
- Travel: Visa enables regional travel within Mercosur`,
    gotchas: `The $2,000/month minimum is strictly enforced — need bank statements + employment contracts as proof. Cannot work for Chilean companies AT ALL — violation can result in deportation. Tax residency still triggers at 183 days regardless of visa type — you'll owe Chilean taxes on worldwide income (minus foreign exemption if applicable). One-year limit with no renewal means you must transition to another visa type or leave. Health insurance requirement is specific — travel insurance may not qualify. Application must demonstrate genuine remote work relationship, not just freelance activity.`,
    pro_tip: `Chile's DN visa is more restrictive than similar programs in Colombia or Brazil, but the 6-year foreign income tax exemption makes it attractive for new residents. Strategy: use DN visa year to establish Chilean residency and explore permanent visa options. The banking access is valuable — most countries don't allow DN visa holders to open bank accounts. Santiago's tech ecosystem and UTC-3/4 timezone alignment with US East Coast make it appealing for remote workers. Consider timing arrival to maximize the foreign income exemption period. Document all income sources clearly — Chilean bureaucracy is detail-oriented.`,
  },
  {
    topic: 'Permanent Residency & Citizenship Path',
    country: 'CL',
    category: 'visa',
    last_updated: '2026-03-01',
    source: 'Chilean nationality law; permanent residence requirements 2025-2026',
    content: `Chile permanent residency and citizenship pathway (2026):
Permanent residence eligibility:
- Time requirement: 1 year of temporary residence (any category)
- Continuous residence: No extended absences during qualifying year
- Clean record: No criminal convictions in Chile
- Self-sufficiency: Demonstrate ability to support yourself
- Application timing: Can apply 2 months before temporary visa expires
- Processing: 6-12 months for permanent residence approval
Permanent residence benefits:
- Indefinite stay: No renewal required (review every 5 years)
- Work freedom: Can work for any employer or be self-employed
- Social benefits: Access to public healthcare (FONASA), education
- Property: Can buy property without restrictions
- Bank access: Full banking services available
Chilean citizenship requirements:
- Residence: 5 years of legal residence (temporary + permanent combined)
- Integration: Basic Spanish language proficiency required
- Knowledge: Chilean history and constitution test (basic level)
- Clean record: No serious criminal convictions
- Oath ceremony: Must attend naturalization ceremony in Chile
- Dual citizenship: Chile allows dual citizenship with most countries
Citizenship benefits:
- EU access: Chilean passport allows visa-free travel to Schengen area
- Political rights: Can vote and run for office (except President)
- Irrevocable: Cannot be revoked except for treason or similar serious crimes
- Regional benefits: Full Mercosur rights, easier travel throughout Americas`,
    gotchas: `The "1 year continuous residence" is strictly interpreted — extended trips can reset the clock. Permanent residence has a 5-year renewal requirement, though it's usually automatic. Citizenship Spanish language test is basic but must be passed — no exceptions. Chilean passport is strong (visa-free to 174 countries) but takes 5+ years to obtain. The residence requirement is cumulative but must be legal status throughout. Document everything — Chilean bureaucracy loves paperwork and any gaps in documentation cause delays.`,
    pro_tip: `Chile's 5-year citizenship path is reasonable compared to most developed countries. The permanent residence after just 1 year of temporary status is faster than many alternatives. Chilean citizenship provides excellent travel freedom + EU access via strong passport. Strategy: get temporary residence ASAP, maintain continuous presence, document everything, start Spanish study early. The integration requirements are reasonable — basic Spanish and civics knowledge. Chilean dual citizenship policy is permissive — you typically won't need to renounce original nationality. Consider this path if you want genuine long-term roots in Latin America with European travel access.`,
  },

  // === BANKING ===
  {
    topic: 'Bank Account Opening & RUT Requirements',
    country: 'CL',
    category: 'banking',
    last_updated: '2026-03-01',
    source: 'Major Chilean banks; account requirements 2025-2026',
    content: `Chilean banking system for expats (2026):
RUT requirement (ESSENTIAL):
- RUT (Rol Único Tributario): Chilean tax ID number
- Obtained: After temporary residency approval
- Process: Visit SII office with visa documentation, photos
- Timeline: 1-2 weeks after residency approval
- Mandatory: Cannot open bank account without RUT
Major banks accepting expats:
- BancoEstado: Government bank, CuentaRUT (free basic account, no minimum balance)
- Banco de Chile: Largest private bank, Cuenta FAN (no monthly fee option)
- Santander Chile: International presence, LATAM Pass credit cards
- BCI (Banco de Crédito e Inversiones): Strong private banking
- Banco Itaú: Brazilian bank, growing in Chile
Account opening requirements:
- Valid RUT (non-negotiable)
- Temporary/permanent residence card
- Passport + visa documentation
- Proof of address in Chile (utility bill, rental contract)
- Income documentation (employment letter, bank statements)
- Initial deposit: Varies by bank ($50-500 typically)
Account types and costs:
- Basic checking: $0-15/month maintenance
- Premium accounts: $30-100/month (benefits like travel insurance, airport lounge access)
- Savings accounts: Lower interest rates (1-3% annually)
- USD accounts: Limited options, mainly for businesses`,
    gotchas: `No RUT = no bank account, period. You must have legal residence status to get RUT. Chilean banks are conservative — account opening can take multiple visits and weeks. Monthly maintenance fees are common unlike some neighboring countries. International wire transfers are expensive ($30-75) and slow. Credit history starts from zero — building credit takes time. USD personal accounts are rare, most banks focus on CLP. Online banking is decent but often Spanish-only. ATM fees add up quickly for foreign cards.`,
    pro_tip: `Start with CuentaRUT from BancoEstado — it's free, widely accepted, and gets you into the Chilean financial system immediately. Once established, can upgrade to better banks with superior service. Banco de Chile and BCI offer good expat services and English support. Consider Santander if you want LATAM airline partnerships. Chilean banks offer surprisingly good mortgage rates (4-6%) once you establish credit history. Keep some international banking alongside Chilean accounts — Chilean banks aren't great for international transactions. CLP debit cards work throughout Latin America, making regional travel easier.`,
  },

  // === REAL ESTATE ===
  {
    topic: 'Santiago Neighborhoods & Property Prices',
    country: 'CL',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'TheLatinvestor; Portal Inmobiliario; neighborhood analysis 2025-2026',
    content: `Santiago real estate market and neighborhood guide (2026):
Premium neighborhoods (highest prices):
- Las Condes: Business district, UF 9,000-20,000 ($400K-887K). Modern high-rises, shopping malls
- Vitacura: Upscale residential, UF 8,000-18,000 ($354K-797K). Tree-lined streets, embassies
- Lo Barnechea: Exclusive hillside community, houses UF 10,000-25,000 ($443K-1.1M)
Mid-tier neighborhoods (expat-friendly):
- Providencia: Central, apartments UF 6,500-14,000 ($288K-621K). Great walkability, Metro access
- Ñuñoa: Hip, artistic area, UF 4,500-8,000 ($200K-354K). Growing tech scene, good value
- Manquehue: Newer development, UF 7,000-12,000 ($310K-532K). Modern amenities
Budget-friendly options:
- Maipú: Western Santiago, UF 3,000-5,500 ($133K-244K). Family-oriented, Metro connection
- San Miguel: Traditional neighborhood, UF 2,500-4,500 ($111K-200K). Authentic Chilean culture
Market prices per sqm:
- Prime areas (Las Condes/Vitacura): $2,800-3,500/sqm
- Mid-tier (Providencia/Ñuñoa): $2,200-2,800/sqm
- Budget areas: $1,800-2,200/sqm
Rental market:
- Las Condes: 24 UF/month (~$1,065) for 2BR apartment
- Providencia: 18-22 UF/month (~$800-975) for 2BR
- Ñuñoa: 14-18 UF/month (~$620-800) for 2BR
UF (Unidad de Fomento): Chilean inflation-adjusted unit = $44.30 (March 2026)`,
    gotchas: `UF pricing means costs adjust monthly with inflation — budgets can shift. Santiago air pollution is serious problem in winter months (May-August). Earthquake risk is real — ensure buildings meet current seismic standards. Traffic congestion is severe — proximity to Metro crucial. Property taxes based on fiscal value, but values are being updated upward. Some older buildings lack proper insulation — heating costs can be high. HOA fees (gastos comunes) can be $100-300/month additional. Title issues possible — lawyer essential for purchase.`,
    pro_tip: `Focus on neighborhoods with Metro access — Santiago traffic is brutal and Metro is efficient. Providencia offers best balance of price, location, and amenities for most expats. UF-denominated pricing protects against peso devaluation over time. Consider altitude — Las Condes and eastern areas have better air quality due to elevation. Earthquake insurance is cheap and essential. Winter heating costs vary dramatically by building quality and insulation. The Chilean property market is mature and transparent compared to regional alternatives. Consider proximity to international schools if you have children.`,
  },
  {
    topic: 'Coastal Cities: Valparaíso & Viña del Mar',
    country: 'CL',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Coastal property market analysis; city comparisons 2025-2026',
    content: `Chilean coastal real estate: Valparaíso and Viña del Mar (2026):
Valparaíso (UNESCO World Heritage):
- Average apartment: UF 3,000 (~$132,000)
- Premium areas (Cerro Alegre, Cerro Concepción): 20-40% premium above city average
- Price per sqm: ~$2,250
- Character: Historic, bohemian, colorful hillside houses
- Rental yields: 6-8% due to tourism and student population
- Distance from Santiago: 1.5 hours by car, frequent bus service
Viña del Mar (Garden City):
- Average apartment: UF 2,700 (~$119,000)
- Beachfront properties: UF 4,000-7,000 ($177K-310K)
- Price per sqm: ~$2,250-2,500
- Character: Beach resort town, casinos, modern amenities
- Tourist season: December-March high demand
- Year-round: More relaxed than Santiago, good restaurants
Investment considerations:
- Tourism rental potential: Both cities popular for short-term rentals
- Seasonal variation: Prices/rents higher in summer (Dec-Mar)
- Infrastructure: Good highway connection to Santiago
- Climate: Mediterranean, mild winters, dry summers
- Foreign ownership: No restrictions for residents
Regional comparison:
- Concepción: University city, UF 2,200 (~$97,000) average apartment
- La Serena: Northern beach city, growing expat community
- Puerto Varas: Lake district, German influence, tourism-focused`,
    gotchas: `Coastal properties can have humidity and salt air maintenance issues. Valparaíso has crime concerns in some areas — research neighborhoods carefully. Tourist rental regulations are tightening — verify legality before Airbnb investment. Transportation to Santiago requires planning — not as convenient as suburb living. Utilities can be more expensive than Santiago. Some hillside properties in Valparaíso have access/parking challenges. Winter tourism drops significantly — factor seasonality into rental income projections.`,
    pro_tip: `Valparaíso offers better cultural richness and rental yields, Viña del Mar offers more modern amenities and beaches. Consider both for weekend getaways from Santiago — many expats rent in Santiago, buy coastal for lifestyle. The 30% discount vs Santiago creates value, but liquidity is lower. UNESCO status protects Valparaíso character but limits renovation options. Consider furnished tourism rentals — coastal demand is strong during summer season. Highway access means easy weekend escapes from Santiago's pollution and urban stress. Both cities offer legitimate European-style coastal living at fraction of Mediterranean costs.`,
  },
  {
    topic: 'Property Purchase Process',
    country: 'CL',
    category: 'realestate',
    last_updated: '2026-03-01',
    source: 'Chilean property law; purchase procedures 2025-2026',
    content: `Chilean property purchase process for foreigners (2026):
Foreign ownership rights:
- Residents: Full ownership rights, no restrictions
- Non-residents: Can buy property but with some limitations
- Border restrictions: Cannot buy within 20km of borders without special permission
- Financing: Mortgages available to residents, difficult for non-residents
Legal requirements:
- RUT: Tax ID number required for purchase (must have residency for RUT)
- Public deed: Purchase must be formalized via public notary (Notaría)
- Property registry: Title registered at Conservador de Bienes Raíces
- Legal representation: Lawyer strongly recommended (property law complex)
Purchase steps:
1. Due diligence: Verify clean title, no liens, proper permits
2. Purchase agreement: Preliminary contract with deposit (typically 5-10%)
3. Financing approval: If using mortgage (4-6% rates for residents)
4. Public deed signing: At notary office with all parties present
5. Registration: Title recorded at property registry
6. Tax obligations: Pay property transfer tax (2.4%)
Transaction costs:
- Property transfer tax: 2.4% of higher of fiscal/market value
- Notary fees: 0.2-0.4% of transaction value
- Registry fees: 0.1-0.2% of transaction value
- Legal fees: 0.5-1% of transaction value
- Appraisal: $300-800
- Total: ~3-3.5% of property value in closing costs`,
    gotchas: `RUT requirement means non-residents face practical barriers to purchase. Title issues are possible — thorough due diligence essential. Property transfer tax applies to higher of fiscal or market value — can create surprises. Chilean property law is complex — cutting corners on legal representation is dangerous. Earthquake insurance should be obtained immediately. Some properties have complicated ownership structures. HOA documents should be reviewed carefully. Utilities transfers can take weeks. Border restrictions apply to many desirable locations (ski resorts, coastal areas).`,
    pro_tip: `Establish residency before serious property shopping — it opens financing options and simplifies the process dramatically. Chilean mortgage rates (4-6%) are reasonable for residents with established credit. UF-denominated mortgages protect against peso devaluation but create currency risk if your income is in pesos. Property insurance is cheap and essential given earthquake risk. Consider professional property management if buying as investment — Chilean tenant rights are strong. The mature legal system provides security compared to some regional markets. Factor UF appreciation into long-term property ownership costs — it increases over time with inflation.`,
  },

  // === HEALTHCARE ===
  {
    topic: 'Public vs Private Healthcare Systems',
    country: 'CL',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Healthcare system comparison; expat experiences 2025-2026',
    content: `Chilean healthcare system: FONASA vs ISAPRE vs International (2026):
FONASA (Public system):
- Eligibility: All residents with temporary/permanent visa
- Cost: 7% of salary deducted automatically (minimum ~$35/month)
- Coverage: Comprehensive but with waiting times
- Quality: Decent emergency care, variable specialist access
- Language: Spanish only
- Best for: Basic coverage, emergencies, budget-conscious residents
ISAPRE (Private system):
- Cost: $150-400/month depending on plan and age
- Coverage: Faster access, private hospitals, English-speaking doctors
- Quality: Excellent facilities, minimal wait times
- Networks: Specific doctors and hospitals per plan
- Best for: Those who can afford premium and want convenience
Top private hospitals/clinics:
- Clínica Alemana: German-founded, excellent reputation, English services
- Clínica Las Condes: Located in business district, international standards
- Hospital Clínico UC: University hospital, research-focused, high quality
- Red Salud: Network of private clinics, good coverage
International insurance options:
- Cigna Global: $200-500/month, worldwide coverage
- Bupa Global: $180-400/month, strong Latin America network
- Aetna International: $150-350/month, good US connections
Common costs (private):
- GP consultation: $40-80
- Specialist: $60-120
- Emergency room: $200-500
- Dental cleaning: $30-60
- MRI scan: $300-600`,
    gotchas: `FONASA waiting times can be extremely long for non-emergency procedures (months for specialists). ISAPRE plans have age-based pricing — costs increase significantly as you age. Pre-existing conditions often excluded from ISAPRE coverage. Language barrier significant in public system. Emergency care quality varies by hospital. Private system copays can be substantial. International insurance may not cover routine care in Chile. Some specialists only work private system. Air pollution in Santiago affects respiratory health.`,
    pro_tip: `Most expats use hybrid approach: ISAPRE or international insurance for routine care, FONASA as backup for major emergencies. Clínica Alemana and Las Condes are gold standard for expats — worth the premium for English-speaking doctors and international standards. Consider international insurance if you travel frequently or want coverage outside Chile. Santiago's private healthcare rivals North American/European standards at fraction of the cost. Preventive care is excellent in private system. Dental work is high quality and very affordable. Consider health savings account approach — Chile's private healthcare is cost-effective even paying out of pocket.`,
  },
  {
    topic: 'Specific Healthcare Costs & Quality',
    country: 'CL',
    category: 'healthcare',
    last_updated: '2026-03-01',
    source: 'Private clinic pricing; medical tourism data 2025-2026',
    content: `Chile healthcare costs and medical quality comparison (2026):
Routine healthcare costs (private):
- Annual physical: $150-250
- Blood work panel: $80-120
- Mammography: $100-150
- Colonoscopy: $400-600
- Cardiac stress test: $200-300
- Dermatologist: $60-100
- Ophthalmologist: $70-120
- Physical therapy: $25-40/session
Specialized procedures (private):
- Cataract surgery: $2,000-3,500
- Hip replacement: $8,000-12,000
- Cardiac bypass: $15,000-25,000
- Cosmetic surgery: 40-60% less than US/Europe
- Dental implant: $800-1,200
- Root canal: $300-500
Quality indicators:
- Doctor training: Many trained in Europe/US, high standards
- Technology: Latest equipment in major private hospitals
- Success rates: Comparable to developed countries for most procedures
- English availability: Good in Santiago, limited in regions
Medical tourism advantages:
- Cost savings: 50-70% less than North America for major procedures
- Quality: International accreditation at top hospitals
- Recovery environment: Excellent climate, good support infrastructure
- Proximity: Close to US/Europe compared to Asian alternatives
Emergency services:
- Ambulance: $100-200
- Emergency room: $200-500
- Helicopter evacuation: $5,000-15,000 (skiing accidents common)
Regional healthcare:
- Santiago: World-class private options
- Valparaíso: Decent but limited compared to capital
- Concepción: University hospital, good quality
- Smaller cities: Basic care, serious cases referred to Santiago`,
    gotchas: `Quality drops significantly outside Santiago — factor this into location decisions. Air pollution in Santiago affects respiratory health, especially during winter. Altitude sickness possible in Andes (skiing, mountain activities). Public emergency rooms can have very long waits. Prescription medications may have different names/availability than home country. Mental health services limited compared to North America/Europe. Some insurance plans don't cover adventure sports (skiing, mountaineering). Medical records systems are not integrated — you manage your own history.`,
    pro_tip: `Chile offers excellent healthcare value — quality comparable to developed countries at emerging market prices. Santiago's Clínica Alemana is genuinely world-class and worth the premium. Consider combining healthcare with lifestyle benefits — Chile's climate and environment support healthy living. Medical tourism is viable option for major procedures — the savings are substantial and quality is high. Keep relationships with specialists in home country for complex conditions, use Chile for routine and emergency care. The private system efficiency makes up for higher costs vs public system. Preventive care emphasis in private system can lead to better health outcomes.`,
  },

  // === LIFESTYLE ===
  {
    topic: 'Cost of Living Breakdown',
    country: 'CL',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Expat cost surveys; Santiago pricing 2025-2026',
    content: `Chile cost of living for expats (2026):
Monthly budget ranges (Santiago):
- Budget lifestyle: $1,200-1,800/month
- Comfortable lifestyle: $2,000-3,500/month  
- Luxury lifestyle: $4,000+/month
Housing costs (Santiago):
- Studio apartment: $400-700/month
- 1BR apartment: $600-1,000/month
- 2BR apartment: $800-1,500/month
- 3BR house: $1,200-2,500/month
- Utilities: $80-150/month (electricity expensive, especially winter heating)
Food and dining:
- Groceries: $300-500/month for couple
- Local restaurant meal: $8-15
- Mid-range restaurant: $25-40 for two
- Fine dining: $60-100 for two
- Coffee shop: $3-5
- Beer (bar): $3-6
- Wine (bottle): $8-25 (excellent Chilean wines)
Transportation:
- Metro monthly pass: $35
- Taxi (cross-city): $8-15
- Uber/ride-share: Similar to taxi prices
- Car ownership: $300-500/month (insurance, parking, fuel)
- Domestic flight: $80-200 (Santiago to regional cities)
Miscellaneous:
- Gym membership: $30-80/month
- Internet (fiber): $25-50/month
- Mobile phone: $15-30/month
- Movies: $8-12
- Domestic help: $8-12/hour
Regional cost comparison:
- Santiago: Baseline (most expensive)
- Valparaíso/Viña: 15-20% cheaper than Santiago
- Concepción: 20-25% cheaper than Santiago
- Smaller cities: 30-40% cheaper than Santiago`,
    gotchas: `Santiago is expensive by Latin American standards — closer to European cities than regional neighbors. Winter heating costs can double electricity bills. Imported goods are expensive due to geography. Car ownership is costly (parking, tolls, insurance). Restaurant prices have increased significantly post-COVID. Quality goods cost close to developed world prices. Domestic help and services are affordable, but manufactured goods are not. Wine is cheap and excellent, but other alcohol is expensive.`,
    pro_tip: `Chile offers developed-world lifestyle at emerging market prices, but the gap is narrowing. Budget carefully for housing and utilities — these are the major expenses. Take advantage of excellent local wines and produce — imported goods are expensive. Public transportation in Santiago is excellent and affordable — car ownership is optional. Consider regional cities for significant cost savings while maintaining good quality of life. The peso's strength makes Chile more expensive than neighboring countries but provides stability. Factor seasonal costs — winter heating and summer vacation periods affect budgets.`,
  },
  {
    topic: 'Climate & Seasonal Considerations',
    country: 'CL',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Climate data; seasonal lifestyle patterns 2025-2026',
    content: `Chile climate and seasonal lifestyle considerations (2026):
Santiago climate:
- Winter (June-August): Cool, rainy, air pollution peaks
  - Temperature: 8-15°C (46-59°F)
  - Rainfall: Most of annual precipitation
  - Air quality: Poor due to smog trapped by mountains
  - Heating: Essential, expensive electricity costs
- Summer (December-February): Hot, dry, excellent air quality
  - Temperature: 20-32°C (68-90°F)  
  - Humidity: Low, very comfortable
  - Air quality: Excellent, pollution disperses
  - Tourism: Peak season for coast and mountains
Seasonal lifestyle impacts:
- Winter depression: Shorter days, pollution, gray skies common
- Summer energy: Outdoor activities, beach weekends, social season
- Shoulder seasons: March-May and September-November ideal weather
Regional climate variation:
- North (Atacama): Desert, extreme dryness, temperature stable
- Central (Santiago): Mediterranean, distinct wet/dry seasons
- South (Puerto Varas, Patagonia): Rainy, cool, reminiscent of Pacific Northwest
- Coast: Moderated by ocean, less temperature variation
Outdoor lifestyle opportunities:
- Skiing: World-class resorts 1-2 hours from Santiago (June-September)
- Beach: Pacific coast accessible, cooler water temperatures
- Wine country: Maipo, Casablanca valleys for weekend trips
- Mountains: Andes offer hiking, climbing year-round (altitude considerations)
- Patagonia: World-renowned trekking, but expensive and remote`,
    gotchas: `Santiago winter air pollution is serious health concern — respiratory issues common. Seasonal depression affects many expats during gray winter months. Summer heat can be intense without air conditioning. Earthquake risk is constant background concern. UV radiation is intense due to thin atmosphere and ozone hole. Pollen allergies can be severe in spring. Winter heating costs can shock newcomers. Beach water is cold year-round. Mountain weather changes rapidly.`,
    pro_tip: `Plan lifestyle around seasons — winter in coast/north, summer in Santiago/south. Invest in good heating system and air purification for Santiago winter. The outdoor lifestyle opportunities are world-class but require proper gear and planning. Consider regional exploration — Chile's geography offers incredible diversity within one country. The Mediterranean climate is generally excellent, but winter pollution is the major lifestyle compromise. Summer weekends at coast or mountains are essential Santiago coping strategy. Consider winter escape plans if air pollution affects your health.`,
  },
  {
    topic: 'Cultural Integration & Language',
    country: 'CL',
    category: 'lifestyle',
    last_updated: '2026-03-01',
    source: 'Expat integration experiences; Chilean culture guide 2025-2026',
    content: `Chilean culture and integration for expats (2026):
Language considerations:
- Chilean Spanish: Distinct accent, fast pace, unique slang ("chilenismos")
- Regional variation: Clearer Spanish in northern Chile
- English levels: Limited outside business/tourism sectors
- Learning curve: 6-12 months for basic conversational Spanish
- Professional requirement: Spanish essential for most career advancement
Cultural characteristics:
- Reserved initially: Chileans are polite but not overly warm to strangers
- Family-centered: Extended family relationships very important
- Education-focused: High value placed on university education and titles
- Class consciousness: Social stratification more apparent than some neighbors
- European influence: More formal culture than other Latin American countries
Social integration strategies:
- Language school: Essential investment, helps with social connections
- Neighborhood integration: Building relationships with neighbors important
- Chilean friends: Building genuine local relationships takes time but valuable
- Work relationships: Professional networks are key to social integration
- Hobby groups: Sports clubs, wine groups, hiking clubs for meeting people
Business culture:
- Formal: More hierarchical than North American business culture
- Relationship-based: Personal connections essential for business success
- Punctuality: Expected in business settings, less rigid socially
- Networking: Professional associations and chambers of commerce important
Lifestyle integration:
- Wine culture: Central to social life, learning appreciation helps integration
- Outdoor culture: Hiking, skiing, beach culture provide social opportunities
- Football (soccer): Following local teams helps with conversation and bonding
- Food culture: Traditional Chilean cuisine, weekend asados (barbecues) common`,
    gotchas: `Chilean Spanish is among the most difficult variants for learners — unique slang and rapid pace. Social integration takes longer than more gregarious Latin cultures. Class consciousness can be uncomfortable for egalitarian-minded expats. Professional networking requires significant Spanish fluency. Cultural reserve can be misinterpreted as unfriendliness. Business hierarchy is more rigid than many expats expect. Regional differences in culture — Santiago is most cosmopolitan. Political discussions can be sensitive (Pinochet era still affects older generations).`,
    pro_tip: `Invest heavily in Spanish from day one — Chilean Spanish is challenging but essential for true integration. Focus on building genuine relationships rather than superficial expat bubble connections. Professional success requires cultural adaptation, not just language skills. Chilean wine knowledge is social currency — learn the regions and varieties. Outdoor activities are best path to social integration — Chileans love hiking, skiing, and beach culture. Be patient with social integration — Chilean culture rewards persistence and genuine interest. Consider hiring a cultural mentor/consultant for business integration. The European-influenced culture provides familiar reference points for Western expats.`,
  },
];