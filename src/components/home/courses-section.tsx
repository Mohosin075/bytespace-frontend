'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { CourseCard } from '@/components/ui/course-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MOCK_COURSES, CATEGORIES, matchCourseCategory } from '@/constants/mock-data';
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
  Check,
  RotateCcw,
} from 'lucide-react';

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState<'relevant' | 'price-asc' | 'price-desc' | 'rating'>('relevant');
  const [isExpanded, setIsExpanded] = useState(false);

  // Dropdown states for top filter controls
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const filterRowRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    if (!levelDropdownOpen && !categoryDropdownOpen && !sortDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRowRef.current && !filterRowRef.current.contains(e.target as Node)) {
        setLevelDropdownOpen(false);
        setCategoryDropdownOpen(false);
        setSortDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [levelDropdownOpen, categoryDropdownOpen, sortDropdownOpen]);

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

  // Dynamic filter & sort logic
  const filteredCourses = useMemo(() => {
    let result = [...MOCK_COURSES];

    // Category filter
    if (selectedCategory !== 'Featured') {
      const matched = result.filter((course) =>
        matchCourseCategory(course.category, course.title, selectedCategory)
      );
      result = matched.length > 0 ? matched : result.slice(0, 3);
    } else {
      result = result.filter((c) => c.featured || c.rating >= 4.5);
    }

    // Level filter
    if (selectedLevel !== 'All Levels') {
      result = result.filter(
        (c) => c.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result.slice(0, 6);
  }, [selectedCategory, selectedLevel, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('Featured');
    setSelectedLevel('All Levels');
    setSortBy('relevant');
  };

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white font-satoshi">
      <div className="layout-container">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" distance={20} duration={600}>
          <SectionHeader
            title={
              <>
                Discover Your Passion, <br className="hidden sm:inline" /> Build Your Skills
              </>
            }
            subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses different fields, from technology to the arts, and make a difference in your career and life."
          />
        </ScrollReveal>

        {/* ── Top Filter Bar (Filter, Level, Category, Sort) ── */}
        <div
          ref={filterRowRef}
          className={`relative max-w-5xl mx-auto ${
            levelDropdownOpen || categoryDropdownOpen || sortDropdownOpen ? 'z-40' : 'z-20'
          }`}
        >
          <ScrollReveal direction="up" delay={100} distance={20} duration={600} className="mt-10 mb-6 flex flex-wrap items-center justify-between gap-4">
            {/* Left Pill Controls */}
            <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 relative ${
              levelDropdownOpen || categoryDropdownOpen ? 'z-40' : 'z-20'
            }`}>
              {/* 1. Filter / Reset Button */}
              <button
                type="button"
                onClick={handleResetFilters}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory !== 'Featured' || selectedLevel !== 'All Levels' || sortBy !== 'relevant'
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-md'
                    : 'bg-white border-neutral-300 text-neutral-800 hover:border-neutral-900'
                }`}
              >
                {selectedCategory !== 'Featured' || selectedLevel !== 'All Levels' || sortBy !== 'relevant' ? (
                  <RotateCcw className="w-3.5 h-3.5" />
                ) : (
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                )}
                <span>Filter</span>
                {(selectedCategory !== 'Featured' || selectedLevel !== 'All Levels' || sortBy !== 'relevant') && (
                  <span className="w-2 h-2 rounded-full bg-[#cbfc01] inline-block" />
                )}
              </button>

              {/* 2. Level Dropdown Button */}
              <div className={`relative ${levelDropdownOpen ? 'z-50' : 'z-10'}`}>
                <button
                  type="button"
                  onClick={() => {
                    setLevelDropdownOpen(!levelDropdownOpen);
                    setCategoryDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    selectedLevel !== 'All Levels'
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-md'
                      : 'bg-white border-neutral-300 text-neutral-800 hover:border-neutral-900'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>{selectedLevel === 'All Levels' ? 'Level' : `Level: ${selectedLevel}`}</span>
                </button>

                {levelDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-neutral-200 py-2 z-50 animate-fade-in">
                    {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setLevelDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-100 flex items-center justify-between cursor-pointer font-satoshi"
                      >
                        <span>{lvl}</span>
                        {selectedLevel === lvl && <Check className="w-3.5 h-3.5 text-primary-600 font-bold" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Category Dropdown Button */}
              <div className={`relative ${categoryDropdownOpen ? 'z-50' : 'z-10'}`}>
                <button
                  type="button"
                  onClick={() => {
                    setCategoryDropdownOpen(!categoryDropdownOpen);
                    setLevelDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    selectedCategory !== 'Featured'
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-md'
                      : 'bg-white border-neutral-300 text-neutral-800 hover:border-neutral-900'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>{selectedCategory === 'Featured' ? 'Category' : selectedCategory}</span>
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-2xl border border-neutral-200 py-2 z-50 animate-fade-in">
                    {regularCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setCategoryDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-100 flex items-center justify-between cursor-pointer font-satoshi"
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && <Check className="w-3.5 h-3.5 text-primary-600 font-bold" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sort Dropdown Button */}
            <div className={`relative ${sortDropdownOpen ? 'z-50' : 'z-10'}`}>
              <button
                type="button"
                onClick={() => {
                  setSortDropdownOpen(!sortDropdownOpen);
                  setLevelDropdownOpen(false);
                  setCategoryDropdownOpen(false);
                }}
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-900 transition-all duration-200 text-xs sm:text-[13px] font-medium cursor-pointer"
              >
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>
                  {sortBy === 'relevant'
                    ? 'Most relevant'
                    : sortBy === 'price-asc'
                    ? 'Price: Low to High'
                    : sortBy === 'price-desc'
                    ? 'Price: High to Low'
                    : 'Top Rated'}
                </span>
              </button>

              {sortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-neutral-200 py-2 z-50 animate-fade-in">
                  {[
                    { label: 'Most relevant', value: 'relevant' as const },
                    { label: 'Price: Low to High', value: 'price-asc' as const },
                    { label: 'Price: High to Low', value: 'price-desc' as const },
                    { label: 'Top Rated', value: 'rating' as const },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-100 flex items-center justify-between cursor-pointer font-satoshi"
                    >
                      <span>{opt.label}</span>
                      {sortBy === opt.value && <Check className="w-3.5 h-3.5 text-primary-600 font-bold" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Dynamic Category Chips */}
        <ScrollReveal direction="up" delay={150} distance={20} duration={600} className="max-w-5xl mx-auto relative z-10">
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
          {(selectedCategory !== 'Featured' || selectedLevel !== 'All Levels' || sortBy !== 'relevant') && (
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-satoshi text-neutral-500">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>
                Showing <strong className="text-neutral-900 font-semibold">{filteredCourses.length} courses</strong>
                {selectedCategory !== 'Featured' && (
                  <span>
                    {' '}
                    in <strong className="text-primary-600">{selectedCategory}</strong>
                  </span>
                )}
                {selectedLevel !== 'All Levels' && (
                  <span>
                    {' '}
                    &bull; Level: <strong className="text-neutral-900">{selectedLevel}</strong>
                  </span>
                )}
              </span>
              <button
                type="button"
                onClick={handleResetFilters}
                className="ml-2 text-primary-600 underline font-medium hover:text-primary-700 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </ScrollReveal>

        {/* Dynamic Course Cards Grid with Smooth Key Refresh & ScrollReveal */}
        <ScrollReveal direction="up" delay={200} distance={24} duration={650} className="relative z-0">
          <div
            key={`${selectedCategory}-${selectedLevel}-${sortBy}`}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_0.3s_ease-in-out]"
          >
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
export default CoursesSection;
