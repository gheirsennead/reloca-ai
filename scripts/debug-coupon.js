// Debug script to check coupon status
const fs = require('fs');
const path = require('path');

// Load environment variables manually
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  const env = {};
  try {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach(line => {
      const [key, ...value] = line.split('=');
      if (key && value.length > 0) {
        env[key.trim()] = value.join('=').trim();
      }
    });
  } catch (error) {
    console.error('Could not load .env.local file');
  }
  return env;
}

const env = loadEnv();
const Stripe = require('stripe');

async function debugCoupons() {
  const stripe = new Stripe(env.STRIPE_SECRET_KEY);
  
  try {
    console.log('🔍 Checking coupons and promotion codes...\n');
    
    // Check coupon TEST100
    try {
      const coupon = await stripe.coupons.retrieve('TEST100');
      console.log('✅ Coupon TEST100:');
      console.log(`  - Valid: ${coupon.valid}`);
      console.log(`  - Discount: ${coupon.percent_off}% off`);
      console.log(`  - Duration: ${coupon.duration}`);
      console.log(`  - Times redeemed: ${coupon.times_redeemed}/${coupon.max_redemptions || 'unlimited'}`);
    } catch (error) {
      console.log('❌ Coupon TEST100 not found:', error.message);
    }
    
    console.log();
    
    // Check promotion code TESTFREE
    try {
      const promoCodes = await stripe.promotionCodes.list({ code: 'TESTFREE', limit: 5 });
      if (promoCodes.data.length > 0) {
        promoCodes.data.forEach((promo, index) => {
          console.log(`✅ Promotion Code TESTFREE (#${index + 1}):`);
          console.log(`  - ID: ${promo.id}`);
          console.log(`  - Active: ${promo.active}`);
          console.log(`  - Coupon: ${promo.coupon}`);
          console.log(`  - Times redeemed: ${promo.times_redeemed}/${promo.max_redemptions || 'unlimited'}`);
          console.log(`  - Created: ${new Date(promo.created * 1000).toISOString()}`);
        });
      } else {
        console.log('❌ No promotion codes found for "TESTFREE"');
        
        // Let's create it
        console.log('\n🔧 Creating promotion code...');
        const newPromo = await stripe.promotionCodes.create({
          coupon: 'TEST100',
          code: 'TESTFREE',
          active: true,
        });
        console.log('✅ Created promotion code:');
        console.log(`  - Code: ${newPromo.code}`);
        console.log(`  - ID: ${newPromo.id}`);
        console.log(`  - Active: ${newPromo.active}`);
      }
    } catch (error) {
      console.log('❌ Error checking promotion codes:', error.message);
    }
    
    console.log('\n📋 Test Instructions:');
    console.log('1. Complete questionnaire at: https://reloca.ai/plan-balanced');
    console.log('2. At payment page, enter: TESTFREE');
    console.log('3. Should show $0.00 total');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

debugCoupons();