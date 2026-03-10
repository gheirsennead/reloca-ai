'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DashboardData {
  referralCode: string;
  stats: {
    totalClicks: number;
    totalQuizCompletions: number;
    totalPurchases: number;
    totalCreditsEarned: number;
    totalCreditsUsed: number;
    availableCredit: number;
  };
  recentEvents: Array<{ event_type: string; created_at: string }>;
  credits: Array<{ credit_amount: number; used: boolean; referred_email: string; created_at: string }>;
}

export default function ReferralDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const token = params.get('token');

    if (!code || !token) {
      setError('Missing referral code or access token. Check your email for the correct link.');
      setLoading(false);
      return;
    }

    fetch(`/api/referral-dashboard?code=${code}&token=${token}`)
      .then(res => {
        if (!res.ok) throw new Error('Invalid or expired link');
        return res.json();
      })
      .then(setData)
      .catch(() => setError('Invalid or expired link. Request a new dashboard link via email.'))
      .finally(() => setLoading(false));
  }, []);

  const shareUrl = data ? `https://reloca.ai?ref=${data.referralCode}` : '';

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-[#1a365d] font-bold text-xl">🌐 Reloca.ai</Link>
          <span className="text-sm text-gray-500">Referral Dashboard</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {loading && (
          <div className="text-center py-20">
            <div className="animate-spin h-8 w-8 border-4 border-[#38b2ac] border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-500">Loading your referral stats...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {data && (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#1a365d] mb-2">Your Referral Dashboard</h1>
              <p className="text-gray-500">Share your link → friends save $10 → you earn $10 credit</p>
            </div>

            {/* Referral Link */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-[#1a365d] mb-3">Your Referral Link</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700"
                />
                <button
                  onClick={() => { navigator.clipboard.writeText(shareUrl); }}
                  className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Copy
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">Code: <span className="font-mono">{data.referralCode}</span></p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Link Clicks" value={data.stats.totalClicks} icon="🔗" />
              <StatCard label="Quizzes Started" value={data.stats.totalQuizCompletions} icon="📝" />
              <StatCard label="Purchases" value={data.stats.totalPurchases} icon="💰" />
              <StatCard
                label="Available Credit"
                value={`$${data.stats.availableCredit}`}
                icon="🎁"
                highlight
              />
            </div>

            {/* Credit Summary */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-[#1a365d] mb-3">Credit Summary</h2>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Total earned</span>
                <span className="font-semibold text-green-600">${data.stats.totalCreditsEarned}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Used</span>
                <span className="font-semibold text-gray-500">${data.stats.totalCreditsUsed}</span>
              </div>
              <div className="border-t border-gray-100 pt-2 mt-2 flex justify-between text-sm font-bold">
                <span className="text-[#1a365d]">Available</span>
                <span className="text-[#38b2ac]">${data.stats.availableCredit}</span>
              </div>
              <p className="text-xs text-gray-400 mt-3">Credits are automatically applied at checkout when you purchase with the same email.</p>
            </div>

            {/* Recent Activity */}
            {data.credits.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="font-semibold text-[#1a365d] mb-3">Referral History</h2>
                <div className="space-y-2">
                  {data.credits.map((credit, i) => (
                    <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-gray-50 last:border-0">
                      <div>
                        <span className="text-gray-600">Friend purchased a report</span>
                        <span className="text-gray-400 text-xs ml-2">
                          {new Date(credit.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <span className={`font-semibold ${credit.used ? 'text-gray-400 line-through' : 'text-green-600'}`}>
                        +${credit.credit_amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share CTA */}
            <div className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7a] rounded-xl p-6 text-center text-white">
              <h3 className="font-bold text-lg mb-2">Earn more credits</h3>
              <p className="text-white/80 text-sm mb-4">Every friend who buys a report = $10 credit for you</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I just discovered my perfect relocation match! Find yours →`)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition">𝕏 Twitter</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition">📘 Facebook</a>
                <a href={`https://wa.me/?text=${encodeURIComponent(`Check out Reloca.ai — I found my perfect relocation match! ${shareUrl}`)}`} target="_blank" rel="noopener" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ label, value, icon, highlight }: { label: string; value: string | number; icon: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 text-center ${highlight ? 'bg-[#38b2ac]/10 border-[#38b2ac]/30' : 'bg-white border-gray-200'}`}>
      <div className="text-2xl mb-1">{icon}</div>
      <div className={`text-xl font-bold ${highlight ? 'text-[#38b2ac]' : 'text-[#1a365d]'}`}>{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}
