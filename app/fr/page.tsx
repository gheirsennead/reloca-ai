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
    &lt;>
      &lt;FrenchBlogTracking />
      &lt;div className="min-h-screen bg-white">
      {/* Navigation */}
      &lt;nav className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;div className="flex justify-between items-center h-16">
            &lt;div className="flex items-center">
              &lt;Link href="/fr" className="flex items-center gap-2">
                &lt;div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  &lt;span className="text-white font-bold text-sm"&gt;R</span>
                </div>
                &lt;span className="font-bold text-xl text-gray-900"&gt;Reloca.ai</span>
              </Link>
            </div>
            
            &lt;div className="hidden md:flex items-center space-x-8">
              &lt;Link href="/fr/blog" className="text-gray-600 hover:text-[#1a365d] transition">
                Blog
              </Link>
              &lt;Link href="/blog" className="text-gray-600 hover:text-[#1a365d] transition">
                Blog EN
              </Link>
              &lt;Link href="/fr/plan-36" className="bg-[#1a365d] text-white px-4 py-2 rounded-lg hover:bg-[#2d4a75] transition">
                Obtenir mon rapport
              </Link>
            </div>

            &lt;div className="md:hidden">
              &lt;button className="text-gray-600">
                &lt;svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      &lt;section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20">
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;div className="text-center">
            &lt;h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Déménagez à l'Étranger 
              &lt;span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}en Toute Confiance
              </span>
            </h1>
            
            &lt;p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Obtenez votre rapport personnalisé pour n'importe quel pays : coût de la vie réel, 
              impôts, visas, conseils d'expatriés et plan d'action étape par étape.
            </p>

            &lt;div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              &lt;Link 
                href="/fr/plan-36" 
                className="bg-[#1a365d] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2d4a75] transition-all duration-300 transform hover:scale-105"
              >
                Créer mon rapport gratuit
              </Link>
              &lt;Link 
                href="/fr/blog" 
                className="text-[#1a365d] border border-[#1a365d] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1a365d] hover:text-white transition-all duration-300"
              >
                Explorer les destinations
              </Link>
            </div>

            &lt;div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              &lt;div className="flex items-center gap-2">
                &lt;span className="text-green-500"&gt;✓</span>
                &lt;span&gt;195 pays couverts</span>
              </div>
              &lt;div className="flex items-center gap-2">
                &lt;span className="text-green-500"&gt;✓</span>
                &lt;span&gt;Données 2026 vérifiées</span>
              </div>
              &lt;div className="flex items-center gap-2">
                &lt;span className="text-green-500"&gt;✓</span>
                &lt;span&gt;500+ expatriés consultés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        &lt;div className="absolute inset-0 overflow-hidden pointer-events-none">
          &lt;div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
          &lt;div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-green-400/20 to-blue-400/20 blur-3xl"></div>
        </div>
      </section>

      {/* Problem Section */}
      &lt;section className="py-20 bg-gray-50">
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;div className="text-center mb-16">
            &lt;h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi 80% des Projets d'Expatriation Échouent ?
            </h2>
            &lt;p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Parce que la plupart des gens sous-estiment la complexité et se basent sur des informations obsolètes ou incomplètes.
            </p>
          </div>

          &lt;div className="grid md:grid-cols-3 gap-8">
            &lt;div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              &lt;div className="text-4xl mb-4"&gt;💸</div>
              &lt;h3 className="text-xl font-bold text-red-900 mb-3"&gt;Budgets Explosés</h3>
              &lt;p className="text-red-700">
                Coûts cachés, taxes inattendues, frais de visa sous-estimés. 
                Le "coût de la vie" théorique vs la réalité du terrain.
              </p>
            </div>

            &lt;div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              &lt;div className="text-4xl mb-4"&gt;📋</div>
              &lt;h3 className="text-xl font-bold text-orange-900 mb-3"&gt;Paperasse Incompréhensible</h3>
              &lt;p className="text-orange-700">
                Visa refusé, documents manquants, procédures mal comprises. 
                Chaque pays a ses spécificités administratives.
              </p>
            </div>

            &lt;div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              &lt;div className="text-4xl mb-4"&gt;🎯</div>
              &lt;h3 className="text-xl font-bold text-yellow-900 mb-3"&gt;Mauvais Choix de Destination</h3>
              &lt;p className="text-yellow-700">
                Climat décevant, culture incompatible, opportunités surestimées. 
                Ce qui marche pour d'autres ne marchera pas forcément pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      &lt;section className="py-20 bg-white">
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;div className="text-center mb-16">
            &lt;h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Solution : Votre Rapport Personnalisé d'Expatriation
            </h2>
            &lt;p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Basé sur vos critères spécifiques, vos revenus, votre situation familiale et vos objectifs. 
              Pas de généralités, que des données concrètes pour VOTRE situation.
            </p>
          </div>

          &lt;div className="grid lg:grid-cols-2 gap-12 items-center">
            &lt;div>
              &lt;h3 className="text-2xl font-bold text-gray-900 mb-6"&gt;Ce que contient votre rapport :</h3>
              
              &lt;div className="space-y-4">
                &lt;div className="flex items-start gap-4">
                  &lt;div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    &lt;span className="text-green-600 font-bold"&gt;💰</span>
                  </div>
                  &lt;div>
                    &lt;h4 className="font-semibold text-gray-900"&gt;Budget Personnalisé Détaillé</h4>
                    &lt;p className="text-gray-600 text-sm">
                      Coût de la vie adapté à votre style, quartiers recommandés, comparaison avec votre ville actuelle, 
                      frais cachés inclus.
                    </p>
                  </div>
                </div>

                &lt;div className="flex items-start gap-4">
                  &lt;div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    &lt;span className="text-blue-600 font-bold"&gt;🏛️</span>
                  </div>
                  &lt;div>
                    &lt;h4 className="font-semibold text-gray-900"&gt;Stratégie Fiscale Optimisée</h4>
                    &lt;p className="text-gray-600 text-sm">
                      Calcul d'impôts dans votre nouvelle destination, optimisation légale, 
                      conventions de double imposition, régimes spéciaux expatriés.
                    </p>
                  </div>
                </div>

                &lt;div className="flex items-start gap-4">
                  &lt;div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    &lt;span className="text-purple-600 font-bold"&gt;📋</span>
                  </div>
                  &lt;div>
                    &lt;h4 className="font-semibold text-gray-900"&gt;Guide Visa & Résidence Étape par Étape</h4>
                    &lt;p className="text-gray-600 text-sm">
                      Type de visa recommandé pour votre profil, documents requis, délais réels, 
                      procédure complète avec contacts officiels.
                    </p>
                  </div>
                </div>

                &lt;div className="flex items-start gap-4">
                  &lt;div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    &lt;span className="text-orange-600 font-bold"&gt;🎯</span>
                  </div>
                  &lt;div>
                    &lt;h4 className="font-semibold text-gray-900"&gt;Plan d'Action Personnalisé</h4>
                    &lt;p className="text-gray-600 text-sm">
                      Timeline de déménagement, check-lists, contacts locaux, conseils d'adaptation, 
                      erreurs à éviter spécifiques à votre destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            &lt;div className="bg-gray-50 rounded-2xl p-8">
              &lt;div className="text-center mb-6">
                &lt;h3 className="text-2xl font-bold text-gray-900 mb-2"&gt;Exemple : Rapport Portugal</h3>
                &lt;p className="text-gray-600"&gt;Pour un couple avec 2 enfants, revenus €4500/mois</p>
              </div>

              &lt;div className="space-y-4 text-sm">
                &lt;div className="bg-white rounded p-4 border-l-4 border-green-500">
                  &lt;strong&gt;Budget mensuel recommandé :</strong&gt; €2,850/mois&lt;br/>
                  &lt;span className="text-green-600"&gt;↳ Économie vs France : €1,650/mois (37%)</span>
                </div>

                &lt;div className="bg-white rounded p-4 border-l-4 border-blue-500">
                  &lt;strong&gt;Optimisation fiscale :</strong&gt; Régime IFICI&lt;br/>
                  &lt;span className="text-blue-600"&gt;↳ 20% d'imposition vs 30% France = €9,000/an économisés</span>
                </div>

                &lt;div className="bg-white rounded p-4 border-l-4 border-purple-500">
                  &lt;strong&gt;Visa recommandé :</strong&gt; D7 (Visa de retraité/indépendant)&lt;br/>
                  &lt;span className="text-purple-600"&gt;↳ Délai : 6-8 mois, coût total : €1,200</span>
                </div>

                &lt;div className="bg-white rounded p-4 border-l-4 border-orange-500">
                  &lt;strong&gt;Écoles enfants :</strong&gt; École française de Lisbonne&lt;br/>
                  &lt;span className="text-orange-600"&gt;↳ €12,000/an/enfant, transport inclus</span>
                </div>
              </div>

              &lt;div className="mt-6 text-center">
                &lt;Link 
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
      &lt;section className="py-20 bg-gray-50">
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;div className="text-center mb-16">
            &lt;h2 className="text-3xl font-bold text-gray-900 mb-4">
              Destinations Populaires pour les Français
            </h2>
            &lt;p className="text-xl text-gray-600">
              Découvrez où s'installent les expatriés français et pourquoi
            </p>
          </div>

          &lt;div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            &lt;Link href="/fr/blog/taxes-portugal-expatries" className="bg-white rounded-xl p-6 border hover:shadow-lg transition group">
              &lt;div className="text-4xl mb-3"&gt;🇵🇹</div>
              &lt;h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600"&gt;Portugal</h3>
              &lt;p className="text-sm text-gray-600 mb-3">
                Régime IFICI, qualité de vie, UE. Budget couple : €2,200-3,500/mois.
              </p>
              &lt;div className="text-xs text-blue-600 font-semibold"&gt;En savoir plus →</div>
            </Link>

            &lt;Link href="/fr/blog/cout-vie-etranger-2026" className="bg-white rounded-xl p-6 border hover:shadow-lg transition group">
              &lt;div className="text-4xl mb-3"&gt;🇪🇸</div>
              &lt;h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600"&gt;Espagne</h3>
              &lt;p className="text-sm text-gray-600 mb-3">
                Régime Beckham, climat, culture. Budget couple : €1,950-3,100/mois.
              </p>
              &lt;div className="text-xs text-blue-600 font-semibold"&gt;En savoir plus →</div>
            </Link>

            &lt;Link href="/fr/blog/taxes-mexique-expatries" className="bg-white rounded-xl p-6 border hover:shadow-lg transition group">
              &lt;div className="text-4xl mb-3"&gt;🇲🇽</div>
              &lt;h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600"&gt;Mexique</h3>
              &lt;p className="text-sm text-gray-600 mb-3">
                Nomades digitaux, coût abordable. Budget couple : €1,600-2,800/mois.
              </p>
              &lt;div className="text-xs text-blue-600 font-semibold"&gt;En savoir plus →</div>
            </Link>

            &lt;Link href="/fr/blog/guide-fiscal-costa-rica-expatries" className="bg-white rounded-xl p-6 border hover:shadow-lg transition group">
              &lt;div className="text-4xl mb-3"&gt;🇨🇷</div>
              &lt;h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600"&gt;Costa Rica</h3>
              &lt;p className="text-sm text-gray-600 mb-3">
                Pura Vida, fiscalité territoriale. Budget couple : €1,400-2,200/mois.
              </p>
              &lt;div className="text-xs text-blue-600 font-semibold"&gt;En savoir plus →</div>
            </Link>
          </div>

          &lt;div className="text-center mt-8">
            &lt;Link 
              href="/fr/blog" 
              className="text-[#1a365d] font-semibold hover:underline"
            >
              Explorer toutes les destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      &lt;DynamicTestimonials />

      {/* CTA Final */}
      &lt;BlogCTA 
        title="Prêt à Déménager à l'Étranger ?"
        description="Obtenez votre rapport personnalisé en 5 minutes. Coût de la vie, impôts, visas et plan d'action pour votre destination idéale."
        buttonText="Créer mon rapport gratuit"
        buttonUrl="/fr/plan-36"
        language="fr"
      />

      {/* Footer */}
      &lt;footer className="bg-gray-900 text-white py-12">
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          &lt;div className="grid md:grid-cols-4 gap-8">
            &lt;div>
              &lt;div className="flex items-center gap-2 mb-4">
                &lt;div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  &lt;span className="text-white font-bold text-sm"&gt;R</span>
                </div>
                &lt;span className="font-bold text-xl"&gt;Reloca.ai</span>
              </div>
              &lt;p className="text-gray-400 text-sm">
                Votre guide personnalisé pour une expatriation réussie.
              </p>
            </div>

            &lt;div>
              &lt;h3 className="font-semibold mb-4"&gt;Destinations</h3>
              &lt;ul className="space-y-2 text-sm text-gray-400">
                &lt;li&gt;&lt;Link href="/fr/blog/taxes-portugal-expatries" className="hover:text-white"&gt;Portugal</Link></li>
                &lt;li&gt;&lt;Link href="/fr/blog/taxes-mexique-expatries" className="hover:text-white"&gt;Mexique</Link></li>
                &lt;li&gt;&lt;Link href="/fr/blog/guide-fiscal-costa-rica-expatries" className="hover:text-white"&gt;Costa Rica</Link></li>
                &lt;li&gt;&lt;Link href="/fr/blog" className="hover:text-white"&gt;Toutes les destinations</Link></li>
              </ul>
            </div>

            &lt;div>
              &lt;h3 className="font-semibold mb-4"&gt;Guides</h3>
              &lt;ul className="space-y-2 text-sm text-gray-400">
                &lt;li&gt;&lt;Link href="/fr/blog/cout-vie-etranger-2026" className="hover:text-white"&gt;Coût de la vie</Link></li>
                &lt;li&gt;&lt;Link href="/fr/blog/comparaison-visa-nomade-digital-2026" className="hover:text-white"&gt;Visas nomades</Link></li>
                &lt;li&gt;&lt;Link href="/fr/blog/demenager-etranger-enfants-2026" className="hover:text-white"&gt;Familles expatriées</Link></li>
                &lt;li&gt;&lt;Link href="/fr/plan-36" className="hover:text-white"&gt;Rapport personnalisé</Link></li>
              </ul>
            </div>

            &lt;div>
              &lt;h3 className="font-semibold mb-4"&gt;Langues</h3>
              &lt;ul className="space-y-2 text-sm text-gray-400">
                &lt;li&gt;&lt;Link href="/" className="hover:text-white"&gt;English</Link></li>
                &lt;li&gt;&lt;Link href="/fr" className="hover:text-white text-white"&gt;Français</Link></li>
              </ul>
            </div>
          </div>

          &lt;div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            &lt;p&gt;&copy; 2026 Reloca.ai. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}