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
    <div className="space-y-8 font-satoshi pb-12">
      {/* Header Profile Greeting Banner */}
      <div className="bg-hero-grid rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-5 relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/80 shadow-lg relative bg-white/10 shrink-0">
            <Image
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
              alt={user?.name || 'Student Profile'}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#cbfc01] text-black font-semibold text-xs">
                {user?.role || 'Student & Creator'}
              </span>
            </div>
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-white mt-1">
              Welcome back, {user?.name || 'Jamie Davis'}!
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-0.5">
              Track your learning progress and manage your saved courses.
            </p>
          </div>
        </div>

        <Link
          href={ROUTES.COURSES}
          className="px-6 py-3 rounded-full bg-[#cbfc01] text-black font-semibold text-xs hover:brightness-95 active:scale-95 transition-all shadow-md shrink-0 cursor-pointer relative z-10"
        >
          Explore More Courses
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium">Enrolled Courses</p>
            <p className="font-poppins font-bold text-2xl text-neutral-950 mt-0.5">3</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium">Hours Learned</p>
            <p className="font-poppins font-bold text-2xl text-neutral-950 mt-0.5">14.5 hrs</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium">Certificates</p>
            <p className="font-poppins font-bold text-2xl text-neutral-950 mt-0.5">1</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium">Wishlist Saved</p>
            <p className="font-poppins font-bold text-2xl text-neutral-950 mt-0.5">{wishlist.length}</p>
          </div>
        </div>
      </div>

      {/* Tabs and Search Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2">
          {[
            { id: 'enrolled' as const, label: `In Progress (${enrolledCourses.length})` },
            { id: 'wishlist' as const, label: `Wishlist (${wishlistedCourses.length})` },
            { id: 'certificates' as const, label: 'Certificates (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Live Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top.1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search my dashboard..."
            className="w-full bg-white pl-9 pr-4 py-2 rounded-full border border-neutral-200 text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900"
          />
        </div>
      </div>

      {/* Tab Content: Enrolled Courses */}
      {activeTab === 'enrolled' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEnrolled.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[1.6/1] bg-neutral-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                    Last active: {course.lastAccessed}
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="font-poppins font-bold text-base text-neutral-900 line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-neutral-500">by {course.creator.name}</p>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-700">
                      <span>Course Completion</span>
                      <span className="text-primary-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#cbfc01] h-full rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <Link
                  href={ROUTES.COURSE_DETAIL(course.slug)}
                  className="w-full py-2.5 rounded-full bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Continue Learning</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: Wishlist */}
      {activeTab === 'wishlist' && (
        <div>
          {wishlistedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-neutral-50 rounded-3xl border border-neutral-200 p-8 max-w-md mx-auto">
              <Heart className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
              <h3 className="font-bold text-base text-neutral-900">Your wishlist is empty</h3>
              <p className="text-xs text-neutral-500 mt-1 mb-5">
                Browse our catalog and bookmark courses you want to take later.
              </p>
              <Link
                href={ROUTES.COURSES}
                className="px-6 py-2.5 rounded-full bg-[#cbfc01] text-black font-semibold text-xs inline-block hover:brightness-95"
              >
                Browse Courses
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Tab Content: Certificates */}
      {activeTab === 'certificates' && (
        <div className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-sm flex items-center justify-between gap-6 max-w-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-base text-neutral-900">
                UI/UX Design Masterclass
              </h4>
              <p className="text-xs text-neutral-500">Issued on Sept 15, 2026 &bull; Verified</p>
            </div>
          </div>
          <button className="px-4 py-2 rounded-full border border-neutral-300 text-neutral-800 text-xs font-semibold hover:border-neutral-900 cursor-pointer">
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
