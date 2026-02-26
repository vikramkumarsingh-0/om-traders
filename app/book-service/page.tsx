"use client";

import { useState } from "react";
import { CheckCircle, Wrench, Calendar, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function BookServicePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    roBrand: "",
    problem: "",
    address: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold">← OM Traders</Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Book a Service</h1>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map(s => (
            <div key={s} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= s ? 'bg-primary text-white' : 'bg-gray-300'}`}>
                {step > s ? <CheckCircle className="w-6 h-6" /> : s}
              </div>
              <span className="text-xs mt-1">Step {s}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          {/* Step 1: Service Type */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Service Type</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { value: "installation", label: "Installation", icon: Wrench },
                  { value: "repair", label: "Repair", icon: Wrench },
                  { value: "maintenance", label: "Maintenance", icon: Wrench },
                  { value: "amc", label: "AMC", icon: Wrench },
                ].map(service => (
                  <button
                    key={service.value}
                    onClick={() => {
                      setFormData({ ...formData, serviceType: service.value });
                      handleNext();
                    }}
                    className={`p-6 border-2 rounded-lg hover:border-primary transition ${formData.serviceType === service.value ? 'border-primary bg-blue-50' : 'border-gray-200'}`}
                  >
                    <service.icon className="w-12 h-12 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">{service.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: RO Details */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">RO Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">RO Brand</label>
                  <select
                    className="w-full border rounded-lg px-4 py-2"
                    value={formData.roBrand}
                    onChange={(e) => setFormData({ ...formData, roBrand: e.target.value })}
                  >
                    <option value="">Select Brand</option>
                    <option>Aquaguard</option>
                    <option>Kent</option>
                    <option>Pureit</option>
                    <option>Livpure</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-2">Problem Description</label>
                  <textarea
                    className="w-full border rounded-lg px-4 py-2"
                    rows={4}
                    placeholder="Describe the issue..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={handleBack} className="px-6 py-2 border rounded-lg">Back</button>
                <button onClick={handleNext} className="px-6 py-2 bg-primary text-white rounded-lg">Next</button>
              </div>
            </div>
          )}

          {/* Step 3: Address & Date */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Address & Schedule</h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Service Address</label>
                  <textarea
                    className="w-full border rounded-lg px-4 py-2"
                    rows={3}
                    placeholder="Enter full address..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full border rounded-lg px-4 py-2"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Time Slot</label>
                    <select
                      className="w-full border rounded-lg px-4 py-2"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="">Select Time</option>
                      <option>9 AM - 12 PM</option>
                      <option>12 PM - 3 PM</option>
                      <option>3 PM - 6 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={handleBack} className="px-6 py-2 border rounded-lg">Back</button>
                <button onClick={handleNext} className="px-6 py-2 bg-primary text-white rounded-lg">Next</button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={handleBack} className="px-6 py-2 border rounded-lg">Back</button>
                <button onClick={handleNext} className="px-6 py-2 bg-primary text-white rounded-lg">Next</button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div>
              <div className="text-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
                <p className="text-gray-600 mt-2">Your service request has been submitted successfully.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <p><strong>Booking ID:</strong> OMT-SRV-{Math.floor(Math.random() * 10000)}</p>
                <p><strong>Service:</strong> {formData.serviceType}</p>
                <p><strong>Date:</strong> {formData.date} | {formData.time}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                You will receive a confirmation via SMS and WhatsApp shortly.
              </p>
              <div className="flex gap-4 mt-6">
                <Link href="/" className="flex-1 text-center px-6 py-2 border rounded-lg">Go Home</Link>
                <Link href="/track" className="flex-1 text-center px-6 py-2 bg-primary text-white rounded-lg">Track Service</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
