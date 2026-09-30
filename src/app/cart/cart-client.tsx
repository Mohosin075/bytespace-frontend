'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Trash2,
  ArrowRight,
  ShoppingBag,
  Heart,
  ShieldCheck,
  RefreshCw,
  Clock,
  Tag,
  Check,
  Star,
  Plus,
  Lock,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { MOCK_COURSES } from '@/constants/mock-data';
import { ROUTES } from '@/constants/routes';
import { useToast } from '@/context/toast-context';
import { useAuth } from '@/context/auth-context';

export default function CartClient() {
  const { showToast } = useToast();
  const { toggleWishlist, isWishlisted } = useAuth();

  const [cartItems, setCartItems] = useState([
    { ...MOCK_COURSES[0], qty: 1 },
    { ...MOCK_COURSES[1], qty: 1 },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; percent: number } | null>(null);

  // Recommendations: courses not currently in cart
  const recommendedCourses = MOCK_COURSES.filter(
    (c) => !cartItems.some((item) => item.id === c.id)
  ).slice(0, 3);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const promoDiscount = appliedPromo ? Math.round((subtotal * appliedPromo.percent) / 100) : 0;
  const baseDiscount = cartItems.length >= 2 ? 10 : 0;
  const totalDiscount = promoDiscount + baseDiscount;
  const total = Math.max(0, subtotal - totalDiscount);

  const removeItem = (id: string, title: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast(`Removed "${title}" from cart`, 'info');
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    const code = promoCode.trim().toUpperCase();
    if (code === 'BYTESPACE20' || code === 'SAVE20') {
      setAppliedPromo({ code, percent: 20 });
      showToast(`Promo code "${code}" applied! You saved 20%`, 'success');
    } else if (code === 'WELCOME10') {
      setAppliedPromo({ code, percent: 10 });
      showToast(`Promo code "${code}" applied! You saved 10%`, 'success');
    } else {
      showToast('Invalid promo code. Try "BYTESPACE20"', 'warning');
    }
  };

  const handleAddToCart = (course: (typeof MOCK_COURSES)[0]) => {
    setCartItems((prev) => [...prev, { ...course, qty: 1 }]);
    showToast(`Added "${course.title}" to cart!`, 'success');
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    showToast('Processing secure checkout...', 'info');
    setTimeout(() => {
      setCartItems([]);
      setAppliedPromo(null);
      showToast('Payment successful! Your courses are now unlocked in your dashboard.', 'success');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar variant="light" />

      <main className="layout-container pt-28 sm:pt-36 pb-20 flex-1 font-satoshi">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">
                <ShoppingBag className="w-4 h-4 text-primary-600" />
                <span>ByteSpace Cart</span>
              </div>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">
                Your Shopping Cart
              </h1>
            </div>
            <span className="text-sm font-medium text-neutral-500">
              {cartItems.length} {cartItems.length === 1 ? 'Course' : 'Courses'} in Cart
            </span>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Cart Items List */}
              <div className="lg:col-span-8 space-y-4">
                {cartItems.map((item) => {
                  const wishlisted = isWishlisted(item.id);
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-4 sm:p-6 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                    >
                      {/* Image + Title info */}
                      <div className="flex items-start sm:items-center gap-4 flex-1">
                        <div className="relative w-28 h-20 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-neutral-100 shrink-0 border border-neutral-200/60">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="space-y-1 min-w-0 flex-1">
                          <Link
                            href={ROUTES.COURSE_DETAIL(item.slug)}
                            className="font-poppins font-bold text-base sm:text-lg text-neutral-950 hover:text-primary-600 transition-colors line-clamp-1 leading-snug"
                          >
                            {item.title}
                          </Link>

                          <p className="text-xs text-neutral-500">
                            by{' '}
                            <span className="text-primary-600 font-medium">
                              {item.creator.name}
                            </span>{' '}
                            &bull; <span className="font-medium text-neutral-700">{item.level}</span>
                          </p>

                          <div className="flex items-center gap-3 text-xs text-neutral-500 pt-1">
                            <div className="flex items-center gap-1 font-semibold text-neutral-900">
                              <span>{item.rating.toFixed(1)}</span>
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            </div>
                            <span>&bull;</span>
                            <span>{item.lessonsCount} lessons</span>
                            <span>&bull;</span>
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Price & Actions */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-100 shrink-0 gap-3">
                        <span className="font-poppins font-bold text-xl text-primary-600">
                          ${item.price}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              const added = toggleWishlist(item.id);
                              showToast(
                                added
                                  ? `Moved "${item.title}" to Wishlist`
                                  : `Removed "${item.title}" from Wishlist`,
                                'info'
                              );
                            }}
                            className={`p-2 rounded-xl transition-all cursor-pointer border ${
                              wishlisted
                                ? 'bg-red-50 text-red-600 border-red-200'
                                : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border-neutral-200'
                            }`}
                            title={wishlisted ? 'Saved in Wishlist' : 'Save for later'}
                          >
                            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                          </button>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id, item.title)}
                            className="p-2 rounded-xl bg-neutral-50 hover:bg-red-50 text-neutral-400 hover:text-red-600 transition-colors cursor-pointer border border-neutral-200"
                            title="Remove course"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Benefits Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-600 shrink-0" />
                    <div>
                      <h5 className="font-bold text-xs text-neutral-900">Full Lifetime Access</h5>
                      <p className="text-[11px] text-neutral-500">Learn at your own pace</p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 flex items-center gap-3">
                    <RefreshCw className="w-5 h-5 text-primary-600 shrink-0" />
                    <div>
                      <h5 className="font-bold text-xs text-neutral-900">30-Day Guarantee</h5>
                      <p className="text-[11px] text-neutral-500">100% Money Back</p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary-600 shrink-0" />
                    <div>
                      <h5 className="font-bold text-xs text-neutral-900">Certified Completion</h5>
                      <p className="text-[11px] text-neutral-500">Share on LinkedIn & resume</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary Side Card */}
              <div className="lg:col-span-4 bg-neutral-50 rounded-3xl p-6 sm:p-7 border border-neutral-200 space-y-6 sticky top-28">
                <h3 className="font-poppins font-bold text-xl text-neutral-950 pb-2 border-b border-neutral-200">
                  Order Summary
                </h3>

                {/* Price Breakdown */}
                <div className="space-y-3 text-sm text-neutral-600">
                  <div className="flex items-center justify-between">
                    <span>Original Price ({cartItems.length} items)</span>
                    <span className="font-semibold text-neutral-900">${subtotal}</span>
                  </div>

                  {baseDiscount > 0 && (
                    <div className="flex items-center justify-between text-emerald-600">
                      <span>Bundle Discount</span>
                      <span className="font-semibold">-${baseDiscount}</span>
                    </div>
                  )}

                  {appliedPromo && (
                    <div className="flex items-center justify-between text-emerald-600">
                      <span>Promo ({appliedPromo.code})</span>
                      <span className="font-semibold">-${promoDiscount}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Taxes & Processing</span>
                    <span>$0.00</span>
                  </div>
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-2 pt-2 border-t border-neutral-200">
                  <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-primary-600" />
                    <span>Promotional Code</span>
                  </label>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="e.g. BYTESPACE20"
                      className="w-full px-4 py-2.5 rounded-full bg-white border border-neutral-300 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-full bg-neutral-950 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
                    >
                      Apply
                    </button>
                  </div>

                  {appliedPromo && (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold pt-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>{appliedPromo.percent}% promo discount active!</span>
                    </div>
                  )}
                </form>

                {/* Total Price & Checkout Button */}
                <div className="pt-4 border-t border-neutral-200 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-poppins font-bold text-lg text-neutral-950">Total</span>
                    <div className="text-right">
                      <span className="font-poppins font-extrabold text-2xl text-primary-600">
                        ${total}
                      </span>
                      {totalDiscount > 0 && (
                        <p className="text-[11px] text-emerald-600 font-medium">
                          You saved ${totalDiscount}!
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="w-full py-4 rounded-full bg-[#cbfc01] text-black font-extrabold text-sm sm:text-base hover:brightness-95 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400 pt-2">
                    <Lock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>256-Bit SSL Encrypted & Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Cart View */
            <div className="text-center py-16 bg-neutral-50 rounded-3xl border border-neutral-200 p-8 max-w-lg mx-auto space-y-5">
              <div className="w-16 h-16 rounded-full bg-neutral-200/80 flex items-center justify-center mx-auto text-neutral-400">
                <ShoppingBag className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-poppins font-bold text-xl text-neutral-900">
                  Your cart is empty
                </h3>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                  Looks like you haven&apos;t added any courses yet. Explore our courses catalog to get started.
                </p>
              </div>

              <Link
                href={ROUTES.COURSES}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#cbfc01] text-black font-bold text-sm shadow-md hover:brightness-95 transition-all active:scale-95"
              >
                <span>Browse Courses Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Recommended Courses Section */}
          {recommendedCourses.length > 0 && (
            <div className="pt-12 border-t border-neutral-200 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-neutral-950">
                    Frequently Bought Together
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Recommended top-rated courses to accelerate your learning journey.
                  </p>
                </div>
                <Link
                  href={ROUTES.COURSES}
                  className="text-xs font-semibold text-primary-600 hover:underline inline-flex items-center gap-1"
                >
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl p-4 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative rounded-xl overflow-hidden aspect-[1.6/1] bg-neutral-100 mb-3">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <Link
                        href={ROUTES.COURSE_DETAIL(course.slug)}
                        className="font-poppins font-bold text-sm text-neutral-950 hover:text-primary-600 transition-colors line-clamp-1"
                      >
                        {course.title}
                      </Link>

                      <p className="text-xs text-neutral-500 mt-0.5">by {course.creator.name}</p>

                      <div className="flex items-center justify-between pt-3 mt-2 border-t border-neutral-100">
                        <span className="font-poppins font-bold text-base text-primary-600">
                          ${course.price}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleAddToCart(course)}
                          className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-[#cbfc01] text-neutral-900 hover:text-black font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
