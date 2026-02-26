#!/bin/bash
# Production deployment script

echo "🚀 Starting production deployment..."

# Generate Prisma Client
echo "📦 Generating Prisma Client..."
npx prisma generate

# Run database migrations
echo "🗄️ Running database migrations..."
npx prisma migrate deploy

# Build Next.js app
echo "🔨 Building Next.js application..."
npm run build

echo "✅ Deployment preparation complete!"
