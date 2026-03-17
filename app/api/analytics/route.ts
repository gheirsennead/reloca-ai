import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

function countryCodeToName(code: string): string {
  const map: Record<string, string> = {
    US: 'United States', GB: 'United Kingdom', FR: 'France', DE: 'Germany', SE: 'Sweden', AD: 'Andorra',
    MT: 'Malta', CY: 'Cyprus', EE: 'Estonia',
    BR: 'Brazil', AR: 'Argentina', UY: 'Uruguay', PY: 'Paraguay', MX: 'Mexico',
    PA: 'Panama', CL: 'Chile', SV: 'El Salvador', VE: 'Venezuela', CO: 'Colombia',
    PE: 'Peru', CR: 'Costa Rica', EC: 'Ecuador', CA: 'Canada', AU: 'Australia',
    ES: 'Spain', IT: 'Italy', PT: 'Portugal', NL: 'Netherlands', BE: 'Belgium',
    CH: 'Switzerland', AT: 'Austria', PL: 'Poland', IE: 'Ireland', NO: 'Norway',
    DK: 'Denmark', FI: 'Finland', NZ: 'New Zealand', JP: 'Japan', KR: 'South Korea',
    IN: 'India', CN: 'China', RU: 'Russia', ZA: 'South Africa', IL: 'Israel',
    AE: 'UAE', SA: 'Saudi Arabia', SG: 'Singapore', HK: 'Hong Kong', TW: 'Taiwan',
    TH: 'Thailand', PH: 'Philippines', MY: 'Malaysia', ID: 'Indonesia', VN: 'Vietnam',
    TR: 'Turkey', GR: 'Greece', CZ: 'Czech Republic', RO: 'Romania', HU: 'Hungary',
    UZ: 'Uzbekistan', UA: 'Ukraine', NG: 'Nigeria', EG: 'Egypt', KE: 'Kenya',
  };
  return map[code] || code;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Get country from Vercel's geo headers (free, always available on Vercel)
    const vercelCountry = request.headers.get('x-vercel-ip-country');
    const vercelRegion = request.headers.get('x-vercel-ip-country-region');
    const vercelCity = request.headers.get('x-vercel-ip-city');
    
    // Merge server-side geo, visitor ID, and UTM data with client-side data
    const properties = { ...data.properties };
    if (data.visitorId) {
      properties.visitor_id = data.visitorId;
    }
    // Persist UTM attribution data into event properties
    if (data.utm && data.utm.source) {
      properties.utm = data.utm;
    }
    if (vercelCountry && (!properties.geo || properties.geo.country === 'Unknown')) {
      properties.geo = {
        ...properties.geo,
        country_code: vercelCountry,
        country: countryCodeToName(vercelCountry),
        region: vercelRegion || properties.geo?.region,
        city: vercelCity ? decodeURIComponent(vercelCity) : properties.geo?.city,
        source: 'vercel'
      };
    }
    
    // Insert analytics event into Supabase
    const { error } = await supabaseAdmin
      .from('analytics_events')
      .insert({
        event_type: data.event,
        properties,
        session_id: data.sessionId,
        user_id: data.userId,
        url: data.url,
        referrer: data.referrer,
        user_agent: data.userAgent,
        viewport_width: data.viewport?.width,
        viewport_height: data.viewport?.height,
        timestamp: new Date(data.timestamp).toISOString()
      });

    if (error) {
      console.error('Analytics insert error (table may not exist yet):', error);
      // Don't fail the request if table doesn't exist yet
      console.log('Analytics data:', data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

// GET endpoint for analytics dashboard/stats
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '7');
    const event_type = searchParams.get('event_type');

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    let query = supabaseAdmin
      .from('analytics_events')
      .select('*')
      .gte('timestamp', startDate.toISOString())
      .order('timestamp', { ascending: false });

    if (event_type) {
      query = query.eq('event_type', event_type);
    }

    // FIXED: Use pagination to get all events beyond 1000 limit - v5
    let allData: any[] = [];
    let hasMore = true;
    let offset = 0;
    const batchSize = 1000;
    
    while (hasMore) {
      const { data: batchData, error: batchError } = await query
        .range(offset, offset + batchSize - 1);
      
      if (batchError) {
        console.error('Batch query error:', batchError);
        break;
      }
      
      if (batchData && batchData.length > 0) {
        allData = allData.concat(batchData);
        hasMore = batchData.length === batchSize; // Continue if we got a full batch
        offset += batchSize;
      } else {
        hasMore = false;
      }
    }
    
    const data = allData;
    const error = null;
    
    // Debug logging to verify the fix is deployed
    console.log(`Analytics API: Pagination fetched ${data?.length || 0} events in ${Math.ceil(offset / batchSize)} batches`);

    if (error) {
      console.error('Analytics GET error (table may not exist yet):', error);
      // Return empty stats if table doesn't exist
      return NextResponse.json({
        total_events: 0,
        unique_sessions: 0,
        page_views: 0,
        country_interests: 0,
        conversions: 0,
        top_countries: [],
        top_pages: [],
        events_by_day: []
      });
    }

    // Process data for dashboard with enhanced tracking
    const stats = {
      total_events: data?.length || 0,
      unique_sessions: [...new Set(data?.map(d => d.session_id))].length,
      active_sessions: getActiveSessions(data || []),
      live_visitors: getLiveVisitors(data || []),
      unique_visitors: getUniqueVisitors(data || []),
      page_views: data?.filter(d => d.event_type === 'page_view').length || 0,
      country_interests: data?.filter(d => d.event_type === 'country_interest').length || 0,
      conversions: data?.filter(d => d.event_type === 'conversion').length || 0,
      conversion_rate: getConversionRate(data || []),
      top_countries: getTopCountries(data || []),
      visitor_countries: getVisitorCountries(data || []),
      top_pages: getTopPages(data || []),
      events_by_day: getEventsByDay(data || [], days),
      traffic_sources: getTrafficSources(data || []),
      device_breakdown: getDeviceBreakdown(data || []),
      popular_ctas: getPopularCTAs(data || []),
      questionnaire_funnel: getQuestionnaireFunnel(data || []),
      conversion_funnel: getConversionFunnel(data || []),
      bounce_rate: getBounceRate(data || []),
      seo_performance: getSeoPerformance(data || []),
      // NEW: Revenue metrics
      revenue: getRevenueMetrics(data || []),
      // NEW: Marketing ROI by UTM source
      marketing_roi: getMarketingROI(data || []),
      // NEW: Enhanced funnel with summary viewed + payment initiated
      enhanced_funnel: getEnhancedFunnel(data || []),
      // Debug info to verify API deployment
      _api_version: 'v6_analytics_audit',
      _generated_at: new Date().toISOString(),
      _query_method: 'pagination_batches',
      _actual_returned: data?.length || 0
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Analytics GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}

function getTopCountries(events: any[]) {
  const countries: Record<string, number> = {};
  events
    .filter(e => e.event_type === 'country_interest')
    .forEach(e => {
      const country = e.properties?.country;
      if (country) countries[country] = (countries[country] || 0) + 1;
    });
  
  return Object.entries(countries)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([country, count]) => ({ country, count }));
}

function getTopPages(events: any[]) {
  const pages: Record<string, number> = {};
  events
    .filter(e => e.event_type === 'page_view')
    .forEach(e => {
      const page = e.url ? new URL(e.url).pathname : 'unknown';
      pages[page] = (pages[page] || 0) + 1;
    });
  
  return Object.entries(pages)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([page, count]) => ({ page, count }));
}

function getEventsByDay(events: any[], days: number) {
  const dailyEvents: Record<string, number> = {};
  
  // Initialize all days with 0
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    dailyEvents[dateKey] = 0;
  }
  
  // Count events by day
  events.forEach(e => {
    const dateKey = e.timestamp.split('T')[0];
    if (dailyEvents.hasOwnProperty(dateKey)) {
      dailyEvents[dateKey]++;
    }
  });
  
  return Object.entries(dailyEvents)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, count }));
}

function getUniqueVisitors(events: any[]) {
  const visitors = new Set();
  events.forEach(e => {
    // Prefer persistent visitor_id over session_id for accurate unique counts
    const vid = e.properties?.visitor_id || e.session_id;
    if (vid) {
      visitors.add(vid);
    }
  });
  return visitors.size;
}

function getActiveSessions(events: any[]) {
  const now = Date.now();
  const activeThreshold = 30 * 60 * 1000; // 30 minutes
  const recentSessions = new Set();
  
  events.forEach(e => {
    const eventTime = new Date(e.timestamp).getTime();
    if (now - eventTime < activeThreshold && e.session_id) {
      recentSessions.add(e.session_id);
    }
  });
  
  return recentSessions.size;
}

function getVisitorCountries(events: any[]) {
  const countries: Record<string, { count: number; flag: string; sessions: Set<string> }> = {};
  
  events.forEach(e => {
    // Try different paths for geo data
    let country = null;
    let countryCode = null;
    
    // Check nested properties paths
    if (e.properties?.geo?.country) {
      country = e.properties.geo.country;
      countryCode = e.properties.geo.country_code;
    } else if (e.geo?.country) {
      country = e.geo.country;
      countryCode = e.geo.country_code;
    } else if (e.properties?.country) {
      country = e.properties.country;
      countryCode = e.properties.country_code;
    }
    
    // Use persistent visitor_id for accurate unique counts
    const visitorId = e.properties?.visitor_id || e.session_id;
    
    if (country && visitorId) {
      if (!countries[country]) {
        countries[country] = { 
          count: 0, 
          flag: getFlagEmoji(countryCode),
          sessions: new Set()
        };
      }
      countries[country].sessions.add(visitorId);
    }
  });
  
  // Convert to array with unique visitor counts
  return Object.entries(countries)
    .map(([country, data]) => ({
      country,
      visitors: data.sessions.size,
      flag: data.flag
    }))
    .sort((a, b) => b.visitors - a.visitors)
    .slice(0, 10);
}

function getTrafficSources(events: any[]) {
  const sources: Record<string, number> = {};
  
  events
    .filter(e => e.event_type === 'page_view')
    .forEach(e => {
      const referrer = e.referrer;
      let source = 'Direct';
      
      if (referrer) {
        try {
          const domain = new URL(referrer).hostname;
          if (domain.includes('google')) source = 'Google';
          else if (domain.includes('facebook')) source = 'Facebook';
          else if (domain.includes('twitter') || domain.includes('t.co')) source = 'Twitter';
          else if (domain.includes('linkedin')) source = 'LinkedIn';
          else source = domain;
        } catch {
          source = 'Unknown';
        }
      }
      
      sources[source] = (sources[source] || 0) + 1;
    });
  
  return Object.entries(sources)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8)
    .map(([source, count]) => ({ source, count }));
}

function getDeviceBreakdown(events: any[]) {
  const devices: Record<string, number> = {};
  
  events
    .filter(e => e.event_type === 'page_view')
    .forEach(e => {
      const ua = e.user_agent?.toLowerCase() || '';
      let device = 'Desktop';
      
      if (ua.includes('mobile') || ua.includes('android')) device = 'Mobile';
      else if (ua.includes('tablet') || ua.includes('ipad')) device = 'Tablet';
      
      devices[device] = (devices[device] || 0) + 1;
    });
  
  return Object.entries(devices)
    .map(([device, count]) => ({ device, count }));
}

function getPopularCTAs(events: any[]) {
  const ctas: Record<string, number> = {};
  
  events
    .filter(e => e.event_type === 'feature_usage' && e.properties?.feature === 'cta')
    .forEach(e => {
      const location = e.properties?.location || 'unknown';
      ctas[location] = (ctas[location] || 0) + 1;
    });
  
  return Object.entries(ctas)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([location, clicks]) => ({ location, clicks }));
}

function getQuestionnaireFunnel(events: any[]) {
  // Track unique visitors at each funnel stage
  const started = new Set<string>();
  const reached25 = new Set<string>();
  const reached50 = new Set<string>();
  const reached75 = new Set<string>();
  const completed = new Set<string>();
  
  events
    .filter(e => e.event_type === 'feature_usage' && e.properties?.feature === 'questionnaire')
    .forEach(e => {
      const vid = e.properties?.visitor_id || e.session_id;
      if (!vid) return;
      const action = e.properties?.action;
      const progress = e.properties?.progress_percent || e.properties?.progress || 0;
      
      if (action === 'start') started.add(vid);
      else if (action === 'completion' || action === 'complete') completed.add(vid);
      else if (action === 'progress') {
        // Track highest milestone reached per visitor
        if (progress >= 25) reached25.add(vid);
        if (progress >= 50) reached50.add(vid);
        if (progress >= 75) reached75.add(vid);
      }
    });
  
  return {
    started: started.size,
    progress_25: reached25.size,
    progress_50: reached50.size,
    progress_75: reached75.size,
    completed: completed.size
  };
}

function getFlagEmoji(countryCode: string) {
  if (!countryCode || countryCode.length !== 2) return '🌍';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// NEW ENHANCED TRACKING FUNCTIONS

function getLiveVisitors(events: any[]) {
  const now = Date.now();
  const liveThreshold = 15 * 60 * 1000; // 15 minutes for "live"
  const liveSessions = new Set();
  
  events.forEach(e => {
    const eventTime = new Date(e.timestamp).getTime();
    if (now - eventTime < liveThreshold && e.session_id) {
      liveSessions.add(e.session_id);
    }
  });
  
  return liveSessions.size;
}

function getConversionRate(events: any[]) {
  const uniqueVisitors = new Set(events.map(e => e.properties?.visitor_id || e.session_id)).size;
  const conversions = events.filter(e => e.event_type === 'conversion').length;
  
  if (uniqueVisitors === 0) return 0;
  return ((conversions / uniqueVisitors) * 100).toFixed(2);
}

function getConversionFunnel(events: any[]) {
  // Count unique visitors at each funnel stage, not raw events
  const landingVisitors = new Set<string>();
  const quizStartVisitors = new Set<string>();
  const quizCompleteVisitors = new Set<string>();
  const planVisitors = new Set<string>();
  const conversionVisitors = new Set<string>();
  
  events.forEach(e => {
    const vid = e.properties?.visitor_id || e.session_id;
    if (!vid) return;
    
    if (e.event_type === 'page_view') {
      const page = e.properties?.page || (e.url ? (() => { try { return new URL(e.url).pathname; } catch { return e.url; } })() : '');
      if (page && !page.includes('/admin')) landingVisitors.add(vid);
      if (page?.includes('/plan')) planVisitors.add(vid);
    } else if (e.event_type === 'feature_usage' && e.properties?.feature === 'questionnaire') {
      if (e.properties?.action === 'start') quizStartVisitors.add(vid);
      if (e.properties?.action === 'completion' || e.properties?.action === 'complete') quizCompleteVisitors.add(vid);
    } else if (e.event_type === 'conversion') {
      conversionVisitors.add(vid);
    }
  });
  
  return {
    landing_page_views: landingVisitors.size,
    questionnaire_starts: quizStartVisitors.size,
    questionnaire_completes: quizCompleteVisitors.size,
    plan_page_views: planVisitors.size,
    conversions: conversionVisitors.size
  };
}

function getBounceRate(events: any[]) {
  const sessionEvents: Record<string, number> = {};
  
  events
    .filter(e => e.event_type === 'page_view')
    .forEach(e => {
      if (e.session_id) {
        sessionEvents[e.session_id] = (sessionEvents[e.session_id] || 0) + 1;
      }
    });
  
  const totalSessions = Object.keys(sessionEvents).length;
  const bounceSessions = Object.values(sessionEvents).filter(count => count === 1).length;
  
  if (totalSessions === 0) return 0;
  return ((bounceSessions / totalSessions) * 100).toFixed(2);
}

function getSeoPerformance(events: any[]) {
  const pageViews = events.filter(e => e.event_type === 'page_view');

  // Categorize traffic sources
  const sourceCategories: Record<string, number> = { organic: 0, social: 0, direct: 0, referral: 0 };
  pageViews.forEach(e => {
    const ref = e.referrer || '';
    try {
      if (!ref) { sourceCategories.direct++; return; }
      const domain = new URL(ref).hostname;
      if (domain.includes('google') || domain.includes('bing') || domain.includes('duckduckgo') || domain.includes('yahoo') || domain.includes('yandex') || domain.includes('baidu'))
        sourceCategories.organic++;
      else if (domain.includes('twitter') || domain.includes('t.co') || domain.includes('facebook') || domain.includes('instagram') || domain.includes('linkedin') || domain.includes('tiktok') || domain.includes('youtube') || domain.includes('reddit'))
        sourceCategories.social++;
      else
        sourceCategories.referral++;
    } catch { sourceCategories.direct++; }
  });

  // SEO landing pages performance
  const seoPages: Record<string, { views: number; quizStarts: number; uniqueVisitors: Set<string> }> = {};
  pageViews.forEach(e => {
    try {
      const path = new URL(e.url).pathname;
      if (path.startsWith('/relocate-to/') || (path.startsWith('/compare/') && path.includes('-vs-'))) {
        if (!seoPages[path]) seoPages[path] = { views: 0, quizStarts: 0, uniqueVisitors: new Set() };
        seoPages[path].views++;
        if (e.visitor_id) seoPages[path].uniqueVisitors.add(e.visitor_id);
      }
    } catch {}
  });

  // Check which SEO page visitors also started the quiz
  const seoVisitorIds = new Set<string>();
  Object.values(seoPages).forEach(p => p.uniqueVisitors.forEach(v => seoVisitorIds.add(v)));

  const quizStartsFromSeo = events
    .filter(e => e.event_type === 'questionnaire_start' && e.visitor_id && seoVisitorIds.has(e.visitor_id))
    .length;

  const conversionsFromSeo = events
    .filter(e => e.event_type === 'conversion' && e.visitor_id && seoVisitorIds.has(e.visitor_id))
    .length;

  // Top performing SEO pages
  const topSeoPages = Object.entries(seoPages)
    .sort(([, a], [, b]) => b.views - a.views)
    .slice(0, 15)
    .map(([page, data]) => ({ page, views: data.views, visitors: data.uniqueVisitors.size }));

  // Organic traffic by day
  const organicByDay: Record<string, number> = {};
  pageViews.forEach(e => {
    const ref = e.referrer || '';
    try {
      if (ref) {
        const domain = new URL(ref).hostname;
        if (domain.includes('google') || domain.includes('bing') || domain.includes('duckduckgo') || domain.includes('yahoo') || domain.includes('yandex')) {
          const day = e.timestamp?.split('T')[0];
          if (day) organicByDay[day] = (organicByDay[day] || 0) + 1;
        }
      }
    } catch {}
  });

  return {
    source_categories: sourceCategories,
    total_seo_page_views: topSeoPages.reduce((s, p) => s + p.views, 0),
    seo_visitors: seoVisitorIds.size,
    quiz_starts_from_seo: quizStartsFromSeo,
    conversions_from_seo: conversionsFromSeo,
    seo_conversion_rate: seoVisitorIds.size > 0 ? ((conversionsFromSeo / seoVisitorIds.size) * 100).toFixed(2) : '0',
    top_seo_pages: topSeoPages,
    organic_by_day: Object.entries(organicByDay).sort(([a], [b]) => a.localeCompare(b)).map(([date, count]) => ({ date, count })),
  };
}

// ==========================================
// NEW: Revenue Metrics
// ==========================================
function getRevenueMetrics(events: any[]) {
  const conversions = events.filter(e => e.event_type === 'conversion');
  
  let totalRevenue = 0;
  let paidReports = 0;
  const revenueByDay: Record<string, number> = {};
  
  conversions.forEach(e => {
    const value = e.properties?.value || e.properties?.price || 0;
    totalRevenue += value;
    paidReports++;
    
    const day = e.timestamp?.split('T')[0];
    if (day) revenueByDay[day] = (revenueByDay[day] || 0) + value;
  });
  
  const uniqueVisitors = getUniqueVisitors(events);
  
  return {
    total_revenue: totalRevenue,
    paid_reports: paidReports,
    avg_revenue_per_visitor: uniqueVisitors > 0 ? parseFloat((totalRevenue / uniqueVisitors).toFixed(2)) : 0,
    avg_order_value: paidReports > 0 ? parseFloat((totalRevenue / paidReports).toFixed(2)) : 0,
    revenue_by_day: Object.entries(revenueByDay)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, amount]) => ({ date, amount })),
  };
}

// ==========================================
// NEW: Marketing ROI by UTM Source
// ==========================================
function getMarketingROI(events: any[]) {
  // Build a map: visitor_id -> UTM source (from their first event with UTM data)
  const visitorUtm: Record<string, { source: string; medium: string; campaign: string }> = {};
  
  // Sort events by timestamp ascending to get first touch attribution
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  
  sortedEvents.forEach(e => {
    const vid = e.properties?.visitor_id || e.session_id;
    if (!vid) return;
    
    // Check for UTM data in properties
    const utm = e.properties?.utm || e.properties?.utm_params;
    if (utm && utm.source && !visitorUtm[vid]) {
      visitorUtm[vid] = {
        source: utm.source,
        medium: utm.medium || '',
        campaign: utm.campaign || '',
      };
    }
    
    // Also check URL params directly
    if (!visitorUtm[vid] && e.url) {
      try {
        const url = new URL(e.url);
        const utmSource = url.searchParams.get('utm_source');
        if (utmSource) {
          visitorUtm[vid] = {
            source: utmSource,
            medium: url.searchParams.get('utm_medium') || '',
            campaign: url.searchParams.get('utm_campaign') || '',
          };
        }
      } catch {}
    }
    
    // Fallback: categorize by referrer
    if (!visitorUtm[vid] && e.referrer && e.event_type === 'page_view') {
      try {
        const domain = new URL(e.referrer).hostname;
        let source = 'referral';
        if (domain.includes('google') || domain.includes('bing') || domain.includes('duckduckgo')) source = 'organic';
        else if (domain.includes('facebook') || domain.includes('fb.com') || domain.includes('fbclid')) source = 'facebook';
        else if (domain.includes('twitter') || domain.includes('t.co') || domain.includes('x.com')) source = 'x';
        else if (domain.includes('telegram') || domain.includes('t.me')) source = 'telegram';
        else if (domain.includes('linkedin')) source = 'linkedin';
        
        visitorUtm[vid] = { source, medium: 'referral', campaign: '' };
      } catch {}
    }
  });
  
  // Assign 'direct' to remaining visitors
  const allVisitorIds = new Set<string>();
  events.forEach(e => {
    const vid = e.properties?.visitor_id || e.session_id;
    if (vid) allVisitorIds.add(vid);
  });
  allVisitorIds.forEach(vid => {
    if (!visitorUtm[vid]) visitorUtm[vid] = { source: 'direct', medium: '', campaign: '' };
  });
  
  // Now build ROI table by source
  const roi: Record<string, { visitors: Set<string>; quiz_starts: Set<string>; quiz_completes: Set<string>; paid: Set<string>; revenue: number }> = {};
  
  const getSourceKey = (vid: string) => {
    const utm = visitorUtm[vid];
    if (!utm) return 'direct';
    // Group X campaigns separately if they have different campaigns
    if (utm.source === 'x' && utm.campaign) {
      return `x (${utm.campaign})`;
    }
    return utm.source;
  };
  
  const ensureBucket = (key: string) => {
    if (!roi[key]) roi[key] = { visitors: new Set(), quiz_starts: new Set(), quiz_completes: new Set(), paid: new Set(), revenue: 0 };
  };
  
  events.forEach(e => {
    const vid = e.properties?.visitor_id || e.session_id;
    if (!vid) return;
    const key = getSourceKey(vid);
    ensureBucket(key);
    
    if (e.event_type === 'page_view') {
      roi[key].visitors.add(vid);
    }
    
    if (e.event_type === 'feature_usage' && e.properties?.feature === 'questionnaire') {
      if (e.properties?.action === 'start') roi[key].quiz_starts.add(vid);
      if (e.properties?.action === 'completion' || e.properties?.action === 'complete') roi[key].quiz_completes.add(vid);
    }
    
    if (e.event_type === 'conversion') {
      roi[key].paid.add(vid);
      roi[key].revenue += e.properties?.value || e.properties?.price || 0;
    }
  });
  
  // Convert to array
  const platforms = Object.entries(roi)
    .map(([platform, data]) => ({
      platform,
      visitors: data.visitors.size,
      quiz_starts: data.quiz_starts.size,
      quiz_completes: data.quiz_completes.size,
      paid: data.paid.size,
      revenue: parseFloat(data.revenue.toFixed(2)),
      cost_per_acquisition: data.paid.size > 0 ? 'N/A' : '-', // Placeholder — ad spend must be entered manually
    }))
    .sort((a, b) => b.visitors - a.visitors);
  
  return { platforms };
}

// ==========================================
// NEW: Enhanced Funnel (with summary viewed + payment initiated)
// ==========================================
function getEnhancedFunnel(events: any[]) {
  const visitors = new Set<string>();
  const quizStarters = new Set<string>();
  const quizCompleters = new Set<string>();
  const summaryViewers = new Set<string>();
  const paymentInitiated = new Set<string>();
  const paymentCompleted = new Set<string>();
  
  events.forEach(e => {
    const vid = e.properties?.visitor_id || e.session_id;
    if (!vid) return;
    
    // All visitors
    if (e.event_type === 'page_view') {
      const page = e.properties?.page || '';
      if (!page.includes('/admin')) visitors.add(vid);
      
      // Summary/report page viewed (free summary)
      if (page.includes('/report/') || page.includes('/summary')) {
        summaryViewers.add(vid);
      }
      // Plan/payment page viewed = payment initiated
      if (page.includes('/plan') || page.includes('/payment') || page.includes('/checkout')) {
        paymentInitiated.add(vid);
      }
    }
    
    // Quiz starts/completions
    if (e.event_type === 'feature_usage' && e.properties?.feature === 'questionnaire') {
      if (e.properties?.action === 'start') quizStarters.add(vid);
      if (e.properties?.action === 'completion' || e.properties?.action === 'complete') quizCompleters.add(vid);
    }
    
    // Also count 'questionnaire_start' event type (some components use this)
    if (e.event_type === 'questionnaire_start') {
      quizStarters.add(vid);
    }
    
    // Purchase intent = payment initiated
    if (e.event_type === 'purchase_intent' || e.event_type === 'purchase_start') {
      paymentInitiated.add(vid);
    }
    
    // Conversion = payment completed
    if (e.event_type === 'conversion') {
      paymentCompleted.add(vid);
    }
  });
  
  const rate = (num: number, denom: number) => denom > 0 ? parseFloat(((num / denom) * 100).toFixed(1)) : 0;
  
  return {
    steps: [
      { label: 'Visitors', count: visitors.size, rate: 100 },
      { label: 'Quiz Started', count: quizStarters.size, rate: rate(quizStarters.size, visitors.size) },
      { label: 'Quiz Completed', count: quizCompleters.size, rate: rate(quizCompleters.size, quizStarters.size) },
      { label: 'Summary Viewed', count: summaryViewers.size, rate: rate(summaryViewers.size, quizCompleters.size) },
      { label: 'Payment Initiated', count: paymentInitiated.size, rate: rate(paymentInitiated.size, summaryViewers.size) },
      { label: 'Payment Completed', count: paymentCompleted.size, rate: rate(paymentCompleted.size, paymentInitiated.size) },
    ],
    overall_rate: rate(paymentCompleted.size, visitors.size),
  };
}