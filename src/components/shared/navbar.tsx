'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Logo } from '@/components/shared/logo';

function ShoppingBagIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3.5" y="6.5" width="17" height="15" rx="2" />
      <path d="M8 9.5V6a4 4 0 0 1 8 0v3.5" />
    </svg>
  );
}

interface NavbarProps {
  variant?: 'blue' | 'light';
}

export function Navbar({ variant = 'blue' }: NavbarProps) {
  const pathname = usePathname();
  const isBlue = variant === 'blue';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'Courses', href: ROUTES.COURSES },
    { label: 'Creators', href: ROUTES.CREATORS },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled || mobileMenuOpen
          ? isBlue
            ? 'bg-[#0047FF]/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,15,80,0.3)] border-b border-white/15 h-16 sm:h-20'
            : 'bg-white/85 backdrop-blur-xl shadow-sm border-b border-neutral-200/80 h-16 sm:h-20'
          : isBlue
          ? 'bg-transparent border-b border-transparent h-20 sm:h-24 md:h-28 text-white'
          : 'bg-white/90 backdrop-blur-md border-b border-neutral-100 h-20 sm:h-24 text-neutral-900'
      }`}
    >
      <div className="layout-container h-full flex items-center justify-between relative">
        {/* Brand Logo */}
        <Logo
          variant={isBlue ? 'light' : 'dark'}
          className="transition-transform duration-200 active:scale-95"
        />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-poppins text-base font-normal tracking-normal transition-colors duration-200 relative py-1 ${
                  isBlue
                    ? isActive
                      ? 'text-white font-medium'
                      : 'text-white/90 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                    : isActive
                    ? 'text-primary-600 font-medium'
                    : 'text-neutral-600 hover:text-neutral-950 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Links & Cart */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          <Link
            href={ROUTES.AUTH.LOGIN}
            className={`font-poppins text-base font-normal sm:font-medium transition-colors duration-200 ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Sign In
          </Link>

          <Link
            href={ROUTES.AUTH.REGISTER}
            className={`font-poppins text-base font-normal sm:font-medium transition-colors duration-200 ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className={`p-1.5 transition-colors duration-200 rounded-full hover:bg-white/10 ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <ShoppingBagIcon className="w-6 h-6 stroke-[1.8]" />
          </Link>
        </div>

        {/* Mobile Hamburger / Cart */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className={`p-2 rounded-full transition-colors active:scale-95 ${
              isBlue ? 'text-white hover:bg-white/10' : 'text-neutral-700 hover:bg-neutral-100'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingBagIcon className="w-5.5 h-5.5 stroke-[1.8]" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`p-2 rounded-lg transition-colors focus:outline-none cursor-pointer active:scale-95 ${
              isBlue ? 'text-white hover:bg-white/10' : 'text-neutral-800 hover:bg-neutral-100'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-200" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Subtle Bottom Light Highlight Line on Scroll */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 pointer-events-none ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0047FF]/95 backdrop-blur-2xl border-b border-white/20 px-5 sm:px-6 py-6 flex flex-col gap-5 shadow-2xl text-white transition-all duration-300 origin-top ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-white transition-colors py-2.5 px-3.5 rounded-xl hover:bg-white/10 active:bg-white/15 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/90 hover:text-white transition-colors py-2.5 px-3.5 rounded-xl hover:bg-white/10 active:bg-white/15 flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <ShoppingBagIcon className="w-4 h-4 stroke-[1.8]" />
              <span>Cart</span>
            </div>
            <ChevronRight className="w-4 h-4 text-white/50" />
          </Link>
        </nav>

        <div className="h-px w-full bg-white/15 my-0.5" />

        <div className="flex flex-col gap-3">
          <Link
            href={ROUTES.AUTH.LOGIN}
            onClick={() => setMobileMenuOpen(false)}
            className="text-center w-full py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 active:scale-[0.99] transition-all"
          >
            Sign In
          </Link>
          <Link
            href={ROUTES.AUTH.REGISTER}
            onClick={() => setMobileMenuOpen(false)}
            className="text-center w-full py-3 rounded-full bg-[#D4FB20] text-black text-sm font-semibold hover:bg-[#c3ea1a] active:scale-[0.99] transition-all shadow-md shadow-[#D4FB20]/20"
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
}
