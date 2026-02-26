import axios from 'axios';

export async function sendWhatsAppMessage(phone: string, message: string): Promise<boolean> {
  try {
    const apiUrl = process.env.WHATSAPP_API_URL;
    const apiKey = process.env.WHATSAPP_API_KEY;

    if (!apiUrl || !apiKey) {
      console.error('WhatsApp API not configured');
      return false;
    }

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

    return response.data.result === true;
  } catch (error) {
    console.error('WhatsApp send failed:', error);
    return false;
  }
}

export async function sendBookingConfirmationWhatsApp(phone: string, bookingId: string, date: string): Promise<boolean> {
  const message = `✅ *Booking Confirmed*\n\n` +
    `Booking ID: ${bookingId}\n` +
    `Date: ${date}\n\n` +
    `Our technician will contact you soon.\n\n` +
    `*OM Traders*\n` +
    `Pure Water. Pure Trust.`;
  
  return sendWhatsAppMessage(phone, message);
}

export async function sendOrderConfirmationWhatsApp(phone: string, orderId: string, amount: number): Promise<boolean> {
  const message = `🛒 *Order Confirmed*\n\n` +
    `Order ID: ${orderId}\n` +
    `Amount: ₹${amount}\n\n` +
    `Your order will be delivered soon.\n\n` +
    `Track: https://om-traders-lake.vercel.app/track\n\n` +
    `*OM Traders*`;
  
  return sendWhatsAppMessage(phone, message);
}
