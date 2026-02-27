"use client";

import { useState } from "react";
import { Search, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const products = [
  { id: 1, name: "RO Membrane 75 GPD", category: "Membranes", brand: "Aquaguard", price: 1200, discountPrice: 999, rating: 4.5, stock: 25, image: "/placeholder.jpg" },
  { id: 2, name: "Sediment Filter 10 inch", category: "Filters", brand: "Kent", price: 250, discountPrice: 199, rating: 4.2, stock: 50, image: "/placeholder.jpg" },
  { id: 3, name: "Carbon Block Filter", category: "Filters", brand: "Pureit", price: 300, discountPrice: 249, rating: 4.3, stock: 40, image: "/placeholder.jpg" },
  { id: 4, name: "RO Booster Pump", category: "Pumps", brand: "Universal", price: 1800, discountPrice: 1599, rating: 4.6, stock: 15, image: "/placeholder.jpg" },
  { id: 5, name: "UV Lamp 11W", category: "UV Parts", brand: "Aquaguard", price: 600, discountPrice: 499, rating: 4.4, stock: 30, image: "/placeholder.jpg" },
  { id: 6, name: "TDS Controller", category: "Controllers", brand: "Kent", price: 450, discountPrice: 399, rating: 4.1, stock: 20, image: "/placeholder.jpg" },
];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(p => 
    (selectedCategory === "All" || p.category === selectedCategory) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold">← OM Traders</Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Shop RO Parts</h1>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-primary-50 p-6 rounded-lg shadow border border-primary-200">
              <h3 className="font-bold text-lg text-primary mb-4">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-primary-200 rounded-lg focus:border-primary focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Category</label>
                <div className="space-y-2">
                  {["All", "Membranes", "Filters", "Pumps", "UV Parts", "Controllers"].map(cat => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Price Range</label>
                <input type="range" min="0" max="2000" className="w-full" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹0</span>
                  <span>₹2000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length} products found</p>
              <select className="border border-primary-200 rounded-lg px-4 py-2 focus:border-primary focus:outline-none">
                <option>Sort by: Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200">
                  <div className="h-48 bg-primary-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">Product Image</span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary-600 mb-1 font-semibold">{product.brand}</p>
                    <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-700">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-primary">₹{product.discountPrice}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.price}</span>
                    </div>
                    <p className="text-xs text-success-600 mb-3 font-semibold">In Stock: {product.stock} units</p>
                    <button className="w-full bg-accent hover:bg-accent/90 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-semibold">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
