import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/server-db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const db = getDatabase();
    return NextResponse.json({
      success: true,
      data: db
    });
  } catch (err: any) {
    console.error('Failed to get public CMS content:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve website content' },
      { status: 500 }
    );
  }
}
