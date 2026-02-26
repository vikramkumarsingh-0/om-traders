# 🔑 API Keys Setup Guide - OM Traders

## 1. Razorpay Payment Gateway

### Sign Up:
1. Go to https://razorpay.com/
2. Click "Sign Up" → Business Account
3. Complete KYC verification
4. Go to Settings → API Keys
5. Generate Test/Live Keys

### Add to `.env`:
```
RAZORPAY_KEY_ID="rzp_test_xxxxxxxxxxxxx"
RAZORPAY_KEY_SECRET="your_secret_key_here"
```

### Test Cards:
- Card: 4111 1111 1111 1111
- CVV: Any 3 digits
- Expiry: Any future date

---

## 2. SMS Gateway (Fast2SMS)

### Sign Up:
1. Go to https://www.fast2sms.com/
2. Sign up with mobile number
3. Go to Dashboard → Dev API
4. Copy API Key

### Add to `.env`:
```
SMS_API_KEY="your_fast2sms_api_key"
SMS_SENDER_ID="FSTSMS"
```

### Alternative: MSG91
1. Go to https://msg91.com/
2. Sign up and verify
3. Get API key from dashboard

---

## 3. WhatsApp Business API (WATI)

### Sign Up:
1. Go to https://www.wati.io/
2. Start free trial
3. Connect WhatsApp Business number
4. Go to Settings → API
5. Copy API endpoint and key

### Add to `.env`:
```
WHATSAPP_API_URL="https://live-server-xxxxx.wati.io"
WHATSAPP_API_KEY="your_wati_api_key"
NEXT_PUBLIC_WHATSAPP_NUMBER="+919876543210"
```

### Alternative: Twilio
1. Go to https://www.twilio.com/
2. Sign up for WhatsApp Business API
3. Get Account SID and Auth Token

---

## 4. Email Service (SendGrid)

### Sign Up:
1. Go to https://sendgrid.com/
2. Create free account (100 emails/day)
3. Go to Settings → API Keys
4. Create API Key with "Full Access"

### Add to `.env`:
```
SENDGRID_API_KEY="SG.xxxxxxxxxxxxxxxxxxxxxxxx"
SMTP_FROM="noreply@omtraders.com"
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASS="your_sendgrid_api_key"
```

### Alternative: Gmail SMTP
```
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

---

## 5. Image Storage (Cloudinary)

### Sign Up:
1. Go to https://cloudinary.com/
2. Sign up for free account
3. Go to Dashboard
4. Copy Cloud Name, API Key, API Secret

### Add to `.env`:
```
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="123456789012345"
CLOUDINARY_API_SECRET="your_secret_here"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="ml_default"
```

---

## 6. Google Analytics

### Setup:
1. Go to https://analytics.google.com/
2. Create account and property
3. Get Measurement ID (G-XXXXXXXXXX)

### Add to `.env`:
```
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## 7. Google OAuth (Optional)

### Setup:
1. Go to https://console.cloud.google.com/
2. Create new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect: `https://your-domain.com/api/auth/callback/google`

### Add to `.env`:
```
GOOGLE_CLIENT_ID="xxxxx.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your_secret_here"
```

---

## 8. Update Vercel Environment Variables

After getting all keys, add them to Vercel:

```bash
vercel env add RAZORPAY_KEY_ID production
vercel env add RAZORPAY_KEY_SECRET production
vercel env add SMS_API_KEY production
vercel env add WHATSAPP_API_KEY production
vercel env add SENDGRID_API_KEY production
vercel env add CLOUDINARY_CLOUD_NAME production
vercel env add CLOUDINARY_API_KEY production
vercel env add CLOUDINARY_API_SECRET production
vercel env add NEXT_PUBLIC_GA_ID production
```

Then redeploy:
```bash
vercel --prod
```

---

## Testing Checklist

- [ ] Test payment with Razorpay test card
- [ ] Send test SMS
- [ ] Send test WhatsApp message
- [ ] Send test email
- [ ] Upload test image to Cloudinary
- [ ] Verify Google Analytics tracking
- [ ] Test OTP login flow

---

## Security Notes

⚠️ **NEVER commit API keys to Git**
⚠️ **Use test keys for development**
⚠️ **Rotate keys if exposed**
⚠️ **Enable IP whitelisting where possible**
⚠️ **Monitor API usage regularly**
