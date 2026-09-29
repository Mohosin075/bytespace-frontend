'use client';

import React, { useState, useMemo } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { CourseCard } from '@/components/ui/course-card';
import { MOCK_COURSES, CATEGORIES } from '@/constants/mock-data';

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState('Featured');

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'Featured' || selectedCategory === '+ More') {
      return MOCK_COURSES;
    }
    return MOCK_COURSES.filter((course) => course.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="py-24 bg-white">
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

        {/* Category Chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            const isMore = category === '+ More';
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-secondary-500 text-black font-semibold shadow-xs'
                    : isMore
                      ? 'bg-transparent text-primary-600 font-semibold hover:underline'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
