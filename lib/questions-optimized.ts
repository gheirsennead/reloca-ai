import { Question } from '@/types/questionnaire';

// OPTIMIZED QUESTION ORDER - Move invasive questions later, add value hooks
export const questionsOptimized: Question[] = [
  // START WITH EASY, FUN QUESTIONS (Build engagement)
  {
    id: 1,
    section: 1,
    sectionTitle: 'Dream Discovery',
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
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 2,
    section: 1,
    sectionTitle: 'Dream Discovery',
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
  
  // BASIC INFO (Non-invasive)
  {
    id: 3,
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
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 4,
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

  // EARLY VALUE DELIVERY - Show personalized insight after Q5
  {
    id: 5,
    section: 3,
    sectionTitle: 'Destination Preferences',
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

  // VALUE HOOK: Show top 3 country matches after question 5
  
  {
    id: 6,
    section: 3,
    sectionTitle: 'Destination Preferences',
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

  // PUSH INVASIVE QUESTIONS TO LATER (after user is invested)
  {
    id: 7,
    section: 4,
    sectionTitle: 'Work & Lifestyle',
    question: 'Work situation?',
    type: 'select',
    mandatory: true,
    options: [
      { value: 'remote', label: '💻 Remote Worker' },
      { value: 'entrepreneur', label: '🚀 Entrepreneur' },
      { value: 'employee', label: '🏢 Employee' },
      { value: 'retired', label: '🏖️ Retired' },
      { value: 'student', label: '🎓 Student' },
    ],
  },
  {
    id: 8,
    section: 4,
    sectionTitle: 'Work & Lifestyle',
    question: 'Monthly income range? (This helps us recommend the right countries)',
    type: 'select',
    mandatory: false, // Make non-mandatory to reduce friction
    options: [
      { value: '<2k', label: 'Less than $2,000' },
      { value: '2-5k', label: '$2,000 – $5,000' },
      { value: '5-10k', label: '$5,000 – $10,000' },
      { value: '10-20k', label: '$10,000 – $20,000' },
      { value: '20k+', label: '$20,000+' },
      { value: 'prefer-not-say', label: 'Prefer not to say' },
    ],
  },

  // FINAL QUESTIONS (Keep short)
  {
    id: 9,
    section: 5,
    sectionTitle: 'Final Details',
    question: 'How did you hear about Reloca.ai?',
    type: 'select',
    mandatory: true,
    options: [
      { value: 'google', label: 'Google' },
      { value: 'youtube', label: 'YouTube' },
      { value: 'twitter', label: 'X / Twitter' },
      { value: 'friend', label: 'Friend recommendation' },
      { value: 'other', label: 'Other' },
    ],
  },
];

// A/B TEST VARIANTS
export const questionsVariantA = questionsOptimized; // Value-first approach

export const questionsVariantB: Question[] = [
  // VARIANT B: Gamified approach
  {
    id: 1,
    section: 1,
    sectionTitle: 'Relocation Explorer Quiz',
    question: "🎯 Welcome to your relocation journey! Which sounds most appealing?",
    type: 'select',
    mandatory: true,
    options: [
      { value: 'beach-paradise', label: '🏝️ Waking up to ocean views every day' },
      { value: 'mountain-escape', label: '⛰️ Coffee on a mountain terrace' },
      { value: 'city-energy', label: '🌃 Vibrant city with amazing food scene' },
      { value: 'digital-nomad', label: '💻 Perfect remote work setup' },
    ],
  },
  // Continue with similar gamified questions...
];

// Shortened version: Only 9 essential questions vs 36
export const MANDATORY_QUESTIONS_OPTIMIZED = [2, 3, 4, 5, 6, 7, 9];
export const TOTAL_QUESTIONS_OPTIMIZED = 9;

export const SECTIONS_OPTIMIZED = [
  { id: 1, title: 'Dream Discovery', questions: [1, 2] },
  { id: 2, title: 'About You', questions: [3, 4] },
  { id: 3, title: 'Destination', questions: [5, 6] },
  { id: 4, title: 'Work & Lifestyle', questions: [7, 8] },
  { id: 5, title: 'Final Details', questions: [9] },
];

// VALUE HOOKS - Show after specific questions
export const VALUE_HOOKS = {
  after_question_5: {
    type: 'country_preview',
    title: '🎉 Great! Based on your preferences...',
    content: 'Your top 3 country matches are loading! Complete 4 more quick questions to see your personalized report.',
  },
  after_question_7: {
    type: 'lifestyle_preview', 
    title: '✨ We\'re building your perfect lifestyle...',
    content: 'Almost done! Just 2 more questions to unlock your complete relocation roadmap.',
  },
};