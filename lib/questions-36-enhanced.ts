import { Question } from '@/types/questionnaire';

// ENHANCED 36-QUESTION RELOCATION QUESTIONNAIRE
// Optimized for better user experience, clear language, and comprehensive assessment

const COUNTRIES = [
  'Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 
  'Colombia', 'Costa Rica', 'Czech Republic', 'Denmark', 'Ecuador', 'Estonia', 
  'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 
  'Italy', 'Japan', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Mexico', 
  'Netherlands', 'New Zealand', 'Norway', 'Panama', 'Paraguay', 'Poland', 
  'Portugal', 'Singapore', 'Slovakia', 'Slovenia', 'South Korea', 'Spain', 
  'Sweden', 'Switzerland', 'United Kingdom', 'United States', 'Uruguay'
];

const LATAM_COUNTRIES = [
  'Argentina', 'Belize', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Costa Rica',
  'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico', 'Nicaragua', 
  'Panama', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela'
];

export const questions36Enhanced: Question[] = [
  // SECTION 1: MOTIVATION & GOALS (Questions 1-8)
  {
    id: 1,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "What are your primary motivations for relocating? (Select your top 3 reasons)",
    description: "Select up to 3 choices that best describe your motivations.",
    type: 'multi-select',
    mandatory: true,
    maxSelections: 3,
    options: [
      { value: 'lower-cost', label: '💰 Lower cost of living' },
      { value: 'better-weather', label: '☀️ Better climate and weather' },
      { value: 'tax-benefits', label: '📊 Tax optimization and benefits' },
      { value: 'safety-security', label: '🛡️ Better safety and security' },
      { value: 'retirement', label: '🏖️ Retirement planning' },
      { value: 'business-opportunities', label: '🚀 Business and investment opportunities' },
      { value: 'lifestyle-freedom', label: '🌟 More freedom and better lifestyle' },
      { value: 'family-kids', label: '👨‍👩‍👧‍👦 Better opportunities for family/kids' },
      { value: 'adventure', label: '🗺️ Adventure and new experiences' },
      { value: 'other', label: '🤔 Other reasons' }
    ],
  },
  {
    id: 2,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "How urgent is your relocation timeline?",
    description: "This helps us understand how quickly you need actionable information.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'immediate', label: '🚨 Within 6 months (urgent)' },
      { value: 'soon', label: '📅 6-12 months (active planning)' },
      { value: 'medium', label: '🗓️ 1-2 years (serious consideration)' },
      { value: 'long-term', label: '⏰ 2+ years (exploring options)' },
      { value: 'researching', label: '🔍 Just researching for now' }
    ],
  },
  {
    id: 3,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "What type of relocation are you considering?",
    description: "Different visa types have different requirements and benefits.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'permanent', label: '🏠 Permanent residency/citizenship' },
      { value: 'temporary', label: '📅 Temporary residency (1-5 years)' },
      { value: 'nomad', label: '🌎 Digital nomad/tourist visa hopping' },
      { value: 'investment', label: '💼 Investment/business visa' },
      { value: 'retirement', label: '🏖️ Retirement visa' },
      { value: 'unsure', label: '🤷‍♂️ Not sure yet' }
    ],
  },
  {
    id: 4,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "What's your current country of residence?",
    description: "This affects visa requirements and tax implications for your move.",
    type: 'dropdown',
    mandatory: true,
    options: COUNTRIES.map(country => ({ value: country, label: country })),
  },
  {
    id: 41,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "Which regions interest you most? (Select all that apply)",
    description: "This helps us focus your report on the most relevant countries and opportunities.",
    type: 'multi-select',
    mandatory: false,
    options: [
      { value: 'latin-america', label: '🌎 Latin America (Brazil, Argentina, Mexico, etc.)' },
      { value: 'southern-europe', label: '🇪🇺 Southern Europe (Portugal, Spain, Italy, Greece)' },
      { value: 'tax-havens-europe', label: '🏦 European Tax Hubs (Andorra, Malta, Cyprus, Estonia)' },
      { value: 'southeast-asia', label: '🌏 Southeast Asia (Thailand, Malaysia, Singapore)' },
      { value: 'middle-east', label: '🏜️ Middle East (Dubai/UAE)' },
      { value: 'open-to-all', label: '🌍 Open to all — surprise me!' }
    ],
  },
  {
    id: 42,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "Any specific countries you're already considering? (Optional — select up to 5)",
    description: "If you have countries in mind, we'll give them extra focus in your report. Skip if you're open to suggestions.",
    type: 'multi-select',
    mandatory: false,
    maxSelections: 5,
    hasOtherOption: true,
    options: [
      { value: 'Portugal', label: '🇵🇹 Portugal' },
      { value: 'Spain', label: '🇪🇸 Spain' },
      { value: 'Italy', label: '🇮🇹 Italy' },
      { value: 'Greece', label: '🇬🇷 Greece' },
      { value: 'Malta', label: '🇲🇹 Malta' },
      { value: 'Cyprus', label: '🇨🇾 Cyprus' },
      { value: 'Estonia', label: '🇪🇪 Estonia' },
      { value: 'Andorra', label: '🇦🇩 Andorra' },
      { value: 'Singapore', label: '🇸🇬 Singapore' },
      { value: 'Dubai', label: '🇦🇪 Dubai / UAE' },
      { value: 'Thailand', label: '🇹🇭 Thailand' },
      { value: 'Malaysia', label: '🇲🇾 Malaysia' },
      { value: 'Brazil', label: '🇧🇷 Brazil' },
      { value: 'Argentina', label: '🇦🇷 Argentina' },
      { value: 'Uruguay', label: '🇺🇾 Uruguay' },
      { value: 'Paraguay', label: '🇵🇾 Paraguay' },
      { value: 'Mexico', label: '🇲🇽 Mexico' },
      { value: 'Panama', label: '🇵🇦 Panama' },
      { value: 'Costa Rica', label: '🇨🇷 Costa Rica' },
      { value: 'Colombia', label: '🇨🇴 Colombia' },
      { value: 'Ecuador', label: '🇪🇨 Ecuador' },
      { value: 'Chile', label: '🇨🇱 Chile' },
      { value: 'El Salvador', label: '🇸🇻 El Salvador' },
      { value: 'other', label: '🌍 Other country/region' },
    ],
  },
  {
    id: 5,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "Are you relocating alone or with others?",
    description: "Family size impacts housing, education, and visa application complexity.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'alone', label: '👤 Just me' },
      { value: 'partner', label: '👫 Me + partner/spouse' },
      { value: 'small-family', label: '👨‍👩‍👧 Me + partner + 1-2 kids' },
      { value: 'large-family', label: '👨‍👩‍👧‍👦 Me + partner + 3+ kids' },
      { value: 'extended', label: '👨‍👩‍👧‍👦👴 Extended family group' },
      { value: 'friends', label: '👥 Group of friends' }
    ],
  },
  {
    id: 6,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "What's your age range?",
    description: "Age affects visa eligibility, tax planning, and lifestyle recommendations.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: '18-29', label: '🎓 18-29 (Young professional)' },
      { value: '30-39', label: '💼 30-39 (Career building)' },
      { value: '40-49', label: '🏡 40-49 (Established professional)' },
      { value: '50-59', label: '💰 50-59 (Pre-retirement planning)' },
      { value: '60-69', label: '🏖️ 60-69 (Retirement ready)' },
      { value: '70+', label: '🌅 70+ (Retirement lifestyle)' }
    ],
  },
  {
    id: 7,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "Do you have any children who would be relocating with you?",
    description: "Children's education and activities are major factors in location selection.",
    type: 'single-select',
    mandatory: false,
    options: [
      { value: 'no-kids', label: '👤 No children' },
      { value: 'young-kids', label: '🧒 Yes, young children (0-12 years)' },
      { value: 'teenagers', label: '👦 Yes, teenagers (13-18 years)' },
      { value: 'adult-kids', label: '👨 Yes, adult children (18+ years)' },
      { value: 'mixed-ages', label: '👨‍👩‍👧‍👦 Yes, children of various ages' }
    ],
  },
  {
    id: 8,
    section: 1,
    sectionTitle: 'Your Relocation Journey',
    question: "How many times have you lived abroad before?",
    description: "Your experience level helps us tailor advice complexity and focus areas.",
    type: 'single-select',
    mandatory: false,
    options: [
      { value: 'never', label: '🏠 Never lived abroad' },
      { value: 'once', label: '✈️ Once before' },
      { value: 'few-times', label: '🌍 A few times (2-4 countries)' },
      { value: 'experienced', label: '🗺️ Very experienced (5+ countries)' },
      { value: 'nomad', label: '🌎 Digital nomad lifestyle' }
    ],
  },
  
  // MID-COURSE ENCOURAGEMENT
  {
    id: 9,
    section: 2,
    sectionTitle: 'Financial Considerations',
    question: "Great progress! Now let's talk about your financial situation. What's your estimated annual household income?",
    description: "This is confidential and helps us recommend appropriate countries and visa types. We'll suggest options within your comfort zone.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'under-50k', label: '💼 Under $50,000' },
      { value: '50k-100k', label: '💰 $50,000 - $100,000' },
      { value: '100k-200k', label: '💵 $100,000 - $200,000' },
      { value: '200k-500k', label: '💎 $200,000 - $500,000' },
      { value: '500k-1m', label: '🏦 $500,000 - $1,000,000' },
      { value: 'over-1m', label: '💸 Over $1,000,000' },
      { value: 'prefer-not-say', label: '🤐 Prefer not to say' }
    ],
  },
  {
    id: 10,
    section: 2,
    sectionTitle: 'Financial Considerations',
    question: "What's your estimated net worth? (assets minus debts)",
    description: "Net worth affects investment visa eligibility and helps determine suitable countries.",
    type: 'single-select',
    mandatory: false,
    options: [
      { value: 'under-100k', label: '🏦 Under $100,000' },
      { value: '100k-500k', label: '💰 $100,000 - $500,000' },
      { value: '500k-1m', label: '💎 $500,000 - $1,000,000' },
      { value: '1m-5m', label: '🏛️ $1M - $5M' },
      { value: '5m-10m', label: '💸 $5M - $10M' },
      { value: 'over-10m', label: '🏦 Over $10M' },
      { value: 'prefer-not-say', label: '🤐 Prefer not to say' }
    ],
  },
  {
    id: 11,
    section: 2,
    sectionTitle: 'Financial Considerations',
    question: "How much can you comfortably invest upfront for your relocation?",
    description: "This includes visa fees, legal costs, initial setup, and potential investment visa requirements.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'under-10k', label: '💰 Under $10,000' },
      { value: '10k-25k', label: '💵 $10,000 - $25,000' },
      { value: '25k-50k', label: '💎 $25,000 - $50,000' },
      { value: '50k-100k', label: '🏦 $50,000 - $100,000' },
      { value: '100k-250k', label: '💸 $100,000 - $250,000' },
      { value: '250k-500k', label: '🏛️ $250,000 - $500,000' },
      { value: 'over-500k', label: '💼 Over $500,000' }
    ],
  },
  {
    id: 12,
    section: 2,
    sectionTitle: 'Financial Considerations',
    question: "What are your sources of income? (Rank up to 3 in order of importance)",
    description: "Different income types have different tax implications and visa requirements. Select your #1 source first, then optionally #2 and #3.",
    type: 'ranking',
    mandatory: true,
    maxSelections: 3,
    options: [
      { value: 'employment', label: '💼 Employment/salary' },
      { value: 'business', label: '🏢 Business ownership' },
      { value: 'freelance', label: '💻 Freelance/consulting' },
      { value: 'investments', label: '📈 Investment income' },
      { value: 'rental', label: '🏠 Rental properties' },
      { value: 'pension', label: '🏖️ Pension/retirement' },
      { value: 'passive', label: '💰 Passive income streams' },
    ],
  },
  {
    id: 13,
    section: 2,
    sectionTitle: 'Financial Considerations',
    question: "Can your income be earned remotely or internationally?",
    description: "Remote income provides more location flexibility and better visa options.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'fully-remote', label: '💻 100% remote/location independent' },
      { value: 'mostly-remote', label: '🌐 Mostly remote with occasional travel' },
      { value: 'partially-remote', label: '📅 Partially remote (hybrid)' },
      { value: 'location-dependent', label: '🏢 Must be physically present' },
      { value: 'retired', label: '🏖️ Retired/no active income needed' },
      { value: 'will-find-local', label: '🔍 Plan to find local work' }
    ],
  },
  
  // SECTION 3: PREFERENCES & LIFESTYLE (Questions 14-22)
  {
    id: 14,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "You're doing great! Let's explore your lifestyle preferences. What climate do you prefer?",
    description: "Climate significantly impacts daily life, health, and overall happiness.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'tropical', label: '🌴 Tropical (warm year-round, 75-85°F)' },
      { value: 'subtropical', label: '☀️ Subtropical (warm summers, mild winters)' },
      { value: 'mediterranean', label: '🍇 Mediterranean (dry summers, mild winters)' },
      { value: 'temperate', label: '🍂 Temperate (four distinct seasons)' },
      { value: 'cool', label: '❄️ Cool/cold (prefer cooler temperatures)' },
      { value: 'flexible', label: '🌤️ Flexible (climate not a priority)' }
    ],
  },
  {
    id: 15,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "What type of location appeals to you most?",
    description: "Different locations offer different amenities, costs, and lifestyle options.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'major-city', label: '🏙️ Major city (capital/financial center)' },
      { value: 'mid-city', label: '🌆 Mid-size city (100k-1M people)' },
      { value: 'small-city', label: '🏘️ Small city/large town (20k-100k)' },
      { value: 'coastal', label: '🏖️ Coastal/beach town' },
      { value: 'mountain', label: '⛰️ Mountain/highland area' },
      { value: 'rural', label: '🌱 Rural/countryside' },
      { value: 'flexible', label: '🗺️ Flexible on location type' }
    ],
  },
  {
    id: 16,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "How important is access to international amenities? (international schools, hospitals, airports)",
    description: "This affects which areas within countries will be suitable for your lifestyle.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'essential', label: '⭐ Essential - need full international access' },
      { value: 'important', label: '🏥 Important - would prefer good access' },
      { value: 'nice-to-have', label: '✨ Nice to have but not critical' },
      { value: 'not-important', label: '🌿 Not important - prefer local lifestyle' }
    ],
  },
  {
    id: 17,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "What languages do you speak fluently?",
    description: "Language skills open up different countries and affect integration ease.",
    type: 'multi-select',
    mandatory: true,
    options: [
      { value: 'english', label: '🇺🇸 English' },
      { value: 'spanish', label: '🇪🇸 Spanish' },
      { value: 'portuguese', label: '🇧🇷 Portuguese' },
      { value: 'french', label: '🇫🇷 French' },
      { value: 'german', label: '🇩🇪 German' },
      { value: 'italian', label: '🇮🇹 Italian' },
      { value: 'mandarin', label: '🇨🇳 Mandarin' },
      { value: 'russian', label: '🇷🇺 Russian' },
      { value: 'other', label: '🌍 Other language(s)' }
    ],
  },
  {
    id: 18,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "Are you willing to learn a new language?",
    description: "Language learning willingness dramatically expands your country options.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'enthusiastic', label: '🎯 Yes, excited to learn!' },
      { value: 'willing', label: '📚 Yes, willing to learn' },
      { value: 'basic-only', label: '🗣️ Only basic conversational level' },
      { value: 'prefer-avoid', label: '😬 Prefer to avoid if possible' },
      { value: 'english-only', label: '🇺🇸 Strongly prefer English-speaking countries' }
    ],
  },
  {
    id: 19,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "How important is having a strong expat community?",
    description: "Expat communities provide support, networking, and easier cultural transition.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'essential', label: '👥 Essential - need strong expat network' },
      { value: 'important', label: '🤝 Important - would help a lot' },
      { value: 'nice-to-have', label: '😊 Nice to have but not necessary' },
      { value: 'prefer-local', label: '🌍 Prefer to integrate with locals' },
      { value: 'not-important', label: '🤷‍♂️ Not important to me' }
    ],
  },
  {
    id: 20,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "What's your preferred housing style? (Rank up to 3 in order of preference)",
    description: "Housing preferences affect location and budget considerations. Select your #1 preference first, then optionally #2 and #3.",
    type: 'ranking',
    mandatory: false,
    maxSelections: 3,
    options: [
      { value: 'apartment', label: '🏢 Modern apartment/condo' },
      { value: 'house', label: '🏡 Single family house' },
      { value: 'villa', label: '🏖️ Villa/luxury home' },
      { value: 'gated-community', label: '🏘️ Gated community' },
      { value: 'rural-property', label: '🌱 Rural property/farm' },
      { value: 'flexible', label: '🏠 Flexible on housing type' }
    ],
  },
  {
    id: 21,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "How important is access to healthcare?",
    description: "Healthcare quality and accessibility vary significantly between countries and regions.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'critical', label: '🏥 Critical - need world-class healthcare' },
      { value: 'very-important', label: '⚕️ Very important - good quality needed' },
      { value: 'important', label: '💊 Important - decent quality sufficient' },
      { value: 'basic', label: '🩹 Basic healthcare is fine' },
      { value: 'not-priority', label: '🤷‍♂️ Not a major priority' }
    ],
  },
  {
    id: 22,
    section: 3,
    sectionTitle: 'Lifestyle & Preferences',
    question: "What activities and amenities are most important to you?",
    description: "This helps us match you with locations that support your lifestyle and interests.",
    type: 'multi-select',
    mandatory: false,
    options: [
      { value: 'beaches', label: '🏖️ Beaches and water activities' },
      { value: 'outdoor-sports', label: '⛰️ Hiking, climbing, outdoor sports' },
      { value: 'golf', label: '⛳ Golf courses' },
      { value: 'nightlife', label: '🍷 Restaurants, bars, nightlife' },
      { value: 'culture', label: '🎭 Arts, culture, museums' },
      { value: 'shopping', label: '🛍️ Shopping and entertainment' },
      { value: 'fitness', label: '💪 Gyms, fitness, wellness' },
      { value: 'nature', label: '🌿 Nature, peace, tranquility' },
      { value: 'business', label: '💼 Business networking opportunities' }
    ],
  },
  
  // SECTION 4: PRACTICAL CONSIDERATIONS (Questions 23-30)
  {
    id: 23,
    section: 4,
    sectionTitle: 'Practical Matters',
    question: "Almost there! Let's cover some practical aspects. How important are tax benefits to you?",
    description: "Tax optimization can provide significant long-term savings but requires careful planning.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'primary-motivation', label: '🎯 Primary motivation for moving' },
      { value: 'very-important', label: '💰 Very important consideration' },
      { value: 'somewhat-important', label: '📊 Somewhat important' },
      { value: 'minor-factor', label: '🤷‍♂️ Minor factor' },
      { value: 'not-important', label: '❌ Not important at all' }
    ],
  },
  {
    id: 24,
    section: 4,
    sectionTitle: 'Practical Matters',
    question: "Are you interested in eventually obtaining citizenship?",
    description: "Citizenship paths vary greatly between countries and affect long-term planning.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'definitely', label: '🏛️ Yes, definitely interested' },
      { value: 'probably', label: '✅ Probably, if the process is reasonable' },
      { value: 'maybe', label: '🤔 Maybe, depends on benefits' },
      { value: 'unlikely', label: '📋 Unlikely - prefer residency only' },
      { value: 'no', label: '❌ No, not interested' }
    ],
  },
  {
    id: 25,
    section: 4,
    sectionTitle: 'Practical Matters',
    question: "How important is visa/residency process simplicity?",
    description: "Some countries have complex processes but great benefits; others are simpler but more limited.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'critical', label: '⚡ Critical - need simple process' },
      { value: 'important', label: '📋 Important - prefer easier path' },
      { value: 'moderate', label: '⚖️ Moderate - willing to handle complexity' },
      { value: 'not-important', label: '💪 Not important - can handle complex process' }
    ],
  },
  {
    id: 26,
    section: 4,
    sectionTitle: 'Practical Matters',
    question: "How important is political/economic stability?",
    description: "Stability affects everything from daily life to long-term investment security.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'essential', label: '🛡️ Essential - must have high stability' },
      { value: 'very-important', label: '⭐ Very important consideration' },
      { value: 'important', label: '📈 Important but not deal-breaker' },
      { value: 'moderate', label: '⚖️ Moderate concern' },
      { value: 'risk-tolerant', label: '🎲 Risk-tolerant for better opportunities' }
    ],
  },
  {
    id: 27,
    section: 4,
    sectionTitle: 'Practical Matters',
    question: "How important is personal safety and security?",
    description: "Safety levels vary significantly between countries and even between cities.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'paramount', label: '🛡️ Paramount - top priority' },
      { value: 'very-important', label: '🚨 Very important' },
      { value: 'important', label: '⚠️ Important consideration' },
      { value: 'moderate', label: '🤷‍♂️ Moderate concern' },
      { value: 'adaptable', label: '💪 Adaptable to different safety levels' }
    ],
  },
  {
    id: 28,
    section: 4,
    sectionTitle: 'Practical Matters',
    question: "Do you have any specific countries you're already considering?",
    description: "This helps us validate your choices and suggest similar alternatives.",
    type: 'multi-select',
    mandatory: false,
    hasOtherOption: true,
    options: [
      ...LATAM_COUNTRIES.map(country => ({ value: country, label: `🌎 ${country}` })),
      { value: 'other', label: '✏️ Other (please specify)' }
    ],
  },
  {
    id: 29,
    section: 4,
    sectionTitle: 'Practical Matters',
    question: "Are there any countries you want to avoid?",
    description: "Understanding your concerns helps us avoid unsuitable recommendations.",
    type: 'multi-select',
    mandatory: false,
    options: LATAM_COUNTRIES.map(country => ({ value: country, label: `❌ ${country}` })),
  },
  {
    id: 30,
    section: 4,
    sectionTitle: 'Practical Matters',
    question: "How important is maintaining your current passport/citizenship?",
    description: "Some countries don't allow dual citizenship, which could affect your options.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: 'must-keep', label: '🛂 Must keep - won\'t renounce current citizenship' },
      { value: 'strongly-prefer', label: '🏛️ Strongly prefer to keep' },
      { value: 'prefer', label: '📋 Prefer to keep but flexible' },
      { value: 'dont-care', label: '🤷‍♂️ Don\'t care either way' },
      { value: 'willing-renounce', label: '✅ Willing to renounce if necessary' }
    ],
  },
  
  // SECTION 5: FINAL DETAILS (Questions 31-36)
  {
    id: 31,
    section: 5,
    sectionTitle: 'Final Details',
    question: "Final section! What are your biggest concerns about relocating internationally? (Rank up to 3 in order of importance)",
    description: "Understanding your concerns helps us provide targeted advice and reassurance. Select your #1 concern first, then optionally #2 and #3.",
    type: 'ranking',
    mandatory: true,
    maxSelections: 3,
    options: [
      { value: 'legal-complexity', label: '📋 Legal/visa complexity' },
      { value: 'financial-risk', label: '💰 Financial risk and costs' },
      { value: 'language-barrier', label: '🗣️ Language barriers' },
      { value: 'cultural-adaptation', label: '🌍 Cultural adaptation' },
      { value: 'healthcare-access', label: '🏥 Healthcare access' },
      { value: 'safety-security', label: '🛡️ Safety and security' },
      { value: 'isolation', label: '😔 Social isolation/loneliness' },
      { value: 'quality-of-life', label: '📉 Reduced quality of life' },
      { value: 'reversibility', label: '🔄 Difficulty returning if it doesn\'t work out' }
    ],
  },
  {
    id: 32,
    section: 5,
    sectionTitle: 'Final Details',
    question: "What type of support would be most valuable to you?",
    description: "This helps us understand what additional services might interest you.",
    type: 'multi-select',
    mandatory: false,
    options: [
      { value: 'legal-guidance', label: '⚖️ Legal and visa guidance' },
      { value: 'tax-planning', label: '📊 Tax planning and optimization' },
      { value: 'property-search', label: '🏡 Property search and purchase' },
      { value: 'relocation-services', label: '📦 Full relocation services' },
      { value: 'local-connections', label: '🤝 Local contacts and networking' },
      { value: 'ongoing-support', label: '📞 Ongoing support after moving' },
      { value: 'community-access', label: '👥 Access to expat community' },
      { value: 'concierge-services', label: '🎯 Concierge and lifestyle services' }
    ],
  },
  {
    id: 33,
    section: 5,
    sectionTitle: 'Final Details',
    question: "How did you hear about Reloca.ai?",
    description: "This helps us understand how people discover our service.",
    type: 'single-select',
    mandatory: false,
    options: [
      { value: 'google-search', label: '🔍 Google search' },
      { value: 'x-twitter', label: '🐦 X / Twitter' },
      { value: 'instagram', label: '📸 Instagram' },
      { value: 'facebook', label: '👤 Facebook' },
      { value: 'tiktok', label: '🎵 TikTok' },
      { value: 'youtube', label: '📺 YouTube' },
      { value: 'telegram', label: '✈️ Telegram' },
      { value: 'other-social', label: '📱 Other social media' },
      { value: 'referral', label: '🤝 Friend or colleague referral' },
      { value: 'blog-article', label: '📰 Blog or article' },
      { value: 'podcast', label: '🎧 Podcast' },
      { value: 'reloca-ai', label: '🌍 Reloca.ai website' },
      { value: 'other', label: '🤔 Other source' }
    ],
  },
  {
    id: 34,
    section: 5,
    sectionTitle: 'Final Details',
    question: "On a scale of 1-10, how serious are you about actually relocating?",
    description: "This helps us calibrate our recommendations to your commitment level.",
    type: 'single-select',
    mandatory: true,
    options: [
      { value: '1-2', label: '1-2 🤔 Just curious, not serious' },
      { value: '3-4', label: '3-4 🧐 Somewhat interested, early research' },
      { value: '5-6', label: '5-6 📚 Seriously researching options' },
      { value: '7-8', label: '7-8 🎯 Very serious, actively planning' },
      { value: '9-10', label: '9-10 🚀 Extremely serious, ready to act' }
    ],
  },
  {
    id: 35,
    section: 5,
    sectionTitle: 'Final Details',
    question: "What's the most important outcome you want from your relocation? (Rank up to 3 in order of importance)",
    description: "This helps us prioritize recommendations and focus on what matters most to you. Select your #1 priority first, then optionally #2 and #3.",
    type: 'ranking',
    mandatory: true,
    maxSelections: 3,
    options: [
      { value: 'financial-benefits', label: '💰 Financial benefits (lower costs, tax savings)' },
      { value: 'quality-of-life', label: '🌟 Better quality of life' },
      { value: 'safety-security', label: '🛡️ Improved safety and security' },
      { value: 'freedom-autonomy', label: '🗽 More freedom and autonomy' },
      { value: 'opportunity', label: '🚀 Better opportunities for growth' },
      { value: 'adventure', label: '🌍 Adventure and new experiences' },
      { value: 'family-future', label: '👨‍👩‍👧‍👦 Better future for family' },
      { value: 'retirement-security', label: '🏖️ Secure retirement lifestyle' }
    ],
  },
  {
    id: 36,
    section: 5,
    sectionTitle: 'Final Details',
    question: "Any additional comments or specific questions you'd like addressed in your report?",
    description: "This is your chance to add any details that might help us provide better recommendations.",
    type: 'textarea',
    mandatory: false,
    placeholder: "Share any specific concerns, requirements, or questions you have about relocating..."
  }
];

// Section configuration
export const SECTIONS_36 = [
  { id: 1, title: 'Your Relocation Journey', description: 'Understanding your goals and situation' },
  { id: 2, title: 'Financial Considerations', description: 'Income, budget, and investment capacity' },
  { id: 3, title: 'Lifestyle & Preferences', description: 'Where and how you want to live' },
  { id: 4, title: 'Practical Matters', description: 'Visa, citizenship, and logistical concerns' },
  { id: 5, title: 'Final Details', description: 'Last questions and personalization' }
];

export const MANDATORY_QUESTIONS_36 = [1, 2, 3, 4, 5, 6, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 24, 25, 26, 27, 30, 31, 34, 35];
export const TOTAL_QUESTIONS_36 = questions36Enhanced.length;