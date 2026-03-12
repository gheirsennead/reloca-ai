import { BreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';
import { BlogLayout } from '@/components/BlogLayout';
import { BlogEmailGate } from '@/components/BlogEmailGate';
import { BlogCTA } from '@/components/BlogCTA';
import { RelatedArticles } from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Mexico Taxes for Expat Retirees — Complete 2026 Guide | Reloca.ai',
  description: 'Complete Mexico tax guide for expat retirees. Tax rates, exemptions, treaty benefits, and strategies for retirees. Updated March 2026.',
  keywords: ['mexico taxes for expats', 'mexico retirement taxes', 'mexico expat taxes', 'mexico tax rates 2026', 'mexico tax benefits'],
  openGraph: {
    title: 'Mexico Taxes for Expat Retirees — Complete 2026 Guide',
    description: 'Complete Mexico tax guide for expats. Tax rates, treaty benefits, and retirement strategies. Updated March 2026.',
    url: 'https://reloca.ai/blog/mexico-taxes-expats',
    type: 'article',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image.png', width: 1200, height: 630 }],
    publishedTime: '2026-03-10T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mexico Taxes for Expat Retirees — Complete 2026 Guide | Reloca.ai',
    description: "Complete Mexico tax guide for expat retirees. Tax rates, exemptions, treaty benefits, and strategies for retirees. Updated March 2026.",
    images: ['https://reloca.ai/images/og-image.png'],
  },
};

export default function MexicoTaxesArticle() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mexico Taxes for Expat Retirees — Complete 2026 Guide',
    description: 'Complete Mexico tax guide for expats. Tax rates, exemptions, treaty benefits, and retirement strategies.',
    datePublished: '2026-03-10',
    dateModified: '2026-03-10',
    author: { '@type': 'Organization', name: 'Reloca.ai' },
    publisher: { '@type': 'Organization', name: 'Reloca.ai', logo: { '@type': 'ImageObject', url: 'https://reloca.ai/images/reloca-logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://reloca.ai/blog/mexico-taxes-expats' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={[{ name: 'Blog', url: 'https://reloca.ai/blog' }, { name: jsonLd.headline, url: 'https://reloca.ai/blog/mexico-taxes-expats' }]} />      <BlogLayout title="Mexico Taxes for Expat Retirees — Complete 2026 Guide" publishDate="March 10, 2026" readTime="9 min read">

        {/* ===== PUBLIC SECTION (60%) ===== */}

        <p>
          Mexico remains one of the most tax-friendly countries for expat retirees, but the rules are more nuanced than most realize. With over 1.6 million expats calling Mexico home, understanding the tax system is critical for protecting your retirement income.
        </p>
        <p>
          This complete guide covers Mexico&apos;s tax system for expats, including recent changes, treaty benefits, and optimization strategies that could save you thousands annually.
        </p>

        <h2>Mexico Tax Residency Rules</h2>
        <p>
          Mexico uses two tests to determine tax residency, and understanding which applies to you is the foundation of your tax planning:
        </p>
        <ul>
          <li><strong>183-day rule:</strong> If you spend 183 or more days in Mexico during a calendar year, you&apos;re considered a tax resident. Days of partial presence count as full days.</li>
          <li><strong>Center of vital interests:</strong> Even with fewer than 183 days, Mexico can claim you as a resident if your primary home is in Mexico, or if more than 50% of your income is sourced from Mexico.</li>
        </ul>
        <p>
          <strong>Strategic tip:</strong> Many retirees split time between Mexico and the US. If you stay under 183 days and don&apos;t establish a center of vital interests, you&apos;re taxed only on Mexico-sourced income as a non-resident — a potentially significant advantage.
        </p>

        <h2>Mexico Tax Rates and Structure</h2>
        <p>Mexico&apos;s progressive income tax rates for residents range from 1.92% to 35%:</p>
        <ul>
          <li><strong>Up to MXN 8,952:</strong> 1.92%</li>
          <li><strong>MXN 8,952 – 75,984:</strong> 6.4%</li>
          <li><strong>MXN 75,984 – 133,536:</strong> 10.88%</li>
          <li><strong>MXN 133,536 – 155,229:</strong> 16%</li>
          <li><strong>MXN 155,229 – 185,852:</strong> 17.92%</li>
          <li><strong>MXN 185,852 – 374,837:</strong> 21.36%</li>
          <li><strong>MXN 374,837 – 590,796:</strong> 23.52%</li>
          <li><strong>MXN 590,796 – 1,127,926:</strong> 30%</li>
          <li><strong>MXN 1,127,926 – 1,503,902:</strong> 32%</li>
          <li><strong>MXN 1,503,902 – 4,511,707:</strong> 34%</li>
          <li><strong>Over MXN 4,511,707:</strong> 35%</li>
        </ul>
        <p>
          At current exchange rates (~17 MXN per USD), a US income of $100,000 would face an effective rate of roughly 25-28%. This is comparable to or slightly lower than many US states, but Mexico&apos;s dramatically lower cost of living means your after-tax purchasing power is significantly higher.
        </p>

        <h2>US-Mexico Tax Treaty Benefits</h2>
        <p>
          The US-Mexico tax treaty is one of the most comprehensive in the Western Hemisphere. Key provisions for expat retirees:
        </p>
        <ul>
          <li><strong>Social Security:</strong> Under the treaty, US Social Security payments are generally taxable only in the US if you&apos;re a US citizen or permanent resident. This is a major benefit — your Social Security income can be tax-free in Mexico.</li>
          <li><strong>Pension income:</strong> Private pensions and IRA distributions may be taxable in both countries, but the Foreign Tax Credit prevents double taxation.</li>
          <li><strong>Investment income:</strong> Dividends face a maximum 10% withholding rate under the treaty (vs. 35% statutory rate). Interest income has a 15% maximum withholding.</li>
          <li><strong>Real estate income:</strong> Rental income from Mexican property is taxed in Mexico. A flat 25% on gross rental income (non-resident) or progressive rates on net income (resident) — the net income option is almost always better.</li>
        </ul>

        <BlogCTA country="Mexico" />

        {/* ===== GATED SECTION (40%) ===== */}

        <BlogEmailGate country="Mexico" articleSlug="mexico-taxes-expats">

          <h2>Retirement Income Taxation</h2>
          <h3>Social Security Benefits</h3>
          <p>
            This is where Mexico shines for US retirees. Under the tax treaty, US Social Security benefits paid to US citizens living in Mexico are taxable only in the US. Since the US taxes Social Security at a maximum of 85% inclusion, and many retirees fall in lower brackets, the effective tax rate on Social Security can be very low — sometimes zero.
          </p>
          <h3>401(k) and IRA Distributions</h3>
          <p>
            Traditional IRA and 401(k) distributions are considered pension income under the treaty. As a Mexican resident, these are taxable in Mexico at progressive rates. However, you can claim a Foreign Tax Credit on your US return for Mexican taxes paid, avoiding double taxation.
          </p>
          <h3>Roth IRA Considerations</h3>
          <p>
            Mexico doesn&apos;t recognize the tax-free status of Roth IRAs. Distributions may be taxable in Mexico even though they&apos;re tax-free in the US. This is a critical planning point — consider the timing and structure of Roth conversions carefully before establishing Mexican residency.
          </p>

          <h2>Real Estate and Investment Taxes</h2>
          <h3>Property Tax (Predial)</h3>
          <p>
            Mexican property taxes (predial) are remarkably low — typically 0.1% to 0.3% of assessed value annually. A $300,000 home might have an annual tax bill of $300-900. This is one of Mexico&apos;s biggest advantages for retirees.
          </p>
          <h3>Capital Gains on Property</h3>
          <p>
            Selling Mexican property triggers a capital gains tax of up to 35% on the profit. However, your primary residence is exempt from the first ~$500,000 MXN (~$29,000 USD) of gains, and there are deductions for improvements and inflation adjustments. Non-residents face a flat 25% on gross sale price — almost always worse than the resident rate on net gains.
          </p>
          <h3>Fideicomiso (Bank Trust) Considerations</h3>
          <p>
            Foreigners buying property within 50km of the coast or 100km of a border must use a fideicomiso (bank trust). Annual fees run $500-1,500 USD. The trust doesn&apos;t create separate tax obligations — you&apos;re still taxed as the beneficial owner.
          </p>

          <h2>Common Mistakes and Optimization</h2>
          <ol>
            <li><strong>Ignoring the 183-day rule.</strong> Many retirees assume they&apos;re not Mexican tax residents because they have a US address. If you spend 183+ days in Mexico, you&apos;re a resident regardless of other factors.</li>
            <li><strong>Not claiming treaty benefits.</strong> The Social Security exemption alone can save thousands annually. File the proper forms with both countries.</li>
            <li><strong>Roth IRA surprise.</strong> Moving to Mexico without converting traditional accounts to Roth first (when beneficial) is a common and costly mistake.</li>
            <li><strong>RFC registration delays.</strong> Getting your RFC (tax ID) early gives you access to better tax rates on services and purchases. Don&apos;t wait until tax filing season.</li>
            <li><strong>Ignoring Mexican deductions.</strong> Medical expenses, charitable donations, and mortgage interest are deductible in Mexico. Many expats don&apos;t claim them.</li>
          </ol>

          <h2>Frequently Asked Questions</h2>
          <h3>Do I need to file taxes in Mexico as a retiree?</h3>
          <p>If you&apos;re a Mexican tax resident (183+ days), yes. You must file an annual return (declaración anual) by April 30. Even non-residents with Mexico-sourced income may need to file.</p>

          <h3>Is my US pension taxed in Mexico?</h3>
          <p>Yes, if you&apos;re a Mexican tax resident. But the Foreign Tax Credit on your US return prevents double taxation. The net effect depends on comparing Mexican and US rates for your income level.</p>

          <h3>Can I deduct medical expenses in Mexico?</h3>
          <p>Yes. Medical, dental, and hospital expenses (including insurance premiums) are deductible up to certain limits. This is particularly valuable for retirees with significant healthcare costs.</p>

          <h3>What about Mexican investment accounts?</h3>
          <p>Interest from Mexican bank accounts is subject to a withholding tax (currently around 0.08% of average balance). This withholding is creditable against your annual tax liability.</p>

          <h2>Conclusion</h2>
          <p>
            Mexico offers an exceptional combination of low taxes, affordable living, and proximity to the US. The tax treaty protects Social Security income, property taxes are minimal, and the cost of living can stretch your retirement income significantly further.
          </p>
          <p>
            The key is planning ahead: understand your residency status, claim all treaty benefits, and coordinate your US and Mexican filings carefully. A few hours of tax planning before your move can save you thousands every year.
          </p>

          <BlogCTA country="Mexico" />
          <RelatedArticles currentSlug="mexico-taxes-expats" />

        </BlogEmailGate>
      </BlogLayout>
    </>
  );
}
