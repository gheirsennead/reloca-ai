// Analytics tracking system for reloca.ai
// Tracks page views, country interests, conversions, and geographic data

interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp?: number;
  sessionId?: string;
  userId?: string;
}

class Analytics {
  private sessionId: string;
  private visitorId: string;
  private userId?: string;
  private apiEndpoint = '/api/analytics';

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.visitorId = this.getOrCreateVisitorId();
    this.userId = this.getUserId();
  }

  private getOrCreateVisitorId(): string {
    if (typeof window === 'undefined') return 'ssr_visitor';
    
    let visitorId = localStorage.getItem('reloca_visitor_id');
    if (!visitorId) {
      visitorId = 'vis_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('reloca_visitor_id', visitorId);
    }
    return visitorId;
  }

  private getOrCreateSessionId(): string {
    if (typeof window === 'undefined') return 'ssr_session';
    
    let sessionId = sessionStorage.getItem('reloca_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('reloca_session_id', sessionId);
    }
    return sessionId;
  }

  private getUserId(): string | undefined {
    if (typeof window === 'undefined') return undefined;
    return localStorage.getItem('reloca_user_id') || undefined;
  }

  private async track(event: AnalyticsEvent) {
    if (typeof window === 'undefined') return; // Skip during SSR
    
    try {
      // Get stored geographical data
      const geoData = sessionStorage.getItem('reloca_geo_data');
      const parsedGeo = geoData ? JSON.parse(geoData) : null;
      
      const payload = {
        ...event,
        timestamp: Date.now(),
        sessionId: this.sessionId,
        visitorId: this.visitorId,
        userId: this.userId,
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        geo: parsedGeo, // Include geo data in all events
        page_info: {
          title: document.title,
          path: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash
        },
        device_info: {
          language: navigator.language,
          platform: navigator.platform,
          cookie_enabled: navigator.cookieEnabled,
          online: navigator.onLine
        }
      };

      // Send to our analytics endpoint
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  // Page view tracking
  trackPageView(page?: string) {
    // Trigger geolocation if we don't have it yet
    if (typeof window !== 'undefined' && !sessionStorage.getItem('reloca_geo_data')) {
      this.trackGeolocation();
    }
    
    this.track({
      event: 'page_view',
      properties: {
        page: page || window.location.pathname,
        title: document.title
      }
    });
  }

  // Country interest tracking  
  trackCountryInterest(country: string, source: 'questionnaire' | 'browse' | 'report_view' | 'questionnaire_optimized') {
    this.track({
      event: 'country_interest',
      properties: { country, source }
    });
  }

  // (Conversion tracking moved to enhanced methods below)

  // Feature usage
  trackFeatureUsage(feature: string, action: string, metadata?: Record<string, any>) {
    this.track({
      event: 'feature_usage',
      properties: { feature, action, ...metadata }
    });
  }

  // Enhanced questionnaire tracking
  trackQuestionnaireStart(variant?: string) {
    this.track({
      event: 'questionnaire_start',
      properties: {
        variant: variant || 'original',
        timestamp: Date.now(),
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
        viewport_width: typeof window !== 'undefined' ? window.innerWidth : 0,
        viewport_height: typeof window !== 'undefined' ? window.innerHeight : 0,
      }
    });
  }

  trackQuestionView(questionId: number, questionText: string, section: number, timeOnPrevious?: number) {
    this.track({
      event: 'question_view',
      properties: {
        question_id: questionId,
        question_text: questionText,
        section,
        time_on_previous_question: timeOnPrevious,
        timestamp: Date.now(),
      }
    });
  }

  trackQuestionAnswer(questionId: number, questionText: string, answer: any, timeSpent: number, section: number) {
    this.track({
      event: 'question_answer',
      properties: {
        question_id: questionId,
        question_text: questionText,
        answer: this.sanitizeAnswer(answer),
        time_spent_seconds: Math.round(timeSpent / 1000),
        section,
        is_mandatory: this.isMandatoryQuestion(questionId),
        timestamp: Date.now(),
      }
    });
  }

  trackQuestionSkip(questionId: number, questionText: string, section: number, timeSpent: number) {
    this.track({
      event: 'question_skip',
      properties: {
        question_id: questionId,
        question_text: questionText,
        section,
        time_spent_seconds: Math.round(timeSpent / 1000),
        timestamp: Date.now(),
      }
    });
  }

  trackQuestionnaireAbandon(questionId: number, section: number, progress: number, timeSpent: number) {
    this.track({
      event: 'questionnaire_abandon',
      properties: {
        last_question_id: questionId,
        last_section: section,
        progress_percentage: progress,
        total_time_spent_seconds: Math.round(timeSpent / 1000),
        timestamp: Date.now(),
      }
    });
  }

  trackValueHookView(hookType: string, questionId: number) {
    this.track({
      event: 'value_hook_view',
      properties: {
        hook_type: hookType,
        triggered_after_question: questionId,
        timestamp: Date.now(),
      }
    });
  }

  trackSectionComplete(section: number, questionsAnswered: number, questionsSkipped: number, timeSpent: number) {
    this.track({
      event: 'section_complete',
      properties: {
        section,
        questions_answered: questionsAnswered,
        questions_skipped: questionsSkipped,
        time_spent_seconds: Math.round(timeSpent / 1000),
        timestamp: Date.now(),
      }
    });
  }

  private sanitizeAnswer(answer: any): any {
    // Don't log sensitive data, just the type/structure
    if (typeof answer === 'string') {
      if (answer.includes('@')) return '[email]';
      if (answer.length > 50) return '[long_text]';
      return answer;
    }
    if (Array.isArray(answer)) return `[array_${answer.length}_items]`;
    if (typeof answer === 'object') return `[object_${Object.keys(answer).length}_keys]`;
    return answer;
  }

  private isMandatoryQuestion(questionId: number): boolean {
    // This will be updated based on the questionnaire variant
    return [2, 3, 4, 5, 6, 7, 9].includes(questionId); // Optimized mandatory questions
  }

  // Search tracking
  trackSearch(query: string, results_count?: number) {
    this.track({
      event: 'search',
      properties: { query, results_count }
    });
  }

  // Form interactions
  trackFormInteraction(formName: string, field: string, action: 'focus' | 'blur' | 'submit') {
    this.track({
      event: 'form_interaction',
      properties: { form: formName, field, action }
    });
  }

  // Geographic data (async) - Enhanced
  async trackGeolocation() {
    try {
      console.log('🌍 Fetching geolocation data...');
      const response = await fetch('https://ipapi.co/json/');
      const geo = await response.json();
      console.log('🌍 Geo data received:', geo);
      
      // Store geo data in session for other events
      if (typeof window !== 'undefined') {
        const geoData = {
          country: geo.country_name,
          country_code: geo.country_code,
          region: geo.region,
          city: geo.city,
          timezone: geo.timezone,
          latitude: geo.latitude,
          longitude: geo.longitude
        };
        
        sessionStorage.setItem('reloca_geo_data', JSON.stringify(geoData));
        console.log('🌍 Stored geo data:', geoData);
      }
      
      this.track({
        event: 'user_location',
        properties: {
          country: geo.country_name,
          country_code: geo.country_code,
          region: geo.region,
          city: geo.city,
          timezone: geo.timezone,
          latitude: geo.latitude,
          longitude: geo.longitude,
          org: geo.org, // ISP/Organization
          asn: geo.asn  // Network info
        }
      });
    } catch (error) {
      console.error('Geolocation tracking error:', error);
      
      // Fallback: try to detect country from timezone or language
      try {
        const fallbackCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log('🌍 Using fallback geo detection:', fallbackCountry);
        
        this.track({
          event: 'user_location',
          properties: {
            country: 'Unknown',
            timezone: fallbackCountry,
            fallback: true
          }
        });
      } catch (fallbackError) {
        console.error('Fallback geo tracking failed:', fallbackError);
      }
    }
  }

  // Set user ID (when they sign up/login)
  setUserId(userId: string) {
    this.userId = userId;
    if (typeof window !== 'undefined') {
      localStorage.setItem('reloca_user_id', userId);
    }
  }

  // ENHANCED CONVERSION TRACKING METHODS
  
  // Quiz/questionnaire progression tracking
  trackQuizStart() {
    this.track({
      event: 'feature_usage',
      properties: {
        feature: 'questionnaire',
        action: 'start'
      }
    });
  }

  trackQuizProgress(step: number, totalSteps: number, questionData?: any) {
    const progressPercent = Math.round((step / totalSteps) * 100);
    
    this.track({
      event: 'feature_usage',
      properties: {
        feature: 'questionnaire',
        action: 'progress',
        step,
        total_steps: totalSteps,
        progress_percent: progressPercent,
        question_data: questionData
      }
    });
    
    // Track milestone events for funnel analysis
    if (progressPercent >= 25 && progressPercent < 50) {
      this.track({
        event: 'feature_usage',
        properties: {
          feature: 'questionnaire',
          action: 'progress_milestone',
          progress: 25
        }
      });
    } else if (progressPercent >= 50 && progressPercent < 75) {
      this.track({
        event: 'feature_usage',
        properties: {
          feature: 'questionnaire',
          action: 'progress_milestone',
          progress: 50
        }
      });
    } else if (progressPercent >= 75 && progressPercent < 100) {
      this.track({
        event: 'feature_usage',
        properties: {
          feature: 'questionnaire',
          action: 'progress_milestone',
          progress: 75
        }
      });
    }
  }

  trackQuizComplete(results?: any, timeSpent?: number) {
    this.track({
      event: 'feature_usage',
      properties: {
        feature: 'questionnaire',
        action: 'complete',
        results,
        time_spent_seconds: timeSpent
      }
    });
  }

  trackQuizAbandon(step: number, totalSteps: number, timeSpent?: number) {
    this.track({
      event: 'feature_usage',
      properties: {
        feature: 'questionnaire',
        action: 'abandon',
        step,
        total_steps: totalSteps,
        progress_percent: Math.round((step / totalSteps) * 100),
        time_spent_seconds: timeSpent
      }
    });
  }

  // Conversion tracking
  trackConversion(type: string, value?: number, details?: any) {
    this.track({
      event: 'conversion',
      properties: {
        conversion_type: type,
        value,
        ...details
      }
    });
  }

  // Purchase/payment tracking
  trackPurchaseIntent(plan: string, price: number) {
    this.track({
      event: 'purchase_intent',
      properties: {
        plan,
        price,
        currency: 'USD'
      }
    });
  }

  trackPurchaseStart(plan: string, price: number, paymentMethod?: string) {
    this.track({
      event: 'purchase_start',
      properties: {
        plan,
        price,
        currency: 'USD',
        payment_method: paymentMethod
      }
    });
  }

  trackPurchaseComplete(plan: string, price: number, transactionId: string) {
    this.track({
      event: 'conversion',
      properties: {
        conversion_type: 'purchase',
        plan,
        price,
        currency: 'USD',
        transaction_id: transactionId
      }
    });
  }

  trackPurchaseError(error: string, plan?: string, price?: number) {
    this.track({
      event: 'purchase_error',
      properties: {
        error,
        plan,
        price
      }
    });
  }

  // User engagement tracking
  trackTimeOnPage(seconds: number, page?: string) {
    this.track({
      event: 'time_on_page',
      properties: {
        seconds,
        page: page || (typeof window !== 'undefined' ? window.location.pathname : ''),
        engaged: seconds > 30 // Consider >30s as engaged
      }
    });
  }

  trackScrollDepth(percent: number, page?: string) {
    this.track({
      event: 'scroll_depth',
      properties: {
        percent,
        page: page || (typeof window !== 'undefined' ? window.location.pathname : '')
      }
    });
  }

  // Lead generation tracking
  trackLeadCapture(method: string, data: any) {
    this.track({
      event: 'lead_capture',
      properties: {
        method,
        ...data
      }
    });
  }

  // A/B test tracking
  trackExperiment(experimentName: string, variant: string) {
    this.track({
      event: 'experiment_view',
      properties: {
        experiment: experimentName,
        variant
      }
    });
  }

  // CTA click tracking with enhanced context
  trackCTAClick(ctaText: string, location: string, destination?: string, extra?: any) {
    this.track({
      event: 'cta_click',
      properties: {
        cta_text: ctaText,
        location,
        destination,
        ...extra
      }
    });
  }
}

// Create global instance
declare global {
  interface Window {
    analytics: Analytics;
  }
}

export const analytics = new Analytics();

// Auto-initialize on client side
if (typeof window !== 'undefined') {
  window.analytics = analytics;
  
  // Track initial page view
  analytics.trackPageView();
  
  // Track geolocation
  analytics.trackGeolocation();
  
  // Track page visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      analytics.trackFeatureUsage('page', 'focus');
    } else {
      analytics.trackFeatureUsage('page', 'blur');
    }
  });
}

export default analytics;