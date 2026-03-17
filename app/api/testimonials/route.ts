import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET /api/testimonials — fetch approved testimonials for public display
export async function GET(req: NextRequest) {
  const limit = parseInt(req.nextUrl.searchParams.get('limit') || '10');
  const featured = req.nextUrl.searchParams.get('featured');

  let query = supabase
    .from('testimonials')
    .select('id, name, text, country_from, country_to, rating, featured, created_at')
    .eq('approved', true)
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(limit);

  if (featured === 'true') {
    query = query.eq('featured', true);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }

  return NextResponse.json({ testimonials: data });
}
