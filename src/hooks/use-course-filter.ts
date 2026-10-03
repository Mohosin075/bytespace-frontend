import { useState, useMemo } from 'react';
import { Course } from '@/types';
import { matchCourseCategory } from '@/lib/utils';

export type SortOption = 'relevant' | 'price-asc' | 'price-desc' | 'rating';

export interface UseCourseFilterOptions {
  courses: Course[];
  initialCategory?: string;
  initialLevel?: string;
  initialSortBy?: SortOption;
  initialSearchQuery?: string;
  pageSize?: number;
}

export function useCourseFilter({
  courses,
  initialCategory = 'Featured',
  initialLevel = 'All Levels',
  initialSortBy = 'relevant',
  initialSearchQuery = '',
  pageSize = 6,
}: UseCourseFilterOptions) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>(initialLevel);
  const [sortBy, setSortBy] = useState<SortOption>(initialSortBy);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.creator.name.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'Featured') {
      const matched = result.filter((course) =>
        matchCourseCategory(course.category, course.title, selectedCategory)
      );
      result = matched.length > 0 ? matched : result.slice(0, 3);
    } else {
      // If searchQuery is empty and category is Featured, show featured or highly rated
      if (!searchQuery.trim()) {
        result = result.filter((c) => c.featured || c.rating >= 4.5);
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
  }, [courses, selectedCategory, selectedLevel, sortBy, searchQuery]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredCourses.length / pageSize) || 1;
  }, [filteredCourses.length, pageSize]);

  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredCourses.slice(start, start + pageSize);
  }, [filteredCourses, currentPage, pageSize]);

  const resetFilters = () => {
    setSelectedCategory('Featured');
    setSelectedLevel('All Levels');
    setSortBy('relevant');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return {
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
    totalCount: filteredCourses.length,
    resetFilters,
  };
}
