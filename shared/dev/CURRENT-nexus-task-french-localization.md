# FRENCH LOCALIZATION IMPLEMENTATION - Reloca.ai

**Assigned to:** Nexus  
**Priority:** High (Lost French client)  
**Estimated Time:** 2-3 days  
**Branch:** `feature/french-localization`

## Overview
Implement complete French localization for Reloca.ai including:
1. Website interface (landing page, quiz, all pages)
2. AI-generated reports in French
3. Browser language detection
4. Language switching UI

## Technical Implementation Plan

### Phase 1: Setup i18n Framework

**1. Install Dependencies**
```bash
npm install next-i18next react-i18next i18next
```

**2. Configure next-i18next**
```javascript
// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: true,
  },
  fallbackLng: 'en',
  debug: false,
  serializeConfig: false,
  use: [
    require('i18next-fs-backend'),
  ],
  ns: ['common', 'landing', 'quiz', 'countries'],
  defaultNS: 'common',
}
```

**3. Update next.config.js**
```javascript
const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  // ... existing config
}
```

### Phase 2: Create Translation Files

**Directory Structure:**
```
public/
  locales/
    en/
      common.json
      landing.json
      quiz.json
      countries.json
      reports.json
    fr/
      common.json
      landing.json
      quiz.json
      countries.json
      reports.json
```

**Key Translation Categories:**

1. **common.json** - Navigation, buttons, form labels
2. **landing.json** - Homepage content, testimonials, FAQ
3. **quiz.json** - All 36 questions and options
4. **countries.json** - Country names and descriptions
5. **reports.json** - Report section headers and templates

### Phase 3: Update React Components

**1. Wrap pages with i18n**
```javascript
// pages/_app.js
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
```

**2. Update components to use translations**
```javascript
import { useTranslation } from 'next-i18next'

function LandingPage() {
  const { t } = useTranslation('landing')
  
  return (
    <h1>{t('hero.title')}</h1>
    // Replace all hardcoded text with t() calls
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'landing'])),
  },
})
```

### Phase 4: Language Switcher UI

**1. Add language toggle in header**
```javascript
import Link from 'next/link'
import { useRouter } from 'next/router'

function LanguageSwitcher() {
  const router = useRouter()
  
  return (
    <div className="language-switcher">
      <Link href="/" locale="en">
        <a className={router.locale === 'en' ? 'active' : ''}>EN</a>
      </Link>
      <Link href="/" locale="fr">
        <a className={router.locale === 'fr' ? 'active' : ''}>FR</a>
      </Link>
    </div>
  )
}
```

### Phase 5: AI Report Localization

**1. Update AI prompt system**
```javascript
// lib/reportGenerator.js
function getReportPrompt(userAnswers, locale) {
  const basePrompt = locale === 'fr' 
    ? getFrenchReportPrompt(userAnswers)
    : getEnglishReportPrompt(userAnswers)
  
  return basePrompt
}

function getFrenchReportPrompt(answers) {
  return `
INSTRUCTIONS: Générez un rapport de relocalisation personnalisé en français pour:
- Profil utilisateur: ${answers.profile}
- Budget: ${answers.budget}
- Préférences: ${answers.preferences}

SECTIONS REQUISES:
1. Pays recommandés (avec scores de compatibilité)
2. Options de visa et exigences
3. Coût de la vie détaillé
4. Analyse du marché immobilier
5. Implications fiscales
6. Aperçu des soins de santé
7. Options d'éducation
8. Évaluation de sécurité
9. Correspondance climat et style de vie
10. Communauté d'expatriés
11. Guide de configuration bancaire
12. Chronologie personnalisée

FORMAT: Rapport professionnel en français, 4000+ mots
STYLE: Informatif, pratique, personnalisé pour le profil utilisateur
  `
}
```

### Phase 6: Database Updates

**1. Add locale column to reports table**
```sql
ALTER TABLE reports ADD COLUMN locale VARCHAR(5) DEFAULT 'en';
CREATE INDEX idx_reports_locale ON reports(locale);
```

**2. Update report storage logic**
```javascript
// Save report with locale
await supabase
  .from('reports')
  .insert({
    user_id,
    content,
    locale: userLocale,
    created_at: new Date()
  })
```

### Phase 7: URL Routing

**Next.js will automatically handle:**
- `/` (English)
- `/fr/` (French)
- `/fr/plan-36` (French quiz)
- `/fr/relocate-to/portugal` (French country pages)

### Phase 8: Testing & QA

**1. Test checklist:**
- [ ] Language detection works on first visit
- [ ] Language switcher toggles correctly  
- [ ] All pages render in both languages
- [ ] Quiz flows work in French
- [ ] Reports generate in French
- [ ] URL routing works correctly
- [ ] SEO meta tags localized

**2. Browser testing:**
- Chrome with French locale
- Safari with French preferences
- Mobile browsers

## Key French Translations (Priority)

### Landing Page
```json
{
  "hero": {
    "title": "Vous Pensez Déménager à l'Étranger ? Découvrez Où.",
    "subtitle": "Répondez à quelques questions sur votre style de vie, votre budget et vos objectifs. Notre IA analyse 23+ pays et vous dit exactement où aller — avec les étapes de visa, les économies fiscales et les coûts réels.",
    "cta": "Obtenez Votre Plan de Déménagement Personnalisé"
  },
  "features": {
    "time": "Prend 10 minutes",
    "free": "Quiz gratuit + résultats instantanés",
    "guarantee": "Garantie de remboursement de 30 jours"
  }
}
```

### Quiz Questions (Sample)
```json
{
  "questions": {
    "citizenship": "De quelle nationalité êtes-vous ?",
    "budget": "Quel est votre budget mensuel pour le coût de la vie ?",
    "family": "Avez-vous des enfants qui déménageront avec vous ?"
  }
}
```

### Countries
```json
{
  "portugal": {
    "title": "Portugal",
    "description": "Visa doré, régime fiscal NHR, style de vie atlantique."
  },
  "spain": {
    "title": "Espagne", 
    "description": "Visa nomade numérique, loi Beckham, vie méditerranéenne."
  }
}
```

## Implementation Order

1. ✅ **Setup i18n framework** (Day 1 morning)
2. ✅ **Create French translation files** (Day 1 afternoon)
3. ✅ **Update landing page components** (Day 2 morning)
4. ✅ **Implement quiz localization** (Day 2 afternoon)  
5. ✅ **Add language switcher** (Day 2 evening)
6. ✅ **Update AI report generation** (Day 3 morning)
7. ✅ **Test and deploy** (Day 3 afternoon)

## Success Metrics

- French client can complete entire flow in French
- Reports generate correctly in French
- Language switching works seamlessly
- SEO improved for French keywords
- French traffic can be tracked separately

## Post-Launch

1. Monitor French user behavior
2. Collect feedback on translations
3. A/B test French marketing copy
4. Consider additional francophone markets (Belgium, Switzerland, Canada)

---

**Ready to start implementation. Will create feature branch and begin with i18n setup.**