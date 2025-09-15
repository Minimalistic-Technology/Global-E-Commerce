"use client"
import React from 'react';
import { Globe, Users, Award, TrendingUp, Ship, Plane, Truck } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Globe className="w-8 h-8" />, value: "85+", label: "Countries" },
    { icon: <Users className="w-8 h-8" />, value: "2,500+", label: "Clients" },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Years" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "$2.8B+", label: "Trade Volume" }
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", exp: "20+ years experience" },
    { name: "Michael Chen", role: "Head of Operations", exp: "15+ years experience" },
    { name: "Elena Rodriguez", role: "Trade Director", exp: "12+ years experience" }
  ];

  const services = [
    { icon: <Ship className="w-6 h-6" />, title: "Ocean Freight", desc: "Sea cargo solutions with competitive rates" },
    { icon: <Plane className="w-6 h-6" />, title: "Air Freight", desc: "Fast air cargo for time-sensitive shipments" },
    { icon: <Truck className="w-6 h-6" />, title: "Land Transport", desc: "Cross-border trucking and rail solutions" }
  ];

  return (
    <div className="min-h-screen bg-[#FBF8F1]">
      {/* Hero */}
      <section
        className="bg-cover bg-center py-20"
        style={{
          backgroundImage: `url('https://media.gettyimages.com/id/1202209630/vector/global-transportation.jpg?s=612x612&w=0&k=20&c=2IRLVnwMt85BP0t2g2MPamCbWEfNrLB2WrphPNZYZT4=')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About GlobalTrade</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in international trade, connecting businesses worldwide.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2009, GlobalTrade emerged from a vision to make international trade 
              accessible for businesses of all sizes. Today, we facilitate over $2.8 billion 
              in annual trade volume across 85+ countries.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence and innovation has made us a trusted partner 
              in the global marketplace.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-64 flex items-center justify-center">
            <Globe className="w-32 h-32 text-[#54BBBA] opacity-30" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#FBF8F1]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="flex justify-center text-[#54BBBA] mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-[#54BBBA] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-neutral-900 font-bold mb-2">Mission</h3>
              <p className="text-gray-600">Simplify global trade with innovative, reliable solutions</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-neutral-900 font-bold mb-2">Values</h3>
              <p className="text-gray-600">Integrity, transparency, and customer-centricity</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-neutral-900 font-bold mb-2">Vision</h3>
              <p className="text-gray-600">World's most trusted global trade platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#FBF8F1]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-[#54BBBA]">{service.icon}</div>
                  <h3 className="text-black font-semibold">{service.title}</h3>
                </div>
                <p className="text-neutral-900">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
     

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Globe className="w-6 h-6 text-[#54BBBA]" />
            <span className="text-lg font-bold">GlobalTrade</span>
          </div>
          <p className="text-gray-400 mb-4">Your trusted partner in international trade</p>
          <p className="text-gray-500">&copy; 2025 GlobalTrade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;