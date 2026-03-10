// Feature flags — easy toggles for time-sensitive content
// Set CRECI_LICENSED=true after Gregory's CRECI ceremony (March 2026)

export const CRECI_LICENSED = process.env.NEXT_PUBLIC_CRECI_LICENSED === 'true';

// Copy variants based on CRECI status
export const CRECI_TITLE = CRECI_LICENSED
  ? 'CRECI-licensed real estate professional'
  : 'real estate professional';

export const CRECI_TITLE_FULL = CRECI_LICENSED
  ? 'a CRECI-licensed real estate agent who relocated his own family across Europe, the Americas, and beyond'
  : 'a real estate professional who relocated his own family across Europe, the Americas, and beyond';

export const CRECI_PROMPT_LABEL = CRECI_LICENSED
  ? 'CRECI-licensed real estate agent'
  : 'real estate professional';
