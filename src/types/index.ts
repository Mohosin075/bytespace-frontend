export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: Pagination;
}

/** Single canonical user type — used across auth context, navbar, dashboard */
export interface User {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  /** e.g. 'admin' | 'user' | 'Student & Creator' */
  role?: string;
  createdAt?: string;
}

/** @deprecated Use `User` instead */
export type UserProfile = User;

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  creator: {
    id: string;
    name: string;
    role?: string;
    avatar: string;
  };
  image: string;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  rating: number;
  reviewsCount?: number;
  studentsCount?: string;
  studentAvatars?: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  priceType?: 'lifetime' | 'monthly';
  category: string;
  featured?: boolean;
  description?: string;
}

/** Course with enrollment-specific fields — used in the dashboard enrolled tab */
export interface EnrolledCourse extends Course {
  progress: number;     // 0–100
  lastAccessed: string; // human-readable, e.g. '2 hours ago'
}

export interface CourseLesson {
  title: string;
  duration: string;
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  duration?: string;
  lessonsCount?: number;
  lessons?: CourseLesson[];
}

export interface CourseReview {
  id: string;
  author: string;
  avatar: string;
  role: string;
  timeAgo: string;
  rating: number;
  content: string;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  title: string;
  avatar: string;
  bio: string;
  description: string;
  productsCount: number;
  followersCount: number;
  isFollowing?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}
