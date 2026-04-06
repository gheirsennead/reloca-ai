// Language detection utilities for French localization

export const FRENCH_EMAIL_DOMAINS = [
  'fr',
  'be',  // Belgium (some French speakers)
  'ca',  // Canada (some French speakers)
  'ch',  // Switzerland (some French speakers)
  'mc',  // Monaco
  'lu',  // Luxembourg (some French speakers)
  'nc',  // New Caledonia
  'pf',  // French Polynesia
  'gp',  // Guadeloupe
  'mq',  // Martinique
  'gf',  // French Guiana
  're',  // Réunion
  'yt',  // Mayotte
];

export const FRENCH_COUNTRIES = [
  'france',
  'belgium',
  'switzerland',
  'canada',
  'monaco',
  'luxembourg',
];

/**
 * Detect user language from various sources
 */
export function detectLanguage(options: {
  email?: string;
  acceptLanguage?: string;
  country?: string;
  userAgent?: string;
}): 'fr' | 'en' {
  const { email, acceptLanguage, country, userAgent } = options;

  // 1. Check email domain (highest priority for French detection)
  if (email) {
    const domain = email.split('@')[1]?.split('.').pop()?.toLowerCase();
    if (domain && FRENCH_EMAIL_DOMAINS.includes(domain)) {
      return 'fr';
    }
  }

  // 2. Check Accept-Language header
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase());
    
    if (languages.some(lang => lang.startsWith('fr'))) {
      return 'fr';
    }
  }

  // 3. Check country if provided
  if (country) {
    const countryLower = country.toLowerCase();
    if (FRENCH_COUNTRIES.includes(countryLower)) {
      return 'fr';
    }
  }

  // 4. Check user agent for French indicators (lowest priority)
  if (userAgent) {
    const ua = userAgent.toLowerCase();
    if (ua.includes('fr-fr') || ua.includes('fr_fr')) {
      return 'fr';
    }
  }

  // Default to English
  return 'en';
}

/**
 * Get email subject prefix for language
 */
export function getEmailFromName(language: 'fr' | 'en'): string {
  return language === 'fr' ? 'Reloca.ai <bonjour@reloca.ai>' : 'Reloca.ai <hello@reloca.ai>';
}

/**
 * Update user language in database
 */
export async function updateUserLanguage(
  supabase: any, 
  userId: string, 
  language: 'fr' | 'en'
): Promise<void> {
  try {
    await supabase
      .from('users')
      .update({ language })
      .eq('id', userId);
  } catch (error) {
    console.error('Failed to update user language:', error);
  }
}