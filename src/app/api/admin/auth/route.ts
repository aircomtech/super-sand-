import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'supersand2026';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (password === ADMIN_PASSWORD) {
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
