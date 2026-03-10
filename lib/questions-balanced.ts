import { Question } from '@/types/questionnaire';

// BALANCED VERSION: 15 essential questions for quality reports
// Keeps core data needed for personalized recommendations while reducing friction

export const questionsBalanced: Question[] = [
  // SECTION 1: ENGAGING START (3 questions)
  {
    id: 1,
    section: 1,
    sectionTitle: 'Your Dream',
    question: "What's driving your dream of relocating? (Select all that apply)",
    type: 'multi-select',
    mandatory: false,
    options: [
      { value: 'freedom', label: '🌟 More freedom' },
      { value: 'weather', label: '☀️ Better weather' },
      { value: 'nature', label: '🌿 Access to nature' },
      { value: 'adventure', label: '🏞️ Adventure & new experiences' },
      { value: 'lower-cost', label: '💰 Lower cost of living' },
      { value: 'wellness', label: '🧘 Health & wellness' },
      { value: 'tax', label: '📋 Tax benefits' },
      { value: 'kids-future', label: '👨‍👩‍👧‍👦 Kids\' future' },
      { value: 'retirement', label: '🏖️ Retirement' },
      { value: 'business', label: '🚀 Business opportunity' },
    ],
  },
  {
    id: 2,
    section: 1,
    sectionTitle: 'Your Dream',
    question: "Your ideal lifestyle abroad would be:",
    type: 'select',
    mandatory: true,
    options: [
      { value: 'beach', label: '🏖️ Beachside living' },
      { value: 'mountain', label: '⛰️ Mountain retreat' },
      { value: 'city', label: '🏙️ Vibrant city life' },
      { value: 'countryside', label: '🌾 Peaceful countryside' },
      { value: 'mix', label: '🌍 Mix of environments' },
    ],
  },
  {
    id: 3,
    section: 1,
    sectionTitle: 'Your Dream',
    question: 'Climate preference?',
    type: 'select',
    mandatory: true,
    options: [
      { value: 'tropical', label: '🌴 Tropical (warm year-round)' },
      { value: 'subtropical', label: '🌞 Subtropical (mild winters)' },
      { value: 'four-seasons', label: '🍂 Four seasons' },
      { value: 'mountain-cool', label: '🏔️ Mountain cool' },
      { value: 'flexible', label: '🌈 Flexible' },
    ],
  },

  // SECTION 2: ESSENTIAL INFO (5 questions)
  {
    id: 4,
    section: 2,
    sectionTitle: 'About You',
    question: "What's your nationality?",
    type: 'dropdown',
    mandatory: true,
    options: [
      { value: 'US', label: 'United States' },
      { value: 'CA', label: 'Canada' },
      { value: 'UK', label: 'United Kingdom' },
      { value: 'AU', label: 'Australia' },
      { value: 'DE', label: 'Germany' },
      { value: 'FR', label: 'France' },
      { value: 'NL', label: 'Netherlands' },
      { value: 'ES', label: 'Spain' },
      { value: 'IT', label: 'Italy' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 5,
    section: 2,
    sectionTitle: 'About You',
    question: 'Current country of residence?',
    type: 'dropdown',
    mandatory: true,
    options: [
      { value: 'US', label: 'United States' },
      { value: 'CA', label: 'Canada' },
      { value: 'UK', label: 'United Kingdom' },
      { value: 'AU', label: 'Australia' },
      { value: 'DE', label: 'Germany' },
      { value: 'FR', label: 'France' },
      { value: 'NL', label: 'Netherlands' },
      { value: 'ES', label: 'Spain' },
      { value: 'IT', label: 'Italy' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 6,
    section: 2,
    sectionTitle: 'About You',
    question: 'Family situation?',
    type: 'select',
    mandatory: true,
    options: [
      { value: 'single', label: '🧑 Single' },
      { value: 'couple', label: '👫 Couple' },
      { value: 'family', label: '👨‍👩‍👧‍👦 Family with kids' },
    ],
  },
  {
    id: 7,
    section: 2,
    sectionTitle: 'About You',
    question: 'If family: ages of children?',
    type: 'text',
    mandatory: false,
    placeholder: 'e.g., 3, 7, 12',
    conditionalOn: { questionId: 6, value: 'family' },
  },
  {
    id: 8,
    section: 2,
    sectionTitle: 'About You',
    question: 'Languages you speak fluently?',
    type: 'multi-select',
    mandatory: false,
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'pt', label: 'Portuguese' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
      { value: 'it', label: 'Italian' },
      { value: 'other', label: 'Other' },
    ],
  },

  // VALUE HOOK POINT - Show top 3 country matches after question 8
  
  // SECTION 3: WORK & FINANCIAL (4 questions - essential for report quality)
  {
    id: 9,
    section: 3,
    sectionTitle: 'Work & Financial',
    question: 'Work situation?',
    type: 'select',
    mandatory: true,
    options: [
      { value: 'remote', label: '💻 Remote Worker' },
      { value: 'entrepreneur', label: '🚀 Entrepreneur / Business Owner' },
      { value: 'employee', label: '🏢 Employee (can work locally)' },
      { value: 'retired', label: '🏖️ Retired' },
      { value: 'student', label: '🎓 Student' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 10,
    section: 3,
    sectionTitle: 'Work & Financial',
    question: 'Monthly income range? (Helps us recommend suitable countries)',
    type: 'select',
    mandatory: true,
    options: [
      { value: '<2k', label: 'Less than $2,000' },
      { value: '2-5k', label: '$2,000 – $5,000' },
      { value: '5-10k', label: '$5,000 – $10,000' },
      { value: '10-20k', label: '$10,000 – $20,000' },
      { value: '20k+', label: '$20,000+' },
      { value: 'prefer-not-say', label: 'Prefer not to say' },
    ],
  },
  {
    id: 11,
    section: 3,
    sectionTitle: 'Work & Financial',
    question: 'Property/investment budget?',
    type: 'select',
    mandatory: false,
    options: [
      { value: '<100k', label: 'Less than $100K' },
      { value: '100-300k', label: '$100K – $300K' },
      { value: '300-500k', label: '$300K – $500K' },
      { value: '500k-1m', label: '$500K – $1M' },
      { value: '1m+', label: '$1M+' },
      { value: 'no-property', label: 'Not planning to buy property' },
    ],
  },
  {
    id: 12,
    section: 3,
    sectionTitle: 'Work & Financial',
    question: 'How important is tax optimization?',
    type: 'select',
    mandatory: true,
    options: [
      { value: 'not-important', label: 'Not important' },
      { value: 'nice-to-have', label: 'Nice to have' },
      { value: 'very-important', label: 'Very important' },
      { value: 'main-reason', label: "It's a main reason for moving" },
    ],
  },

  // SECTION 4: DESTINATION & TIMELINE (3 questions)
  {
    id: 13,
    section: 4,
    sectionTitle: 'Your Move',
    question: 'Have you already chosen a target country?',
    type: 'select',
    mandatory: true,
    options: [
      { value: 'exploring', label: '🔍 Still exploring options' },
      { value: 'argentina', label: '🇦🇷 Yes — Argentina' },
      { value: 'brazil', label: '🇧🇷 Yes — Brazil' },
      { value: 'uruguay', label: '🇺🇾 Yes — Uruguay' },
      { value: 'paraguay', label: '🇵🇾 Yes — Paraguay' },
      { value: 'mexico', label: '🇲🇽 Yes — Mexico' },
      { value: 'panama', label: '🇵🇦 Yes — Panama' },
      { value: 'chile', label: '🇨🇱 Yes — Chile' },
      { value: 'other-country', label: '🌎 Yes — Other country' },
    ],
  },
  {
    id: 14,
    section: 4,
    sectionTitle: 'Your Move',
    question: 'When do you want to move?',
    type: 'select',
    mandatory: true,
    options: [
      { value: '3-months', label: '⚡ Within 3 months' },
      { value: '6-months', label: '📅 Within 6 months' },
      { value: '1-year', label: '⏰ Within 1 year' },
      { value: '2-years', label: '🎯 2+ years' },
      { value: 'exploring', label: '🔍 Just exploring' },
    ],
  },
  {
    id: 15,
    section: 4,
    sectionTitle: 'Your Move',
    question: 'How did you hear about Reloca.ai?',
    type: 'select',
    mandatory: true,
    options: [
      { value: 'google', label: 'Google' },
      { value: 'youtube', label: 'YouTube' },
      { value: 'twitter', label: 'X / Twitter' },
      { value: 'facebook', label: 'Facebook' },
      { value: 'friend', label: 'Friend recommendation' },
      { value: 'reddit', label: 'Reddit' },
      { value: 'reloca-ai', label: 'Reloca.ai' },
      { value: 'other', label: 'Other' },
    ],
  },
];

export const MANDATORY_QUESTIONS_BALANCED = [2, 3, 4, 5, 6, 9, 10, 12, 13, 14, 15];
export const TOTAL_QUESTIONS_BALANCED = 15;

export const SECTIONS_BALANCED = [
  { id: 1, title: 'Your Dream', questions: [1, 2, 3] },
  { id: 2, title: 'About You', questions: [4, 5, 6, 7, 8] },
  { id: 3, title: 'Work & Financial', questions: [9, 10, 11, 12] },
  { id: 4, title: 'Your Move', questions: [13, 14, 15] },
];

// VALUE HOOKS
export const VALUE_HOOKS_BALANCED = {
  after_question_8: {
    type: 'country_preview',
    title: '🎉 Great! Based on your preferences...',
    content: 'Your top 3 country matches are loading! Complete 7 more questions to see your personalized report with exact costs, visa timelines, and property recommendations.',
  },
  after_question_12: {
    type: 'lifestyle_preview', 
    title: '✨ We\'re building your perfect lifestyle plan...',
    content: 'Almost done! Just 3 more questions to unlock your complete relocation roadmap.',
  },
};