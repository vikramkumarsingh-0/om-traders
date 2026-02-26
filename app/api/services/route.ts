import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('[API:SERVICES:POST] Starting service booking');
    
    const body = await request.json();
    const { serviceType, roBrand, problem, address, date, time, name, phone } = body;
    
    console.log('[API:SERVICES:POST] Booking data:', { serviceType, name, phone, date });
    
    if (!serviceType || !name || !phone || !date) {
      console.error('[API:SERVICES:POST] Validation failed: Missing required fields');
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: serviceType, name, phone, date',
        code: 'VALIDATION_ERROR'
      }, { status: 400 });
    }
    
    const bookingId = `OMT-SRV-${Math.floor(Math.random() * 10000)}`;
    console.log('[API:SERVICES:POST] Generated booking ID:', bookingId);
    
    // TODO: Save to database
    // await prisma.serviceRequest.create({ data: {...} })
    
    // TODO: Send SMS/WhatsApp notification
    
    console.log('[API:SERVICES:POST] Service booked successfully');
    return NextResponse.json({ 
      success: true, 
      bookingId,
      message: 'Service booked successfully' 
    });
  } catch (error: any) {
    console.error('[API:SERVICES:POST] Error:', error.message, error.stack);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to book service',
      details: error.message,
      code: 'BOOKING_ERROR'
    }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    console.log('[API:SERVICES:GET] Fetching services');
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    console.log('[API:SERVICES:GET] Filter status:', status);
    
    // TODO: Fetch from database
    const services = [
      { id: 1, bookingId: 'OMT-SRV-1234', serviceType: 'repair', status: 'pending', date: '2025-01-20' },
    ];
    
    console.log('[API:SERVICES:GET] Services fetched:', services.length);
    return NextResponse.json({ success: true, services });
  } catch (error: any) {
    console.error('[API:SERVICES:GET] Error:', error.message, error.stack);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch services',
      details: error.message,
      code: 'FETCH_ERROR'
    }, { status: 500 });
  }
}
