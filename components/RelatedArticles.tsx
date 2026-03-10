import Link from 'next/link';

const ALL_ARTICLES = [
  { slug: 'portugal-taxes-expats', title: 'Complete Guide to Portugal Taxes for Expats (2026)', country: 'Portugal' },
  { slug: 'mexico-taxes-expats', title: 'Mexico Taxes for Expat Retirees — Complete 2026 Guide', country: 'Mexico' },
  { slug: 'costa-rica-tax-guide-expats', title: 'Costa Rica Tax Guide for Expats (2026)', country: 'Costa Rica' },
  { slug: 'thailand-tax-rules-expats', title: 'Thailand Tax Rules for Expats — 2026 Guide', country: 'Thailand' },
  { slug: 'uae-dubai-taxes-expats', title: 'UAE (Dubai) Taxes for Expats — Zero Tax Guide 2026', country: 'UAE' },
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
               article.country === 'Thailand' ? '🇹🇭' : '🇦🇪'}
            </span>
            <h4 className="font-semibold text-[#1a365d] text-sm leading-snug">{article.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
