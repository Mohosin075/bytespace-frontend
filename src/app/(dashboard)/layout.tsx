import React from 'react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Dashboard — ByteSpace',
  description: 'Manage your enrolled courses, learning progress, wishlist, and profile settings on ByteSpace.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-950 font-satoshi antialiased">
      <Navbar variant="light" />
      <div className="pt-24 sm:pt-28 flex-1">
        <main className="layout-container py-8 sm:py-12 flex-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
