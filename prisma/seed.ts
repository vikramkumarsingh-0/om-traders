import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/auth';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      phone: '9876543210',
      email: 'admin@omtraders.com',
      passwordHash: await hashPassword('admin123'),
      role: 'ADMIN',
      isActive: true,
    },
  });

  // Create product categories
  const categories = await Promise.all([
    prisma.productCategory.create({ data: { name: 'Membranes', slug: 'membranes', description: 'RO Membranes' } }),
    prisma.productCategory.create({ data: { name: 'Filters', slug: 'filters', description: 'Water Filters' } }),
    prisma.productCategory.create({ data: { name: 'Pumps', slug: 'pumps', description: 'RO Pumps' } }),
  ]);

  // Create products
  await prisma.product.createMany({
    data: [
      { name: 'RO Membrane 75 GPD', category: 'Membranes', brand: 'Aquaguard', price: 1200, discountPrice: 999, stockQty: 25, sku: 'MEM-75-001', categoryId: categories[0].id },
      { name: 'Sediment Filter 10"', category: 'Filters', brand: 'Kent', price: 250, discountPrice: 199, stockQty: 50, sku: 'FIL-SED-001', categoryId: categories[1].id },
      { name: 'Carbon Block Filter', category: 'Filters', brand: 'Pureit', price: 300, discountPrice: 249, stockQty: 40, sku: 'FIL-CAR-001', categoryId: categories[1].id },
      { name: 'RO Booster Pump', category: 'Pumps', brand: 'Universal', price: 1800, discountPrice: 1599, stockQty: 15, sku: 'PMP-BST-001', categoryId: categories[2].id },
    ],
  });

  // Create service areas
  await prisma.serviceArea.createMany({
    data: [
      { city: 'Mumbai', pincode: '400001', isServiceable: true },
      { city: 'Mumbai', pincode: '400002', isServiceable: true },
      { city: 'Delhi', pincode: '110001', isServiceable: true },
    ],
  });

  // Create site settings
  await prisma.siteSetting.createMany({
    data: [
      { key: 'business_name', value: 'OM Traders' },
      { key: 'business_phone', value: '+919876543210' },
      { key: 'business_email', value: 'info@omtraders.com' },
      { key: 'gst_number', value: '22AAAAA0000A1Z5' },
      { key: 'gst_percentage', value: '18' },
      { key: 'whatsapp_number', value: '+919876543210' },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
