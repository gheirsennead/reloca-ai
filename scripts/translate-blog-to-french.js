#!/usr/bin/env node

/**
 * Automated Blog Translation Script
 * Translates all English blog articles to French for SEO benefits
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Article mappings (English slug -> French slug)
const ARTICLE_MAPPINGS = {
  'moving-abroad-with-kids-2026': 'demenager-etranger-enfants-2026',
  'cost-of-living-abroad-2026': 'cout-vie-etranger-2026',
  'portugal-taxes-expats': 'taxes-portugal-expatries', // Already done
  'mexico-taxes-expats': 'taxes-mexique-expatries',
  'costa-rica-tax-guide-expats': 'guide-fiscal-costa-rica-expatries',
  'thailand-tax-rules-expats': 'regles-fiscales-thailande-expatries',
  'paraguay-residency-rules-2026': 'regles-residency-paraguay-2026',
  'uae-dubai-taxes-expats': 'taxes-uae-dubai-expatries',
  'middle-east-uae-bahrain-qatar-expats': 'moyen-orient-uae-bahrein-qatar-expatries',
  'digital-nomad-visa-comparison-2026': 'comparaison-visa-nomade-digital-2026',
  'argentina-zero-tax-foreign-income': 'argentine-zero-taxe-revenus-etrangers',
  'tax-havens-retirement-2026': 'paradis-fiscaux-retraites-2026',
  'quit-job-moved-abroad-25-years-expat': 'quit-travail-demenage-etranger-25-ans-expatrie',
};

// French SEO keywords for each topic
const SEO_KEYWORDS = {
  'taxes': ['impôts expatriés', 'fiscalité étrangère', 'optimisation fiscale'],
  'visa': ['visa expatrié', 'résidence étrangère', 'immigration'],
  'cost-of-living': ['coût de la vie', 'budget expatrié', 'vivre à l\'étranger'],
  'retirement': ['retraite à l\'étranger', 'pension expatrié', 'retraite fiscale'],
  'family': ['famille expatriée', 'enfants à l\'étranger', 'scolarité internationale'],
};

function createFrenchArticleStructure(englishSlug, frenchSlug) {
  const frenchDir = `app/fr/blog/${frenchSlug}`;
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(frenchDir)) {
    fs.mkdirSync(frenchDir, { recursive: true });
    console.log(`✅ Created directory: ${frenchDir}`);
  }

  // Basic template - will be filled by AI translation
  const template = `import { BreadcrumbSchema } from '@/components/StructuredData';
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
    url: 'https://reloca.ai/fr/blog/${frenchSlug}',
    type: 'article',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ${frenchSlug.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)).join('')}Article() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://reloca.ai/fr' },
          { name: 'Blog', url: 'https://reloca.ai/fr/blog' },
          { name: '[TO BE TRANSLATED]', url: 'https://reloca.ai/fr/blog/${frenchSlug}' },
        ]}
      />
      
      <BlogLayout>
        <article className="max-w-4xl mx-auto px-4 py-16">
          {/* Content will be AI-translated */}
          <div>Translation in progress...</div>
        </article>
      </BlogLayout>
    </>
  );
}`;

  const filePath = `${frenchDir}/page.tsx`;
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template);
    console.log(`✅ Created template: ${filePath}`);
  }
}

function getAllEnglishArticles() {
  const blogDir = 'app/blog';
  const articles = [];
  
  if (!fs.existsSync(blogDir)) {
    console.log('❌ English blog directory not found');
    return articles;
  }

  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  
  entries.forEach(entry => {
    if (entry.isDirectory() && entry.name !== 'page.tsx') {
      const articlePath = path.join(blogDir, entry.name, 'page.tsx');
      if (fs.existsSync(articlePath)) {
        articles.push({
          slug: entry.name,
          path: articlePath,
          frenchSlug: ARTICLE_MAPPINGS[entry.name] || entry.name + '-fr'
        });
      }
    }
  });

  return articles;
}

async function translateArticle(article) {
  console.log(`\n🔄 Processing: ${article.slug} -> ${article.frenchSlug}`);
  
  // Skip if already exists (like Portugal taxes)
  const frenchPath = `app/fr/blog/${article.frenchSlug}/page.tsx`;
  if (fs.existsSync(frenchPath) && fs.readFileSync(frenchPath, 'utf8').length > 1000) {
    console.log(`⏭️  Skipping ${article.frenchSlug} - already exists and substantial`);
    return;
  }

  // Create directory structure
  createFrenchArticleStructure(article.slug, article.frenchSlug);
  
  console.log(`✅ Setup complete for ${article.frenchSlug}`);
}

async function main() {
  console.log('🇫🇷 Starting French Blog Translation Setup...\n');
  
  // Get all English articles
  const articles = getAllEnglishArticles();
  console.log(`📚 Found ${articles.length} English articles to process`);

  if (articles.length === 0) {
    console.log('❌ No articles found to translate');
    return;
  }

  // Process each article
  for (const article of articles) {
    await translateArticle(article);
  }

  console.log('\n🎉 Blog translation setup complete!');
  console.log('\n📋 Next Steps:');
  console.log('1. Each French article template has been created');
  console.log('2. Use AI to translate content for each article');
  console.log('3. Update metadata and SEO keywords');
  console.log('4. Test French blog navigation');
  
  console.log('\n🔗 French Blog URL: https://reloca.ai/fr/blog');
}

// Run the script
main().catch(console.error);