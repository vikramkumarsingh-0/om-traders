import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    console.log('[API:UPLOAD:POST] Starting file upload');
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'om-traders';

    if (!file) {
      console.error('[API:UPLOAD:POST] No file provided');
      return NextResponse.json({ 
        success: false, 
        error: 'No file provided',
        code: 'NO_FILE'
      }, { status: 400 });
    }

    console.log('[API:UPLOAD:POST] File details:', { name: file.name, size: file.size, type: file.type });

    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY) {
      console.error('[API:UPLOAD:POST] Cloudinary not configured');
      return NextResponse.json({ 
        success: false, 
        error: 'Upload service not configured',
        code: 'CONFIG_ERROR'
      }, { status: 503 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    console.log('[API:UPLOAD:POST] File converted to buffer, size:', buffer.length);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: `om-traders/${folder}`,
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) {
            console.error('[API:UPLOAD:POST] Cloudinary error:', error);
            reject(error);
          } else {
            console.log('[API:UPLOAD:POST] Upload successful:', result?.public_id);
            resolve(result);
          }
        }
      ).end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: (result as any).secure_url,
      publicId: (result as any).public_id,
    });
  } catch (error: any) {
    console.error('[API:UPLOAD:POST] Error:', error.message, error.stack);
    return NextResponse.json({ 
      success: false, 
      error: 'Upload failed',
      details: error.message,
      code: 'UPLOAD_ERROR'
    }, { status: 500 });
  }
}
