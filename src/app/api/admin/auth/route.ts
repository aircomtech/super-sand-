import { NextRequest, NextResponse } from 'next/server';
import { getDatabaseAsync, saveDatabaseAsync, logAdminActivity } from '@/lib/server-db';

const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'supersand2026';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const db = await getDatabaseAsync();
    const currentActivePassword = db.adminPassword || DEFAULT_ADMIN_PASSWORD;

    if (password === currentActivePassword) {
      const response = NextResponse.json({
        success: true,
        message: 'Admin authenticated successfully'
      });

      // Set auth cookie
      response.cookies.set('super_sand_admin_session', 'authenticated_session_token_2026', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid password. Access denied.' },
      { status: 401 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = req.cookies.get('super_sand_admin_session');
    const isAuthenticated = session && session.value === 'authenticated_session_token_2026';

    const { currentPassword, newPassword } = await req.json();

    if (!newPassword || typeof newPassword !== 'string' || newPassword.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: 'New password must be at least 6 characters long.' },
        { status: 400 }
      );
    }

    const db = await getDatabaseAsync();
    const currentActivePassword = db.adminPassword || DEFAULT_ADMIN_PASSWORD;

    // Verify current password
    if (currentPassword !== currentActivePassword) {
      return NextResponse.json(
        { success: false, error: 'Current password is incorrect. Please re-enter your existing password.' },
        { status: 401 }
      );
    }

    // Update password in database and sync with Supabase and local DB
    db.adminPassword = newPassword.trim();
    await saveDatabaseAsync(db);
    logAdminActivity('UPDATE_PASSWORD', 'Security', 'Admin master password updated successfully', 'Administrator');

    const response = NextResponse.json({
      success: true,
      message: 'Admin password changed successfully! Your new password is now active.'
    });

    // Refresh auth session
    response.cookies.set('super_sand_admin_session', 'authenticated_session_token_2026', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7
    });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Failed to change password: ' + (err.message || 'Server error') },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const session = req.cookies.get('super_sand_admin_session');
  if (session && session.value === 'authenticated_session_token_2026') {
    return NextResponse.json({ authenticated: true });
  }
  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.delete('super_sand_admin_session');
  return response;
}
