'use client';

import React, { useState, useMemo } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { CourseCard } from '@/components/ui/course-card';
import { MOCK_COURSES, CATEGORIES } from '@/constants/mock-data';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [isExpanded, setIsExpanded] = useState(false);

  // Split categories: default visible 12 categories, remaining shown on "+ More"
  const INITIAL_VISIBLE_COUNT = 12;
  const regularCategories = useMemo(
    () => CATEGORIES.filter((c) => c !== '+ More'),
    []
  );

  const visibleCategories = useMemo(() => {
    if (isExpanded) {
      return regularCategories;
    }
    return regularCategories.slice(0, INITIAL_VISIBLE_COUNT);
  }, [isExpanded, regularCategories]);

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'Featured') {
      return MOCK_COURSES.filter((c) => c.featured || c.rating >= 4.7).slice(0, 6);
    }
    const matched = MOCK_COURSES.filter(
      (course) =>
        course.category.toLowerCase() === selectedCategory.toLowerCase() ||
        course.title.toLowerCase().includes(selectedCategory.toLowerCase())
    );
    // If fewer than 3 courses match a niche tag, supplement with top rated courses
    if (matched.length === 0) {
      return MOCK_COURSES.slice(0, 3);
    }
    return matched;
  }, [selectedCategory]);

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white">
      <div className="layout-container">
        {/* Section Header */}
        <SectionHeader
          title={
            <>
              Discover Your Passion, <br className="hidden sm:inline" /> Build Your Skills
            </>
          }
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Dynamic Category Chips */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300">
            {visibleCategories.map((category, idx) => {
              const isActive = selectedCategory === category;
              const isHiddenOnMobileWhenCollapsed = !isExpanded && idx >= 5;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-satoshi text-xs sm:text-[13px] transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                    isHiddenOnMobileWhenCollapsed ? 'hidden sm:inline-flex' : 'inline-flex'
                  } ${
                    isActive
                      ? 'bg-secondary-500 text-neutral-950 font-bold shadow-md scale-105 ring-2 ring-secondary-400/40 ring-offset-2 ring-offset-white'
                      : 'bg-neutral-100 text-neutral-700 font-medium hover:bg-neutral-200 hover:text-neutral-950 hover:scale-105 shadow-xs'
                  }`}
                >
                  {category}
                </button>
              );
            })}

            {/* + More / Less Interactive Toggle */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-full font-satoshi text-xs sm:text-[13px] font-semibold text-primary-600 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200 cursor-pointer select-none active:scale-95"
            >
              {isExpanded ? (
                <>
                  <span>Less</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span className="sm:hidden">+ More ({regularCategories.length - 5})</span>
                  <span className="hidden sm:inline">+ More ({regularCategories.length - INITIAL_VISIBLE_COUNT})</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {/* Active Filter Indicator */}
          {selectedCategory !== 'Featured' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-satoshi text-neutral-500">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>
                Showing <strong className="text-neutral-900 font-semibold">{filteredCourses.length} courses</strong> in{' '}
                <span className="text-primary-600 font-semibold">{selectedCategory}</span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedCategory('Featured')}
                className="ml-2 text-primary-600 underline font-medium hover:text-primary-700 cursor-pointer"
              >
                Reset to Featured
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Course Cards Grid with Smooth Key Refresh */}
        <div
          key={selectedCategory}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_0.3s_ease-in-out]"
        >
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
