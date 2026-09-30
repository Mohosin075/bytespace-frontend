import { MOCK_COURSES } from '@/constants/mock-data';
import { Course } from '@/types';

export const courseService = {
  getAll: (): Course[] => {
    return MOCK_COURSES;
  },

  getBySlug: (slug: string): Course | undefined => {
    return MOCK_COURSES.find((c) => c.slug === slug || c.id === slug);
  },

  getFeatured: (limit = 6): Course[] => {
    return MOCK_COURSES.filter((c) => c.featured || c.rating >= 4.7).slice(0, limit);
  },

  getByCategory: (category: string): Course[] => {
    if (category === 'Featured') {
      return courseService.getFeatured();
    }
    const matched = MOCK_COURSES.filter(
      (c) =>
        c.category.toLowerCase() === category.toLowerCase() ||
        c.title.toLowerCase().includes(category.toLowerCase())
    );
    return matched.length > 0 ? matched : MOCK_COURSES.slice(0, 3);
  },

  search: (query: string, limit = 4): Course[] => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return MOCK_COURSES.filter(
      (c) =>
        c.title.toLowerCase().includes(trimmed) ||
        c.category.toLowerCase().includes(trimmed) ||
        c.creator.name.toLowerCase().includes(trimmed)
    ).slice(0, limit);
  },
};
