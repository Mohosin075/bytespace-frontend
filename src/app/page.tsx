import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero-section';
import { LogoStrip } from '@/components/home/logo-strip';
import { CoursesSection } from '@/components/home/courses-section';
import { LearningPathsSection } from '@/components/home/learning-paths-section';
import { GrowthSection } from '@/components/home/growth-section';
import UnlockSection from '@/components/home/unlock-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'ByteSpace — Modern E-Learning & Digital Course Platform',
  description:
    'Unlock your creativity and level up your skills with hundreds of interactive online courses in UI/UX design, web development, marketing, and business taught by top industry creators.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeroSection />
      <LogoStrip />
      <CoursesSection />
      <LearningPathsSection />
      <GrowthSection />
      <UnlockSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
