'use client';

import { useState, useEffect } from 'react';

interface AnalyticsStats {
  total_events: number;
  unique_sessions: number;
  active_sessions: number;
  live_visitors: number;
  unique_visitors: number;
  page_views: number;
  country_interests: number;
  conversions: number;
  conversion_rate: string;
  top_countries: Array<{ country: string; count: number }>;
  visitor_countries: Array<{ country: string; visitors: number; flag: string }>;
  top_pages: Array<{ page: string; count: number }>;
  events_by_day: Array<{ date: string; count: number }>;
  traffic_sources: Array<{ source: string; count: number }>;
  device_breakdown: Array<{ device: string; count: number }>;
  popular_ctas: Array<{ location: string; clicks: number }>;
  questionnaire_funnel: {
    started: number;
    progress_25: number;
    progress_50: number;
    progress_75: number;
    completed: number;
  };
  conversion_funnel: {
    landing_page_views: number;
    questionnaire_starts: number;
    questionnaire_completes: number;
    plan_page_views: number;
    conversions: number;
  };
  bounce_rate: string;
  seo_performance: {
    source_categories: { organic: number; social: number; direct: number; referral: number };
    total_seo_page_views: number;
    seo_visitors: number;
    quiz_starts_from_seo: number;
    conversions_from_seo: number;
    seo_conversion_rate: string;
    top_seo_pages: Array<{ page: string; views: number; visitors: number }>;
    organic_by_day: Array<{ date: string; count: number }>;
  };
}

export default function AnalyticsDashboard() {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(7);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const AUTH_PASSWORD = '10f34574c2510a38ae6caad89e45a7f5'; // Same as partners admin

  const authenticate = () => {
    if (password === AUTH_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const fetchStats = async (bustCache = false) => {
    try {
      setLoading(true);
      const cacheBuster = bustCache ? `&_t=${Date.now()}` : '';
      const response = await fetch(`/api/analytics?days=${days}${cacheBuster}`, {
        headers: bustCache ? { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } : {}
      });
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const data = await response.json();
      setStats(data);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error fetching analytics:', error);
      // Set empty data if API fails
      setStats({
        total_events: 0,
        unique_sessions: 0,
        active_sessions: 0,
        live_visitors: 0,
        unique_visitors: 0,
        page_views: 0,
        country_interests: 0,
        conversions: 0,
        conversion_rate: '0.00',
        top_countries: [],
        visitor_countries: [],
        top_pages: [],
        events_by_day: [],
        traffic_sources: [],
        device_breakdown: [],
        popular_ctas: [],
        questionnaire_funnel: {
          started: 0,
          progress_25: 0,
          progress_50: 0,
          progress_75: 0,
          completed: 0
        },
        conversion_funnel: {
          landing_page_views: 0,
          questionnaire_starts: 0,
          questionnaire_completes: 0,
          plan_page_views: 0,
          conversions: 0
        },
        bounce_rate: '0.00',
        seo_performance: {
          source_categories: { organic: 0, social: 0, direct: 0, referral: 0 },
          total_seo_page_views: 0,
          seo_visitors: 0,
          quiz_starts_from_seo: 0,
          conversions_from_seo: 0,
          seo_conversion_rate: '0',
          top_seo_pages: [],
          organic_by_day: [],
        }
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchStats();
      
      // Set up auto-refresh every 5 minutes
      const refreshInterval = setInterval(() => {
        fetchStats(true); // Force cache bust on auto-refresh
      }, 5 * 60 * 1000);
      
      return () => clearInterval(refreshInterval);
    }
  }, [authenticated, days]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && authenticate()}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter admin password"
              />
            </div>
            <button
              onClick={authenticate}
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
            >
              Access Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Reloca.ai Analytics</h1>
            <div className="flex items-center gap-4">
              <select
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                <option value={1}>Last 24 hours</option>
                <option value={7}>Last 7 days</option>
                <option value={30}>Last 30 days</option>
                <option value={90}>Last 90 days</option>
              </select>
              <button
                onClick={() => fetchStats(true)}
                disabled={loading}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>
          {lastRefresh && (
            <div className="text-sm text-gray-500 mt-2">
              Last updated: {lastRefresh.toLocaleTimeString()} • Auto-refresh every 5 minutes
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading analytics...</div>
          </div>
        ) : stats ? (
          <div className="space-y-6">
            {/* Overview Cards - Enhanced with Live Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Total Events</div>
                <div className="text-2xl font-bold text-gray-900">{stats.total_events.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">🔴 Live Visitors</div>
                <div className="text-2xl font-bold text-red-600">{stats.live_visitors.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Last 15 min</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Active Sessions</div>
                <div className="text-2xl font-bold text-green-600">{stats.active_sessions.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Last 30 min</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Total Sessions</div>
                <div className="text-2xl font-bold text-gray-900">{stats.unique_sessions.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Page Views</div>
                <div className="text-2xl font-bold text-gray-900">{stats.page_views.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Conversions</div>
                <div className="text-2xl font-bold text-purple-600">{stats.conversions.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Conversion Rate</div>
                <div className="text-2xl font-bold text-orange-600">{stats.conversion_rate}%</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Bounce Rate</div>
                <div className="text-2xl font-bold text-red-600">{stats.bounce_rate}%</div>
              </div>
            </div>

            {/* CONVERSION ANALYTICS - TOP PRIORITY */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Conversion Funnel Analysis</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">1. Landing Page Views</span>
                    <span className="text-xl font-bold text-blue-600">{stats.conversion_funnel.landing_page_views}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span className="font-medium">2. Quiz Started</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-yellow-600">{stats.conversion_funnel.questionnaire_starts}</span>
                      <div className="text-sm text-gray-500">
                        {stats.conversion_funnel.landing_page_views > 0 
                          ? ((stats.conversion_funnel.questionnaire_starts / stats.conversion_funnel.landing_page_views) * 100).toFixed(1)
                          : '0'}% conversion
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-medium">3. Quiz Completed</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-green-600">{stats.conversion_funnel.questionnaire_completes}</span>
                      <div className="text-sm text-gray-500">
                        {stats.conversion_funnel.questionnaire_starts > 0 
                          ? ((stats.conversion_funnel.questionnaire_completes / stats.conversion_funnel.questionnaire_starts) * 100).toFixed(1)
                          : '0'}% completion
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span className="font-medium">4. Plan Page Views</span>
                    <span className="text-xl font-bold text-purple-600">{stats.conversion_funnel.plan_page_views}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded border-2 border-red-200">
                    <span className="font-medium">🎯 CONVERSIONS</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-red-600">{stats.conversion_funnel.conversions}</span>
                      <div className="text-sm text-red-500 font-semibold">
                        {stats.conversion_rate}% overall rate
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sales Summary */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">💰 Sales</h4>
                  <div className="text-2xl font-bold text-green-600">{stats.conversion_funnel.conversions} purchase{stats.conversion_funnel.conversions !== 1 ? 's' : ''}</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Quiz Progression Analytics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Started Quiz</span>
                    <span className="text-xl font-bold text-blue-600">{stats.questionnaire_funnel.started}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{width: '100%'}}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">25% Progress</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-yellow-600">{stats.questionnaire_funnel.progress_25}</span>
                      <div className="text-sm text-gray-500">
                        {stats.questionnaire_funnel.started > 0 
                          ? ((stats.questionnaire_funnel.progress_25 / stats.questionnaire_funnel.started) * 100).toFixed(1)
                          : '0'}% retention
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-600 h-2 rounded-full" 
                      style={{width: stats.questionnaire_funnel.started > 0 
                        ? `${(stats.questionnaire_funnel.progress_25 / stats.questionnaire_funnel.started) * 100}%`
                        : '0%'}}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">50% Progress</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-orange-600">{stats.questionnaire_funnel.progress_50}</span>
                      <div className="text-sm text-gray-500">
                        {stats.questionnaire_funnel.started > 0 
                          ? ((stats.questionnaire_funnel.progress_50 / stats.questionnaire_funnel.started) * 100).toFixed(1)
                          : '0'}% retention
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full" 
                      style={{width: stats.questionnaire_funnel.started > 0 
                        ? `${(stats.questionnaire_funnel.progress_50 / stats.questionnaire_funnel.started) * 100}%`
                        : '0%'}}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">75% Progress</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-green-600">{stats.questionnaire_funnel.progress_75}</span>
                      <div className="text-sm text-gray-500">
                        {stats.questionnaire_funnel.started > 0 
                          ? ((stats.questionnaire_funnel.progress_75 / stats.questionnaire_funnel.started) * 100).toFixed(1)
                          : '0'}% retention
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{width: stats.questionnaire_funnel.started > 0 
                        ? `${(stats.questionnaire_funnel.progress_75 / stats.questionnaire_funnel.started) * 100}%`
                        : '0%'}}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">🎯 Completed</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-purple-600">{stats.questionnaire_funnel.completed}</span>
                      <div className="text-sm text-gray-500">
                        {stats.questionnaire_funnel.started > 0 
                          ? ((stats.questionnaire_funnel.completed / stats.questionnaire_funnel.started) * 100).toFixed(1)
                          : '0'}% completion
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{width: stats.questionnaire_funnel.started > 0 
                        ? `${(stats.questionnaire_funnel.completed / stats.questionnaire_funnel.started) * 100}%`
                        : '0%'}}
                    ></div>
                  </div>
                </div>
                
                {/* Quiz Drop-off Analysis */}
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">⚠️ Drop-off Points</h4>
                  <div className="text-sm text-red-700 space-y-1">
                    {stats.questionnaire_funnel.started > 0 && (
                      <>
                        <div>• 0-25%: {((stats.questionnaire_funnel.started - stats.questionnaire_funnel.progress_25) / stats.questionnaire_funnel.started * 100).toFixed(1)}% drop-off</div>
                        <div>• 25-50%: {stats.questionnaire_funnel.progress_25 > 0 
                          ? (((stats.questionnaire_funnel.progress_25 - stats.questionnaire_funnel.progress_50) / stats.questionnaire_funnel.progress_25) * 100).toFixed(1)
                          : '0'}% drop-off</div>
                        <div>• 50-75%: {stats.questionnaire_funnel.progress_50 > 0 
                          ? (((stats.questionnaire_funnel.progress_50 - stats.questionnaire_funnel.progress_75) / stats.questionnaire_funnel.progress_50) * 100).toFixed(1)
                          : '0'}% drop-off</div>
                        <div>• 75-100%: {stats.questionnaire_funnel.progress_75 > 0 
                          ? (((stats.questionnaire_funnel.progress_75 - stats.questionnaire_funnel.completed) / stats.questionnaire_funnel.progress_75) * 100).toFixed(1)
                          : '0'}% drop-off</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Visitor Countries */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🌍 Visitors by Country</h3>
                <div className="space-y-3">
                  {stats.visitor_countries.length > 0 ? stats.visitor_countries.map((country, i) => (
                    <div key={country.country} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <div className="font-medium">{country.country}</div>
                          <div className="text-sm text-gray-500">{country.visitors} unique visitors</div>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </div>
                    </div>
                  )) : (
                    <div className="text-gray-500 text-sm">No visitor data yet</div>
                  )}
                </div>
              </div>

                          {/* SEO Performance Section */}
            {stats.seo_performance && (
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 SEO & Organic Growth</h3>
                
                {/* Source Category Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "🔍 Organic (Search)", value: stats.seo_performance.source_categories.organic, color: "text-green-600" },
                    { label: "📱 Social", value: stats.seo_performance.source_categories.social, color: "text-blue-600" },
                    { label: "🔗 Direct", value: stats.seo_performance.source_categories.direct, color: "text-purple-600" },
                    { label: "🌐 Referral", value: stats.seo_performance.source_categories.referral, color: "text-orange-600" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* SEO Pages Performance */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">📄 SEO Landing Pages</h4>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="text-lg font-bold text-green-600">{stats.seo_performance.total_seo_page_views}</div>
                        <div className="text-xs text-gray-500">Page Views</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="text-lg font-bold text-blue-600">{stats.seo_performance.quiz_starts_from_seo}</div>
                        <div className="text-xs text-gray-500">Quiz Starts</div>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="text-lg font-bold text-purple-600">{stats.seo_performance.conversions_from_seo}</div>
                        <div className="text-xs text-gray-500">Conversions</div>
                      </div>
                    </div>
                    {stats.seo_performance.top_seo_pages.length > 0 ? (
                      <div className="space-y-1 max-h-60 overflow-y-auto">
                        {stats.seo_performance.top_seo_pages.map((p) => (
                          <div key={p.page} className="flex items-center justify-between py-1 text-sm">
                            <span className="text-gray-600 truncate mr-2" title={p.page}>{p.page.replace('/relocate-to/', '🌍 ').replace('/compare/', '⚔️ ')}</span>
                            <span className="text-gray-400 whitespace-nowrap">{p.views} views · {p.visitors} visitors</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400 italic">No SEO page traffic yet — pages just launched, give Google 1-2 weeks to index.</p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">📈 Organic Traffic Trend</h4>
                    {stats.seo_performance.organic_by_day.length > 0 ? (
                      <div className="space-y-1">
                        {stats.seo_performance.organic_by_day.map((d) => (
                          <div key={d.date} className="flex items-center gap-2 text-sm">
                            <span className="text-gray-500 w-20">{d.date.slice(5)}</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                              <div className="h-4 bg-green-500 rounded-full" style={{ width: `${Math.min((d.count / Math.max(...stats.seo_performance.organic_by_day.map(x => x.count), 1)) * 100, 100)}%`, minWidth: d.count > 0 ? '20px' : '0' }}></div>
                            </div>
                            <span className="text-gray-400 w-8 text-right">{d.count}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400 italic">No organic search traffic recorded yet. Expected 1-2 weeks after indexing.</p>
                    )}
                    <div className="mt-3 p-2 bg-yellow-50 rounded text-xs text-yellow-700">
                      💡 Tip: Submit sitemap at <a href="https://search.google.com/search-console" target="_blank" className="underline">Google Search Console</a> to speed up indexing.
                    </div>
                  </div>
                </div>
              </div>
            )}

              {/* Traffic Sources */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
                <div className="space-y-2">
                  {stats.traffic_sources.map((source, i) => (
                    <div key={source.source} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium">{source.source}</span>
                      </div>
                      <span className="text-gray-500">{source.count} visits</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular CTAs */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Popular CTAs</h3>
                <div className="space-y-2">
                  {stats.popular_ctas.map((cta, i) => (
                    <div key={cta.location} className="flex items-center justify-between py-2">
                      <span className="font-medium capitalize">{cta.location.replace('_', ' ')}</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                        {cta.clicks} clicks
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Country Interests */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏝️ Country Interests</h3>
                <div className="space-y-2">
                  {stats.top_countries.map((country, i) => (
                    <div key={country.country} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="font-medium">{country.country}</span>
                      </div>
                      <span className="text-gray-500">{country.count} interests</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Pages */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📄 Top Pages</h3>
                <div className="space-y-2">
                  {stats.top_pages.map((page, i) => (
                    <div key={page.page} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="font-mono text-sm">{page.page}</span>
                      </div>
                      <span className="text-gray-500">{page.count} views</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Questionnaire Funnel */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Questionnaire Conversion Funnel</h3>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.questionnaire_funnel.started}</div>
                  <div className="text-sm text-gray-500">Started</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.questionnaire_funnel.progress_25}</div>
                  <div className="text-sm text-gray-500">25% Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{stats.questionnaire_funnel.progress_50}</div>
                  <div className="text-sm text-gray-500">50% Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{stats.questionnaire_funnel.progress_75}</div>
                  <div className="text-sm text-gray-500">75% Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{stats.questionnaire_funnel.completed}</div>
                  <div className="text-sm text-gray-500">Completed</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Conversion Rate: {stats.questionnaire_funnel.started > 0 ? 
                  Math.round((stats.questionnaire_funnel.completed / stats.questionnaire_funnel.started) * 100) : 0}%
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Timeline</h3>
              <div className="space-y-2">
                {stats.events_by_day.map((day) => (
                  <div key={day.date} className="flex items-center justify-between py-2">
                    <span className="font-medium">{new Date(day.date).toLocaleDateString()}</span>
                    <div className="flex items-center gap-2">
                      <div 
                        className="h-2 bg-teal-500 rounded"
                        style={{ width: `${Math.max(day.count / Math.max(...stats.events_by_day.map(d => d.count)) * 100, 2)}px` }}
                      />
                      <span className="text-gray-500 text-sm w-12 text-right">{day.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No analytics data available
          </div>
        )}
      </div>
    </div>
  );
}