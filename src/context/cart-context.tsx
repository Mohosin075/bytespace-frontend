'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '@/types';
import { MOCK_COURSES } from '@/constants/mock-data';

export interface CartItem extends Course {
  quantity: number;
}

export interface AppliedPromo {
  code: string;
  percent: number;
}

interface CartContextType {
  cart: CartItem[];
  cartItems: CartItem[];
  addToCart: (course: Course) => boolean;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  isInCart: (courseId: string) => boolean;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  appliedPromo: AppliedPromo | null;
  totalItems: number;
  subtotal: number;
  baseDiscount: number;
  promoDiscount: number;
  totalDiscount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'bytespace_cart_v1';

// Initial default items if empty (matching original design preview)
const INITIAL_DEFAULT_ITEMS: CartItem[] = MOCK_COURSES.slice(0, 2).map((c) => ({
  ...c,
  quantity: 1,
}));

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [appliedPromo, setAppliedPromo] = useState<AppliedPromo | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart(INITIAL_DEFAULT_ITEMS);
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      setCart(INITIAL_DEFAULT_ITEMS);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save cart to localStorage on updates
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cart, isInitialized]);

  const addToCart = (course: Course): boolean => {
    let added = false;
    setCart((prev) => {
      const exists = prev.some((item) => item.id === course.id);
      if (exists) {
        added = false;
        return prev;
      }
      added = true;
      return [...prev, { ...course, quantity: 1 }];
    });
    return added;
  };

  const removeFromCart = (courseId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
  };

  const isInCart = (courseId: string) => {
    return cart.some((item) => item.id === courseId);
  };

  const applyPromoCode = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'BYTESPACE10' || cleanCode === 'DISCOUNT20' || cleanCode === 'PROMO') {
      const promoObj = { code: cleanCode, percent: 10 };
      setAppliedPromo(promoObj);
      return { success: true, message: `Promo code "${cleanCode}" applied successfully!` };
    }
    return { success: false, message: 'Invalid promo code. Try "BYTESPACE10".' };
  };

  const totalItems = cart.length;
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const baseDiscount = subtotal > 0 ? 10 : 0;
  const promoDiscount = appliedPromo ? Math.round((subtotal * appliedPromo.percent) / 100) : 0;
  const totalDiscount = baseDiscount + promoDiscount;
  const total = Math.max(0, subtotal - totalDiscount);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems: cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        applyPromoCode,
        appliedPromo,
        totalItems,
        subtotal,
        baseDiscount,
        promoDiscount,
        totalDiscount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
