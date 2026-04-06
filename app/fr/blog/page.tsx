import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Expatriation — Guides et Conseils pour Déménager à l\'Étranger | Reloca.ai',
  description: 'Guides complets en français sur l\'expatriation : optimisation fiscale, visas, coût de la vie, et stratégies de relocalisation pour 23+ pays. Expert en expatriation depuis 25+ ans.',
  keywords: 'blog expatriation,guide expatrié,optimisation fiscale,visa étranger,coût vie étranger,déménager Portugal,impôts expatrié,nomade digital,Golden Visa,résidence fiscale',
  alternates: {
    canonical: 'https://reloca.ai/fr/blog',
    languages: {
      'en': 'https://reloca.ai/blog',
      'fr': 'https://reloca.ai/fr/blog'
    }
  }
};

export default function BlogHomeFR() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/fr" className="flex items-center">
            <img src="/images/reloca-logo.png" alt="Reloca.ai" className="h-14 w-auto" />
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/fr" className="text-gray-600 hover:text-[#1a365d] transition">Accueil</Link>
            <Link href="/about" className="text-gray-600 hover:text-[#1a365d] transition">À propos</Link>
            <span className="text-[#38b2ac] font-medium">Blog</span>
            <div className="flex items-center gap-2 text-xs">
              <Link href="/blog" className="text-gray-400 hover:text-gray-600">EN</Link>
              <span className="text-gray-300">|</span>
              <span className="text-[#38b2ac] font-medium">FR</span>
            </div>
            <Link href="/auth/login" className="text-gray-600 hover:text-[#1a365d] transition">Connexion</Link>
            <Link href="/fr/plan-36" className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg font-medium transition">Commencer</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-6">
              Blog Expatriation 🌍
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guides complets en français pour votre expatriation : optimisation fiscale, visas, coût de la vie, et stratégies de relocalisation. 
              <span className="text-[#38b2ac] font-semibold"> 25+ ans d'expérience d'expatrié.</span>
            </p>
          </div>

          {/* Featured Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Optimisation Fiscale Category */}
            <article className="bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💰</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">OPTIMISATION FISCALE</span>
              </div>
              <h2 className="text-xl font-bold text-[#1a365d] mb-3">
                Guides Fiscaux pour Expatriés
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Portugal NHR, Espagne Beckham Law, 0% impôts Dubai, optimisation Thaïlande, Costa Rica... 
                Stratégies fiscales légales pour réduire vos impôts jusqu'à 80%.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-purple-800">• Portugal - Régime NHR et résidence fiscale</div>
                <div className="text-purple-800">• Espagne - Beckham Law pour nouveaux résidents</div>
                <div className="text-purple-800">• Dubai/UAE - 0% d'impôts sur le revenu</div>
                <div className="text-purple-800">• Thaïlande - Nouvelles règles fiscales 2024</div>
              </div>
            </article>

            {/* Visa & Résidence Category */}
            <article className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🛂</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">VISAS & RÉSIDENCE</span>
              </div>
              <h2 className="text-xl font-bold text-[#1a365d] mb-3">
                Procédures de Visa Simplifiées
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Golden Visa, visa nomade digital, résidence par investissement, visa retraité... 
                Toutes les procédures expliquées étape par étape avec les coûts réels 2026.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-blue-800">• Golden Visa Portugal/Espagne/Grèce</div>
                <div className="text-blue-800">• Visa Nomade Digital - Comparatif complet</div>
                <div className="text-blue-800">• Résidence par investissement</div>
                <div className="text-blue-800">• Visa retraité - Conditions et avantages</div>
              </div>
            </article>

            {/* Coût de la Vie Category */}
            <article className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏡</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">COÛT DE LA VIE</span>
              </div>
              <h2 className="text-xl font-bold text-[#1a365d] mb-3">
                Budget Réel par Destination
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Logement, alimentation, transport, santé, éducation, loisirs... 
                Budgets détaillés 2026 avec comparaisons France vs destinations populaires.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-green-800">• Coûts détaillés par catégorie</div>
                <div className="text-green-800">• Comparaisons France vs étranger</div>
                <div className="text-green-800">• Budgets famille avec enfants</div>
                <div className="text-green-800">• Coûts cachés de l'expatriation</div>
              </div>
            </article>

            {/* Guide Pratique Category */}
            <article className="bg-orange-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📋</span>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">GUIDES PRATIQUES</span>
              </div>
              <h2 className="text-xl font-bold text-[#1a365d] mb-3">
                Déménagement avec Enfants
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Écoles internationales, systèmes de santé, adaptation culturelle... 
                Guide complet pour expatrier votre famille en toute sérénité.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-orange-800">• Choix écoles internationales</div>
                <div className="text-orange-800">• Couverture santé famille</div>
                <div className="text-orange-800">• Adaptation enfants/adolescents</div>
                <div className="text-orange-800">• Activités et intégration sociale</div>
              </div>
            </article>

            {/* Success Stories Category */}
            <article className="bg-teal-50 border border-teal-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌟</span>
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">TÉMOIGNAGES</span>
              </div>
              <h2 className="text-xl font-bold text-[#1a365d] mb-3">
                25 Ans d'Expérience d'Expatrié
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Du premier déménagement aux multiples relocalisations : erreurs à éviter, 
                leçons apprises, et conseils pratiques d'un expert en expatriation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-teal-800">• Chronique d'un parcours d'expatrié</div>
                <div className="text-teal-800">• Erreurs courantes et solutions</div>
                <div className="text-teal-800">• Évolution des destinations</div>
                <div className="text-teal-800">• Conseils pour différents profils</div>
              </div>
            </article>

            {/* Stratégies Avancées Category */}
            <article className="bg-red-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎯</span>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">STRATÉGIES AVANCÉES</span>
              </div>
              <h2 className="text-xl font-bold text-[#1a365d] mb-3">
                Optimisation Multi-Pays
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Structures offshore, nomadisme fiscal, arbitrages géographiques... 
                Stratégies avancées pour entrepreneurs et investisseurs internationaux.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-red-800">• Structures holding internationales</div>
                <div className="text-red-800">• Arbitrages fiscaux légaux</div>
                <div className="text-red-800">• Gestion patrimoine multi-devises</div>
                <div className="text-red-800">• Planification succession internationale</div>
              </div>
            </article>

          </div>

          {/* Newsletter Signup */}
          <div className="bg-[#1a365d] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Recevez nos Guides Expatriation 📧
            </h2>
            <p className="text-blue-200 mb-6">
              Nouveaux articles, analyses fiscales, et opportunités de visa directement dans votre boîte mail. 
              <span className="text-[#38b2ac]">Gratuit et sans spam.</span>
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-xl text-sm bg-white/10 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-[#38b2ac]"
                required
              />
              <button
                type="submit"
                className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                S'abonner Gratuitement
              </button>
            </form>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-blue-200 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div className="max-w-sm">
              <div className="mb-2">
                <img src="/images/reloca-logo.png" alt="Reloca.ai" className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-sm text-blue-300 leading-relaxed">
                Construit par une famille internationale avec une expérience d'expatrié sur 3 continents.
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <div className="flex flex-col gap-2">
                <Link href="/privacy" className="hover:text-white transition">Politique de Confidentialité</Link>
                <Link href="/terms" className="hover:text-white transition">Conditions d'Utilisation</Link>
                <a href="mailto:support@reloca.ai" className="hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-blue-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-blue-400">© 2026 Reloca.ai. Tous droits réservés.</p>
              <p className="text-xs text-blue-400">Construit par des expatriés, pour des expatriés. 🌍</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}