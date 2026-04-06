// Test language detection
const { detectLanguage } = require('./lib/language-detection.ts');

// Test cases
const testCases = [
  { email: 'test@gmail.fr', expected: 'fr' },
  { email: 'user@yahoo.be', expected: 'fr' },
  { email: 'comtecatherine@yahoo.fr', expected: 'fr' },
  { email: 'test@gmail.com', expected: 'en' },
  { email: 'user@test.de', expected: 'en' },
];

console.log('🇫🇷 Testing French Language Detection:');
testCases.forEach(({ email, expected }) => {
  const detected = detectLanguage({ email });
  const status = detected === expected ? '✅' : '❌';
  console.log(`${status} ${email} → ${detected} (expected: ${expected})`);
});

console.log('\n🌐 Testing Accept-Language Header:');
const headerTests = [
  { acceptLanguage: 'fr-FR,fr;q=0.9,en;q=0.8', expected: 'fr' },
  { acceptLanguage: 'en-US,en;q=0.9', expected: 'en' },
  { acceptLanguage: 'fr-CA,fr;q=0.9,en;q=0.8', expected: 'fr' },
];

headerTests.forEach(({ acceptLanguage, expected }) => {
  const detected = detectLanguage({ acceptLanguage });
  const status = detected === expected ? '✅' : '❌';  
  console.log(`${status} ${acceptLanguage} → ${detected}`);
});