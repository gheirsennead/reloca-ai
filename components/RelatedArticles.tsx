import Link from 'next/link';

const ALL_ARTICLES = [
  { slug: 'portugal-taxes-expats', title: 'Complete Guide to Portugal Taxes for Expats (2026)', country: 'Portugal' },
  { slug: 'mexico-taxes-expats', title: 'Mexico Taxes for Expat Retirees — Complete 2026 Guide', country: 'Mexico' },
  { slug: 'costa-rica-tax-guide-expats', title: 'Costa Rica Tax Guide for Expats (2026)', country: 'Costa Rica' },
  { slug: 'thailand-tax-rules-expats', title: 'Thailand Tax Rules for Expats — 2026 Guide', country: 'Thailand' },
  { slug: 'uae-dubai-taxes-expats', title: 'UAE (Dubai) Taxes for Expats — Zero Tax Guide 2026', country: 'UAE' },
  { slug: 'paraguay-residency-rules-2026', title: 'Paraguay Residency Alert: 1-Year Exit Rule (2026)', country: 'Paraguay' },
  { slug: 'argentina-zero-tax-foreign-income', title: 'Argentina Zero Tax on Foreign Income: NRPP Guide', country: 'Argentina' },
  { slug: 'middle-east-uae-bahrain-qatar-expats', title: 'Middle East Expat Living 2026: UAE, Bahrain, Qatar', country: 'Middle East' },
  { slug: 'portugal-ifici-tax-regime-2026', title: 'Portugal IFICI vs NHR: Complete 2026 Tax Guide', country: 'Portugal' },
  { slug: 'digital-nomad-visa-comparison-2026', title: 'Best Digital Nomad Visas 2026: Country Comparison', country: 'Global' },
];

interface RelatedArticlesProps {
  currentSlug: string;
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const related = ALL_ARTICLES.filter(a => a.slug !== currentSlug).slice(0, 3);

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-bold text-[#1a365d] mb-6">Related Tax Guides</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {related.map(article => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl mb-2 block">
              {article.country === 'Portugal' ? '🇵🇹' :
               article.country === 'Mexico' ? '🇲🇽' :
               article.country === 'Costa Rica' ? '🇨🇷' :
               article.country === 'Thailand' ? '🇹🇭' :
               article.country === 'Paraguay' ? '🇵🇾' :
               article.country === 'Argentina' ? '🇦🇷' :
               article.country === 'Middle East' ? '🌍' :
               article.country === 'Global' ? '🌐' : '🇦🇪'}
            </span>
            <h4 className="font-semibold text-[#1a365d] text-sm leading-snug">{article.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
