import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
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

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error('Product creation error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create product' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
  }
}
