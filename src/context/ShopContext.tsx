'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = { id: string; name: string; price: number; };

type ShopContextType = {
  profit: number;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [profit] = useState(0);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => setCart((prev) => [...prev, product]); // Add product to cart
  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index)); // Remove product from cart
  };
  const clearCart = () => setCart([]); // Clear the cart

  return (
    <ShopContext.Provider value={{ profit, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShopContext.Provider> // Provide context to children
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within a ShopProvider');
  return context;
};


// Custom hook to use the ShopContext
// This hook allows components to access the ShopContext