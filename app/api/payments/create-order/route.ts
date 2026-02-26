import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { amount, orderId } = await request.json();

    // Razorpay temporarily disabled
    return NextResponse.json(
      { success: false, error: 'Payment gateway temporarily unavailable' },
      { status: 503 }
    );

    // Check if Razorpay keys are configured
    // if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    //   return NextResponse.json(
    //     { success: false, error: 'Payment gateway not configured' },
    //     { status: 503 }
    //   );
    // }

    // const Razorpay = (await import('razorpay')).default;
    // const razorpay = new Razorpay({
    //   key_id: process.env.RAZORPAY_KEY_ID,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET,
    // });

    // const options = {
    //   amount: amount * 100,
    //   currency: 'INR',
    //   receipt: orderId,
    //   payment_capture: 1,
    // };

    // const order = await razorpay.orders.create(options);

    // return NextResponse.json({
    //   success: true,
    //   razorpayOrderId: order.id,
    //   key: process.env.RAZORPAY_KEY_ID,
    // });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create order' }, { status: 500 });
  }
}
