import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tax Guides for Expats | Reloca.ai Blog',
  description: 'Expert tax guides for expats relocating abroad. Portugal, Mexico, Costa Rica, Thailand, UAE — updated 2026 tax strategies and optimization tips.',
  openGraph: {
    title: 'Tax Guides for Expats | Reloca.ai Blog',
    description: 'Expert tax guides for expats relocating abroad. Updated 2026 tax strategies.',
    url: 'https://reloca.ai/blog',
    type: 'website',
  },
};

const articles = [
  {
    slug: 'portugal-taxes-expats',
    flag: '🇵🇹',
    title: 'Complete Guide to Portugal Taxes for Expats (2026 Update)',
    excerpt: 'Portugal\'s tax system changed dramatically in 2024 when NHR was replaced by IFICI. Learn about the new regime, tax rates, and optimization strategies for expats.',
    readTime: '10 min read',
  },
  {
    slug: 'mexico-taxes-expats',
    flag: '🇲🇽',
    title: 'Mexico Taxes for Expat Retirees — Complete 2026 Guide',
    excerpt: 'Mexico remains one of the most tax-friendly countries for expat retirees. Discover tax rates, treaty benefits, and strategies to maximize your retirement income.',
    readTime: '9 min read',
  },
  {
    slug: 'costa-rica-tax-guide-expats',
    flag: '🇨🇷',
    title: 'Costa Rica Tax Guide for Expats (2026 Complete Analysis)',
    excerpt: 'Costa Rica\'s territorial tax system makes it attractive for expats with foreign income. Understand what\'s taxable, what\'s not, and how to optimize.',
    readTime: '9 min read',
  },
  {
    slug: 'thailand-tax-rules-expats',
    flag: '🇹🇭',
    title: 'Thailand Tax Rules for Expats — 2026 Complete Guide',
    excerpt: 'Thailand\'s tax system can be favorable for expats, especially those with foreign-sourced income. Recent changes require careful planning.',
    readTime: '9 min read',
  },
  {
    slug: 'uae-dubai-taxes-expats',
    flag: '🇦🇪',
    title: 'UAE (Dubai) Taxes for Expats — Zero Tax Paradise Guide 2026',
    excerpt: 'The UAE offers zero personal income tax, making it incredibly attractive. But US tax obligations and residency requirements create complexity.',
    readTime: '9 min read',
  },
  {
    slug: 'paraguay-residency-rules-2026',
    flag: '🇵🇾',
    title: 'Paraguay Residency Alert: 1-Year Exit Rule Enforcement (2026)',
    excerpt: 'Paraguay is enforcing the 1-year exit rule for permanent residents. If you got residency in 2023-2025, your status may be at risk.',
    readTime: '10 min read',
  },
  {
    slug: 'argentina-zero-tax-foreign-income',
    flag: '🇦🇷',
    title: 'Argentina Zero Tax on Foreign Income: NRPP Status Explained (2026)',
    excerpt: 'Argentina\'s NRPP status lets expats pay zero tax on foreign income for 5 years. Combined with low living costs and the new digital nomad visa.',
    readTime: '11 min read',
  },
  {
    slug: 'middle-east-uae-bahrain-qatar-expats',
    flag: '🌍',
    title: 'Middle East Expat Living 2026: UAE, Bahrain, Qatar Tax-Free Guide',
    excerpt: 'Complete guide to tax-free expat life in UAE, Bahrain, and Qatar. Honest assessment of opportunities and risks amid regional tensions.',
    readTime: '12 min read',
  },
  {
    slug: 'portugal-ifici-tax-regime-2026',
    flag: '🇵🇹',
    title: 'Portugal IFICI vs NHR: Complete 2026 Tax Guide for Expats',
    excerpt: 'Portugal\'s IFICI tax regime replaced NHR in 2024. Most online guides are outdated. Here\'s what changed, who qualifies, and how to apply.',
    readTime: '11 min read',
  },
  {
    slug: 'digital-nomad-visa-comparison-2026',
    flag: '🌐',
    title: 'Best Digital Nomad Visas 2026: Complete Country Comparison',
    excerpt: '47 countries now offer digital nomad visas. Which ones are worth it? Visa costs, tax treatment, income requirements, and paths to residency compared.',
    readTime: '14 min read',
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#1a365d] font-bold text-xl">
            🌐 Reloca.ai
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#1a365d] transition-colors">Home</Link>
            <Link href="/plan-36" className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Take the Quiz
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7a] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tax Guides for Expats</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Expert analysis of tax rules, residency requirements, and optimization strategies for the world&apos;s top expat destinations.
          </p>
        </div>
      </header>

      {/* Article Grid */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-50 p-6 text-center">
                <span className="text-5xl">{article.flag}</span>
              </div>
              <div className="p-6">
                <h2 className="font-bold text-[#1a365d] text-lg leading-snug group-hover:text-[#38b2ac] transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{article.readTime}</span>
                  <span className="text-[#38b2ac] font-medium group-hover:underline">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#38b2ac]/10 to-[#1a365d]/10 border border-[#38b2ac]/20 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-3">
            Get Your Personalized Tax Analysis
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Answer 36 questions about your situation and our AI will create a customized relocation report covering taxes, visas, cost of living, and more.
          </p>
          <Link
            href="/plan-36"
            className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Take the Free Quiz →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Reloca.ai — AI-Powered Relocation Intelligence</p>
        </div>
      </footer>
    </div>
  );
}
