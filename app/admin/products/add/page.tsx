"use client";

import { useState } from "react";
import { ArrowLeft, Save, Upload, X } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import ImageUpload from "@/components/ImageUpload";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    description: "",
    price: "",
    discountPrice: "",
    stockQty: "",
    sku: "",
    imageUrl: "",
    specifications: "",
    warranty: "",
    hsn: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          discountPrice: formData.discountPrice ? parseFloat(formData.discountPrice) : null,
          stockQty: parseInt(formData.stockQty),
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Product added successfully!");
        setFormData({
          name: "",
          category: "",
          brand: "",
          description: "",
          price: "",
          discountPrice: "",
          stockQty: "",
          sku: "",
          imageUrl: "",
          specifications: "",
          warranty: "",
          hsn: "",
        });
      } else {
        toast.error(data.error || "Failed to add product");
      }
    } catch (error) {
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4 flex items-center gap-4">
          <Link href="/admin/products" className="text-gray-600 hover:text-primary">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-primary">Add New Product</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold mb-2">Product Image *</label>
            <ImageUpload
              onUploadComplete={(url) => setFormData({ ...formData, imageUrl: url })}
              folder="products"
            />
            {formData.imageUrl && (
              <p className="text-xs text-green-600 mt-2">✓ Image uploaded</p>
            )}
          </div>

          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Product Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="RO Membrane 75 GPD"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">SKU *</label>
              <input
                type="text"
                required
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="MEM-75-001"
              />
            </div>
          </div>

          {/* Category & Brand */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Category *</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Select Category</option>
                <option value="Membranes">Membranes</option>
                <option value="Filters">Filters</option>
                <option value="Pumps">Pumps</option>
                <option value="UV Parts">UV Parts</option>
                <option value="Controllers">Controllers</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Brand *</label>
              <input
                type="text"
                required
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Aquaguard, Kent, Pureit"
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">MRP (₹) *</label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="1200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Discounted Price (₹)</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.discountPrice}
                onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="999"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Stock Quantity *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.stockQty}
                onChange={(e) => setFormData({ ...formData, stockQty: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="25"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2">Product Description *</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Detailed product description..."
            />
          </div>

          {/* Specifications */}
          <div>
            <label className="block text-sm font-semibold mb-2">Specifications</label>
            <textarea
              rows={3}
              value={formData.specifications}
              onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Capacity: 75 GPD&#10;Material: Food Grade&#10;Compatibility: All RO systems"
            />
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Warranty</label>
              <input
                type="text"
                value={formData.warranty}
                onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="6 months"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">HSN Code</label>
              <input
                type="text"
                value={formData.hsn}
                onChange={(e) => setFormData({ ...formData, hsn: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="84212990"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading || !formData.imageUrl}
              className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              {loading ? "Saving..." : "Save Product"}
            </button>
            <Link
              href="/admin/products"
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
