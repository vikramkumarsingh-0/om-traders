"use client";

import { useState } from "react";
import { Save, Mail, Phone, MapPin, Globe } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    businessName: "OM Traders",
    businessEmail: "info@omtraders.com",
    businessPhone: "+919876543210",
    whatsappNumber: "+919876543210",
    address: "123 Main Street, City, State - 400001",
    gstNumber: "22AAAAA0000A1Z5",
    gstPercentage: "18",
    razorpayKeyId: "",
    smsApiKey: "",
    whatsappApiKey: "",
    sendgridApiKey: "",
    cloudinaryCloudName: "",
  });

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        toast.success("Settings saved successfully!");
      } else {
        toast.error("Failed to save settings");
      }
    } catch (error) {
      toast.error("Failed to save settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-primary">Settings</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Business Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4">Business Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Business Name</label>
              <input
                type="text"
                value={settings.businessName}
                onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email
                </label>
                <input
                  type="email"
                  value={settings.businessEmail}
                  onChange={(e) => setSettings({ ...settings, businessEmail: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone
                </label>
                <input
                  type="tel"
                  value={settings.businessPhone}
                  onChange={(e) => setSettings({ ...settings, businessPhone: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Address
              </label>
              <textarea
                rows={2}
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">GST Number</label>
                <input
                  type="text"
                  value={settings.gstNumber}
                  onChange={(e) => setSettings({ ...settings, gstNumber: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">GST %</label>
                <input
                  type="number"
                  value={settings.gstPercentage}
                  onChange={(e) => setSettings({ ...settings, gstPercentage: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* API Keys */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4">API Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Razorpay Key ID</label>
              <input
                type="text"
                value={settings.razorpayKeyId}
                onChange={(e) => setSettings({ ...settings, razorpayKeyId: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="rzp_test_xxxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">SMS API Key (Fast2SMS)</label>
              <input
                type="text"
                value={settings.smsApiKey}
                onChange={(e) => setSettings({ ...settings, smsApiKey: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">WhatsApp API Key (WATI)</label>
              <input
                type="text"
                value={settings.whatsappApiKey}
                onChange={(e) => setSettings({ ...settings, whatsappApiKey: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">SendGrid API Key</label>
              <input
                type="text"
                value={settings.sendgridApiKey}
                onChange={(e) => setSettings({ ...settings, sendgridApiKey: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Cloudinary Cloud Name</label>
              <input
                type="text"
                value={settings.cloudinaryCloudName}
                onChange={(e) => setSettings({ ...settings, cloudinaryCloudName: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Save className="w-5 h-5" />
          {loading ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </div>
  );
}
