import type { Metadata } from 'next';
import { MOCK_COURSES } from '@/constants/mock-data';
import CourseDetailClient from './course-detail-client';

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = MOCK_COURSES.find(
    (c) => c.id === slug || c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  const title = course?.title || 'Build Digital Asset: A Comprehensive Guide';

  return {
    title: `${title}`,
    description: course?.description || 'Unlock the power of digital creation with expert guidance on ByteSpace.',
  };
}

export default function CourseDetailPage() {
  return <CourseDetailClient />;
}
