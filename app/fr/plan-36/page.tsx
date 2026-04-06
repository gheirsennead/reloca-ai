import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Votre Rapport Personnalisé d\'Expatriation - Plan 36 | Reloca.ai',
  description: 'Obtenez votre rapport personnalisé d\'expatriation pour n\'importe quel pays. Coût de la vie, fiscalité, visas et plan d\'action en 36 mois maximum.',
  keywords: ['rapport expatriation', 'plan expatriation personnalisé', 'guide déménagement étranger', 'consultation expatriation'],
  openGraph: {
    title: 'Votre Rapport Personnalisé d\'Expatriation - Plan 36',
    description: 'Rapport complet et personnalisé pour votre projet d\'expatriation avec plan d\'action en 36 mois.',
    url: 'https://reloca.ai/fr/plan-36',
    type: 'website',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image-fr.png', width: 1200, height: 630 }],
  },
};

export default function FrenchPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/fr" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Reloca.ai</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/fr/blog" className="text-gray-600 hover:text-[#1a365d] transition">
                Blog
              </Link>
              <Link href="/fr" className="text-gray-600 hover:text-[#1a365d] transition">
                Accueil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
            🎯 Plan 36 : Déménagez à l'étranger en 36 mois maximum
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Votre Rapport Personnalisé d'Expatriation
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Obtenez un plan d'action complet et personnalisé pour déménager dans le pays de vos rêves. 
            Coût de la vie, fiscalité, visas, et stratégie étape par étape.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Que contient votre rapport ?</h2>
            
            <div className="grid gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <strong className="text-gray-900">Budget personnalisé détaillé</strong>
                  <p className="text-sm text-gray-600">Coût de la vie adapté à votre style, quartiers recommandés, comparaison avec la France</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <strong className="text-gray-900">Stratégie fiscale optimisée</strong>
                  <p className="text-sm text-gray-600">Calcul d'impôts précis, optimisations légales, régimes spéciaux expatriés</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <strong className="text-gray-900">Guide visa étape par étape</strong>
                  <p className="text-sm text-gray-600">Type de visa optimal, documents requis, délais réels, procédure complète</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <strong className="text-gray-900">Plan d'action sur 36 mois</strong>
                  <p className="text-sm text-gray-600">Timeline précise, check-lists, contacts locaux, conseils d'adaptation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <strong className="text-gray-900">Ressources et contacts</strong>
                  <p className="text-sm text-gray-600">Experts locaux, communautés expatriés, services essentiels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez Votre Formule
            </h2>
            <p className="text-xl text-gray-600">
              Rapports personnalisés basés sur votre situation et vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Rapport Essentiel</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">€49</div>
                <p className="text-gray-600">Rapport PDF complet</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Budget détaillé pour 1 destination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Analyse fiscale complète</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Guide visa personnalisé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Plan d'action 12 mois</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Contacts et ressources essentiels</span>
                </li>
              </ul>

              <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
                Choisir le rapport essentiel
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Le plus populaire
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Rapport Premium</h3>
                <div className="text-4xl font-bold text-blue-600 mb-1">€99</div>
                <p className="text-gray-600">Tout inclus + consultation</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Comparaison de 3 destinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Optimisation fiscale avancée</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Stratégies visa multiples</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Plan d'action 36 mois détaillé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Réseau expert local</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700"><strong>Consultation 45min par vidéo</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700"><strong>Suivi email pendant 3 mois</strong></span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Choisir le rapport premium
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              💳 Paiement sécurisé • 🔒 Satisfaction garantie • 📧 Livraison sous 48h
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Questions Fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Quels pays couvrez-vous ?</h3>
              <p className="text-gray-700">
                Nous couvrons les 195 pays du monde. Nos rapports sont particulièrement détaillés pour les 50 destinations 
                les plus populaires pour les expatriés français (Portugal, Espagne, Canada, USA, Australie, etc.).
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Combien de temps pour recevoir mon rapport ?</h3>
              <p className="text-gray-700">
                Les rapports essentiels sont livrés sous 48h. Les rapports premium prennent 5-7 jours car ils incluent 
                une recherche personnalisée approfondie et la préparation de votre consultation vidéo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Sur quoi sont basées vos données ?</h3>
              <p className="text-gray-700">
                Nos données proviennent d'expatriés réels vivant sur place, d'experts fiscaux locaux, et de sources officielles 
                (gouvernements, consulats). Nous mettons à jour nos bases de données trimestriellement.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Puis-je changer de destination après commande ?</h3>
              <p className="text-gray-700">
                Oui, vous avez 7 jours après commande pour modifier votre destination ou vos critères. 
                Pour les rapports premium, le changement est possible jusqu'à la consultation vidéo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Que se passe-t-il si je ne suis pas satisfait ?</h3>
              <p className="text-gray-700">
                Nous offrons une garantie satisfait ou remboursé de 30 jours. Si votre rapport ne correspond pas à vos attentes, 
                nous le révisons gratuitement ou vous remboursons intégralement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Concrétiser Votre Projet d'Expatriation ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez les 2,000+ expatriés qui ont réussi leur installation grâce à nos rapports personnalisés
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1a365d] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Rapport Essentiel - €49
            </button>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition">
              Rapport Premium - €99
            </button>
          </div>

          <p className="text-sm text-blue-200 mt-6">
            Ou <Link href="/fr" className="underline">retournez à l'accueil</Link> pour explorer d'abord nos guides gratuits
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="font-bold">Reloca.ai</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2026 Reloca.ai. Tous droits réservés. | 
            <Link href="/fr" className="hover:text-white ml-1">Accueil</Link> | 
            <Link href="/fr/blog" className="hover:text-white ml-1">Blog</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}