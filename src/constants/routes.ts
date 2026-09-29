export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  COURSE_DETAIL: (slug: string = 'build-digital-asset') => `/courses/${slug}`,
  CREATORS: '/creators/purepearl-studio',
  CREATOR_DETAIL: (id: string = 'purepearl-studio') => `/creators/${id}`,
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
  },
  DASHBOARD: {
    ROOT: '/dashboard',
    PROFILE: '/dashboard/profile',
    SETTINGS: '/dashboard/settings',
  },
} as const;
