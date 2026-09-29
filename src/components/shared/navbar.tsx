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
                className={`font-satoshi text-[16px] leading-[160%] tracking-normal transition-all ${
                  isBlue
                    ? isActive
                      ? 'text-white font-bold'
                      : 'text-white/80 hover:text-white font-normal'
                    : isActive
                      ? 'text-primary-600 font-bold'
                      : 'text-neutral-600 hover:text-neutral-950 font-normal'
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
            className={`font-satoshi font-normal text-[16px] leading-[160%] tracking-normal transition-colors ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Sign In
          </Link>

          <Link
            href={ROUTES.AUTH.REGISTER}
            className={`font-satoshi font-normal text-[16px] leading-[160%] tracking-normal transition-colors ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'
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
