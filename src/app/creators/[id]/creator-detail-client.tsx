'use client';

import React, { useState } from 'react';
import {
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { CourseCard } from '@/components/ui/course-card';
import { MOCK_CREATOR, MOCK_COURSES } from '@/constants/mock-data';

export default function CreatorDetailClient() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(MOCK_CREATOR.followersCount);

  const toggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* =========================================================================
          HERO & CREATOR PROFILE BANNER
          ========================================================================= */}
      <section className="bg-hero-grid text-white pb-20 pt-2">
        <Navbar variant="blue" />

        <div className="layout-container pt-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="space-y-6 max-w-3xl">
              {/* Avatar + Name + Creator Badge */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-neutral-100 border-2 border-white shadow-xl shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={MOCK_CREATOR.avatar}
                    alt={MOCK_CREATOR.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white">
                      {MOCK_CREATOR.name}
                    </h1>
                    <span className="px-3.5 py-1 rounded-full bg-[#cbfc01] text-black font-semibold text-xs shadow-xs">
                      Creator
                    </span>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base font-normal">
                    {MOCK_CREATOR.title}
                  </p>
                </div>
              </div>

              {/* Bio & Description */}
              <div className="space-y-3 text-white/90 text-sm sm:text-[15px] leading-relaxed max-w-2xl font-normal">
                <p>{MOCK_CREATOR.bio}</p>
                <p>{MOCK_CREATOR.description}</p>
              </div>

              {/* Stats Pills */}
              <div className="flex items-center gap-3 pt-2">
                <div className="px-5 py-2 rounded-full bg-white text-neutral-900 text-xs font-semibold shadow-xs">
                  <span className="text-neutral-950 font-bold mr-1">{MOCK_CREATOR.productsCount}</span> Products
                </div>

                <div className="px-5 py-2 rounded-full bg-white text-neutral-900 text-xs font-semibold shadow-xs">
                  <span className="text-neutral-950 font-bold mr-1">{followersCount}</span> Followers
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <div className="shrink-0 self-end lg:self-end">
              <button
                onClick={toggleFollow}
                className="px-9 py-3 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-xl cursor-pointer"
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CREATOR COURSES GRID & FILTERS
          ========================================================================= */}
      <main className="layout-container py-12 flex-1">
        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10">
          {/* Left Buttons: Filter, Level, Category */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-colors text-xs font-medium cursor-pointer">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-colors text-xs font-medium cursor-pointer">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Level</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-colors text-xs font-medium cursor-pointer">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Button: Most relevant */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-colors text-xs font-medium cursor-pointer">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>Most relevant</span>
          </button>
        </div>

        {/* 3x2 Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
