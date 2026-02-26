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
  { name: "Others", value: 100, color: "#48CAE4" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Admin User</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">Logout</button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <KPICard
            title="Total Revenue"
            value="₹1,24,500"
            subtitle="This Month"
            icon={DollarSign}
            color="bg-green-500"
            trend="+12.5%"
          />
          <KPICard
            title="Total Orders"
            value="156"
            subtitle="42 Pending"
            icon={ShoppingCart}
            color="bg-blue-500"
            trend="+8.2%"
          />
          <KPICard
            title="Service Requests"
            value="89"
            subtitle="23 In-Progress"
            icon={Wrench}
            color="bg-purple-500"
            trend="+15.3%"
          />
          <KPICard
            title="Active AMC"
            value="67"
            subtitle="12 Expiring Soon"
            icon={Calendar}
            color="bg-orange-500"
            trend="+5.1%"
          />
        </div>

        {/* Secondary KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">New Customers Today</p>
                <p className="text-3xl font-bold text-primary">12</p>
              </div>
              <Users className="w-12 h-12 text-blue-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Low Stock Alerts</p>
                <p className="text-3xl font-bold text-red-500">8</p>
              </div>
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">AMC Renewals (7 days)</p>
                <p className="text-3xl font-bold text-orange-500">15</p>
              </div>
              <Calendar className="w-12 h-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue Trend */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Revenue Trend (This Week)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#003566" strokeWidth={2} />
                <Line type="monotone" dataKey="services" stroke="#0096C7" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Order vs Service Revenue */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Order vs Service Revenue</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#003566" />
                <Bar dataKey="services" fill="#FF6B00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Sales by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Products */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Top 5 Selling Products</h3>
            <div className="space-y-3">
              {[
                { name: "RO Membrane 75 GPD", sales: 145, revenue: "₹43,500" },
                { name: "Sediment Filter", sales: 132, revenue: "₹26,400" },
                { name: "Carbon Filter", sales: 98, revenue: "₹19,600" },
                { name: "RO Pump", sales: 67, revenue: "₹33,500" },
                { name: "UV Lamp", sales: 54, revenue: "₹27,000" },
              ].map((product, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-semibold text-sm">{product.name}</p>
                    <p className="text-xs text-gray-600">{product.sales} units sold</p>
                  </div>
                  <p className="font-bold text-primary">{product.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { type: "order", msg: "New order #OMT-1234 received", time: "2 mins ago", color: "green" },
              { type: "service", msg: "Service request assigned to Technician A", time: "15 mins ago", color: "blue" },
              { type: "payment", msg: "Payment of ₹2,500 received", time: "1 hour ago", color: "green" },
              { type: "cancel", msg: "Order #OMT-1230 cancelled", time: "2 hours ago", color: "red" },
              { type: "amc", msg: "AMC contract renewed by Customer X", time: "3 hours ago", color: "orange" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 p-3 border-l-4 border-gray-200 hover:bg-gray-50">
                <div className={`w-2 h-2 rounded-full bg-${activity.color}-500`}></div>
                <div className="flex-1">
                  <p className="text-sm">{activity.msg}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ title, value, subtitle, icon: Icon, color, trend }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-green-600 text-sm font-semibold">{trend}</span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}
