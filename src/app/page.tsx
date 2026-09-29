import Link from 'next/link';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-slate-50 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            ✨ Next.js App Router Architecture Blueprint
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Scalable & Feature-Driven <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Production Stack
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Built with TypeScript, Tailwind CSS, Zod validation, modular feature components, and standard Server Actions ready for your job task execution.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href={ROUTES.DASHBOARD.ROOT}>
              <Button variant="primary" size="lg">
                Go to Dashboard &rarr;
              </Button>
            </Link>
            <Link href={ROUTES.AUTH.LOGIN}>
              <Button variant="outline" size="lg">
                View Auth Flow
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
