import type { Metadata } from 'next';
import { MOCK_CREATOR } from '@/constants/mock-data';
import CreatorDetailClient from './creator-detail-client';

interface CreatorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CreatorPageProps): Promise<Metadata> {
  const { id } = await params;
  const name =
    id === 'purepearl-studio' || !id
      ? MOCK_CREATOR.name
      : id
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');

  return {
    title: `${name} — Creator Profile`,
    description: MOCK_CREATOR.bio || `Explore courses and products from ${name} on ByteSpace.`,
  };
}

export default function CreatorDetailPage() {
  return <CreatorDetailClient />;
}
