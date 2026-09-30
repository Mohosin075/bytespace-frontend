'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Share2,
  BarChart2,
  Star,
  Users,
  Play,
  FileText,
  Video,
  Award,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { MOCK_MODULES, MOCK_REVIEWS, MOCK_CREATOR } from '@/constants/mock-data';
import { ROUTES } from '@/constants/routes';

export default function CourseDetailClient() {
  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>('about');
  const [activeReviewFilter, setActiveReviewFilter] = useState('All rating');

  const sneakPeakImages = [
    'https://images.unsplash.com/photo-1581291518655-9523c932694b?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop&q=80',
  ];

  const keyPoints = [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ];

  const reviewBreakdown = [
    { stars: 5, count: 720, percent: 80 },
    { stars: 4, count: 120, percent: 15 },
    { stars: 3, count: 21, percent: 3 },
    { stars: 2, count: 12, percent: 1.5 },
    { stars: 1, count: 16, percent: 2 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* =========================================================================
          HERO & HEADER BANNER
          ========================================================================= */}
      <section className="bg-hero-grid text-white pb-20 pt-24 sm:pt-28">
        <Navbar variant="blue" />

        <div className="layout-container pt-4">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-white/90 text-base md:text-lg font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              <p className="text-sm text-white/90">
                by{' '}
                <Link
                  href={ROUTES.CREATOR_DETAIL('purepearl-studio')}
                  className="text-white font-medium hover:underline"
                >
                  purepearl studio
                </Link>
              </p>

              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-neutral-800 text-xs font-semibold shadow-xs">
                  <BarChart2 className="w-3.5 h-3.5 text-primary-600" />
                  <span>Intermediate</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-neutral-800 text-xs font-semibold shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]" />
                  <span>4.8 (172 reviews)</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-neutral-800 text-xs font-semibold shadow-xs">
                  <Users className="w-3.5 h-3.5 text-primary-600" />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <button
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
              className="px-6 py-2.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-lg shrink-0"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Large Video Player Preview */}
          <div className="mt-12 rounded-3xl overflow-hidden aspect-[16/9] max-h-[520px] w-full bg-neutral-900 relative shadow-2xl border-4 border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=80"
              alt="Course Video Preview"
              fill
              unoptimized
              className="object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
              <button
                aria-label="Play Course Video Preview"
                className="w-20 h-20 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTENT & STICKY ENROLLMENT CARD GRID
          ========================================================================= */}
      <main className="layout-container py-14 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: TABS AND TAB CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-3">
              {(['about', 'lessons', 'reviews'] as const).map((tab) => {
                const isActive = activeTab === tab;
                const tabNames = {
                  about: 'About',
                  lessons: 'Lesson',
                  reviews: 'Reviews',
                };
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#cbfc01] text-black shadow-xs'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {tabNames[tab]}
                  </button>
                );
              })}
            </div>

            {/* TAB 1: ABOUT */}
            {activeTab === 'about' && (
              <div className="space-y-12 animate-fade-in">
                {/* Description */}
                <div className="space-y-4">
                  <h2 className="font-poppins font-bold text-2xl text-neutral-950">
                    Description
                  </h2>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                  </p>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                  </p>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                  </p>
                </div>

                {/* Sneak Peak */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-bold text-xl text-neutral-950">
                    Sneak Peak
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {sneakPeakImages.map((src, i) => (
                      <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 shadow-xs border border-neutral-200/80">
                        <Image
                          src={src}
                          alt={`Course Preview ${i + 1}`}
                          fill
                          unoptimized
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-bold text-xl text-neutral-950">
                    Key Points
                  </h3>
                  <div className="space-y-3">
                    {keyPoints.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-600 fill-primary-50 shrink-0" />
                        <span className="text-neutral-800 text-[15px] font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LESSONS */}
            {activeTab === 'lessons' && (
              <div className="space-y-10 animate-fade-in">
                {/* Explore Modules Intro */}
                <div className="space-y-3">
                  <h2 className="font-poppins font-bold text-2xl text-neutral-950">
                    Explore the Modules
                  </h2>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>
                </div>

                {/* Lesson List */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-bold text-xl text-neutral-950">
                    Lesson List
                  </h3>
                  <div className="space-y-4">
                    {MOCK_MODULES.map((module) => (
                      <div
                        key={module.id}
                        className="bg-white rounded-2xl p-5 border border-neutral-200/80 flex items-start gap-4 hover:border-neutral-300 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#cbfc01] flex items-center justify-center shrink-0 text-black">
                          <Video className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-poppins font-semibold text-neutral-950 text-base">
                            {module.title}
                          </p>
                          <p className="text-neutral-600 text-sm leading-relaxed">
                            {module.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lesson Content Section */}
                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-xl text-neutral-950">
                    Lesson Content
                  </h3>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>
                </div>

                {/* Lesson Progress Tracking */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-bold text-xl text-neutral-950">
                    Lesson Progress Tracking
                  </h3>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                  </p>

                  <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 space-y-2">
                    <p className="text-xs text-neutral-500 font-medium">Learning Progress</p>
                    <p className="font-poppins font-bold text-3xl text-neutral-950">55%</p>
                    <div className="w-full bg-neutral-100 h-3 rounded-full overflow-hidden mt-3">
                      <div className="bg-[#cbfc01] h-full rounded-full w-[55%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="space-y-10 animate-fade-in">
                {/* Intro */}
                <div className="space-y-3">
                  <h2 className="font-poppins font-bold text-2xl text-neutral-950">
                    What Learners Are Saying
                  </h2>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Ratings Breakdown Summary Box */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 flex flex-col sm:flex-row items-center gap-8">
                  {/* Big Lime Rating Box */}
                  <div className="w-32 h-32 rounded-2xl bg-[#cbfc01] flex flex-col items-center justify-center shrink-0 text-black shadow-xs">
                    <span className="text-xs font-semibold uppercase tracking-wider text-black/70">Ratings</span>
                    <span className="font-poppins font-bold text-4xl mt-1">4.7</span>
                  </div>

                  {/* Rating Bars */}
                  <div className="flex-1 w-full space-y-2.5">
                    {reviewBreakdown.map((row) => (
                      <div key={row.stars} className="flex items-center gap-4 text-xs font-medium text-neutral-700">
                        {/* Progress Bar */}
                        <div className="flex-1 bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-[#cbfc01] h-full rounded-full"
                            style={{ width: `${row.percent}%` }}
                          />
                        </div>
                        {/* 5 Stars */}
                        <div className="flex items-center gap-0.5 w-20 shrink-0">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < row.stars ? 'fill-neutral-900 text-neutral-900' : 'text-neutral-300'
                              }`}
                            />
                          ))}
                        </div>
                        {/* Count */}
                        <span className="w-8 text-right font-mono text-neutral-600">{row.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews Filter Pills */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-bold text-xl text-neutral-950">
                    Individual Reviews:
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map((filter) => {
                      const isActive = activeReviewFilter === filter;
                      return (
                        <button
                          key={filter}
                          onClick={() => setActiveReviewFilter(filter)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#cbfc01] text-black shadow-xs'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          {filter}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Individual Review Cards */}
                <div className="space-y-4">
                  {MOCK_REVIEWS.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-2xl p-6 border border-neutral-200/80 space-y-4 shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                            <Image
                              src={review.avatar}
                              alt={review.author}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-poppins font-semibold text-sm text-neutral-950 leading-tight">
                              {review.author}
                            </p>
                            <p className="text-xs text-neutral-500 mt-0.5">{review.role}</p>
                          </div>
                        </div>
                        <span className="text-xs text-neutral-400">{review.timeAgo}</span>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-neutral-900 text-neutral-900" />
                        ))}
                      </div>

                      <p className="text-neutral-700 text-sm leading-relaxed">
                        {review.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: STICKY ENROLLMENT CARD (Present across all tabs) */}
          <div className="lg:col-span-4 sticky top-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xl space-y-6">
              {/* Header Info */}
              <div>
                <h3 className="font-poppins font-bold text-lg text-neutral-950">
                  112 Lessons (24 hours)
                </h3>

                <div className="mt-4 space-y-3 text-xs text-neutral-700">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-900">01 Introduction to Digital Assets</span>
                    <span className="text-primary-600 font-semibold">12 mins</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-900">02 Design Principles for Impacts</span>
                    <span className="text-primary-600 font-semibold">21 mins</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-900">03 Advanced Techniques in Digital Creation</span>
                    <span className="text-primary-600 font-semibold">16 mins</span>
                  </div>
                  <p className="text-xs text-neutral-400 pt-1">99 more videos</p>
                </div>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              {/* Price & CTA */}
              <div className="pt-2">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-poppins font-bold text-3xl text-primary-600">$25</span>
                  <span className="text-xs text-neutral-500 font-normal">/lifetime</span>
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>

              {/* Course Includes */}
              <div className="pt-4 border-t border-neutral-100 space-y-3.5">
                <p className="font-poppins font-bold text-sm text-neutral-950">
                  This course include
                </p>

                <div className="space-y-3 text-xs text-neutral-700">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-primary-600" />
                    <span>Learning Resources</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-primary-600" />
                    <span>Quality Lesson Videos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-primary-600" />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PhoneCall className="w-4 h-4 text-primary-600" />
                    <span>Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Creator Box */}
              <div className="pt-4 border-t border-neutral-100 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                    <Image
                      src={MOCK_CREATOR.avatar}
                      alt={MOCK_CREATOR.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-sm text-neutral-950">
                      {MOCK_CREATOR.name}
                    </p>
                    <p className="text-xs text-neutral-500">Professional Creator</p>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <Link
                  href={ROUTES.CREATOR_DETAIL('purepearl-studio')}
                  className="block text-center py-2.5 px-4 rounded-full border border-neutral-300 text-neutral-800 text-xs font-semibold hover:border-neutral-950 transition-colors"
                >
                  See Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
