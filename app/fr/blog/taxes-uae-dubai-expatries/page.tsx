import { BreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';
import { BlogLayout } from '@/components/BlogLayout';
import { BlogEmailGate } from '@/components/BlogEmailGate';
import { BlogCTA } from '@/components/BlogCTA';
import { RelatedArticles } from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: '[TO BE TRANSLATED]',
  description: '[TO BE TRANSLATED]',
  keywords: [],
  openGraph: {
    title: '[TO BE TRANSLATED]',
    description: '[TO BE TRANSLATED]',
    url: 'https://reloca.ai/fr/blog/taxes-uae-dubai-expatries',
    type: 'article',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TaxesUaeDubaiExpatriesArticle() {
  return (
    &lt;>
      &lt;BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://reloca.ai/fr' },
          { name: 'Blog', url: 'https://reloca.ai/fr/blog' },
          { name: '[TO BE TRANSLATED]', url: 'https://reloca.ai/fr/blog/taxes-uae-dubai-expatries' },
        ]}
      />
      
      &lt;BlogLayout>
        &lt;article className="max-w-4xl mx-auto px-4 py-16">
          {/* Content will be AI-translated */}
          &lt;div&gt;Translation in progress...</div>
        </article>
      </BlogLayout>
    </>
  );
}