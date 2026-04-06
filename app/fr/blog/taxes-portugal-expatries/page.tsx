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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://reloca.ai/fr' },
          { name: 'Blog', url: 'https://reloca.ai/fr/blog' },
          { name: 'Impôts Portugal Expatriés', url: 'https://reloca.ai/fr/blog/taxes-portugal-expatries' },
        ]}
      />
      
      <BlogLayout>
        <article className="max-w-4xl mx-auto px-4 py-16">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">🇵🇹</span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Mis à jour Mars 2026
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[#1a365d] mb-6 leading-tight">
              Guide Complet des Impôts au Portugal pour les Expatriés
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Le système fiscal portugais a changé dramatiquement en 2024 quand le régime NHR a été remplacé par IFICI. 
              Découvrez le nouveau régime, les taux d'imposition et les stratégies d'optimisation pour les expatriés.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-6">
              <span>📅 10 min de lecture</span>
              <span>✍️ Par l'équipe Reloca.ai</span>
              <span>🔄 Dernière mise à jour : Mars 2026</span>
            </div>
          </header>

          {/* Quick Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              📋 Résumé Exécutif
            </h2>
            <div className="text-blue-800 space-y-2">
              <p><strong>⚡ Changement majeur :</strong> Le régime NHR a été supprimé en janvier 2024, remplacé par IFICI</p>
              <p><strong>💰 Nouveaux taux :</strong> 20% d'imposition forfaitaire pendant 10 ans (vs 0-10% avec NHR)</p>
              <p><strong>🎯 Éligibilité :</strong> Plus restrictive - revenus professionnels qualifiés uniquement</p>
              <p><strong>📅 Date limite :</strong> Les demandes IFICI doivent être faites avant le 31 mars de l'année suivant l'arrivée</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>🚨 Changement Majeur : Adieu NHR, Bonjour IFICI</h2>
            <p>
              Si vous pensiez encore au fameux régime NHR (Résident Non Habituel) du Portugal, il est temps de mettre à jour vos connaissances. 
              Depuis le 1er janvier 2024, le Portugal a officiellement supprimé le régime NHR et l'a remplacé par le nouveau régime IFICI 
              (Incitativo Fiscal para o Interior e Captação de Investimento).
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <p className="text-red-700">
                <strong>⚠️ Important :</strong> Toutes les demandes NHR déposées avant le 31 décembre 2023 restent valables et continuent 
                de bénéficier de l'ancien régime pendant leurs 10 années complètes.
              </p>
            </div>

            <h2>💡 Qu'est-ce que le Régime IFICI ?</h2>
            <p>
              Le nouveau régime IFICI est conçu pour attirer des investisseurs et des professionnels qualifiés au Portugal, 
              mais avec des critères beaucoup plus stricts que l'ancien NHR :
            </p>

            <ul>
              <li><strong>Taux d'imposition :</strong> 20% forfaitaire pendant 10 ans (au lieu des taux progressifs normaux jusqu'à 48%)</li>
              <li><strong>Activités éligibles :</strong> Liste restrictive d'activités professionnelles "de haute valeur ajoutée"</li>
              <li><strong>Revenus de pension :</strong> Désormais taxés à 10% (contre 0% avec NHR)</li>
              <li><strong>Revenus étrangers :</strong> Taxés selon les traités de double imposition</li>
            </ul>

            <BlogEmailGate 
              title="Obtenez notre calculateur fiscal Portugal gratuit 🧮" 
              description="Calculez vos impôts sous le nouveau régime IFICI vs régime normal. PDF gratuit avec exemples concrets."
              buttonText="Télécharger le calculateur"
              language="fr"
            />

            <h2>🎯 Qui Peut Bénéficier d'IFICI ?</h2>
            <p>
              Contrairement au NHR qui était accessible à presque tout le monde, IFICI est beaucoup plus sélectif. 
              Vous devez exercer une activité professionnelle dans l'une de ces catégories :
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <h3 className="text-green-900 font-bold mb-4">✅ Activités Éligibles IFICI :</h3>
              <div className="grid md:grid-cols-2 gap-3 text-green-800">
                <div>
                  <strong>Tech & Innovation :</strong>
                  <ul className="ml-4 list-disc">
                    <li>Ingénieurs informatiques</li>
                    <li>Développeurs de logiciels</li>
                    <li>Experts en cybersécurité</li>
                    <li>Data scientists</li>
                  </ul>
                </div>
                <div>
                  <strong>Finance & Conseil :</strong>
                  <ul className="ml-4 list-disc">
                    <li>Conseillers financiers</li>
                    <li>Experts-comptables</li>
                    <li>Consultants en management</li>
                    <li>Avocats spécialisés</li>
                  </ul>
                </div>
                <div>
                  <strong>Santé & Sciences :</strong>
                  <ul className="ml-4 list-disc">
                    <li>Médecins spécialisés</li>
                    <li>Chercheurs scientifiques</li>
                    <li>Pharmaciens</li>
                    <li>Ingénieurs biomédicaux</li>
                  </ul>
                </div>
                <div>
                  <strong>Arts & Média :</strong>
                  <ul className="ml-4 list-disc">
                    <li>Architectes</li>
                    <li>Designers</li>
                    <li>Producteurs audiovisuels</li>
                    <li>Journalistes spécialisés</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>💰 Comparaison des Coûts : IFICI vs Régime Normal</h2>
            <p>Voici comment les différents régimes fiscaux se comparent pour différents niveaux de revenus :</p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left">Revenu Annuel</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">IFICI (20%)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Régime Normal</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Économies IFICI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">50 000€</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">10 000€</td>
                    <td className="border border-gray-200 px-4 py-3">11 500€</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+1 500€</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">75 000€</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">15 000€</td>
                    <td className="border border-gray-200 px-4 py-3">21 250€</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+6 250€</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">100 000€</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">20 000€</td>
                    <td className="border border-gray-200 px-4 py-3">32 500€</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+12 500€</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">150 000€</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">30 000€</td>
                    <td className="border border-gray-200 px-4 py-3">54 250€</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+24 250€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Calculs basés sur les taux 2026, sans compter les déductions et autres avantages fiscaux possibles
            </p>

            <h2>⚡ Comment Demander le Régime IFICI : Guide Étape par Étape</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <p className="text-yellow-800">
                <strong>⏰ Date limite critique :</strong> Vous devez faire votre demande IFICI avant le 31 mars de l'année suivant 
                votre arrivée au Portugal. Pas d'exceptions !
              </p>
            </div>

            <ol className="space-y-4">
              <li>
                <strong>1. Établir la résidence fiscale</strong>
                <p>Vous devez devenir résident fiscal portugais en passant plus de 183 jours par an au Portugal ou en y ayant votre résidence principale.</p>
              </li>
              <li>
                <strong>2. Préparer les documents</strong>
                <ul className="mt-2 ml-6 list-disc space-y-1">
                  <li>Certificat de résidence fiscale de votre pays d'origine</li>
                  <li>Preuve de vos qualifications professionnelles</li>
                  <li>Contrat de travail ou preuve d'activité indépendante au Portugal</li>
                  <li>Numéro fiscal portugais (NIF)</li>
                </ul>
              </li>
              <li>
                <strong>3. Soumettre la demande</strong>
                <p>La demande se fait via le Portal das Finanças ou directement au bureau des impôts local avec le formulaire approprié.</p>
              </li>
              <li>
                <strong>4. Attendre l'approbation</strong>
                <p>Le délai de traitement est généralement de 2-4 mois. Une fois approuvé, le régime s'applique rétroactivement à partir de votre date d'arrivée.</p>
              </li>
            </ol>

            <BlogCTA 
              title="Besoin d'aide pour votre installation fiscale au Portugal ?"
              description="Notre rapport personnalisé couvre tous les aspects fiscaux, visa et coût de la vie pour votre situation spécifique."
              buttonText="Obtenir mon rapport Portugal"
              buttonUrl="/fr/plan-36"
              language="fr"
            />

            <h2>🔍 Autres Considérations Fiscales au Portugal</h2>
            
            <h3>💼 TVA et Activités Indépendantes</h3>
            <p>
              Si vous travaillez en indépendant au Portugal, vous devrez également gérer la TVA (IVA en portugais) :
            </p>
            <ul>
              <li><strong>Seuil d'exemption :</strong> 12 500€ de chiffre d'affaires annuel</li>
              <li><strong>Taux normal :</strong> 23% (l'un des plus élevés d'Europe)</li>
              <li><strong>Déclarations :</strong> Trimestrielles si CA > 650 000€, sinon annuelles</li>
            </ul>

            <h3>🏠 Impôts Fonciers (IMI)</h3>
            <p>
              Si vous achetez un bien immobilier au Portugal :
            </p>
            <ul>
              <li><strong>Taux IMI :</strong> 0,3% à 0,45% de la valeur cadastrale annuellement</li>
              <li><strong>IMT (taxe de mutation) :</strong> 0% à 8% selon la valeur (première résidence bénéficie d'exemptions)</li>
              <li><strong>Déclaration :</strong> Automatique, facture reçue en avril-mai chaque année</li>
            </ul>

            <h3>💸 Plus-Values Immobilières</h3>
            <p>
              Les gains en capital sur la vente de biens immobiliers sont imposés différemment :
            </p>
            <ul>
              <li><strong>Résidence principale :</strong> Exemption si vous réinvestissez dans une autre résidence principale</li>
              <li><strong>Investissement locatif :</strong> 50% de la plus-value est imposable aux taux normaux</li>
              <li><strong>Non-résidents :</strong> 25% de taxation forfaitaire sur les plus-values</li>
            </ul>

            <h2>🤔 IFICI vs Autres Régimes Européens : Comment le Portugal se Compare</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left">Pays</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Régime Spécial</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Taux Préférentiel</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">🇵🇹 Portugal</td>
                    <td className="border border-gray-200 px-4 py-3">IFICI</td>
                    <td className="border border-gray-200 px-4 py-3">20%</td>
                    <td className="border border-gray-200 px-4 py-3">10 ans</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">🇪🇸 Espagne</td>
                    <td className="border border-gray-200 px-4 py-3">Régime Beckham</td>
                    <td className="border border-gray-200 px-4 py-3">24%</td>
                    <td className="border border-gray-200 px-4 py-3">6 ans</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">🇮🇹 Italie</td>
                    <td className="border border-gray-200 px-4 py-3">Régime Impatriés</td>
                    <td className="border border-gray-200 px-4 py-3">10-30%</td>
                    <td className="border border-gray-200 px-4 py-3">5-10 ans</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">🇬🇷 Grèce</td>
                    <td className="border border-gray-200 px-4 py-3">Régime Retraités</td>
                    <td className="border border-gray-200 px-4 py-3">7%</td>
                    <td className="border border-gray-200 px-4 py-3">15 ans</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>⚠️ Pièges à Éviter</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-red-900 font-bold mb-4">🚨 Erreurs Courantes :</h3>
              <ul className="space-y-3 text-red-800">
                <li><strong>Rater la date limite :</strong> Pas de demande après le 31 mars = pas d'IFICI possible</li>
                <li><strong>Mauvaise catégorie professionnelle :</strong> Vérifiez que votre activité est bien éligible avant de déménager</li>
                <li><strong>Négliger les obligations déclaratives :</strong> Même avec IFICI, vous devez déclarer tous vos revenus mondiaux</li>
                <li><strong>Confondre résidence fiscale et visa :</strong> Ce sont deux processus séparés avec des critères différents</li>
                <li><strong>Oublier la sécurité sociale :</strong> IFICI ne couvre que l'impôt sur le revenu, pas les cotisations sociales</li>
              </ul>
            </div>

            <h2>🔮 Perspectives d'Avenir : Que Réserver pour IFICI ?</h2>
            <p>
              Le régime IFICI étant encore récent (lancé en 2024), il est probable que des ajustements soient apportés dans les années à venir. 
              Les points à surveiller :
            </p>
            <ul>
              <li><strong>Élargissement des activités éligibles :</strong> Le Portugal pourrait ajouter de nouvelles professions selon la demande</li>
              <li><strong>Modifications des taux :</strong> Le taux de 20% pourrait être ajusté selon l'efficacité du dispositif</li>
              <li><strong>Critères de résidence :</strong> Possibles assouplissements pour attirer plus d'investisseurs</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-blue-900 font-bold mb-3">💡 Conseil d'Expert :</h3>
              <p className="text-blue-800">
                Si vous envisagez le Portugal, agissez rapidement. Les régimes fiscaux avantageux ont tendance à se durcir avec le temps, 
                et il vaut mieux être installé sous l'ancien régime que de regretter plus tard. 
                De plus, même si IFICI est moins avantageux que l'ancien NHR, il reste très compétitif par rapport à la plupart des pays européens.
              </p>
            </div>

            <h2>📋 Checklist : Êtes-vous Prêt pour le Portugal ?</h2>
            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✅ Prérequis IFICI :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>☐ Activité professionnelle éligible</li>
                    <li>☐ Pas de résidence fiscale portugaise dans les 5 dernières années</li>
                    <li>☐ Plan de résider au Portugal > 183 jours/an</li>
                    <li>☐ Documents professionnels traduits et apostillés</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">📋 Documents à Préparer :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>☐ Certificat de résidence fiscale actuel</li>
                    <li>☐ CV et diplômes traduits</li>
                    <li>☐ Justificatifs de revenus (3 dernières années)</li>
                    <li>☐ Assurance santé internationale</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>🎯 Conclusion : IFICI Vaut-il Encore le Coup ?</h2>
            <p>
              Bien que le nouveau régime IFICI soit moins généreux que l'ancien NHR, il reste une option attractive pour les professionnels qualifiés :
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <h3 className="text-green-900 font-bold mb-3">✅ Avantages IFICI :</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Économies fiscales substantielles (jusqu'à 28% vs régime normal)</li>
                <li>• Certitude fiscale pendant 10 ans</li>
                <li>• Accès au marché européen et qualité de vie portugaise</li>
                <li>• Coût de la vie raisonnable comparé aux autres capitales européennes</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
              <h3 className="text-red-900 font-bold mb-3">❌ Inconvénients IFICI :</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Critères d'éligibilité stricts</li>
                <li>• Taux plus élevé qu'avant (20% vs 0-10% avec NHR)</li>
                <li>• Pensions désormais taxées</li>
                <li>• Bureaucratie portugaise parfois lente</li>
              </ul>
            </div>

            <p>
              <strong>Notre verdict :</strong> Si votre activité est éligible et que vous gagnez plus de 75 000€ par an, 
              IFICI reste un choix judicieux. En dessous, d'autres destinations comme l'Espagne avec le régime Beckham ou 
              certains pays sans impôt sur le revenu pourraient être plus avantageux.
            </p>
          </div>

          <RelatedArticles 
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