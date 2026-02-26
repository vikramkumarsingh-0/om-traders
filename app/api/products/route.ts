import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: "RO Membrane 75 GPD", category: "Membranes", brand: "Aquaguard", price: 1200, discountPrice: 999, rating: 4.5, stock: 25 },
  { id: 2, name: "Sediment Filter 10 inch", category: "Filters", brand: "Kent", price: 250, discountPrice: 199, rating: 4.2, stock: 50 },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  let filtered = products;
  if (category && category !== 'All') {
    filtered = products.filter(p => p.category === category);
  }
  
  return NextResponse.json({ success: true, products: filtered });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, message: 'Product added' });
}
