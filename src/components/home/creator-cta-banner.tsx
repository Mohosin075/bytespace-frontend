import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { DecorativeSquiggle } from '@/components/ui/decorative-squiggle';

export function CreatorCtaBanner() {
  return (
    <section className="bg-hero-grid relative overflow-hidden py-24 text-white text-center">
      {/* Floating 3D Shapes on Creator Banner */}
      {/* Mid-Left: White wavy ribbon */}
      <div className="absolute top-1/3 left-4 xl:left-12 w-24 h-28 pointer-events-none z-10 -rotate-12 opacity-90">
        <svg viewBox="0 0 100 120" fill="none" className="w-full h-full drop-shadow-xl">
          <path d="M 15 20 Q 90 25 70 60 Q 15 95 80 105" stroke="#ffffff" strokeWidth="22" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom-Left: White torus / donut ring */}
      <div className="absolute -bottom-12 -left-8 w-44 h-44 pointer-events-none z-10 -rotate-12 opacity-95">
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full drop-shadow-2xl">
          <path d="M 120 16 A 104 104 0 1 0 120 224 A 104 104 0 1 0 120 16 M 120 64 A 56 56 0 1 1 120 176 A 56 56 0 1 1 120 64" fill="#ffffff" />
        </svg>
      </div>

      {/* Top-Right: Lime pyramid / cone */}
      <div className="absolute top-6 right-16 xl:right-32 w-24 h-28 pointer-events-none z-10 rotate-12 opacity-90">
        <svg viewBox="0 0 120 140" fill="none" className="w-full h-full drop-shadow-xl">
          <polygon points="60,8 114,124 60,134" fill="#cbfc01" />
          <polygon points="60,8 60,134 6,104" fill="#8cb400" />
        </svg>
      </div>

      {/* Mid-Right: White vertical cylinder */}
      <div className="absolute top-1/4 -right-6 xl:right-6 w-24 h-48 pointer-events-none z-10 rotate-6 opacity-90">
        <svg viewBox="0 0 120 240" fill="none" className="w-full h-full drop-shadow-xl">
          <rect x="10" y="10" width="100" height="220" rx="50" fill="#ffffff" />
        </svg>
      </div>

      {/* Bottom-Right: Lime wavy squiggle ribbon */}
      <div className="absolute -bottom-8 right-12 xl:right-24 w-32 h-36 pointer-events-none z-10 rotate-12 opacity-95">
        <DecorativeSquiggle />
      </div>

      <div className="layout-container max-w-4xl mx-auto relative z-20 space-y-6">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>

        <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="pt-4">
          <Link
            href={ROUTES.AUTH.REGISTER}
            className="inline-block px-9 py-3.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-2xl"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
