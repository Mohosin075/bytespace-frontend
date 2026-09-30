'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  ChevronDown,
  BarChart2,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Check,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { CourseCard } from '@/components/ui/course-card';
import { MOCK_COURSES, matchCourseCategory } from '@/constants/mock-data';
import { useToast } from '@/context/toast-context';

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'Featured';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState<'relevant' | 'price-asc' | 'price-desc' | 'rating'>('relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Dropdown open states
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const { showToast } = useToast();

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

  // Base list of courses
  const baseCourses = useMemo(() => {
    return [
      ...MOCK_COURSES,
      {
        id: 'c10',
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
        id: 'c11',
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
        id: 'c12',
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

  // Filter & Sort logic
  const filteredCourses = useMemo(() => {
    let result = [...baseCourses];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.level.toLowerCase().includes(q)
      );
    }

    // Category filter using smart matching
    if (selectedCategory !== 'Featured') {
      const matched = result.filter((c) =>
        matchCourseCategory(c.category, c.title, selectedCategory)
      );
      if (matched.length === 0 && !searchQuery.trim()) {
        result = baseCourses.slice(0, 4);
      } else {
        result = matched;
      }
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

    return result;
  }, [baseCourses, searchQuery, selectedCategory, selectedLevel, sortBy]);

  // Pagination calculation
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));

  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Featured');
    setSelectedLevel('All Levels');
    setSortBy('relevant');
    setCurrentPage(1);
    showToast('Filters reset to default', 'info');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="layout-container py-12 flex-1">
      {/* Search Header Banner */}
      <section className="bg-hero-grid rounded-3xl p-8 sm:p-12 mb-10 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-white">
            Find Your Next Course
          </h1>
          <p className="text-white/80 text-sm sm:text-base">
            Explore hundreds of expert-led courses and upgrade your skills today.
          </p>

          <div className="pt-2">
            <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-xl border border-white/20">
              <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by topic, skill, or keyword..."
                className="w-full bg-transparent text-neutral-800 placeholder:text-neutral-400 text-sm focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-3 text-xs text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
        {/* Left Buttons: Filter, Level, Reset */}
        <div className="flex items-center gap-3 relative">
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors text-xs font-medium cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All</span>
          </button>

          {/* Level Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setLevelDropdownOpen(!levelDropdownOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors text-xs font-medium cursor-pointer ${
                selectedLevel !== 'All Levels'
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'border-neutral-300 text-neutral-700 hover:border-neutral-900'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Level: {selectedLevel}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {levelDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-neutral-200 py-2 z-30">
                {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setSelectedLevel(lvl);
                      setLevelDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-100 flex items-center justify-between cursor-pointer"
                  >
                    <span>{lvl}</span>
                    {selectedLevel === lvl && <Check className="w-3.5 h-3.5 text-primary-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-colors text-xs font-medium cursor-pointer"
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>
              Sort:{' '}
              {sortBy === 'relevant'
                ? 'Most relevant'
                : sortBy === 'price-asc'
                ? 'Price: Low to High'
                : sortBy === 'price-desc'
                ? 'Price: High to Low'
                : 'Top Rated'}
            </span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {sortDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-200 py-2 z-30">
              {[
                { label: 'Most relevant', value: 'relevant' as const },
                { label: 'Price: Low to High', value: 'price-asc' as const },
                { label: 'Price: High to Low', value: 'price-desc' as const },
                { label: 'Top Rated', value: 'rating' as const },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSortBy(opt.value);
                    setSortDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-100 flex items-center justify-between cursor-pointer"
                >
                  <span>{opt.label}</span>
                  {sortBy === opt.value && <Check className="w-3.5 h-3.5 text-primary-600" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category Pills Row */}
      <div className="flex items-center gap-2.5 pt-2 pb-8 overflow-x-auto no-scrollbar scroll-smooth flex-nowrap sm:flex-wrap">
        {filterCategories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
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
      <div className="mb-6 flex items-center justify-between text-xs text-neutral-500 border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-primary-600" />
          <span>
            Showing <strong className="text-neutral-900 font-semibold">{filteredCourses.length}</strong>{' '}
            courses
            {selectedCategory !== 'Featured' && (
              <span>
                {' '}
                in <strong className="text-primary-600">{selectedCategory}</strong>
              </span>
            )}
          </span>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* 3-Column Course Grid or Empty State */}
      {paginatedCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-200 p-8 max-w-md mx-auto">
          <Search className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
          <h3 className="font-satoshi font-bold text-lg text-neutral-900">No courses found</h3>
          <p className="text-xs text-neutral-500 mt-1 mb-6">
            We couldn&apos;t find any courses matching your search query or filter criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 rounded-full bg-[#cbfc01] text-black font-semibold text-xs shadow-md hover:brightness-95 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Dynamic Pagination Bar */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
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
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </main>
  );
}

export default function CoursesClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar variant="light" />
      <div className="pt-20 sm:pt-24 md:pt-28 flex-1">
        <Suspense fallback={<div className="p-12 text-center text-sm">Loading courses...</div>}>
          <CoursesContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
