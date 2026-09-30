'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/shared/logo';
import { AuthVisualStack } from '@/components/shared/auth-visual-stack';
import { ROUTES } from '@/constants/routes';

import { useAuth } from '@/context/auth-context';
import { useToast } from '@/context/toast-context';

export default function LoginClient() {
  const router = useRouter();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState('designer@example.com');
  const [password, setPassword] = useState('********');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(email, 'Jamie Davis');
      showToast('Welcome back, Jamie Davis!', 'success');
      setLoading(false);
      router.push(ROUTES.DASHBOARD.ROOT);
    }, 500);
  };

  return (
    <div className="bg-hero-grid min-h-screen text-white relative flex flex-col justify-between p-6 sm:p-10 lg:p-14">
      {/* Top Left Logo Mark */}
      <div className="relative z-20">
        <Logo variant="light" iconOnly />
      </div>

      {/* Main Content Grid */}
      <main className="relative z-10 layout-container my-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Decorative Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <AuthVisualStack
              title="Sign in with ease"
              subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
            />
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-2xl max-w-lg w-full text-neutral-900 border border-white/20">
              <span className="text-primary-600 font-medium text-sm">Sign In</span>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950 mt-1">
                Welcome Back
              </h1>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="designer@example.com"
                    className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 text-neutral-800 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="********"
                    className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 text-neutral-800 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </button>
                </div>
              </form>

              {/* Or Divider */}
              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200" />
                </div>
                <span className="relative bg-white px-4 text-xs text-neutral-400 font-medium">
                  or
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="flex items-center justify-center gap-4">
                {/* Facebook Button */}
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer text-neutral-900"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer text-neutral-900 font-bold"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V7.4h6.887C19.29 8.23 19.4 9.17 19.4 10.23c0 4.095-2.74 7.005-7.16 7.005-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5c2.02 0 3.72.74 5.02 1.96l-2.04 1.96c-.55-.53-1.52-1.15-2.98-1.15-2.56 0-4.65 2.12-4.65 4.73s2.09 4.73 4.65 4.73c2.97 0 4.08-2.14 4.25-3.24H12.24v-.445z" />
                  </svg>
                </button>
              </div>

              {/* Bottom text */}
              <p className="mt-8 text-center text-xs text-neutral-600">
                New user?{' '}
                <Link
                  href={ROUTES.AUTH.REGISTER}
                  className="text-primary-600 hover:underline font-semibold"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer spacer */}
      <div className="relative z-10" />
    </div>
  );
}
