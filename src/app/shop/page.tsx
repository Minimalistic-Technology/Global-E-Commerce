"use client";
import React, { useState } from "react";
import { ShoppingCart, Search, Plus, Minus, Trash2, X, Star } from "lucide-react";
import { useCart, Product } from "../context/cartContext"; // adjust path

const ImportExportShop: React.FC = () => {
  const { cart, addToCart, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const products: Product[] = [
    { id: 1, name: "Premium Basmati Rice", price: 45, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop", category: "agriculture", rating: 4.8, origin: "India", stock: 150 },
    { id: 2, name: "Organic Cotton Textiles", price: 120, image: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=400&h=300&fit=crop", category: "textiles", rating: 4.6, origin: "Bangladesh", stock: 75 },
    { id: 3, name: "Electronic Components", price: 89, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", category: "electronics", rating: 4.7, origin: "China", stock: 200 },
    { id: 4, name: "Handcrafted Ceramics", price: 67, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", category: "handicrafts", rating: 4.9, origin: "Vietnam", stock: 45 },
    { id: 5, name: "Spice Collection", price: 34, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop", category: "agriculture", rating: 4.5, origin: "India", stock: 300 },
    { id: 6, name: "Leather Goods", price: 156, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop", category: "leather", rating: 4.8, origin: "Italy", stock: 25 },
    { id: 7, name: "Green Tea Premium", price: 28, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop", category: "agriculture", rating: 4.7, origin: "Japan", stock: 180 },
    { id: 8, name: "Silk Scarves", price: 89, image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop", category: "textiles", rating: 4.6, origin: "China", stock: 60 }
  ];

  const categories = ["all", "agriculture", "textiles", "electronics", "handicrafts", "leather"];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mt-15 pt-5">
      

        {/* Category Filter */}
        <div className="bg-white flex items-center  border-b sticky top-10 z-5">
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative text-black">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="min-w-80 pl-10  pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {product.origin}
                  </span>
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Stock: {product.stock}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-black font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={product.stock === 0}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999]">
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-black font-bold">Shopping Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="text-black font-medium text-sm">{item.name}</h4>
                          <p className="text-blue-600 font-bold">${item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-200 rounded">
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-2 py-1 bg-white rounded text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= item.stock}
                              className="p-1 hover:bg-gray-200 rounded disabled:opacity-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                            <button onClick={() => removeFromCart(item.id)} className="p-1 hover:bg-red-100 rounded text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold">Total: ${getTotalPrice().toFixed(2)}</span>
                    <span className="text-sm text-gray-600">{getTotalItems()} items</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ImportExportShop;
