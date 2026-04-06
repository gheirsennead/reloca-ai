// Enhanced "Get My Full Report" button with better error handling
// Drop-in replacement for the existing handleCheckout function in /app/report/[id]/page.tsx

async function handleCheckoutEnhanced() {
  setCheckoutLoading(true);
  setCouponError("");
  
  try {
    // Add debug logging
    console.log('🔄 Starting checkout process for report:', resolvedId);
    
    // Build request body
    const body: Record<string, string> = { reportId: resolvedId };
    if (couponCode.trim()) body.couponCode = couponCode.trim();
    
    // Auto-attach referral code for attribution tracking
    const ref = typeof window !== "undefined" ? localStorage.getItem("reloca_ref") : null;
    if (ref) body.referralCode = ref;
    // Auto-apply referral promo code if no manual coupon entered
    if (!body.couponCode && ref) body.couponCode = ref;
    
    console.log('📤 Request body:', body);
    
    // Call API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    const res = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    console.log('📨 Response status:', res.status);
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    
    const data = await res.json();
    console.log('📥 Response data:', data);
    
    if (data.url) {
      console.log('✅ Redirecting to Stripe:', data.url);
      
      // Add user feedback before redirect
      const button = document.querySelector('[data-checkout-button]') as HTMLButtonElement;
      if (button) {
        button.textContent = 'Opening Stripe Checkout...';
      }
      
      // Small delay to show feedback, then redirect
      setTimeout(() => {
        window.location.href = data.url;
      }, 500);
      
    } else if (data.error) {
      console.error('❌ API Error:', data.error);
      setCouponError(data.error);
      setCheckoutLoading(false);
    } else {
      console.error('❌ Unexpected response:', data);
      throw new Error('Invalid response from checkout API');
    }
    
  } catch (error: any) {
    console.error('💥 Checkout error:', error);
    
    setCheckoutLoading(false);
    
    // User-friendly error messages
    let errorMessage = 'Payment system temporarily unavailable. Please try again in a moment.';
    
    if (error.name === 'AbortError') {
      errorMessage = 'Request timed out. Please check your connection and try again.';
    } else if (error.message?.includes('Failed to fetch')) {
      errorMessage = 'Connection failed. Please check your internet connection.';
    } else if (error.message?.includes('404')) {
      errorMessage = 'Payment service not found. Please refresh the page and try again.';
    } else if (error.message?.includes('500')) {
      errorMessage = 'Server error. Our team has been notified. Please try again shortly.';
    }
    
    // Show error to user
    setCouponError(errorMessage);
    
    // Also show browser alert as fallback
    alert(`Unable to start checkout: ${errorMessage}\n\nPlease:\n1. Refresh the page\n2. Try a different browser\n3. Contact support if the issue persists`);
    
    // Log additional debug info
    console.log('🔍 Debug Info:', {
      reportId: resolvedId,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    });
  }
}

// Enhanced button component with data attribute for targeting
<button 
  onClick={handleCheckoutEnhanced} 
  disabled={checkoutLoading} 
  data-checkout-button="true"
  className="w-full bg-gradient-to-r from-[#38b2ac] to-[#319795] hover:from-[#2c9a94] hover:to-[#28908a] text-white font-bold px-8 py-4 rounded-xl transition disabled:opacity-50 text-lg shadow-lg shadow-[#38b2ac]/25"
>
  {checkoutLoading ? (
    <span className="flex items-center justify-center gap-2">
      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
      </svg>
      Starting checkout...
    </span>
  ) : (
    'Get My Full Report →'
  )}
</button>

// Additional debug panel (only shown in development)
{process.env.NODE_ENV === 'development' && (
  <div className="mt-4 p-3 bg-gray-100 rounded text-xs">
    <strong>Debug Info:</strong>
    <br />Report ID: {resolvedId}
    <br />Environment: {process.env.NODE_ENV}
    <br />
    <button 
      onClick={() => navigator.clipboard.writeText(resolvedId)}
      className="text-blue-500 underline"
    >
      Copy Report ID
    </button>
  </div>
)}