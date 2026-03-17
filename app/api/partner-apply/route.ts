import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, platform, handle, audienceSize, pitch } = body;

    if (!name || !email || !platform || !handle || !audienceSize) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Store in Supabase
    const { error: dbError } = await supabase
      .from("partner_applications")
      .insert({
        name,
        email,
        platform,
        handle,
        audience_size: audienceSize,
        pitch: pitch || null,
        status: "pending",
        created_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      // Don't block the flow if table doesn't exist yet
      if (dbError.code !== "42P01") {
        return NextResponse.json(
          { error: "Failed to submit application" },
          { status: 500 }
        );
      }
    }

    // Send confirmation email to applicant
    try {
      await resend.emails.send({
        from: "Reloca.ai Partners <partners@reloca.ai>",
        to: email,
        bcc: 'myjobisamazing@gmail.com',
        subject: "Partner Application Received — Reloca.ai",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <img src="https://reloca.ai/images/reloca-logo.png" alt="Reloca.ai" style="height: 40px; margin-bottom: 30px;" />
            <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 16px;">Application Received! 🎉</h1>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
              Thanks for applying to the <strong>Reloca.ai Creator Partner Program</strong>. We're excited to review your application!
            </p>
            <div style="background: #f7fafc; border-radius: 12px; padding: 20px; margin: 24px 0;">
              <p style="color: #2d3748; margin: 0 0 8px 0;"><strong>What happens next:</strong></p>
              <ul style="color: #4a5568; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>We'll review your application within <strong>48 hours</strong></li>
                <li>If approved, you'll get your unique referral link + coupon code</li>
                <li>Start earning <strong>30% commission</strong> on every sale</li>
              </ul>
            </div>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to explore <a href="https://reloca.ai" style="color: #38b2ac;">reloca.ai</a>.
            </p>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
              — The Reloca Team
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
            <p style="color: #a0aec0; font-size: 12px;">
              © 2026 Reloca.ai — AI-powered relocation intelligence
            </p>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error("Email send error:", emailErr);
      // Don't fail the application if email fails
    }

    // Notify team (optional — send to Gregory)
    try {
      await resend.emails.send({
        from: "Reloca.ai Partners <partners@reloca.ai>",
        to: "aftcreations@protonmail.com",
        bcc: 'myjobisamazing@gmail.com',
        subject: `New Partner Application: ${name} (${platform})`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Partner Application</h2>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Platform:</strong> ${platform}</li>
              <li><strong>Handle:</strong> ${handle}</li>
              <li><strong>Audience:</strong> ${audienceSize}</li>
              <li><strong>Pitch:</strong> ${pitch || "—"}</li>
            </ul>
            <p>Review in <a href="https://supabase.com/dashboard/project/eieefabmmksorjvmsyfd/editor">Supabase</a></p>
          </div>
        `,
      });
    } catch (notifyErr) {
      console.error("Team notification error:", notifyErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Partner apply error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}