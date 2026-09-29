import { LoginForm } from '@/features/auth/components/login-form';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = {
  title: 'Sign In | ByteSpace',
  description: 'Sign in to access your ByteSpace dashboard',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col items-center">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Welcome Back</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Enter your credentials to access your account</p>
        </div>

        <LoginForm />

        <p className="mt-6 text-xs text-slate-500 text-center">
          Don't have an account?{' '}
          <Link href={ROUTES.AUTH.REGISTER} className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
