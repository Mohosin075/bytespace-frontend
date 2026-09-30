'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '@/types';
import { MOCK_COURSES } from '@/constants/mock-data';

export interface CartItem extends Course {
  qty: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (course: Course) => boolean;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  isInCart: (courseId: string) => boolean;
  applyPromoCode: (code: string) => { success: boolean; message: string; percent?: number };
  appliedPromo: { code: string; percent: number } | null;
  removePromo: () => void;
  cartCount: number;
  subtotal: number;
  promoDiscount: number;
  baseDiscount: number;
  totalDiscount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'bytespace_cart_items';
const PROMO_STORAGE_KEY = 'bytespace_cart_promo';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') {
      return [{ ...MOCK_COURSES[0], qty: 1 }, { ...MOCK_COURSES[1], qty: 1 }];
    }
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return [{ ...MOCK_COURSES[0], qty: 1 }, { ...MOCK_COURSES[1], qty: 1 }];
  });

  const [appliedPromo, setAppliedPromo] = useState<{ code: string; percent: number } | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem(PROMO_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  useEffect(() => {
    try {
      if (appliedPromo) {
        localStorage.setItem(PROMO_STORAGE_KEY, JSON.stringify(appliedPromo));
      } else {
        localStorage.removeItem(PROMO_STORAGE_KEY);
      }
    } catch {}
  }, [appliedPromo]);

  const addToCart = (course: Course): boolean => {
    let added = false;
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === course.id);
      if (existingIndex > -1) {
        added = false;
        return prev;
      }
      added = true;
      return [...prev, { ...course, qty: 1 }];
    });
    return added;
  };

  const removeFromCart = (courseId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== courseId));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedPromo(null);
  };

  const isInCart = (courseId: string) => {
    return cartItems.some((item) => item.id === courseId);
  };

  const applyPromoCode = (codeInput: string) => {
    const code = codeInput.trim().toUpperCase();
    if (code === 'BYTESPACE20' || code === 'SAVE20') {
      const promo = { code, percent: 20 };
      setAppliedPromo(promo);
      return { success: true, message: 'Promo code applied successfully (20% off)!', percent: 20 };
    } else if (code === 'HALF50' || code === 'BYTESPACE50') {
      const promo = { code, percent: 50 };
      setAppliedPromo(promo);
      return { success: true, message: 'Promo code applied successfully (50% off)!', percent: 50 };
    } else {
      return { success: false, message: 'Invalid coupon code. Try "BYTESPACE20"' };
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);
  const promoDiscount = appliedPromo ? Math.round((subtotal * appliedPromo.percent) / 100) : 0;
  const baseDiscount = cartItems.length >= 2 ? 10 : 0;
  const totalDiscount = promoDiscount + baseDiscount;
  const total = Math.max(0, subtotal - totalDiscount);
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        applyPromoCode,
        appliedPromo,
        removePromo,
        cartCount,
        subtotal,
        promoDiscount,
        baseDiscount,
        totalDiscount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
