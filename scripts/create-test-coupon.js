// Script to create a 100% discount test coupon
// Run: node scripts/create-test-coupon.js

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

async function createTestCoupon() {
  const stripe = new Stripe(env.STRIPE_SECRET_KEY);
  
  try {
    // Create 100% discount coupon
    const coupon = await stripe.coupons.create({
      id: 'TEST100', // Fixed ID for easy reference
      percent_off: 100,
      duration: 'forever',
      name: 'Test Coupon - 100% Off',
      max_redemptions: 100, // Limit to prevent abuse
    });
    
    console.log('✅ Test coupon created:');
    console.log(`Coupon Code: ${coupon.id}`);
    console.log(`Discount: ${coupon.percent_off}% off`);
    console.log(`Max uses: ${coupon.max_redemptions}`);
    console.log(`Valid: ${coupon.valid}`);
    
    // Also create a promotion code for easier sharing
    const promoCode = await stripe.promotionCodes.create({
      coupon: coupon.id,
      code: 'TESTFREE', // User-friendly code
    });
    
    console.log('\n✅ Promotion code created:');
    console.log(`Code: ${promoCode.code}`);
    console.log(`Uses: ${promoCode.times_redeemed}/${promoCode.max_redemptions}`);
    
    console.log('\n🎯 How to use:');
    console.log('1. Go to any report payment page');
    console.log('2. Enter coupon code: TESTFREE');
    console.log('3. Payment will be $0.00');
    
  } catch (error) {
    console.error('❌ Error creating coupon:', error.message);
    
    if (error.code === 'resource_already_exists') {
      console.log('\n💡 Coupon already exists. Checking details...');
      try {
        const existing = await stripe.coupons.retrieve('TEST100');
        console.log(`Existing coupon: ${existing.id} (${existing.percent_off}% off)`);
        
        const promoCodes = await stripe.promotionCodes.list({ code: 'TESTFREE', limit: 1 });
        if (promoCodes.data.length > 0) {
          console.log(`Existing promo code: TESTFREE`);
        }
        
        console.log('\n✅ Use coupon code: TESTFREE');
      } catch (e) {
        console.error('Could not retrieve existing coupon');
      }
    }
  }
}

createTestCoupon();