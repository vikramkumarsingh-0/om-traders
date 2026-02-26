import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendOTP(phone: string, otp: string): Promise<boolean> {
  // TODO: Integrate SMS gateway (MSG91/Fast2SMS)
  console.log(`Sending OTP ${otp} to ${phone}`);
  return true;
}

export async function sendWhatsApp(phone: string, message: string): Promise<boolean> {
  // TODO: Integrate WhatsApp API (WATI/Twilio)
  console.log(`Sending WhatsApp to ${phone}: ${message}`);
  return true;
}
