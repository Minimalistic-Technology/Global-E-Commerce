"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Ship, Truck, Plane, ArrowRight, CheckCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useCart } from "../context/cartContext";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {loggedIn,setLoggedIn} = useLocalStorage();
  const {cart}=useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Globe className="w-8 h-8 text-[#54BBBA] mr-2" />
            <span className="text-xl font-bold text-gray-800">GlobalTrade</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#54BBBA] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[#54BBBA] font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#54BBBA] font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#54BBBA] font-medium transition-colors"
            >
              Contact
            </Link>
             <Link
                href="/shop"
                className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
              >
                Shop
              </Link>
            <Link
              href={"/#quote"}
            className="bg-[#54BBBA] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#54BBBA] transition-colors">
              Get Quote
            </Link>
            
             {loggedIn ? (
            <>
                <button
                  onClick={() => {
                    localStorage.removeItem("email")
                    setLoggedIn(false)}}
                  className="hover:text-[#54BBBA] text-black"
                >
                  Logout
                </button>
              
            </>
          ) : (
            <>
              
                <Link href="/login" className="hover:text-[#54BBBA] text-black">
                  Login
                </Link>
          
            </>
          )}
          <Link
  href="/cart"
  className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
>
  <span className="relative inline-block">
    <ShoppingCart className="h-6 w-6" />
    {cart && cart.length > 0 && (
      <sup className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
        {cart.length}
      </sup>
    )}
  </span>
</Link>

          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#54BBBA]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
              >
                Contact
              </Link>
               <Link
                href="/shop"
                className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
              >
               Shop
              </Link>
              <button
              
              className="w-full text-left bg-[#54BBBA] text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-2">
                Get Quote
              </button>
              
               <Link
                href="/login"
                className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
              >
                Login
              </Link>
              <Link
            href="/cart"
                className="block px-3 py-2 text-gray-700 hover:text-[#54BBBA] font-medium"
              >
            <ShoppingCart className="h-6 w-6" />
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;