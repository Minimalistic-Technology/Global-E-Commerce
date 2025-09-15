"use client"
import React, { useState, useMemo } from 'react';
import { Star, Search, Heart, ShoppingCart, Filter, X, ChevronDown, Globe, MapPin, Truck, Menu, TrendingUp } from 'lucide-react';
import { useCart } from "../context/cartContext";
import ProductDetails from '../Component/ProductDetails';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  subcategory: string;
  origin: string;
  trending: boolean;
  stock: number;
}

interface Filters {
  priceRange: any;
  category: string;
  subCategory: string;
  brand: string;
  rating: number;
  origin: string;
  shippingMethod: string;
}

const ProductGallery = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductDetails, setShowProductDetails] = useState(false); // New state for page navigation
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [filters, setFilters] = useState<Filters>({
    category: '',
    subCategory: '',
    brand: '',
    priceRange: [0, 500],
    rating: 0,
    origin: '',
    shippingMethod: ''
  });

  // Countries with shipping info (no currency conversion)
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'IN', name: 'India'},
    { code: 'CN', name: 'China'},
    { code: 'JP', name: 'Japan' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' }
  ];

  const products: Product[] = [
    { 
      id: 1, 
      name: "Premium Basmati Rice", 
      price: 45, 
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop", 
      category: "agriculture", 
      subcategory: "grains",
      rating: 4.8, 
      origin: "India", 
      stock: 150,
      description: "Aromatic long-grain basmati rice, aged for premium quality. This premium rice variety is carefully selected and aged to develop its distinctive aroma and flavor profile. Perfect for biryanis, pilafs, and other gourmet dishes.",
      trending: true,
    },
    { 
      id: 2, 
      name: "Organic Cotton Textiles", 
      price: 120, 
      image: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=400&h=300&fit=crop", 
      category: "textiles", 
      subcategory: "fabric",
      rating: 4.6, 
      origin: "Bangladesh", 
      stock: 75,
      description: "100% organic cotton fabric, sustainably sourced from certified farms. This premium textile is perfect for clothing manufacturers looking for eco-friendly and high-quality materials.",
      trending: false,
    },
    { 
      id: 3, 
      name: "Electronic Components", 
      price: 89, 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", 
      category: "electronics", 
      subcategory: "components",
      rating: 4.7, 
      origin: "China", 
      stock: 200,
      description: "High-quality electronic components for industrial use. These components meet international standards and are perfect for manufacturing electronic devices and industrial equipment.",
      trending: true,
    },
    { 
      id: 4, 
      name: "Handcrafted Ceramics", 
      price: 67, 
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", 
      category: "handicrafts", 
      subcategory: "pottery",
      rating: 4.9, 
      origin: "Vietnam", 
      stock: 45,
      description: "Traditional handcrafted ceramics with unique designs. Each piece is carefully crafted by skilled artisans using traditional techniques passed down through generations.",
      trending: false,
    },
    { 
      id: 5, 
      name: "Spice Collection", 
      price: 34, 
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop", 
      category: "agriculture", 
      subcategory: "spices",
      rating: 4.5, 
      origin: "India", 
      stock: 300,
      description: "Premium spice collection with authentic flavors. This collection includes a variety of aromatic spices sourced directly from spice gardens, ensuring maximum freshness and flavor.",
      trending: true,
    },
    { 
      id: 6, 
      name: "Leather Goods", 
      price: 156, 
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop", 
      category: "leather", 
      subcategory: "accessories",
      rating: 4.8, 
      origin: "Italy", 
      stock: 25,
      description: "Finest Italian leather goods crafted by artisans. Made from premium quality leather and finished with traditional techniques for exceptional durability and style.",
      trending: false,
    },
    { 
      id: 7, 
      name: "Green Tea Premium", 
      price: 28, 
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop", 
      category: "agriculture", 
      subcategory: "beverages",
      rating: 4.7, 
      origin: "Japan", 
      stock: 180,
      description: "Premium green tea leaves from Japanese tea gardens. Carefully processed to retain maximum antioxidants and authentic flavor profile of traditional Japanese green tea.",
      trending: false,
    },
    { 
      id: 8, 
      name: "Silk Scarves", 
      price: 89, 
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop", 
      category: "textiles", 
      subcategory: "accessories",
      rating: 4.6, 
      origin: "China", 
      stock: 60,
      description: "Luxurious silk scarves with intricate patterns. Made from pure silk and featuring traditional designs that showcase the artistry of skilled craftsmen.",
      trending: true,
    },
    { 
      id: 9, 
      name: "Wooden Furniture", 
      price: 245, 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop", 
      category: "handicrafts", 
      subcategory: "furniture",
      rating: 4.9, 
      origin: "Thailand", 
      stock: 15,
      description: "Sustainable teak wood furniture with modern design. Crafted from responsibly sourced teak wood with contemporary styling perfect for modern homes and offices.",
      trending: false,
    },
    { 
      id: 10, 
      name: "Solar Panels", 
      price: 199, 
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop", 
      category: "electronics", 
      subcategory: "renewable",
      rating: 4.8, 
      origin: "Germany", 
      stock: 50,
      description: "High-efficiency solar panels for renewable energy. Advanced photovoltaic technology ensures maximum energy conversion and long-lasting performance for sustainable energy solutions.",
      trending: true,
    },
    {
      id: 11, 
      name: "Kitchen", 
      price: 89, 
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZXxlbnwwfHwwfHx8MA%3D%3D", 
      category: "Agriculture", 
      subcategory: "components",
      rating: 4.7, 
      origin: "China", 
      stock: 200,
      description: "Premium green tea leaves from Japanese tea gardens. Carefully processed to retain maximum antioxidants and authentic flavor profile of traditional Japanese green tea.",
      trending: true
    }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.origin && product.origin !== filters.origin) return false;
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
      if (filters.rating && product.rating < filters.rating) return false;
      return true;
    });

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [filters, searchTerm]);

  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      subCategory: '',
      brand: '',
      priceRange: [0, 500],
      rating: 0,
      origin: '',
      shippingMethod: ''
    });
    setSearchTerm('');
  };

  // Handle product click to show details page
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  // Handle back from product details
  const handleBackFromDetails = () => {
    setShowProductDetails(false);
    setSelectedProduct(null);
  };

  // Handle adding product to cart
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const categories = [...new Set(products.map(p => p.category))];
  const origins = [...new Set(products.map(p => p.origin))];
  const shippingMethods = ['Air Freight', 'Sea Freight', 'Express'];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  // If showing product details, render the ProductDetails component
  if (showProductDetails && selectedProduct) {
    return (
      <ProductDetails 
        product={selectedProduct} 
        onBack={handleBackFromDetails}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF8F1]">
      {/* Search Section */}
      <div className="container mx-auto px-4 py-6 pt-20">
        <div className="mb-1">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, categories, or origins..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Enhanced Sidebar */}
        <div className={`bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-80' : 'w-0'} overflow-hidden`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Origin Country Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Origin Country</label>
              <select
                value={filters.origin}
                onChange={(e) => updateFilter('origin', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">All Origins</option>
                {origins.map(origin => (
                  <option key={origin} value={origin}>{origin}</option>
                ))}
              </select>
            </div>

            {/* Shipping Method Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Method</label>
              <select
                value={filters.shippingMethod}
                onChange={(e) => updateFilter('shippingMethod', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">All Methods</option>
                {shippingMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="500"
                step="5"
                value={filters.priceRange[1]}
                onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
              <select
                value={filters.rating}
                onChange={(e) => updateFilter('rating', parseFloat(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value={0}>Any Rating</option>
                <option value={4}>4+ Stars</option>
                <option value={3.5}>3.5+ Stars</option>
                <option value={3}>3+ Stars</option>
              </select>
            </div>

            <button
              onClick={clearFilters}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors text-sm"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sidebar Toggle Button - Only show when sidebar is closed */}
          {!sidebarOpen && (
            <div className="p-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <Menu className="w-5 h-5 mr-2" />
                Show Filters
              </button>
            </div>
          )}

          {/* Products Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => handleProductClick(product)} // Modified to use handleProductClick
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2 space-y-1">
                      {product.trending && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                          <TrendingUp className="h-3 w-3" />
                          <span className="font-bold">Trending</span>
                        </span>
                      )}
                    </div>
                    <div className="absolute top-2 right-2 space-y-1">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold block">
                        {product.origin}
                      </span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold block">
                        Stock: {product.stock}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 text-sm">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{product.category}</span>
                      <span className="text-lg text-cyan-950">$ {product.price}</span>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      disabled={product.stock === 0}
                      className="w-full bg-[#54BBBA] hover:bg-[#4a9998] text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;