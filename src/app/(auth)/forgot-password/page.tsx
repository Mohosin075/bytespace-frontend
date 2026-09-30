'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { AuthVisualStack } from '@/components/shared/auth-visual-stack';
import { ROUTES } from '@/constants/routes';
import { useToast } from '@/context/toast-context';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      showToast('Password reset link sent to your email!', 'success');
    }
  };

  return (
    <div className="bg-hero-grid min-h-screen text-white relative flex flex-col justify-between p-4 sm:p-8 lg:p-12 font-satoshi">
      <div className="relative z-20 pt-2 pl-2 sm:pt-0 sm:pl-0">
        <Logo variant="light" iconOnly />
      </div>

      <main className="relative z-10 layout-container my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <AuthVisualStack
              title="Reset Your Password"
              subtitle="Enter your registered email address and we will send you instructions to reset your password."
            />
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl max-w-lg w-full text-neutral-900 border border-white/20">
              <span className="text-primary-600 font-medium text-sm">Account Recovery</span>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950 mt-1">
                Forgot Password?
              </h1>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2">
                      Email Address
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

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all cursor-pointer shadow-md"
                    >
                      Send Reset Link
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-8 space-y-4 p-6 bg-lime-50 border border-lime-200 rounded-2xl text-center">
                  <p className="font-poppins font-bold text-base text-neutral-900">
                    Check your inbox!
                  </p>
                  <p className="text-xs text-neutral-600">
                    We sent password recovery instructions to <strong className="text-neutral-900">{email}</strong>.
                  </p>
                </div>
              )}

              <p className="mt-10 text-center text-xs text-neutral-600">
                Remember your password?{' '}
                <Link
                  href={ROUTES.AUTH.LOGIN}
                  className="text-primary-600 hover:underline font-semibold"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10" />
    </div>
  );
}
