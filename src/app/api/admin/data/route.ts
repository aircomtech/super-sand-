import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, saveDatabase } from '@/lib/server-db';

function checkAuth(req: NextRequest): boolean {
  const session = req.cookies.get('super_sand_admin_session');
  return session?.value === 'authenticated_session_token_2026';
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = getDatabase();
  return NextResponse.json({ success: true, data: db });
}

export async function PUT(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { action, payload } = await req.json();
    const db = getDatabase();

    if (action === 'update_enquiry_status') {
      const { id, status } = payload;
      const enquiry = db.enquiries.find((e) => e.id === id);
      if (enquiry) {
        enquiry.status = status;
        saveDatabase(db);
        return NextResponse.json({ success: true, message: 'Status updated' });
      }
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
    }

    if (action === 'delete_enquiry') {
      const { id } = payload;
      db.enquiries = db.enquiries.filter((e) => e.id !== id);
      saveDatabase(db);
      return NextResponse.json({ success: true, message: 'Enquiry deleted' });
    }

    if (action === 'update_site_info') {
      db.siteInfo = { ...db.siteInfo, ...payload };
      saveDatabase(db);
      return NextResponse.json({ success: true, message: 'Site info updated' });
    }

    if (action === 'update_products') {
      db.products = payload;
      saveDatabase(db);
      return NextResponse.json({ success: true, message: 'Products updated' });
    }

    if (action === 'update_testimonials') {
      db.testimonials = payload;
      saveDatabase(db);
      return NextResponse.json({ success: true, message: 'Testimonials updated' });
    }

    if (action === 'update_projects') {
      db.projects = payload;
      saveDatabase(db);
      return NextResponse.json({ success: true, message: 'Projects updated' });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}
