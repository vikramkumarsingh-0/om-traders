import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    console.log('[API:ADMIN:PRODUCTS:POST] Starting product creation');
    
    const body = await request.json();
    console.log('[API:ADMIN:PRODUCTS:POST] Request body parsed:', { name: body.name, sku: body.sku });
    
    if (!body.name || !body.category || !body.price) {
      console.error('[API:ADMIN:PRODUCTS:POST] Validation failed: Missing required fields');
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: name, category, price',
        code: 'VALIDATION_ERROR'
      }, { status: 400 });
    }
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        category: body.category,
        brand: body.brand,
        description: body.description,
        price: body.price,
        discountPrice: body.discountPrice,
        stockQty: body.stockQty,
        sku: body.sku,
        imageUrl: body.imageUrl,
        isActive: true,
      },
    });

    console.log('[API:ADMIN:PRODUCTS:POST] Product created successfully:', product.id);
    return NextResponse.json({ success: true, product });
  } catch (error: any) {
    console.error('[API:ADMIN:PRODUCTS:POST] Error:', error.message, error.stack);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create product',
      details: error.message,
      code: 'DB_CREATE_ERROR'
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log('[API:ADMIN:PRODUCTS:GET] Fetching all products');
    
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });

    console.log('[API:ADMIN:PRODUCTS:GET] Products fetched:', products.length);
    return NextResponse.json({ success: true, products });
  } catch (error: any) {
    console.error('[API:ADMIN:PRODUCTS:GET] Error:', error.message, error.stack);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch products',
      details: error.message,
      code: 'DB_FETCH_ERROR'
    }, { status: 500 });
  }
}
