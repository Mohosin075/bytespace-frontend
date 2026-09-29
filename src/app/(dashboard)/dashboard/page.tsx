import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Dashboard Overview</h1>
          <p className="text-sm text-slate-500">Welcome to your high-performance Next.js application workspace.</p>
        </div>
        <Button variant="primary" size="md">
          + New Project
        </Button>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <p className="text-xs text-slate-500 font-medium">Total Requests</p>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">128,430</p>
          <p className="text-xs text-emerald-600 font-medium">+12.5% from last month</p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <p className="text-xs text-slate-500 font-medium">Active Users</p>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">4,210</p>
          <p className="text-xs text-emerald-600 font-medium">+8.2% new signups</p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 sm:col-span-2 lg:col-span-1">
          <p className="text-xs text-slate-500 font-medium">Server Uptime</p>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">99.98%</p>
          <p className="text-xs text-indigo-600 font-medium">Optimal performance</p>
        </div>
      </div>
    </div>
  );
}
