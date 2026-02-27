import { Droplet, Phone, ShoppingCart, Wrench, Shield, Clock, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { LocalBusinessSchema } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplet className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">OM Traders</h1>
              <p className="text-xs text-secondary-light">Pure Water. Pure Trust.</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/services" className="hover:text-secondary-light">Services</Link>
            <Link href="/shop" className="hover:text-secondary-light">Shop</Link>
            <Link href="/amc" className="hover:text-secondary-light">AMC Plans</Link>
            <Link href="/contact" className="hover:text-secondary-light">Contact</Link>
          </nav>
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Get Your RO Repaired Today</h2>
          <p className="text-xl mb-8">Professional service for all RO brands. Same-day service available.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/book-service" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold">
              Book a Service
            </Link>
            <Link href="/shop" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Shop Parts
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-primary-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-success-600 mb-2" />
            <p className="font-semibold">500+ Customers Served</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-accent mb-2" />
            <p className="font-semibold">Same-Day Service</p>
          </div>
          <div className="flex flex-col items-center">
            <Wrench className="w-12 h-12 text-primary mb-2" />
            <p className="font-semibold">All Brands Supported</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-secondary mb-2" />
            <p className="font-semibold">Genuine Parts</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Installation", icon: Wrench, desc: "Professional RO installation" },
              { title: "Repair", icon: Wrench, desc: "Quick & reliable repairs" },
              { title: "AMC Plans", icon: Shield, desc: "Annual maintenance contracts" },
              { title: "Spare Parts", icon: ShoppingCart, desc: "Genuine RO parts" },
            ].map((service, i) => (
              <div key={i} className="bg-white border-2 border-primary-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition text-center">
                <service.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/book-service" className="text-accent font-semibold hover:underline">
                  Book Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Book Online</h3>
              <p className="text-gray-600">Choose your service and preferred time slot</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Technician Visits</h3>
              <p className="text-gray-600">Expert technician arrives at your doorstep</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Job Done</h3>
              <p className="text-gray-600">Get your RO fixed and running smoothly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need RO Service Right Now?</h2>
          <p className="text-xl mb-8">Call us or book online for same-day service</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+919876543210" className="bg-accent hover:bg-accent/90 px-8 py-3 rounded-full font-semibold flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <Link href="/book-service" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Book Service
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Droplet className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">OM Traders</h3>
                  <p className="text-sm text-gray-400">Pure Water. Pure Trust.</p>
                </div>
              </div>
              <p className="text-gray-400">Professional RO water purifier service, repair & spare parts.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
                <li><Link href="/amc" className="text-gray-400 hover:text-white">AMC Plans</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 98765 43210</li>
                <li>📧 info@omtraders.com</li>
                <li>📍 123 Main Street, City, State</li>
                <li>🕒 Mon-Sat: 9 AM - 7 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 OM Traders. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-success-500 hover:bg-success-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
    </>
  );
}
