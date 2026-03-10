#!/usr/bin/env python3
"""Generate knowledge base entries for 5 European countries."""
import json

entries = []

def e(category, country, city, topic, content, personal=False):
    entries.append({
        "category": category,
        "country": country,
        "city": city,
        "topic": topic,
        "content": content,
        "is_personal_experience": personal
    })

# ============================================================
# PORTUGAL
# ============================================================

e("Portugal - Visa & Residency", "Portugal", None, "Digital Nomad Visa (D8)",
  "Portugal's D8 Digital Nomad Visa allows remote workers to live in Portugal. Requirements: minimum monthly income of €3,480 (4x Portuguese minimum wage), proof of remote employment or freelance contracts with non-Portuguese clients, health insurance, clean criminal record. Valid for 1 year, renewable for 2 years. After 5 years of legal residence, you can apply for permanent residency or citizenship. Application fee: ~€90 for the visa, plus ~€170 for the residency permit. Processing time: 2-4 months. You can enter on a tourist visa and apply in-country at SEF/AIMA.",
  False)

e("Portugal - Visa & Residency", "Portugal", None, "Golden Visa Program",
  "Portugal's Golden Visa (ARI) was restructured in 2023 — real estate purchases no longer qualify. Current options: €500,000 investment in qualifying Portuguese investment funds (60%+ allocated in Portugal, 5-year maturity), €500,000 capital transfer for research activities, €250,000 for arts/cultural heritage support, or company formation creating 10+ jobs. Requires only 7 days/year presence in Portugal. Path to permanent residency after 5 years, citizenship after 5 years (with A2 Portuguese language test). One of Europe's most popular residency-by-investment programs.",
  False)

e("Portugal - Visa & Residency", "Portugal", None, "D7 Passive Income / Retirement Visa",
  "The D7 visa is for retirees and passive income earners. Minimum income: €870/month (Portuguese minimum wage) for the main applicant, plus 50% for spouse, 30% per child. Qualifying income: pensions, rental income, dividends, savings. Must spend 6+ months/year in Portugal. Valid 2 years, renewable. Leads to permanent residency after 5 years. Very popular with American and European retirees. You'll need proof of accommodation in Portugal and health insurance.",
  False)

e("Portugal - Visa & Residency", "Portugal", None, "Residency requirements and path to citizenship",
  "Portugal offers one of Europe's fastest paths to citizenship: 5 years of legal residency. Requirements for citizenship: A2 Portuguese language proficiency, clean criminal record, ties to Portugal. Dual citizenship allowed. Permanent residency also available after 5 years. Key advantage: Portuguese passport grants EU citizenship, meaning freedom to live and work in any EU country. Processing time for citizenship: 12-18 months after application.",
  False)

e("Portugal - Tax & Financial", "Portugal", None, "Tax system and NHR regime",
  "Portugal's Non-Habitual Resident (NHR) tax regime was replaced in 2024 by the IFICI (Tax Incentive for Scientific Research and Innovation) regime. Standard progressive income tax: 14.5% to 48%. The new IFICI offers a flat 20% rate on qualifying Portuguese-source employment/self-employment income for eligible professionals (scientific research, tech, innovation) for 10 years. Foreign-source income: may be exempt or taxed at reduced rates under certain conditions. Corporate tax: 21%. VAT: 23% standard. Capital gains on property: 50% taxed at marginal rate. Social security contributions: ~11% employee, ~23.75% employer.",
  False)

e("Portugal - Tax & Financial", "Portugal", None, "Crypto taxation and banking",
  "Crypto taxation in Portugal (2023+): Short-term gains (<1 year holding) taxed at 28% flat rate. Long-term gains (>1 year) exempt from tax. Mining and professional trading taxed as business income. Banking: Major banks include Millennium BCP, Novo Banco, Caixa Geral de Depósitos. Digital banks: Moey!, ActivoBank. Opening an account requires NIF (tax number), passport, proof of address. NIF can be obtained with a fiscal representative if non-resident. Wise, Revolut widely accepted. Portugal has no wealth tax.",
  False)

e("Portugal - Cost of Living", "Portugal", "Lisbon", "Cost of living in Lisbon",
  "Lisbon cost of living (2024-2025): 1-bedroom apartment city center: €900-1,400/month. Outside center: €650-900. Meal at inexpensive restaurant: €10-15. Groceries for 2 people: €300-400/month. Monthly transit pass: €45. Utilities (apartment): €100-150. Internet (fiber): €30-40. Lisbon has seen significant rent increases since 2019, driven by tourism and digital nomad influx. Still ~40-50% cheaper than London or Paris. A couple can live comfortably on €2,500-3,500/month.",
  False)

e("Portugal - Cost of Living", "Portugal", "Porto", "Cost of living in Porto",
  "Porto cost of living (2024-2025): 1-bedroom city center: €700-1,000/month. Outside center: €500-700. Meal at restaurant: €9-13. Groceries: €250-350/month. Monthly transit pass: €40. Utilities: €90-130. Internet: €30-35. Porto is 15-25% cheaper than Lisbon for housing. A couple can live comfortably on €2,000-3,000/month. The Algarve region offers even lower costs outside tourist season.",
  False)

e("Portugal - Healthcare", "Portugal", None, "Healthcare system",
  "Portugal has the SNS (Serviço Nacional de Saúde), a universal public healthcare system. Residents pay small fees (taxas moderadoras): €4.50 for GP visit, €7 for specialist. Public hospitals are free for emergencies. Quality: generally good, ranked 12th in Europe by Euro Health Consumer Index. Wait times for specialists can be long (weeks to months). Private healthcare: widely available, affordable. Private insurance: €50-150/month. Many expats use a mix of public and private. Pharmacies well-stocked and affordable. English widely spoken in Lisbon/Porto medical facilities.",
  False)

e("Portugal - Safety & Culture", "Portugal", None, "Safety, culture, and lifestyle",
  "Portugal is one of the safest countries in the world — ranked #7 on the 2024 Global Peace Index. Crime index (Numbeo): ~32 (low). Violent crime is rare. Petty theft in tourist areas is the main concern. Culture: welcoming to foreigners, large expat community, especially in Lisbon, Porto, and Algarve. Official language: Portuguese (English widely spoken in cities). Climate: Mediterranean — mild winters (8-15°C), warm summers (25-35°C). Algarve has 300+ sunny days/year. Laid-back lifestyle, excellent food and wine culture. Good work-life balance.",
  False)

e("Portugal - Real Estate", "Portugal", None, "Property market and buying process",
  "Foreigners can freely buy property in Portugal with no restrictions. Average prices (2024): Lisbon center €5,000-8,000/sqm, Porto €3,000-5,000/sqm, Algarve €3,000-6,000/sqm. Buying process: obtain NIF, hire a lawyer (recommended), sign promissory contract (CPCV) with 10-20% deposit, final deed (escritura) at notary. Transaction costs: ~7-10% (IMT transfer tax 0-7.5%, stamp duty 0.8%, notary/registration ~1%, legal fees ~1-2%). Mortgages available for non-residents at 60-70% LTV, rates ~3-4% variable. Rental yields: 4-6% in major cities.",
  False)

e("Portugal - Real Estate", "Portugal", None, "Rental market",
  "Portugal's rental market is tight, especially in Lisbon and Porto. New Urban Lease Law (NRAU) governs tenancies. Typical lease: 1-year minimum. Deposit: usually 2 months. Rental contracts must be registered with tax authorities. Tenant protections are strong — eviction is difficult. Short-term rentals (AL license) are heavily regulated in Lisbon since 2023. Finding an apartment: Idealista.pt, OLX.pt, Facebook groups. Competition is fierce — be ready to act fast. Furnished apartments command 20-30% premium.",
  False)

e("Portugal - Education", "Portugal", None, "International schools and education",
  "Portugal has excellent international schools, particularly in Lisbon and the Algarve. Top options: St. Julian's School (British curriculum, Lisbon), Carlucci American International School, Deutsche Schule Lissabon, Lycée Français. Annual fees: €8,000-20,000 depending on school and grade. Portuguese public education is free and compulsory until age 18. Public schools teach in Portuguese. Many international families choose private schools for English-language instruction. Universities: excellent, with low tuition (€1,000-7,000/year for international students).",
  False)

e("Portugal - Infrastructure", "Portugal", None, "Internet, transport, and connectivity",
  "Internet: Portugal has excellent fiber coverage — 89% of households. Average speeds: 100-500 Mbps for €30-40/month. 1Gbps available in cities. Mobile: good 4G/5G coverage. Major providers: MEO, NOS, Vodafone. Transportation: Lisbon metro, trams, buses. Porto metro. Good intercity rail (CP). Lisbon-Porto high-speed train in planning. Major airports: Lisbon (LIS), Porto (OPO), Faro (FAO). Direct flights to most European cities and many intercontinental destinations. New Lisbon airport under construction. Excellent highway network. Uber widely available.",
  False)

e("Portugal - Tax & Financial", "Portugal", None, "Tax treaties and double taxation",
  "Portugal has double taxation agreements (DTAs) with 79+ countries including the US, UK, Canada, Brazil, and most EU nations. Key provisions: dividends typically taxed at 10-15% withholding, interest at 10-15%, royalties at 10%. US-Portugal treaty allows credit method for avoiding double taxation. Social security totalization agreements with several countries. Portugal participates in EU-wide automatic exchange of financial information (CRS). No inheritance tax — replaced by stamp duty of 10% on Portuguese assets for non-spouse/descendant heirs.",
  False)

# ============================================================
# SPAIN
# ============================================================

e("Spain - Visa & Residency", "Spain", None, "Digital Nomad Visa",
  "Spain's Digital Nomad Visa (Ley de Startups, 2023) allows remote workers to live in Spain. Requirements: minimum monthly income of €2,763 (200% of Spain's SMI as of late 2025), remote employment with non-Spanish company (or <20% Spanish clients if freelancer), minimum 1 year work relationship with employer, health insurance, clean criminal record. Valid up to 3 years, renewable for 2 more. Special tax regime: 24% flat rate on Spanish income up to €600,000 (Beckham Law equivalent) for first 4 years. No tax on foreign income. Processing: 2-4 months.",
  False)

e("Spain - Visa & Residency", "Spain", None, "Golden Visa",
  "Spain's Golden Visa requires €500,000 minimum real estate investment. Other options: €1M in bank deposits, €1M in Spanish company shares, €2M in government bonds. Includes family members. Requires only 1 visit/year. Path to permanent residency after 5 years (must be tax resident), citizenship after 10 years of legal residency. Note: Spain has been considering ending the Golden Visa for real estate — check current status. The real estate option is the most popular. No requirement to live in Spain to maintain the visa.",
  False)

e("Spain - Visa & Residency", "Spain", None, "Non-Lucrative Visa (Retirement)",
  "Spain's Non-Lucrative Visa is for retirees and those with passive income. Cannot work in Spain. Requirements: minimum €2,400/month income (IPREM x4), plus ~€600 per dependent. Private health insurance (must cover all risks, no co-pays). Valid 1 year, renewable for 2-year periods. Must reside in Spain (cannot be absent >6 months). Clean criminal record. Path to permanent residency after 5 years, citizenship after 10 years. Popular with British, American, and Scandinavian retirees.",
  False)

e("Spain - Visa & Residency", "Spain", None, "Residency and path to citizenship",
  "Spain requires 10 years of legal residency for citizenship — one of the longest in the EU. Exceptions: 2 years for nationals of Latin American countries, Philippines, Equatorial Guinea, Portugal, and Sephardic Jews. 1 year for those married to a Spanish citizen or born in Spain. Requirements: A2 Spanish language (DELE), CCSE cultural knowledge test, integration proof, clean criminal record. Spain allows dual citizenship only with specific countries (most Latin American nations, Philippines, Portugal). Others must renounce original citizenship. Permanent residency after 5 years.",
  False)

e("Spain - Tax & Financial", "Spain", None, "Tax system overview",
  "Spain has progressive income tax (IRPF): 19% (up to €12,450), 24% (to €20,200), 30% (to €35,200), 37% (to €60,000), 45% (to €300,000), 47% (above €300,000). Regional surcharges can add 0.5-4%. Beckham Law / Digital Nomad tax regime: 24% flat rate for 4 years on Spanish income, no tax on foreign income. Wealth tax: 0.2-3.5% on assets above €700,000 (varies by region — Madrid exempts). Capital gains: 19-28%. Corporate tax: 25%. VAT: 21% standard, 10% reduced, 4% super-reduced. Social security for self-employed (autónomos): €230-530/month depending on income.",
  False)

e("Spain - Tax & Financial", "Spain", None, "Crypto taxation and banking",
  "Crypto taxation in Spain: gains taxed as savings income at 19% (up to €6,000), 21% (€6K-50K), 23% (€50K-200K), 27% (€200K-300K), 28% (above €300K). Must declare crypto holdings over €50,000 on Modelo 721 (annual foreign asset declaration). Banking: major banks — Santander, BBVA, CaixaBank, Sabadell. Opening account: NIE (foreigner ID number) + passport + proof of address/income. NIE is essential — needed for almost everything. Digital banks: N26, Revolut, Openbank (Santander's digital arm). Spain has strict anti-money-laundering checks.",
  False)

e("Spain - Cost of Living", "Spain", "Madrid", "Cost of living in Madrid",
  "Madrid cost of living (2024-2025): 1-bedroom city center: €900-1,400/month. Outside center: €700-1,000. Meal at restaurant: €12-16. Groceries for 2: €350-450/month. Monthly transit pass: €55. Utilities: €120-160. Internet: €30-40. Madrid is more affordable than Barcelona for housing. A couple can live comfortably on €2,500-3,500/month. No wealth tax in Madrid region (Comunidad de Madrid).",
  False)

e("Spain - Cost of Living", "Spain", "Barcelona", "Cost of living in Barcelona",
  "Barcelona cost of living (2024-2025): 1-bedroom city center: €1,000-1,600/month. Outside center: €750-1,100. Meal at restaurant: €12-18. Groceries: €350-450/month. Monthly transit pass: €45. Utilities: €130-170. Internet: €30-40. Barcelona is Spain's most expensive city for rent. Tourist tax and Catalonia's wealth tax surcharge make it pricier overall. A couple needs €3,000-4,000/month for comfortable living. Valencia and Málaga offer 30-40% lower costs.",
  False)

e("Spain - Cost of Living", "Spain", "Valencia", "Cost of living in Valencia",
  "Valencia cost of living (2024-2025): 1-bedroom city center: €700-1,000/month. Outside center: €500-750. Meal at restaurant: €10-14. Groceries: €280-380/month. Monthly transit pass: €40. Utilities: €100-140. Internet: €30-35. Valencia is increasingly popular with digital nomads — great balance of affordability, climate, and lifestyle. A couple can live comfortably on €2,000-2,800/month. Beach city with excellent food scene.",
  False)

e("Spain - Healthcare", "Spain", None, "Healthcare system",
  "Spain's public healthcare system (Sistema Nacional de Salud) is ranked among Europe's best. Free for residents who contribute to social security. Quality: excellent public hospitals, especially in Madrid and Barcelona. Wait times: specialists 1-3 months, non-urgent surgery 3-6 months. Private healthcare: widely used as complement. Private insurance: €50-150/month (Sanitas, Adeslas, DKV). Pharmacies: well-stocked, many medications cheaper than US/UK. Emergency care: free for everyone. Dental and optical: not covered by public system. English-speaking doctors available in major cities and expat areas.",
  False)

e("Spain - Safety & Culture", "Spain", None, "Safety, culture, and lifestyle",
  "Spain safety: ranked #32 on Global Peace Index 2024. Crime index (Numbeo): ~34 (low-moderate). Petty theft common in tourist areas (Barcelona pickpockets are legendary). Violent crime is rare. Culture: warm, social, family-oriented. Famous for late dinners (9-10pm), siestas, fiestas. Official languages: Spanish (Castilian), plus Catalan, Basque, Galician in respective regions. Climate: varies — Mediterranean coast (hot summers, mild winters), central plateau (continental, cold winters), north (oceanic, rainy). Excellent quality of life. Work-life balance is cultural priority. Large expat communities on coasts.",
  False)

e("Spain - Real Estate", "Spain", None, "Property market and buying process",
  "No restrictions on foreigners buying property in Spain. Average prices (2024): Madrid center €4,000-6,000/sqm, Barcelona €4,500-7,000/sqm, Valencia €2,500-3,500/sqm, Costa del Sol €2,500-4,500/sqm. Process: obtain NIE, hire abogado (lawyer), sign private purchase contract (contrato de arras) with 10% deposit, notarized deed (escritura pública), register at Land Registry. Transaction costs: 10-13% (transfer tax 6-10% varies by region, notary 0.5-1%, registration 0.5-1%, legal 1-2%). Mortgages: available for foreigners at 60-70% LTV, rates ~3-4%. Rental yields: 4-7%.",
  False)

e("Spain - Education", "Spain", None, "International schools and education",
  "Spain has many international schools, especially in Madrid, Barcelona, and coastal areas. British curriculum: King's College, British School of Barcelona. American: American School of Madrid, American School of Barcelona. IB programs widely available. Annual fees: €8,000-25,000. Spanish public education: free, compulsory ages 6-16, all in Spanish (or regional language). Concertado (semi-private/subsidized) schools: €100-500/month, popular middle option. Universities: public tuition €1,000-3,000/year for EU, €5,000-15,000 for non-EU.",
  False)

e("Spain - Infrastructure", "Spain", None, "Internet, transport, and connectivity",
  "Internet: excellent fiber network — Spain has one of Europe's best. 600Mbps-1Gbps plans: €35-50/month. Providers: Movistar, Orange, Vodafone, MásMóvil. Mobile: excellent 4G/5G. Co-working spaces abundant in major cities. Transportation: excellent high-speed rail (AVE) — Madrid-Barcelona in 2.5 hours. Good metro systems in Madrid, Barcelona, Valencia, Bilbao. Major airports: Madrid-Barajas (MAD), Barcelona (BCN), Málaga (AGP), Palma de Mallorca (PMI). Budget airlines (Vueling, Ryanair) connect to all of Europe. Excellent highway network. Uber/Cabify available in cities.",
  False)

e("Spain - Tax & Financial", "Spain", None, "Tax treaties and wealth tax",
  "Spain has DTAs with 90+ countries. Wealth tax (Impuesto sobre el Patrimonio): national rates 0.2-3.5% on net assets above €700,000 (with €300,000 primary residence exemption). Madrid region: 100% bonification (effectively no wealth tax). Catalonia: full wealth tax applies plus solidarity tax. Temporary Solidarity Tax on Great Fortunes: 1.7-3.5% on net assets above €3M (nationwide, cannot be offset). Inheritance tax: varies hugely by region — Andalucía and Madrid very favorable, Catalonia less so. Key consideration when choosing where to live in Spain.",
  False)

# ============================================================
# ITALY
# ============================================================

e("Italy - Visa & Residency", "Italy", None, "Digital Nomad Visa",
  "Italy launched its Digital Nomad Visa in April 2024. Requirements: minimum annual income of €28,000 (approximately 3x the minimum for healthcare tax), remote employment with non-Italian company, health insurance, proof of accommodation, clean criminal record. Valid for 1 year, renewable. Can also apply for a Digital Nomad Residence Permit directly if already in Italy on another valid permit. Processing time: 1-3 months. Italy is newer to the digital nomad scene, so processes may evolve. The income threshold is relatively modest compared to other EU countries.",
  False)

e("Italy - Visa & Residency", "Italy", None, "Elective Residency Visa (Retirement)",
  "Italy's Elective Residency Visa (Visto per Residenza Elettiva) is for retirees and passive income earners. No official minimum income, but typically €31,000+/year demonstrated. Cannot work in Italy. Need proof of accommodation, health insurance, and financial means. Valid 1 year, renewable. Leads to permanent residency (permesso di soggiorno CE) after 5 years. Citizenship after 10 years of legal residency (4 years for EU citizens). Italy allows dual citizenship. Popular for the '€1 house' programs in rural towns.",
  False)

e("Italy - Visa & Residency", "Italy", None, "Investor Visa and Golden Visa",
  "Italy's Investor Visa options: €250,000 in an innovative startup, €500,000 in an Italian company, €2M in Italian government bonds, or €1M philanthropic donation. 2-year visa, renewable for 3 years. Fast-track residency. Tax benefits: flat tax regime available. Residence permit includes family members. Relatively less popular than Portugal/Spain golden visas but offers good value for startup investors. Path to permanent residency after 5 years, citizenship after 10 years.",
  False)

e("Italy - Visa & Residency", "Italy", None, "Residency and path to citizenship",
  "Italy requires 10 years of legal residency for non-EU citizens to obtain citizenship (4 years for EU citizens). Marriage to an Italian citizen: 2 years residency in Italy (or 3 years abroad). Jure sanguinis (by descent): if you have Italian ancestry, you may qualify for citizenship by descent with no residency requirement — very popular with Italian diaspora. Requirements: B1 Italian language, clean criminal record, sufficient income. Italy allows dual citizenship. Processing can be slow: 2-4 years for applications in Italy, longer through consulates.",
  False)

e("Italy - Tax & Financial", "Italy", None, "Tax system and flat tax regime",
  "Italy's standard progressive income tax (IRPEF): 23% (up to €28,000), 25% (to €50,000), 35% (to €50,000), 43% (above €50,000). Regional and municipal surcharges add 1-3%. Italy's Flat Tax Regime for new residents: €100,000/year lump sum tax on ALL foreign income (regardless of amount) for 15 years. Additional €25,000 per family member. Must not have been Italian tax resident for 9 of the previous 10 years. No reporting of foreign assets. Extremely attractive for high-net-worth individuals. Regime forfettario for self-employed: 15% (or 5% for first 5 years) on income up to €85,000.",
  False)

e("Italy - Tax & Financial", "Italy", None, "Crypto taxation and banking",
  "Crypto taxation in Italy (2024+): 26% flat tax on gains exceeding €2,000/year. New rules from 2025 may increase the rate to 33% (proposed). Must declare all crypto holdings. Banking: major banks — Intesa Sanpaolo, UniCredit, Banco BPM. Opening account: codice fiscale (tax code) + passport + proof of address. Codice fiscale is free and easy to obtain at any Agenzia delle Entrate office. Digital banks: N26, Revolut, Hype, Satispay (payments). Italy has wealth tax on foreign financial assets (IVAFE): 0.2%. Property tax on foreign real estate (IVIE): 0.76%.",
  False)

e("Italy - Cost of Living", "Italy", "Rome", "Cost of living in Rome",
  "Rome cost of living (2024-2025): 1-bedroom city center: €900-1,400/month. Outside center: €600-900. Meal at restaurant: €12-18. Groceries for 2: €350-450/month. Monthly transit pass: €35. Utilities: €150-200. Internet: €25-35. Rome is expensive by Italian standards but cheaper than Milan. A couple can live comfortably on €2,500-3,500/month. Historic center apartments are charming but can be drafty and lack modern amenities.",
  False)

e("Italy - Cost of Living", "Italy", "Milan", "Cost of living in Milan",
  "Milan cost of living (2024-2025): 1-bedroom city center: €1,100-1,800/month. Outside center: €750-1,100. Meal at restaurant: €13-20. Groceries: €350-450/month. Monthly transit pass: €39. Utilities: €150-200. Internet: €25-35. Milan is Italy's most expensive city. A couple needs €3,000-4,500/month. However, Milan offers the best job market in Italy, highest salaries, and a dynamic international scene. Best connected city in Italy for flights.",
  False)

e("Italy - Healthcare", "Italy", None, "Healthcare system",
  "Italy's Servizio Sanitario Nazionale (SSN) is a universal public healthcare system ranked among the world's best (WHO ranked it #2 historically). Free or low-cost for residents enrolled in SSN. Registration: at local ASL with residency permit + codice fiscale. GP visits: free (choose your medico di base). Specialists: €36 ticket (fee). Public hospital emergency: free. Quality: excellent, especially in northern Italy. Wait times: can be long for non-urgent procedures (weeks to months). Private healthcare: widely available, affordable. Private insurance: €80-200/month. Pharmacies excellent.",
  False)

e("Italy - Safety & Culture", "Italy", None, "Safety, culture, and lifestyle",
  "Italy safety: ranked #34 on Global Peace Index 2024. Crime index (Numbeo): ~46 (moderate). Petty crime in tourist areas and major cities. Organized crime exists in southern regions but rarely affects foreigners. Culture: incredibly rich — birthplace of the Renaissance, world-class art, architecture, food, and fashion. Family and food are central to life. Official language: Italian (dialects vary significantly by region). Climate: Mediterranean in south (hot summers, mild winters), continental in north (cold winters, hot summers), alpine in mountains. Quality of life is exceptional. Bureaucracy (burocrazia) is famously slow and frustrating.",
  False)

e("Italy - Real Estate", "Italy", None, "Property market and buying process",
  "No restrictions on foreigners buying property in Italy (reciprocity principle applies — most Western countries qualify). Average prices (2024): Milan center €5,000-8,000/sqm, Rome center €4,000-6,500/sqm, Florence €4,000-6,000/sqm, rural Puglia/Sicily €500-1,500/sqm. Famous €1 house programs in depopulating villages (with renovation requirements of €15,000-50,000). Process: codice fiscale, hire geometra/lawyer, preliminary contract (compromesso) with 10-20% deposit, notarized deed (rogito). Transaction costs: 9-12% (registro tax 2-9%, notary 1-2%, agency 3-4%). Mortgages: available for foreigners at 50-60% LTV.",
  False)

e("Italy - Education", "Italy", None, "International schools and education",
  "Italy has excellent international schools in major cities. Rome: St. George's British International School, American Overseas School. Milan: American School of Milan, British School. Florence: International School of Florence. Annual fees: €10,000-30,000. Italian public education: free, compulsory ages 6-16, taught in Italian. Quality varies by region (north generally better). Universities: some of the world's oldest — Bologna, La Sapienza. Tuition: €1,000-4,000/year for public universities (income-based), private universities €10,000-30,000/year.",
  False)

e("Italy - Infrastructure", "Italy", None, "Internet, transport, and connectivity",
  "Internet: improving rapidly. Fiber (FTTH) coverage expanding — 50%+ of households. Speeds: 100Mbps-1Gbps in cities, slower in rural areas. Providers: TIM, Vodafone, WindTre, Fastweb. €25-35/month for fiber. Mobile: good 4G/5G coverage in urban areas. Transportation: excellent high-speed rail (Frecciarossa/Italo) — Milan-Rome in 3 hours. Good metro in Milan and Rome. Regional trains slower. Airports: Rome Fiumicino (FCO), Milan Malpensa (MXP), Venice (VCE), Naples (NAP), plus many regional airports. Budget airlines connect everywhere. Highways (autostrada) with tolls.",
  False)

e("Italy - Tax & Financial", "Italy", None, "Tax treaties and inheritance",
  "Italy has DTAs with 90+ countries including US, UK, Canada, Australia. Italian inheritance and gift tax: 4% for spouse/children (€1M exemption each), 6% for siblings (€100K exemption), 6-8% for others (no exemption). Relatively low compared to other EU countries. IVAFE (wealth tax on foreign financial assets): 0.2% annually. IVIE (tax on foreign real estate): 0.76%. These foreign asset taxes are important for expats to understand — they apply to all worldwide assets once you become Italian tax resident.",
  False)

# ============================================================
# GREECE
# ============================================================

e("Greece - Visa & Residency", "Greece", None, "Digital Nomad Visa",
  "Greece's Digital Nomad Visa allows remote workers from non-EU countries to live in Greece. Requirements: minimum monthly income of €3,500 (€42,000/year), remote employment with non-Greek employer, health insurance, clean criminal record. Valid for 1 year, renewable for up to 2 years. 50% income tax reduction for the first 7 years for those transferring tax residency (special regime). Processing: ~10 working days. Greece offers an exceptional quality of life for digital nomads — islands, low costs, excellent climate.",
  False)

e("Greece - Visa & Residency", "Greece", None, "Golden Visa",
  "Greece's Golden Visa: real estate investment of €250,000 (in most areas) or €500,000 (in Athens center, Thessaloniki, Mykonos, Santorini, and islands >3,100 sqm — updated 2024). One of Europe's cheapest golden visas. Includes family members. No minimum stay requirement. Does NOT give the right to work in Greece. Path to permanent residency: immediate (5-year permit, renewable). Citizenship after 7 years of actual residency + Greek language proficiency. Very popular with Chinese, Middle Eastern, and American investors.",
  False)

e("Greece - Visa & Residency", "Greece", None, "Financially Independent Person Permit",
  "The Financially Independent Person (FIP) residence permit is Greece's retirement/passive income visa. Requirements (2025): minimum annual income of €24,000+ for single applicants (increased from previous years), plus 20% for spouse, 15% per child. Income must be from abroad — pensions, investments, rental income. Cannot work in Greece. Health insurance required. Renewable every 2 years. Path to permanent residency after 5 years of continuous residence. Popular with retirees from Northern Europe and the UK.",
  False)

e("Greece - Visa & Residency", "Greece", None, "Residency and path to citizenship",
  "Greece citizenship requires 7 years of legal residency (reduced from 10 in 2015). Requirements: Greek language proficiency (B1 level, tested), knowledge of Greek history/culture/geography (tested), clean criminal record, integration proof, tax compliance. Dual citizenship allowed. Greek/EU passport is powerful. Permanent residency available after 5 years of continuous legal residence. Greece does NOT offer citizenship by investment — golden visa holders must actually live in Greece for 7 years to qualify for citizenship.",
  False)

e("Greece - Tax & Financial", "Greece", None, "Tax system and special regimes",
  "Greece progressive income tax: 9% (up to €10,000), 22% (to €20,000), 28% (to €30,000), 36% (to €40,000), 44% (above €40,000). Special tax regimes: 1) Non-Dom regime (Law 4646/2019): flat €100,000/year lump sum tax on all foreign income for 15 years (for individuals investing €500,000+). 2) Digital nomad/transferred employees: 50% income tax exemption for 7 years. 3) Pensioner regime: 7% flat tax on foreign pension income for 15 years. Corporate tax: 22%. VAT: 24% standard. Social security: ~25% total (employee + employer). Capital gains on securities: 15%.",
  False)

e("Greece - Tax & Financial", "Greece", None, "Crypto taxation and banking",
  "Crypto taxation in Greece: capital gains on crypto taxed at 15% (same as securities). No specific crypto legislation yet — treated as capital gains. Must declare on annual tax return. Banking: major banks — Alpha Bank, Eurobank, National Bank of Greece, Piraeus Bank. Account opening: AFM (tax number) + passport + proof of address. Getting an AFM is straightforward at any tax office (DOY). Capital controls from 2015 crisis are fully lifted. Digital banking: Revolut, N26 widely used. Greek banking system has stabilized significantly since the debt crisis.",
  False)

e("Greece - Cost of Living", "Greece", "Athens", "Cost of living in Athens",
  "Athens cost of living (2024-2025): 1-bedroom city center: €500-800/month. Outside center: €350-550. Meal at restaurant: €10-14. Groceries for 2: €300-400/month. Monthly transit pass: €30. Utilities: €120-170. Internet: €25-35. Athens is one of the most affordable European capitals. A couple can live comfortably on €1,800-2,800/month. Neighborhoods: Kolonaki (upscale), Koukaki (trendy), Exarchia (bohemian), Glyfada (coastal suburb). Prices have risen recently but remain very competitive.",
  False)

e("Greece - Cost of Living", "Greece", "Thessaloniki", "Cost of living in Thessaloniki",
  "Thessaloniki cost of living (2024-2025): 1-bedroom city center: €400-650/month. Outside center: €300-450. Meal at restaurant: €8-12. Groceries: €250-350/month. Monthly transit pass: €30. Utilities: €100-150. Internet: €25-30. Thessaloniki is 15-25% cheaper than Athens. A couple can live on €1,500-2,200/month. Greece's second city offers excellent food, nightlife, and proximity to beaches and Halkidiki. University city with young, vibrant atmosphere.",
  False)

e("Greece - Healthcare", "Greece", None, "Healthcare system",
  "Greece has a public healthcare system (ESY) that provides free care to insured residents. Quality: adequate but underfunded — public hospitals can be crowded, especially in Athens. Wait times for specialists and surgeries can be long. Many Greeks use private healthcare alongside public. Private insurance: €60-150/month. Private hospitals (especially in Athens): good quality, English-speaking doctors. Pharmacies: well-stocked, many medications available without prescription. Emergency care: free for everyone. Healthcare improved post-crisis but still lags behind Western European standards. Islands may have limited medical facilities — serious cases evacuated to Athens.",
  False)

e("Greece - Safety & Culture", "Greece", None, "Safety, culture, and lifestyle",
  "Greece safety: ranked #39 on Global Peace Index 2024. Crime index (Numbeo): ~38 (low-moderate). Very safe for personal safety. Petty theft in tourist areas. Occasional political demonstrations in Athens (usually peaceful). Culture: ancient heritage, incredibly hospitable people (philoxenia), outdoor lifestyle, strong food culture, café culture central to social life. Language: Greek (English widely spoken in cities and tourist areas). Climate: Mediterranean — hot dry summers (30-40°C), mild wet winters (5-15°C). 250+ sunny days/year. Island hopping culture. Relaxed pace of life. Bureaucracy can be slow.",
  False)

e("Greece - Real Estate", "Greece", None, "Property market and buying process",
  "No restrictions on EU citizens buying property. Non-EU citizens: no restrictions in most areas, but border regions and certain islands require special permission from the Ministry of Defense. Average prices (2024): Athens center €2,500-4,000/sqm, Thessaloniki €1,800-2,800/sqm, islands vary wildly (€1,500-10,000+/sqm). Process: obtain AFM, hire lawyer (mandatory for foreigners), preliminary agreement, notarized deed at notary. Transaction costs: 6-10% (transfer tax 3.09%, notary 0.8-1%, lawyer 0.5-1%, agent 2%). Mortgages: available but banks are cautious — 50-70% LTV, rates ~4-5%. Rental yields: 4-6% in Athens.",
  False)

e("Greece - Education", "Greece", None, "International schools and education",
  "International schools in Greece mainly in Athens and Thessaloniki. Athens: American Community Schools (ACS), St. Catherine's British School, Campion School, Athens International School. Annual fees: €8,000-18,000. Greek public education: free, compulsory ages 5-15, taught in Greek. Quality is decent. Frontistiria (private tutoring centers) are culturally universal — most Greek students attend them. Universities: public university is free for Greek/EU students. International students: €1,500-8,000/year at public universities. Private colleges also available.",
  False)

e("Greece - Infrastructure", "Greece", None, "Internet, transport, and connectivity",
  "Internet: improving. Fiber coverage expanding — VDSL (50-100Mbps) widely available in cities, FTTH growing. Providers: Cosmote, Vodafone, Nova, Wind. €25-35/month. Rural and island connectivity can be slower. Mobile: good 4G coverage, 5G rolling out in cities. Starlink popular on islands. Transportation: Athens metro excellent. Bus networks throughout the country. Ferries essential for island hopping. No high-speed rail (train network being upgraded). Major airports: Athens (ATH — major European hub), Thessaloniki (SKG), plus 15+ island airports. Budget airlines connect to all of Europe. Uber operates as taxi-hailing app only (not rideshare).",
  False)

# ============================================================
# ANDORRA
# ============================================================

e("Andorra - Visa & Residency", "Andorra", None, "Residency options overview",
  "Andorra is not part of the EU and has its own immigration system. Main residency categories: 1) Active Residency (work permit) — must be employed by or own an Andorran company, live 183+ days/year. 2) Passive Residency (without work permit) — €600,000 minimum investment (€400,000 in Andorran assets + €50,000 government deposit + €150,000 refundable bond), must live 90+ days/year. 3) Residency for International Professionals/Athletes/Scientists — for those with international income, requires company setup. 4) Digital Nomad / Remote Worker permit — introduced recently. No tourist visa needed for EU/US citizens for stays up to 90 days.",
  False)

e("Andorra - Visa & Residency", "Andorra", None, "Passive Residency (Golden Visa equivalent)",
  "Andorra's Passive Residency requires: €600,000 total investment (breakdown: at least €400,000 in qualifying Andorran assets such as real estate, equity in Andorran companies, or financial instruments; €50,000 non-refundable government deposit; €150,000 refundable bond with Andorran Financial Authority — AFA). Must reside minimum 90 days/year. Cannot work locally (but can earn international income). Annual permit renewal. Health insurance required. Clean criminal record. Processing: 3-6 months. Andorra has NO path to citizenship — only permanent residency after 20 years of continuous residence.",
  False)

e("Andorra - Visa & Residency", "Andorra", None, "Active Residency and company formation",
  "Active Residency requires establishing a company in Andorra or being employed by one. Foreign ownership of Andorran companies: 100% foreign ownership allowed since 2012. Minimum investment: €15,000-50,000 to start a company. Must live 183+ days/year. Processing: 2-4 months. Requirements: business plan, clean criminal record, health insurance, €50,000 deposit with AFA (refundable). Most popular route for entrepreneurs and digital professionals. Self-employed (compte propi) status also available. Annual company maintenance costs: €3,000-5,000.",
  False)

e("Andorra - Visa & Residency", "Andorra", None, "Residency and path to long-term status",
  "Andorra does NOT offer citizenship (with very rare historical exceptions). Permanent residency is available after 20 years of continuous legal residence (reduced to 10 years for those born in Andorra or educated there 10+ years). Andorran residency does not confer EU rights — Andorra is not in the EU, EEA, or Schengen. However, Andorran residents can travel visa-free to the Schengen area for 90 days/180 days. Andorra has bilateral agreements with France and Spain for border crossing. Andorran travel document is not an EU passport.",
  False)

e("Andorra - Tax & Financial", "Andorra", None, "Tax system — Europe's tax haven",
  "Andorra's tax system is one of Europe's most favorable: Personal income tax (IRPF): 0% on first €24,000, 5% on €24,000-40,000, 10% above €40,000. Maximum rate: 10%. Corporate tax (IS): 10% flat. Capital gains: 0-10% (0% after 10 years holding). Dividends: 0% (if from Andorran companies where corporate tax was paid). VAT (IGI): 4.5% (Europe's lowest). NO wealth tax. NO inheritance tax. NO gift tax. Social security: ~22% total (employer + employee). Andorra signed tax information exchange agreements in 2015 and is no longer on any blacklists. Tax residency: 183+ days/year in Andorra.",
  False)

e("Andorra - Tax & Financial", "Andorra", None, "Crypto taxation and banking",
  "Crypto taxation in Andorra: taxed as capital gains — effectively 0% if held over 10 years, up to 10% for shorter periods. Andorra is becoming a hub for crypto entrepreneurs due to low tax rates. Banking: Andorran banks — Andbank, MoraBanc, Crèdit Andorrà. Very private banking tradition but now fully compliant with CRS (Common Reporting Standard). Opening account: residency permit required, can be slow (2-4 weeks), extensive KYC. Minimum deposits often required (€5,000-30,000). EUR is used as currency (Andorra is not in the Eurozone but uses EUR by agreement). SWIFT transfers standard.",
  False)

e("Andorra - Cost of Living", "Andorra", "Andorra la Vella", "Cost of living in Andorra",
  "Andorra la Vella cost of living (2024-2025): 1-bedroom city center: €700-1,100/month. 2-bedroom: €1,000-1,600. Meal at restaurant: €12-18. Groceries for 2: €350-450/month (duty-free prices on many items). No monthly transit (small country — driving preferred). Utilities: €100-150. Internet: €40-50. Gasoline: ~€1.30/liter (cheaper than France/Spain). Duty-free shopping: electronics, alcohol, tobacco, perfume significantly cheaper. A couple can live on €2,500-3,500/month. Housing is the biggest expense. Ski season inflates short-term rental prices. Overall ~20% cheaper than Barcelona, similar to smaller Spanish cities.",
  False)

e("Andorra - Healthcare", "Andorra", None, "Healthcare system",
  "Andorra's healthcare system (CASS — Caixa Andorrana de Seguretat Social) covers 75% of medical costs, with patients paying 25% co-pay. Quality: surprisingly good for a small country. Hospital Nostra Senyora de Meritxell is the main hospital — modern, well-equipped. For complex procedures, patients are referred to hospitals in Barcelona or Toulouse (both ~2.5-3 hours away). CASS enrollment requires residency permit + social security contributions. Private insurance: optional, €100-200/month for supplemental coverage. Pharmacies: well-stocked, duty-free prices on many medications. Dental: partially covered by CASS.",
  False)

e("Andorra - Safety & Culture", "Andorra", None, "Safety, culture, and lifestyle",
  "Andorra is one of the safest countries in Europe — virtually no violent crime. Crime index (Numbeo): ~17 (very low). Population: ~80,000. Culture: Catalan is the official language (only country where Catalan is the sole official language). Spanish, French, and Portuguese also widely spoken. Mountainous microstate (468 km²) nestled between France and Spain in the Pyrenees. Altitude: 1,000-2,900m. Climate: alpine — cold snowy winters (great skiing), mild summers. Outdoor lifestyle: skiing, hiking, mountain biking. Limited nightlife and cultural scene compared to larger cities. Tight-knit community. Tax-free shopping attracts day-trippers from France/Spain.",
  False)

e("Andorra - Real Estate", "Andorra", None, "Property market",
  "Foreigners can buy property in Andorra with government authorization (usually straightforward). Prices (2024): €3,000-5,000/sqm for apartments, higher for chalets and luxury properties. Andorra la Vella and Escaldes-Engordany are most expensive. Encamp and La Massana slightly cheaper. Buying process: apply for authorization from Govern d'Andorra (takes 1-2 months), sign private contract with 10% deposit, notarized deed. Transaction costs: ~6-8% (transfer tax 4%, notary ~1%, registration ~0.5%, legal ~1-2%). No annual property tax. Rental market tight due to small size — long-term rentals hard to find. Rental yields: 3-5%.",
  False)

e("Andorra - Education", "Andorra", None, "Education system",
  "Andorra offers three parallel public education systems — all free: 1) Andorran system (Catalan), 2) French system (French lycée), 3) Spanish system (Spanish curriculum). Unique in the world. Most expats choose the French or Spanish system. No dedicated international schools (small country). Private options limited. University of Andorra offers some degrees. Most students go to Spain (Barcelona) or France (Toulouse) for university. The trilingual education environment is actually excellent for children — most Andorran residents speak 3-4 languages fluently.",
  False)

e("Andorra - Infrastructure", "Andorra", None, "Internet, transport, and connectivity",
  "Internet: Andorra Telecom (state monopoly) provides fiber with speeds up to 1Gbps. €40-55/month. Coverage is excellent throughout the country. Mobile: good 4G/5G coverage. Andorra has its own +376 country code. Transportation: No airport, no train station. Nearest airports: Barcelona (BCN, 2.5h drive), Toulouse (TLS, 2.5h drive). Access by road only — main routes through France (N-22/RN-22) and Spain (CG-1). Heliport for charter flights. Bus connections to Barcelona and Toulouse airports. A car is essential for daily life. Excellent road infrastructure within the country. Free parking widely available.",
  False)

# ============================================================
# Write the entries
# ============================================================

# Load existing
with open('supabase/seed/knowledge_base.json', 'r') as f:
    existing = json.load(f)

print(f"Existing entries: {len(existing)}")
print(f"New entries: {len(entries)}")

# Append
existing.extend(entries)

with open('supabase/seed/knowledge_base.json', 'w') as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)

print(f"Total entries: {len(existing)}")
print("Countries added:")
countries = {}
for e in entries:
    c = e['country']
    countries[c] = countries.get(c, 0) + 1
for c, n in sorted(countries.items()):
    print(f"  {c}: {n} entries")
