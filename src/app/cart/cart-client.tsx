'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { MOCK_COURSES } from '@/constants/mock-data';
import { ROUTES } from '@/constants/routes';
import { useToast } from '@/context/toast-context';

export default function CartClient() {
  const { showToast } = useToast();
  const [cartItems, setCartItems] = useState([
    { ...MOCK_COURSES[0], qty: 1 },
    { ...MOCK_COURSES[1], qty: 1 },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = cartItems.length > 0 ? 10 : 0;
  const total = Math.max(0, subtotal - discount);

  const removeItem = (id: string, title: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast(`Removed "${title}" from cart`, 'info');
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    showToast('Processing checkout order...', 'info');
    setTimeout(() => {
      setCartItems([]);
      showToast('Payment successful! Your courses are now unlocked in your dashboard.', 'success');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar variant="light" />

      <main className="layout-container pt-32 pb-20 flex-1 font-satoshi">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
              Shopping Cart
            </span>
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950 mt-1">
              Your Course Cart ({cartItems.length})
            </h1>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Item list */}
              <div className="lg:col-span-8 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <Link
                          href={ROUTES.COURSE_DETAIL(item.slug)}
                          className="font-poppins font-semibold text-sm sm:text-base text-neutral-900 hover:text-primary-600 transition-colors line-clamp-1"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          by {item.creator.name} &bull; {item.level}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                      <span className="font-poppins font-bold text-lg text-primary-600">
                        ${item.price}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.title)}
                        className="p-2 text-neutral-400 hover:text-red-600 transition-colors cursor-pointer rounded-lg hover:bg-neutral-100"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4 bg-neutral-50 rounded-3xl p-6 border border-neutral-200 space-y-5">
                <h3 className="font-poppins font-bold text-lg text-neutral-950">
                  Order Summary
                </h3>

                <div className="space-y-3 text-xs text-neutral-600 border-b border-neutral-200 pb-4">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-neutral-900">${subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-600">
                    <span>Discount</span>
                    <span className="font-semibold">-${discount}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm font-bold text-neutral-900 pt-1">
                  <span>Total</span>
                  <span className="text-xl text-primary-600">${total}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-200 p-8 max-w-md mx-auto space-y-4">
              <ShoppingBag className="w-12 h-12 text-neutral-300 mx-auto" />
              <h3 className="font-bold text-lg text-neutral-900">Your shopping cart is empty</h3>
              <p className="text-xs text-neutral-500">
                Looks like you haven&apos;t added any courses to your cart yet.
              </p>
              <Link
                href={ROUTES.COURSES}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#cbfc01] text-black font-semibold text-xs shadow-md hover:brightness-95"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
