'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import {
  Share2,
  BarChart2,
  Star,
  Users,
  Play,
  Video,
  Award,
  CheckCircle2,
  X,
  Folder,
  Radio,
  ShoppingBag,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MOCK_MODULES, MOCK_REVIEWS, MOCK_CREATOR, MOCK_COURSES } from '@/constants/mock-data';
import { ROUTES } from '@/constants/routes';
import { useToast } from '@/context/toast-context';
import { useAuth } from '@/context/auth-context';
import { useCart } from '@/context/cart-context';

interface CourseDetailClientProps {
  slug?: string;
}

export default function CourseDetailClient({ slug }: CourseDetailClientProps = {}) {
  const router = useRouter();
  const params = useParams();
  const { showToast } = useToast();
  const { isLoggedIn } = useAuth();
  const { addToCart, isInCart } = useCart();

  const activeSlug = slug || (params?.slug as string) || '';
  const course =
    MOCK_COURSES.find(
      (c) =>
        c.slug === activeSlug ||
        c.id === activeSlug ||
        c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === activeSlug
    ) || MOCK_COURSES[0];

  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>('about');
  const [activeReviewFilter, setActiveReviewFilter] = useState('All rating');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const sneakPeakImages = [
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80',
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

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Course link copied to clipboard!', 'success');
    }
  };

  const handleEnroll = () => {
    if (!isLoggedIn) {
      showToast('Please sign in to enroll in this course', 'info');
      router.push(ROUTES.AUTH.LOGIN);
      return;
    }

    if (isEnrolled) {
      router.push(ROUTES.DASHBOARD.ROOT);
    } else {
      setIsEnrolled(true);
      showToast(`Congratulations! You are now enrolled in "${course.title}"`, 'success');
    }
  };

  const filteredReviews = MOCK_REVIEWS.filter((r) => {
    if (activeReviewFilter === 'All rating') return true;
    const num = parseInt(activeReviewFilter.replace('★ ', ''), 10);
    return r.rating === num;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* =========================================================================
          HERO & HEADER BANNER
          ========================================================================= */}
      <section className="bg-hero-grid text-white">
        <Navbar variant="blue" />

        <div className="layout-container pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20">
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <h1 className="font-poppins font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug sm:leading-tight">
                  {course.title}
                </h1>
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                  {course.subtitle || course.description || 'Unlock the Power of Digital Creation with Expert Guidance'}
                </p>

                <p className="text-xs sm:text-sm text-white/90">
                  by{' '}
                  <Link
                    href={ROUTES.CREATOR_DETAIL(course.creator.id)}
                    className="text-white font-medium hover:underline"
                  >
                    {course.creator.name}
                  </Link>
                </p>

                {/* Badges & Share button row */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                  <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white text-neutral-800 text-xs font-semibold shadow-xs">
                    <BarChart2 className="w-3.5 h-3.5 text-primary-600" />
                    <span>{course.level}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white text-neutral-800 text-xs font-semibold shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]" />
                    <span>{course.rating.toFixed(1)} ({course.reviewsCount || 172} reviews)</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white text-neutral-800 text-xs font-semibold shadow-xs">
                    <Users className="w-3.5 h-3.5 text-primary-600" />
                    <span>{course.studentsCount || '199 Students'}</span>
                  </div>

                  <button
                    onClick={handleShare}
                    className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-[#cbfc01] text-black font-semibold text-xs sm:text-sm hover:brightness-95 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shrink-0"
                  >
                    <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Large Video Player Preview */}
          <ScrollReveal direction="up" delay={150} distance={24} duration={650}>
            <div className="mt-12 rounded-3xl overflow-hidden aspect-[16/9] max-h-[520px] w-full bg-neutral-900 relative shadow-2xl border-4 border-white/20">
              <Image
                src={course.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=80"}
                alt={`${course.title} Video Preview`}
                fill
                unoptimized
                className="object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label="Play Course Video Preview"
                  className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group"
                >
                  <Play className="w-8 h-8 fill-current translate-x-0.5 group-hover:text-primary-600 transition-colors" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Preview Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-white/20">
            <div className="flex items-center justify-between p-4 bg-neutral-800 border-b border-neutral-700 text-white">
              <span className="font-semibold text-sm">Course Preview Video</span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 text-neutral-400 hover:text-white rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[16/9] w-full bg-black relative flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/cZDglsE16yM?autoplay=1&rel=0"
                title="Course Video Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CONTENT & STICKY ENROLLMENT CARD GRID
          ========================================================================= */}
      <main className="layout-container py-12 sm:py-16 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: TABS AND TAB CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
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
                        ? 'bg-[#cbfc01] text-black shadow-xs font-bold'
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
                  <div className="space-y-3.5 pt-1">
                    {keyPoints.map((point) => (
                      <div key={point} className="flex items-center gap-3.5">
                        <CheckCircle2 className="w-5.5 h-5.5 fill-[#0052FE] text-white shrink-0" />
                        <span className="text-neutral-700 text-[15px] sm:text-base font-normal">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LESSON */}
            {activeTab === 'lessons' && (
              <div className="space-y-10 animate-fade-in">
                {/* Explore the Modules Header */}
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
                  <div className="space-y-6 pt-1">
                    {MOCK_MODULES.map((module) => (
                      <div
                        key={module.id}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-[18px] bg-[#cbfc01] flex items-center justify-center shrink-0 text-black shadow-xs">
                          <Video className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div className="space-y-1 pt-0.5">
                          <h4 className="font-poppins font-bold text-neutral-950 text-base leading-snug">
                            {module.title}
                          </h4>
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

                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 space-y-2.5 shadow-xs">
                    <p className="text-xs text-neutral-500 font-semibold">Learning Progress</p>
                    <p className="font-poppins font-bold text-3xl text-neutral-950">55%</p>
                    <div className="w-full bg-neutral-200/80 h-2.5 rounded-full overflow-hidden mt-3">
                      <div className="bg-[#cbfc01] h-full rounded-full w-[55%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="space-y-10 animate-fade-in">
                {/* Heading & Subtitle */}
                <div className="space-y-3">
                  <h2 className="font-poppins font-bold text-2xl text-neutral-950">
                    What Learners Are Saying
                  </h2>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Ratings Breakdown Summary Box */}
                <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-neutral-200/90 shadow-xs flex flex-col sm:flex-row items-center gap-8">
                  {/* Big Lime Rating Box */}
                  <div className="w-32 h-32 rounded-[20px] bg-[#cbfc01] flex flex-col items-center justify-center shrink-0 text-black shadow-xs">
                    <span className="text-xs font-semibold uppercase tracking-wider text-black/80">Ratings</span>
                    <span className="font-poppins font-bold text-4xl mt-1">4.7</span>
                  </div>

                  {/* Rating Bars */}
                  <div className="flex-1 w-full space-y-3">
                    {reviewBreakdown.map((row) => (
                      <div key={row.stars} className="flex items-center gap-4 text-xs font-medium text-neutral-700">
                        {/* Progress Bar */}
                        <div className="flex-1 bg-neutral-200/70 h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-[#cbfc01] h-full rounded-full"
                            style={{ width: `${row.percent}%` }}
                          />
                        </div>
                        {/* 5 Stars */}
                        <div className="flex items-center gap-1 shrink-0">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-neutral-800 text-neutral-800"
                            />
                          ))}
                        </div>
                        {/* Count */}
                        <span className="w-8 text-right font-medium text-neutral-600">{row.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews Filter Pills */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-bold text-xl text-neutral-950">
                    Individual Reviews:
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map((filter) => {
                      const isActive = activeReviewFilter === filter;
                      return (
                        <button
                          key={filter}
                          onClick={() => setActiveReviewFilter(filter)}
                          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#cbfc01] text-black shadow-xs font-bold'
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
                <div className="space-y-5">
                  {filteredReviews.length > 0 ? (
                    filteredReviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/90 space-y-4 shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3.5">
                            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                              <Image
                                src={review.avatar}
                                alt={review.author}
                                fill
                                unoptimized
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-poppins font-semibold text-base text-neutral-950 leading-tight">
                                {review.author}
                              </p>
                              <p className="text-xs text-neutral-500 mt-0.5">{review.role}</p>
                            </div>
                          </div>
                          <span className="text-xs text-neutral-400 font-normal">{review.timeAgo}</span>
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-neutral-800 text-neutral-800" />
                          ))}
                        </div>

                        <p className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                          {review.content}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center bg-neutral-50 rounded-2xl border border-neutral-200 text-neutral-500 text-sm">
                      No reviews match this rating filter.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: STICKY ENROLLMENT CARD */}
          <div className="lg:col-span-4 sticky top-28">
            <ScrollReveal direction="up" delay={100} distance={20} duration={600}>
              <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-neutral-200/90 shadow-xl space-y-6">
              {/* Title Header */}
              <div>
                <h3 className="font-poppins font-bold text-xl text-neutral-950">
                  112 Lessons (24 hours)
                </h3>
              </div>

              {/* Lesson Preview Items List */}
              <div className="space-y-3 pt-1">
                {[
                  { num: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
                  { num: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
                  { num: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
                ].map((item) => (
                  <div key={item.num} className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-neutral-400 font-medium">{item.num}</span>
                      <span className="font-medium text-neutral-800 leading-snug">{item.title}</span>
                    </div>
                    <span className="font-medium text-[#0052FE] shrink-0">{item.duration}</span>
                  </div>
                ))}
                <p className="text-xs text-neutral-400 font-normal pt-1">99 more videos</p>
              </div>

              {/* Subtitle Text */}
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed pt-1">
                {isEnrolled
                  ? 'You are enrolled in this course! Click below to open your learning space.'
                  : 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!'}
              </p>

              {/* Price & CTA Buttons */}
              <div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-poppins font-bold text-3xl sm:text-4xl text-[#0052FE]">${course.price}</span>
                  <span className="text-xs text-neutral-500 font-normal">/{course.priceType || 'lifetime'}</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={handleEnroll}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all shadow-md cursor-pointer ${
                      isEnrolled
                        ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                        : 'bg-[#cbfc01] text-black hover:brightness-95 active:scale-95'
                    }`}
                  >
                    {isEnrolled ? 'Go to Learning Workspace' : 'Enroll Now'}
                  </button>

                  {!isEnrolled && (
                    <button
                      type="button"
                      onClick={() => {
                        if (!isInCart(course.id)) {
                          addToCart(course);
                          showToast(`Added "${course.title}" to cart!`, 'success');
                        } else {
                          showToast(`"${course.title}" is already in your cart`, 'info');
                        }
                      }}
                      className="w-full py-3.5 px-6 rounded-full border border-neutral-300 font-semibold text-xs text-neutral-800 hover:border-neutral-900 hover:bg-neutral-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#0052FE]" />
                      <span>{isInCart(course.id) ? 'In Your Cart' : 'Add to Cart'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* This Course Include */}
              <div className="pt-4 border-t border-neutral-100 space-y-4">
                <h4 className="font-poppins font-bold text-base sm:text-lg text-neutral-950">
                  This course include
                </h4>

                <div className="space-y-3.5 text-xs sm:text-sm font-medium text-neutral-700">
                  <div className="flex items-center gap-3">
                    <Folder className="w-4.5 h-4.5 text-[#0052FE] shrink-0" />
                    <span>Learning Resources</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-4.5 h-4.5 text-[#0052FE] shrink-0" />
                    <span>Quality Lesson Videos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4.5 h-4.5 text-[#0052FE] shrink-0" />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Radio className="w-4.5 h-4.5 text-[#0052FE] shrink-0" />
                    <span>Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Creator Card */}
              <div className="pt-5 border-t border-neutral-100 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                    <Image
                      src={course.creator.avatar || MOCK_CREATOR.avatar}
                      alt={course.creator.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-sm sm:text-base text-neutral-950">
                      {course.creator.name}
                    </p>
                    <p className="text-xs text-neutral-500">{course.creator.role || 'Professional Creator'}</p>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <Link
                  href={ROUTES.CREATOR_DETAIL(course.creator.id)}
                  className="inline-block text-center py-2 px-5 rounded-full border border-neutral-300 text-neutral-800 text-xs font-semibold hover:border-neutral-950 transition-colors"
                >
                  See Full Profile
                </Link>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
