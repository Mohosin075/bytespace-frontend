import React from 'react';
import Image from 'next/image';
import { Check, Star } from 'lucide-react';
import { MOCK_STUDENT_AVATARS } from '@/constants/mock-data';
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-header';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function GrowthSection() {
  const creatorFeatures = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-20 lg:py-28">
      {/* ── Ambient Radial Glows ── */}
      {/* 1. Top Section - Top-Left Radiant Lime Glow */}
      <div
        className="absolute -top-36 sm:-top-44 -left-24 sm:-left-36 w-[650px] sm:w-[850px] lg:w-[980px] h-[550px] sm:h-[680px] rounded-full pointer-events-none select-none blur-[95px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--secondary-rgb), 0.44) 0%, rgba(var(--secondary-rgb), 0.20) 42%, rgba(var(--secondary-rgb), 0.04) 70%, transparent 100%)',
        }}
      />

      {/* 2. Top Section - Right Top Corner Soft Blue Glow */}
      <div
        className="absolute -top-24 sm:-top-32 -right-24 sm:-right-36 w-[550px] sm:w-[720px] h-[550px] sm:h-[720px] rounded-full pointer-events-none select-none blur-[95px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.18) 0%, rgba(129, 197, 255, 0.14) 42%, rgba(var(--primary-rgb), 0.02) 68%, transparent 100%)',
        }}
      />

      {/* 3. Middle Left - Soft Blue/Lavender Ambient Glow */}
      <div
        className="absolute top-[38%] -left-32 w-[550px] h-[550px] rounded-full pointer-events-none select-none blur-[90px]"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--primary-rgb), 0.14) 0%, rgba(147, 197, 253, 0.12) 45%, rgba(var(--primary-rgb), 0.02) 70%, transparent 100%)',
        }}
      />

      {/* 4. Creator Section - Left Bottom Corner Lime Ambient Glow */}
      <div
        className="absolute -bottom-24 sm:-bottom-32 -left-24 sm:-left-32 w-[580px] sm:w-[720px] h-[580px] sm:h-[720px] rounded-full pointer-events-none select-none blur-[85px]"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--secondary-rgb), 0.45) 0%, rgba(var(--secondary-rgb), 0.20) 45%, rgba(var(--secondary-rgb), 0.04) 70%, transparent 100%)',
        }}
      />

      {/* 5. Creator Section - Right Bottom Corner Blue Ambient Glow */}
      <div
        className="absolute -bottom-24 sm:-bottom-32 -right-24 sm:-right-32 w-[600px] sm:w-[780px] lg:w-[880px] h-[600px] sm:h-[780px] lg:h-[880px] rounded-full pointer-events-none select-none blur-[90px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.22) 0%, rgba(147, 197, 253, 0.15) 45%, rgba(var(--primary-rgb), 0.03) 70%, transparent 100%)',
        }}
      />

      <div className="layout-container relative z-10 flex flex-col gap-24 sm:gap-32 lg:gap-40">
        {/* ── PART 1: Student Growth Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Content Column with ScrollReveal */}
          <ScrollReveal direction="up" distance={24} duration={650} className="order-2 lg:order-1 flex flex-col space-y-6">
            <SectionTitle className="text-left">
              Your Path to Professional
              <br className="hidden sm:inline" />
              Growth Starts Here!
            </SectionTitle>

            <SectionSubtitle className="text-left max-w-xl text-base sm:text-lg leading-relaxed text-neutral-500">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </SectionSubtitle>

            {/* Clean Stats Row exactly as in Screenshot (No boxes) */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-4">
              <div>
                <div className="font-satoshi text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary-600 tracking-tight leading-none">
                  12K
                </div>
                <div className="font-satoshi text-xs sm:text-sm text-neutral-500 mt-2 font-normal">
                  Students
                </div>
              </div>

              <div>
                <div className="font-satoshi text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary-600 tracking-tight leading-none">
                  70+
                </div>
                <div className="font-satoshi text-xs sm:text-sm text-neutral-500 mt-2 font-normal">
                  Courses
                </div>
              </div>

              <div>
                <div className="font-satoshi text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary-600 tracking-tight leading-none">
                  16
                </div>
                <div className="font-satoshi text-xs sm:text-sm text-neutral-500 mt-2 font-normal">
                  Creators
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual Column with ScrollReveal */}
          <ScrollReveal direction="up" delay={150} distance={24} duration={650} className="order-1 lg:order-2 relative w-full max-w-140 mx-auto min-h-105 sm:min-h-125 flex items-center justify-center">
            {/* Back card */}
            <div className="absolute top-0 left-0 w-[58%] sm:w-[62%] z-10 pointer-events-none select-none drop-shadow-xl">
              <Image
                src="/home/growth/peson1back.svg"
                alt="Course Card"
                width={373}
                height={384}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Shape */}
            <div className="absolute top-2 sm:top-4 right-0 sm:right-4 w-[28%] sm:w-[32%] z-0 pointer-events-none select-none animate-float">
              <Image
                src="/home/growth/person1icon1.png"
                alt="Shape"
                width={216}
                height={216}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Student character */}
            <div className="relative z-20 w-[84%] sm:w-[88%] mt-12 sm:mt-16 ml-auto pointer-events-none select-none">
              <Image
                src="/home/growth/person1.svg"
                alt="Student with laptop"
                width={703}
                height={688}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Learning progress floating card */}
            <div className="absolute top-16 sm:top-20 md:top-[30%] -right-2 sm:-right-3.75 z-30 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 shadow-xl sm:shadow-2xl border border-white/80 w-32 sm:w-44 md:w-50 animate-float-reverse">
              <span className="font-satoshi text-[9px] sm:text-[11px] md:text-xs font-semibold text-zinc-500 block leading-tight">
                Learning Progress
              </span>
              <div className="font-satoshi text-lg sm:text-2xl md:text-3xl font-extrabold text-zinc-900 mt-0.5 sm:mt-1 leading-none">
                55%
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-1.5 sm:h-2 mt-1.5 sm:mt-2.5 overflow-hidden">
                <div className="bg-secondary-500 h-full rounded-full w-[55%]" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── PART 2: Creator Management Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Visual Column with ScrollReveal */}
          <ScrollReveal direction="up" distance={24} duration={650} className="order-1 lg:order-1 relative w-full max-w-140 mx-auto min-h-110 sm:min-h-130 flex items-center justify-center">
            {/* Green 3D squiggle icon behind creator */}
            <div className="absolute top-[28%] right-2 sm:right-6 w-[28%] sm:w-[32%] z-0 pointer-events-none select-none animate-float-slow">
              <Image
                src="/home/growth/person2icon1.png"
                alt="Shape"
                width={217}
                height={216}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Total Revenue badge — BEHIND creator (z-10) */}
            <div className="absolute top-[8%] left-[2%] sm:left-[4%] z-10 bg-primary-600/95 backdrop-blur-md text-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/20 w-37.5 sm:w-42.5 animate-float hover:scale-105 transition-transform duration-300">
              <div className="font-satoshi text-[11px] sm:text-xs text-white/90 font-medium">Total Revenue</div>
              <div className="font-satoshi text-[9px] text-white/60 font-normal">July 1-28</div>
              <div className="font-satoshi text-lg sm:text-xl font-bold text-white mt-1">$120.29</div>
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-2.5 overflow-hidden">
                <div className="bg-secondary-500 h-full rounded-full w-[70%]" />
              </div>
            </div>

            {/* Year to Date badge — BEHIND creator (z-10) */}
            <div className="absolute top-[32%] left-[2%] sm:left-[4%] z-10 bg-primary-600/95 backdrop-blur-md text-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/20 w-37.5 sm:w-42.5 animate-float-slow hover:scale-105 transition-transform duration-300">
              <div className="font-satoshi text-[11px] sm:text-xs text-white/90 font-medium">Year to Date</div>
              <div className="font-satoshi text-[9px] text-white/60 font-normal">2023</div>
              <div className="font-satoshi text-lg sm:text-xl font-bold text-white mt-1">$1,200.38</div>
              <div className="mt-2">
                <span className="font-satoshi bg-secondary-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full inline-block shadow-xs">+12$</span>
              </div>
            </div>

            {/* Creator character — IN FRONT of left badges (z-20) */}
            <div className="relative z-20 w-[78%] sm:w-[82%] mx-auto pointer-events-none select-none">
              <Image
                src="/home/growth/person2.svg"
                alt="Creator with tablet"
                width={579}
                height={719}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Happy Students card — IN FRONT of creator (z-30) */}
            <div className="absolute bottom-[16%] sm:bottom-[18%] right-[3%] sm:right-[6%] lg:right-[8%] z-30 bg-white rounded-2xl p-4 sm:p-5 shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-neutral-100 animate-float-reverse card-hover-motion">
              <h4 className="font-satoshi font-bold text-neutral-950 text-sm sm:text-base leading-tight">Happy Students</h4>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 mt-1">
                <span className="font-satoshi">4.5</span>
                <span className="font-satoshi text-neutral-400 font-normal text-xs">(240)</span>
                <Star className="size-3.5 fill-[#FFB800] text-[#FFB800]" />
              </div>
              <div className="flex items-center mt-3">
                {MOCK_STUDENT_AVATARS.map((avatar, idx) => (
                  <div
                    key={idx}
                    style={{ zIndex: idx + 1 }}
                    className={`relative size-7 sm:size-8 rounded-full overflow-hidden border border-white ${idx > 0 ? "-ml-3 sm:-ml-3.5" : ""}`}
                  >
                    <Image src={avatar} alt="Student" fill unoptimized className="object-cover" />
                  </div>
                ))}
                <div
                  style={{ zIndex: 10 }}
                  className="font-satoshi relative -ml-3 sm:-ml-3.5 size-7 sm:size-8 rounded-full bg-secondary-500 text-black text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0 border border-white"
                >
                  2K+
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Column with ScrollReveal */}
          <ScrollReveal direction="up" delay={150} distance={24} duration={650} className="order-2 lg:order-2 flex flex-col space-y-6">
            <SectionTitle className="text-left">
              Create &amp; Manage
              <br className="hidden sm:inline" />
              Courses Easily.
            </SectionTitle>

            <SectionSubtitle className="text-left max-w-xl text-base sm:text-lg leading-relaxed text-neutral-500">
              <strong className="text-neutral-950 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </SectionSubtitle>

            <ul className="mt-8 sm:mt-10 space-y-4 pt-2">
              {creatorFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3.5 group">
                  <div className="size-5 sm:size-6 rounded-full bg-primary-600 group-hover:bg-secondary-500 group-hover:text-black flex items-center justify-center shrink-0 text-white shadow-xs transition-colors duration-200">
                    <Check className="size-3.5 sm:size-4 stroke-[3]" />
                  </div>
                  <span className="font-satoshi font-medium text-neutral-950 text-base sm:text-lg group-hover:text-primary-600 transition-colors duration-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default GrowthSection;
