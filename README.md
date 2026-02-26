# OM Traders - RO Water Purifier Service Platform

Full-stack business website for RO water purifier service, repair, and spare parts.

## Features

✅ **Customer Portal**
- SEO-optimized homepage
- Product shop with filters
- Service booking system
- AMC plans
- Order tracking

✅ **Admin Dashboard**
- Real-time KPI cards
- Revenue charts (Line, Bar, Pie)
- Order management
- Service request tracking
- Inventory management

✅ **Database**
- 18-table PostgreSQL schema
- Prisma ORM
- Migrations & seeding

✅ **SEO & PWA**
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- PWA manifest
- Meta tags

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma
- **Charts**: Recharts
- **Auth**: JWT + bcrypt
- **UI**: Lucide Icons, React Hot Toast

## Setup

1. **Install dependencies**
```bash
npm install
```

2. **Setup database**
```bash
npx create-db  # Creates free Prisma Postgres DB
npm run db:generate
npm run db:migrate
npm run db:seed
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:3000
```

## Pages

- `/` - Homepage
- `/shop` - Products
- `/services` - Services list
- `/book-service` - Booking form
- `/admin/dashboard` - Admin panel

## Environment Variables

See `.env` file for configuration.

## Database Commands

```bash
npm run db:generate  # Generate Prisma Client
npm run db:migrate   # Run migrations
npm run db:seed      # Seed database
npm run db:studio    # Open Prisma Studio
```

## Deployment

Deploy to Vercel:
```bash
vercel
```

## License

MIT
