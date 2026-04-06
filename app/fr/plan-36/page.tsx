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
    &lt;div className="min-h-screen bg-white">
      {/* Navigation */}
      &lt;nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;div className="flex justify-between items-center h-16">
            &lt;Link href="/fr" className="flex items-center gap-2">
              &lt;div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                &lt;span className="text-white font-bold text-sm"&gt;R</span>
              </div>
              &lt;span className="font-bold text-xl text-gray-900"&gt;Reloca.ai</span>
            </Link>
            
            &lt;div className="flex items-center space-x-4">
              &lt;Link href="/fr/blog" className="text-gray-600 hover:text-[#1a365d] transition">
                Blog
              </Link>
              &lt;Link href="/fr" className="text-gray-600 hover:text-[#1a365d] transition">
                Accueil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      &lt;section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20">
        &lt;div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          &lt;div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
            🎯 Plan 36 : Déménagez à l'étranger en 36 mois maximum
          </div>
          
          &lt;h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Votre Rapport Personnalisé d'Expatriation
          </h1>
          
          &lt;p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Obtenez un plan d'action complet et personnalisé pour déménager dans le pays de vos rêves. 
            Coût de la vie, fiscalité, visas, et stratégie étape par étape.
          </p>

          &lt;div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            &lt;h2 className="text-2xl font-bold text-gray-900 mb-6"&gt;Que contient votre rapport ?</h2>
            
            &lt;div className="grid gap-4 text-left">
              &lt;div className="flex items-start gap-3">
                &lt;div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  &lt;span className="text-green-600 text-sm"&gt;✓</span>
                </div>
                &lt;div>
                  &lt;strong className="text-gray-900"&gt;Budget personnalisé détaillé</strong>
                  &lt;p className="text-sm text-gray-600"&gt;Coût de la vie adapté à votre style, quartiers recommandés, comparaison avec la France</p>
                </div>
              </div>

              &lt;div className="flex items-start gap-3">
                &lt;div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  &lt;span className="text-green-600 text-sm"&gt;✓</span>
                </div>
                &lt;div>
                  &lt;strong className="text-gray-900"&gt;Stratégie fiscale optimisée</strong>
                  &lt;p className="text-sm text-gray-600"&gt;Calcul d'impôts précis, optimisations légales, régimes spéciaux expatriés</p>
                </div>
              </div>

              &lt;div className="flex items-start gap-3">
                &lt;div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  &lt;span className="text-green-600 text-sm"&gt;✓</span>
                </div>
                &lt;div>
                  &lt;strong className="text-gray-900"&gt;Guide visa étape par étape</strong>
                  &lt;p className="text-sm text-gray-600"&gt;Type de visa optimal, documents requis, délais réels, procédure complète</p>
                </div>
              </div>

              &lt;div className="flex items-start gap-3">
                &lt;div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  &lt;span className="text-green-600 text-sm"&gt;✓</span>
                </div>
                &lt;div>
                  &lt;strong className="text-gray-900"&gt;Plan d'action sur 36 mois</strong>
                  &lt;p className="text-sm text-gray-600"&gt;Timeline précise, check-lists, contacts locaux, conseils d'adaptation</p>
                </div>
              </div>

              &lt;div className="flex items-start gap-3">
                &lt;div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  &lt;span className="text-green-600 text-sm"&gt;✓</span>
                </div>
                &lt;div>
                  &lt;strong className="text-gray-900"&gt;Ressources et contacts</strong>
                  &lt;p className="text-sm text-gray-600"&gt;Experts locaux, communautés expatriés, services essentiels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      &lt;section className="py-20 bg-white">
        &lt;div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;div className="text-center mb-12">
            &lt;h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez Votre Formule
            </h2>
            &lt;p className="text-xl text-gray-600">
              Rapports personnalisés basés sur votre situation et vos objectifs
            </p>
          </div>

          &lt;div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            &lt;div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              &lt;div className="text-center mb-6">
                &lt;h3 className="text-2xl font-bold text-gray-900 mb-2"&gt;Rapport Essentiel</h3>
                &lt;div className="text-4xl font-bold text-gray-900 mb-1"&gt;€49</div>
                &lt;p className="text-gray-600"&gt;Rapport PDF complet</p>
              </div>

              &lt;ul className="space-y-3 mb-8">
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-green-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Budget détaillé pour 1 destination</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-green-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Analyse fiscale complète</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-green-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Guide visa personnalisé</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-green-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Plan d'action 12 mois</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-green-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Contacts et ressources essentiels</span>
                </li>
              </ul>

              &lt;button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
                Choisir le rapport essentiel
              </button>
            </div>

            {/* Premium Plan */}
            &lt;div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 relative">
              &lt;div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Le plus populaire
              </div>
              
              &lt;div className="text-center mb-6">
                &lt;h3 className="text-2xl font-bold text-gray-900 mb-2"&gt;Rapport Premium</h3>
                &lt;div className="text-4xl font-bold text-blue-600 mb-1"&gt;€99</div>
                &lt;p className="text-gray-600"&gt;Tout inclus + consultation</p>
              </div>

              &lt;ul className="space-y-3 mb-8">
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-blue-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Comparaison de 3 destinations</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-blue-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Optimisation fiscale avancée</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-blue-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Stratégies visa multiples</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-blue-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Plan d'action 36 mois détaillé</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-blue-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;Réseau expert local</span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-blue-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;&lt;strong&gt;Consultation 45min par vidéo</strong></span>
                </li>
                &lt;li className="flex items-start gap-3">
                  &lt;span className="text-blue-500 mt-1"&gt;✓</span>
                  &lt;span className="text-gray-700"&gt;&lt;strong&gt;Suivi email pendant 3 mois</strong></span>
                </li>
              </ul>

              &lt;button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Choisir le rapport premium
              </button>
            </div>
          </div>

          &lt;div className="text-center mt-8">
            &lt;p className="text-gray-600 text-sm">
              💳 Paiement sécurisé • 🔒 Satisfaction garantie • 📧 Livraison sous 48h
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      &lt;section className="py-20 bg-gray-50">
        &lt;div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Questions Fréquentes
          </h2>

          &lt;div className="space-y-6">
            &lt;div className="bg-white rounded-lg p-6 shadow-sm">
              &lt;h3 className="font-bold text-gray-900 mb-3"&gt;Quels pays couvrez-vous ?</h3>
              &lt;p className="text-gray-700">
                Nous couvrons les 195 pays du monde. Nos rapports sont particulièrement détaillés pour les 50 destinations 
                les plus populaires pour les expatriés français (Portugal, Espagne, Canada, USA, Australie, etc.).
              </p>
            </div>

            &lt;div className="bg-white rounded-lg p-6 shadow-sm">
              &lt;h3 className="font-bold text-gray-900 mb-3"&gt;Combien de temps pour recevoir mon rapport ?</h3>
              &lt;p className="text-gray-700">
                Les rapports essentiels sont livrés sous 48h. Les rapports premium prennent 5-7 jours car ils incluent 
                une recherche personnalisée approfondie et la préparation de votre consultation vidéo.
              </p>
            </div>

            &lt;div className="bg-white rounded-lg p-6 shadow-sm">
              &lt;h3 className="font-bold text-gray-900 mb-3"&gt;Sur quoi sont basées vos données ?</h3>
              &lt;p className="text-gray-700">
                Nos données proviennent d'expatriés réels vivant sur place, d'experts fiscaux locaux, et de sources officielles 
                (gouvernements, consulats). Nous mettons à jour nos bases de données trimestriellement.
              </p>
            </div>

            &lt;div className="bg-white rounded-lg p-6 shadow-sm">
              &lt;h3 className="font-bold text-gray-900 mb-3"&gt;Puis-je changer de destination après commande ?</h3>
              &lt;p className="text-gray-700">
                Oui, vous avez 7 jours après commande pour modifier votre destination ou vos critères. 
                Pour les rapports premium, le changement est possible jusqu'à la consultation vidéo.
              </p>
            </div>

            &lt;div className="bg-white rounded-lg p-6 shadow-sm">
              &lt;h3 className="font-bold text-gray-900 mb-3"&gt;Que se passe-t-il si je ne suis pas satisfait ?</h3>
              &lt;p className="text-gray-700">
                Nous offrons une garantie satisfait ou remboursé de 30 jours. Si votre rapport ne correspond pas à vos attentes, 
                nous le révisons gratuitement ou vous remboursons intégralement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      &lt;section className="py-20 bg-[#1a365d] text-white">
        &lt;div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          &lt;h2 className="text-3xl font-bold mb-4">
            Prêt à Concrétiser Votre Projet d'Expatriation ?
          </h2>
          &lt;p className="text-xl mb-8 text-blue-100">
            Rejoignez les 2,000+ expatriés qui ont réussi leur installation grâce à nos rapports personnalisés
          </p>

          &lt;div className="flex flex-col sm:flex-row gap-4 justify-center">
            &lt;button className="bg-white text-[#1a365d] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Rapport Essentiel - €49
            </button>
            &lt;button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition">
              Rapport Premium - €99
            </button>
          </div>

          &lt;p className="text-sm text-blue-200 mt-6">
            Ou &lt;Link href="/fr" className="underline"&gt;retournez à l'accueil</Link&gt; pour explorer d'abord nos guides gratuits
          </p>
        </div>
      </section>

      {/* Footer */}
      &lt;footer className="bg-gray-900 text-white py-8">
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          &lt;div className="flex items-center justify-center gap-2 mb-4">
            &lt;div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              &lt;span className="text-white font-bold text-xs"&gt;R</span>
            </div>
            &lt;span className="font-bold"&gt;Reloca.ai</span>
          </div>
          &lt;p className="text-gray-400 text-sm">
            &copy; 2026 Reloca.ai. Tous droits réservés. | 
            &lt;Link href="/fr" className="hover:text-white ml-1"&gt;Accueil</Link&gt; | 
            &lt;Link href="/fr/blog" className="hover:text-white ml-1"&gt;Blog</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}