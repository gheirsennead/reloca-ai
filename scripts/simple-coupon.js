// Simple script to create working coupon
const fs = require('fs');
const path = require('path');

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

async function createWorkingCoupon() {
  const stripe = new Stripe(env.STRIPE_SECRET_KEY);
  
  try {
    // Delete existing problematic coupon and recreate
    try {
      await stripe.coupons.del('TESTFREE');
      console.log('Deleted old TESTFREE coupon');
    } catch (e) {
      // Doesn't exist, that's fine
    }
    
    // Create simple coupon with user-friendly ID
    const coupon = await stripe.coupons.create({
      id: 'TESTFREE',
      percent_off: 100,
      duration: 'forever',
      name: 'Test Coupon - 100% Off',
      max_redemptions: 50,
    });
    
    console.log('✅ Created coupon successfully:');
    console.log(`  - Code: ${coupon.id}`);
    console.log(`  - Discount: ${coupon.percent_off}% off`);
    console.log(`  - Max uses: ${coupon.max_redemptions}`);
    
    console.log('\n🎯 How to test:');
    console.log('1. Complete questionnaire');
    console.log('2. At payment, enter: TESTFREE');
    console.log('3. Should be $0.00');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code === 'resource_already_exists') {
      console.log('✅ Coupon TESTFREE already exists and should work');
    }
  }
}

createWorkingCoupon();