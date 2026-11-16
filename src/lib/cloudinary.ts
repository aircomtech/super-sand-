import fs from 'fs';
import path from 'path';

export interface UploadResult {
  success: boolean;
  publicId: string;
  url: string;
  format: string;
  width?: number;
  height?: number;
  error?: string;
}

export async function uploadMediaAsset(
  fileBuffer: Buffer,
  filename: string,
  folder = 'super-sand'
): Promise<UploadResult> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  // If Cloudinary credentials exist, upload to Cloudinary API
  if (cloudName && apiKey && apiSecret) {
    try {
      const timestamp = Math.round(new Date().getTime() / 1000);
      const crypto = await import('crypto');
      const signaturePayload = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
      const signature = crypto.createHash('sha1').update(signaturePayload).digest('hex');

      const formData = new FormData();
      const blob = new Blob([new Uint8Array(fileBuffer)]);
      formData.append('file', blob, filename);
      formData.append('api_key', apiKey);
      formData.append('timestamp', String(timestamp));
      formData.append('signature', signature);
      formData.append('folder', folder);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      });

      const json = await res.json();
      if (res.ok && json.secure_url) {
        return {
          success: true,
          publicId: json.public_id,
          url: json.secure_url,
          format: json.format,
          width: json.width,
          height: json.height
        };
      }
    } catch (err: any) {
      console.warn('Cloudinary upload error, falling back to local storage:', err);
    }
  }

  // Seamless fallback to local public/uploads directory
  try {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const ext = path.extname(filename) || '.png';
    const cleanBase = path.basename(filename, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueName = `${cleanBase}_${Date.now()}${ext}`;
    const destinationPath = path.join(uploadDir, uniqueName);

    fs.writeFileSync(destinationPath, fileBuffer);

    const publicUrl = `/uploads/${uniqueName}`;
    const publicId = `local_${cleanBase}_${Date.now()}`;

    return {
      success: true,
      publicId,
      url: publicUrl,
      format: ext.replace('.', ''),
      width: 1200,
      height: 800
    };
  } catch (err: any) {
    console.error('Local upload failed:', err);
    return {
      success: false,
      publicId: '',
      url: '',
      format: '',
      error: err.message || 'Failed to save uploaded file'
    };
  }
}
