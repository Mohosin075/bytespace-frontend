'use client';

import React, { useState, useMemo, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  BarChart2,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Check,
  SlidersHorizontal,
  LayoutGrid,
  X,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { CourseCard } from '@/components/ui/course-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MOCK_COURSES, matchCourseCategory } from '@/constants/mock-data';
import { useToast } from '@/context/toast-context';
import { useClickOutside, useCourseFilter } from '@/hooks';

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'Featured';

  // Base list of courses
  const baseCourses = useMemo(() => {
    return [
      ...MOCK_COURSES,
      {
        id: 'c10-extra',
        slug: 'mastering-react-nextjs',
        title: 'Mastering React 19 & Next.js App Router',
        creator: { id: 'purepearl-studio', name: 'purepearl studio', avatar: MOCK_COURSES[0].creator.avatar },
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
        lessonsCount: 32,
        duration: '6 hours 40 mins',
        commentsCount: 124,
        rating: 4.9,
        level: 'Intermediate' as const,
        price: 49,
        priceType: 'lifetime' as const,
        category: 'Web Development',
        featured: true,
      },
      {
        id: 'c11-extra',
        slug: 'ai-prompt-engineering-mastery',
        title: 'AI Prompt Engineering for Designers & Devs',
        creator: { id: 'purepearl-studio', name: 'purepearl studio', avatar: MOCK_COURSES[0].creator.avatar },
        image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80',
        lessonsCount: 15,
        duration: '2 hours 45 mins',
        commentsCount: 88,
        rating: 4.8,
        level: 'Beginner' as const,
        price: 29,
        priceType: 'lifetime' as const,
        category: 'UI/UX Design',
        featured: true,
      },
      {
        id: 'c12-extra',
        slug: 'advanced-brand-identity-system',
        title: 'Advanced Brand Identity Systems',
        creator: { id: 'purepearl-studio', name: 'purepearl studio', avatar: MOCK_COURSES[0].creator.avatar },
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
        lessonsCount: 28,
        duration: '4 hours 50 mins',
        commentsCount: 95,
        rating: 4.7,
        level: 'Advanced' as const,
        price: 39,
        priceType: 'lifetime' as const,
        category: 'Graphic Design',
        featured: false,
      },
    ];
  }, []);

  const {
    selectedCategory,
    setSelectedCategory,
    selectedLevel,
    setSelectedLevel,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredCourses,
    paginatedCourses,
    resetFilters,
  } = useCourseFilter({
    courses: baseCourses,
    initialCategory,
    initialSearchQuery: initialSearch,
    pageSize: 6,
  });

  // Dropdown open states
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const filterRowRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  // Close dropdowns when clicking outside
  useClickOutside(filterRowRef, () => {
    if (levelDropdownOpen || categoryDropdownOpen || sortDropdownOpen) {
      setLevelDropdownOpen(false);
      setCategoryDropdownOpen(false);
      setSortDropdownOpen(false);
    }
  });

  const filterCategories = [
    'Featured',
    'Design',
    'Development',
    'IT & Software',
    'Business',
    'Marketing',
    'Photography',
    'UI/UX Design',
    'Graphic Design',
    'Web Development',
    'Data Science',
    'Productivity',
    'Freelance & Entrepreneurship',
    'Digital Illustration',
    'Music',
  ];

  const handleResetFilters = () => {
    resetFilters();
    setSearchQuery('');
    setSelectedCategory('Featured');
    setSelectedLevel('All Levels');
    setSortBy('relevant');
    setCurrentPage(1);
    setLevelDropdownOpen(false);
    setCategoryDropdownOpen(false);
    setSortDropdownOpen(false);
    showToast('Filters reset to default', 'info');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="font-satoshi">
      {/* ── 100% Full-Width Search Header Banner ── */}
      <section className="relative w-full bg-[#0052FE] text-white pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 overflow-hidden">
        {/* Blueprint Grid Lines Accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)',
            backgroundSize: '120px 120px',
          }}
        />

        <div className="layout-container relative z-10">
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
                Find Your Next Course
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
                Explore hundreds of expert-led courses and upgrade your skills today.
              </p>

              <div className="pt-2 max-w-2xl mx-auto">
                <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-xl border border-white/20">
                  <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search by topic, skill, title, or creator..."
                    className="w-full bg-transparent text-neutral-800 placeholder:text-neutral-400 text-sm sm:text-base focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setCurrentPage(1);
                      }}
                      className="px-3 text-xs text-neutral-400 hover:text-neutral-700 cursor-pointer flex items-center gap-1"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main Catalog Grid & Filters Container ── */}
      <main className="layout-container py-10 sm:py-14 flex-1">

      {/* Filter Controls Row */}
      <div
        ref={filterRowRef}
        className={`relative flex items-center justify-between w-full gap-4 pb-6 ${
          levelDropdownOpen || categoryDropdownOpen || sortDropdownOpen ? 'z-40' : 'z-20'
        }`}
      >
        {/* Left Pills: Filter, Level, Category */}
        <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 relative ${
          levelDropdownOpen || categoryDropdownOpen ? 'z-40' : 'z-20'
        }`}>
          {/* 1. Filter Button */}
          <button
            type="button"
            onClick={handleResetFilters}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
              selectedCategory !== 'Featured' || selectedLevel !== 'All Levels' || searchQuery.trim() !== ''
                ? 'bg-neutral-950 text-white border-neutral-950 shadow-md'
                : 'bg-white border-neutral-300 text-neutral-800 hover:border-neutral-900'
            }`}
          >
            {selectedCategory !== 'Featured' || selectedLevel !== 'All Levels' || searchQuery.trim() !== '' ? (
              <RotateCcw className="w-3.5 h-3.5" />
            ) : (
              <SlidersHorizontal className="w-3.5 h-3.5" />
            )}
            <span>Filter</span>
            {(selectedCategory !== 'Featured' || selectedLevel !== 'All Levels' || searchQuery.trim() !== '') && (
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
                      setCurrentPage(1);
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
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      handleCategorySelect(cat);
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
      </div>

      {/* Category Pills Row */}
      <div className="relative z-10 flex items-center gap-2.5 pt-2 pb-8 overflow-x-auto no-scrollbar scroll-smooth flex-nowrap sm:flex-wrap">
        {filterCategories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategorySelect(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-[#cbfc01] text-black font-semibold shadow-xs scale-105'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Results Counter Bar */}
      <div className="relative z-0 mb-6 flex items-center justify-between text-xs text-neutral-500 border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-primary-600" />
          <span>
            Showing <strong className="text-neutral-900 font-semibold">{filteredCourses.length}</strong>{' '}
            {filteredCourses.length === 1 ? 'course' : 'courses'}
            {selectedCategory !== 'Featured' && (
              <span>
                {' '}
                in <strong className="text-primary-600">{selectedCategory}</strong>
              </span>
            )}
            {searchQuery.trim() && (
              <span>
                {' '}
                matching &ldquo;<strong className="text-neutral-900">{searchQuery}</strong>&rdquo;
              </span>
            )}
          </span>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* 3-Column Course Grid or Clean Empty State */}
      {paginatedCourses.length > 0 ? (
        <div className="relative z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedCourses.map((course, idx) => (
            <ScrollReveal
              key={course.id}
              direction="up"
              delay={(idx % 3) * 80}
              distance={20}
              duration={500}
            >
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-neutral-50 rounded-3xl border border-neutral-200 p-8 max-w-md mx-auto space-y-4">
          <Search className="w-12 h-12 text-neutral-300 mx-auto" />
          <div>
            <h3 className="font-satoshi font-bold text-lg text-neutral-900">No courses found</h3>
            <p className="text-xs text-neutral-500 mt-1">
              {searchQuery ? (
                <>We couldn&apos;t find any courses matching &ldquo;{searchQuery}&rdquo;.</>
              ) : (
                <>We couldn&apos;t find any courses matching your filter criteria.</>
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-6 py-2.5 rounded-full bg-[#cbfc01] text-black font-semibold text-xs shadow-md hover:brightness-95 cursor-pointer"
          >
            Reset Search &amp; Filters
          </button>
        </div>
      )}

      {/* Dynamic Pagination Bar */}
      {totalPages > 1 && (
        <ScrollReveal direction="up" delay={80} distance={15} duration={500}>
          <div className="mt-16 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-neutral-950 text-white font-bold shadow-md'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      )}
      </main>
    </div>
  );
}

export default function CoursesClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar variant="blue" />
      <div className="flex-1">
        <Suspense fallback={<div className="p-12 text-center text-sm">Loading courses...</div>}>
          <CoursesContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
