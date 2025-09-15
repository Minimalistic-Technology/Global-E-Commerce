"use client"
import React from 'react';
import { Star, ShoppingCart, ArrowLeft, Heart, Share2, Truck, Shield, RefreshCw, Award, CheckCircle } from 'lucide-react';
import { useCart } from "../context/cartContext";

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

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
   
  };

  const handleBuyNow = () => {
    addToCart(product);
    // Navigate to cart or checkout page
    window.location.href = '/cart';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const relatedProducts = [
    {
     id: 3, 
      name: "Electronic Components", 
      price: 89, 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      rating: 4.7,
      description: "High-quality electronic components for industrial use. These components meet international standards and are perfect for manufacturing electronic devices and industrial equipment."
     
    },
    {
      
      id: 5, 
      name: "Spice Collection", 
      price: 34, 
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop", 
      rating: 4.5, 
      description: "Premium spice collection with authentic flavors. This collection includes a variety of aromatic spices sourced directly from spice gardens, ensuring maximum freshness and flavor."
    },
    {
      id: 10, 
      name: "Solar Panels", 
      price: 199, 
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop", 
      rating: 4.8, 
      description: "High-efficiency solar panels for renewable energy. Advanced photovoltaic technology ensures maximum energy conversion and long-lasting performance for sustainable energy solutions."
     
    },
    { 
      id: 7, 
      name: "Green Tea Premium", 
      price: 28, 
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop", 
      rating: 4.7,
      description: "Premium green tea leaves from Japanese tea gardens. Carefully processed to retain maximum antioxidants and authentic flavor profile of traditional Japanese green tea."
    }
  ];

  return (
    <div className="min-h-screen pt-18 ">
      {/* Header */} 
      <div className="bg-white">
        <div className="container mx-auto ">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl  overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 p-6">
            {/* Product Image Section */}
            <div className="space-y-4">
              
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-70 object-cover rounded-lg shadow-md"
                />
                {product.trending && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                      Trending
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.origin}
                  </span>
                </div>
              </div>
              
              {/* Additional product images placeholder */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((index) => (
                  <img
                    key={index}
                    src={product.image}
                    alt={`${product.name} view ${index}`}
                    className="w-full h-20 object-cover rounded-md border-2 border-gray-200 hover:border-teal-500 cursor-pointer transition-colors"
                  />
                ))}
              </div>

              {/* Promotional Badges */}
              <div className="grid grid-cols-4 gap-3 mb-4 pt-10">
                <div className="flex flex-col items-center space-x-2 bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <Truck className="w-10 h-10 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center space-x-2 bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <Award className="w-10 h-10 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">Top Brand</span>
                </div>
                <div className="flex flex-col items-center space-x-2 bg-green-50 p-3 rounded-lg border border-green-200">
                  <RefreshCw className="w-10 h-10 text-green-600" />
                  <span className="text-sm font-medium text-green-800">10 Days Returnable</span>
                </div>
                <div className="flex flex-col items-center space-x-2 bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <CheckCircle className="w-10 h-10 text-orange-600" />
                  <span className="text-sm font-medium text-orange-800">Top Quality</span>
                </div>
              </div>
              
            </div>



            {/* Product Details Section */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600 ">
                  Category: {product.category} • {product.subcategory}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className=" text-gray-600">
                  {product.rating} out of 5
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">1,234 reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ${Math.round(product.price * 1.3)}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${Math.round(product.price * 0.3)}
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${product.stock > 50 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                <span className={`font-medium ${product.stock > 50 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {product.stock > 50 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
                </span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold ">Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Truck className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-600">On orders over $100</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900">Quality Assured</div>
                    <div className="text-sm text-gray-600">Certified products</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900">Easy Returns</div>
                    <div className="text-sm text-gray-600">30-day return policy</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex space-x-4 justify-center">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className=" bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-3" />
                    {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                   <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg w-50"
                >
                  Buy Now
                </button>
                </div>
                
               
              </div>

              {/* Product Specifications */}
              <div className=" pt-2">
                <h3 className="text-xl font-light mb-4">Product Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Origin:</span>
                      <span className="font-medium">{product.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stock:</span>
                      <span className="font-medium">{product.stock} units</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">SKU:</span>
                      <span className="font-medium">PRD-{product.id.toString().padStart(4, '0')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-medium">{product.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-medium text-green-600">In Stock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2  ">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover rounded-lg "
                />
                <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                <div className="flex-flex-col items-center justify-between">
                     <span className="block h-30 text-gray-900">{relatedProduct.description}</span>
                  <div className="flex items-center ">
                    {renderStars(relatedProduct.rating)}
                  </div>

                  <span className="text-lg font-bold text-gray-900">${relatedProduct.price}</span>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;