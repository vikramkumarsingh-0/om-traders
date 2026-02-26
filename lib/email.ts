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
    console.log('[LIB:EMAIL:sendEmail] Sending email to:', to);
    console.log('[LIB:EMAIL:sendEmail] Subject:', subject);
    
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@omtraders.com',
      to,
      subject,
      html,
    });
    
    console.log('[LIB:EMAIL:sendEmail] Email sent successfully');
    return true;
  } catch (error: any) {
    console.error('[LIB:EMAIL:sendEmail] Error:', error.message, error.stack);
    return false;
  }
}

export async function sendWelcomeEmail(email: string, name: string): Promise<boolean> {
  try {
    console.log('[LIB:EMAIL:sendWelcomeEmail] Sending welcome email to:', email);
    
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
    
    const result = await sendEmail(email, 'Welcome to OM Traders', html);
    console.log('[LIB:EMAIL:sendWelcomeEmail] Welcome email sent:', result);
    return result;
  } catch (error: any) {
    console.error('[LIB:EMAIL:sendWelcomeEmail] Error:', error.message);
    return false;
  }
}

export async function sendOrderInvoiceEmail(email: string, orderId: string, invoiceUrl: string): Promise<boolean> {
  try {
    console.log('[LIB:EMAIL:sendOrderInvoiceEmail] Sending invoice email to:', email);
    
    const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #003566;">Order Invoice - ${orderId}</h2>
      <p>Your order has been confirmed!</p>
      <p>Download your invoice: <a href="${invoiceUrl}">Click here</a></p>
      <p>Track your order: <a href="https://om-traders-lake.vercel.app/track">Track Now</a></p>
      <p>Thank you for choosing OM Traders!</p>
    </div>
  `;
    
    const result = await sendEmail(email, `Invoice for Order ${orderId}`, html);
    console.log('[LIB:EMAIL:sendOrderInvoiceEmail] Invoice email sent:', result);
    return result;
  } catch (error: any) {
    console.error('[LIB:EMAIL:sendOrderInvoiceEmail] Error:', error.message);
    return false;
  }
}
