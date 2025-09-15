

"use client"
import React, { useState } from 'react';
import { 
  User, 
  ShoppingBag, 
  Settings, 
  CreditCard, 
  Gift, 
  Star, 
  Bell, 
  Heart,
  LogOut,
  Edit,
  ChevronRight,
  Save,
  X,
  Check,
  Package,
  Truck,
  Shield
} from 'lucide-react';
import { useOrders } from '../context/orderContext'; // Import the orders context
import Link from 'next/link';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: 'male' | 'female' | '';
}

const ProfileDashboard: React.FC = () => {
  const { orders, updateOrderStatus } = useOrders(); 
  
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Pallavi',
    lastName: 'Gupta',
    email: 'guptapal@gmail.com',
    mobile: '+918581068959',
    gender: 'female'
  });

  const [editData, setEditData] = useState<UserData>(userData);
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(userData);
  };

  const handleSave = () => {
    setUserData(editData);
    setIsEditing(false);
    setSavedSuccessfully(true);
    setTimeout(() => setSavedSuccessfully(false), 3000);
    // Add API call here to save data
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserData, value: string) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };
  

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return <Check className="w-4 h-4 text-green-600" />;
      case 'Shipped': return <Truck className="w-4 h-4 text-[#54BBBA]" />;
      case 'Processing': return <Package className="w-4 h-4 text-orange-600" />;
      default: return <Package className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-50';
      case 'Shipped': return 'text-[#54BBBA] bg-blue-50';
      case 'Processing': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF8F1] pt-20">
    

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* User Info */}
              <div className="bg-[#54BBBA] p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{userData.firstName} {userData.lastName}</p>
                    <div className="flex items-center mt-1">
                      </div>
                  </div>
                </div>
              </div>

             {/* Navigation Menu */}
<nav className="p-4 space-y-2">
  <button
    onClick={() => setActiveSection('orders')}
    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
      activeSection === 'orders' 
        ? 'bg-blue-50 text-[#54BBBA] shadow-md border border-blue-200' 
        :  'text-gray-700 hover:bg-gray-50'
    }`}
  >
    <div className="flex items-center space-x-3">
      <ShoppingBag className="w-5 h-5" />
      <span className="font-medium">MY ORDERS</span>
      {orders.length > 0 && (
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {orders.length}
        </span>
      )}
    </div>
    <ChevronRight className="w-4 h-4" />
  </button>

  <div className="space-y-1">
    <button
      onClick={() => setActiveSection('profile')}
      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
        activeSection === 'profile' 
          ? 'bg-blue-50 text-[#54BBBA] shadow-md border border-blue-200' 
          : 'text-gray-700 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center space-x-3">
        <Settings className="w-5 h-5" />
        <span className="font-medium">ACCOUNT SETTINGS</span>
      </div>
    </button>
    
    <div className="ml-8 space-y-1">
      <button 
        onClick={() => setActiveSection('profile-info')}
        className={`w-full text-left p-3 text-sm font-medium rounded-lg transition-colors ${
          activeSection === 'profile-info' 
            ? 'text-[#54BBBA] bg-blue-50' 
            : 'text-gray-600 hover:text-[#54BBBA] hover:bg-gray-50'
        }`}
      >
        Profile Information
      </button>
      <button 
        onClick={() => setActiveSection('addresses')}
        className={`w-full text-left p-3 text-sm rounded-lg transition-colors ${
          activeSection === 'addresses' 
            ? 'text-[#54BBBA] bg-blue-50 font-medium' 
            : 'text-gray-600 hover:text-[#54BBBA] hover:bg-gray-50'
        }`}
      >
        Manage Addresses
      </button>
    </div>
  </div>

  <button 
    onClick={() => setActiveSection('payments')}
    className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
      activeSection === 'payments' 
        ? 'bg-blue-50 text-[#54BBBA] shadow-md border border-blue-200' 
        : 'text-gray-700 hover:bg-gray-50'
    }`}
  >
    <CreditCard className="w-5 h-5" />
    <span className="font-medium">PAYMENTS</span>
  </button>
  <div className="ml-8 space-y-1">
    <div className="flex justify-between items-center p-3 text-sm">
      <span className="text-gray-600">Gift Cards</span>
      
    </div>
    <button 
      onClick={() => setActiveSection('saved-upi')}
      className={`w-full text-left p-3 text-sm rounded-lg transition-colors ${
        activeSection === 'saved-upi' 
          ? 'text-[#54BBBA] bg-blue-50 font-medium' 
          : 'text-gray-600 hover:text-[#54BBBA] hover:bg-gray-50'
      }`}
    >
      Saved UPI
    </button>
    <button 
      onClick={() => setActiveSection('saved-cards')}
      className={`w-full text-left p-3 text-sm rounded-lg transition-colors ${
        activeSection === 'saved-cards' 
          ? 'text-[#54BBBA] bg-blue-50 font-medium' 
          : 'text-gray-600 hover:text-[#54BBBA] hover:bg-gray-50'
      }`}
    >
      Saved Cards
    </button>
  </div>

  <button 
    onClick={() => setActiveSection('my-stuff')}
    className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
      activeSection === 'my-stuff' 
        ? 'bg-blue-50 text-[#54BBBA] shadow-md border border-blue-200' 
        : 'text-gray-700 hover:bg-gray-50'
    }`}
  >
    <Gift className="w-5 h-5" />
    <span className="font-medium">MY STUFF</span>
  </button>
  <div className="ml-8 space-y-1">
    <button 
      onClick={() => setActiveSection('coupons')}
      className={`w-full text-left p-3 text-sm rounded-lg transition-colors ${
        activeSection === 'coupons' 
          ? 'text-[#54BBBA] bg-blue-50 font-medium' 
          : 'text-gray-600 hover:text-[#54BBBA] hover:bg-gray-50'
      }`}
    >
      My Coupons
    </button>
    <button 
      onClick={() => setActiveSection('reviews')}
      className={`w-full text-left p-3 text-sm rounded-lg transition-colors ${
        activeSection === 'reviews' 
          ? 'text-[#54BBBA] bg-blue-50 font-medium' 
          : 'text-gray-600 hover:text-[#54BBBA] hover:bg-gray-50'
      }`}
    >
      My Reviews & Ratings
    </button>
    <button 
      onClick={() => setActiveSection('notifications')}
      className={`w-full text-left p-3 text-sm rounded-lg transition-colors ${
        activeSection === 'notifications' 
          ? 'text-[#54BBBA] bg-blue-50 font-medium' 
          : 'text-gray-600 hover:text-[#54BBBA] hover:bg-gray-50'
      }`}
    >
      All Notifications
    </button>
    <button 
      onClick={() => setActiveSection('wishlist')}
      className={`w-full text-left p-3 text-sm rounded-lg transition-colors ${
        activeSection === 'wishlist' 
          ? 'text-[#54BBBA] bg-blue-50 font-medium' 
          : 'text-gray-600 hover:text-[#54BBBA] hover:bg-gray-50'
      }`}
    >
      My Wishlist
    </button>
  </div>
</nav>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="lg:col-span-3">
            {activeSection === 'orders' ? (
              // Orders Section - Now using real orders data
              <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <ShoppingBag className="w-6 h-6 mr-3 text-[#54BBBA]" />
                    My Orders
                  </h2>
                  <p className="text-gray-600 mt-1">Track and manage your orders</p>
                </div>
                <div className="p-6">
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Package className="w-6 h-6 text-[#54BBBA]" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-800">{order.item}</h3>
                                <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                                <p className="text-sm text-gray-600">Ordered on {order.date}</p>
                                {order.items && order.items.length > 1 && (
                                  <p className="text-xs text-blue-600">Contains {order.items.length} items</p>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                {getStatusIcon(order.status)}
                                <span>{order.status}</span>
                              </div>
                              <p className="text-lg font-bold text-gray-800 mt-2">${order.amount.toFixed(2)}</p>
                              
                              {/* Add status update buttons for testing */}
                              <div className="flex space-x-1 mt-2">
                                {order.status === 'Processing' && (
                                  <button
                                    onClick={() => updateOrderStatus(order.id, 'Shipped')}
                                    className="text-xs bg-blue-500 hover:bg-[#54BBBA] text-white px-2 py-1 rounded transition-colors"
                                  >
                                    Ship
                                  </button>
                                )}
                                {order.status === 'Shipped' && (
                                  <button
                                    onClick={() => updateOrderStatus(order.id, 'Delivered')}
                                    className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded transition-colors"
                                  >
                                    Deliver
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Show detailed items if multiple items */}
                          {order.items && order.items.length > 1 && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Order Items:</h4>
                              <div className="space-y-2">
                                {order.items.map((item, index) => (
                                  <div key={index} className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">{item.name} x {item.quantity}</span>
                                    <span className="text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-500 mb-2">No Orders Found</h3>
                      <p className="text-gray-400 mb-4">You haven't placed any orders yet.</p>
                      <Link href="/shop">
                        <button className="bg-[#54BBBA] hover:bg-[#4a9998] text-white px-6 py-2 rounded-lg transition-colors">
                          Start Shopping
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Profile Section
              <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                        <User className="w-6 h-6 mr-3 text-[#54BBBA]" />
                        Personal Information
                      </h2>
                      <p className="text-gray-600 mt-1">Manage your personal details and preferences</p>
                    </div>
                    <div className="flex space-x-3">
                      {isEditing ? (
                        <>
                          <button
                            onClick={handleCancel}
                            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <X className="w-4 h-4" />
                            <span>Cancel</span>
                          </button>
                          <button
                            onClick={handleSave}
                            className="flex items-center space-x-2 px-4 py-2 bg-[#54BBBA] text-white rounded-lg hover:bg-[#54BBBA] transition-colors shadow-sm"
                          >
                            <Save className="w-4 h-4" />
                            <span>Save Changes</span>
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={handleEdit}
                          className="flex items-center space-x-2 px-4 py-2 text-[#54BBBA] hover:text--[#54BBBA] border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        First Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-gray-50 focus:bg-white"
                          placeholder="Enter your first name"
                        />
                      ) : (
                        <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl text-gray-800 font-medium">
                          {userData.firstName}
                           </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Last Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-gray-50 focus:bg-white"
                          placeholder="Enter your last name"
                        />
                      ) : (
                        <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl text-gray-800 font-medium">
                          {userData.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Gender
                    </label>
                    <div className="flex space-x-8">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={editData.gender === 'male'}
                          onChange={(e) => handleInputChange('gender', e.target.value)}
                          disabled={!isEditing}
                          className="mr-3 w-5 h-5 text-[#54BBBA] focus:ring"
                        />
                        <span className="text-gray-700 font-medium">Male</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={editData.gender === 'female'}
                          onChange={(e) => handleInputChange('gender', e.target.value)}
                          disabled={!isEditing}
                          className="mr-3 w-5 h-5 text-[#54BBBA] focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 font-medium">Female</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-semibold text-gray-700">
                        Email Address
                      </label>
                      <button className="text-[#54BBBA] hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                        <Edit className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{userData.email}</span>
                      <div className="flex items-center space-x-2">
                        
                        
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-semibold text-gray-700">
                        Mobile Number
                      </label>
                      <button className="text-[#54BBBA] hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                        <Edit className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{userData.mobile}</span>
                      <div className="flex items-center space-x-2">
                        
                        
                      </div>
                    </div>
                  </div>
                   </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;





function setSavedSuccessfully(arg0: boolean): void {
  throw new Error('Function not implemented.');
}

