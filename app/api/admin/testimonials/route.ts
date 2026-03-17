import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// Simple admin auth check — reuse existing admin pattern
function isAdmin(req: NextRequest): boolean {
  const authHeader = req.headers.get('authorization');
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey) return false;
  return authHeader === `Bearer ${adminKey}`;
}

// GET /api/admin/testimonials — list all testimonials (including unapproved)
export async function GET(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const status = req.nextUrl.searchParams.get('status'); // 'approved', 'pending', 'all'

  let query = supabaseAdmin
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });

  if (status === 'approved') {
    query = query.eq('approved', true);
  } else if (status === 'pending') {
    query = query.eq('approved', false);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }

  return NextResponse.json({ testimonials: data });
}

// POST /api/admin/testimonials — create a new testimonial
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { name, text, country_from, country_to, rating, email, source, approved, featured } = body;

  if (!name || !text) {
    return NextResponse.json({ error: 'Name and text are required' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('testimonials')
    .insert({
      name,
      text,
      country_from: country_from || null,
      country_to: country_to || null,
      rating: rating || null,
      email: email || null,
      source: source || 'manual',
      approved: approved ?? false,
      featured: featured ?? false,
      approved_at: approved ? new Date().toISOString() : null,
      approved_by: approved ? 'admin' : null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }

  return NextResponse.json({ testimonial: data });
}

// PATCH /api/admin/testimonials — approve/feature/edit a testimonial
export async function PATCH(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { id, ...updates } = body;

  if (!id) {
    return NextResponse.json({ error: 'Testimonial ID required' }, { status: 400 });
  }

  // If approving, set timestamp
  if (updates.approved === true) {
    updates.approved_at = new Date().toISOString();
    updates.approved_by = 'admin';
  }

  const { data, error } = await supabaseAdmin
    .from('testimonials')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
  }

  return NextResponse.json({ testimonial: data });
}

// DELETE /api/admin/testimonials — remove a testimonial
export async function DELETE(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'Testimonial ID required' }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from('testimonials')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
