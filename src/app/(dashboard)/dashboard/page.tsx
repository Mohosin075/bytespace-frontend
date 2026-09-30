'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Heart,
  Award,
  Clock,
  Search,
  Play,
  Sparkles,
  Download,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { MOCK_COURSES } from '@/constants/mock-data';
import { CourseCard } from '@/components/ui/course-card';
import { ROUTES } from '@/constants/routes';

export default function DashboardPage() {
  const { user, wishlist } = useAuth();
  const [activeTab, setActiveTab] = useState<'enrolled' | 'wishlist' | 'certificates'>('enrolled');
  const [searchQuery, setSearchQuery] = useState('');

  const enrolledCourses = MOCK_COURSES.slice(0, 3).map((c, i) => ({
    ...c,
    progress: [65, 30, 90][i],
    lastAccessed: ['2 hours ago', 'Yesterday', '3 days ago'][i],
  }));

  const wishlistedCourses = MOCK_COURSES.filter((c) => wishlist.includes(c.id));

  const filteredEnrolled = enrolledCourses.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <div className="space-y-8 font-satoshi pb-8">
      {/* =========================================================================
          HERO GREETING BANNER (MATCHES BYTESPACE BLUEPRINT / BLUE BRAND THEME)
          ========================================================================= */}
      <div className="bg-[#0052FE] bg-hero-grid rounded-[28px] p-7 sm:p-10 lg:p-12 text-white shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
        {/* Ambient Radial Glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(203, 252, 1, 0.4) 0%, transparent 70%)',
          }}
        />

        <div className="flex items-center gap-6 relative z-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/80 shadow-2xl relative bg-white/10 shrink-0">
            <Image
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
              alt={user?.name || 'Student Profile'}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#cbfc01] text-black font-bold text-xs uppercase tracking-wider shadow-sm">
                {user?.role || 'Student & Creator'}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium">
                <Sparkles className="w-3 h-3 text-[#cbfc01]" /> Pro Member
              </span>
            </div>
            <h1 className="font-poppins font-bold text-2xl sm:text-4xl text-white tracking-tight">
              Welcome back, {user?.name || 'Jamie Davis'}!
            </h1>
            <p className="text-white/85 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
              Track your course completion, jump back into your lessons, and manage your saved wishlist.
            </p>
          </div>
        </div>

        <Link
          href={ROUTES.COURSES}
          className="px-7 py-3.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-xl shrink-0 cursor-pointer relative z-10 flex items-center gap-2"
        >
          <span>Explore Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* =========================================================================
          METRICS CARDS ROW
          ========================================================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Enrolled Courses */}
        <div className="bg-white p-5 sm:p-6 rounded-[20px] border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-blue-50 text-[#0052FE] flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium">Enrolled Courses</p>
            <p className="font-poppins font-bold text-2xl text-neutral-950 mt-0.5">3</p>
          </div>
        </div>

        {/* Hours Learned */}
        <div className="bg-white p-5 sm:p-6 rounded-[20px] border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-[#cbfc01]/25 text-neutral-950 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium">Hours Learned</p>
            <p className="font-poppins font-bold text-2xl text-neutral-950 mt-0.5">14.5 hrs</p>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white p-5 sm:p-6 rounded-[20px] border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium">Certificates Earned</p>
            <p className="font-poppins font-bold text-2xl text-neutral-950 mt-0.5">1</p>
          </div>
        </div>

        {/* Wishlist Saved */}
        <div className="bg-white p-5 sm:p-6 rounded-[20px] border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium">Wishlist Items</p>
            <p className="font-poppins font-bold text-2xl text-neutral-950 mt-0.5">{wishlist.length}</p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TAB FILTERS & SEARCH ROW
          ========================================================================= */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-200/80 pb-6">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2.5">
          {[
            { id: 'enrolled' as const, label: `In Progress (${enrolledCourses.length})` },
            { id: 'wishlist' as const, label: `Saved Wishlist (${wishlistedCourses.length})` },
            { id: 'certificates' as const, label: 'My Certificates (1)' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer select-none active:scale-95 ${
                  isActive
                    ? 'bg-[#cbfc01] text-black font-bold shadow-md scale-105 ring-2 ring-[#cbfc01]/40 ring-offset-2'
                    : 'bg-neutral-100 text-neutral-700 font-medium hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Live Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search my dashboard..."
            className="w-full bg-white pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors shadow-xs"
          />
        </div>
      </div>

      {/* =========================================================================
          TAB 1: ENROLLED COURSES
          ========================================================================= */}
      {activeTab === 'enrolled' && (
        <div className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEnrolled.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-[24px] p-5 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div className="relative rounded-[18px] overflow-hidden aspect-[1.6/1] bg-neutral-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1 rounded-full shadow-md">
                    Last active: {course.lastAccessed}
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="font-poppins font-bold text-base text-neutral-950 line-clamp-1 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-neutral-500">by {course.creator.name}</p>

                  {/* Progress Bar */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100">
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-700">
                      <span>Course Completion</span>
                      <span className="text-primary-600 font-bold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#cbfc01] h-full rounded-full transition-all duration-500 shadow-xs"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <Link
                  href={ROUTES.COURSE_DETAIL(course.slug)}
                  className="w-full py-3 rounded-full bg-neutral-950 hover:bg-primary-600 text-white font-semibold text-xs transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Continue Learning</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Learning Stats / Recommended Next Step */}
          <div className="bg-neutral-50 rounded-[24px] p-6 sm:p-8 border border-neutral-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#cbfc01] flex items-center justify-center text-black font-bold shrink-0 shadow-md">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-neutral-900">
                  Keep your learning streak active!
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  You are 35% away from completing &quot;Learn Figma from Basic&quot;. Complete 2 more lessons today.
                </p>
              </div>
            </div>
            <Link
              href={ROUTES.COURSE_DETAIL('learn-figma-from-basic')}
              className="px-6 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-primary-600 transition-colors shrink-0"
            >
              Resume Lesson
            </Link>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: WISHLIST
          ========================================================================= */}
      {activeTab === 'wishlist' && (
        <div className="animate-fade-in">
          {wishlistedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 rounded-[28px] border border-neutral-200/90 p-8 max-w-md mx-auto space-y-4 shadow-sm">
              <Heart className="w-12 h-12 text-neutral-300 mx-auto" />
              <h3 className="font-poppins font-bold text-lg text-neutral-950">Your wishlist is empty</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Explore our catalog and click the heart icon on courses to bookmark them for later.
              </p>
              <Link
                href={ROUTES.COURSES}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#cbfc01] text-black font-semibold text-xs shadow-md hover:brightness-95"
              >
                <span>Browse Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TAB 3: CERTIFICATES
          ========================================================================= */}
      {activeTab === 'certificates' && (
        <div className="animate-fade-in space-y-4">
          <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="space-y-0.5">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                  Verified Certificate
                </span>
                <h4 className="font-poppins font-bold text-lg text-neutral-950">
                  UI/UX Design Masterclass
                </h4>
                <p className="text-xs text-neutral-500">Issued on Sept 15, 2026 &bull; PurePearl Studio</p>
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-950 text-neutral-900 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer shrink-0">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
