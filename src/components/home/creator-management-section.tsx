'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Star } from 'lucide-react';
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-header';

export function CreatorManagementSection() {
  const studentAvatars = [
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
  ];

  const creatorFeatures = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* ── Ambient Radial Glows (matching project design tokens) ── */}
      {/* Top-Left Lime Accent: #CBFC01 at 50% opacity */}
      <div
        className="absolute -top-16 -left-32 w-162.5 h-162.5 rounded-full pointer-events-none select-none blur-[90px]"
        style={{
          background:
            'radial-gradient(circle, rgba(203, 252, 1, 0.5) 0%, rgba(203, 252, 1, 0.2) 53%, rgba(203, 252, 1, 0.05) 75%, rgba(203, 252, 1, 0) 100%)',
        }}
      />

      {/* Top-Right Blue Accent: #003BE2 at 8% opacity */}
      <div
        className="absolute top-0 -right-24 w-150 h-150 rounded-full pointer-events-none select-none blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.04) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0) 100%)',
        }}
      />

      {/* Bottom-Left Lime Accent: #CBFC01 at 40% opacity */}
      <div
        className="absolute bottom-[5%] -left-28 w-150 h-150 rounded-full pointer-events-none select-none blur-[90px]"
        style={{
          background:
            'radial-gradient(circle, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.23) 53%, rgba(203, 252, 1, 0.06) 75%, rgba(203, 252, 1, 0) 100%)',
        }}
      />

      {/* Bottom-Right Blue Accent: #003BE2 at 24% opacity */}
      <div
        className="absolute -bottom-24 -right-28 w-175 h-175 rounded-full pointer-events-none select-none blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.12) 53%, rgba(0, 59, 226, 0.03) 75%, rgba(0, 59, 226, 0) 100%)',
        }}
      />

      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Visual Column (Left on desktop) */}
          <div className="order-2 lg:order-1 relative w-full max-w-140 mx-auto min-h-110 sm:min-h-130 flex items-center justify-center">
            {/* Green 3D squiggle icon behind creator */}
            <div className="absolute top-[28%] right-2 sm:right-6 w-[28%] sm:w-[32%] z-0 pointer-events-none select-none">
              <Image
                src="/home/growth/person2icon1.png"
                alt="Shape"
                width={217}
                height={216}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Creator character */}
            <div className="relative z-10 w-[78%] sm:w-[82%] mx-auto pointer-events-none select-none">
              <Image
                src="/home/growth/person2.svg"
                alt="Creator with tablet"
                width={579}
                height={719}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Total Revenue badge */}
            <div className="absolute top-[8%] left-[2%] sm:left-[4%] z-20 bg-[#0052FE] text-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-blue-400/30 w-37.5 sm:w-42.5">
              <div className="font-satoshi text-[11px] sm:text-xs text-white/90 font-medium">Total Revenue</div>
              <div className="font-satoshi text-[9px] text-white/60 font-normal">July 1-28</div>
              <div className="font-satoshi text-lg sm:text-xl font-bold text-white mt-1">$120.29</div>
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-2.5 overflow-hidden">
                <div className="bg-[#CBFC01] h-full rounded-full w-[70%]" />
              </div>
            </div>

            {/* Year to Date badge */}
            <div className="absolute top-[32%] left-[2%] sm:left-[4%] z-20 bg-[#0052FE] text-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-blue-400/30 w-37.5 sm:w-42.5">
              <div className="font-satoshi text-[11px] sm:text-xs text-white/90 font-medium">Year to Date</div>
              <div className="font-satoshi text-[9px] text-white/60 font-normal">2023</div>
              <div className="font-satoshi text-lg sm:text-xl font-bold text-white mt-1">$1,200.38</div>
              <div className="mt-2">
                <span className="font-satoshi bg-[#CBFC01] text-black text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">+12$</span>
              </div>
            </div>

            {/* Happy Students card */}
            <div className="absolute bottom-[16%] sm:bottom-[18%] right-[3%] sm:right-[6%] lg:right-[8%] z-20 bg-white rounded-2xl p-4 sm:p-5 shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-neutral-100">
              <h4 className="font-satoshi font-bold text-neutral-950 text-sm sm:text-base leading-tight">Happy Students</h4>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 mt-1">
                <span className="font-satoshi">4.5</span>
                <span className="font-satoshi text-neutral-400 font-normal text-xs">(240)</span>
                <Star className="size-3.5 fill-[#FFB800] text-[#FFB800]" />
              </div>
              <div className="flex items-center mt-3">
                {studentAvatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    style={{ zIndex: idx + 1 }}
                    className={`relative size-7 sm:size-8 rounded-full overflow-hidden border border-white ${idx > 0 ? "-ml-3 sm:-ml-3.5" : ""}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={avatar} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div
                  style={{ zIndex: 10 }}
                  className="font-satoshi relative -ml-3 sm:-ml-3.5 size-7 sm:size-8 rounded-full bg-[#CBFC01] text-black text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0 border border-white"
                >
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Content Column (Right on desktop) */}
          <div className="order-1 lg:order-2 flex flex-col space-y-6">
            <SectionTitle className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.12]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </SectionTitle>

            <SectionSubtitle className="text-left max-w-xl text-base sm:text-lg leading-relaxed text-neutral-500">
              <strong className="text-neutral-950 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </SectionSubtitle>

            <ul className="mt-8 sm:mt-10 space-y-4 pt-2">
              {creatorFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3.5">
                  <div className="size-5 sm:size-6 rounded-full bg-[#0052FE] flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Check className="size-3.5 sm:size-4 stroke-[3]" />
                  </div>
                  <span className="font-satoshi font-medium text-neutral-950 text-base sm:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatorManagementSection;
