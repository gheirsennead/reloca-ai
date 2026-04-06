import { BreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';
import { BlogLayout } from '@/components/BlogLayout';
import { BlogEmailGate } from '@/components/BlogEmailGate';
import { BlogCTA } from '@/components/BlogCTA';
import { RelatedArticles } from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Guide Fiscal Costa Rica 2026 : Impôts pour Expatriés | Reloca.ai',
  description: 'Guide complet de la fiscalité au Costa Rica pour expatriés. Résidence, impôts locaux vs étrangers, optimisation fiscale et Pura Vida lifestyle.',
  keywords: ['impôts costa rica', 'fiscalité costa rica expatriés', 'résidence costa rica', 'taxes costa rica', 'pura vida fiscal'],
  openGraph: {
    title: 'Guide Fiscal Costa Rica 2026 : Impôts pour Expatriés',
    description: 'Guide complet de la fiscalité au Costa Rica. Résidence, impôts et optimisation pour expatriés.',
    url: 'https://reloca.ai/fr/blog/guide-fiscal-costa-rica-expatries',
    type: 'article',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image.png', width: 1200, height: 630 }],
    publishedTime: '2026-03-25T00:00:00Z',
  },
};

export default function GuideFiscalCostaRicaArticle() {
  return (
    &lt;>
      &lt;BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://reloca.ai/fr' },
          { name: 'Blog', url: 'https://reloca.ai/fr/blog' },
          { name: 'Guide Fiscal Costa Rica', url: 'https://reloca.ai/fr/blog/guide-fiscal-costa-rica-expatries' },
        ]}
      />
      
      &lt;BlogLayout>
        &lt;article className="max-w-4xl mx-auto px-4 py-16">
          &lt;header className="mb-12 text-center">
            &lt;div className="flex items-center justify-center gap-2 mb-4">
              &lt;span className="text-4xl"&gt;🇨🇷</span>
              &lt;span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Pura Vida Fiscal
              </span>
            </div>
            &lt;h1 className="text-4xl font-bold text-[#1a365d] mb-6 leading-tight">
              Guide Fiscal Costa Rica 2026 : Impôts pour Expatriés
            </h1>
            &lt;p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Fiscalité territoriale, résidence permanente, et vie Pura Vida : tout savoir sur les impôts 
              au Costa Rica pour optimiser votre installation dans ce paradis vert.
            </p>
            &lt;div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-6">
              &lt;span&gt;📅 14 min de lecture</span>
              &lt;span&gt;✍️ Experts Costa Rica</span>
              &lt;span&gt;🔄 Mars 2026</span>
            </div>
          </header>

          &lt;div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
            &lt;h2 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
              🌟 Pourquoi le Costa Rica est Fiscal-Friendly
            </h2>
            &lt;div className="grid md:grid-cols-2 gap-4 text-green-800">
              &lt;div>
                &lt;p&gt;&lt;strong&gt;💰 Fiscalité territoriale :</strong&gt; Seuls revenus Costa Rica taxés</p>
                &lt;p&gt;&lt;strong&gt;🏖️ Qualité de vie :</strong&gt; "Zona Azul" + Pura Vida</p>
              </div>
              &lt;div>
                &lt;p&gt;&lt;strong&gt;🎯 Résidence facile :</strong&gt; Pensionado, Rentista, Inversionista</p>
                &lt;p&gt;&lt;strong&gt;💚 Écologie :</strong&gt; 99% énergie renouvelable</p>
              </div>
            </div>
          </div>

          &lt;div className="prose prose-lg max-w-none">
            &lt;h2&gt;🌍 Costa Rica : Le Paradis Fiscal Méconnu</h2>
            &lt;p>
              Le Costa Rica pratique une &lt;strong&gt;fiscalité territoriale</strong&gt; : seuls les revenus générés 
              sur le territoire costaricien sont imposés. Cette particularité en fait une destination 
              attractive pour les retraités, investisseurs et nomades digitaux.
            </p>

            &lt;div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              &lt;h3 className="text-blue-800 font-bold"&gt;✨ Avantages Uniques du Costa Rica :</h3>
              &lt;ul className="text-blue-700 mt-2 space-y-1">
                &lt;li&gt;• &lt;strong&gt;Revenus étrangers non imposés</strong&gt; (pension, investissements, télétravail)</li>
                &lt;li&gt;• &lt;strong&gt;Pas d'impôt sur le patrimoine</strong&gt; ou succession</li>
                &lt;li&gt;• &lt;strong&gt;Stabilité politique</strong&gt; : démocratie depuis 1948, pas d'armée</li>
                &lt;li&gt;• &lt;strong&gt;Système de santé public</strong&gt; (Caja) accessible aux résidents</li>
                &lt;li&gt;• &lt;strong&gt;Zone bleue</strong&gt; : Nicoya Peninsula, longévité exceptionnelle</li>
              </ul>
            </div>

            &lt;h2&gt;🎯 Qui Paie des Impôts au Costa Rica ?</h2>
            &lt;div className="grid md:grid-cols-2 gap-6 my-8">
              &lt;div className="bg-red-50 border border-red-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-red-900 mb-4"&gt;❌ IMPOSÉS au Costa Rica</h3>
                &lt;ul className="space-y-2 text-red-800">
                  &lt;li&gt;• &lt;strong&gt;Salaires locaux :</strong&gt; Emploi au Costa Rica</li>
                  &lt;li&gt;• &lt;strong&gt;Business local :</strong&gt; Entreprise costaricienne</li>
                  &lt;li&gt;• &lt;strong&gt;Immobilier local :</strong&gt; Loyers de biens au Costa Rica</li>
                  &lt;li&gt;• &lt;strong&gt;Plus-values locales :</strong&gt; Vente immobilier Costa Rica</li>
                  &lt;li&gt;• &lt;strong&gt;Services fournis</strong&gt; depuis le Costa Rica</li>
                </ul>
              </div>

              &lt;div className="bg-green-50 border border-green-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-green-900 mb-4"&gt;✅ NON-IMPOSÉS au Costa Rica</h3>
                &lt;ul className="space-y-2 text-green-800">
                  &lt;li&gt;• &lt;strong&gt;Pensions étrangères :</strong&gt; France, Canada, USA...</li>
                  &lt;li&gt;• &lt;strong&gt;Télétravail :</strong&gt; Client/employeur étranger</li>
                  &lt;li&gt;• &lt;strong&gt;Investissements :</strong&gt; Actions, crypto, immobilier étranger</li>
                  &lt;li&gt;• &lt;strong&gt;Rentes :</strong&gt; Assurance vie, revenus passifs étrangers</li>
                  &lt;li&gt;• &lt;strong&gt;Royalties :</strong&gt; Propriété intellectuelle étrangère</li>
                </ul>
              </div>
            </div>

            &lt;div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              &lt;p className="text-yellow-800">
                &lt;strong&gt;⚠️ Attention :</strong&gt; "Source costaricienne" peut être interprétée largement. 
                Si vous travaillez depuis le Costa Rica pour des clients étrangers, la source peut être 
                considérée comme locale. Consultez un expert fiscal local.
              </p>
            </div>

            &lt;h2&gt;🏠 Types de Résidence et Implications Fiscales</h2>
            &lt;p>
              Le Costa Rica offre plusieurs statuts de résidence, chacun avec des implications fiscales différentes :
            </p>

            &lt;div className="space-y-8 my-8">
              &lt;div className="bg-white border border-gray-200 rounded-lg p-6">
                &lt;div className="flex items-center gap-3 mb-4">
                  &lt;span className="text-2xl"&gt;👴</span>
                  &lt;h3 className="text-xl font-bold"&gt;Pensionado (Retraité)</h3>
                  &lt;span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"&gt;Le Plus Populaire</span>
                </div>
                
                &lt;div className="grid md:grid-cols-2 gap-6 mb-4">
                  &lt;div>
                    &lt;h4 className="font-bold text-gray-900"&gt;📋 Exigences</h4>
                    &lt;ul className="text-sm text-gray-700 space-y-1">
                      &lt;li&gt;• Pension minimum $1,000/mois (€900)</li>
                      &lt;li&gt;• Source gouvernementale ou privée</li>
                      &lt;li&gt;• Documents apostillés requis</li>
                      &lt;li&gt;• Examen médical</li>
                    </ul>
                  </div>
                  &lt;div>
                    &lt;h4 className="font-bold text-gray-900"&gt;💰 Avantages Fiscaux</h4>
                    &lt;ul className="text-sm text-gray-700 space-y-1">
                      &lt;li&gt;• Pension étrangère NON imposée</li>
                      &lt;li&gt;• Importation véhicule sans douane</li>
                      &lt;li&gt;• Importation mobilier €4,000 sans taxe</li>
                      &lt;li&gt;• Pas de minimum de séjour</li>
                    </ul>
                  </div>
                </div>
                
                &lt;div className="bg-blue-50 p-3 rounded">
                  &lt;p className="text-sm text-blue-800">
                    &lt;strong&gt;💡 Parfait pour :</strong&gt; Retraités français avec pension ≥ €900/mois. 
                    La pension reste imposée en France selon convention fiscale.
                  </p>
                </div>
              </div>

              &lt;div className="bg-white border border-gray-200 rounded-lg p-6">
                &lt;div className="flex items-center gap-3 mb-4">
                  &lt;span className="text-2xl"&gt;💰</span>
                  &lt;h3 className="text-xl font-bold"&gt;Rentista (Rentier)</h3>
                  &lt;span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded"&gt;Nomades Digitaux</span>
                </div>
                
                &lt;div className="grid md:grid-cols-2 gap-6 mb-4">
                  &lt;div>
                    &lt;h4 className="font-bold text-gray-900"&gt;📋 Exigences</h4>
                    &lt;ul className="text-sm text-gray-700 space-y-1">
                      &lt;li&gt;• Rente $2,500/mois (€2,250) pendant 2 ans</li>
                      &lt;li&gt;• Ou dépôt bancaire $60,000 (€54,000)</li>
                      &lt;li&gt;• Source passive (investissements, rentes)</li>
                      &lt;li&gt;• Interdiction de travailler localement</li>
                    </ul>
                  </div>
                  &lt;div>
                    &lt;h4 className="font-bold text-gray-900"&gt;💰 Avantages Fiscaux</h4>
                    &lt;ul className="text-sm text-gray-700 space-y-1">
                      &lt;li&gt;• Rentes étrangères NON imposées</li>
                      &lt;li&gt;• Télétravail étranger possible</li>
                      &lt;li&gt;• Investissements étrangers libres</li>
                      &lt;li&gt;• Importations privilégiées</li>
                    </ul>
                  </div>
                </div>
                
                &lt;div className="bg-green-50 p-3 rounded">
                  &lt;p className="text-sm text-green-800">
                    &lt;strong&gt;💡 Parfait pour :</strong&gt; Investisseurs, nomades digitaux, retraités anticipés 
                    avec revenus passifs. Pas de restrictions sur l'activité à distance.
                  </p>
                </div>
              </div>

              &lt;div className="bg-white border border-gray-200 rounded-lg p-6">
                &lt;div className="flex items-center gap-3 mb-4">
                  &lt;span className="text-2xl"&gt;🏢</span>
                  &lt;h3 className="text-xl font-bold"&gt;Inversionista (Investisseur)</h3>
                  &lt;span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded"&gt;Business</span>
                </div>
                
                &lt;div className="grid md:grid-cols-2 gap-6 mb-4">
                  &lt;div>
                    &lt;h4 className="font-bold text-gray-900"&gt;📋 Exigences</h4>
                    &lt;ul className="text-sm text-gray-700 space-y-1">
                      &lt;li&gt;• Investissement $200,000+ (€180,000)</li>
                      &lt;li&gt;• Dans secteurs autorisés</li>
                      &lt;li&gt;• Création d'emplois locaux</li>
                      &lt;li&gt;• Business plan détaillé</li>
                    </ul>
                  </div>
                  &lt;div>
                    &lt;h4 className="font-bold text-gray-900"&gt;💰 Implications Fiscales</h4>
                    &lt;ul className="text-sm text-gray-700 space-y-1">
                      &lt;li&gt;• Profits business local = imposés</li>
                      &lt;li&gt;• Autres revenus étrangers libres</li>
                      &lt;li&gt;• Incitations sectorielles possibles</li>
                      &lt;li&gt;• Libre-zone export (avantages)</li>
                    </ul>
                  </div>
                </div>
                
                &lt;div className="bg-purple-50 p-3 rounded">
                  &lt;p className="text-sm text-purple-800">
                    &lt;strong&gt;💡 Parfait pour :</strong&gt; Entrepreneurs voulant créer une entreprise au Costa Rica. 
                    Secteurs prioritaires : technologie, tourisme, agriculture durable.
                  </p>
                </div>
              </div>
            </div>

            &lt;BlogEmailGate 
              title="Guide Résidence Costa Rica Gratuit 📋" 
              description="Comparaison détaillée des 3 types de résidence avec procédures, coûts et optimisation fiscale."
              buttonText="Télécharger le guide"
              language="fr"
            />

            &lt;h2&gt;💰 Barème Fiscal Costa Rica (Revenus Locaux Uniquement)</h2>
            &lt;p>
              Pour les revenus de source costaricienne, voici le barème progressif 2026 :
            </p>

            &lt;div className="overflow-x-auto my-8">
              &lt;table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                &lt;thead>
                  &lt;tr className="bg-gray-50">
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Tranche Annuelle (CRC)</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-center"&gt;Taux</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-center"&gt;Équivalent € (approx)</th>
                  </tr>
                </thead>
                &lt;tbody>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;0 - ₡863,000</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center text-green-600 font-bold"&gt;0%</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;0 - €1,400</td>
                  </tr>
                  &lt;tr className="bg-gray-50">
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;₡863,001 - ₡1,267,000</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;10%</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€1,401 - €2,050</td>
                  </tr>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;₡1,267,001 - ₡2,085,000</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;15%</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€2,051 - €3,370</td>
                  </tr>
                  &lt;tr className="bg-gray-50">
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;₡2,085,001 - ₡4,169,000</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;20%</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€3,371 - €6,740</td>
                  </tr>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;₡4,169,001+</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-bold"&gt;25%</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€6,741+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            &lt;p className="text-sm text-gray-600 italic">
              * Taux de change : 1 EUR = ~620 CRC (variable). Abattement de base : ₡863,000/an (€1,400).
            </p>

            &lt;h2&gt;🏡 Taxes sur l'Immobilier</h2>
            &lt;div className="grid md:grid-cols-2 gap-6 my-8">
              &lt;div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-blue-900 mb-4"&gt;🏠 Taxe Foncière (Impuesto Territorial)</h3>
                &lt;ul className="space-y-2 text-blue-800 text-sm">
                  &lt;li&gt;• &lt;strong&gt;Taux :</strong&gt; 0.25% de la valeur cadastrale/an</li>
                  &lt;li&gt;• &lt;strong&gt;Paiement :</strong&gt; Trimestriel ou annuel</li>
                  &lt;li&gt;• &lt;strong&gt;Exemption :</strong&gt; Résidence principale &lt; ₡10M</li>
                  &lt;li&gt;• &lt;strong&gt;Évaluation :</strong&gt; Basée sur valeur cadastrale (souvent sous-évaluée)</li>
                </ul>
              </div>

              &lt;div className="bg-green-50 border border-green-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-green-900 mb-4"&gt;💰 Taxe de Luxe (Impuesto Solidario)</h3>
                &lt;ul className="space-y-2 text-green-800 text-sm">
                  &lt;li&gt;• &lt;strong&gt;Seuil :</strong&gt; Biens &gt; $204,000 (€185,000)</li>
                  &lt;li&gt;• &lt;strong&gt;Taux :</strong&gt; 0.25% - 0.55% selon valeur</li>
                  &lt;li&gt;• &lt;strong&gt;Base :</strong&gt; Valeur de construction uniquement</li>
                  &lt;li&gt;• &lt;strong&gt;Paiement :</strong&gt; Annuel avec la déclaration revenus</li>
                </ul>
              </div>
            </div>

            &lt;div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              &lt;p className="text-yellow-800">
                &lt;strong&gt;💡 Astuce immobilière :</strong&gt; Beaucoup d'expatriés achètent via une société costaricienne 
                pour éviter les restrictions sur la propriété étrangère près des côtes (50m de la mer).
              </p>
            </div>

            &lt;h2&gt;🌐 Nomades Digitaux : Guide Spécial</h2>
            &lt;p>
              Le Costa Rica est devenu une destination phare pour les nomades digitaux grâce à sa fiscalité territoriale :
            </p>

            &lt;div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 my-8">
              &lt;h3 className="font-bold text-green-900 mb-4"&gt;🚀 Stratégie Nomade Optimale</h3>
              &lt;div className="grid md:grid-cols-2 gap-6">
                &lt;div>
                  &lt;h4 className="font-bold text-green-800 mb-2"&gt;✅ Configuration Idéale</h4>
                  &lt;ul className="text-sm text-green-700 space-y-1">
                    &lt;li&gt;• Clients/employeur basé hors Costa Rica</li>
                    &lt;li&gt;• Facturation via société européenne/US</li>
                    &lt;li&gt;• Compte bancaire international</li>
                    &lt;li&gt;• Pas de bureau physique local</li>
                  </ul>
                </div>
                &lt;div>
                  &lt;h4 className="font-bold text-green-800 mb-2"&gt;📊 Résultat Fiscal</h4>
                  &lt;ul className="text-sm text-green-700 space-y-1">
                    &lt;li&gt;• 0% d'impôt au Costa Rica</li>
                    &lt;li&gt;• Payer uniquement pays de résidence fiscale</li>
                    &lt;li&gt;• Ou optimisation non-résidence si &lt; 183j/pays</li>
                    &lt;li&gt;• Accès système santé Caja si résident</li>
                  </ul>
                </div>
              </div>
            </div>

            &lt;div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              &lt;h3 className="text-red-900 font-bold mb-4"&gt;⚠️ Pièges à Éviter pour Nomades</h3>
              &lt;ul className="space-y-2 text-red-800">
                &lt;li&gt;&lt;strong&gt;Clients locaux :</strong&gt; Facturer à des entreprises costariciennes = revenus locaux imposés</li>
                &lt;li&gt;&lt;strong&gt;Bureau local :</strong&gt; Avoir un bureau fixe peut requalifier en activité locale</li>
                &lt;li&gt;&lt;strong&gt;Équipe locale :</strong&gt; Embaucher au Costa Rica = activité commerciale locale</li>
                &lt;li&gt;&lt;strong&gt;Séjours longs :</strong&gt; > 6 mois peut déclencher obligations fiscales selon profil</li>
              </ul>
            </div>

            &lt;BlogCTA 
              title="Votre stratégie nomade Costa Rica"
              description="Analyse personnalisée de votre situation fiscale et setup optimal pour le Costa Rica."
              buttonText="Obtenir mon analyse"
              buttonUrl="/fr/plan-36"
              language="fr"
            />

            &lt;h2&gt;💡 Optimisation Fiscale Avancée</h2>
            &lt;div className="space-y-6 my-8">
              &lt;div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-blue-900 mb-4"&gt;🎯 Pour Retraités</h3>
                &lt;ul className="space-y-2 text-blue-800">
                  &lt;li&gt;• &lt;strong&gt;Résidence Pensionado :</strong&gt; Pension étrangère non taxée au Costa Rica</li>
                  &lt;li&gt;• &lt;strong&gt;Investissements étrangers :</strong&gt; Dividendes/intérêts non imposés localement</li>
                  &lt;li&gt;• &lt;strong&gt;Immobilier étranger :</strong&gt; Plus-values non déclarées au Costa Rica</li>
                  &lt;li&gt;• &lt;strong&gt;Système santé :</strong&gt; Caja = couverture universelle pour résidents</li>
                </ul>
              </div>

              &lt;div className="bg-green-50 border border-green-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-green-900 mb-4"&gt;💼 Pour Entrepreneurs</h3>
                &lt;ul className="space-y-2 text-green-800">
                  &lt;li&gt;• &lt;strong&gt;Zone Franche :</strong&gt; Exportations avec incitations fiscales</li>
                  &lt;li&gt;• &lt;strong&gt;Régime RRIT :</strong&gt; Taxation réduite secteurs prioritaires</li>
                  &lt;li&gt;• &lt;strong&gt;Holding offshore :</strong&gt; Profits étrangers via société panaméenne</li>
                  &lt;li&gt;• &lt;strong&gt;R&D :</strong&gt; Déductions majorées innovation technologique</li>
                </ul>
              </div>

              &lt;div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-purple-900 mb-4"&gt;🌐 Pour Investisseurs</h3>
                &lt;ul className="space-y-2 text-purple-800">
                  &lt;li&gt;• &lt;strong&gt;Portfolio étranger :</strong&gt; Actions/crypto non imposés si gestion externe</li>
                  &lt;li&gt;• &lt;strong&gt;Immobilier locatif étranger :</strong&gt; Revenus non taxés au Costa Rica</li>
                  &lt;li&gt;• &lt;strong&gt;Trust offshore :</strong&gt; Structuration patrimoniale via paradis fiscaux</li>
                  &lt;li&gt;• &lt;strong&gt;Investissement local :</strong&gt; Incentives secteurs verts/tech</li>
                </ul>
              </div>
            </div>

            &lt;h2&gt;🎨 Coût de la Vie et Budget Fiscal</h2>
            &lt;p>
              Pour bien planifier, voici les coûts réels de vie au Costa Rica en 2026 :
            </p>

            &lt;div className="overflow-x-auto my-8">
              &lt;table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                &lt;thead>
                  &lt;tr className="bg-gray-50">
                    &lt;th className="border border-gray-200 px-4 py-3 text-left"&gt;Poste de Dépense</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-center"&gt;San José</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-center"&gt;Manuel Antonio</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-center"&gt;Tamarindo</th>
                    &lt;th className="border border-gray-200 px-4 py-3 text-center"&gt;Monteverde</th>
                  </tr>
                </thead>
                &lt;tbody>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3 font-semibold"&gt;Appartement 2 pièces</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€450</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€800</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€700</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€500</td>
                  </tr>
                  &lt;tr className="bg-gray-50">
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;Courses alimentaires</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€200</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€250</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€280</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€220</td>
                  </tr>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;Services (électricité, eau, internet)</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€80</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€120</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€110</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€90</td>
                  </tr>
                  &lt;tr className="bg-gray-50">
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;Transport</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€60</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€100</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€120</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€80</td>
                  </tr>
                  &lt;tr>
                    &lt;td className="border border-gray-200 px-4 py-3"&gt;Sécurité sociale Caja</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€15</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€15</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€15</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center"&gt;€15</td>
                  </tr>
                  &lt;tr className="bg-green-50">
                    &lt;td className="border border-gray-200 px-4 py-3 font-bold"&gt;TOTAL/mois</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center font-bold"&gt;€805</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center font-bold"&gt;€1,285</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center font-bold"&gt;€1,225</td>
                    &lt;td className="border border-gray-200 px-4 py-3 text-center font-bold"&gt;€905</td>
                  </tr>
                </tbody>
              </table>
            </div>

            &lt;h2&gt;📋 Procédure Résidence : Étapes Détaillées</h2>
            &lt;div className="space-y-6 my-8">
              &lt;div className="flex items-start gap-4">
                &lt;div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"&gt;1</div>
                &lt;div>
                  &lt;h4 className="font-bold text-gray-900"&gt;Documents Préparatoires (France - 2-3 mois)</h4>
                  &lt;ul className="text-gray-700 text-sm mt-2 space-y-1">
                    &lt;li&gt;• Casier judiciaire français apostillé</li>
                    &lt;li&gt;• Certificat de naissance apostillé</li>
                    &lt;li&gt;• Documents revenus/pension (certification origine)</li>
                    &lt;li&gt;• Traduction assermentée en espagnol</li>
                  </ul>
                </div>
              </div>

              &lt;div className="flex items-start gap-4">
                &lt;div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"&gt;2</div>
                &lt;div>
                  &lt;h4 className="font-bold text-gray-900"&gt;Dépôt Demande (Costa Rica - 1 mois)</h4>
                  &lt;ul className="text-gray-700 text-sm mt-2 space-y-1">
                    &lt;li&gt;• Rendez-vous DGME (Direction Générale Migration)</li>
                    &lt;li&gt;• Examen médical par médecin agréé</li>
                    &lt;li&gt;• Photos biométriques officielles</li>
                    &lt;li&gt;• Paiement frais (€200-400 selon catégorie)</li>
                  </ul>
                </div>
              </div>

              &lt;div className="flex items-start gap-4">
                &lt;div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"&gt;3</div>
                &lt;div>
                  &lt;h4 className="font-bold text-gray-900"&gt;Traitement Dossier (3-6 mois)</h4>
                  &lt;ul className="text-gray-700 text-sm mt-2 space-y-1">
                    &lt;li&gt;• Vérifications auprès pays d'origine</li>
                    &lt;li&gt;• Enquête background par OIJ</li>
                    &lt;li&gt;• Validation revenus par Banco Central</li>
                    &lt;li&gt;• Possible demande documents complémentaires</li>
                  </ul>
                </div>
              </div>

              &lt;div className="flex items-start gap-4">
                &lt;div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"&gt;4</div>
                &lt;div>
                  &lt;h4 className="font-bold text-gray-900"&gt;Approbation et Cédula (1 mois)</h4>
                  &lt;ul className="text-gray-700 text-sm mt-2 space-y-1">
                    &lt;li&gt;• Notification approbation par email</li>
                    &lt;li&gt;• Émission cédula (carte identité costaricienne)</li>
                    &lt;li&gt;• Inscription automatique Caja (sécurité sociale)</li>
                    &lt;li&gt;• Droits complets résidents (sauf vote)</li>
                  </ul>
                </div>
              </div>
            </div>

            &lt;h2&gt;🌟 Témoignages d'Expatriés Fiscaux</h2>
            &lt;div className="space-y-6 my-8">
              &lt;blockquote className="bg-blue-50 border-l-4 border-blue-400 p-6">
                &lt;p className="text-blue-800 italic mb-3">
                  "Avec ma pension de €1,200/mois, je vis mieux ici qu'en France pour moitié prix. 
                  Zéro impôt sur ma retraite au Costa Rica, juste ma résidence Pensionado à renouveler tous les 2 ans. 
                  Le système de santé Caja est formidable pour les soins courants."
                </p>
                &lt;cite className="text-blue-600"&gt;— Jean-Pierre, retraité français à Tamarindo depuis 4 ans</cite>
              </blockquote>

              &lt;blockquote className="bg-green-50 border-l-4 border-green-400 p-6">
                &lt;p className="text-green-800 italic mb-3">
                  "En tant que développeur freelance, je facture mes clients européens depuis San José. 
                  Fiscalité territoriale = 0% d'impôt ici. Je paie juste mes cotisations françaises en micro-entrepreneur. 
                  Internet fiber 100Mbps pour €35/mois, parfait pour le remote."
                </p>
                &lt;cite className="text-green-600"&gt;— Sophie, nomade digitale française, Rentista depuis 2 ans</cite>
              </blockquote>
            </div>

            &lt;h2&gt;🎯 Conclusion : Costa Rica = Paradis Fiscal Vert ?</h2>
            &lt;div className="grid md:grid-cols-2 gap-6 my-8">
              &lt;div className="bg-green-50 border border-green-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-green-900 mb-4"&gt;✅ Pour Qui c'est Idéal</h3>
                &lt;ul className="space-y-2 text-green-800 text-sm">
                  &lt;li&gt;• &lt;strong&gt;Retraités</strong&gt; avec pension ≥ €900/mois</li>
                  &lt;li&gt;• &lt;strong&gt;Nomades digitaux</strong&gt; clients étrangers</li>
                  &lt;li&gt;• &lt;strong&gt;Investisseurs</strong&gt; revenus passifs étrangers</li>
                  &lt;li&gt;• &lt;strong&gt;Amoureux nature</strong&gt; + stabilité politique</li>
                  &lt;li&gt;• &lt;strong&gt;Budget</strong&gt; €1000-2000/mois confortable</li>
                </ul>
              </div>

              &lt;div className="bg-red-50 border border-red-200 rounded-lg p-6">
                &lt;h3 className="font-bold text-red-900 mb-4"&gt;❌ Défis à Considérer</h3>
                &lt;ul className="space-y-2 text-red-800 text-sm">
                  &lt;li&gt;• &lt;strong&gt;Bureaucratie lente</strong&gt; (très lente...)</li>
                  &lt;li&gt;• &lt;strong&gt;Coût de la vie</strong&gt; en hausse zones touristiques</li>
                  &lt;li&gt;• &lt;strong&gt;Routes difficiles</strong&gt; + transports publics limités</li>
                  &lt;li&gt;• &lt;strong&gt;Saison des pluies</strong&gt; intensive (sept-nov)</li>
                  &lt;li&gt;• &lt;strong&gt;Interprétation fiscale</strong&gt; parfois floue</li>
                </ul>
              </div>
            </div>

            &lt;p>
              &lt;strong&gt;Verdict :</strong&gt; Le Costa Rica reste l'un des meilleurs deals fiscaux pour les expatriés 
              avec revenus étrangers. La combinaison fiscalité territoriale + qualité de vie + stabilité 
              politique est difficile à battre en Amérique Latine. Pura Vida fiscal indeed! 🌿
            </p>
          </div>

          &lt;RelatedArticles 
            articles={[
              {
                title: "Guide Fiscal Mexique 2026 : Impôts pour Expatriés Français",
                excerpt: "Comparaison Mexico vs Costa Rica pour l'optimisation fiscale expatriés.",
                slug: "taxes-mexique-expatries",
                readTime: "12 min"
              },
              {
                title: "Comparaison Visa Nomade Digital 2026",
                excerpt: "Le visa Rentista du Costa Rica face à la concurrence mondiale.",
                slug: "comparaison-visa-nomade-digital-2026",
                readTime: "22 min"
              },
              {
                title: "Coût de la Vie à l'Étranger 2026 : Chiffres Réels de 15 Pays",
                excerpt: "Budget détaillé pour vivre au Costa Rica selon votre style de vie.",
                slug: "cout-vie-etranger-2026",
                readTime: "14 min"
              }
            ]}
            language="fr"
          />
        </article>
      </BlogLayout>
    </>
  );
}