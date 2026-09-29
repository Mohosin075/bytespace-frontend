'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Logo } from '@/components/shared/logo';

interface NavbarProps {
  variant?: 'blue' | 'light';
}

export function Navbar({ variant = 'blue' }: NavbarProps) {
  const pathname = usePathname();
  const isBlue = variant === 'blue';

  const navLinks = [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'Courses', href: ROUTES.COURSES },
    { label: 'Creators', href: ROUTES.CREATORS },
  ];

  return (
    <header className={`w-full z-40 transition-colors duration-200 ${isBlue ? 'bg-transparent text-white' : 'bg-white text-neutral-900 border-b border-neutral-100'}`}>
      <div className="layout-container py-5 flex items-center justify-between">
        {/* Logo */}
        <Logo variant={isBlue ? 'light' : 'dark'} />

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-medium transition-all ${
                  isBlue
                    ? isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                    : isActive
                      ? 'text-primary-600 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Cart */}
        <div className="flex items-center space-x-6">
          <Link
            href={ROUTES.AUTH.LOGIN}
            className={`text-[15px] font-medium transition-colors ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Sign In
          </Link>

          <Link
            href={ROUTES.AUTH.REGISTER}
            className={`text-[14px] font-medium px-5 py-2 rounded-full transition-all duration-200 ${
              isBlue
                ? 'border border-white/40 text-white hover:bg-white/10 hover:border-white'
                : 'border border-neutral-300 text-neutral-800 hover:bg-neutral-100'
            }`}
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className={`p-2 transition-transform hover:scale-105 ${
              isBlue ? 'text-white hover:text-white/80' : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
