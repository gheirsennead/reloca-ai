import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import Link from "next/link";

interface CountryData {
  name: string;
  flag: string;
  slug: string;
  continent: string;
  capital: string;
  language: string;
  currency: string;
  costIndex: string;
  avgRent: string;
  safety: string;
  visa: string;
  visaTime: string;
  taxHighlight: string;
  climate: string;
  internet: string;
  healthcare: string;
  highlights: string[];
  whyMove: string;
  lifestyle: string;
  searchTerms: string[];
}

const COUNTRIES: Record<string, CountryData> = {
  portugal: { name: "Portugal", flag: "🇵🇹", slug: "portugal", continent: "Europe", capital: "Lisbon", language: "Portuguese", currency: "EUR (€)", costIndex: "Low-Medium", avgRent: "$900/mo (1BR, Lisbon center)", safety: "Very Safe (Index: 82)", visa: "D7 Passive Income Visa", visaTime: "3-6 months", taxHighlight: "IFICI regime: 20% flat tax on eligible Portuguese income for 10 years", climate: "Mediterranean — 300+ sunny days/year", internet: "Fast (100+ Mbps fiber)", healthcare: "Excellent public (SNS) + private options", highlights: ["Golden Visa program (real estate or fund investment)", "Path to EU citizenship in 5 years", "One of the best digital nomad hubs in Europe", "Affordable compared to Western Europe", "World-class food and wine scene"], whyMove: "Portugal has become the #1 destination for expats in Europe. With its IFICI tax regime (successor to NHR), affordable cost of living, beautiful coastline, and path to EU citizenship, it offers an unmatched combination of quality of life and financial advantages.", lifestyle: "Expect a relaxed pace of life, incredible seafood, world-class surfing, and a thriving expat community in Lisbon and Porto. The Algarve offers stunning beaches, while smaller cities like Braga and Coimbra provide authentic Portuguese living at even lower costs.", searchTerms: ["move to portugal", "relocate to portugal", "portugal d7 visa", "portugal golden visa", "living in portugal", "portugal cost of living", "portugal ifici tax", "portugal nhr replacement"] },
  spain: { name: "Spain", flag: "🇪🇸", slug: "spain", continent: "Europe", capital: "Madrid", language: "Spanish", currency: "EUR (€)", costIndex: "Medium", avgRent: "$1,100/mo (1BR, Barcelona center)", safety: "Very Safe (Index: 78)", visa: "Non-Lucrative Visa / Digital Nomad Visa", visaTime: "3-6 months", taxHighlight: "Beckham Law: 24% flat tax for 6 years on Spanish income", climate: "Mediterranean — warm and sunny year-round", internet: "Fast (100+ Mbps fiber)", healthcare: "Excellent public healthcare system", highlights: ["Beckham Law tax benefits for new residents", "Digital Nomad Visa available since 2023", "Rich culture, food, and nightlife", "Excellent public transportation", "Diverse regions from beaches to mountains"], whyMove: "Spain combines European quality of life with a lower cost of living than France, Germany, or the UK. The new Digital Nomad Visa and Beckham Law tax regime make it financially attractive for remote workers and entrepreneurs.", lifestyle: "From tapas culture to siestas, Spain offers a lifestyle that prioritizes enjoyment. Barcelona and Madrid are cosmopolitan hubs, while Valencia, Malaga, and the Canary Islands offer sunshine and lower costs.", searchTerms: ["move to spain", "relocate to spain", "spain digital nomad visa", "spain beckham law", "living in spain", "spain cost of living"] },
  italy: { name: "Italy", flag: "🇮🇹", slug: "italy", continent: "Europe", capital: "Rome", language: "Italian", currency: "EUR (€)", costIndex: "Medium", avgRent: "$950/mo (1BR, Rome center)", safety: "Safe (Index: 76)", visa: "Elective Residency Visa", visaTime: "3-6 months", taxHighlight: "7% flat tax for retirees in Southern Italy (10 years). €100K flat tax option for new residents.", climate: "Mediterranean — mild winters, warm summers", internet: "Good (50-100+ Mbps)", healthcare: "Very Good public system (SSN)", highlights: ["7% flat tax for retirees in the South", "€100K flat tax on worldwide income for new residents", "€1 house programs in rural villages", "World-class food, art, and architecture", "Path to EU citizenship"], whyMove: "Italy offers some of the most generous tax incentives in Europe for new residents. Retirees can pay just 7% tax in Southern Italy, while high earners can opt for the €100K flat tax regime. Combine that with arguably the world's best food and culture.", lifestyle: "La dolce vita is real. Slower pace, incredible cuisine, afternoon espresso culture, and stunning landscapes from Tuscany to the Amalfi Coast. Smaller cities like Bologna, Lecce, and Palermo offer authentic Italian living at a fraction of Rome or Milan prices.", searchTerms: ["move to italy", "relocate to italy", "italy flat tax", "italy 7 percent tax retirees", "living in italy", "italy elective residency visa"] },
  greece: { name: "Greece", flag: "🇬🇷", slug: "greece", continent: "Europe", capital: "Athens", language: "Greek", currency: "EUR (€)", costIndex: "Low", avgRent: "$550/mo (1BR, Athens center)", safety: "Safe (Index: 74)", visa: "Golden Visa / Digital Nomad Visa", visaTime: "2-4 months", taxHighlight: "7% flat tax on foreign income for retirees. 50% tax reduction for new workers.", climate: "Mediterranean — 250+ sunny days/year", internet: "Good (50+ Mbps)", healthcare: "Good public + affordable private", highlights: ["Golden Visa from €400K (€800K in prime areas)", "7% flat tax for foreign retirees", "50% income tax reduction for workers relocating", "Stunning islands and coastline", "Very affordable by European standards"], whyMove: "Greece offers competitive Golden Visa thresholds (from €400K), exceptional tax incentives for both retirees and workers, and one of the most affordable costs of living in Europe — all wrapped in stunning natural beauty.", lifestyle: "Island life, ancient history, fresh Mediterranean cuisine, and a warm social culture. Athens is a vibrant modern city, while islands like Crete, Corfu, and the Cyclades offer paradise living. The Greek pace of life is relaxed and community-oriented.", searchTerms: ["move to greece", "relocate to greece", "greece golden visa", "living in greece", "greece cost of living", "greece digital nomad visa"] },
  malta: { name: "Malta", flag: "🇲🇹", slug: "malta", continent: "Europe", capital: "Valletta", language: "English & Maltese", currency: "EUR (€)", costIndex: "Medium", avgRent: "$1,000/mo (1BR, Valletta center)", safety: "Very Safe (Index: 80)", visa: "Nomad Residence Permit / Global Residence Programme", visaTime: "2-4 months", taxHighlight: "No tax on foreign income not remitted to Malta. 15% flat for HNWI.", climate: "Mediterranean — 300+ sunny days/year", internet: "Good (50+ Mbps)", healthcare: "Very Good (ranked #5 globally by WHO)", highlights: ["English-speaking EU country", "No tax on foreign income (not remitted)", "Top 5 healthcare system globally", "Thriving iGaming and fintech industry", "300+ days of sunshine"], whyMove: "Malta is the only English-speaking country in the EU with a territorial tax system. Foreign income not remitted to Malta is tax-free. Combined with excellent healthcare, sunshine, and a thriving tech scene, it is ideal for entrepreneurs and remote workers.", lifestyle: "A small island with a big personality. Crystal-clear waters, ancient temples, vibrant nightlife in St. Julian's, and a tight-knit expat community. Everything is within a 30-minute drive. English is spoken everywhere.", searchTerms: ["move to malta", "relocate to malta", "malta nomad visa", "living in malta", "malta tax benefits", "malta golden visa"] },
  cyprus: { name: "Cyprus", flag: "🇨🇾", slug: "cyprus", continent: "Europe", capital: "Nicosia", language: "Greek & English", currency: "EUR (€)", costIndex: "Medium", avgRent: "$750/mo (1BR, Nicosia center)", safety: "Very Safe (Index: 82)", visa: "Permanent Residency (F Category)", visaTime: "2-3 months", taxHighlight: "Non-dom status: 0% tax on dividends for 17 years. 12.5% corporate tax.", climate: "Mediterranean — 340+ sunny days/year", internet: "Good (50+ Mbps)", healthcare: "Good public (GESY) + private", highlights: ["0% tax on dividends for 17 years (non-dom)", "12.5% corporate tax rate", "English widely spoken", "Fast-track permanent residency", "EU member with British legal system roots"], whyMove: "Cyprus offers one of the most attractive tax regimes in the EU: zero tax on dividends for 17 years as a non-dom, 12.5% corporate tax, and no inheritance tax. English is widely spoken thanks to British colonial history, making it easy for anglophone expats.", lifestyle: "Beach-focused living, Mediterranean cuisine, and a relaxed island pace. Limassol has a growing international business community, Paphos attracts retirees, and Larnaca offers affordable coastal living.", searchTerms: ["move to cyprus", "relocate to cyprus", "cyprus non dom", "living in cyprus", "cyprus tax benefits", "cyprus permanent residency"] },
  estonia: { name: "Estonia", flag: "🇪🇪", slug: "estonia", continent: "Europe", capital: "Tallinn", language: "Estonian", currency: "EUR (€)", costIndex: "Low-Medium", avgRent: "$700/mo (1BR, Tallinn center)", safety: "Very Safe (Index: 80)", visa: "Digital Nomad Visa / e-Residency", visaTime: "1-2 months", taxHighlight: "0% corporate tax on reinvested profits. 20% flat income tax.", climate: "Northern European — cold winters, mild summers", internet: "Fastest in Europe (100+ Mbps average)", healthcare: "Good public system", highlights: ["e-Residency — run an EU business from anywhere", "0% corporate tax on retained profits", "Most digitized society on Earth", "Digital Nomad Visa (1 year)", "Thriving startup ecosystem (Wise, Bolt, Skype)"], whyMove: "Estonia is the world's most digitized country. e-Residency lets you run a location-independent EU business with minimal bureaucracy. The Digital Nomad Visa offers a year of living in a tech-forward, clean, and safe society.", lifestyle: "Tallinn's medieval old town meets cutting-edge tech culture. Coworking spaces everywhere, fast internet, and a startup community punching way above its weight. Cold winters, but summers are magical with 19 hours of daylight.", searchTerms: ["move to estonia", "relocate to estonia", "estonia e-residency", "estonia digital nomad visa", "living in estonia", "estonia startup visa"] },
  andorra: { name: "Andorra", flag: "🇦🇩", slug: "andorra", continent: "Europe", capital: "Andorra la Vella", language: "Catalan", currency: "EUR (€)", costIndex: "Medium-High", avgRent: "$1,100/mo (1BR, center)", safety: "Extremely Safe (Index: 90)", visa: "Passive Residency / Active Residency", visaTime: "3-6 months", taxHighlight: "Max 10% income tax. 0% capital gains on shares held 10+ years. No inheritance tax.", climate: "Mountain — snowy winters, mild summers", internet: "Good (fiber available)", healthcare: "Good (CASS system, 75% reimbursement)", highlights: ["Maximum 10% income tax", "No capital gains tax on long-held assets", "No inheritance or wealth tax", "Extremely safe (near-zero crime)", "Between France and Spain — dual access"], whyMove: "Andorra is Europe's best-kept tax secret. A maximum 10% income tax, no inheritance tax, no wealth tax, and near-zero crime in a stunning mountain principality between France and Spain. Perfect for high-income individuals and families.", lifestyle: "Ski in winter, hike in summer. A small, tight-knit community surrounded by Pyrenees mountains. Shopping is tax-free, nature is everywhere, and you're 2 hours from Barcelona and Toulouse airports.", searchTerms: ["move to andorra", "relocate to andorra", "andorra tax", "living in andorra", "andorra residency", "andorra low tax"] },
  singapore: { name: "Singapore", flag: "🇸🇬", slug: "singapore", continent: "Asia", capital: "Singapore", language: "English, Mandarin, Malay, Tamil", currency: "SGD (S$)", costIndex: "High", avgRent: "$2,500/mo (1BR, center)", safety: "Extremely Safe (Index: 92)", visa: "EntrePass / Employment Pass / ONE Pass", visaTime: "2-3 months", taxHighlight: "0-22% income tax (capped). No capital gains tax. No inheritance tax.", climate: "Tropical — warm and humid year-round (27-32°C)", internet: "World-class (1Gbps+ common)", healthcare: "World-class (ranked #6 globally)", highlights: ["No capital gains tax", "Top 3 safest country in the world", "World-class infrastructure and healthcare", "Gateway to Asia-Pacific markets", "English as primary business language"], whyMove: "Singapore is Asia's premier business hub: rule of law, zero capital gains tax, world-class infrastructure, and English as a first language. If you are building a business with Asia-Pacific exposure, there is no better base.", lifestyle: "A futuristic city-state with incredible food (hawker centers to Michelin stars), pristine parks, and a multicultural population. Expensive but efficient — everything works, everything is clean, and everything is safe.", searchTerms: ["move to singapore", "relocate to singapore", "singapore entrepass", "living in singapore", "singapore tax", "singapore employment pass"] },
  uae: { name: "Dubai (UAE)", flag: "🇦🇪", slug: "uae", continent: "Middle East", capital: "Abu Dhabi", language: "Arabic & English", currency: "AED (د.إ)", costIndex: "Medium-High", avgRent: "$1,800/mo (1BR, Dubai center)", safety: "Very Safe (Index: 84)", visa: "Golden Visa (10-Year)", visaTime: "2-4 weeks", taxHighlight: "0% personal income tax. 9% corporate tax (above AED 375K profit).", climate: "Desert — hot summers (40°C+), mild winters (20-25°C)", internet: "Fast (100+ Mbps)", healthcare: "Excellent private healthcare", highlights: ["0% personal income tax", "10-year Golden Visa", "Fastest visa processing in the world", "World-class infrastructure", "Gateway between Europe and Asia"], whyMove: "Zero income tax, a 10-year Golden Visa processed in weeks, world-class infrastructure, and a strategic timezone between Europe and Asia. Dubai has become the default base for entrepreneurs, influencers, and remote workers optimizing for tax efficiency.", lifestyle: "Ultra-modern living with luxury malls, beaches, and year-round sunshine (hot summers aside). A truly international city — 90% of residents are expats. English is the lingua franca. The downside: summers are brutally hot (June-September).", searchTerms: ["move to dubai", "relocate to dubai", "dubai golden visa", "living in dubai", "dubai tax free", "uae golden visa", "dubai cost of living"] },
  thailand: { name: "Thailand", flag: "🇹🇭", slug: "thailand", continent: "Asia", capital: "Bangkok", language: "Thai", currency: "THB (฿)", costIndex: "Very Low", avgRent: "$400/mo (1BR, Chiang Mai center)", safety: "Safe (Index: 65)", visa: "Thailand Elite Visa / LTR Visa", visaTime: "1-3 months", taxHighlight: "LTR Visa holders: 17% flat tax. Territorial taxation (foreign income remitted after 180 days may be tax-free with planning).", climate: "Tropical — warm year-round (25-35°C)", internet: "Good (50-100+ Mbps)", healthcare: "Excellent private healthcare at low cost", highlights: ["Elite Visa: 5-20 years of hassle-free residency", "LTR Visa: 17% flat tax for qualified professionals", "Incredible value for money", "World-renowned healthcare tourism", "Digital nomad paradise (Chiang Mai, Bangkok, islands)"], whyMove: "Thailand offers an unbeatable combination of low cost of living, world-class healthcare, incredible food, and a well-established expat infrastructure. The Elite Visa provides hassle-free long-term residency, while the new LTR Visa adds tax benefits.", lifestyle: "Street food that rivals Michelin restaurants, tropical beaches, ancient temples, and a warm culture. Chiang Mai is the digital nomad capital of the world. Bangkok is a vibrant megacity. Islands like Koh Samui and Phuket offer beach living.", searchTerms: ["move to thailand", "relocate to thailand", "thailand elite visa", "living in thailand", "thailand cost of living", "chiang mai digital nomad", "thailand ltr visa"] },
  malaysia: { name: "Malaysia", flag: "🇲🇾", slug: "malaysia", continent: "Asia", capital: "Kuala Lumpur", language: "Malay & English", currency: "MYR (RM)", costIndex: "Very Low", avgRent: "$450/mo (1BR, KL center)", safety: "Safe (Index: 68)", visa: "MM2H (My Second Home) / DE Rantau", visaTime: "3-6 months", taxHighlight: "Territorial taxation: foreign-source income is tax-exempt. 0-30% on Malaysian income.", climate: "Tropical — warm and humid year-round", internet: "Good (50-100+ Mbps)", healthcare: "Excellent private healthcare at very low cost", highlights: ["Territorial tax system — foreign income exempt", "MM2H long-term residency program", "English widely spoken", "Incredible food diversity", "Healthcare tourism destination"], whyMove: "Malaysia offers a territorial tax system (foreign income is generally tax-exempt), English is widely spoken, healthcare is world-class at low prices, and the cost of living is among the lowest in Asia. The MM2H program provides long-term residency for retirees and investors.", lifestyle: "Kuala Lumpur is a modern, multicultural city with incredible food diversity (Malay, Chinese, Indian, and fusion). Penang is a UNESCO food capital. Langkawi offers island living. Everything is affordable, and English is widely spoken.", searchTerms: ["move to malaysia", "relocate to malaysia", "malaysia mm2h", "living in malaysia", "malaysia cost of living", "malaysia tax"] },
  brazil: { name: "Brazil", flag: "🇧🇷", slug: "brazil", continent: "South America", capital: "Brasília", language: "Portuguese", currency: "BRL (R$)", costIndex: "Low", avgRent: "$550/mo (1BR, São Paulo center)", safety: "Moderate (varies by city)", visa: "Digital Nomad Visa (VITEM XIV) / Retirement Visa", visaTime: "2-4 months", taxHighlight: "New tax regime for digital nomads under consideration. Currently 0-27.5% progressive.", climate: "Tropical to subtropical — warm year-round in most regions", internet: "Good (50-100+ Mbps in cities)", healthcare: "SUS (free public) + excellent private options", highlights: ["Digital Nomad Visa available", "Massive country with diverse lifestyles", "Growing tech hub (São Paulo, Florianópolis)", "Rich culture — music, carnival, beaches", "Affordable cost of living outside major cities"], whyMove: "Brazil offers incredible diversity — from the tech hub of São Paulo to the beaches of Florianópolis to the culture of Salvador. The digital nomad visa makes it accessible, and the cost of living outside major cities is very low.", lifestyle: "Vibrant, social, and warm. Brazilians are famously welcoming. Expect beaches, music, incredible food (churrasco, açaí, feijoada), and a culture that values relationships and enjoyment. Portuguese is essential outside business circles.", searchTerms: ["move to brazil", "relocate to brazil", "brazil digital nomad visa", "living in brazil", "brazil cost of living", "brazil retirement visa"] },
  argentina: { name: "Argentina", flag: "🇦🇷", slug: "argentina", continent: "South America", capital: "Buenos Aires", language: "Spanish", currency: "ARS ($)", costIndex: "Very Low", avgRent: "$400/mo (1BR, BA center)", safety: "Moderate (Index: 65)", visa: "Rentista Visa / Digital Nomad Visa", visaTime: "2-4 months", taxHighlight: "Residents taxed on worldwide income (5-35%). But extremely low USD cost of living due to exchange rate.", climate: "Varied — temperate in BA, Patagonian cold in south, subtropical in north", internet: "Good (50+ Mbps)", healthcare: "Very Good (ranked high in Latin America)", highlights: ["Fastest path to citizenship in South America (2 years)", "Incredibly low cost of living in USD", "World-class culture (tango, wine, steak)", "European-feel cities", "Patagonia — one of Earth's last frontiers"], whyMove: "Argentina offers the fastest citizenship path in South America (just 2 years), an incredibly low cost of living thanks to the exchange rate, and a European-influenced culture with world-class food, wine, and nightlife.", lifestyle: "Buenos Aires feels like Paris meets Madrid. Late dinners, incredible steak and Malbec, tango in San Telmo, and a thriving arts scene. Mendoza offers wine country living. Patagonia is for adventure seekers. The pace is relaxed and social.", searchTerms: ["move to argentina", "relocate to argentina", "argentina rentista visa", "living in argentina", "argentina cost of living", "buenos aires expat"] },
  chile: { name: "Chile", flag: "🇨🇱", slug: "chile", continent: "South America", capital: "Santiago", language: "Spanish", currency: "CLP ($)", costIndex: "Low-Medium", avgRent: "$600/mo (1BR, Santiago center)", safety: "Safe (Index: 70)", visa: "Temporary Resident Visa / Digital Nomad Visa", visaTime: "2-4 months", taxHighlight: "3-year exemption from worldwide income taxation for new residents. 0-40% progressive after.", climate: "Incredibly diverse — desert (north), Mediterranean (center), glacial (south)", internet: "Best in Latin America (200+ Mbps)", healthcare: "Very Good (FONASA public + ISAPRE private)", highlights: ["3-year foreign income tax exemption for new residents", "Startup Chile — government equity-free funding", "Most stable economy in South America", "Best internet in Latin America", "OECD member — strong institutions"], whyMove: "Chile is South America's most stable and business-friendly country. New residents enjoy a 3-year exemption from worldwide income taxation. Startup Chile offers equity-free government funding. The economy is strong, institutions are reliable, and the internet is the fastest in the region.", lifestyle: "Santiago is a modern city surrounded by the Andes. Wine country is an hour away. Ski in winter, beach in summer. Valparaíso offers bohemian coastal living. The south has lakes, volcanoes, and Patagonia. Seafood and wine are exceptional.", searchTerms: ["move to chile", "relocate to chile", "chile startup visa", "living in chile", "chile cost of living", "chile digital nomad visa"] },
  uruguay: { name: "Uruguay", flag: "🇺🇾", slug: "uruguay", continent: "South America", capital: "Montevideo", language: "Spanish", currency: "UYU ($U)", costIndex: "Medium", avgRent: "$650/mo (1BR, Montevideo center)", safety: "Safe (Index: 72)", visa: "Residency Visa (straightforward process)", visaTime: "3-6 months", taxHighlight: "Tax holiday: 0% on foreign income for first 11 years (or 7% flat option).", climate: "Temperate — mild year-round, similar to southern Europe", internet: "Good (50+ Mbps)", healthcare: "Very Good (dual public/private system)", highlights: ["0% tax on foreign income for 11 years", "Straightforward residency process", "Most progressive country in Latin America", "Stable democracy and strong institutions", "Punta del Este — the 'Monaco of South America'"], whyMove: "Uruguay offers the best tax deal for new residents in the Americas: zero tax on foreign income for up to 11 years. Combined with a stable democracy, progressive social policies, and Punta del Este's glamorous beach lifestyle, it is a hidden gem.", lifestyle: "Relaxed and civilized. Montevideo is walkable, safe, and cultured. Punta del Este is a luxury beach resort. The interior offers gaucho culture and estancias. Meat, wine, and mate are central to daily life.", searchTerms: ["move to uruguay", "relocate to uruguay", "uruguay tax benefits", "living in uruguay", "uruguay residency", "punta del este expat"] },
  paraguay: { name: "Paraguay", flag: "🇵🇾", slug: "paraguay", continent: "South America", capital: "Asunción", language: "Spanish & Guaraní", currency: "PYG (₲)", costIndex: "Very Low", avgRent: "$300/mo (1BR, Asunción center)", safety: "Moderate (Index: 58)", visa: "Permanent Residency (fast-track)", visaTime: "1-3 months", taxHighlight: "10% flat income tax. Territorial system — foreign income is tax-free.", climate: "Subtropical — hot summers, mild winters", internet: "Decent (30-50+ Mbps)", healthcare: "Basic public, affordable private", highlights: ["10% flat income tax", "Territorial system — 0% on foreign income", "Fastest permanent residency in the world (~$5,500 deposit)", "Extremely low cost of living", "Gateway to Mercosur markets"], whyMove: "Paraguay offers the world's fastest and cheapest permanent residency (deposit ~$5,500, done in weeks), a 10% flat tax with territorial system (foreign income is tax-free), and the lowest cost of living in South America.", lifestyle: "Simple and affordable. Asunción is a small capital with modern amenities but a small-town feel. Encarnación offers riverside living. Not glamorous, but incredibly affordable and tax-efficient. Growing expat community.", searchTerms: ["move to paraguay", "relocate to paraguay", "paraguay residency", "living in paraguay", "paraguay tax", "paraguay permanent residency"] },
  mexico: { name: "Mexico", flag: "🇲🇽", slug: "mexico", continent: "North America", capital: "Mexico City", language: "Spanish", currency: "MXN ($)", costIndex: "Low", avgRent: "$650/mo (1BR, CDMX center)", safety: "Varies by region (safe in expat areas)", visa: "Temporary Resident Visa", visaTime: "1-3 months", taxHighlight: "Residents taxed on worldwide income (1.92-35%). But low cost of living offsets.", climate: "Varied — tropical coast, temperate highlands, desert north", internet: "Good (50-100+ Mbps in cities)", healthcare: "Good public (IMSS) + excellent private at low cost", highlights: ["Largest digital nomad community in the Americas", "Close to the US (same timezone)", "Incredible food scene (UNESCO recognized)", "Very affordable healthcare", "Rich culture and history"], whyMove: "Mexico is the closest affordable relocation option for Americans. Same timezones, direct flights everywhere, incredible food, and a massive established expat community. Mexico City, Playa del Carmen, San Miguel de Allende, and Puerto Vallarta are proven expat hubs.", lifestyle: "Vibrant, colorful, and deeply cultural. Mexico City is a world-class metropolis with food, art, and nightlife rivaling any global capital. Beach towns offer laid-back tropical living. The culture is warm, family-oriented, and welcoming.", searchTerms: ["move to mexico", "relocate to mexico", "mexico temporary resident visa", "living in mexico", "mexico cost of living", "mexico city digital nomad"] },
  panama: { name: "Panama", flag: "🇵🇦", slug: "panama", continent: "Central America", capital: "Panama City", language: "Spanish", currency: "USD ($) & PAB", costIndex: "Low-Medium", avgRent: "$700/mo (1BR, Panama City center)", safety: "Moderate (Index: 55)", visa: "Friendly Nations Visa", visaTime: "2-4 months", taxHighlight: "Territorial taxation: 0% tax on foreign-source income. No capital gains on foreign investments.", climate: "Tropical — warm year-round (25-33°C)", internet: "Good (50+ Mbps)", healthcare: "Good (growing medical tourism)", highlights: ["0% tax on foreign income (territorial system)", "Friendly Nations Visa — easy residency for 50+ nationalities", "USD economy — no currency risk", "Strategic location (hub of the Americas)", "Pensionado discounts on everything"], whyMove: "Panama uses the US dollar, charges zero tax on foreign income, and offers one of the easiest residency visas in the world (Friendly Nations). It is a natural hub between North and South America with modern infrastructure and a growing expat community.", lifestyle: "Panama City is a modern, cosmopolitan city with impressive skyline and infrastructure. Boquete offers mountain living with a large retiree community. Bocas del Toro has Caribbean island vibes. The Pensionado program gives retirees discounts on flights, restaurants, and more.", searchTerms: ["move to panama", "relocate to panama", "panama friendly nations visa", "living in panama", "panama tax free", "panama pensionado"] },
  "costa-rica": { name: "Costa Rica", flag: "🇨🇷", slug: "costa-rica", continent: "Central America", capital: "San José", language: "Spanish", currency: "CRC (₡) & USD widely accepted", costIndex: "Low-Medium", avgRent: "$600/mo (1BR, San José center)", safety: "Safe (Index: 62)", visa: "Pensionado / Rentista Visa", visaTime: "3-6 months", taxHighlight: "Territorial taxation: 0% tax on foreign income. Only Costa Rican-source income is taxed.", climate: "Tropical — two coasts, mountains, eternal spring", internet: "Good (50+ Mbps)", healthcare: "Very Good (CAJA public system, excellent private)", highlights: ["0% tax on foreign income (territorial)", "Pura Vida lifestyle", "CAJA healthcare — affordable and comprehensive", "25% of country is protected nature reserves", "Stable democracy — 'Switzerland of Central America'"], whyMove: "Costa Rica is the most politically stable country in Central America, with zero tax on foreign income, excellent healthcare through the CAJA system, and a lifestyle built around nature and well-being. 'Pura Vida' is not just a saying — it is the way of life.", lifestyle: "Nature-focused living: rainforests, volcanoes, two coastlines, and incredible biodiversity. The expat community is well-established in areas like Tamarindo, Nosara, and the Central Valley. Surfing, yoga, and eco-living are central to the culture.", searchTerms: ["move to costa rica", "relocate to costa rica", "costa rica pensionado", "living in costa rica", "costa rica cost of living", "costa rica pura vida"] },
  "el-salvador": { name: "El Salvador", flag: "🇸🇻", slug: "el-salvador", continent: "Central America", capital: "San Salvador", language: "Spanish", currency: "USD ($) & BTC", costIndex: "Very Low", avgRent: "$400/mo (1BR, San Salvador center)", safety: "Improving rapidly (government crackdown on crime)", visa: "Bitcoin Freedom Visa / Residency Visa", visaTime: "1-2 months", taxHighlight: "0% tax on foreign income. Bitcoin is legal tender — 0% capital gains on BTC.", climate: "Tropical — warm year-round", internet: "Decent (30-50+ Mbps)", healthcare: "Basic public, affordable private", highlights: ["0% tax on foreign income", "Bitcoin legal tender — 0% crypto capital gains", "USD economy", "Extremely low cost of living", "Bitcoin Freedom Visa (deposit 1 BTC)"], whyMove: "El Salvador is the world's first Bitcoin-friendly country. Zero tax on foreign income, zero capital gains on Bitcoin, and a Bitcoin Freedom Visa for crypto holders. Combined with a USD economy and ultra-low costs, it is attracting a wave of crypto entrepreneurs.", lifestyle: "Surf beaches, pupusas, and a rapidly modernizing country. El Zonte (Bitcoin Beach) is a growing digital nomad hub. San Salvador is developing quickly. The country is small, affordable, and increasingly safe under recent reforms.", searchTerms: ["move to el salvador", "relocate to el salvador", "el salvador bitcoin visa", "living in el salvador", "el salvador tax free", "el salvador bitcoin"] },
  colombia: { name: "Colombia", flag: "🇨🇴", slug: "colombia", continent: "South America", capital: "Bogotá", language: "Spanish", currency: "COP ($)", costIndex: "Very Low", avgRent: "$450/mo (1BR, Medellín center)", safety: "Improving (safe in expat areas)", visa: "Digital Nomad Visa / Retirement Visa", visaTime: "1-3 months", taxHighlight: "Residents taxed on worldwide income after 5 years. First 5 years: only Colombian income taxed.", climate: "Varies by altitude — Medellín has 'eternal spring' (22°C year-round)", internet: "Good (50-100+ Mbps)", healthcare: "Excellent and very affordable", highlights: ["Digital Nomad Visa (2 years)", "5-year grace period before worldwide taxation", "Medellín — world's most famous digital nomad city", "Excellent healthcare at low cost", "Incredibly diverse geography and culture"], whyMove: "Colombia's Digital Nomad Visa, 5-year tax grace period, and ultra-low cost of living make it one of the most attractive options for remote workers. Medellín's eternal spring climate and thriving digital nomad scene are world-renowned.", lifestyle: "Medellín is the star: perfect weather, affordable luxury, great nightlife, and a massive expat community. Bogotá is a cultural capital. Cartagena offers Caribbean charm. Colombian people are famously warm and welcoming.", searchTerms: ["move to colombia", "relocate to colombia", "colombia digital nomad visa", "living in colombia", "medellin expat", "colombia cost of living"] },
  ecuador: { name: "Ecuador", flag: "🇪🇨", slug: "ecuador", continent: "South America", capital: "Quito", language: "Spanish", currency: "USD ($)", costIndex: "Very Low", avgRent: "$350/mo (1BR, Cuenca center)", safety: "Moderate (safe in expat areas)", visa: "Jubilado (Retiree) Visa / Professional Visa", visaTime: "2-4 months", taxHighlight: "Progressive tax 0-37%. But retirees get massive discounts: 50% off flights, utilities, and more.", climate: "Varies — eternal spring in highlands, tropical coast, Amazon rainforest", internet: "Decent (30-50+ Mbps)", healthcare: "Good and very affordable", highlights: ["USD economy — no currency risk", "Retiree discounts: 50% off flights, utilities, entertainment", "Cuenca — top retirement destination globally", "Extremely low cost of living", "Incredible natural diversity (Andes, coast, Amazon, Galápagos)"], whyMove: "Ecuador uses the US dollar, offers some of the lowest costs of living in the Americas, and provides retirees with extraordinary discounts (50% off domestic flights, 50% off utilities). Cuenca is consistently ranked among the world's best retirement cities.", lifestyle: "Cuenca is the gem: colonial architecture, mild weather, walkable city, and a large English-speaking expat community. Quito is a cultural capital. The coast offers beach living. And the Galápagos Islands are in your backyard.", searchTerms: ["move to ecuador", "relocate to ecuador", "ecuador jubilado visa", "living in ecuador", "cuenca retirement", "ecuador cost of living"] },
};

export async function generateStaticParams() {
  return Object.keys(COUNTRIES).map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const data = COUNTRIES[slug];
  if (!data) return { title: "Country Not Found" };

  const canonicalUrl = `https://reloca.ai/relocate-to/${data.slug}`;
  return {
    title: `Move to ${data.name} ${data.flag} — Visa, Cost of Living, Tax Guide | Reloca.ai`,
    description: `Complete guide to relocating to ${data.name}. ${data.visa}, cost of living (${data.avgRent}), tax benefits (${data.taxHighlight.split('.')[0]}), healthcare, safety. Get your personalized relocation plan.`,
    keywords: data.searchTerms,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Relocate to ${data.name} ${data.flag} — Everything You Need to Know`,
      description: `${data.whyMove.substring(0, 160)}...`,
      url: canonicalUrl,
    },
  };
}

export default async function RelocateToCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  const data = COUNTRIES[slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-6xl mb-4 block">{data.flag}</span>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Move to {data.name}
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">{data.whyMove}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{data.continent}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{data.language}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{data.currency}</span>
          </div>
          <Link href="/plan-36" className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-bold px-8 py-4 rounded-xl transition text-lg shadow-lg shadow-[#38b2ac]/25">
            Get My {data.name} Relocation Plan →
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-6 text-center">Quick Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Cost of Living", value: data.costIndex, emoji: "💰" },
              { label: "Avg. Rent", value: data.avgRent, emoji: "🏠" },
              { label: "Safety", value: data.safety, emoji: "🛡️" },
              { label: "Healthcare", value: data.healthcare, emoji: "🏥" },
              { label: "Internet", value: data.internet, emoji: "📶" },
              { label: "Climate", value: data.climate, emoji: "☀️" },
              { label: "Main Visa", value: data.visa, emoji: "📋" },
              { label: "Visa Timeline", value: data.visaTime, emoji: "⏱️" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-2xl mb-1">{stat.emoji}</div>
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-sm font-semibold text-[#1a365d]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Highlight */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">💰 Tax Benefits</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <p className="text-lg font-semibold text-green-800 mb-2">{data.taxHighlight}</p>
            <p className="text-sm text-green-700">Your personalized Reloca report includes a full tax optimization strategy specific to your income type, nationality, and family situation.</p>
          </div>
        </div>
      </section>

      {/* Why Move */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">🌟 Why {data.name}?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1a365d] mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {data.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#38b2ac] font-bold">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1a365d] mb-3">Lifestyle & Culture</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{data.lifestyle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Make {data.name} Your New Home?</h2>
          <p className="opacity-80 mb-3">Get a personalized relocation report covering visa roadmap, tax strategy, cost breakdown, and step-by-step timeline — specific to YOUR situation.</p>
          <p className="text-sm opacity-60 mb-6">Takes 10 minutes. Covers 23+ countries. Built by expats who have done it.</p>
          <Link href="/plan-36" className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-bold px-8 py-4 rounded-xl transition text-lg shadow-lg shadow-[#38b2ac]/25">
            Start My Free Assessment →
          </Link>
          <p className="text-xs opacity-50 mt-3">💰 Full report: $49 · 30-day money-back guarantee</p>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-6">❓ Frequently Asked Questions About Moving to {data.name}</h2>
          <div className="space-y-4">
            {[
              { q: `What visa do I need to move to ${data.name}?`, a: `The most common visa for expats is the ${data.visa}. Processing typically takes ${data.visaTime}. Your specific visa path depends on your nationality, income source, and goals — our personalized report covers the exact steps for your situation.` },
              { q: `What is the cost of living in ${data.name}?`, a: `${data.name} has a ${data.costIndex.toLowerCase()} cost of living. Average rent for a 1-bedroom in the center is ${data.avgRent}. Monthly living costs (including food, transport, utilities) typically range from $800 to $2,500 depending on your lifestyle and city.` },
              { q: `Is ${data.name} safe for expats?`, a: `${data.name} is rated as ${data.safety}. Like anywhere, safety varies by area. Expat-popular neighborhoods tend to be very safe. Our report includes specific safety data for the cities that match your profile.` },
              { q: `What are the tax benefits of moving to ${data.name}?`, a: `${data.taxHighlight}. Tax optimization can save you $10K–$100K+ per year depending on your income. Our report includes a personalized tax strategy based on your specific financial situation.` },
              { q: `How is the healthcare in ${data.name}?`, a: `Healthcare in ${data.name} is rated as ${data.healthcare}. Both public and private options are available. Your Reloca report includes a healthcare comparison specific to your family size and needs.` },
              { q: `Can I work remotely from ${data.name}?`, a: `Yes! ${data.name} has ${data.internet.toLowerCase()} internet infrastructure. Many expats work remotely. Coworking spaces are available in major cities. Check visa requirements — some visas allow remote work, others don't.` },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-[#1a365d] text-sm flex items-center justify-between">
                  {faq.q}
                  <span className="text-[#38b2ac] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumbs JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://reloca.ai" },
          { "@type": "ListItem", "position": 2, "name": "Countries", "item": "https://reloca.ai/relocate-to" },
          { "@type": "ListItem", "position": 3, "name": `Move to ${data.name}`, "item": `https://reloca.ai/relocate-to/${data.slug}` },
        ]
      })}} />

      {/* FAQ JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": `What visa do I need to move to ${data.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `The most common visa is the ${data.visa}. Processing takes ${data.visaTime}.` }},
          { "@type": "Question", "name": `What is the cost of living in ${data.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `${data.name} has a ${data.costIndex.toLowerCase()} cost of living. Average rent: ${data.avgRent}.` }},
          { "@type": "Question", "name": `Is ${data.name} safe for expats?`, "acceptedAnswer": { "@type": "Answer", "text": `${data.name} is rated as ${data.safety}.` }},
          { "@type": "Question", "name": `What are the tax benefits of moving to ${data.name}?`, "acceptedAnswer": { "@type": "Answer", "text": data.taxHighlight }},
          { "@type": "Question", "name": `How is the healthcare in ${data.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `Healthcare is rated as ${data.healthcare}.` }},
        ]
      })}} />

      {/* Other Countries */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1a365d] mb-6">Explore Other Countries</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.values(COUNTRIES).filter(c => c.slug !== slug).map((c) => (
              <Link key={c.slug} href={`/relocate-to/${c.slug}`} className="inline-flex items-center gap-1 bg-gray-50 hover:bg-[#38b2ac]/10 border border-gray-200 hover:border-[#38b2ac]/30 rounded-full px-3 py-1.5 text-sm text-gray-700 hover:text-[#1a365d] transition">
                {c.flag} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
