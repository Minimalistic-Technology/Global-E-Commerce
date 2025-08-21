"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Package, 
  Truck, 
  Shield, 
  Clock,
  Leaf,
  Heart,
  Shirt,
  Wheat,
  Pill,
  Factory,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  products: string[];
  features: string[];
  color: string;
}

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("textiles");

  const serviceCategories: ServiceCategory[] = [
    {
      id: "textiles",
      title: "Textiles & Apparel",
      icon: <Shirt className="w-8 h-8" />,
      description: "Premium textile and clothing materials sourced from leading manufacturers worldwide.",
      products: [
        "Cotton fabrics",
        "Synthetic textiles",
        "Denim materials",
        "Silk and luxury fabrics",
        "Technical textiles",
        "Home textiles",
        "Fashion accessories",
        "Yarn and threads",
      ],
      features: [
        "Quality certification",
        "Bulk order discounts",
        "Custom specifications",
        "Fast delivery",
      ],
      color: "bg-purple-500",
    },
    {
      id: "agriculture",
      title: "Agriculture & Food",
      icon: <Wheat className="w-8 h-8" />,
      description: "Fresh agricultural products and food materials with strict quality control and cold chain logistics.",
      products: [
        "Grains and cereals",
        "Fresh fruits",
        "Vegetables",
        "Spices and herbs",
        "Dairy products",
        "Meat and poultry",
        "Seafood",
        "Processed foods",
      ],
      features: [
        "Cold chain logistics",
        "Organic certification",
        "Traceability system",
        "Freshness guarantee",
      ],
      color: "bg-green-500",
    },
    {
      id: "medicine",
      title: "Medicine & Healthcare",
      icon: <Heart className="w-8 h-8" />,
      description: "Pharmaceutical products and medical equipment with full regulatory compliance and secure handling.",
      products: [
        "Pharmaceutical drugs",
        "Medical devices",
        "Surgical instruments",
        "Diagnostic equipment",
        "Personal protective equipment",
        "Medical consumables",
        "Healthcare supplements",
        "Laboratory equipment",
      ],
      features: [
        "FDA compliance",
        "Temperature control",
        "Secure packaging",
        "Regulatory documentation",
      ],
      color: "bg-red-500",
    },
    {
      id: "electronics",
      title: "Electronics & Technology",
      icon: <Factory className="w-8 h-8" />,
      description: "Latest electronic components and technology products with anti-static packaging and warranty.",
      products: [
        "Computer components",
        "Mobile devices",
        "Consumer electronics",
        "Industrial equipment",
        "Semiconductors",
        "Audio/video equipment",
        "Gaming accessories",
        "Smart home devices",
      ],
      features: [
        "Anti-static packaging",
        "Warranty protection",
        "Technical support",
        "Bulk pricing",
      ],
      color: "bg-blue-500",
    },
  ];

  const logisticsServices = [
    {
      icon: <Package className="w-12 h-12 text-blue-600" />,
      title: "Packaging & Handling",
      description: "Professional packaging services tailored to your product requirements",
    },
    {
      icon: <Truck className="w-12 h-12 text-green-600" />,
      title: "Transportation",
      description: "Multiple shipping options including air, sea, and land freight",
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "Insurance & Security",
      description: "Comprehensive insurance coverage and secure handling protocols",
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Real-time Tracking",
      description: "Track your shipments in real-time from origin to destination",
    },
  ];

  const selectedCategoryData = serviceCategories.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
    
      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-20"
        style={{
          backgroundImage: `url('https://media.gettyimages.com/id/1460822484/photo/warehouse-tablet-and-people-teamwork-for-storage-inventory-and-supply-chain-management-for.jpg?s=612x612&w=0&k=20&c=ADW05TJoWOGkNuLzzLlxwoVA5v4TzfVxDG4BsL5TP3I=')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services & Materials
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive trade solutions across multiple industries with specialized handling for each material category
          </p>
        </div>
      </section>

      {/* Material Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Material Categories
          </h2>
          
          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Selected Category Details */}
          {selectedCategoryData && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${selectedCategoryData.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  {selectedCategoryData.icon}
                  <h3 className="text-2xl font-bold ml-3">{selectedCategoryData.title}</h3>
                </div>
                <p className="text-lg opacity-90">{selectedCategoryData.description}</p>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Products */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Available Products</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedCategoryData.products.map((product, index) => (
                        <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Special Features</h4>
                    <div className="space-y-3">
                      {selectedCategoryData.features.map((feature, index) => (
                        <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                          <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className={`mt-6 ${selectedCategoryData.color} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity`}>
                      Request Quote for {selectedCategoryData.title}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Comprehensive Logistics Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your specific material requirements and shipping needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">GlobalTrade</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for global trade and logistics solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Textiles & Apparel</li>
                <li>Agriculture & Food</li>
                <li>Medicine & Healthcare</li>
                <li>Electronics & Technology</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Partners</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@globaltrade.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>24/7 Support Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GlobalTrade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;