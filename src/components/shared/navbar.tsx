'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronRight, LogOut, LayoutDashboard } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Logo } from '@/components/shared/logo';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/context/toast-context';
import { useCart } from '@/context/cart-context';
import { useScrolled, useMobileMenu } from '@/hooks/use-navbar';

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

const NAV_LINKS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Courses', href: ROUTES.COURSES },
  { label: 'Creators', href: ROUTES.CREATORS },
] as const;

export function Navbar({ variant = 'blue' }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoggedIn, logout } = useAuth();
  const { showToast } = useToast();
  const { totalItems: cartCount } = useCart();

  const isBlue = variant === 'blue';
  const scrolled = useScrolled(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useMobileMenu();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isCartActive = pathname.startsWith(ROUTES.CART);

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully', 'info');
    setUserDropdownOpen(false);
    router.push(ROUTES.HOME);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full h-20 sm:h-22 transition-all duration-300 ease-in-out ${
        scrolled || mobileMenuOpen
          ? isBlue
            ? 'bg-primary-600/85 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,15,80,0.3)] border-b border-white/15'
            : 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-neutral-200/80'
          : isBlue
          ? 'bg-transparent border-b border-transparent text-white'
          : 'bg-white/95 backdrop-blur-md border-b border-neutral-100 text-neutral-900'
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
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-satoshi text-base tracking-normal transition-all duration-200 relative py-1.5 px-1 ${
                  isBlue
                    ? isActive
                      ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary-500 after:rounded-full after:shadow-[0_0_8px_rgba(203,252,1,0.6)]'
                      : 'text-white/80 hover:text-white font-normal after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full'
                    : isActive
                    ? 'text-primary-600 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 after:rounded-full'
                    : 'text-neutral-600 hover:text-neutral-950 font-normal after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Links & Cart */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1 rounded-full border border-white/20 hover:border-white/40 transition-colors cursor-pointer"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white">
                  <Image
                    src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80'}
                    alt={user?.name || 'User Avatar'}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <span className={`text-sm font-semibold pr-2 ${isBlue ? 'text-white' : 'text-neutral-900'}`}>
                  {user?.name.split(' ')[0]}
                </span>
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-neutral-100 py-2 z-50 text-neutral-900">
                  <div className="px-4 py-2 border-b border-neutral-100">
                    <p className="font-semibold text-xs text-neutral-900">{user?.name}</p>
                    <p className="text-[10px] text-neutral-500 truncate">{user?.email}</p>
                  </div>
                  <Link
                    href={ROUTES.DASHBOARD.ROOT}
                    onClick={() => setUserDropdownOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-medium transition-colors ${
                      pathname.startsWith(ROUTES.DASHBOARD.ROOT)
                        ? 'bg-primary-50 text-primary-600 font-semibold'
                        : 'hover:bg-neutral-50 text-neutral-700'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 text-primary-600" />
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href={ROUTES.AUTH.LOGIN}
                className={`font-satoshi text-base font-normal sm:font-medium transition-colors duration-200 ${
                  isBlue ? 'text-white/90 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'
                }`}
              >
                Sign In
              </Link>

              <Link
                href={ROUTES.AUTH.REGISTER}
                className={`font-satoshi text-base font-normal sm:font-medium transition-colors duration-200 ${
                  isBlue ? 'text-white/90 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'
                }`}
              >
                Join Us
              </Link>
            </>
          )}

          <Link
            href={ROUTES.CART}
            aria-label={`Shopping Cart (${cartCount} items)`}
            className={`p-1.5 transition-colors duration-200 rounded-full relative ${
              isBlue
                ? isCartActive
                  ? 'text-secondary-500 bg-white/10 ring-1 ring-secondary-500/50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                : isCartActive
                ? 'text-primary-600 bg-primary-50 ring-1 ring-primary-500/30'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            <ShoppingBagIcon className="w-6 h-6 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center animate-scale-in">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger / Cart */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={ROUTES.CART}
            aria-label={`Shopping Cart (${cartCount} items)`}
            className={`p-2 rounded-full transition-colors active:scale-95 relative ${
              isBlue
                ? isCartActive
                  ? 'text-secondary-500 bg-white/15'
                  : 'text-white hover:bg-white/10'
                : isCartActive
                ? 'text-primary-600 bg-primary-50'
                : 'text-neutral-700 hover:bg-neutral-100'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingBagIcon className="w-5.5 h-5.5 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-primary-600/95 backdrop-blur-2xl border-b border-white/20 px-5 sm:px-6 py-6 flex flex-col gap-5 shadow-2xl text-white transition-all duration-300 origin-top ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-all py-2.5 px-3.5 rounded-xl flex items-center justify-between ${
                  isActive
                    ? 'bg-white/20 text-white font-semibold border-l-4 border-secondary-500 shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-secondary-500 font-bold' : 'text-white/50'}`} />
              </Link>
            );
          })}
          {isLoggedIn && (
            <Link
              href={ROUTES.DASHBOARD.ROOT}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-all py-2.5 px-3.5 rounded-xl flex items-center justify-between ${
                pathname.startsWith(ROUTES.DASHBOARD.ROOT)
                  ? 'bg-white/20 text-white font-semibold border-l-4 border-secondary-500 shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>Dashboard</span>
              <ChevronRight className={`w-4 h-4 ${pathname.startsWith(ROUTES.DASHBOARD.ROOT) ? 'text-secondary-500 font-bold' : 'text-white/50'}`} />
            </Link>
          )}
        </nav>

        <div className="h-px w-full bg-white/15 my-0.5" />

        <div className="flex flex-col gap-3">
          {isLoggedIn ? (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogout();
              }}
              className="text-center w-full py-3 rounded-full bg-red-600 text-white text-sm font-semibold transition-all cursor-pointer"
            >
              Log Out ({user?.name.split(' ')[0]})
            </button>
          ) : (
            <>
              <Link
                href={ROUTES.AUTH.LOGIN}
                onClick={() => setMobileMenuOpen(false)}
                className="text-center w-full py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-all"
              >
                Sign In
              </Link>
              <Link
                href={ROUTES.AUTH.REGISTER}
                onClick={() => setMobileMenuOpen(false)}
                className="text-center w-full py-3 rounded-full bg-secondary-500 text-black text-sm font-semibold hover:brightness-95 transition-all shadow-md"
              >
                Join Us
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
