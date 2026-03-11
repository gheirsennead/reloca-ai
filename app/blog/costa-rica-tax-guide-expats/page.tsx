import type { Metadata } from 'next';
import { BlogLayout } from '@/components/BlogLayout';
import { BlogEmailGate } from '@/components/BlogEmailGate';
import { BlogCTA } from '@/components/BlogCTA';
import { RelatedArticles } from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Costa Rica Tax Guide for Expats (2026 Complete Analysis) | Reloca.ai',
  description: 'Complete Costa Rica tax guide for expats. Learn about territorial taxation, tax rates, exemptions, and strategies. Updated 2026.',
  keywords: ['costa rica taxes for expats', 'costa rica tax rates', 'costa rica expat taxes', 'costa rica territorial tax'],
  alternates: {
    canonical: 'https://reloca.ai/blog/costa-rica-tax-guide-expats',
  },
  openGraph: {
    title: 'Costa Rica Tax Guide for Expats (2026 Complete Analysis)',
    description: 'Costa Rica territorial tax system explained. Tax rates, exemptions, and strategies for expats. Updated 2026.',
    url: 'https://reloca.ai/blog/costa-rica-tax-guide-expats',
    type: 'article',
    publishedTime: '2026-03-10T00:00:00Z',
  },
};

export default function CostaRicaTaxArticle() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Costa Rica Tax Guide for Expats (2026 Complete Analysis)',
    description: 'Complete Costa Rica tax guide for expats. Territorial taxation, tax rates, exemptions, and strategies.',
    datePublished: '2026-03-10',
    dateModified: '2026-03-10',
    author: { '@type': 'Organization', name: 'Reloca.ai' },
    publisher: { '@type': 'Organization', name: 'Reloca.ai', url: 'https://reloca.ai' },
    mainEntityOfPage: 'https://reloca.ai/blog/costa-rica-tax-guide-expats',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogLayout title="Costa Rica Tax Guide for Expats (2026 Complete Analysis)" publishDate="March 10, 2026" readTime="9 min read">

        {/* ===== PUBLIC SECTION (60%) ===== */}

        <p>
          Costa Rica&apos;s territorial tax system makes it one of the most attractive destinations for expats with foreign income. Unlike most countries that tax worldwide income, Costa Rica only taxes income earned <em>within</em> its borders. For remote workers, retirees, and investors with foreign income streams, this is a game-changer.
        </p>
        <p>
          But the territorial system isn&apos;t as simple as &quot;foreign income = tax-free.&quot; This guide breaks down exactly how it works, what&apos;s taxable, and how to structure your finances for maximum advantage.
        </p>

        <h2>Territorial Tax System Explained</h2>
        <p>
          Costa Rica&apos;s tax system operates on a simple principle: <strong>only income sourced within Costa Rica is subject to Costa Rican income tax.</strong> This means:
        </p>
        <ul>
          <li><strong>Remote work for a foreign employer:</strong> Generally not taxable in Costa Rica, even if you perform the work while physically in the country.</li>
          <li><strong>US pension and Social Security:</strong> Not taxable in Costa Rica — this income is sourced from the US.</li>
          <li><strong>Foreign investment income:</strong> Dividends, interest, and capital gains from non-Costa Rican investments are not taxable.</li>
          <li><strong>Rental income from a US property:</strong> Not taxable in Costa Rica.</li>
          <li><strong>Rental income from a Costa Rican property:</strong> Taxable — this is Costa Rican-sourced income.</li>
        </ul>
        <p>
          <strong>Important caveat:</strong> There have been ongoing discussions about Costa Rica potentially shifting to a worldwide taxation system. While no legislation has passed as of 2026, this is worth monitoring. Any change would likely include a transition period.
        </p>

        <h2>What Income is Taxable in Costa Rica</h2>
        <p>Understanding the territorial boundary is critical. Here&apos;s what <em>is</em> taxable:</p>
        <ul>
          <li><strong>Employment by a Costa Rican company</strong> — salaries and benefits are fully taxable</li>
          <li><strong>Business income earned in Costa Rica</strong> — if your clients are Costa Rican or your business operates locally</li>
          <li><strong>Costa Rican rental income</strong> — rental proceeds from properties within Costa Rica</li>
          <li><strong>Capital gains on Costa Rican assets</strong> — including real estate and local business sales</li>
          <li><strong>Interest from Costa Rican bank accounts</strong> — subject to withholding tax</li>
        </ul>
        <p>
          The key question for remote workers: where is the income &quot;sourced&quot;? If you work remotely for a US company, paid in USD to a US bank account, the income source is generally the US — not Costa Rica. However, if you provide services <em>to</em> Costa Rican clients, even remotely, the income may be Costa Rican-sourced.
        </p>

        <h2>Costa Rica Tax Rates and Brackets</h2>
        <p>For income that <em>is</em> taxable in Costa Rica, rates are relatively moderate:</p>
        <h3>Employment Income (2026)</h3>
        <ul>
          <li><strong>Up to CRC 4,181,000/year (~$7,600 USD):</strong> 0% (exempt)</li>
          <li><strong>CRC 4,181,000 – 6,244,000:</strong> 10%</li>
          <li><strong>CRC 6,244,000 – 10,414,000:</strong> 15%</li>
          <li><strong>CRC 10,414,000 – 20,872,000:</strong> 20%</li>
          <li><strong>Over CRC 20,872,000 (~$38,000 USD):</strong> 25%</li>
        </ul>
        <h3>Self-Employment / Business Income</h3>
        <ul>
          <li><strong>Up to CRC 4,264,000:</strong> 0%</li>
          <li><strong>CRC 4,264,000 – 6,386,000:</strong> 10%</li>
          <li><strong>CRC 6,386,000 – 10,646,000:</strong> 15%</li>
          <li><strong>CRC 10,646,000 – 21,314,000:</strong> 20%</li>
          <li><strong>Over CRC 21,314,000:</strong> 25%</li>
        </ul>
        <p>
          The maximum rate of 25% is notably lower than the US (37%), Portugal (48%), or Mexico (35%). Combined with the territorial system, most expats with primarily foreign income pay little to no Costa Rican tax.
        </p>

        <BlogCTA country="Costa Rica" />

        {/* ===== GATED SECTION (40%) ===== */}

        <BlogEmailGate country="Costa Rica" articleSlug="costa-rica-tax-guide-expats">

          <h2>US-Costa Rica Tax Coordination</h2>
          <p>
            There is <strong>no tax treaty between the US and Costa Rica.</strong> This is important because it means:
          </p>
          <ul>
            <li>No reduced withholding rates on cross-border payments</li>
            <li>No mutual agreement procedure for disputes</li>
            <li>No automatic exchange of tax information (though FATCA still applies)</li>
            <li>The Foreign Tax Credit is still available to prevent double taxation on Costa Rican-sourced income</li>
          </ul>
          <p>
            The lack of a tax treaty actually simplifies things for most expats: since Costa Rica doesn&apos;t tax your foreign income, there&apos;s minimal overlap to coordinate. Your US filing continues largely unchanged — you still report worldwide income to the IRS and may qualify for the Foreign Earned Income Exclusion (FEIE) if you meet the bona fide residence or physical presence test.
          </p>

          <h2>Residency Requirements and Tax Implications</h2>
          <h3>Residency Visa Options</h3>
          <ul>
            <li><strong>Pensionado (Retiree) Visa:</strong> Requires $1,000/month in pension or retirement income. One of the easiest residency visas in the Americas.</li>
            <li><strong>Rentista Visa:</strong> Requires $2,500/month in stable income from investments or remote work for at least 2 years.</li>
            <li><strong>Inversionista (Investor) Visa:</strong> Requires a $150,000+ investment in Costa Rican real estate or business.</li>
            <li><strong>Digital Nomad Visa:</strong> Introduced for remote workers — requires $3,000/month income and provides a 1-year stay with possible renewal.</li>
          </ul>
          <h3>Tax Residency vs. Immigration Residency</h3>
          <p>
            Importantly, tax residency and immigration residency are separate concepts in Costa Rica. You can be an immigration resident (with a cédula) without being a tax resident, and vice versa. Tax residency is triggered by having Costa Rican-sourced income or spending more than 183 days in the country with economic ties.
          </p>

          <h2>Real Estate and Business Taxes</h2>
          <h3>Property Tax</h3>
          <p>
            Costa Rica&apos;s property tax rate is a flat 0.25% of the registered property value annually. A $300,000 property would cost about $750/year in property taxes — among the lowest in the Americas.
          </p>
          <h3>Luxury Home Tax</h3>
          <p>
            Properties valued above approximately $250,000 USD face an additional &quot;solidarity tax&quot; (Impuesto Solidario) ranging from 0.25% to 0.55% on the value above the threshold. Even with this additional tax, total property tax remains very low by international standards.
          </p>
          <h3>Corporation Tax</h3>
          <p>
            Many expats hold property through a Costa Rican S.A. (corporation). Corporate tax rates are 5-30% on Costa Rican-sourced income. Inactive corporations still face an annual registration tax. Note: the government has been cracking down on shell companies with no real activity — make sure your structure has legitimate business purpose.
          </p>
          <h3>Transfer Tax</h3>
          <p>
            Buying property triggers a 1.5% transfer tax on the registered value plus legal fees. This is significantly lower than most European countries (Portugal charges 6-8% IMT on property purchases).
          </p>

          <h2>Frequently Asked Questions</h2>
          <h3>Is remote work income taxed in Costa Rica?</h3>
          <p>Generally no, if you work for a foreign employer, are paid in foreign currency, and the work benefits foreign clients. The income source is considered foreign. However, if you provide services to Costa Rican clients, it may be locally sourced.</p>

          <h3>Do I need to file a Costa Rican tax return?</h3>
          <p>Only if you have Costa Rican-sourced income. If all your income is foreign-sourced, there&apos;s no filing obligation. However, having a local tax filing can be helpful for residency renewals and financial transactions.</p>

          <h3>How does Costa Rica&apos;s healthcare affect my taxes?</h3>
          <p>The Caja (CCSS) public healthcare system requires contributions of about 10-11% of reported income if employed locally. Retirees and rentistas can join the Caja for a monthly fee based on income — typically $75-150/month for excellent public healthcare.</p>

          <h3>Will Costa Rica switch to worldwide taxation?</h3>
          <p>It&apos;s been discussed but no legislation has passed. The OECD has been pushing for this change. If it happens, expect a transition period and grandfathering provisions. Monitor this situation with your tax advisor.</p>

          <h2>Conclusion</h2>
          <p>
            Costa Rica&apos;s territorial tax system is one of its most powerful attractions for expats. Combined with low property taxes, affordable healthcare, and a stable democracy, it offers an excellent quality of life at a fraction of what most expats expect to pay.
          </p>
          <p>
            The key to maximizing Costa Rica&apos;s tax benefits: keep your income foreign-sourced, understand the territorial boundary, and plan your residency status carefully. The difference between smart planning and winging it can be tens of thousands of dollars annually.
          </p>

          <BlogCTA country="Costa Rica" />
          <RelatedArticles currentSlug="costa-rica-tax-guide-expats" />

        </BlogEmailGate>
      </BlogLayout>
    </>
  );
}
