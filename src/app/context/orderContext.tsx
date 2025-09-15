"use client"
import React, { createContext, useContext, useState, useCallback } from 'react';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  item: string;
  items: OrderItem[]; // Full item details
  status: 'Delivered' | 'Shipped' | 'Processing';
  date: string;
  amount: number;
  orderNumber: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (items: OrderItem[], totalAmount: number) => string;
  updateOrderStatus: (orderId: string, newStatus: 'Delivered' | 'Shipped' | 'Processing') => void;
  getOrderById: (orderId: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const generateOrderId = useCallback(() => {
    return `ORD${String(Date.now()).slice(-6)}`;
  }, []);

  const addOrder = useCallback((items: OrderItem[], totalAmount: number): string => {
    const orderId = generateOrderId();
    const orderNumber = `#${orderId}`;
    
    // Create order with first item name, or "Multiple Items" if more than one
    const itemName = items.length === 1 
      ? items[0].name 
      : `${items[0].name} + ${items.length - 1} more`;

    const newOrder: Order = {
      id: orderId,
      item: itemName,
      items: items,
      status: 'Processing',
      date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
      amount: totalAmount,
      orderNumber: orderNumber
    };

    setOrders(prev => [newOrder, ...prev]); // Add new orders at the beginning
    return orderId;
  }, [generateOrderId]);

  const updateOrderStatus = useCallback((orderId: string, newStatus: 'Delivered' | 'Shipped' | 'Processing') => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus }
          : order
      )
    );
  }, []);

  const getOrderById = useCallback((orderId: string): Order | undefined => {
    return orders.find(order => order.id === orderId);
  }, [orders]);

  const value: OrderContextType = {
    orders,
    addOrder,
    updateOrderStatus,
    getOrderById
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};