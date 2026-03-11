"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

const countryNames: Record<string, { name: string; flag: string }> = {
  'BR': { name: 'Brazil', flag: '🇧🇷' }, 'AR': { name: 'Argentina', flag: '🇦🇷' },
  'PY': { name: 'Paraguay', flag: '🇵🇾' }, 'UY': { name: 'Uruguay', flag: '🇺🇾' },
  'PA': { name: 'Panama', flag: '🇵🇦' }, 'SV': { name: 'El Salvador', flag: '🇸🇻' },
  'CR': { name: 'Costa Rica', flag: '🇨🇷' }, 'MX': { name: 'Mexico', flag: '🇲🇽' },
  'CO': { name: 'Colombia', flag: '🇨🇴' }, 'EC': { name: 'Ecuador', flag: '🇪🇨' },
  'CL': { name: 'Chile', flag: '🇨🇱' }, 'PT': { name: 'Portugal', flag: '🇵🇹' },
  'ES': { name: 'Spain', flag: '🇪🇸' }, 'IT': { name: 'Italy', flag: '🇮🇹' },
  'GR': { name: 'Greece', flag: '🇬🇷' }, 'MT': { name: 'Malta', flag: '🇲🇹' },
  'CY': { name: 'Cyprus', flag: '🇨🇾' }, 'AD': { name: 'Andorra', flag: '🇦🇩' },
  'SG': { name: 'Singapore', flag: '🇸🇬' }, 'AE': { name: 'Dubai', flag: '🇦🇪' },
  'TH': { name: 'Thailand', flag: '🇹🇭' }, 'MY': { name: 'Malaysia', flag: '🇲🇾' },
  'EE': { name: 'Estonia', flag: '🇪🇪' },
  'PORTUGAL': { name: 'Portugal', flag: '🇵🇹' }, 'BRAZIL': { name: 'Brazil', flag: '🇧🇷' },
  'SPAIN': { name: 'Spain', flag: '🇪🇸' }, 'ITALY': { name: 'Italy', flag: '🇮🇹' },
};

function MatchContent() {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get('country') || 'PT';
  const score = parseInt(searchParams.get('score') || '85', 10);
  const ref = searchParams.get('ref') || '';
  
  const countryData = countryNames[countryParam.toUpperCase()] || { name: countryParam, flag: '🌎' };
  
  useEffect(() => {
    analytics.trackFeatureUsage('match_page', 'view', { country: countryParam, score, ref });
    // Store referral code
    if (ref) {
      localStorage.setItem('referralSource', ref);
    }
  }, [countryParam, score, ref]);

  const circumference = 2 * Math.PI * 52;
  const offset = circumference * (1 - score / 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafaf9] to-[#f5f5f4] flex flex-col items-center justify-center p-4">
      {/* Header */}
      <Link href="/" className="mb-8">
        <img src="/images/reloca-logo.png" alt="Reloca.ai" className="h-12 w-auto" />
      </Link>

      <p className="text-gray-600 mb-6 text-center max-w-md">
        Someone found their perfect country match. Will you find yours?
      </p>

      {/* The Card */}
      <div className="bg-gradient-to-br from-teal-500 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center max-w-sm w-full shadow-2xl mb-8">
        <div className="text-sm uppercase tracking-wider opacity-90 mb-4">
          #1 Country Match
        </div>
        
        <div className="text-6xl mb-4">{countryData.flag}</div>
        <div className="text-3xl font-bold mb-6">{countryData.name}</div>
        
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
            <circle cx="60" cy="60" r="52" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={offset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{score}%</span>
          </div>
        </div>
        <div className="text-sm opacity-75 mb-4">Compatibility Score</div>

        <div className="text-lg font-semibold opacity-90">
          Reloca.ai
        </div>
      </div>

      {/* CTA */}
      <Link
        href={ref ? `/plan-36?ref=${ref}` : '/plan-36'}
        className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-bold px-10 py-5 rounded-xl shadow-lg shadow-teal-500/25 transition hover:shadow-xl text-lg hover:scale-[1.02] mb-4"
      >
        Find My Country Match →
      </Link>
      <p className="text-xs text-gray-400">⏱️ Takes 5 minutes · Free quiz · Instant results</p>

      {/* Social proof */}
      <p className="mt-6 text-sm text-gray-500">
        ✅ <strong>4,200+</strong> people have found their match
      </p>
    </div>
  );
}

export default function MatchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fafaf9]" />}>
      <MatchContent />
    </Suspense>
  );
}
