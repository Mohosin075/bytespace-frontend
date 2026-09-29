import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = {
  title: 'Dashboard | ByteSpace',
  description: 'Manage your projects and overview',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 flex flex-col justify-between hidden md:flex">
        <div className="space-y-6">
          <Link href={ROUTES.HOME} className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            ByteSpace
          </Link>
          <nav className="space-y-1">
            <Link
              href={ROUTES.DASHBOARD.ROOT}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 font-medium text-sm"
            >
              <span>Overview</span>
            </Link>
            <Link
              href={ROUTES.DASHBOARD.SETTINGS}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors"
            >
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              JD
            </div>
            <div>
              <p className="text-xs font-semibold">John Doe</p>
              <p className="text-[10px] text-slate-500">Developer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 flex items-center justify-between md:justify-end">
          <span className="md:hidden font-bold">ByteSpace Dashboard</span>
          <div className="flex items-center space-x-4 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 font-medium">
              System Online
            </span>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
