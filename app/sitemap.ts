import { MetadataRoute } from 'next'

const COUNTRY_SLUGS = [
  'portugal', 'spain', 'italy', 'greece', 'malta', 'cyprus', 'estonia', 'andorra',
  'singapore', 'uae', 'thailand', 'malaysia',
  'brazil', 'argentina', 'chile', 'uruguay', 'paraguay', 'mexico', 'panama',
  'costa-rica', 'el-salvador', 'colombia', 'ecuador',
];

const COMPARISONS = [
  'portugal-vs-spain', 'thailand-vs-malaysia', 'portugal-vs-greece', 'uae-vs-singapore',
  'mexico-vs-colombia', 'portugal-vs-italy', 'thailand-vs-uae', 'spain-vs-italy',
  'costa-rica-vs-panama', 'brazil-vs-argentina', 'portugal-vs-uae', 'greece-vs-italy',
  'malaysia-vs-thailand', 'chile-vs-argentina', 'ecuador-vs-colombia', 'mexico-vs-costa-rica',
  'spain-vs-greece', 'malta-vs-cyprus', 'uruguay-vs-paraguay', 'estonia-vs-portugal',
];

const BLOG_SLUGS = [
  'moving-abroad-with-kids-2026',
  'cost-of-living-abroad-2026',
  'portugal-taxes-expats',
  'mexico-taxes-expats',
  'costa-rica-tax-guide-expats',
  'thailand-tax-rules-expats',
  'uae-dubai-taxes-expats',
  'paraguay-residency-rules-2026',
  'argentina-zero-tax-foreign-income',
  'middle-east-uae-bahrain-qatar-expats',
  'portugal-ifici-tax-regime-2026',
  'digital-nomad-visa-comparison-2026',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reloca.ai'
  
  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const countryPages: MetadataRoute.Sitemap = COUNTRY_SLUGS.map(slug => ({
    url: `${baseUrl}/relocate-to/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const comparisonPages: MetadataRoute.Sitemap = COMPARISONS.map(slug => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/plan-36`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/partners`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...blogPages,
    ...countryPages,
    ...comparisonPages,
  ]
}
