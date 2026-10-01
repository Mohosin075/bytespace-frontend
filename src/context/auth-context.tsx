'use client';

import React, { createContext, useContext, useState } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  wishlist: string[];
  login: (email: string, name?: string) => void;
  logout: () => void;
  toggleWishlist: (courseId: string) => boolean; // returns true if added, false if removed
  isWishlisted: (courseId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const savedUser = localStorage.getItem('bytespace_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window === 'undefined') return ['c1', 'c7'];
    try {
      const savedWishlist = localStorage.getItem('bytespace_wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : ['c1', 'c7'];
    } catch {
      return ['c1', 'c7'];
    }
  });

  const login = (email: string, name?: string) => {
    const newUser: User = {
      name: name || email.split('@')[0] || 'Jamie Davis',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Student & Creator',
    };
    setUser(newUser);
    try {
      localStorage.setItem('bytespace_user', JSON.stringify(newUser));
    } catch {}
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('bytespace_user');
    } catch {}
  };

  const toggleWishlist = (courseId: string): boolean => {
    let added = false;
    setWishlist((prev) => {
      let next: string[];
      if (prev.includes(courseId)) {
        next = prev.filter((id) => id !== courseId);
        added = false;
      } else {
        next = [...prev, courseId];
        added = true;
      }
      try {
        localStorage.setItem('bytespace_wishlist', JSON.stringify(next));
      } catch {}
      return next;
    });
    return added;
  };

  const isWishlisted = (courseId: string) => wishlist.includes(courseId);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        wishlist,
        login,
        logout,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an <AuthProvider>. Did you forget to wrap your component tree?');
  }
  return context;
}
