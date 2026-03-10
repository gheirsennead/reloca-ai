import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '10f34574c2510a38ae6caad89e45a7f5';

export async function GET(request: NextRequest) {
  const auth = request.headers.get('x-admin-password');
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Get all users
    const { data: users, error: usersError } = await supabaseAdmin
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (usersError) throw usersError;

    // Get all reports
    const { data: reports, error: reportsError } = await supabaseAdmin
      .from('reports')
      .select('id, user_id, report_type, created_at, country_recommendations, ai_cost_usd, pdf_url')
      .order('created_at', { ascending: false });

    // Get scheduled emails status
    let emailStats: any[] = [];
    try {
      const { data } = await supabaseAdmin
        .from('scheduled_emails')
        .select('user_id, sent, subject, scheduled_at, sent_at');
      emailStats = data || [];
    } catch (e) {
      // table may not exist
    }

    // Merge reports into users
    const enrichedUsers = (users || []).map(user => {
      const userReports = (reports || []).filter(r => r.user_id === user.id);
      const userEmails = emailStats.filter(e => e.user_id === user.id);
      return {
        ...user,
        reports: userReports,
        emails_scheduled: userEmails.length,
        emails_sent: userEmails.filter(e => e.sent).length,
      };
    });

    const stats = {
      total: enrichedUsers.length,
      paid: enrichedUsers.filter(u => u.paid).length,
      free: enrichedUsers.filter(u => !u.paid).length,
      with_report: enrichedUsers.filter(u => u.report_generated).length,
    };

    return NextResponse.json({ users: enrichedUsers, stats });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to fetch' }, { status: 500 });
  }
}
