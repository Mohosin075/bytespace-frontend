import type { Metadata } from 'next';
import { MOCK_COURSES } from '@/constants/mock-data';
import CourseDetailClient from './course-detail-client';

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = MOCK_COURSES.find(
    (c) => c.id === slug || c.slug === slug || c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  const title = course ? `${course.title} — ByteSpace` : 'Build Digital Asset — ByteSpace';
  const description =
    course?.description ||
    'Unlock your potential with expert-led courses on digital product creation, design systems, and modern web development on ByteSpace.';

  const image = course?.image || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  return <CourseDetailClient slug={slug} />;
}
