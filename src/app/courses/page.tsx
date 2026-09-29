'use client';

import React, { useState } from 'react';
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { CourseCard } from '@/components/ui/course-card';
import { MOCK_COURSES } from '@/constants/mock-data';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Cooking',
  ];

  // Repeat courses to create the full 3x6 grid shown in design
  const allCourses = [
    ...MOCK_COURSES,
    ...MOCK_COURSES.map((c, i) => ({ ...c, id: `c-rep1-${i}` })),
    ...MOCK_COURSES.map((c, i) => ({ ...c, id: `c-rep2-${i}` })),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="bg-hero-grid relative text-white pb-16 pt-2">
        <Navbar variant="blue" />

        <div className="layout-container pt-12 pb-6 text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-white">
            Find Your Next Course
          </h1>

          {/* Search bar with Courses dropdown */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-xl border border-white/20">
              <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent text-neutral-800 placeholder:text-neutral-400 text-sm focus:outline-none"
              />
              <button
                type="button"
                className="px-6 py-2.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COURSES LISTING & FILTERS
          ========================================================================= */}
      <main className="layout-container py-12 flex-1">
        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
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

        {/* Category Pills Row */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 pb-10">
          {filterCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#cbfc01] text-black font-semibold shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3-Column Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Pagination Bar */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-700"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            {[1, 2, 3, 4, 5].map((page) => {
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-neutral-950 font-bold'
                      : 'text-neutral-500 font-medium hover:text-neutral-950'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-700"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
