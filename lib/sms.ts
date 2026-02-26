import axios from 'axios';

export async function sendSMS(phone: string, message: string): Promise<boolean> {
  try {
    console.log('[LIB:SMS:sendSMS] Sending SMS to:', phone);
    
    const apiKey = process.env.SMS_API_KEY;
    
    if (!apiKey) {
      console.error('[LIB:SMS:sendSMS] SMS_API_KEY not configured');
      return false;
    }

    console.log('[LIB:SMS:sendSMS] Using Fast2SMS API');
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

    console.log('[LIB:SMS:sendSMS] Response:', response.data);
    return response.data.return === true;
  } catch (error: any) {
    console.error('[LIB:SMS:sendSMS] Error:', error.message, error.response?.data);
    return false;
  }
}

export async function sendOTPSMS(phone: string, otp: string): Promise<boolean> {
  try {
    console.log('[LIB:SMS:sendOTPSMS] Sending OTP SMS to:', phone);
    const message = `Your OM Traders OTP is: ${otp}. Valid for 10 minutes. Do not share with anyone.`;
    const result = await sendSMS(phone, message);
    console.log('[LIB:SMS:sendOTPSMS] OTP SMS sent:', result);
    return result;
  } catch (error: any) {
    console.error('[LIB:SMS:sendOTPSMS] Error:', error.message);
    return false;
  }
}

export async function sendBookingConfirmationSMS(phone: string, bookingId: string): Promise<boolean> {
  try {
    console.log('[LIB:SMS:sendBookingConfirmationSMS] Sending booking confirmation to:', phone);
    const message = `Your service booking ${bookingId} is confirmed. Our technician will contact you soon. - OM Traders`;
    const result = await sendSMS(phone, message);
    console.log('[LIB:SMS:sendBookingConfirmationSMS] Confirmation SMS sent:', result);
    return result;
  } catch (error: any) {
    console.error('[LIB:SMS:sendBookingConfirmationSMS] Error:', error.message);
    return false;
  }
}
