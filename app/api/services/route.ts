import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { serviceType, roBrand, problem, address, date, time, name, phone } = body;
  
  const bookingId = `OMT-SRV-${Math.floor(Math.random() * 10000)}`;
  
  // TODO: Save to database
  // await prisma.serviceRequest.create({ data: {...} })
  
  // TODO: Send SMS/WhatsApp notification
  
  return NextResponse.json({ 
    success: true, 
    bookingId,
    message: 'Service booked successfully' 
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  
  // TODO: Fetch from database
  const services = [
    { id: 1, bookingId: 'OMT-SRV-1234', serviceType: 'repair', status: 'pending', date: '2025-01-20' },
  ];
  
  return NextResponse.json({ success: true, services });
}
