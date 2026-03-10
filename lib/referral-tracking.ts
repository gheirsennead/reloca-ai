// Simple referral tracking for Reloca.ai
// Handles ?ref= parameters and sets persistent cookies

export interface ReferralData {
  referralCode?: string;
  timestamp: number;
  source: 'url' | 'cookie';
}

const REFERRAL_COOKIE_NAME = 'reloca_ref';
const REFERRAL_EXPIRY_DAYS = 60;

export function getReferralCode(request: Request): string | null {
  const url = new URL(request.url);
  const refParam = url.searchParams.get('ref');
  
  if (refParam) {
    return refParam;
  }
  
  // Check cookie (browser-side only)
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === REFERRAL_COOKIE_NAME) {
        try {
          const data = JSON.parse(decodeURIComponent(value));
          // Check if not expired
          if (Date.now() - data.timestamp < REFERRAL_EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
            return data.code;
          }
        } catch {
          // Invalid cookie data
        }
      }
    }
  }
  
  return null;
}

export function setReferralCookie(referralCode: string): void {
  if (typeof document !== 'undefined') {
    const data = {
      code: referralCode,
      timestamp: Date.now(),
    };
    
    const expires = new Date();
    expires.setDate(expires.getDate() + REFERRAL_EXPIRY_DAYS);
    
    document.cookie = `${REFERRAL_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(data))}; expires=${expires.toUTCString()}; path=/; secure; samesite=strict`;
  }
}

export function trackReferralClick(referralCode: string): void {
  if (typeof window !== 'undefined') {
    // Store ref code in localStorage for later attribution
    localStorage.setItem('reloca_ref', referralCode);
    
    // Fire API call to track the click
    fetch('/api/referral-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: referralCode, url: window.location.href }),
    }).catch(() => {}); // fail silently
  }
}

// Client-side referral initialization
export function initReferralTracking(): void {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    
    if (refCode) {
      setReferralCookie(refCode);
      trackReferralClick(refCode);
    }
  }
}

// Generate a unique referral code for a user/report
export function generateReferralCode(reportId: string, userId?: string): string {
  // Simple referral code based on report ID
  // In production, you might want something more sophisticated
  const base = reportId.slice(-8); // Last 8 chars of report ID
  return `r${base}`;
}