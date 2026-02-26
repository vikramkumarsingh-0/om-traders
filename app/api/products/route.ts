import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: "RO Membrane 75 GPD", category: "Membranes", brand: "Aquaguard", price: 1200, discountPrice: 999, rating: 4.5, stock: 25 },
  { id: 2, name: "Sediment Filter 10 inch", category: "Filters", brand: "Kent", price: 250, discountPrice: 199, rating: 4.2, stock: 50 },
];

export async function GET(request: Request) {
  try {
    console.log('[API:PRODUCTS:GET] Fetching products');
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    console.log('[API:PRODUCTS:GET] Filter category:', category);
    
    let filtered = products;
    if (category && category !== 'All') {
      filtered = products.filter(p => p.category === category);
      console.log('[API:PRODUCTS:GET] Filtered products:', filtered.length);
    }
    
    return NextResponse.json({ success: true, products: filtered });
  } catch (error: any) {
    console.error('[API:PRODUCTS:GET] Error:', error.message, error.stack);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch products',
      details: error.message,
      code: 'FETCH_ERROR'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    console.log('[API:PRODUCTS:POST] Adding product');
    
    const body = await request.json();
    console.log('[API:PRODUCTS:POST] Product data:', body);
    
    return NextResponse.json({ success: true, message: 'Product added' });
  } catch (error: any) {
    console.error('[API:PRODUCTS:POST] Error:', error.message, error.stack);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to add product',
      details: error.message,
      code: 'ADD_ERROR'
    }, { status: 500 });
  }
}
