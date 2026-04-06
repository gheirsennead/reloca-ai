import { BreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';
import { BlogLayout } from '@/components/BlogLayout';
import { BlogEmailGate } from '@/components/BlogEmailGate';
import { BlogCTA } from '@/components/BlogCTA';
import { RelatedArticles } from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Guide Fiscal Mexique 2026 : Impôts pour Expatriés Français | Reloca.ai',
  description: 'Guide complet des impôts au Mexique pour expatriés. Régime fiscal, taux d\'imposition, résidence temporaire et stratégies d\'optimisation 2026.',
  keywords: ['impôts mexique expatriés', 'fiscalité mexique français', 'résidence temporaire mexique', 'taxes mexique', 'RFC mexique'],
  openGraph: {
    title: 'Guide Fiscal Mexique 2026 : Impôts pour Expatriés Français',
    description: 'Guide complet des impôts au Mexique pour expatriés. Régime fiscal, résidence temporaire et optimisation.',
    url: 'https://reloca.ai/fr/blog/taxes-mexique-expatries',
    type: 'article',
    siteName: 'Reloca.ai',
    images: [{ url: 'https://reloca.ai/images/og-image.png', width: 1200, height: 630 }],
    publishedTime: '2026-03-20T00:00:00Z',
  },
};

export default function TaxesMexiqueExpatriésArticle() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://reloca.ai/fr' },
          { name: 'Blog', url: 'https://reloca.ai/fr/blog' },
          { name: 'Taxes Mexique Expatriés', url: 'https://reloca.ai/fr/blog/taxes-mexique-expatries' },
        ]}
      />
      
      <BlogLayout>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">🇲🇽</span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Mis à jour 2026
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[#1a365d] mb-6 leading-tight">
              Guide Fiscal Mexique 2026 : Impôts pour Expatriés Français
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Tout savoir sur la fiscalité mexicaine pour expatriés : résidence temporaire, RFC, 
              taux d'imposition et stratégies d'optimisation. Guide complet 2026.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-6">
              <span>📅 12 min de lecture</span>
              <span>✍️ Experts fiscalité Mexique</span>
              <span>🔄 Mars 2026</span>
            </div>
          </header>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              🎯 Points Clés Fiscalité Mexique
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-blue-800">
              <div>
                <p><strong>💰 Taux max :</strong> 35% (vs 45% France)</p>
                <p><strong>🏠 Résidence fiscale :</strong> 183+ jours/an au Mexique</p>
              </div>
              <div>
                <p><strong>📋 RFC obligatoire :</strong> Numéro fiscal pour tous revenus</p>
                <p><strong>🔄 Double imposition :</strong> Convention France-Mexique</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>🏛️ Système Fiscal Mexicain : Vue d'Ensemble</h2>
            <p>
              Le Mexique impose ses résidents fiscaux sur leurs revenus mondiaux, tandis que les non-résidents 
              ne paient que sur leurs revenus de source mexicaine. Le système est progressif avec des taux 
              allant de 1.92% à 35%.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <h3 className="text-yellow-800 font-bold">⚠️ Important à Retenir :</h3>
              <ul className="text-yellow-700 mt-2 space-y-1">
                <li>• <strong>Année fiscale :</strong> Janvier-Décembre (comme la France)</li>
                <li>• <strong>Devise :</strong> Tous calculs en pesos mexicains (MXN)</li>
                <li>• <strong>Déclaration :</strong> Avant le 30 avril de l'année suivante</li>
                <li>• <strong>Paiements :</strong> Mensuels pour les salariés, trimestriels pour indépendants</li>
              </ul>
            </div>

            <h2>🎯 Résidence Fiscale au Mexique : Les Règles</h2>
            <p>Vous êtes considéré comme résident fiscal mexicain si :</p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4">✅ Critères de Résidence Fiscale</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>183+ jours</strong> de présence physique dans l'année</li>
                  <li>• <strong>Centre d'intérêts vitaux</strong> au Mexique (famille, biens, activité principale)</li>
                  <li>• <strong>Résidence habituelle</strong> au Mexique</li>
                  <li>• <strong>Nationalité mexicaine</strong> (sauf preuve de résidence fiscale ailleurs)</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">📋 Obligations des Résidents</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>Déclaration annuelle</strong> de tous revenus mondiaux</li>
                  <li>• <strong>Obtention RFC</strong> (Registro Federal de Contribuyentes)</li>
                  <li>• <strong>Paiements provisionnels</strong> mensuels/trimestriels</li>
                  <li>• <strong>Tenue livres comptables</strong> si activité indépendante</li>
                </ul>
              </div>
            </div>

            <h2>💰 Barème d'Imposition 2026</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left">Tranche de Revenus Annuels</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Taux d'Imposition</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Équivalent € (approx)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">0 - $125,900 MXN</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-green-600 font-bold">1.92%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">0 - €6,300</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">$125,901 - $1,000,000 MXN</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">6.4% - 21.36%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€6,301 - €50,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">$1,000,001 - $3,000,000 MXN</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">23.52% - 30%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€50,001 - €150,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">$3,000,001+ MXN</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-bold">35%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€150,001+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Taux de change : 1 EUR = ~20 MXN (variable). Ces équivalences sont approximatives.
            </p>

            <BlogEmailGate 
              title="Calculateur d'Impôts Mexique Gratuit 🧮" 
              description="Calculez vos impôts mexicains vs français. Simulation complète avec résidence temporaire et RFC."
              buttonText="Calculer mes impôts"
              language="fr"
            />

            <h2>📋 RFC : Votre Numéro Fiscal Mexicain</h2>
            <p>
              Le RFC (Registro Federal de Contribuyentes) est obligatoire pour toute personne générant des revenus au Mexique. 
              C'est l'équivalent de votre numéro fiscal français.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4">🔤 Format du RFC</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-center text-lg mb-4">
                ABCD123456XYZ
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>ABCD :</strong> 4 premières lettres du nom/prénom
                </div>
                <div>
                  <strong>123456 :</strong> Date de naissance (AAMMJJ)
                </div>
                <div>
                  <strong>XYZ :</strong> Code de vérification
                </div>
              </div>
            </div>

            <div className="space-y-6 my-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">📝 Comment Obtenir son RFC</h3>
                <ol className="space-y-2 text-blue-800">
                  <li><strong>1.</strong> Se rendre au SAT (Service des Impôts) avec documents requis</li>
                  <li><strong>2.</strong> Remplir le formulaire R1 (Inscription au registre fiscal)</li>
                  <li><strong>3.</strong> Présenter pièces d'identité + preuve d'adresse au Mexique</li>
                  <li><strong>4.</strong> Choisir son régime fiscal (voir options ci-dessous)</li>
                  <li><strong>5.</strong> Recevoir son RFC immédiatement</li>
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-bold text-yellow-900 mb-4">📄 Documents Requis pour RFC</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• <strong>Passeport</strong> + visa ou carte de résidence mexicaine</li>
                  <li>• <strong>Acte de naissance</strong> apostillé et traduit</li>
                  <li>• <strong>Preuve d'adresse</strong> au Mexique (facture services, contrat location)</li>
                  <li>• <strong>CURP</strong> (Clave Única de Registro de Población) - obtenu sur place</li>
                </ul>
              </div>
            </div>

            <h2>🏢 Régimes Fiscaux Disponibles</h2>
            <p>
              Lors de l'inscription RFC, vous devez choisir votre régime fiscal. Voici les principales options 
              pour les expatriés français :
            </p>

            <div className="space-y-8 my-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💼</span>
                  <h3 className="text-xl font-bold">Régime Général (Régimen General)</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Le Plus Courant</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-600 mb-2">✅ Avantages</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Déductions multiples possibles</li>
                      <li>• Pas de limite de revenus</li>
                      <li>• Facturation avec TVA possible</li>
                      <li>• Adapté aux consultants/freelances</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">❌ Inconvénients</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Comptabilité complexe requise</li>
                      <li>• Déclarations mensuelles obligatoires</li>
                      <li>• Taux d'imposition progressif complet</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🏠</span>
                  <h3 className="text-xl font-bold">Régime Activités Professionnelles</h3>
                  <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Simplifié</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-600 mb-2">✅ Avantages</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Comptabilité simplifiée</li>
                      <li>• Déductions forfaitaires</li>
                      <li>• Pas de TVA à facturer</li>
                      <li>• Idéal pour revenus étrangers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">❌ Limites</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Limite : $3.5M MXN/an (~€175K)</li>
                      <li>• Moins de déductions possibles</li>
                      <li>• Pas de facturation TVA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>🔄 Convention Fiscale France-Mexique</h2>
            <p>
              La convention entre la France et le Mexique évite la double imposition. Voici comment elle s'applique :
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">🇫🇷 Revenus Imposables en France</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• <strong>Immobilier français :</strong> Loyers, plus-values</li>
                  <li>• <strong>Pensions françaises :</strong> Retraites publiques</li>
                  <li>• <strong>Salaires français :</strong> Si employeur français</li>
                  <li>• <strong>Dividendes :</strong> Sociétés françaises (avec crédit d'impôt)</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4">🇲🇽 Revenus Imposables au Mexique</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• <strong>Immobilier mexicain :</strong> Loyers, plus-values</li>
                  <li>• <strong>Activité professionnelle :</strong> Exercée au Mexique</li>
                  <li>• <strong>Salaires mexicains :</strong> Employeur mexicain</li>
                  <li>• <strong>Tous autres revenus :</strong> Si résident fiscal mexicain</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-yellow-800">
                <strong>💡 Astuce :</strong> Si vous payez plus d'impôts au Mexique qu'en France, vous pouvez déduire 
                la différence de votre déclaration française. L'inverse n'est pas vrai.
              </p>
            </div>

            <BlogCTA 
              title="Optimisez votre fiscalité France-Mexique"
              description="Notre rapport personnalisé analyse votre situation et recommande la stratégie fiscale optimale."
              buttonText="Obtenir mon analyse fiscale"
              buttonUrl="/fr/plan-36"
              language="fr"
            />

            <h2>💡 Stratégies d'Optimisation Fiscale</h2>
            <div className="space-y-6 my-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4">🎯 Pour Nomades Digitaux</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>Éviter résidence fiscale :</strong> &lt; 183 jours/an au Mexique</li>
                  <li>• <strong>Facturation offshore :</strong> Société européenne/US</li>
                  <li>• <strong>Revenus passifs :</strong> Investissements hors Mexique</li>
                  <li>• <strong>Régime touriste :</strong> 6 mois max par entrée</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">🏠 Pour Résidents Permanents</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>Déductions maximales :</strong> Formation, équipement, déplacements</li>
                  <li>• <strong>Investissements locaux :</strong> CETES, fonds mexicains</li>
                  <li>• <strong>Conjoint sans revenus :</strong> Déclaration séparée possible</li>
                  <li>• <strong>Plan retraite :</strong> Contributions déductibles (AFORE)</li>
                </ul>
              </div>
            </div>

            <h2>⚠️ Pièges Fiscaux à Éviter</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <ul className="space-y-3 text-red-800">
                <li><strong>Oublier le RFC :</strong> Obligation dès le premier peso gagné au Mexique</li>
                <li><strong>Mélanger statuts :</strong> Résident temporaire ≠ résident fiscal</li>
                <li><strong>Ignorer les échéances :</strong> Pénalités lourdes pour retards</li>
                <li><strong>Facturation sans TVA :</strong> Vérifiez si vous devez facturer 16% IVA</li>
                <li><strong>Double déclaration :</strong> Même revenu déclaré France ET Mexique sans crédit d'impôt</li>
              </ul>
            </div>

            <h2>📅 Calendrier Fiscal 2026</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left">Date Limite</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Obligation</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Concerne</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-bold">17 chaque mois</td>
                    <td className="border border-gray-200 px-4 py-3">Paiement provisoire</td>
                    <td className="border border-gray-200 px-4 py-3">Activités indépendantes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-bold">30 avril 2026</td>
                    <td className="border border-gray-200 px-4 py-3">Déclaration annuelle 2025</td>
                    <td className="border border-gray-200 px-4 py-3">Tous résidents fiscaux</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-bold">30 juin 2026</td>
                    <td className="border border-gray-200 px-4 py-3">Déclaration patrimoine</td>
                    <td className="border border-gray-200 px-4 py-3">Patrimoine > $15M MXN</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-bold">31 décembre</td>
                    <td className="border border-gray-200 px-4 py-3">Factures électroniques</td>
                    <td className="border border-gray-200 px-4 py-3">Toutes dépenses déductibles</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>🎯 Conclusion : Mexique vs France Fiscalement</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h3 className="text-green-900 font-bold mb-4">🏆 Avantages Fiscaux Mexique :</h3>
              <div className="grid md:grid-cols-2 gap-4 text-green-800">
                <ul className="space-y-2">
                  <li>• Taux maximum 35% vs 45% France</li>
                  <li>• Coût de la vie 50-70% moins cher</li>
                  <li>• Déductions généreuses possibles</li>
                  <li>• Pas d'ISF/IFI</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Convention anti-double imposition</li>
                  <li>• Facilité obtention résidence temporaire</li>
                  <li>• Régimes fiscaux simplifiés</li>
                  <li>• Optimisation nomade digital possible</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-red-900 font-bold mb-4">⚠️ Défis à Considérer :</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Bureaucratie complexe (SAT, RFC, CURP...)</li>
                <li>• Barrière linguistique pour démarches</li>
                <li>• Comptabilité électronique obligatoire</li>
                <li>• Système déclaratif moins mature qu'en France</li>
              </ul>
            </div>

            <p>
              <strong>Verdict :</strong> Le Mexique peut offrir des avantages fiscaux significatifs, 
              particulièrement pour les revenus moyens-élevés (€30K-150K). La clé est de bien structurer 
              sa situation dès l'arrivée et de s'entourer de professionnels locaux compétents.
            </p>
          </div>

          <RelatedArticles 
            articles={[
              {
                title: "Coût de la Vie à l'Étranger 2026 : Chiffres Réels de 15 Pays",
                excerpt: "Budget détaillé pour vivre au Mexique - de Playa del Carmen à Mexico City.",
                slug: "cout-vie-etranger-2026",
                readTime: "14 min"
              },
              {
                title: "Comparaison Visa Nomade Digital 2026",
                excerpt: "Le visa nomade digital mexicain face à la concurrence mondiale.",
                slug: "comparaison-visa-nomade-digital-2026",
                readTime: "22 min"
              },
              {
                title: "Guide Complet des Impôts au Portugal pour Expatriés 2026",
                excerpt: "Comparaison entre les régimes fiscaux mexicain et portugais.",
                slug: "taxes-portugal-expatries",
                readTime: "10 min"
              }
            ]}
            language="fr"
          />
        </article>
      </BlogLayout>
    </>
  );
}