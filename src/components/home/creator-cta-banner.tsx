import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';

export function CreatorCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0D52FE] py-20 sm:py-24 md:py-28 text-white text-center">
      {/* ── Background Blueprint Grid Lines ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── FLOATING 3D DECORATIVE ELEMENTS ── */}

      {/* 1. Top-Left: Lime 3D Coiled Spring Ribbon */}
      <div className="absolute -top-8 -left-10 sm:-top-6 sm:-left-4 md:left-0 lg:left-4 w-44 sm:w-60 md:w-72 lg:w-80 pointer-events-none z-10 -rotate-12">
        <Image
          src="/growth/spring-3d-lime.png"
          alt="3D Lime Spring"
          width={360}
          height={360}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* 2. Upper-Left (Middle): White 3D Wavy Spring Ribbon */}
      <div className="absolute top-[12%] left-[15%] sm:left-[16%] md:left-[18%] w-16 sm:w-24 md:w-28 lg:w-32 pointer-events-none z-10 -rotate-12">
        <Image
          src="/hero/hero-3d-white-wave.svg"
          alt="3D White Wave Spring"
          width={140}
          height={140}
          className="w-full h-auto drop-shadow-xl"
        />
      </div>

      {/* 3. Bottom-Left (Far Edge): Smooth White 3D Cone */}
      <div className="absolute -bottom-6 -left-6 sm:bottom-0 sm:-left-2 md:left-2 w-28 sm:w-36 md:w-44 lg:w-48 pointer-events-none z-10 rotate-6">
        <Image
          src="/hero/hero-3d-white-pyramid.svg"
          alt="3D White Cone"
          width={200}
          height={200}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* 4. Bottom-Left (Center Bottom): Lime 3D Torus Ring */}
      <div className="absolute -bottom-16 left-[6%] sm:left-[8%] md:left-[10%] w-48 sm:w-64 md:w-80 lg:w-96 pointer-events-none z-10 -rotate-12">
        {/* Render bright lime torus shape */}
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="limeTorusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EBFF00" />
              <stop offset="60%" stopColor="#CBFC01" />
              <stop offset="100%" stopColor="#9ACD00" />
            </linearGradient>
          </defs>
          <path
            d="M 120 16 A 104 104 0 1 0 120 224 A 104 104 0 1 0 120 16 M 120 64 A 56 56 0 1 1 120 176 A 56 56 0 1 1 120 64"
            fill="url(#limeTorusGrad)"
          />
        </svg>
      </div>

      {/* 5. Top-Right: Lime 3D Pyramid */}
      <div className="absolute top-[8%] right-[16%] sm:right-[18%] md:right-[20%] w-20 sm:w-28 md:w-36 lg:w-40 pointer-events-none z-10 rotate-12">
        <svg viewBox="0 0 140 150" fill="none" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="pyrFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5FF6A" />
              <stop offset="100%" stopColor="#CBFC01" />
            </linearGradient>
            <linearGradient id="pyrSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B2E000" />
              <stop offset="100%" stopColor="#84AD00" />
            </linearGradient>
          </defs>
          <polygon points="70,10 130,120 70,140" fill="url(#pyrFront)" />
          <polygon points="70,10 70,140 10,100" fill="url(#pyrSide)" />
        </svg>
      </div>

      {/* 6. Mid/Top-Right (Far Edge): Large Smooth White 3D Cylinder / Pillow */}
      <div className="absolute top-[10%] -right-16 sm:-right-10 md:right-[-20px] lg:right-2 w-44 sm:w-60 md:w-76 lg:w-88 pointer-events-none z-10 rotate-[24deg]">
        <svg viewBox="0 0 180 320" fill="none" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="whiteCylGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F0F4FF" />
              <stop offset="100%" stopColor="#D5E0FE" />
            </linearGradient>
          </defs>
          <rect x="20" y="20" width="140" height="280" rx="70" fill="url(#whiteCylGrad)" />
        </svg>
      </div>

      {/* 7. Bottom-Right: Lime 3D Coiled Spring */}
      <div className="absolute -bottom-14 right-[3%] sm:right-[6%] md:right-[8%] w-44 sm:w-60 md:w-76 lg:w-88 pointer-events-none z-10 rotate-[15deg]">
        <Image
          src="/growth/spring-3d-lime-alt.png"
          alt="3D Lime Spring Alt"
          width={360}
          height={360}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* ── CENTER CONTENT ── */}
      <div className="layout-container max-w-4xl mx-auto relative z-20 px-4 space-y-6">
        <h2 className="font-poppins font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[48px] tracking-tight leading-[1.18] text-white">
          Unlock Your Potential as a <br className="hidden sm:inline" /> Creator with ByteSpace
        </h2>

        <p className="font-satoshi font-normal text-white/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="pt-2">
          <Link
            href={ROUTES.AUTH.REGISTER}
            className="inline-block px-8 py-3.5 rounded-full bg-[#CBFC01] text-black font-satoshi font-semibold text-sm sm:text-base hover:bg-[#b8e600] active:scale-95 transition-all shadow-xl"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}

