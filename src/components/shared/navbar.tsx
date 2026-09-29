import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { SITE_CONFIG } from '@/constants/site-config';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.HOME} className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href={ROUTES.HOME} className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link href={ROUTES.DASHBOARD.ROOT} className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link href={ROUTES.AUTH.LOGIN}>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href={ROUTES.AUTH.REGISTER}>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
