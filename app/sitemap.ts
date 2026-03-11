import { MetadataRoute } from 'next';

const COUNTRIES = [
  'portugal', 'spain', 'italy', 'greece', 'malta', 'cyprus', 'estonia', 'andorra',
  'singapore', 'uae', 'thailand', 'malaysia',
  'brazil', 'argentina', 'chile', 'uruguay', 'paraguay',
  'mexico', 'panama', 'costa-rica', 'el-salvador', 'colombia',
];

const BLOG_SLUGS = [
  'argentina-zero-tax-foreign-income',
  'costa-rica-tax-guide-expats',
  'digital-nomad-visa-comparison-2026',
  'mexico-taxes-expats',
  'middle-east-uae-bahrain-qatar-expats',
  'paraguay-residency-rules-2026',
  'portugal-ifici-tax-regime-2026',
  'portugal-taxes-expats',
  'thailand-tax-rules-expats',
  'uae-dubai-taxes-expats',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: 'https://reloca.ai', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://reloca.ai/plan-36', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://reloca.ai/blog', lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const countryPages: MetadataRoute.Sitemap = COUNTRIES.map((slug) => ({
    url: `https://reloca.ai/relocate-to/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `https://reloca.ai/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...countryPages, ...blogPages];
}
