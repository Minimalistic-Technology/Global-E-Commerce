"use client";
import React, { useState } from "react";
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
      color: "bg-[#9b6cbc]",
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
      color: "bg-[#5eba79]",
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
      color: "bg-[#ed6163]",
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
      color: "bg-[#6589cb]",
    },
  ];

  const logisticsServices = [
    {
      icon: <Package className="w-12 h-12 text-[#54BBBA]" />,
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
    <div className="min-h-screen bg-[#FBF8F1]">
    
      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-20 relative z-0 overflow-hidden"
        style={{
          backgroundImage: `url('https://media.gettyimages.com/id/1460822484/photo/warehouse-tablet-and-people-teamwork-for-storage-inventory-and-supply-chain-management-for.jpg?s=612x612&w=0&k=20&c=ADW05TJoWOGkNuLzzLlxwoVA5v4TzfVxDG4BsL5TP3I=')`,
        }}
      >
        {/* Decorative SVG Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-10 left-10 opacity-20" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#54BBBA" strokeWidth="2" strokeDasharray="5,5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 50 50;360 50 50"
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="50" cy="50" r="20" fill="#54BBBA" opacity="0.3" />
          </svg>
          
          <svg className="absolute top-20 right-20 opacity-30" width="80" height="80" viewBox="0 0 80 80">
            <polygon points="40,10 60,30 40,50 20,30" fill="#9b6cbc" opacity="0.6">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 40 40;360 40 40"
                dur="15s"
                repeatCount="indefinite"
              />
            </polygon>
          </svg>
          
          <svg className="absolute bottom-10 left-1/4 opacity-25" width="120" height="120" viewBox="0 0 120 120">
            <path d="M60,20 L80,40 L60,60 L40,40 Z" fill="none" stroke="#5eba79" strokeWidth="3" strokeDasharray="8,4">
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.2;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-opacity-50 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services & Materials
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive trade solutions across multiple industries with specialized handling for each material category
          </p>
        </div>
      </section>

      {/* Material Categories */}
      <section className="py-16 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#54BBBA] opacity-5 rounded-full transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#9b6cbc] opacity-10 transform rotate-12"></div>
          <svg className="absolute top-1/2 left-10 opacity-10" width="60" height="60" viewBox="0 0 60 60">
            <rect x="10" y="10" width="40" height="40" fill="none" stroke="#5eba79" strokeWidth="2" transform="rotate(45 30 30)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 relative">
            Material Categories
            <svg className="absolute -top-2 -right-8 opacity-20" width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#ed6163" strokeWidth="2" strokeDasharray="3,3" />
            </svg>
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
              {/* Decorative corner elements */}
              <svg className="absolute top-0 right-0 opacity-10" width="100" height="100" viewBox="0 0 100 100">
                <path d="M100,0 L100,50 Q75,25 50,50 Q25,75 0,50 L0,0 Z" fill={selectedCategoryData.color.replace('bg-', '')} />
              </svg>
              
              <div className={`${selectedCategoryData.color} p-6 text-white relative z-10`}>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg mr-3">
                    {selectedCategoryData.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{selectedCategoryData.title}</h3>
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
                          <ArrowRight className="w-5 h-5 text-[#54BBBA] mr-3" />
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
      <section className="py-16 bg-[#FBF8F1] relative overflow-hidden">
        {/* Decorative background patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-10 left-1/4 opacity-5" width="200" height="200" viewBox="0 0 200 200">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#54BBBA" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#grid)" />
          </svg>
          
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-[#52a9ff87] border-opacity-10 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#ed6163] opacity-5 transform rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 relative">
            Comprehensive Logistics Services
            <svg className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-30" width="100" height="20" viewBox="0 0 100 20">
              <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="#54BBBA" strokeWidth="3" strokeDasharray="5,5" />
            </svg>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
                {/* Decorative hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4 relative">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {/* Animated ring on hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-current rounded-full animate-pulse opacity-0 group-hover:opacity-30"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     {/* CTA Section */}
      <section className="py-16 bg-[#54BBBA] relative overflow-hidden">
        {/* Decorative wave patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-20 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 Z" fill="rgba(255,255,255,0.1)" />
          </svg>
          
          <svg className="absolute bottom-0 right-0 w-full h-20 opacity-20 transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 Z" fill="rgba(255,255,255,0.1)" />
          </svg>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white border-opacity-20 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/4 w-10 h-10 border-2 border-white border-opacity-30 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your specific material requirements and shipping needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#54BBBA] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#54BBBA] transition-all duration-300 hover:scale-105">
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
                <Globe className="w-8 h-8 text-[#54BBBA] mr-2" />
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