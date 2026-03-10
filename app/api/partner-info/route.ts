import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const ref = new URL(request.url).searchParams.get('ref');
  if (!ref) return NextResponse.json({ partner: null });

  try {
    // Find approved partner by referral code
    const { data: partners } = await supabaseAdmin
      .from('partner_applications')
      .select('name, handle, platform, notes, status')
      .eq('status', 'approved');

    if (!partners) return NextResponse.json({ partner: null });

    // Search through notes for matching referral code
    const match = partners.find(p => {
      try {
        const notes = typeof p.notes === 'string' ? JSON.parse(p.notes) : p.notes;
        return notes?.referral_code === ref;
      } catch { return false; }
    });

    if (!match) return NextResponse.json({ partner: null });

    const notes = typeof match.notes === 'string' ? JSON.parse(match.notes) : match.notes;

    return NextResponse.json({
      partner: {
        name: match.name,
        handle: match.handle,
        platform: match.platform,
        code: notes.referral_code,
        discount: notes.discount_percent || 10,
      }
    });
  } catch {
    return NextResponse.json({ partner: null });
  }
}
