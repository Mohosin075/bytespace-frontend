'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { ROUTES } from '@/constants/routes';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-white text-neutral-900 border-t border-neutral-200/80 pt-16 pb-12">
      <div className="layout-container">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Newsletter Left Side */}
          <div className="lg:col-span-6 space-y-6">
            <Logo variant="dark" />

            <p className="text-neutral-700 text-[15px] max-w-md">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-12 px-6 rounded-full border border-neutral-300 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-secondary-500 text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Search'}
              </button>
            </form>

            <p className="text-neutral-500 text-[12px] leading-relaxed max-w-md">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Links Right Side */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[14px]">
            {/* Column 1 */}
            <div className="space-y-3">
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Featured Courses
              </Link>
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Featured Categories
              </Link>
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Business
              </Link>
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                IT
              </Link>
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Development
              </Link>
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Marketing
              </Link>
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Photography
              </Link>
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Finance
              </Link>
              <Link href={ROUTES.COURSES} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <Link href={ROUTES.CREATORS} className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Become a Creator
              </Link>
              <Link href="#" className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Affiliate Program
              </Link>
              <Link href="#" className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Contact
              </Link>
              <Link href="#" className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                Help
              </Link>
              <Link href="#" className="block text-neutral-700 hover:text-neutral-950 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-neutral-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neutral-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-neutral-800 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
