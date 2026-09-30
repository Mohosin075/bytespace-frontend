import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { AvatarGroup } from '@/components/ui/avatar-group';

export function HeroStage() {
  return (
    <div className="relative w-full flex justify-center overflow-visible mt-9 h-[460px]">
      <div className="relative w-[960px] h-[460px]">
        {/* Lime Semicircle Backdrop */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[30px] w-[860px] z-0 overflow-hidden pointer-events-none">
          <Image
            src="/hero/hero-lime-semicircle-backdrop.svg"
            alt="Lime semicircle background"
            fill
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Student / Boy Image */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[480px] z-10">
          <Image
            src="/hero/hero-student-character.svg"
            alt="Student with headphones holding laptop"
            fill
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Card 1: UI/UX Design */}
        <div className="absolute z-30 left-10 top-[90px] bg-white rounded-2xl border border-neutral-100 p-3.5 px-4.5 min-w-[210px] shadow-xl text-left">
          <p className="font-satoshi font-bold text-sm text-neutral-900">UI/UX Design</p>
          <p className="text-xs text-neutral-500 mt-1">200 Courses • 1000+ Students</p>
        </div>

        {/* Card 2: Learning Progress 55% */}
        <div className="absolute z-30 right-10 top-[80px] bg-white rounded-2xl border border-neutral-100 py-3.5 px-5 min-w-[190px] shadow-xl text-left">
          <p className="text-xs text-neutral-500 font-medium">Learning Progress</p>
          <p className="font-satoshi font-bold text-3xl leading-none mt-1 text-neutral-900">55%</p>
          <div className="w-full bg-neutral-100 rounded-full h-1.5 mt-2.5 overflow-hidden">
            <div className="w-[55%] h-full bg-secondary-500 rounded-full" />
          </div>
        </div>

        {/* Card 3: Happy Students */}
        <div className="absolute z-30 left-10 bottom-[60px] bg-white rounded-2xl border border-neutral-100 p-3 px-4 shadow-xl text-left">
          <div className="flex items-center gap-1.5">
            <p className="font-satoshi font-semibold text-xs text-neutral-900">Happy Students</p>
            <div className="flex items-center gap-0.5 text-xs">
              <span className="font-bold text-neutral-800">4.5</span>
              <span className="text-neutral-400">(240)</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <div className="mt-2">
            <AvatarGroup extraCount="2K+" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
