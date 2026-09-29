'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { HeroFloatingElements } from '@/components/home/hero-floating-elements';
import { HeroStage } from '@/components/home/hero-stage';
import { ROUTES } from '@/constants/routes';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="bg-hero-grid relative overflow-hidden text-white min-h-[780px]">
      <Navbar variant="blue" />

      {/* Floating 3D Assets */}
      <HeroFloatingElements />

      {/* Main Hero Content */}
      <div className="layout-container pt-10 text-center relative z-20">
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-[64px] leading-[1.12] max-w-4xl mx-auto tracking-tight">
          Get Access to Hundreds <br />
          Courses Available
        </h1>
        <p className="mt-5 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-[540px] mx-auto relative z-30">
          <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl">
            <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-neutral-800 placeholder:text-neutral-400 text-sm md:text-base focus:outline-none"
            />
            <Link
              href={ROUTES.COURSES}
              className="px-7 py-3 rounded-full bg-secondary-500 text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Search
            </Link>
          </div>
        </div>
      </div>

      {/* Stage Graphic */}
      <HeroStage />
    </section>
  );
}
