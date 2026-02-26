"use client";

import { useState } from "react";
import Script from "next/script";
import toast from "react-hot-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayPaymentProps {
  amount: number;
  orderId: string;
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
}

export default function RazorpayPayment({ amount, orderId, onSuccess, onFailure }: RazorpayPaymentProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Create order on backend
      const response = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, orderId }),
      });

      const { razorpayOrderId, key } = await response.json();

      const options = {
        key: key,
        amount: amount * 100, // Convert to paise
        currency: "INR",
        name: "OM Traders",
        description: `Order #${orderId}`,
        order_id: razorpayOrderId,
        handler: function (response: any) {
          toast.success("Payment successful!");
          onSuccess(response);
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#003566",
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            toast.error("Payment cancelled");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", function (response: any) {
        toast.error("Payment failed!");
        onFailure(response.error);
        setLoading(false);
      });

      razorpay.open();
    } catch (error) {
      toast.error("Failed to initiate payment");
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
      >
        {loading ? "Processing..." : `Pay ₹${amount}`}
      </button>
    </>
  );
}
