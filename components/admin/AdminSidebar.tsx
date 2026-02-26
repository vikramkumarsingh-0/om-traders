"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Wrench, Users, Settings, LogOut } from "lucide-react";

const menuItems = [
  { href: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/products", icon: Package, label: "Products" },
  { href: "/admin/orders", icon: ShoppingCart, label: "Orders" },
  { href: "/admin/services", icon: Wrench, label: "Services" },
  { href: "/admin/customers", icon: Users, label: "Customers" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gradient-to-b from-primary-900 to-primary-950 text-white min-h-screen fixed left-0 top-0 shadow-xl">
      <div className="p-6 border-b border-primary-800">
        <h2 className="text-xl font-bold text-white">OM Traders</h2>
        <p className="text-primary-300 text-sm mt-1">Admin Panel</p>
      </div>
      <nav className="px-4 py-6">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                isActive
                  ? "bg-accent-500 text-white shadow-lg transform scale-105"
                  : "text-primary-200 hover:bg-primary-800 hover:text-white hover:transform hover:scale-105"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="absolute bottom-6 left-4 right-4">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary-200 hover:bg-red-500 hover:text-white transition-all duration-200 w-full">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
