"use client";

import { BarChart3, DollarSign, Package, ShoppingCart, Users, Wrench, AlertTriangle, Calendar } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const revenueData = [
  { name: "Mon", orders: 4000, services: 2400 },
  { name: "Tue", orders: 3000, services: 1398 },
  { name: "Wed", orders: 2000, services: 9800 },
  { name: "Thu", orders: 2780, services: 3908 },
  { name: "Fri", orders: 1890, services: 4800 },
  { name: "Sat", orders: 2390, services: 3800 },
  { name: "Sun", orders: 3490, services: 4300 },
];

const categoryData = [
  { name: "Filters", value: 400, color: "#003566" },
  { name: "Membranes", value: 300, color: "#0096C7" },
  { name: "Pumps", value: 200, color: "#FF6B00" },
  { name: "Others", value: 100, color: "#10b981" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-soft border-b border-primary-100">
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-900 to-secondary-600 bg-clip-text text-transparent">Dashboard</h1>
            <p className="text-primary-600 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-success-500 to-success-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              🟢 System Online
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Revenue"
            value="₹1,24,500"
            subtitle="This Month"
            icon={DollarSign}
            gradient="from-success-500 to-success-600"
            trend="+12.5%"
            trendColor="text-success-600"
          />
          <KPICard
            title="Total Orders"
            value="156"
            subtitle="42 Pending"
            icon={ShoppingCart}
            gradient="from-primary-500 to-primary-600"
            trend="+8.2%"
            trendColor="text-primary-600"
          />
          <KPICard
            title="Service Requests"
            value="89"
            subtitle="23 In-Progress"
            icon={Wrench}
            gradient="from-secondary-500 to-secondary-600"
            trend="+15.3%"
            trendColor="text-secondary-600"
          />
          <KPICard
            title="Active AMC"
            value="67"
            subtitle="12 Expiring Soon"
            icon={Calendar}
            gradient="from-accent-500 to-accent-600"
            trend="+5.1%"
            trendColor="text-accent-600"
          />
        </div>

        {/* Secondary KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-primary-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-600 text-sm font-medium">New Customers Today</p>
                <p className="text-3xl font-bold text-primary-900 mt-1">12</p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-3 rounded-xl">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-error-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-error-600 text-sm font-medium">Low Stock Alerts</p>
                <p className="text-3xl font-bold text-error-700 mt-1">8</p>
              </div>
              <div className="bg-gradient-to-br from-error-100 to-error-200 p-3 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-error-600" />
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-warning-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-warning-600 text-sm font-medium">AMC Renewals (7 days)</p>
                <p className="text-3xl font-bold text-warning-700 mt-1">15</p>
              </div>
              <div className="bg-gradient-to-br from-warning-100 to-warning-200 p-3 rounded-xl">
                <Calendar className="w-8 h-8 text-warning-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Revenue Trend (This Week)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }} />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#003566" strokeWidth={3} dot={{ fill: '#003566', strokeWidth: 2, r: 6 }} />
                <Line type="monotone" dataKey="services" stroke="#0096C7" strokeWidth={3} dot={{ fill: '#0096C7', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Order vs Service Revenue */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Order vs Service Revenue</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }} />
                <Legend />
                <Bar dataKey="orders" fill="#003566" radius={[4, 4, 0, 0]} />
                <Bar dataKey="services" fill="#FF6B00" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Pie Chart */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Sales by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.name} ${((entry.percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Products */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Top 5 Selling Products</h3>
            <div className="space-y-4">
              {[
                { name: "RO Membrane 75 GPD", sales: 145, revenue: "₹43,500" },
                { name: "Sediment Filter", sales: 132, revenue: "₹26,400" },
                { name: "Carbon Filter", sales: 98, revenue: "₹19,600" },
                { name: "RO Pump", sales: 67, revenue: "₹33,500" },
                { name: "UV Lamp", sales: 54, revenue: "₹27,000" },
              ].map((product, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100">
                  <div>
                    <p className="font-semibold text-primary-900">{product.name}</p>
                    <p className="text-sm text-primary-600">{product.sales} units sold</p>
                  </div>
                  <p className="font-bold text-success-600 text-lg">{product.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-primary-100">
          <h3 className="text-xl font-bold text-primary-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { type: "order", msg: "New order #OMT-1234 received", time: "2 mins ago", color: "success" },
              { type: "service", msg: "Service request assigned to Technician A", time: "15 mins ago", color: "primary" },
              { type: "payment", msg: "Payment of ₹2,500 received", time: "1 hour ago", color: "success" },
              { type: "cancel", msg: "Order #OMT-1230 cancelled", time: "2 hours ago", color: "error" },
              { type: "amc", msg: "AMC contract renewed by Customer X", time: "3 hours ago", color: "accent" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors border-l-4 border-primary-200">
                <div className={`w-3 h-3 rounded-full bg-${activity.color}-500`}></div>
                <div className="flex-1">
                  <p className="text-primary-900 font-medium">{activity.msg}</p>
                  <p className="text-sm text-primary-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ title, value, subtitle, icon: Icon, gradient, trend, trendColor }: any) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-primary-100 hover:shadow-soft transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className={`bg-gradient-to-br ${gradient} p-3 rounded-xl shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`${trendColor} text-sm font-bold bg-primary-50 px-3 py-1 rounded-full`}>{trend}</span>
      </div>
      <h3 className="text-primary-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-primary-900 mb-1">{value}</p>
      <p className="text-sm text-primary-500">{subtitle}</p>
    </div>
  );
}
