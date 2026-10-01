import React from 'react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Dashboard — ByteSpace',
  description: 'Manage your enrolled courses, learning progress, wishlist, and profile settings on ByteSpace.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-950 font-satoshi antialiased">
      <Navbar variant="blue" />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
