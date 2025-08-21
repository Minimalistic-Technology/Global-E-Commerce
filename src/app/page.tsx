"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, Ship, Truck, Plane, ArrowRight, CheckCircle } from "lucide-react";

const ExportImportHomepage: React.FC = () => {
  

  const services = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Sea Freight",
      description: "Cost-effective ocean shipping solutions for bulk cargo worldwide",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Land Transport",
      description: "Comprehensive road and rail freight services across continents",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Worldwide presence with local expertise in major trade routes",
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
    <div className="min-h-screen bg-[#54BBBA]">
      
      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-cover bg-center relative z-0"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/03/72/69/67/360_F_372696723_vjPGOxjqPIktNxMPUL6RDQaPfbUfqXRc.jpg')`,
        }}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 k bg-opacity-50 z-2 bg-black/30">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Your Global Trade Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Seamless export-import solutions connecting businesses worldwide with
              reliable, efficient, and cost-effective logistics services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#54BBBA] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Shipping
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#54BBBA] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#FBF8EF] text-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#54BBBA] mb-2">500+</div>
                <div className="text-gray-600">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#54BBBA] mb-2">50k+</div>
                <div className="text-gray-600">Shipments Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#54BBBA] mb-2">150+</div>
                <div className="text-gray-600">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#54BBBA] mb-2">99.8%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-2 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your export-import
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-[#54BBBA] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=" py-20 bg-[#FBF8EF]" id="quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
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
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className=" bg-[#54BBBA] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Ship?</h3>
              <p className="mb-6">
                Get an instant quote for your shipment and start your global trade
                journey today.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Origin Country"
                  className="w-full p-3 rounded-lg shadow-lg text-white "
                />
                <input
                  type="text"
                  placeholder="Destination Country"
                  className="w-full p-3 rounded-lg shadow-lg text-white"
                />
                <select className="w-full p-3 rounded-lg shadow-lg text-gray-800">
                  <option>Select Service Type</option>
                  <option>Sea Freight</option>
                  <option>Air Freight</option>
                  <option>Land Transport</option>
                </select>
                <button className="w-full bg-white text-[#54BBBA] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-[#54BBBA] mr-2" />
                <span className="text-xl font-bold">GlobalTrade</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for global export-import solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Sea Freight
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Land Transport
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Warehousing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>info@globaltrade.com</li>
                <li>
                  123 Trade Street
                  <br />
                  Business City, BC 12345
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GlobalTrade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExportImportHomepage;