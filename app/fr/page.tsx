import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogCTA } from '@/components/BlogCTA';
import { DynamicTestimonials } from '@/components/DynamicTestimonials';
import { FrenchBlogTracking } from '@/components/FrenchBlogTracking';

export const metadata: Metadata = {
  title: 'Reloca.ai - Votre Guide Personnalisé pour Déménager à l\'Étranger | Expatriation France',
  description: 'Obtenez votre rapport personnalisé pour déménager à l\'étranger. Coût de la vie, impôts, visas et conseils d\'expatriés pour 195 pays. Déménagement facilité.',
  keywords: ['déménager étranger', 'expatriation france', 'guide expatriation', 'vivre à l\'étranger', 'coût vie étranger', 'visa expatrié'],
  openGraph: {
    title: 'Reloca.ai - Votre Guide Personnalisé pour Déménager à l\'Étranger',
    description: 'Rapport personnalisé expatriation pour 195 pays. Coût de la vie, impôts, visas et conseils pratiques.',
    url: 'https://reloca.ai/fr',
    type: 'website',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image-fr.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reloca.ai - Guide Personnalisé Expatriation France',
    description: 'Rapport personnalisé expatriation pour 195 pays avec coûts réels et conseils d\'experts.',
    images: ['https://reloca.ai/images/og-image-fr.png'],
  },
  alternates: {
    canonical: 'https://reloca.ai/fr',
    languages: {
      'en': 'https://reloca.ai',
      'fr': 'https://reloca.ai/fr',
    },
  },
};

export default function FrenchHomePage() {
  return (
    <>
      <FrenchBlogTracking />
      <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/fr" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Reloca.ai</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/fr/blog" className="text-gray-600 hover:text-[#1a365d] transition">
                Blog
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-[#1a365d] transition">
                Blog EN
              </Link>
              <Link href="/fr/plan-36" className="bg-[#1a365d] text-white px-4 py-2 rounded-lg hover:bg-[#2d4a75] transition">
                Obtenir mon rapport
              </Link>
            </div>

            <div className="md:hidden">
              <button className="text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Déménagez à l'Étranger 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}en Toute Confiance
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Obtenez votre rapport personnalisé pour n'importe quel pays : coût de la vie réel, 
              impôts, visas, conseils d'expatriés et plan d'action étape par étape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link 
                href="/fr/plan-36" 
                className="bg-[#1a365d] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2d4a75] transition-all duration-300 transform hover:scale-105"
              >
                Créer mon rapport gratuit
              </Link>
              <Link 
                href="/fr/blog" 
                className="text-[#1a365d] border border-[#1a365d] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1a365d] hover:text-white transition-all duration-300"
              >
                Explorer les destinations
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>195 pays couverts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Données 2026 vérifiées</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>500+ expatriés consultés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-green-400/20 to-blue-400/20 blur-3xl"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi 80% des Projets d'Expatriation Échouent ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Parce que la plupart des gens sous-estiment la complexité et se basent sur des informations obsolètes ou incomplètes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-red-900 mb-3">Budgets Explosés</h3>
              <p className="text-red-700">
                Coûts cachés, taxes inattendues, frais de visa sous-estimés. 
                Le "coût de la vie" théorique vs la réalité du terrain.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Paperasse Incompréhensible</h3>
              <p className="text-orange-700">
                Visa refusé, documents manquants, procédures mal comprises. 
                Chaque pays a ses spécificités administratives.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Mauvais Choix de Destination</h3>
              <p className="text-yellow-700">
                Climat décevant, culture incompatible, opportunités surestimées. 
                Ce qui marche pour d'autres ne marchera pas forcément pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Solution : Votre Rapport Personnalisé d'Expatriation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Basé sur vos critères spécifiques, vos revenus, votre situation familiale et vos objectifs. 
              Pas de généralités, que des données concrètes pour VOTRE situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ce que contient votre rapport :</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Budget Personnalisé Détaillé</h4>
                    <p className="text-gray-600 text-sm">
                      Coût de la vie adapté à votre style, quartiers recommandés, comparaison avec votre ville actuelle, 
                      frais cachés inclus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">🏛️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stratégie Fiscale Optimisée</h4>
                    <p className="text-gray-600 text-sm">
                      Calcul d'impôts dans votre nouvelle destination, optimisation légale, 
                      conventions de double imposition, régimes spéciaux expatriés.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">📋</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Guide Visa & Résidence Étape par Étape</h4>
                    <p className="text-gray-600 text-sm">
                      Type de visa recommandé pour votre profil, documents requis, délais réels, 
                      procédure complète avec contacts officiels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Plan d'Action Personnalisé</h4>
                    <p className="text-gray-600 text-sm">
                      Timeline de déménagement, check-lists, contacts locaux, conseils d'adaptation, 
                      erreurs à éviter spécifiques à votre destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Exemple : Rapport Portugal</h3>
                <p className="text-gray-600">Pour un couple avec 2 enfants, revenus €4500/mois</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="bg-white rounded p-4 border-l-4 border-green-500">
                  <strong>Budget mensuel recommandé :</strong> €2,850/mois<br/>
                  <span className="text-green-600">↳ Économie vs France : €1,650/mois (37%)</span>
                </div>

                <div className="bg-white rounded p-4 border-l-4 border-blue-500">
                  <strong>Optimisation fiscale :</strong> Régime IFICI<br/>
                  <span className="text-blue-600">↳ 20% d'imposition vs 30% France = €9,000/an économisés</span>
                </div>

                <div className="bg-white rounded p-4 border-l-4 border-purple-500">
                  <strong>Visa recommandé :</strong> D7 (Visa de retraité/indépendant)<br/>
                  <span className="text-purple-600">↳ Délai : 6-8 mois, coût total : €1,200</span>
                </div>

                <div className="bg-white rounded p-4 border-l-4 border-orange-500">
                  <strong>Écoles enfants :</strong> École française de Lisbonne<br/>
                  <span className="text-orange-600">↳ €12,000/an/enfant, transport inclus</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link 
                  href="/fr/plan-36"
                  className="bg-[#1a365d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d4a75] transition"
                >
                  Créer mon rapport personnalisé
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations populaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Destinations Populaires pour les Français
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez où s'installent les expatriés français et pourquoi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/fr/blog/taxes-portugal-expatries" className="bg-white rounded-xl p-6 border hover:shadow-lg transition group">
              <div className="text-4xl mb-3">🇵🇹</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Portugal</h3>
              <p className="text-sm text-gray-600 mb-3">
                Régime IFICI, qualité de vie, UE. Budget couple : €2,200-3,500/mois.
              </p>
              <div className="text-xs text-blue-600 font-semibold">En savoir plus →</div>
            </Link>

            <Link href="/fr/blog/cout-vie-etranger-2026" className="bg-white rounded-xl p-6 border hover:shadow-lg transition group">
              <div className="text-4xl mb-3">🇪🇸</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Espagne</h3>
              <p className="text-sm text-gray-600 mb-3">
                Régime Beckham, climat, culture. Budget couple : €1,950-3,100/mois.
              </p>
              <div className="text-xs text-blue-600 font-semibold">En savoir plus →</div>
            </Link>

            <Link href="/fr/blog/taxes-mexique-expatries" className="bg-white rounded-xl p-6 border hover:shadow-lg transition group">
              <div className="text-4xl mb-3">🇲🇽</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Mexique</h3>
              <p className="text-sm text-gray-600 mb-3">
                Nomades digitaux, coût abordable. Budget couple : €1,600-2,800/mois.
              </p>
              <div className="text-xs text-blue-600 font-semibold">En savoir plus →</div>
            </Link>

            <Link href="/fr/blog/guide-fiscal-costa-rica-expatries" className="bg-white rounded-xl p-6 border hover:shadow-lg transition group">
              <div className="text-4xl mb-3">🇨🇷</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Costa Rica</h3>
              <p className="text-sm text-gray-600 mb-3">
                Pura Vida, fiscalité territoriale. Budget couple : €1,400-2,200/mois.
              </p>
              <div className="text-xs text-blue-600 font-semibold">En savoir plus →</div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/fr/blog" 
              className="text-[#1a365d] font-semibold hover:underline"
            >
              Explorer toutes les destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <DynamicTestimonials />

      {/* CTA Final */}
      <BlogCTA 
        title="Prêt à Déménager à l'Étranger ?"
        description="Obtenez votre rapport personnalisé en 5 minutes. Coût de la vie, impôts, visas et plan d'action pour votre destination idéale."
        buttonText="Créer mon rapport gratuit"
        buttonUrl="/fr/plan-36"
        language="fr"
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-xl">Reloca.ai</span>
              </div>
              <p className="text-gray-400 text-sm">
                Votre guide personnalisé pour une expatriation réussie.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/fr/blog/taxes-portugal-expatries" className="hover:text-white">Portugal</Link></li>
                <li><Link href="/fr/blog/taxes-mexique-expatries" className="hover:text-white">Mexique</Link></li>
                <li><Link href="/fr/blog/guide-fiscal-costa-rica-expatries" className="hover:text-white">Costa Rica</Link></li>
                <li><Link href="/fr/blog" className="hover:text-white">Toutes les destinations</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Guides</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/fr/blog/cout-vie-etranger-2026" className="hover:text-white">Coût de la vie</Link></li>
                <li><Link href="/fr/blog/comparaison-visa-nomade-digital-2026" className="hover:text-white">Visas nomades</Link></li>
                <li><Link href="/fr/blog/demenager-etranger-enfants-2026" className="hover:text-white">Familles expatriées</Link></li>
                <li><Link href="/fr/plan-36" className="hover:text-white">Rapport personnalisé</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Langues</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white">English</Link></li>
                <li><Link href="/fr" className="hover:text-white text-white">Français</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Reloca.ai. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}