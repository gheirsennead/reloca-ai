'use client';

import { useState, useEffect } from 'react';

interface BlogEmailGateProps {
  country: string;
  articleSlug: string;
  children: React.ReactNode;
}

export function BlogEmailGate({ country, articleSlug, children }: BlogEmailGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('blog_unlocked');
    if (stored === 'true') setUnlocked(true);
  }, []);

  if (unlocked) return <>{children}</>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) {
      setError('Please fill in both fields');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/blog-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          firstName: firstName.trim(),
          country,
          articleSlug,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      localStorage.setItem('blog_unlocked', 'true');
      setUnlocked(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mt-8">
      {/* Fade overlay */}
      <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />

      <div className="relative z-20 bg-gradient-to-br from-[#1a365d] to-[#2d4a7a] rounded-2xl p-8 md:p-12 text-white text-center">
        <div className="text-3xl mb-3">📧</div>
        <h3 className="text-2xl font-bold mb-2">Get the Complete Guide + Tax Updates</h3>
        <p className="text-white/80 mb-6 max-w-md mx-auto">
          Want the full tax strategy guide plus quarterly updates when laws change?
        </p>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-[#1a365d] bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38b2ac]"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-[#1a365d] bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38b2ac]"
            required
          />
          {error && <p className="text-red-300 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-60"
          >
            {loading ? 'Unlocking...' : 'Continue Reading →'}
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
          <span>✅ Complete tax analysis</span>
          <span>✅ Quarterly law updates</span>
          <span>✅ Exclusive expat strategies</span>
          <span>✅ No spam, unsubscribe anytime</span>
        </div>
      </div>
    </div>
  );
}
