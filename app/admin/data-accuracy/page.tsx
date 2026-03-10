'use client';

import { useState, useEffect } from 'react';
import { PRIORITY_COUNTRIES } from '@/lib/data-accuracy/types';

interface CountryVerificationData {
  country: string;
  country_code: string;
  confidence_score: number;
  last_updated: string | null;
  status?: string;
}

interface VerificationSummary {
  verified: CountryVerificationData[];
  unverified: CountryVerificationData[];
  total_countries: number;
  verified_count: number;
}

export default function DataAccuracyDashboard() {
  const [summary, setSummary] = useState<VerificationSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [runningVerification, setRunningVerification] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const AUTH_PASSWORD = '10f34574c2510a38ae6caad89e45a7f5'; // Same as other admin pages

  const authenticate = () => {
    if (password === AUTH_PASSWORD) {
      setAuthenticated(true);
      fetchSummary();
    } else {
      alert('Invalid password');
    }
  };

  const fetchSummary = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/data-verification?force_refresh=true');
      console.log('API response status:', response.status);
      
      if (!response.ok) {
        console.error('API response not OK:', response.statusText);
        throw new Error(`API Error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API response data:', data);
      setSummary(data);
    } catch (error) {
      console.error('Error fetching verification summary:', error);
      // Don't fall back to mock data anymore since tables should exist
      setSummary({
        verified: [],
        unverified: PRIORITY_COUNTRIES.map(c => ({
          country: c.name,
          country_code: c.code,
          confidence_score: 0,
          last_updated: null,
          status: 'pending_verification'
        })),
        total_countries: PRIORITY_COUNTRIES.length,
        verified_count: 0
      });
    } finally {
      setLoading(false);
    }
  };

  const runVerification = async (country: string) => {
    try {
      setRunningVerification(country);
      const response = await fetch('/api/data-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          country, 
          force_update: true 
        })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert(`✅ Verification completed for ${country}\nConfidence: ${result.data?.confidence_score || 'N/A'}%`);
        fetchSummary(); // Refresh data
      } else {
        alert(`❌ Verification failed for ${country}: ${result.error}\n\nThis is expected if database tables haven't been created yet.`);
      }
    } catch (error) {
      alert(`❌ Error running verification: ${error}\n\nNote: Database tables may need to be created first.`);
    } finally {
      setRunningVerification(null);
    }
  };

  const runAllVerifications = async () => {
    const unverifiedCountries = summary?.unverified || [];
    
    for (const country of unverifiedCountries) {
      await runVerification(country.country);
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds between requests to avoid rate limits
    }
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-yellow-600 bg-yellow-50';
    if (score >= 70) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  const getCountryFlag = (countryName: string) => {
    const country = PRIORITY_COUNTRIES.find(c => c.name === countryName);
    return country?.flag || '🏳️';
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Data Accuracy Dashboard</h1>
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
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Data Accuracy System</h1>
              <p className="text-gray-600 mt-1">Multi-source verification for country data</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={fetchSummary}
                disabled={loading}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Refresh'}
              </button>
              <button
                onClick={runAllVerifications}
                disabled={runningVerification !== null}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition disabled:opacity-50"
              >
                Run All Verifications
              </button>
            </div>
          </div>
        </div>

        {loading && !summary ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading verification data...</div>
          </div>
        ) : summary ? (
          <div className="space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Total Countries</div>
                <div className="text-2xl font-bold text-gray-900">{summary.total_countries}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Verified</div>
                <div className="text-2xl font-bold text-green-600">{summary.verified_count}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Pending</div>
                <div className="text-2xl font-bold text-orange-600">{summary.unverified.length}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Coverage</div>
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round((summary.verified_count / summary.total_countries) * 100)}%
                </div>
              </div>
            </div>

            {/* Verified Countries */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ✅ Verified Countries ({summary.verified.length})
              </h3>
              <div className="grid gap-4">
                {summary.verified.map((country) => (
                  <div key={country.country} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getCountryFlag(country.country)}</span>
                      <div>
                        <div className="font-medium">{country.country}</div>
                        <div className="text-sm text-gray-500">
                          Last updated: {country.last_updated ? new Date(country.last_updated).toLocaleDateString() : 'Never'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(country.confidence_score)}`}>
                        {country.confidence_score}% confident
                      </div>
                      <button
                        onClick={() => runVerification(country.country)}
                        disabled={runningVerification === country.country}
                        className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition disabled:opacity-50"
                      >
                        {runningVerification === country.country ? 'Running...' : 'Re-verify'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unverified Countries */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ⏳ Pending Verification ({summary.unverified.length})
              </h3>
              <div className="grid gap-4">
                {summary.unverified.map((country) => (
                  <div key={country.country} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getCountryFlag(country.country)}</span>
                      <div>
                        <div className="font-medium">{country.country}</div>
                        <div className="text-sm text-gray-500">No verification data available</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => runVerification(country.country)}
                        disabled={runningVerification === country.country}
                        className="bg-teal-600 text-white px-3 py-1 text-sm rounded hover:bg-teal-700 transition disabled:opacity-50"
                      >
                        {runningVerification === country.country ? 'Running...' : 'Verify Now'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No verification data available
          </div>
        )}
      </div>
    </div>
  );
}