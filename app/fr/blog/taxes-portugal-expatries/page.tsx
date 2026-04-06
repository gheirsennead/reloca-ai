import { BreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';
import { BlogLayout } from '@/components/BlogLayout';
import { BlogEmailGate } from '@/components/BlogEmailGate';
import { BlogCTA } from '@/components/BlogCTA';
import { RelatedArticles } from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Guide Complet des Impôts au Portugal pour les Expatriés (Mise à Jour 2026) | Reloca.ai',
  description: 'Guide complet des impôts au Portugal pour expatriés. Apprenez le régime IFICI (remplaçant NHR), taux d\'imposition, déductions et stratégies. Mis à jour Mars 2026.',
  keywords: ['impôts portugal expatriés', 'taux imposition portugal 2026', 'avantages fiscaux portugal', 'taxes expatriés portugal', 'NHR portugal', 'IFICI portugal'],
  openGraph: {
    title: 'Guide Complet des Impôts au Portugal pour les Expatriés (Mise à Jour 2026)',
    description: 'Guide complet des impôts au Portugal pour expatriés. Régime IFICI, taux d\'imposition et stratégies d\'optimisation. Mis à jour Mars 2026.',
    url: 'https://reloca.ai/fr/blog/taxes-portugal-expatries',
    type: 'article',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image.png', width: 1200, height: 630 }],
    publishedTime: '2026-03-10T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Complet des Impôts au Portugal pour les Expatriés (Mise à Jour 2026) | Reloca.ai',
    description: "Guide complet des impôts au Portugal pour expatriés. Apprenez le régime IFICI (remplaçant NHR), taux d'imposition, déductions et stratégies. Mis à jour Mars 2026.",
    images: ['https://reloca.ai/images/og-image.png'],
  },
};

export default function ImpôtsPortugalExpatriésArticle() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Guide Complet des Impôts au Portugal pour les Expatriés (Mise à Jour 2026)',
    description: 'Guide complet des impôts au Portugal pour expatriés. Apprenez le régime IFICI (remplaçant NHR), taux d\'imposition, déductions et stratégies.',
    image: 'https://reloca.ai/images/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'Reloca.ai',
      url: 'https://reloca.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reloca.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reloca.ai/images/reloca-logo.png',
      },
    },
    datePublished: '2026-03-10T00:00:00Z',
    dateModified: '2026-03-10T00:00:00Z',
    url: 'https://reloca.ai/fr/blog/taxes-portugal-expatries',
  };

  return (
    &lt;>
      &lt;script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      &lt;BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://reloca.ai/fr' },
          { name: 'Blog', url: 'https://reloca.ai/fr/blog' },
          { name: 'Impôts Portugal Expatriés', url: 'https://reloca.ai/fr/blog/taxes-portugal-expatries' },
        ]}
      />
      
      &lt;BlogLayout>
        &lt;article className="max-w-4xl mx-auto px-4 py-16">
          {/* Header */}
          &lt;header className="mb-12 text-center">
            &lt;div className="flex items-center justify-center gap-2 mb-4">
              &lt;span className="text-4xl"&gt;🇵🇹</span>
              &lt;span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Mis à jour Mars 2026
              </span>
            </div>
            &lt;h1 className="text-4xl font-bold text-[#1a365d] mb-6 leading-tight">
              Guide Complet des Impôts au Portugal pour les Expatriés
            </h1>
            &lt;p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Le système fiscal portugais a changé dramatiquement en 2024 quand le régime NHR a été remplacé par IFICI. 
              Découvrez le nouveau régime, les taux d'imposition et les stratégies d'optimisation pour les expatriés.
            </p>
            &lt;div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-6">
              &lt;span&gt;📅 10 min de lecture</span>
              &lt;span&gt;✍️ Par l'équipe Reloca.ai</span>
              &lt;span&gt;🔄 Dernière mise à jour : Mars 2026</span>
            </div>
          </header>

          {/* Quick Summary */}
          &lt;div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            &lt;h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              📋 Résumé Exécutif
            </h2>
            &lt;div className="text-blue-800 space-y-2">
              &lt;p&gt;&lt;strong&gt;⚡ Changement majeur :</strong&gt; Le régime NHR a été supprimé en janvier 2024, remplacé par IFICI</p>
              &lt;p&gt;&lt;strong&gt;💰 Nouveaux taux :</strong&gt; 20% d'imposition forfaitaire pendant 10 ans (vs 0-10% avec NHR)</p>
              &lt;p&gt;&lt;strong&gt;🎯 Éligibilité :</strong&gt; Plus restrictive - revenus professionnels qualifiés uniquement</p>
              &lt;p&gt;&lt;strong&gt;📅 Date limite :</strong&gt; Les demandes IFICI doivent être faites avant le 31 mars de l'année suivant l'arrivée</p>
            </div>
          </div>

          {/* Main Content */}
          &lt;div className="prose prose-lg max-w-none">
            &lt;h2&gt;🚨 Changement Majeur : Adieu NHR, Bonjour IFICI</h2>
            &lt;p>
              Si vous pensiez encore au fameux régime NHR (Résident Non Habituel) du Portugal, il est temps de mettre à jour vos connaissances. 
              Depuis le 1er janvier 2024, le Portugal a officiellement supprimé le régime NHR et l'a remplacé par le nouveau régime IFICI 
              (Incitativo Fiscal para o Interior e Captação de Investimento).
            </p>

            &lt;div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              &lt;p className="text-red-700">
                &lt;strong&gt;⚠️ Important :</strong&gt; Toutes les demandes NHR déposées avant le 31 décembre 2023 restent valables et continuent 
                de bénéficier de l'ancien régime pendant leurs 10 années complètes.
              </p>
            </div>

            &lt;h2&gt;💡 Qu'est-ce que le Régime IFICI ?</h2>
            &lt;p>
              Le nouveau régime IFICI est conçu pour attirer des investisseurs et des professionnels qualifiés au Portugal, 
              mais avec des critères beaucoup plus stricts que l'ancien NHR :
            </p>

            &lt;ul>
              &lt;li&gt;&lt;strong&gt;Taux d'imposition :</strong&gt; 20% forfaitaire pendant 10 ans (au lieu des taux progressifs normaux jusqu'à 48%)</li>
              &lt;li&gt;&lt;strong&gt;Activités éligibles :</strong&gt; Liste restrictive d'activités professionnelles "de haute valeur ajoutée"</li>
              &lt;li&gt;&lt;strong&gt;Revenus de pension :</strong&gt; Désormais taxés à 10% (contre 0% avec NHR)</li>
              &lt;li&gt;&lt;strong&gt;Revenus étrangers :</strong&gt; Taxés selon les traités de double imposition</li>
            </ul>

            &lt;BlogEmailGate 
              title="Obtenez notre calculateur fiscal Portugal gratuit 🧮" 
              description="Calculez vos impôts sous le nouveau régime IFICI vs régime normal. PDF gratuit avec exemples concrets."
              buttonText="Télécharger le calculateur"
              language="fr"
            />

            &lt;h2&gt;🎯 Qui Peut Bénéficier d'IFICI ?</h2>
            &lt;p>
              Contrairement au NHR qui était accessible à presque tout le monde, IFICI est beaucoup plus sélectif. 
              Vous devez exercer une activité professionnelle dans l'une de ces catégories :
            </p>

            &lt;div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              &lt;h3 className="text-green-900 font-bold mb-4"&gt;✅ Activités Éligibles IFICI :</h3>
              &lt;div className="grid md:grid-cols-2 gap-3 text-green-800">
                &lt;div>
                  &lt;strong&gt;Tech & Innovation :</strong>
                  &lt;ul className="ml-4 list-disc">
                    &lt;li&gt;Ingénieurs informatiques</li>
                    &lt;li&gt;Développeurs de logiciels</li>
                    &lt;li&gt;Experts en cybersécurité</li>
                    &lt;li&gt;Data scientists</li>
                  </ul>
                </div>
                &lt;div>
                  &lt;strong&gt;Finance & Conseil :</strong>
                  &lt;ul className="ml-4 list-disc">
                    &lt;li&gt;Conseillers financiers</li>
                    &lt;li&gt;Experts-comptables</li>
                    &lt;li&gt;Consultants en management</li>
                    &lt;li&gt;Avocats spécialisés</li>
                  </ul>
                </div>
                &lt;div>
                  &lt;strong&gt;Santé & Sciences :</strong>
                  &lt;ul className="ml-4 list-disc">
                    &lt;li&gt;Médecins spécialisés</li>
                    &lt;li&gt;Chercheurs scientifiques</li>
                    &lt;li&gt;Pharmaciens</li>
                    &lt;li&gt;Ingénieurs biomédicaux</li>
                  </ul>
                </div>
                &lt;div>
                  &lt;strong&gt;Arts & Média :</strong>
                  &lt;ul className="ml-4 list-disc">
                    &lt;li&gt;Architectes</li>
                    &lt;li&gt;Designers</li>
                    &lt;li&gt;Producteurs audiovisuels</li>
                    &lt;li&gt;Journalistes spécialisés</li>
                  </ul>
                </div>
              </div>
            </div>

            &lt;h2&gt;💰 Comparaison des Coûts : IFICI vs Régime Normal</h2>
            &lt;p&gt;Voici comment les différents régimes fiscaux se comparent pour différents niveaux de revenus :</p>

            &lt;div className="overflow-x-auto my-8">
              &lt;table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                &lt;thead>
                  &lt;tr className="bg-gray-50">
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Revenu Annuel</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;IFICI (20%)</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Régime Normal</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Économies IFICI</th>
                  </tr>
                </thead>
                &lt;tbody>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;50 000€</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-green-600 font-bold"&gt;10 000€</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;11 500€</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-green-600"&gt;+1 500€</td>
                  </tr>
                  &lt;tr className="bg-gray-50">
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;75 000€</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-green-600 font-bold"&gt;15 000€</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;21 250€</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-green-600"&gt;+6 250€</td>
                  </tr>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;100 000€</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-green-600 font-bold"&gt;20 000€</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;32 500€</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-green-600"&gt;+12 500€</td>
                  </tr>
                  &lt;tr className="bg-gray-50">
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;150 000€</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-green-600 font-bold"&gt;30 000€</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;54 250€</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-green-600"&gt;+24 250€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            &lt;p className="text-sm text-gray-600 italic">
              * Calculs basés sur les taux 2026, sans compter les déductions et autres avantages fiscaux possibles
            </p>

            &lt;h2&gt;⚡ Comment Demander le Régime IFICI : Guide Étape par Étape</h2>
            &lt;div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              &lt;p className="text-yellow-800">
                &lt;strong&gt;⏰ Date limite critique :</strong&gt; Vous devez faire votre demande IFICI avant le 31 mars de l'année suivant 
                votre arrivée au Portugal. Pas d'exceptions !
              </p>
            </div>

            &lt;ol className="space-y-4">
              &lt;li>
                &lt;strong&gt;1. Établir la résidence fiscale</strong>
                &lt;p&gt;Vous devez devenir résident fiscal portugais en passant plus de 183 jours par an au Portugal ou en y ayant votre résidence principale.</p>
              </li>
              &lt;li>
                &lt;strong&gt;2. Préparer les documents</strong>
                &lt;ul className="mt-2 ml-6 list-disc space-y-1">
                  &lt;li&gt;Certificat de résidence fiscale de votre pays d'origine</li>
                  &lt;li&gt;Preuve de vos qualifications professionnelles</li>
                  &lt;li&gt;Contrat de travail ou preuve d'activité indépendante au Portugal</li>
                  &lt;li&gt;Numéro fiscal portugais (NIF)</li>
                </ul>
              </li>
              &lt;li>
                &lt;strong&gt;3. Soumettre la demande</strong>
                &lt;p&gt;La demande se fait via le Portal das Finanças ou directement au bureau des impôts local avec le formulaire approprié.</p>
              </li>
              &lt;li>
                &lt;strong&gt;4. Attendre l'approbation</strong>
                &lt;p&gt;Le délai de traitement est généralement de 2-4 mois. Une fois approuvé, le régime s'applique rétroactivement à partir de votre date d'arrivée.</p>
              </li>
            </ol>

            &lt;BlogCTA 
              title="Besoin d'aide pour votre installation fiscale au Portugal ?"
              description="Notre rapport personnalisé couvre tous les aspects fiscaux, visa et coût de la vie pour votre situation spécifique."
              buttonText="Obtenir mon rapport Portugal"
              buttonUrl="/fr/plan-36"
              language="fr"
            />

            &lt;h2&gt;🔍 Autres Considérations Fiscales au Portugal</h2>
            
            &lt;h3&gt;💼 TVA et Activités Indépendantes</h3>
            &lt;p>
              Si vous travaillez en indépendant au Portugal, vous devrez également gérer la TVA (IVA en portugais) :
            </p>
            &lt;ul>
              &lt;li&gt;&lt;strong&gt;Seuil d'exemption :</strong&gt; 12 500€ de chiffre d'affaires annuel</li>
              &lt;li&gt;&lt;strong&gt;Taux normal :</strong&gt; 23% (l'un des plus élevés d'Europe)</li>
              &lt;li&gt;&lt;strong&gt;Déclarations :</strong&gt; Trimestrielles si CA &gt; 650 000€, sinon annuelles</li>
            </ul>

            &lt;h3&gt;🏠 Impôts Fonciers (IMI)</h3>
            &lt;p>
              Si vous achetez un bien immobilier au Portugal :
            </p>
            &lt;ul>
              &lt;li&gt;&lt;strong&gt;Taux IMI :</strong&gt; 0,3% à 0,45% de la valeur cadastrale annuellement</li>
              &lt;li&gt;&lt;strong&gt;IMT (taxe de mutation) :</strong&gt; 0% à 8% selon la valeur (première résidence bénéficie d'exemptions)</li>
              &lt;li&gt;&lt;strong&gt;Déclaration :</strong&gt; Automatique, facture reçue en avril-mai chaque année</li>
            </ul>

            &lt;h3&gt;💸 Plus-Values Immobilières</h3>
            &lt;p>
              Les gains en capital sur la vente de biens immobiliers sont imposés différemment :
            </p>
            &lt;ul>
              &lt;li&gt;&lt;strong&gt;Résidence principale :</strong&gt; Exemption si vous réinvestissez dans une autre résidence principale</li>
              &lt;li&gt;&lt;strong&gt;Investissement locatif :</strong&gt; 50% de la plus-value est imposable aux taux normaux</li>
              &lt;li&gt;&lt;strong&gt;Non-résidents :</strong&gt; 25% de taxation forfaitaire sur les plus-values</li>
            </ul>

            &lt;h2&gt;🤔 IFICI vs Autres Régimes Européens : Comment le Portugal se Compare</h2>
            &lt;div className="overflow-x-auto my-8">
              &lt;table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                &lt;thead>
                  &lt;tr className="bg-gray-50">
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Pays</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Régime Spécial</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Taux Préférentiel</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Durée</th>
                  </tr>
                </thead>
                &lt;tbody>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;🇵🇹 Portugal</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;IFICI</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;20%</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;10 ans</td>
                  </tr>
                  &lt;tr className="bg-gray-50">
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;🇪🇸 Espagne</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;Régime Beckham</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;24%</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;6 ans</td>
                  </tr>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;🇮🇹 Italie</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;Régime Impatriés</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;10-30%</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;5-10 ans</td>
                  </tr>
                  &lt;tr className="bg-gray-50">
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;🇬🇷 Grèce</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;Régime Retraités</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;7%</td>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;15 ans</td>
                  </tr>
                </tbody>
              </table>
            </div>

            &lt;h2&gt;⚠️ Pièges à Éviter</h2>
            &lt;div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              &lt;h3 className="text-red-900 font-bold mb-4"&gt;🚨 Erreurs Courantes :</h3>
              &lt;ul className="space-y-3 text-red-800">
                &lt;li&gt;&lt;strong&gt;Rater la date limite :</strong&gt; Pas de demande après le 31 mars = pas d'IFICI possible</li>
                &lt;li&gt;&lt;strong&gt;Mauvaise catégorie professionnelle :</strong&gt; Vérifiez que votre activité est bien éligible avant de déménager</li>
                &lt;li&gt;&lt;strong&gt;Négliger les obligations déclaratives :</strong&gt; Même avec IFICI, vous devez déclarer tous vos revenus mondiaux</li>
                &lt;li&gt;&lt;strong&gt;Confondre résidence fiscale et visa :</strong&gt; Ce sont deux processus séparés avec des critères différents</li>
                &lt;li&gt;&lt;strong&gt;Oublier la sécurité sociale :</strong&gt; IFICI ne couvre que l'impôt sur le revenu, pas les cotisations sociales</li>
              </ul>
            </div>

            &lt;h2&gt;🔮 Perspectives d'Avenir : Que Réserver pour IFICI ?</h2>
            &lt;p>
              Le régime IFICI étant encore récent (lancé en 2024), il est probable que des ajustements soient apportés dans les années à venir. 
              Les points à surveiller :
            </p>
            &lt;ul>
              &lt;li&gt;&lt;strong&gt;Élargissement des activités éligibles :</strong&gt; Le Portugal pourrait ajouter de nouvelles professions selon la demande</li>
              &lt;li&gt;&lt;strong&gt;Modifications des taux :</strong&gt; Le taux de 20% pourrait être ajusté selon l'efficacité du dispositif</li>
              &lt;li&gt;&lt;strong&gt;Critères de résidence :</strong&gt; Possibles assouplissements pour attirer plus d'investisseurs</li>
            </ul>

            &lt;div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              &lt;h3 className="text-blue-900 font-bold mb-3"&gt;💡 Conseil d'Expert :</h3>
              &lt;p className="text-blue-800">
                Si vous envisagez le Portugal, agissez rapidement. Les régimes fiscaux avantageux ont tendance à se durcir avec le temps, 
                et il vaut mieux être installé sous l'ancien régime que de regretter plus tard. 
                De plus, même si IFICI est moins avantageux que l'ancien NHR, il reste très compétitif par rapport à la plupart des pays européens.
              </p>
            </div>

            &lt;h2&gt;📋 Checklist : Êtes-vous Prêt pour le Portugal ?</h2>
            &lt;div className="bg-gray-50 rounded-lg p-6 my-8">
              &lt;div className="grid md:grid-cols-2 gap-6">
                &lt;div>
                  &lt;h4 className="font-bold text-gray-900 mb-3"&gt;✅ Prérequis IFICI :</h4>
                  &lt;ul className="space-y-2 text-gray-700">
                    &lt;li&gt;☐ Activité professionnelle éligible</li>
                    &lt;li&gt;☐ Pas de résidence fiscale portugaise dans les 5 dernières années</li>
                    &lt;li&gt;☐ Plan de résider au Portugal &gt; 183 jours/an</li>
                    &lt;li&gt;☐ Documents professionnels traduits et apostillés</li>
                  </ul>
                </div>
                &lt;div>
                  &lt;h4 className="font-bold text-gray-900 mb-3"&gt;📋 Documents à Préparer :</h4>
                  &lt;ul className="space-y-2 text-gray-700">
                    &lt;li&gt;☐ Certificat de résidence fiscale actuel</li>
                    &lt;li&gt;☐ CV et diplômes traduits</li>
                    &lt;li&gt;☐ Justificatifs de revenus (3 dernières années)</li>
                    &lt;li&gt;☐ Assurance santé internationale</li>
                  </ul>
                </div>
              </div>
            </div>

            &lt;h2&gt;🎯 Conclusion : IFICI Vaut-il Encore le Coup ?</h2>
            &lt;p>
              Bien que le nouveau régime IFICI soit moins généreux que l'ancien NHR, il reste une option attractive pour les professionnels qualifiés :
            </p>
            &lt;div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              &lt;h3 className="text-green-900 font-bold mb-3"&gt;✅ Avantages IFICI :</h3>
              &lt;ul className="space-y-2 text-green-800">
                &lt;li&gt;• Économies fiscales substantielles (jusqu'à 28% vs régime normal)</li>
                &lt;li&gt;• Certitude fiscale pendant 10 ans</li>
                &lt;li&gt;• Accès au marché européen et qualité de vie portugaise</li>
                &lt;li&gt;• Coût de la vie raisonnable comparé aux autres capitales européennes</li>
              </ul>
            </div>

            &lt;div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
              &lt;h3 className="text-red-900 font-bold mb-3"&gt;❌ Inconvénients IFICI :</h3>
              &lt;ul className="space-y-2 text-red-800">
                &lt;li&gt;• Critères d'éligibilité stricts</li>
                &lt;li&gt;• Taux plus élevé qu'avant (20% vs 0-10% avec NHR)</li>
                &lt;li&gt;• Pensions désormais taxées</li>
                &lt;li&gt;• Bureaucratie portugaise parfois lente</li>
              </ul>
            </div>

            &lt;p>
              &lt;strong&gt;Notre verdict :</strong&gt; Si votre activité est éligible et que vous gagnez plus de 75 000€ par an, 
              IFICI reste un choix judicieux. En dessous, d'autres destinations comme l'Espagne avec le régime Beckham ou 
              certains pays sans impôt sur le revenu pourraient être plus avantageux.
            </p>
          </div>

          &lt;RelatedArticles 
            articles={[
              {
                title: "Régime Beckham en Espagne : Guide Complet 2026",
                excerpt: "Découvrez le régime fiscal espagnol qui permet aux nouveaux résidents de payer seulement 24% d'impôts.",
                slug: "regime-beckham-espagne-2026",
                readTime: "8 min"
              },
              {
                title: "Grèce : 7% d'Impôts pour les Retraités Étrangers",
                excerpt: "Le programme grec offre 15 ans d'imposition à 7% pour les retraités qui s'installent en Grèce.",
                slug: "grece-7-pour-cent-retraites-etrangers",
                readTime: "6 min"
              },
              {
                title: "Comparaison Complète : Portugal vs Espagne pour les Expatriés",
                excerpt: "Analyse détaillée des avantages fiscaux, coût de la vie et qualité de vie entre ces deux destinations.",
                slug: "portugal-vs-espagne-expatries-comparaison",
                readTime: "12 min"
              }
            ]}
            language="fr"
          />
        </article>
      </BlogLayout>
    </>
  );
}