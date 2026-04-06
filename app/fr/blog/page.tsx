import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { FrenchBlogTracking } from '@/components/FrenchBlogTracking';

export const metadata: Metadata = {
  title: 'Guides Fiscaux pour Expatriés | Blog Reloca.ai',
  description: 'Guides fiscaux experts pour expatriés relocalisés à l\'étranger. Portugal, Mexique, Costa Rica, Thaïlande, UAE — stratégies fiscales 2026 mises à jour.',
  openGraph: {
    title: 'Guides Fiscaux pour Expatriés | Blog Reloca.ai',
    description: 'Guides fiscaux experts pour expatriés relocalisés à l\'étranger. Stratégies fiscales 2026 mises à jour.',
    url: 'https://reloca.ai/fr/blog',
    type: 'website',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides Fiscaux pour Expatriés | Blog Reloca.ai',
    description: 'Guides fiscaux experts pour expatriés relocalisés à l\'étranger. Stratégies fiscales 2026 mises à jour.',
    images: ['https://reloca.ai/images/og-image.png'],
  },
};

const articles = [
  {
    slug: 'demenager-etranger-enfants-2026',
    flag: '👨‍👩‍👧‍👦',
    title: 'Déménager à l\'Étranger avec des Enfants en 2026 : Le Guide Complet de Relocalisation Familiale',
    excerpt: 'Vous planifiez un déménagement familial à l\'étranger ? Données réelles sur les écoles, coûts, soins de santé et visas pour les 7 meilleurs pays en 2026.',
    readTime: '12 min de lecture',
  },
  {
    slug: 'cout-vie-etranger-2026',
    flag: '💰',
    title: 'Coût de la Vie à l\'Étranger 2026 : Chiffres Réels de 15 Pays (Pas les Trucs Dépassés)',
    excerpt: 'Données vérifiées de coût de la vie 2026 pour 15 pays. Budgets mensuels pour célibataires, couples et familles — pas des moyennes Numbeo.',
    readTime: '14 min de lecture',
  },
  {
    slug: 'taxes-portugal-expatries',
    flag: '🇵🇹',
    title: 'Guide Complet des Taxes au Portugal pour les Expatriés (Mise à Jour 2026)',
    excerpt: 'Le système fiscal portugais a changé dramatiquement en 2024 quand NHR a été remplacé par IFICI. Découvrez le nouveau régime, taux d\'imposition et stratégies d\'optimisation.',
    readTime: '10 min de lecture',
  },
  {
    slug: 'taxes-mexique-expatries',
    flag: '🇲🇽',
    title: 'Taxes au Mexique pour les Retraités Expatriés — Guide Complet 2026',
    excerpt: 'Le Mexique reste l\'un des pays les plus favorables fiscalement pour les retraités expatriés. Découvrez les taux d\'imposition, avantages de traité et stratégies.',
    readTime: '9 min de lecture',
  },
  {
    slug: 'guide-fiscal-costa-rica-expatries',
    flag: '🇨🇷',
    title: 'Guide Fiscal du Costa Rica pour les Expatriés 2026',
    excerpt: 'Le Costa Rica offre un système fiscal territorial — vous ne payez que sur les revenus locaux. Guide complet des taux, exemptions et stratégies d\'optimisation.',
    readTime: '8 min de lecture',
  },
  {
    slug: 'regles-fiscales-thailande-expatries',
    flag: '🇹🇭',
    title: 'Règles Fiscales de la Thaïlande pour les Expatriés (Mise à Jour 2026)',
    excerpt: 'La Thaïlande a introduit de nouvelles règles fiscales en 2024. Découvrez comment les changements affectent les expatriés et les stratégies d\'optimisation.',
    readTime: '11 min de lecture',
  },
  {
    slug: 'regles-residency-paraguay-2026',
    flag: '🇵🇾',
    title: 'Règles de Résidence au Paraguay 2026 : Le Guide de l\'Expatrié',
    excerpt: 'Le Paraguay offre un chemin de résidence simple et 0% d\'impôt sur les revenus étrangers. Guide mis à jour des exigences, processus et avantages.',
    readTime: '7 min de lecture',
  },
  {
    slug: 'taxes-uae-dubai-expatries',
    flag: '🇦🇪',
    title: 'Taxes UAE/Dubai pour les Expatriés — Guide Fiscal Complet 2026',
    excerpt: 'Les EAU maintiennent 0% d\'impôt sur le revenu personnel, mais ont introduit la TVA et l\'impôt sur les sociétés. Guide complet pour les expatriés.',
    readTime: '9 min de lecture',
  },
  {
    slug: 'moyen-orient-uae-bahrein-qatar-expatries',
    flag: '🏜️',
    title: 'Moyen-Orient pour les Expatriés : UAE vs Bahreïn vs Qatar (Comparaison 2026)',
    excerpt: 'Comparaison complète des trois destinations du Golfe. Taxes, visas, coût de la vie et qualité de vie pour les expatriés.',
    readTime: '13 min de lecture',
  },
  {
    slug: 'comparaison-visa-nomade-digital-2026',
    flag: '💻',
    title: 'Comparaison des Visas de Nomade Digital 2026 : 12 Pays Analysés',
    excerpt: 'Analyse complète des visas de nomade digital. Exigences, coûts, avantages fiscaux et qualité de vie pour 12 destinations populaires.',
    readTime: '15 min de lecture',
  },
  {
    slug: 'argentine-zero-taxe-revenus-etrangers',
    flag: '🇦🇷',
    title: 'Argentine : Comment Obtenir 0% de Taxe sur les Revenus Étrangers',
    excerpt: 'L\'Argentine offre un régime fiscal territorial avec 0% d\'impôt sur les revenus étrangers. Guide des exigences, processus et pièges à éviter.',
    readTime: '8 min de lecture',
  },
  {
    slug: 'paradis-fiscaux-retraites-2026',
    flag: '🏖️',
    title: 'Paradis Fiscaux pour la Retraite 2026 : 8 Destinations Analysées',
    excerpt: 'Les meilleurs pays à faible imposition pour les retraités. Taux d\'imposition réels, traités fiscaux et coût de la vie pour 8 destinations.',
    readTime: '12 min de lecture',
  },
  {
    slug: 'quit-travail-demenage-etranger-25-ans-expatrie',
    flag: '✈️',
    title: 'J\'ai Quitté Mon Travail et Déménagé à l\'Étranger : 25 Ans d\'Expérience d\'Expatrié',
    excerpt: 'Réflexions personnelles de 25 ans de vie d\'expatrié. Les erreurs, les succès et les leçons apprises en vivant dans 12 pays.',
    readTime: '10 min de lecture',
  },
];

export default function BlogHomeFR() {
  return (
    <>
      <FrenchBlogTracking />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://reloca.ai/fr' },
          { name: 'Blog', url: 'https://reloca.ai/fr/blog' },
        ]}
      />
      
      <div className="min-h-screen bg-[#fafaf9]">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#1a365d] mb-4">
                Blog Reloca.ai 🇫🇷
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Guides d'experts sur les taxes, visas et relocalisation pour les expatriés
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Mis à jour pour 2026
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Écrit par des expatriés
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Données vérifiées
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{article.flag}</div>
                  <div className="flex-1">
                    <Link 
                      href={`/fr/blog/${article.slug}`}
                      className="group-hover:text-[#38b2ac] transition-colors"
                    >
                      <h2 className="text-xl font-bold text-[#1a365d] mb-3 leading-tight">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{article.readTime}</span>
                      <Link 
                        href={`/fr/blog/${article.slug}`}
                        className="text-[#38b2ac] hover:text-[#2c9a94] font-medium text-sm transition-colors"
                      >
                        Lire l'article →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-[#1a365d] py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Restez informé des dernières stratégies d'expatriation
            </h2>
            <p className="text-blue-200 mb-8 text-lg">
              Recevez nos guides d'experts et les mises à jour fiscales directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-[#38b2ac]"
              />
              <button className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition">
                S'abonner
              </button>
            </div>
            <p className="text-xs text-blue-300 mt-4">
              Pas de spam. Désabonnez-vous à tout moment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}