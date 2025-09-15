"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Ship,
  Truck,
  Plane,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ExportImportHomepage: React.FC = () => {
  const services = [
    {
      icon: <Ship className="w-10 h-10" />,
      title: "Sea Freight",
      description:
        "Cost-effective ocean shipping solutions for bulk cargo worldwide",
    },
    {
      icon: <Plane className="w-10 h-10" />,
      title: "Air Freight",
      description:
        "Fast and reliable air cargo services for time-sensitive shipments",
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Land Transport",
      description:
        "Comprehensive road and rail freight services across continents",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Network",
      description:
        "Worldwide presence with local expertise in major trade routes",
    },
  ];

  const features = [
    "24/7 Customer Support",
    "Real-time Tracking",
    "Customs Clearance",
    "Documentation Support",
    "Insurance Coverage",
    "Warehousing Solutions",
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-gray-900 overflow-hidden">
      {/* ===== Decorative SVG Background Blobs ===== */}
      <svg
        className="absolute top-[-10%] left-[-10%] w-[28rem] h-[28rem] text-[#54BBBA]/30 blur-3xl"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M40.5,-65.2C52.8,-56.8,64.8,-47.4,71.9,-35.2C79,-23,81.3,-8,77.6,5.8C73.9,19.7,64.1,32.4,52.5,43.1C40.9,53.7,27.5,62.2,12.3,68.6C-2.9,75,-19.9,79.3,-35.6,73.6C-51.2,67.9,-65.4,52.2,-70.6,34.2C-75.8,16.1,-71.9,-4.3,-63.2,-20.4C-54.5,-36.5,-41,-48.3,-26.1,-56.2C-11.2,-64.1,5,-68,20.3,-69.7C35.7,-71.4,51.1,-70,65.1,-62.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute bottom-[-15%] right-[-10%] w-[32rem] h-[32rem] text-[#38A3A5]/20 blur-2xl"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M30.1,-54.3C41.6,-46.3,55.6,-41.4,62.9,-31.5C70.2,-21.6,70.8,-6.8,66.6,6.5C62.4,19.9,53.4,31.7,43.6,43.3C33.8,55,23.2,66.5,9.7,72.7C-3.8,79,-20.2,80,-33.1,72.8C-46,65.6,-55.3,50.2,-61.8,34.3C-68.4,18.4,-72.1,2,-67.2,-11.5C-62.4,-25,-48.9,-35.7,-36.3,-44.4C-23.8,-53,-11.9,-59.6,0.4,-60.1C12.6,-60.7,25.2,-55.2,30.1,-54.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* ===== Floating Motion Shapes ===== */}
      <motion.div
        className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-[#54BBBA] to-[#38A3A5] rounded-full opacity-70 blur-md"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-32 left-12 w-24 h-24 border-4 border-[#38A3A5]/40 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/03/72/69/67/360_F_372696723_vjPGOxjqPIktNxMPUL6RDQaPfbUfqXRc.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00000099] to-[#00000055]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            Your Global Trade Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Seamless export-import solutions connecting businesses worldwide
            with reliable, efficient, and cost-effective logistics services.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-[#54BBBA] to-[#38A3A5] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
              Start Shipping
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#54BBBA] transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#FBF8EF] py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { number: "500+", label: "Global Partners" },
            { number: "50k+", label: "Shipments Delivered" },
            { number: "150+", label: "Countries Covered" },
            { number: "99.8%", label: "On-Time Delivery" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="text-4xl font-extrabold text-[#54BBBA] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative z-10" id="services">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your export-import
            needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
              >
                <div className="text-[#54BBBA] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Quote Form */}
      <section className="py-20 bg-white relative z-10" id="quote">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose GlobalTrade?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide end-to-end logistics solutions with transparency,
              reliability, and customer-first approach that sets us apart in the
              industry.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#54BBBA] to-[#38A3A5] rounded-2xl p-10 text-white shadow-lg">
            <video              
    className="absolute inset-0 w-full h-full object-contain -z-10 rounded-2xl"
    autoPlay 
    muted 
    loop 
    playsInline
  >
    <source src="/bg.mp4" type="video/mp4" />
  </video>
            <h3 className="text-2xl font-bold mb-6">Ready to Ship?</h3>
            <p className="mb-6 text-gray-100">
              Get an instant quote for your shipment and start your global trade
              journey today.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Origin Country"
                className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Destination Country"
                className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:ring-2 focus:ring-white"
              />
              <select className="w-full p-4 rounded-xl bg-white text-gray-800">
                <option>Select Service Type</option>
                <option>Sea Freight</option>
                <option>Air Freight</option>
                <option>Land Transport</option>
              </select>
              <button className="w-full bg-white text-[#54BBBA] py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-[#54BBBA] mr-2" />
              <span className="text-2xl font-bold">GlobalTrade</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for global export-import solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services">Sea Freight</Link>
              </li>
              <li>
                <Link href="/services">Air Freight</Link>
              </li>
              <li>
                <Link href="/services">Land Transport</Link>
              </li>
              <li>
                <Link href="/services">Warehousing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>info@globaltrade.com</li>
              <li>123 Trade Street, Business City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 GlobalTrade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ExportImportHomepage;
