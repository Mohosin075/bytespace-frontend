import type { Metadata } from 'next';
import CoursesClient from './courses-client';

export const metadata: Metadata = {
  title: 'Explore Courses',
  description:
    'Browse our extensive catalog of interactive online courses in design, development, marketing, and business taught by top creators.',
};

export default function CoursesPage() {
  return <CoursesClient />;
}
