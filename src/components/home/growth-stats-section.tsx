import React from 'react';
import { DecorativeSquiggle } from '@/components/ui/decorative-squiggle';
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle className="text-left">
              Your Path to Professional Growth Starts Here!
            </SectionTitle>

            <SectionSubtitle className="text-left">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </SectionSubtitle>

            {/* Stats Row */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-neutral-100">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image with Overlays & 3D Lime Squiggle */}
          <div className="lg:col-span-6 relative">
            {/* 3D Lime Squiggle background decoration */}
            <div className="absolute -top-10 -right-4 w-32 h-44 pointer-events-none z-0 rotate-12">
              <DecorativeSquiggle />
            </div>

            <div className="relative mx-auto max-w-md z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
                  alt="Professional Learning"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Overlaid Mini Course Card */}
              <div className="absolute top-4 -left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-neutral-100 w-56">
                <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 mb-2">
                  <span className="bg-neutral-100 px-2 py-0.5 rounded-full">17 Lessons</span>
                  <span className="bg-neutral-100 px-2 py-0.5 rounded-full">2 hours 16 mins</span>
                </div>
                <p className="font-poppins font-semibold text-xs leading-snug">Learn Figma from Basic</p>
                <p className="text-[10px] text-[#0445ff] font-medium mt-0.5">by purepearl studio</p>
                <div className="mt-2 pt-1 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-neutral-600">Beginner</span>
                  <span className="font-bold text-[#0445ff]">$25</span>
                </div>
              </div>

              {/* Overlaid Progress Card */}
              <div className="absolute bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-neutral-100 w-48">
                <p className="text-xs text-neutral-500 font-medium">Learning Progress</p>
                <p className="font-poppins font-bold text-2xl text-neutral-900 mt-0.5">55%</p>
                <div className="w-full bg-neutral-100 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#cbfc01] h-full rounded-full w-[55%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
