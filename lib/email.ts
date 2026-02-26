import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.sendgrid.net',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'apikey',
    pass: process.env.SENDGRID_API_KEY || process.env.SMTP_PASS,
  },
});

export async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@omtraders.com',
      to,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
}

export async function sendWelcomeEmail(email: string, name: string): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #003566;">Welcome to OM Traders!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for registering with OM Traders. We're excited to serve you!</p>
      <p>Our services include:</p>
      <ul>
        <li>RO Installation</li>
        <li>RO Repair & Maintenance</li>
        <li>Annual Maintenance Contracts (AMC)</li>
        <li>Genuine Spare Parts</li>
      </ul>
      <p>Need help? Contact us at +91 98765 43210</p>
      <p style="color: #666; font-size: 12px;">Pure Water. Pure Trust.</p>
    </div>
  `;
  
  return sendEmail(email, 'Welcome to OM Traders', html);
}

export async function sendOrderInvoiceEmail(email: string, orderId: string, invoiceUrl: string): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #003566;">Order Invoice - ${orderId}</h2>
      <p>Your order has been confirmed!</p>
      <p>Download your invoice: <a href="${invoiceUrl}">Click here</a></p>
      <p>Track your order: <a href="https://om-traders-lake.vercel.app/track">Track Now</a></p>
      <p>Thank you for choosing OM Traders!</p>
    </div>
  `;
  
  return sendEmail(email, `Invoice for Order ${orderId}`, html);
}
