import { NextRequest, NextResponse } from 'next/server';
import { uploadMediaAsset } from '@/lib/cloudinary';
import { getDatabase, saveDatabase, logAdminActivity } from '@/lib/server-db';

function checkAuth(req: NextRequest): boolean {
  const session = req.cookies.get('super_sand_admin_session');
  return session?.value === 'authenticated_session_token_2026';
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'super-sand';
    const associatedContent = (formData.get('associatedContent') as string) || '';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await uploadMediaAsset(buffer, file.name, folder);

    if (result.success) {
      // Register asset in DB mediaAssets
      const db = getDatabase();
      const newAsset = {
        id: `med-${Date.now()}`,
        publicId: result.publicId,
        url: result.url,
        format: result.format,
        width: result.width,
        height: result.height,
        resourceType: 'image' as const,
        createdAt: new Date().toISOString(),
        originalFilename: file.name,
        associatedContent
      };

      db.mediaAssets = [newAsset, ...(db.mediaAssets || [])];
      saveDatabase(db);
      logAdminActivity('MEDIA_UPLOAD', 'Media Manager', `Uploaded new image: ${file.name}`);

      return NextResponse.json({
        success: true,
        asset: newAsset
      });
    }

    return NextResponse.json(
      { error: result.error || 'Upload failed' },
      { status: 500 }
    );
  } catch (err: any) {
    console.error('Upload API route error:', err);
    return NextResponse.json(
      { error: err.message || 'Server error during upload' },
      { status: 500 }
    );
  }
}
