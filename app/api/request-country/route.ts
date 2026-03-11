import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { country, city, email, reason } = body;

    if (!country || typeof country !== "string") {
      return NextResponse.json({ error: "Country is required" }, { status: 400 });
    }

    const { error } = await supabase.from("country_requests").insert({
      country: country.trim(),
      city: city?.trim() || null,
      email: email?.trim() || null,
      interest_reason: reason?.trim() || null,
    });

    if (error) {
      console.error("Failed to save country request:", error);
      return NextResponse.json({ error: "Failed to save request" }, { status: 500 });
    }

    // Get total count for this country
    const { count } = await supabase
      .from("country_requests")
      .select("*", { count: "exact", head: true })
      .eq("country", country.trim());

    // Notify Gregory via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Reloca.ai <notifications@reloca.ai>',
            to: ['gheirsennead@proton.me'],
            subject: `🌍 New Country Request: ${country.trim()} (#${count || 1})`,
            html: `
              <h2>New Country Request</h2>
              <p><strong>Country:</strong> ${country.trim()}</p>
              ${city ? `<p><strong>City:</strong> ${city.trim()}</p>` : ''}
              ${email ? `<p><strong>Email:</strong> ${email.trim()}</p>` : ''}
              ${reason ? `<p><strong>Reason:</strong> ${reason.trim()}</p>` : ''}
              <p><strong>Total requests for ${country.trim()}:</strong> ${count || 1}</p>
            `,
          }),
        });
      } catch (e) {
        console.error('Failed to send country request notification:', e);
      }
    }

    return NextResponse.json({ success: true, count: count || 1 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  const country = req.nextUrl.searchParams.get("country");
  if (!country) {
    return NextResponse.json({ error: "country param required" }, { status: 400 });
  }

  const { count } = await supabase
    .from("country_requests")
    .select("*", { count: "exact", head: true })
    .eq("country", country.trim());

  return NextResponse.json({ country, count: count || 0 });
}
