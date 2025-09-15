"use client";
import React, { useState } from "react";
import { useCart } from "../context/cartContext"; 
import { useOrders } from "../context/orderContext"; // Import the orders context
import { Plus, Minus, Trash2, CheckCircle } from "lucide-react";
import Link from "next/link";

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();
  const { addOrder } = useOrders(); // Use the orders context
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [lastOrderId, setLastOrderId] = useState<string>('');

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    setIsProcessingCheckout(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // Create order items from cart
      const orderItems = cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      }));

      // Add order using the orders context
      const orderId = addOrder(orderItems, getTotalPrice());
      setLastOrderId(orderId);
      
      // Clear the cart
      // clearCart();
      
      // Show success message
      setOrderSuccess(true);
      setIsProcessingCheckout(false);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setOrderSuccess(false);
      }, 5000);
    }, 2000); // 2 second delay to simulate processing
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-[#FBF8F1] flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-4">
            Your order <span className="font-semibold">#{lastOrderId}</span> has been placed and is being processed.
          </p>
          <div className="space-y-3">
            <Link href="/profile">
              <button className="w-full bg-[#54BBBA] text-white py-2 px-4 rounded-lg hover:bg-[#4a9998] transition-colors">
                View My Orders
              </button>
            </Link>
            <Link href="/shop">
              <button className="w-full border border-[#54BBBA] text-[#54BBBA] py-2 px-4 rounded-lg hover:bg-[#54BBBA] hover:text-white transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF8F1]">
      <div className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-2xl font-bold text-black mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link href="/shop">
              <span className="bg-[#54BBBA] text-white px-6 py-3 rounded-lg hover:bg-[#4a9998] transition-colors cursor-pointer">
                Go Back to Shop
              </span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-medium text-black">{item.name}</h2>
                    <p className="text-[#54BBBA] font-bold">${item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-1 bg-gray-100 rounded">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                        className="p-1 hover:bg-gray-200 rounded disabled:opacity-50"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 p-1 hover:bg-red-100 rounded text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Items:</span>
                <span className="text-gray-800">{getTotalItems()}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Total:</span>
                <span className="text-black font-bold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={isProcessingCheckout}
                className="w-full bg-[#54BBBA] text-white py-3 rounded-lg font-semibold hover:bg-[#4a9998] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessingCheckout ? 'Processing...' : 'Proceed to Checkout'}
              </button>
              <Link href="/shop">
                <p className="text-[#54BBBA] mt-4 text-center hover:underline cursor-pointer">
                  Continue Shopping
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;