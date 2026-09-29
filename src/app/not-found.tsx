'use client';

import Link from 'next/link';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ROUTES } from '@/constants/routes';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 404 Hero Section with Blueprint Grid */}
      <section className="bg-hero-grid relative text-white pb-24 pt-2 flex flex-col flex-1 justify-between overflow-hidden">
        <Navbar variant="blue" />

        <div className="layout-container py-16 text-center relative z-10 flex flex-col items-center justify-center my-auto">
          {/* Giant 404 in Lime Gradient */}
          <div className="relative select-none pointer-events-none">
            <span className="font-poppins font-black text-[130px] sm:text-[200px] md:text-[280px] leading-none tracking-tight bg-gradient-to-b from-[#d4fb20] via-[#cbfc01] to-[#6a8902]/40 bg-clip-text text-transparent opacity-90 drop-shadow-2xl">
              404
            </span>
          </div>

          {/* Heading Overlapping / Below */}
          <div className="-mt-6 sm:-mt-12 md:-mt-16 space-y-4 max-w-2xl mx-auto">
            <h1 className="font-poppins font-bold text-3xl sm:text-5xl md:text-[54px] text-white leading-tight">
              The page you are looking <br className="hidden sm:inline" /> for doesn&apos;t exist
            </h1>

            <p className="text-white/80 text-sm sm:text-base font-normal">
              Try to use a correct url or go back to homepage to start again
            </p>

            <div className="pt-6">
              <Link
                href={ROUTES.HOME}
                className="inline-block px-8 py-3.5 rounded-full bg-secondary-500 text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-xl"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-6" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
