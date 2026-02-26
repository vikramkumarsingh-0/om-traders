import { Wrench, Settings, Shield, Droplet, Zap, Filter } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "RO Installation",
    icon: Wrench,
    description: "Professional installation of all RO brands with proper setup and testing",
    price: "Starting from ₹500",
    features: ["Wall mounting", "Plumbing work", "Initial testing", "1-month warranty"],
  },
  {
    title: "RO Repair",
    icon: Settings,
    description: "Quick diagnosis and repair of all RO issues by expert technicians",
    price: "Starting from ₹300",
    features: ["Same-day service", "All brands", "Genuine parts", "90-day warranty"],
  },
  {
    title: "Annual Maintenance Contract",
    icon: Shield,
    description: "Comprehensive yearly maintenance with regular visits and priority support",
    price: "Starting from ₹2,999/year",
    features: ["4 free visits", "Filter changes", "Priority support", "Discounts on parts"],
  },
  {
    title: "Filter Replacement",
    icon: Filter,
    description: "Replace sediment, carbon, and post-carbon filters for optimal performance",
    price: "Starting from ₹199",
    features: ["Genuine filters", "All brands", "Quick service", "Quality assured"],
  },
  {
    title: "Membrane Replacement",
    icon: Droplet,
    description: "Replace RO membrane for better water purification and TDS control",
    price: "Starting from ₹999",
    features: ["Original membranes", "TDS testing", "Performance check", "6-month warranty"],
  },
  {
    title: "UV Lamp Replacement",
    icon: Zap,
    description: "Replace UV lamp for effective bacteria and virus elimination",
    price: "Starting from ₹499",
    features: ["Genuine UV lamps", "All brands", "Installation included", "Testing done"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold">← OM Traders</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Professional RO water purifier services for all brands</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6">
                <service.icon className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-accent font-bold text-lg mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-service"
                  className="block text-center bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8">Call us now for same-day service</p>
          <a
            href="tel:+919876543210"
            className="inline-block bg-accent hover:bg-accent/90 px-8 py-3 rounded-full font-semibold text-lg"
          >
            📞 +91 98765 43210
          </a>
        </div>
      </section>
    </div>
  );
}
