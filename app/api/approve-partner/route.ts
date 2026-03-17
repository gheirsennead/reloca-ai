import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import Stripe from "stripe";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Tier config
const TIERS: Record<string, { discount: number; commission: number; label: string }> = {
  "1k-20k":  { discount: 10, commission: 20, label: "Micro (1K–20K)" },
  "20k-80k": { discount: 15, commission: 25, label: "Mid-Tier (20K–80K)" },
  "80k+":    { discount: 25, commission: 30, label: "Top-Tier (80K+)" },
};

function generateCode(name: string): string {
  const base = name.split(/\s+/)[0].toUpperCase().replace(/[^A-Z]/g, "").slice(0, 8);
  const suffix = Math.floor(Math.random() * 100).toString().padStart(2, "0");
  return `${base}${suffix}`;
}

export async function POST(req: Request) {
  try {
    const { applicationId, secret } = await req.json();

    // Simple auth — must match env secret
    if (secret !== process.env.PARTNER_ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch application
    const { data: app, error: fetchErr } = await supabase
      .from("partner_applications")
      .select("*")
      .eq("id", applicationId)
      .single();

    if (fetchErr || !app) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    if (app.status === "approved") {
      return NextResponse.json({ error: "Already approved" }, { status: 400 });
    }

    // Determine tier
    const tier = TIERS[app.audience_size] || TIERS["1k-20k"];
    const referralCode = generateCode(app.name);
    const referralLink = `https://reloca.ai/?ref=${referralCode}`;

    // Create Stripe coupon + promo code
    const coupon = await stripe.coupons.create({
      percent_off: tier.discount,
      duration: "forever",
      name: `Partner: ${app.name} (${tier.discount}% off)`,
    });

    const promoCode = await stripe.promotionCodes.create({
      promotion: { type: "coupon", coupon: coupon.id },
      code: referralCode,
      active: true,
    });

    // Update application in Supabase
    await supabase
      .from("partner_applications")
      .update({
        status: "approved",
        reviewed_at: new Date().toISOString(),
        notes: JSON.stringify({
          referral_code: referralCode,
          referral_link: referralLink,
          stripe_coupon_id: coupon.id,
          stripe_promo_code_id: promoCode.id,
          tier: app.audience_size,
          discount_percent: tier.discount,
          commission_percent: tier.commission,
        }),
      })
      .eq("id", applicationId);

    // Send approval email
    await resend.emails.send({
      from: "Reloca.ai Partners <partners@reloca.ai>",
      to: app.email,
      bcc: 'myjobisamazing@gmail.com',
      subject: "🎉 You're Approved! Welcome to the Reloca.ai Partner Program",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <img src="https://reloca.ai/images/reloca-logo.png" alt="Reloca.ai" style="height: 40px; margin-bottom: 30px;" />
          <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 16px;">Welcome to the Partner Program! 🎉</h1>
          <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">Hi ${app.name},</p>
          <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
            Great news — your application has been approved! You're now a <strong>${tier.label}</strong> partner.
          </p>

          <div style="background: #f0fff4; border: 2px solid #38b2ac; border-radius: 12px; padding: 24px; margin: 24px 0;">
            <p style="color: #1a365d; font-weight: bold; margin: 0 0 12px 0; font-size: 18px;">Your Partner Details</p>
            <table style="width: 100%; color: #4a5568; font-size: 15px;">
              <tr><td style="padding: 6px 0; font-weight: 600;">Referral Link:</td><td style="padding: 6px 0;"><a href="${referralLink}" style="color: #38b2ac; font-weight: bold;">${referralLink}</a></td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Coupon Code:</td><td style="padding: 6px 0;"><code style="background: #e6fffa; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 16px;">${referralCode}</code></td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Audience Discount:</td><td style="padding: 6px 0;">${tier.discount}% off (they pay $${Math.round(49 * (1 - tier.discount / 100))})</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Your Commission:</td><td style="padding: 6px 0;"><strong>${tier.commission}%</strong> on every sale</td></tr>
            </table>
          </div>

          <div style="background: #f7fafc; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <p style="color: #2d3748; font-weight: bold; margin: 0 0 8px 0;">How to start earning:</p>
            <ol style="color: #4a5568; margin: 0; padding-left: 20px; line-height: 2;">
              <li>Share your referral link with your audience</li>
              <li>They click and get <strong>${tier.discount}% off</strong> automatically</li>
              <li>You earn <strong>${tier.commission}% commission</strong> on every sale</li>
              <li>Cookie lasts <strong>60 days</strong> — they don't have to buy immediately</li>
            </ol>
          </div>

          <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
            Questions? Reply to this email anytime.
          </p>
          <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
            Welcome aboard! 🚀<br/>— The Reloca Team
          </p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="color: #a0aec0; font-size: 12px;">© 2026 Reloca.ai — AI-powered relocation intelligence</p>
        </div>
      `,
    });

    // Notify Gregory
    await resend.emails.send({
      from: "Reloca.ai Partners <partners@reloca.ai>",
      to: "aftcreations@protonmail.com",
      bcc: 'myjobisamazing@gmail.com',
      subject: `✅ Partner Approved: ${app.name} → ${referralCode}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Partner Approved</h2>
          <ul>
            <li><strong>Name:</strong> ${app.name}</li>
            <li><strong>Email:</strong> ${app.email}</li>
            <li><strong>Tier:</strong> ${tier.label}</li>
            <li><strong>Code:</strong> ${referralCode}</li>
            <li><strong>Discount:</strong> ${tier.discount}%</li>
            <li><strong>Commission:</strong> ${tier.commission}%</li>
            <li><strong>Stripe Promo:</strong> ${promoCode.id}</li>
          </ul>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      referralCode,
      referralLink,
      tier: tier.label,
      discount: tier.discount,
      commission: tier.commission,
      stripeCouponId: coupon.id,
      stripePromoCodeId: promoCode.id,
    });
  } catch (err: any) {
    console.error("Approve partner error:", err);
    return NextResponse.json(
      { error: "Internal server error", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}