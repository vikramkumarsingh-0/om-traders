import axios from 'axios';

export async function sendWhatsAppMessage(phone: string, message: string): Promise<boolean> {
  try {
    console.log('[LIB:WHATSAPP:sendWhatsAppMessage] Sending WhatsApp to:', phone);
    
    const apiUrl = process.env.WHATSAPP_API_URL;
    const apiKey = process.env.WHATSAPP_API_KEY;

    if (!apiUrl || !apiKey) {
      console.error('[LIB:WHATSAPP:sendWhatsAppMessage] WhatsApp API not configured');
      return false;
    }

    console.log('[LIB:WHATSAPP:sendWhatsAppMessage] Using WATI API');
    // WATI API
    const response = await axios.post(
      `${apiUrl}/api/v1/sendSessionMessage/${phone}`,
      {
        messageText: message,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('[LIB:WHATSAPP:sendWhatsAppMessage] Response:', response.data);
    return response.data.result === true;
  } catch (error: any) {
    console.error('[LIB:WHATSAPP:sendWhatsAppMessage] Error:', error.message, error.response?.data);
    return false;
  }
}

export async function sendBookingConfirmationWhatsApp(phone: string, bookingId: string, date: string): Promise<boolean> {
  try {
    console.log('[LIB:WHATSAPP:sendBookingConfirmationWhatsApp] Sending booking confirmation to:', phone);
    
    const message = `✅ *Booking Confirmed*\n\n` +
      `Booking ID: ${bookingId}\n` +
      `Date: ${date}\n\n` +
      `Our technician will contact you soon.\n\n` +
      `*OM Traders*\n` +
      `Pure Water. Pure Trust.`;
    
    const result = await sendWhatsAppMessage(phone, message);
    console.log('[LIB:WHATSAPP:sendBookingConfirmationWhatsApp] Confirmation sent:', result);
    return result;
  } catch (error: any) {
    console.error('[LIB:WHATSAPP:sendBookingConfirmationWhatsApp] Error:', error.message);
    return false;
  }
}

export async function sendOrderConfirmationWhatsApp(phone: string, orderId: string, amount: number): Promise<boolean> {
  try {
    console.log('[LIB:WHATSAPP:sendOrderConfirmationWhatsApp] Sending order confirmation to:', phone);
    
    const message = `🛒 *Order Confirmed*\n\n` +
      `Order ID: ${orderId}\n` +
      `Amount: ₹${amount}\n\n` +
      `Your order will be delivered soon.\n\n` +
      `Track: https://om-traders-lake.vercel.app/track\n\n` +
      `*OM Traders*`;
    
    const result = await sendWhatsAppMessage(phone, message);
    console.log('[LIB:WHATSAPP:sendOrderConfirmationWhatsApp] Confirmation sent:', result);
    return result;
  } catch (error: any) {
    console.error('[LIB:WHATSAPP:sendOrderConfirmationWhatsApp] Error:', error.message);
    return false;
  }
}
