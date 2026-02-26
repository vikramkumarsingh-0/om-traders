import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function hashPassword(password: string): Promise<string> {
  try {
    console.log('[LIB:AUTH:hashPassword] Hashing password');
    const hash = await bcrypt.hash(password, 10);
    console.log('[LIB:AUTH:hashPassword] Password hashed successfully');
    return hash;
  } catch (error: any) {
    console.error('[LIB:AUTH:hashPassword] Error:', error.message);
    throw new Error('Failed to hash password: ' + error.message);
  }
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    console.log('[LIB:AUTH:verifyPassword] Verifying password');
    const isValid = await bcrypt.compare(password, hash);
    console.log('[LIB:AUTH:verifyPassword] Verification result:', isValid);
    return isValid;
  } catch (error: any) {
    console.error('[LIB:AUTH:verifyPassword] Error:', error.message);
    throw new Error('Failed to verify password: ' + error.message);
  }
}

export function generateToken(payload: any): string {
  try {
    console.log('[LIB:AUTH:generateToken] Generating JWT token');
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
    console.log('[LIB:AUTH:generateToken] Token generated successfully');
    return token;
  } catch (error: any) {
    console.error('[LIB:AUTH:generateToken] Error:', error.message);
    throw new Error('Failed to generate token: ' + error.message);
  }
}

export function verifyToken(token: string): any {
  try {
    console.log('[LIB:AUTH:verifyToken] Verifying JWT token');
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('[LIB:AUTH:verifyToken] Token verified successfully');
    return decoded;
  } catch (error: any) {
    console.error('[LIB:AUTH:verifyToken] Error:', error.message);
    return null;
  }
}

export function generateOTP(): string {
  try {
    console.log('[LIB:AUTH:generateOTP] Generating OTP');
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('[LIB:AUTH:generateOTP] OTP generated:', otp);
    return otp;
  } catch (error: any) {
    console.error('[LIB:AUTH:generateOTP] Error:', error.message);
    throw new Error('Failed to generate OTP: ' + error.message);
  }
}

export async function sendOTP(phone: string, otp: string): Promise<boolean> {
  try {
    console.log('[LIB:AUTH:sendOTP] Sending OTP to:', phone);
    // TODO: Integrate SMS gateway (MSG91/Fast2SMS)
    console.log(`[LIB:AUTH:sendOTP] OTP ${otp} sent to ${phone}`);
    return true;
  } catch (error: any) {
    console.error('[LIB:AUTH:sendOTP] Error:', error.message);
    return false;
  }
}

export async function sendWhatsApp(phone: string, message: string): Promise<boolean> {
  try {
    console.log('[LIB:AUTH:sendWhatsApp] Sending WhatsApp to:', phone);
    // TODO: Integrate WhatsApp API (WATI/Twilio)
    console.log(`[LIB:AUTH:sendWhatsApp] Message sent to ${phone}`);
    return true;
  } catch (error: any) {
    console.error('[LIB:AUTH:sendWhatsApp] Error:', error.message);
    return false;
  }
}
