# 🚀 Vercel Deployment Guide - OM Traders

## Prerequisites
- GitHub account
- Vercel account (free tier works)
- Database URL from Prisma Postgres

## Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - OM Traders"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/om-traders.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow prompts:
   - Link to existing project? **N**
   - Project name: **om-traders**
   - Directory: **./om-traders**
   - Override settings? **N**

5. Deploy to production:
```bash
vercel --prod
```

### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - Framework Preset: **Next.js**
   - Build Command: `prisma generate && next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## Step 3: Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

```
DATABASE_URL=postgresql://your-connection-string
NEXTAUTH_SECRET=your-super-secret-key-change-in-production
JWT_SECRET=your-jwt-secret-key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
NEXT_PUBLIC_BUSINESS_NAME=OM Traders
NEXT_PUBLIC_BUSINESS_EMAIL=info@omtraders.com
NEXT_PUBLIC_BUSINESS_PHONE=+919876543210
NEXT_PUBLIC_GST_NUMBER=22AAAAA0000A1Z5
NEXT_PUBLIC_GST_PERCENTAGE=18
```

## Step 4: Run Database Migrations

After first deployment, run migrations:

```bash
# Using Vercel CLI
vercel env pull .env.production
npx prisma migrate deploy
npx tsx prisma/seed.ts
```

Or use Vercel's built-in Postgres:
```bash
vercel postgres create
```

## Step 5: Custom Domain (Optional)

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain: `omtraders.com`
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_APP_URL` environment variable

## Step 6: Verify Deployment

Visit your deployed site:
- Homepage: `https://your-domain.vercel.app`
- Admin: `https://your-domain.vercel.app/admin/dashboard`
- Shop: `https://your-domain.vercel.app/shop`

## Automatic Deployments

Every push to `main` branch will trigger automatic deployment.

## Troubleshooting

### Build fails with Prisma error
- Ensure `postinstall` script runs: `"postinstall": "prisma generate"`
- Check DATABASE_URL is set in environment variables

### Database connection fails
- Verify DATABASE_URL format
- Ensure database is accessible from Vercel's IP ranges
- Use connection pooling for production

### Environment variables not working
- Redeploy after adding new variables
- Check variable names match exactly

## Production Checklist

- [ ] Database migrated and seeded
- [ ] All environment variables set
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Admin credentials changed
- [ ] Analytics configured (GA4)
- [ ] Error monitoring setup (Sentry)
- [ ] Backup strategy in place

## Support

For issues, check:
- Vercel Logs: Dashboard → Deployments → View Logs
- Build Logs: Check for errors during build
- Runtime Logs: Check for runtime errors

---

**Your OM Traders website is now live! 🎉**
