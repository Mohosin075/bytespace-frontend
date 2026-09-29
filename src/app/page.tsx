import React from 'react';
import { HeroSection } from '@/components/home/hero-section';
import { LogoStrip } from '@/components/home/logo-strip';
import { CoursesSection } from '@/components/home/courses-section';
import { LearningPathsSection } from '@/components/home/learning-paths-section';
import { GrowthStatsSection } from '@/components/home/growth-stats-section';
import { CreatorManagementSection } from '@/components/home/creator-management-section';
import { CreatorCtaBanner } from '@/components/home/creator-cta-banner';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { Footer } from '@/components/shared/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeroSection />
      <LogoStrip />
      <CoursesSection />
      <LearningPathsSection />
      <GrowthStatsSection />
      <CreatorManagementSection />
      <CreatorCtaBanner />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
