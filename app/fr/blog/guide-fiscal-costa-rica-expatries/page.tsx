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
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://reloca.ai/fr' },
          { name: 'Blog', url: 'https://reloca.ai/fr/blog' },
          { name: 'Guide Fiscal Costa Rica', url: 'https://reloca.ai/fr/blog/guide-fiscal-costa-rica-expatries' },
        ]}
      />
      
      <BlogLayout>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">🇨🇷</span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Pura Vida Fiscal
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[#1a365d] mb-6 leading-tight">
              Guide Fiscal Costa Rica 2026 : Impôts pour Expatriés
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Fiscalité territoriale, résidence permanente, et vie Pura Vida : tout savoir sur les impôts 
              au Costa Rica pour optimiser votre installation dans ce paradis vert.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-6">
              <span>📅 14 min de lecture</span>
              <span>✍️ Experts Costa Rica</span>
              <span>🔄 Mars 2026</span>
            </div>
          </header>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
              🌟 Pourquoi le Costa Rica est Fiscal-Friendly
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-green-800">
              <div>
                <p><strong>💰 Fiscalité territoriale :</strong> Seuls revenus Costa Rica taxés</p>
                <p><strong>🏖️ Qualité de vie :</strong> "Zona Azul" + Pura Vida</p>
              </div>
              <div>
                <p><strong>🎯 Résidence facile :</strong> Pensionado, Rentista, Inversionista</p>
                <p><strong>💚 Écologie :</strong> 99% énergie renouvelable</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>🌍 Costa Rica : Le Paradis Fiscal Méconnu</h2>
            <p>
              Le Costa Rica pratique une <strong>fiscalité territoriale</strong> : seuls les revenus générés 
              sur le territoire costaricien sont imposés. Cette particularité en fait une destination 
              attractive pour les retraités, investisseurs et nomades digitaux.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-blue-800 font-bold">✨ Avantages Uniques du Costa Rica :</h3>
              <ul className="text-blue-700 mt-2 space-y-1">
                <li>• <strong>Revenus étrangers non imposés</strong> (pension, investissements, télétravail)</li>
                <li>• <strong>Pas d'impôt sur le patrimoine</strong> ou succession</li>
                <li>• <strong>Stabilité politique</strong> : démocratie depuis 1948, pas d'armée</li>
                <li>• <strong>Système de santé public</strong> (Caja) accessible aux résidents</li>
                <li>• <strong>Zone bleue</strong> : Nicoya Peninsula, longévité exceptionnelle</li>
              </ul>
            </div>

            <h2>🎯 Qui Paie des Impôts au Costa Rica ?</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-red-900 mb-4">❌ IMPOSÉS au Costa Rica</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• <strong>Salaires locaux :</strong> Emploi au Costa Rica</li>
                  <li>• <strong>Business local :</strong> Entreprise costaricienne</li>
                  <li>• <strong>Immobilier local :</strong> Loyers de biens au Costa Rica</li>
                  <li>• <strong>Plus-values locales :</strong> Vente immobilier Costa Rica</li>
                  <li>• <strong>Services fournis</strong> depuis le Costa Rica</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4">✅ NON-IMPOSÉS au Costa Rica</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>Pensions étrangères :</strong> France, Canada, USA...</li>
                  <li>• <strong>Télétravail :</strong> Client/employeur étranger</li>
                  <li>• <strong>Investissements :</strong> Actions, crypto, immobilier étranger</li>
                  <li>• <strong>Rentes :</strong> Assurance vie, revenus passifs étrangers</li>
                  <li>• <strong>Royalties :</strong> Propriété intellectuelle étrangère</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-yellow-800">
                <strong>⚠️ Attention :</strong> "Source costaricienne" peut être interprétée largement. 
                Si vous travaillez depuis le Costa Rica pour des clients étrangers, la source peut être 
                considérée comme locale. Consultez un expert fiscal local.
              </p>
            </div>

            <h2>🏠 Types de Résidence et Implications Fiscales</h2>
            <p>
              Le Costa Rica offre plusieurs statuts de résidence, chacun avec des implications fiscales différentes :
            </p>

            <div className="space-y-8 my-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">👴</span>
                  <h3 className="text-xl font-bold">Pensionado (Retraité)</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Le Plus Populaire</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900">📋 Exigences</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pension minimum $1,000/mois (€900)</li>
                      <li>• Source gouvernementale ou privée</li>
                      <li>• Documents apostillés requis</li>
                      <li>• Examen médical</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">💰 Avantages Fiscaux</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pension étrangère NON imposée</li>
                      <li>• Importation véhicule sans douane</li>
                      <li>• Importation mobilier €4,000 sans taxe</li>
                      <li>• Pas de minimum de séjour</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Parfait pour :</strong> Retraités français avec pension ≥ €900/mois. 
                    La pension reste imposée en France selon convention fiscale.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💰</span>
                  <h3 className="text-xl font-bold">Rentista (Rentier)</h3>
                  <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Nomades Digitaux</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900">📋 Exigences</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Rente $2,500/mois (€2,250) pendant 2 ans</li>
                      <li>• Ou dépôt bancaire $60,000 (€54,000)</li>
                      <li>• Source passive (investissements, rentes)</li>
                      <li>• Interdiction de travailler localement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">💰 Avantages Fiscaux</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Rentes étrangères NON imposées</li>
                      <li>• Télétravail étranger possible</li>
                      <li>• Investissements étrangers libres</li>
                      <li>• Importations privilégiées</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm text-green-800">
                    <strong>💡 Parfait pour :</strong> Investisseurs, nomades digitaux, retraités anticipés 
                    avec revenus passifs. Pas de restrictions sur l'activité à distance.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🏢</span>
                  <h3 className="text-xl font-bold">Inversionista (Investisseur)</h3>
                  <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">Business</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900">📋 Exigences</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Investissement $200,000+ (€180,000)</li>
                      <li>• Dans secteurs autorisés</li>
                      <li>• Création d'emplois locaux</li>
                      <li>• Business plan détaillé</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">💰 Implications Fiscales</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Profits business local = imposés</li>
                      <li>• Autres revenus étrangers libres</li>
                      <li>• Incitations sectorielles possibles</li>
                      <li>• Libre-zone export (avantages)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-sm text-purple-800">
                    <strong>💡 Parfait pour :</strong> Entrepreneurs voulant créer une entreprise au Costa Rica. 
                    Secteurs prioritaires : technologie, tourisme, agriculture durable.
                  </p>
                </div>
              </div>
            </div>

            <BlogEmailGate 
              title="Guide Résidence Costa Rica Gratuit 📋" 
              description="Comparaison détaillée des 3 types de résidence avec procédures, coûts et optimisation fiscale."
              buttonText="Télécharger le guide"
              language="fr"
            />

            <h2>💰 Barème Fiscal Costa Rica (Revenus Locaux Uniquement)</h2>
            <p>
              Pour les revenus de source costaricienne, voici le barème progressif 2026 :
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left">Tranche Annuelle (CRC)</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Taux</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Équivalent € (approx)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">0 - ₡863,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-green-600 font-bold">0%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">0 - €1,400</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">₡863,001 - ₡1,267,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">10%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€1,401 - €2,050</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">₡1,267,001 - ₡2,085,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">15%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€2,051 - €3,370</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">₡2,085,001 - ₡4,169,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">20%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€3,371 - €6,740</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">₡4,169,001+</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-bold">25%</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€6,741+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Taux de change : 1 EUR = ~620 CRC (variable). Abattement de base : ₡863,000/an (€1,400).
            </p>

            <h2>🏡 Taxes sur l'Immobilier</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">🏠 Taxe Foncière (Impuesto Territorial)</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• <strong>Taux :</strong> 0.25% de la valeur cadastrale/an</li>
                  <li>• <strong>Paiement :</strong> Trimestriel ou annuel</li>
                  <li>• <strong>Exemption :</strong> Résidence principale &lt; ₡10M</li>
                  <li>• <strong>Évaluation :</strong> Basée sur valeur cadastrale (souvent sous-évaluée)</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4">💰 Taxe de Luxe (Impuesto Solidario)</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• <strong>Seuil :</strong> Biens > $204,000 (€185,000)</li>
                  <li>• <strong>Taux :</strong> 0.25% - 0.55% selon valeur</li>
                  <li>• <strong>Base :</strong> Valeur de construction uniquement</li>
                  <li>• <strong>Paiement :</strong> Annuel avec la déclaration revenus</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-yellow-800">
                <strong>💡 Astuce immobilière :</strong> Beaucoup d'expatriés achètent via une société costaricienne 
                pour éviter les restrictions sur la propriété étrangère près des côtes (50m de la mer).
              </p>
            </div>

            <h2>🌐 Nomades Digitaux : Guide Spécial</h2>
            <p>
              Le Costa Rica est devenu une destination phare pour les nomades digitaux grâce à sa fiscalité territoriale :
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-green-900 mb-4">🚀 Stratégie Nomade Optimale</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-800 mb-2">✅ Configuration Idéale</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Clients/employeur basé hors Costa Rica</li>
                    <li>• Facturation via société européenne/US</li>
                    <li>• Compte bancaire international</li>
                    <li>• Pas de bureau physique local</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">📊 Résultat Fiscal</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 0% d'impôt au Costa Rica</li>
                    <li>• Payer uniquement pays de résidence fiscale</li>
                    <li>• Ou optimisation non-résidence si < 183j/pays</li>
                    <li>• Accès système santé Caja si résident</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-red-900 font-bold mb-4">⚠️ Pièges à Éviter pour Nomades</h3>
              <ul className="space-y-2 text-red-800">
                <li><strong>Clients locaux :</strong> Facturer à des entreprises costariciennes = revenus locaux imposés</li>
                <li><strong>Bureau local :</strong> Avoir un bureau fixe peut requalifier en activité locale</li>
                <li><strong>Équipe locale :</strong> Embaucher au Costa Rica = activité commerciale locale</li>
                <li><strong>Séjours longs :</strong> > 6 mois peut déclencher obligations fiscales selon profil</li>
              </ul>
            </div>

            <BlogCTA 
              title="Votre stratégie nomade Costa Rica"
              description="Analyse personnalisée de votre situation fiscale et setup optimal pour le Costa Rica."
              buttonText="Obtenir mon analyse"
              buttonUrl="/fr/plan-36"
              language="fr"
            />

            <h2>💡 Optimisation Fiscale Avancée</h2>
            <div className="space-y-6 my-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">🎯 Pour Retraités</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>Résidence Pensionado :</strong> Pension étrangère non taxée au Costa Rica</li>
                  <li>• <strong>Investissements étrangers :</strong> Dividendes/intérêts non imposés localement</li>
                  <li>• <strong>Immobilier étranger :</strong> Plus-values non déclarées au Costa Rica</li>
                  <li>• <strong>Système santé :</strong> Caja = couverture universelle pour résidents</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4">💼 Pour Entrepreneurs</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>Zone Franche :</strong> Exportations avec incitations fiscales</li>
                  <li>• <strong>Régime RRIT :</strong> Taxation réduite secteurs prioritaires</li>
                  <li>• <strong>Holding offshore :</strong> Profits étrangers via société panaméenne</li>
                  <li>• <strong>R&D :</strong> Déductions majorées innovation technologique</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 mb-4">🌐 Pour Investisseurs</h3>
                <ul className="space-y-2 text-purple-800">
                  <li>• <strong>Portfolio étranger :</strong> Actions/crypto non imposés si gestion externe</li>
                  <li>• <strong>Immobilier locatif étranger :</strong> Revenus non taxés au Costa Rica</li>
                  <li>• <strong>Trust offshore :</strong> Structuration patrimoniale via paradis fiscaux</li>
                  <li>• <strong>Investissement local :</strong> Incentives secteurs verts/tech</li>
                </ul>
              </div>
            </div>

            <h2>🎨 Coût de la Vie et Budget Fiscal</h2>
            <p>
              Pour bien planifier, voici les coûts réels de vie au Costa Rica en 2026 :
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left">Poste de Dépense</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">San José</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Manuel Antonio</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Tamarindo</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Monteverde</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold">Appartement 2 pièces</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€450</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€800</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€700</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Courses alimentaires</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€200</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€250</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€280</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€220</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Services (électricité, eau, internet)</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€80</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€120</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€110</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€90</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Transport</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€60</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€100</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€120</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€80</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Sécurité sociale Caja</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€15</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€15</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€15</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">€15</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-200 px-4 py-3 font-bold">TOTAL/mois</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-bold">€805</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-bold">€1,285</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-bold">€1,225</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-bold">€905</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>📋 Procédure Résidence : Étapes Détaillées</h2>
            <div className="space-y-6 my-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Documents Préparatoires (France - 2-3 mois)</h4>
                  <ul className="text-gray-700 text-sm mt-2 space-y-1">
                    <li>• Casier judiciaire français apostillé</li>
                    <li>• Certificat de naissance apostillé</li>
                    <li>• Documents revenus/pension (certification origine)</li>
                    <li>• Traduction assermentée en espagnol</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Dépôt Demande (Costa Rica - 1 mois)</h4>
                  <ul className="text-gray-700 text-sm mt-2 space-y-1">
                    <li>• Rendez-vous DGME (Direction Générale Migration)</li>
                    <li>• Examen médical par médecin agréé</li>
                    <li>• Photos biométriques officielles</li>
                    <li>• Paiement frais (€200-400 selon catégorie)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Traitement Dossier (3-6 mois)</h4>
                  <ul className="text-gray-700 text-sm mt-2 space-y-1">
                    <li>• Vérifications auprès pays d'origine</li>
                    <li>• Enquête background par OIJ</li>
                    <li>• Validation revenus par Banco Central</li>
                    <li>• Possible demande documents complémentaires</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Approbation et Cédula (1 mois)</h4>
                  <ul className="text-gray-700 text-sm mt-2 space-y-1">
                    <li>• Notification approbation par email</li>
                    <li>• Émission cédula (carte identité costaricienne)</li>
                    <li>• Inscription automatique Caja (sécurité sociale)</li>
                    <li>• Droits complets résidents (sauf vote)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>🌟 Témoignages d'Expatriés Fiscaux</h2>
            <div className="space-y-6 my-8">
              <blockquote className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <p className="text-blue-800 italic mb-3">
                  "Avec ma pension de €1,200/mois, je vis mieux ici qu'en France pour moitié prix. 
                  Zéro impôt sur ma retraite au Costa Rica, juste ma résidence Pensionado à renouveler tous les 2 ans. 
                  Le système de santé Caja est formidable pour les soins courants."
                </p>
                <cite className="text-blue-600">— Jean-Pierre, retraité français à Tamarindo depuis 4 ans</cite>
              </blockquote>

              <blockquote className="bg-green-50 border-l-4 border-green-400 p-6">
                <p className="text-green-800 italic mb-3">
                  "En tant que développeur freelance, je facture mes clients européens depuis San José. 
                  Fiscalité territoriale = 0% d'impôt ici. Je paie juste mes cotisations françaises en micro-entrepreneur. 
                  Internet fiber 100Mbps pour €35/mois, parfait pour le remote."
                </p>
                <cite className="text-green-600">— Sophie, nomade digitale française, Rentista depuis 2 ans</cite>
              </blockquote>
            </div>

            <h2>🎯 Conclusion : Costa Rica = Paradis Fiscal Vert ?</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4">✅ Pour Qui c'est Idéal</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• <strong>Retraités</strong> avec pension ≥ €900/mois</li>
                  <li>• <strong>Nomades digitaux</strong> clients étrangers</li>
                  <li>• <strong>Investisseurs</strong> revenus passifs étrangers</li>
                  <li>• <strong>Amoureux nature</strong> + stabilité politique</li>
                  <li>• <strong>Budget</strong> €1000-2000/mois confortable</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-red-900 mb-4">❌ Défis à Considérer</h3>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• <strong>Bureaucratie lente</strong> (très lente...)</li>
                  <li>• <strong>Coût de la vie</strong> en hausse zones touristiques</li>
                  <li>• <strong>Routes difficiles</strong> + transports publics limités</li>
                  <li>• <strong>Saison des pluies</strong> intensive (sept-nov)</li>
                  <li>• <strong>Interprétation fiscale</strong> parfois floue</li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Verdict :</strong> Le Costa Rica reste l'un des meilleurs deals fiscaux pour les expatriés 
              avec revenus étrangers. La combinaison fiscalité territoriale + qualité de vie + stabilité 
              politique est difficile à battre en Amérique Latine. Pura Vida fiscal indeed! 🌿
            </p>
          </div>

          <RelatedArticles 
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