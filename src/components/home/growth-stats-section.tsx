import React from 'react';
import Image from 'next/image';
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-header';

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

export function GrowthStatsSection() {
  return (
    <section
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 15% 35%, rgba(203,252,1,0.22) 0%, rgba(228,255,84,0.08) 50%, transparent 70%), #ffffff',
      }}
    >
      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <SectionTitle className="text-left">
              Your Path to Professional{' '}
              <br className="hidden sm:inline" />
              Growth Starts Here!
            </SectionTitle>

            <SectionSubtitle className="text-left max-w-[480px]">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have
              the resources you need.
            </SectionSubtitle>

            {/* Stats Row */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-neutral-100 max-w-[360px]">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-satoshi font-bold text-[32px] leading-none text-primary-600">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-neutral-500 mt-1.5 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="relative flex items-center justify-center h-[460px] sm:h-[500px] w-full max-w-[540px] mx-auto lg:ml-auto">
            {/* 1. Course card — straight, left side */}
            <div className="absolute top-4 left-0 z-10 w-[270px] sm:w-[310px]">
              <Image
                src="/growth/hiden-growth.png"
                alt="Learn Figma from Basic course"
                width={320}
                height={350}
                className="w-full h-auto rounded-[24px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                priority
              />
            </div>

            {/* 2. Student figure — larger width & positioned slightly lower from top */}
            <div className="absolute top-10 sm:top-16 left-[70px] sm:left-[70px] z-20 w-[340px] sm:w-[410px] pointer-events-none">
              <Image
                src="/growth/growth-right.png"
                alt="Student with headphones holding laptop"
                width={440}
                height={520}
                className="w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.22)]"
                priority
              />
            </div>

            {/* 3. Lime 3D icon-growth SVG — placed on top of everything (z-40) */}
            <div className="absolute top-[50px] right-[5px] sm:right-[5px] w-[150px] sm:w-[200px] h-auto pointer-events-none z-40">
              <Image
                src="/growth/icon-growth1.svg"
                alt="Growth icon"
                width={210}
                height={110}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* 4. Learning Progress card — right side floating */}
            <div className="absolute top-[180px] sm:top-[200px] right-0 sm:right-[10px] z-30 bg-white rounded-2xl px-5 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-neutral-100/80 w-[175px]">
              <p className="text-[12px] text-neutral-500 font-satoshi font-medium tracking-tight">
                Learning Progress
              </p>
              <p className="font-satoshi font-bold text-[36px] leading-none text-neutral-900 mt-1 mb-2">
                55%
              </p>
              <div className="w-full bg-neutral-100 h-[6px] rounded-full overflow-hidden">
                <div className="bg-[#CBE500] h-full rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

