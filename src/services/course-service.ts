import { Course, Creator } from '@/types';
import { MOCK_COURSES, MOCK_CREATOR } from '@/constants/mock-data';

export const CourseService = {
  async getAllCourses(): Promise<Course[]> {
    return MOCK_COURSES;
  },

  async getCourseBySlug(slug: string): Promise<Course | undefined> {
    return MOCK_COURSES.find(
      (c) => c.slug === slug || c.id === slug || c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
    );
  },

  async getCoursesByCategory(category: string): Promise<Course[]> {
    if (category === 'All' || !category) return MOCK_COURSES;
    return MOCK_COURSES.filter((c) => c.category.toLowerCase() === category.toLowerCase());
  },

  async searchCourses(query: string): Promise<Course[]> {
    if (!query.trim()) return MOCK_COURSES;
    const term = query.toLowerCase();
    return MOCK_COURSES.filter(
      (c) =>
        c.title.toLowerCase().includes(term) ||
        c.category.toLowerCase().includes(term) ||
        c.creator.name.toLowerCase().includes(term)
    );
  },

  async getCreatorById(id: string): Promise<Creator | undefined> {
    if (id === MOCK_CREATOR.id || id === MOCK_CREATOR.handle) {
      return MOCK_CREATOR;
    }
    return MOCK_CREATOR;
  },
};
