import axios from 'axios';

export async function sendSMS(phone: string, message: string): Promise<boolean> {
  try {
    const apiKey = process.env.SMS_API_KEY;
    
    if (!apiKey) {
      console.error('SMS_API_KEY not configured');
      return false;
    }

    // Fast2SMS API
    const response = await axios.post(
      'https://www.fast2sms.com/dev/bulkV2',
      {
        route: 'v3',
        sender_id: process.env.SMS_SENDER_ID || 'FSTSMS',
        message: message,
        language: 'english',
        flash: 0,
        numbers: phone.replace('+91', ''),
      },
      {
        headers: {
          authorization: apiKey,
        },
      }
    );

    return response.data.return === true;
  } catch (error) {
    console.error('SMS send failed:', error);
    return false;
  }
}

export async function sendOTPSMS(phone: string, otp: string): Promise<boolean> {
  const message = `Your OM Traders OTP is: ${otp}. Valid for 10 minutes. Do not share with anyone.`;
  return sendSMS(phone, message);
}

export async function sendBookingConfirmationSMS(phone: string, bookingId: string): Promise<boolean> {
  const message = `Your service booking ${bookingId} is confirmed. Our technician will contact you soon. - OM Traders`;
  return sendSMS(phone, message);
}
