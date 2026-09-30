'use client';

import Link from 'next/link';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ROUTES } from '@/constants/routes';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 404 Hero Section with Blueprint Grid */}
      <section className="bg-hero-grid relative text-white pb-20 sm:pb-28 pt-28 sm:pt-36 md:pt-40 flex flex-col flex-1 justify-between overflow-hidden">
        <Navbar variant="blue" />

        <div className="layout-container py-8 sm:py-12 text-center relative z-10 flex flex-col items-center justify-center my-auto">
          {/* Giant 404 in Lime Gradient */}
          <div className="relative select-none pointer-events-none mb-2 sm:mb-4">
            <span className="font-poppins font-black text-[120px] sm:text-[180px] md:text-[240px] leading-none tracking-tight bg-gradient-to-b from-[#d4fb20] via-[#cbfc01] to-[#6a8902]/40 bg-clip-text text-transparent opacity-90 drop-shadow-2xl">
              404
            </span>
          </div>

          {/* Heading Below */}
          <div className="-mt-8 sm:-mt-14 md:-mt-20 space-y-6 max-w-3xl mx-auto px-4">
            <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[62px] text-white leading-[120%] tracking-[-0.72px] text-center">
              The page you are looking for doesn&apos;t exist
            </h1>

            <p className="text-white/80 text-sm sm:text-base md:text-lg font-normal max-w-md mx-auto">
              Try to use a correct url or go back to homepage to start again
            </p>

            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={ROUTES.HOME}
                className="px-8 py-3.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-xl"
              >
                Back to Home
              </Link>
              <Link
                href={ROUTES.COURSES}
                className="px-8 py-3.5 rounded-full border border-white/30 hover:border-white text-white font-semibold text-sm transition-all"
              >
                Browse Courses
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
