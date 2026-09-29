import React from 'react';
import Image from 'next/image';
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
              Your Path to Professional <br className="hidden sm:inline" /> Growth Starts Here!
            </SectionTitle>

            <SectionSubtitle className="text-left">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </SectionSubtitle>

            {/* Stats Row */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-neutral-100">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-satoshi font-bold text-3xl sm:text-4xl text-primary-600">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px]">
            {/* 3D Lime Squiggle Background */}
            <div className="absolute top-4 right-4 sm:right-10 w-28 h-40 pointer-events-none z-10 rotate-12">
              <DecorativeSquiggle />
            </div>

            {/* Background Course Card */}
            <div className="relative z-0 max-w-[320px] sm:max-w-[340px] -translate-x-10 sm:-translate-x-14 -translate-y-4">
              <Image
                src="/growth/hiden-growth.png"
                alt="Learn Figma from Basic course"
                width={340}
                height={360}
                className="w-full h-auto drop-shadow-xl rounded-3xl"
                priority
              />
            </div>

            {/* Foreground Student with Laptop */}
            <div className="absolute bottom-0 right-0 sm:right-6 z-20 w-[300px] sm:w-[360px] pointer-events-none">
              <Image
                src="/growth/growth-right.png"
                alt="Student smiling with headphones holding laptop"
                width={400}
                height={460}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Overlaid Progress Card */}
            <div className="absolute top-1/2 -translate-y-4 right-0 sm:right-2 bg-white rounded-2xl p-4 shadow-2xl border border-neutral-100 w-44 z-30">
              <p className="text-xs text-neutral-500 font-medium">Learning Progress</p>
              <p className="font-satoshi font-bold text-2xl text-neutral-900 mt-0.5">55%</p>
              <div className="w-full bg-neutral-100 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-secondary-500 h-full rounded-full w-[55%]" />
              </div>
            </div>

            {/* Mohammad Amzad Cursor Badge */}
            <div className="absolute -bottom-6 left-12 sm:left-20 z-30 flex items-center gap-1.5 drop-shadow-md">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-emerald-600 fill-emerald-600 -rotate-12"
              >
                <path d="M3 3l7 18 3-7 7-3L3 3z" />
              </svg>
              <span className="bg-emerald-600 text-white font-satoshi font-semibold text-xs px-2.5 py-1 rounded-md shadow-sm whitespace-nowrap">
                Mohammad Amzad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
