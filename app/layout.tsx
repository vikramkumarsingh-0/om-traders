import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OM Traders - RO Water Purifier Service, Repair & Parts | Pure Water. Pure Trust.",
  description: "Professional RO water purifier service, repair, AMC, and genuine spare parts in your city. Same-day service, all brands supported. Book now!",
  keywords: "RO repair, water purifier service, RO AMC, RO parts, RO installation, water filter repair",
  openGraph: {
    title: "OM Traders - RO Water Purifier Service & Repair",
    description: "Professional RO service, repair & genuine parts. Same-day service available.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#003566" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
