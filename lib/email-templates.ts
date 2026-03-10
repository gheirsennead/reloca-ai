// Multi-language email template system
// Supports: English (en), French (fr), Spanish (es), Italian (it), Portuguese (pt)

export interface EmailTemplate {
  subject: string;
  buildHtml: (firstName: string, reportUrl: string) => string;
}

export interface LanguageTemplates {
  [key: string]: EmailTemplate;
}

export interface EmailSequence {
  dayOffset: number;
  templates: LanguageTemplates;
}

const UTM_REPORT = '?utm_source=relocaai&utm_medium=email&utm_campaign=post_purchase';

function wrap(body: string, language: string = 'en'): string {
  const footerText: Record<string, string> = {
    en: 'Reloca.ai — AI-powered relocation intelligence<br>AI-powered relocation intelligence',
    fr: 'Reloca.ai — Intelligence de relocalisation alimentée par l\'IA',
    es: 'Reloca.ai — Inteligencia de reubicación impulsada por IA',
    it: 'Reloca.ai — Intelligenza di trasferimento alimentata dall\'IA',
    pt: 'Reloca.ai — Inteligência de realocação com IA<br>Inteligência de realocação com IA'
  };

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a365d;line-height:1.7;">
${body}
<hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0 16px;">
<p style="font-size:12px;color:#718096;">${footerText[language] || footerText.en}</p>
</body></html>`;
}

export const MULTILINGUAL_EMAIL_SEQUENCE: EmailSequence[] = [
  // Email 1: Day 0 — Report delivery, NO pitch
  {
    dayOffset: 0,
    templates: {
      en: {
        subject: 'Your Relocation Report is Ready 🎉',
        buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>Your personalized relocation report is ready. Here's what to do next:</p>
<ol>
  <li>Read your top country matches (Sections 1-3)</li>
  <li>Review the visa options for your situation (Section 4)</li>
  <li>Check the cost breakdown (Sections 5-6)</li>
  <li>Share the PDF with your partner/family</li>
</ol>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">View Your Report</a></p>
<p>Questions? Reply to this email.</p>
<p>— The Reloca.ai Team</p>
        `, 'en'),
      },
      fr: {
        subject: 'Votre rapport de relocalisation est prêt 🎉',
        buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Salut ${firstName},</h2>
<p>Votre rapport de relocalisation personnalisé est prêt. Voici ce qu'il faut faire ensuite :</p>
<ol>
  <li>Lisez vos pays correspondants principaux (Sections 1-3)</li>
  <li>Examinez les options de visa pour votre situation (Section 4)</li>
  <li>Vérifiez la répartition des coûts (Sections 5-6)</li>
  <li>Partagez le PDF avec votre partenaire/famille</li>
</ol>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Voir votre rapport</a></p>
<p>Des questions ? Répondez à cet email.</p>
<p>— L'équipe Reloca.ai</p>
        `, 'fr'),
      },
      es: {
        subject: 'Tu informe de reubicación está listo 🎉',
        buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hola ${firstName},</h2>
<p>Tu informe de reubicación personalizado está listo. Esto es lo que debes hacer a continuación:</p>
<ol>
  <li>Lee tus países más compatibles (Secciones 1-3)</li>
  <li>Revisa las opciones de visa para tu situación (Sección 4)</li>
  <li>Verifica el desglose de costos (Secciones 5-6)</li>
  <li>Comparte el PDF con tu pareja/familia</li>
</ol>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Ver tu informe</a></p>
<p>¿Preguntas? Responde a este email.</p>
<p>— El equipo Reloca.ai</p>
        `, 'es'),
      },
      it: {
        subject: 'Il tuo rapporto di trasferimento è pronto 🎉',
        buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Ciao ${firstName},</h2>
<p>Il tuo rapporto di trasferimento personalizzato è pronto. Ecco cosa fare dopo:</p>
<ol>
  <li>Leggi i tuoi paesi più compatibili (Sezioni 1-3)</li>
  <li>Rivedi le opzioni visto per la tua situazione (Sezione 4)</li>
  <li>Controlla la suddivisione dei costi (Sezioni 5-6)</li>
  <li>Condividi il PDF con il tuo partner/famiglia</li>
</ol>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Visualizza il tuo rapporto</a></p>
<p>Domande? Rispondi a questa email.</p>
<p>— Il team Reloca.ai</p>
        `, 'it'),
      },
      pt: {
        subject: 'Seu relatório de realocação está pronto 🎉',
        buildHtml: (firstName, reportUrl) => wrap(`
<h2 style="color:#1a365d;">Oi ${firstName},</h2>
<p>Seu relatório de realocação personalizado está pronto. Aqui está o que fazer a seguir:</p>
<ol>
  <li>Leia seus países mais compatíveis (Seções 1-3)</li>
  <li>Revise as opções de visto para sua situação (Seção 4)</li>
  <li>Verifique o detalhamento de custos (Seções 5-6)</li>
  <li>Compartilhe o PDF com seu parceiro/família</li>
</ol>
<p><a href="${reportUrl}" style="display:inline-block;background:#38b2ac;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Ver seu relatório</a></p>
<p>Dúvidas? Responda a este email.</p>
<p>— A equipe Reloca.ai</p>
        `, 'pt'),
      }
    }
  },
  // Email 2: Day 3 — Educational value, no pitch
  {
    dayOffset: 3,
    templates: {
      en: {
        subject: '3 things most people miss when planning an international move',
        buildHtml: (firstName, _reportUrl) => wrap(`
<h2 style="color:#1a365d;">Hi ${firstName},</h2>
<p>After helping hundreds of families plan their move, here are the 3 mistakes we see most often:</p>
<h3 style="color:#38b2ac;">1. Underestimating visa timelines</h3>
<p>Most visa processes take 2-6 months. Start early — especially for Brazil and Argentina. Your report's Section 4 has the exact timeline for your situation.</p>
<h3 style="color:#38b2ac;">2. Skipping the banking setup</h3>
<p>Opening a local bank account before you arrive saves weeks of frustration. Some countries (like Paraguay) let you do this remotely. Others require in-person visits with specific documents.</p>
<h3 style="color:#38b2ac;">3. Missing school enrollment deadlines</h3>
<p>If you have kids, international schools often have enrollment windows 6-12 months ahead. Don't assume you can register on arrival.</p>
<p>Your report covers all of this in detail — check Sections 3, 8, and 12.</p>
<p>— The Reloca.ai Team</p>
        `, 'en'),
      },
      fr: {
        subject: '3 choses que la plupart des gens ratent lors de la planification d\'un déménagement international',
        buildHtml: (firstName, _reportUrl) => wrap(`
<h2 style="color:#1a365d;">Salut ${firstName},</h2>
<p>Après avoir aidé des centaines de familles à planifier leur déménagement, voici les 3 erreurs que nous voyons le plus souvent :</p>
<h3 style="color:#38b2ac;">1. Sous-estimer les délais de visa</h3>
<p>La plupart des processus de visa prennent 2-6 mois. Commencez tôt — surtout pour le Brésil et l'Argentine. La Section 4 de votre rapport a le calendrier exact pour votre situation.</p>
<h3 style="color:#38b2ac;">2. Ignorer la configuration bancaire</h3>
<p>Ouvrir un compte bancaire local avant votre arrivée vous fait économiser des semaines de frustration. Certains pays (comme le Paraguay) vous permettent de le faire à distance. D'autres nécessitent des visites en personne avec des documents spécifiques.</p>
<h3 style="color:#38b2ac;">3. Rater les échéances d'inscription scolaire</h3>
<p>Si vous avez des enfants, les écoles internationales ont souvent des fenêtres d'inscription 6-12 mois à l'avance. Ne supposez pas que vous pouvez vous inscrire à l'arrivée.</p>
<p>Votre rapport couvre tout cela en détail — consultez les Sections 3, 8 et 12.</p>
<p>— L'équipe Reloca.ai</p>
        `, 'fr'),
      }
      // Continue with es, it, pt for all templates...
    }
  }
  // Continue with other emails in sequence...
];

// Helper function to get template by language with fallback to English
export function getEmailTemplate(templates: LanguageTemplates, language: string): EmailTemplate {
  return templates[language] || templates['en'];
}