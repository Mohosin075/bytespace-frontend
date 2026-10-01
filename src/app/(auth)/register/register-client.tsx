'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/shared/logo';
import { AuthVisualStack } from '@/components/shared/auth-visual-stack';
import { ROUTES } from '@/constants/routes';

import { useAuth } from '@/context/auth-context';
import { useToast } from '@/context/toast-context';
import { registerSchema } from '@/lib/validations/auth-schema';

export default function RegisterClient() {
  const router = useRouter();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [fullName, setFullName] = useState('Jamie Davis');
  const [email, setEmail] = useState('designer@example.com');
  const [password, setPassword] = useState('********');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = registerSchema.safeParse({ name: fullName, email, password });
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string; password?: string } = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as 'name' | 'email' | 'password';
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      showToast('Please fix the errors in the form', 'warning');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login(email, fullName);
      showToast(`Welcome to ByteSpace, ${fullName}! Your account has been created.`, 'success');
      setLoading(false);
      router.push(ROUTES.DASHBOARD.ROOT);
    }, 500);
  };

  return (
    <div className="bg-hero-grid min-h-screen text-white relative flex flex-col justify-between p-4 sm:p-8 lg:p-12">
      {/* Top Left Logo Mark */}
      <div className="relative z-20 pt-2 pl-2 sm:pt-0 sm:pl-0">
        <Logo variant="light" iconOnly />
      </div>

      {/* Main Content Grid */}
      <main className="relative z-10 layout-container my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Decorative Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <AuthVisualStack
              title="Sign up and come in"
              subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
            />
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl max-w-lg w-full text-neutral-900 border border-white/20">
              <span className="text-primary-600 font-medium text-sm">Create an Account</span>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950 mt-1">
                Welcome to ByteSpace
              </h1>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Jamie Davis"
                    className={`w-full px-5 py-3.5 rounded-xl border ${errors.name ? 'border-red-500' : 'border-neutral-200'} text-neutral-800 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

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
                    className={`w-full px-5 py-3.5 rounded-xl border ${errors.email ? 'border-red-500' : 'border-neutral-200'} text-neutral-800 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
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
                    className={`w-full px-5 py-3.5 rounded-xl border ${errors.password ? 'border-red-500' : 'border-neutral-200'} text-neutral-800 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors`}
                  />
                  {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Continue'}
                  </button>
                </div>
              </form>

              {/* Bottom text */}
              <p className="mt-14 text-center text-xs text-neutral-600">
                Already have an account?{' '}
                <Link
                  href={ROUTES.AUTH.LOGIN}
                  className="text-primary-600 hover:underline font-semibold"
                >
                  Login
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
