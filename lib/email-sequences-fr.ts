// French email sequence definitions (Séquences d'emails en français)
// Post-purchase et abandon de panier

export interface ScheduledEmailFR {
  dayOffset: number;
  subject: string;
  buildHtml: (firstName: string, reportUrl: string) => string;
}

const UTM_REPORT = '?utm_source=relocaai&utm_medium=email&utm_campaign=post_purchase';

function wrapFR(body: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a365d;line-height:1.7;">
${body}
<hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0 16px;">
<p style="font-size:12px;color:#718096;">Reloca.ai — Intelligence de relocalisation alimentée par l'IA</p>
</body></html>`;
}

export const POST_PURCHASE_SEQUENCE_FR: ScheduledEmailFR[] = [
  // Email 1: Jour 0 — Livraison du rapport
  {
    dayOffset: 0,
    subject: 'Votre rapport de relocalisation est prêt 🎉',
    buildHtml: (firstName, reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName},</h2>
<p>Votre rapport de relocalisation personnalisé est prêt. Voici ce qu'il faut faire maintenant :</p>
<ol>
  <li>Lisez vos meilleurs pays correspondants (Sections 1-3)</li>
  <li>Consultez les options de visa pour votre situation (Section 4)</li>
  <li>Vérifiez la répartition des coûts (Sections 5-6)</li>
  <li>Partagez le PDF avec votre partenaire/famille</li>
</ol>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Voir votre rapport</a></p>
<p>Des questions ? Répondez à cet email.</p>
<p>— L'équipe Reloca.ai</p>
    `),
  },
  // Email 2: Jour 3 — Valeur éducative
  {
    dayOffset: 3,
    subject: '3 choses que la plupart des gens ratent en planifiant un déménagement international',
    buildHtml: (firstName, _reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName},</h2>
<p>Après avoir aidé des centaines de familles à planifier leur déménagement, voici les 3 erreurs les plus courantes :</p>
<h3 style="color:#38b2ac;">1. Sous-estimer les délais de visa</h3>
<p>La plupart des procédures de visa prennent 2-6 mois. Commencez tôt — surtout pour le Brésil et l'Argentine. La Section 4 de votre rapport contient la chronologie exacte pour votre situation.</p>
<h3 style="color:#38b2ac;">2. Ignorer la configuration bancaire</h3>
<p>Ouvrir un compte bancaire local avant votre arrivée vous fait économiser des semaines de frustration. Certains pays (comme le Paraguay) permettent de le faire à distance. D'autres nécessitent des visites en personne avec des documents spécifiques.</p>
<h3 style="color:#38b2ac;">3. Manquer les dates limites d'inscription scolaire</h3>
<p>Si vous avez des enfants, les écoles internationales ont souvent des fenêtres d'inscription 6-12 mois à l'avance. N'assumez pas que vous pouvez vous inscrire à l'arrivée.</p>
<p>Votre rapport couvre tout cela en détail — consultez les Sections 3, 8 et 12.</p>
<p>— L'équipe Reloca.ai</p>
    `),
  },
  // Email 3: Jour 5 — Engagement / valeur plus profonde
  {
    dayOffset: 5,
    subject: 'Aller plus loin : comparez vos meilleurs pays côte à côte',
    buildHtml: (firstName, _reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName},</h2>
<p>Vous avez votre rapport — vous savez OÙ aller et COMBIEN cela coûte.</p>
<p>Mais voici ce que beaucoup de nos utilisateurs nous disent : la partie la plus difficile n'est pas de choisir un pays — c'est de comparer les détails côte à côte.</p>
<p>C'est pourquoi nous construisons <strong>Reloca Pro</strong> — des fonctionnalités premium pour les relocalisateurs sérieux :</p>
<ul>
  <li>Comparaisons de pays côte à côte</li>
  <li>Alertes de mise à jour mensuelle des données</li>
  <li>Suivi de chronologie de visa</li>
  <li>Calculateur de coût de la vie pour votre situation spécifique</li>
</ul>
<p>Vous voulez un accès anticipé lors du lancement ? Répondez simplement à cet email et nous vous ajouterons à la liste.</p>
<p>— L'équipe Reloca.ai</p>
    `),
  },
  // Email 4: Jour 9 — Preuve sociale
  {
    dayOffset: 9,
    subject: 'Les familles font leur déménagement',
    buildHtml: (firstName, _reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName},</h2>
<p>Mise à jour rapide de la communauté Reloca.ai :</p>
<ul>
  <li><strong>Le Brésil</strong> continue d'être la destination #1 pour les familles qui relocalisent</li>
  <li><strong>Le Paraguay</strong> connaît une montée de popularité — grâce à son taux d'imposition de 0% sur les revenus étrangers</li>
  <li><strong>L'Uruguay</strong> reste le premier choix pour les familles axées sur la sécurité</li>
</ul>
<p>Beaucoup de nos utilisateurs planifient déjà leur déménagement. Nous construisons des outils premium pour aider avec les prochaines étapes — comparaisons de pays, suivi de visas et surveillance continue.</p>
<p>Votre rapport vous attend toujours si vous voulez le revisiter. Les données restent fraîches.</p>
<p>— L'équipe Reloca.ai</p>
    `),
  },
  // Email 5: Jour 14 — Proposition Reloca Pro
  {
    dayOffset: 14,
    subject: 'Votre rapport a 2 semaines — les choses ont changé',
    buildHtml: (firstName, reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName},</h2>
<p>Il y a deux semaines, vous avez reçu votre <a href="${reportUrl}" style="color:#38b2ac;">rapport de relocalisation</a>. Depuis :</p>
<ul>
  <li>Les règles de visa ont peut-être changé</li>
  <li>Les prix de l'immobilier ont bougé</li>
  <li>Les données sur le coût de la vie ont été mises à jour</li>
</ul>
<p>Votre rapport est un instantané. <strong>Reloca Pro le maintient vivant.</strong></p>
<p>Pour <strong style="color:#38b2ac;">49€/mois</strong>, vous obtenez :</p>
<ul>
  <li>Rapports mis à jour mensuellement reflétant les dernières données</li>
  <li>Alertes de marché pour vos meilleurs pays</li>
  <li>Support prioritaire de notre équipe</li>
</ul>
<p>Annulez à tout moment. Aucun engagement.</p>
<p><a href="${reportUrl.split('/report')[0]}/dashboard" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Restez à jour avec Reloca Pro — 49€/mois</a></p>
<p>Vous ne faites que rechercher ? Pas de souci. Votre rapport est toujours disponible au lien ci-dessus.</p>
<p>— L'équipe Reloca.ai</p>
    `),
  },
];

// Séquence d'abandon de panier pour les utilisateurs non-payants qui ont terminé le quiz mais n'ont pas acheté
export const ABANDONED_CART_SEQUENCE_FR: ScheduledEmailFR[] = [
  // Email 1: 30 min après le quiz — Aperçu de ce qui se trouve à l'intérieur
  {
    dayOffset: 0,
    subject: 'Un aperçu de votre rapport de relocalisation 👀',
    buildHtml: (firstName, reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName || 'là'},</h2>
<p>Vous venez de terminer votre évaluation de relocalisation — excellent travail. C'est la partie la plus difficile.</p>
<p>Votre rapport personnalisé a été préparé en fonction de vos réponses. Voici un aperçu de ce qui se trouve à l'intérieur :</p>
<ul>
  <li>🌍 <strong>Votre correspondance de pays #1</strong> — avec la voie de visa spécifique qui correspond à votre profil</li>
  <li>💰 <strong>Estimations de coûts réels</strong> — ce que votre vie coûterait réellement là-bas, mois par mois</li>
  <li>🗓️ <strong>Une chronologie</strong> — que faire dans les 30, 60 et 90 prochains jours pour le rendre réel</li>
</ul>
<p>L'aperçu gratuit vous donne les bases. Le rapport complet — toutes les 16 sections — déverrouille l'image complète pour 49€.</p>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Voir votre rapport →</a></p>
<p style="font-size:12px;color:#718096;margin-top:16px;">🛡️ Garantie de remboursement de 30 jours — sans questions posées.</p>
<p>Prenez votre temps. Nous serons là.</p>
<p>— L'équipe Reloca.ai</p>
    `),
  },
  // Email 2: Jour 1 — Valeur éducative, PAS une vente difficile
  {
    dayOffset: 1,
    subject: 'Comment les familles réussissent réellement un déménagement international',
    buildHtml: (firstName, _reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName || 'là'},</h2>
<p>Se relocaliser à l'international peut sembler écrasant. Mais les familles qui le font avec succès suivent généralement le même plan :</p>
<h3 style="color:#38b2ac;">Étape 1 : Choisir le bon pays (pas seulement le plus beau)</h3>
<p>La plupart des gens choisissent en fonction du style de vie — plages, culture, météo. Mais les familles qui prospèrent à l'étranger tiennent aussi compte de la faisabilité des visas, des implications fiscales, de l'accès aux soins de santé et du coût de la vie par rapport à leurs revenus. Votre rapport fait cette analyse pour vous.</p>
<h3 style="color:#38b2ac;">Étape 2 : Comprendre la chronologie du visa AVANT de vous engager</h3>
<p>Les délais de traitement des visas vont de 1 mois (Paraguay) à 12+ mois (NHR Portugal). Se tromper peut faire dérailler tout votre plan. La plupart des gens ne découvrent cela qu'après avoir déjà donné leur préavis à leur travail.</p>
<h3 style="color:#38b2ac;">Étape 3 : Construire votre piste financière</h3>
<p>Les premiers 3-6 mois à l'étranger sont chers. Les coûts d'installation — banque, dépôts de logement, inscription scolaire, frais juridiques — peuvent s'additionner à 5 000€–15 000€ avant que vous ne vous soyez installé. Planifier cela change tout.</p>
<p>Ce sont le genre de détails que votre rapport couvre — spécifique à votre situation, pas des conseils génériques.</p>
<p>Pas de pression. Je voulais juste partager quelque chose d'utile aujourd'hui.</p>
<p>— L'équipe Reloca.ai</p>
    `),
  },
  // Email 3: Jour 3 — Preuve sociale + proposition de valeur 49€
  {
    dayOffset: 3,
    subject: 'Ce que les familles disent de leurs rapports Reloca',
    buildHtml: (firstName, reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName || 'là'},</h2>
<p>Nous pensions que vous aimeriez entendre quelques-unes des familles qui ont utilisé Reloca pour planifier leurs déménagements :</p>
<blockquote style="border-left:3px solid #38b2ac;padding-left:16px;margin:16px 0;font-style:italic;color:#4a5568;">
"49€ contre les mois que j'ai passés à rechercher tout cela à la main. La section visa seule nous a fait économiser tellement de temps."
<br><small>— Hispanic Nomad, <a href="https://x.com/hispanicnomad" style="color:#38b2ac;">@hispanicnomad</a></small>
</blockquote>
<blockquote style="border-left:3px solid #38b2ac;padding-left:16px;margin:16px 0;font-style:italic;color:#4a5568;">
"La section fiscale seule m'a fait économiser plus de 10 000€. Je n'avais aucune idée du programme NHR."
<br><small>— Marcus T., Londres → Espagne</small>
</blockquote>
<blockquote style="border-left:3px solid #38b2ac;padding-left:16px;margin:16px 0;font-style:italic;color:#4a5568;">
"Nous hésitions entre 5 pays pour la retraite. Reloca l'a réduit à 3 avec des données réelles. Nous avons réservé notre voyage de reconnaissance la semaine suivante."
<br><small>— David & Linda R., Canada → Équateur</small>
</blockquote>
<p>Votre rapport est déjà construit et vous attend. Pour 49€, vous obtenez 16 sections d'intelligence de relocalisation personnalisée — le genre d'analyse qui coûtait auparavant 2 000€+ avec un consultant en relocalisation.</p>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Débloquez votre rapport complet — 49€ →</a></p>
<p style="font-size:12px;color:#718096;margin-top:16px;">🛡️ Garantie de remboursement de 30 jours. Si vous n'êtes pas satisfait de votre rapport, nous vous rembourserons. Sans questions posées.</p>
<p>— L'équipe Reloca.ai</p>
    `),
  },
  // Email 4: Jour 7 — Dernier rappel doux, puis silence
  {
    dayOffset: 7,
    subject: 'Votre rapport est toujours là — je voulais juste vous le faire savoir',
    buildHtml: (firstName, reportUrl) => wrapFR(`
<h2 style="color:#1a365d;">Bonjour ${firstName || 'là'},</h2>
<p>C'est la dernière fois que je mentionnerai votre rapport de relocalisation. Je ne crois pas à harceler les gens.</p>
<p>Si le timing n'est pas bon — tout va bien. La planification de relocalisation se fait selon votre horaire, pas le nôtre.</p>
<p>Si vous y réfléchissez encore : votre rapport est prêt, il coûte 49€, et il vient avec une garantie de remboursement de 30 jours. Aucun risque.</p>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Voir votre rapport →</a></p>
<p>Quoi que vous décidiez — bonne chance avec vos plans. Déménager à l'étranger est l'une des décisions les plus enrichissantes qu'une famille puisse prendre. Nous espérons vous aider à y arriver.</p>
<p>— L'équipe Reloca.ai</p>
<p style="font-size:12px;color:#718096;margin-top:24px;">Vous ne recevrez plus d'emails sur ce rapport après aujourd'hui.</p>
    `),
  },
];