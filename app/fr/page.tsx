import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reloca.ai — L\'App Indispensable pour Déménager à l\'Étranger',
  description: 'L\'app indispensable pour toute personne envisageant de déménager à l\'étranger. Intelligence de relocalisation alimentée par l\'IA couvrant 23+ pays sur 3 continents. Construit par des expatriés, pour des expatriés. 🌍',
  keywords: 'relocalisation,déménager étranger,expatrié,visa,coût vie,déménager Portugal,déménager Espagne,déménager Thaïlande,déménager Dubai,déménager Brésil,déménager Mexique,nomade digital,retraite étranger,relocalisation internationale,optimisation fiscale expatrié',
  alternates: {
    canonical: 'https://reloca.ai/fr',
    languages: {
      'en': 'https://reloca.ai',
      'fr': 'https://reloca.ai/fr'
    }
  },
  openGraph: {
    title: 'Reloca.ai — L\'App Indispensable pour Déménager à l\'Étranger',
    description: 'L\'app indispensable pour toute personne envisageant de déménager à l\'étranger. Intelligence de relocalisation alimentée par l\'IA couvrant 23+ pays sur 3 continents. Construit par des expatriés, pour des expatriés. 🌍',
    url: 'https://reloca.ai/fr',
    siteName: 'Reloca.ai',
    locale: 'fr_FR',
    type: 'website',
  }
};

export default function FrenchHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/fr" className="flex items-center">
            <img src="/images/reloca-logo.png" alt="Reloca.ai" className="h-14 w-auto" />
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="text-gray-600 hover:text-[#1a365d] transition">Comment ça marche</a>
            <Link href="/about" className="text-gray-600 hover:text-[#1a365d] transition">À propos</Link>
            <a href="#pricing" className="text-gray-600 hover:text-[#1a365d] transition">Tarifs</a>
            <Link href="/fr/blog" className="text-gray-600 hover:text-[#1a365d] transition">Blog</Link>
            <a href="#faq" className="text-gray-600 hover:text-[#1a365d] transition">FAQ</a>
            <div className="flex items-center gap-2 text-xs">
              <Link href="/" className="text-gray-400 hover:text-gray-600">EN</Link>
              <span className="text-gray-300">|</span>
              <span className="text-[#38b2ac] font-medium">FR</span>
            </div>
            <Link href="/auth/login" className="text-gray-600 hover:text-[#1a365d] transition">Connexion</Link>
            <Link href="/fr/plan-36" className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg font-medium transition">Commencer</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 bg-[#fafaf9]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 text-sm text-gray-600">
            <span>Approuvé par des expatriés de 42+ pays</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-[#1a365d]">
            Vous Pensez Déménager à l'Étranger? <span className="text-[#38b2ac]">Découvrez Où.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Répondez à quelques questions sur votre style de vie, budget et objectifs. Notre IA analyse 23+ pays et vous dit exactement où aller — avec les étapes de visa, économies d'impôts et coûts réels.
          </p>
          <Link href="/fr/plan-36" className="mt-8 inline-flex items-center gap-2 bg-[#38b2ac] hover:bg-[#2c9a94] text-white text-lg sm:text-xl font-bold px-10 py-5 rounded-xl shadow-lg shadow-teal-500/25 transition hover:shadow-xl hover:shadow-teal-500/35 hover:scale-[1.02]">
            Trouvez Votre Pays Idéal — Quiz Gratuit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">⏱️ Prend 10 minutes</span>
            <span className="flex items-center gap-1">🆓 Quiz gratuit + résultats instantanés</span>
            <span className="flex items-center gap-1">🛡️ Garantie 30 jours satisfait ou remboursé</span>
          </div>
          <p className="mt-4 text-sm text-gray-500 font-medium">
            Rapport complet: <span className="text-[#1a365d] font-bold">49€</span>
          </p>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a365d] mb-4">Ressources Expatriation en Français</h2>
            <p className="text-gray-600">Guides complets sur l'optimisation fiscale, les visas, et le coût de la vie pour expatriés</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/fr/blog" className="group block">
              <article className="bg-[#fafaf9] rounded-xl p-6 h-full hover:shadow-lg transition group-hover:bg-[#38b2ac]/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">💰</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">OPTIMISATION FISCALE</span>
                </div>
                <h3 className="font-bold text-[#1a365d] text-lg mb-2 group-hover:text-[#38b2ac] transition">
                  Guides Fiscaux pour Expatriés
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Portugal, Espagne, Dubai, Thaïlande, Costa Rica... Découvrez les stratégies d'optimisation fiscale pour chaque destination.
                </p>
              </article>
            </Link>
            <Link href="/fr/blog" className="group block">
              <article className="bg-[#fafaf9] rounded-xl p-6 h-full hover:shadow-lg transition group-hover:bg-[#38b2ac]/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🛂</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">VISAS</span>
                </div>
                <h3 className="font-bold text-[#1a365d] text-lg mb-2 group-hover:text-[#38b2ac] transition">
                  Procédures de Visa Simplifiées
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Golden Visa, visa de nomade digital, résidence par investissement... Toutes les options expliquées clairement.
                </p>
              </article>
            </Link>
            <Link href="/fr/blog" className="group block">
              <article className="bg-[#fafaf9] rounded-xl p-6 h-full hover:shadow-lg transition group-hover:bg-[#38b2ac]/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏡</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">COÛT DE LA VIE</span>
                </div>
                <h3 className="font-bold text-[#1a365d] text-lg mb-2 group-hover:text-[#38b2ac] transition">
                  Coûts Réels par Destination
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Logement, nourriture, transport, santé, éducation... Données actualisées 2026 pour budgéter votre expatriation.
                </p>
              </article>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/fr/blog" className="inline-flex items-center gap-2 bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition">
              Voir Tous les Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 px-4 bg-[#1a365d]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Pas Prêt à Commencer? Recevez nos Conseils Expatriation.
          </h2>
          <p className="text-blue-300 text-sm mb-6">
            Mises à jour gratuites sur les changements de visa, coût de la vie, et conseils de relocalisation. Pas de spam.
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
              className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition disabled:opacity-50 whitespace-nowrap"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>

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
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <Link href="/" className="text-blue-400 hover:text-white">English</Link>
                  <span className="text-gray-300">|</span>
                  <span className="text-white font-medium">Français</span>
                </div>
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