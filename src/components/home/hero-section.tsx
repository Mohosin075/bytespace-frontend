'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Star, BookOpen, User, X, ChevronRight } from 'lucide-react';
import { coursesData } from '@/data/course';
import { creatorsData } from '@/data/creator';
import { Navbar } from '@/components/shared/navbar';
import { useClickOutside } from '@/hooks/use-click-outside';

export function HeroSection() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useClickOutside(searchRef, () => setIsOpen(false));

  const trimmed = query.trim().toLowerCase();

  const matchedCourses = trimmed
    ? coursesData
        .filter(
          (c) =>
            c.title.toLowerCase().includes(trimmed) ||
            c.category.toLowerCase().includes(trimmed) ||
            c.author.name.toLowerCase().includes(trimmed)
        )
        .slice(0, 4)
    : [];

  const matchedCreators = trimmed
    ? creatorsData
        .filter(
          (cr) =>
            cr.name.toLowerCase().includes(trimmed) ||
            cr.role.toLowerCase().includes(trimmed) ||
            cr.category.toLowerCase().includes(trimmed)
        )
        .slice(0, 3)
    : [];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmed) return;
    if (matchedCourses.length > 0) {
      router.push(`/courses/${matchedCourses[0].slug}`);
    } else if (matchedCreators.length > 0) {
      router.push(`/creators/${matchedCreators[0].slug}`);
    } else {
      router.push(`/courses`);
    }
    setIsOpen(false);
  };

  const studentAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <>
      <Navbar variant="blue" />
      <section className="relative w-full overflow-hidden bg-[#0052FE] pt-28 sm:pt-32 lg:pt-36">

      {/* Blueprint Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)',
          backgroundSize: '120px 120px',
        }}
      />

      {/* ── 6 Decorative 3D / Doodle Shapes ── */}
      <div className="absolute -left-10 lg:left-0 top-[20%] w-40 sm:w-55 lg:w-66.75 pointer-events-none select-none z-10">
        <Image
          src="/home/Hero/left1.png"
          alt="Decorative Shape"
          width={267}
          height={387}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="absolute left-4 sm:left-12 lg:left-24 top-[46%] w-25 sm:w-35 lg:w-44.25 pointer-events-none select-none z-10">
        <Image
          src="/home/Hero/left2.png"
          alt="Decorative Shape"
          width={177}
          height={176}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="absolute -left-12 sm:-left-6 lg:left-0 bottom-0 w-50 sm:w-70 lg:w-86.5 pointer-events-none select-none z-10">
        <Image
          src="/home/Hero/left3.png"
          alt="Decorative Shape"
          width={346}
          height={343}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="absolute -right-8 lg:right-0 top-[18%] w-32.5 sm:w-45 lg:w-53.25 pointer-events-none select-none z-10">
        <Image
          src="/home/Hero/right1.svg"
          alt="Decorative Shape"
          width={213}
          height={372}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="absolute right-6 sm:right-14 lg:right-28 top-[44%] w-27.5 sm:w-37.5 lg:w-47.5 pointer-events-none select-none z-10">
        <Image
          src="/home/Hero/right2.svg"
          alt="Decorative Shape"
          width={190}
          height={189}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="absolute -right-10 lg:right-0 bottom-4 w-45 sm:w-62.5 lg:w-79.25 pointer-events-none select-none z-10">
        <Image
          src="/home/Hero/right3.png"
          alt="Decorative Shape"
          width={317}
          height={332}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="container relative mx-auto px-4 z-20 flex flex-col items-center">
        <h1 className="font-poppins text-center font-bold tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] max-w-4xl">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-5 sm:mt-6 text-center text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* ── Search Bar + Dropdown ── */}
        <div ref={searchRef} className="relative mt-8 sm:mt-10 w-full max-w-xl z-50">
          <form onSubmit={handleFormSubmit} className="flex items-center gap-3 bg-white/0 p-1">
            <div className="relative flex-1 text-zinc-900">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-zinc-400 stroke-2 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => {
                  if (query.trim().length > 0) setIsOpen(true);
                }}
                placeholder="Course, topic, creator"
                className="w-full h-14 pl-13 pr-10 rounded-full bg-white placeholder:text-zinc-400 text-sm sm:text-base font-normal shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-[#D4FB20]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setIsOpen(false);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-700 rounded-full transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="h-14 px-8 rounded-full bg-[#D4FB20] text-black font-semibold text-sm sm:text-base hover:bg-[#c3ea1a] active:scale-95 transition-all shadow-md shadow-black/10 shrink-0 cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Dropdown Menu */}
          {isOpen && trimmed.length > 0 && (
            <div className="absolute top-full left-1 right-1 mt-2 bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden max-h-96 overflow-y-auto z-50">
              {matchedCourses.length === 0 && matchedCreators.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-sm font-medium text-zinc-600">
                    No courses or creators matching &ldquo;{query}&rdquo;
                  </p>
                  <Link
                    href="/courses"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#0052FE] hover:underline"
                  >
                    Browse all courses <ChevronRight className="size-3" />
                  </Link>
                </div>
              ) : (
                <>
                  {/* Courses Group */}
                  {matchedCourses.length > 0 && (
                    <div className="p-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                        <BookOpen className="size-3.5 text-zinc-400" />
                        <span>Courses</span>
                      </div>
                      <div className="space-y-0.5">
                        {matchedCourses.map((course) => (
                          <Link
                            key={course.id}
                            href={`/courses/${course.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 transition-colors group"
                          >
                            <div className="relative size-10 rounded-lg overflow-hidden shrink-0 bg-zinc-100">
                              <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                unoptimized
                                className="object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <h5 className="text-sm font-medium text-zinc-900 truncate group-hover:text-[#0052FE] transition-colors">
                                {course.title}
                              </h5>
                              <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
                                <span>{course.category}</span>
                                <span>&bull;</span>
                                <span className="font-semibold text-zinc-700">${course.price}</span>
                              </div>
                            </div>
                            <ChevronRight className="size-4 text-zinc-300 group-hover:text-zinc-500 shrink-0 mr-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Creators Group */}
                  {matchedCreators.length > 0 && (
                    <div
                      className={`p-2 ${
                        matchedCourses.length > 0 ? 'border-t border-zinc-100' : ''
                      }`}
                    >
                      <div className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                        <User className="size-3.5 text-zinc-400" />
                        <span>Creators</span>
                      </div>
                      <div className="space-y-0.5">
                        {matchedCreators.map((creator) => (
                          <Link
                            key={creator.id}
                            href={`/creators/${creator.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 transition-colors group"
                          >
                            <div className="relative size-10 rounded-full overflow-hidden shrink-0 bg-zinc-100 border border-zinc-200">
                              <Image
                                src={creator.avatar}
                                alt={creator.name}
                                fill
                                unoptimized
                                className="object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <h5 className="text-sm font-medium text-zinc-900 truncate group-hover:text-[#0052FE] transition-colors">
                                {creator.name}
                              </h5>
                              <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
                                <span>{creator.role}</span>
                                <span>&bull;</span>
                                <span>{creator.category}</span>
                              </div>
                            </div>
                            <ChevronRight className="size-4 text-zinc-300 group-hover:text-zinc-500 shrink-0 mr-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* ── Student Centerpiece + Lime Halo Backdrop + Badges ── */}
        <div className="relative w-full max-w-4xl mt-12 sm:mt-16 flex justify-center items-end min-h-115 sm:min-h-130 lg:min-h-145">
          {/* Center Back Halo Arc */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-137.5 sm:w-200 lg:w-250 pointer-events-none select-none z-0">
            <Image
              src="/home/Hero/centerbackshpae.svg"
              alt="Center Back Halo"
              width={1149}
              height={442}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Centerman Student Image */}
          <div className="relative z-10 w-95 sm:w-135 lg:w-180.5 flex justify-center pointer-events-none select-none">
            <Image
              src="/home/Hero/centerman.svg"
              alt="ByteSpace Student"
              width={722}
              height={515}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Badge 1: UI/UX Design */}
          <div className="absolute top-[16%] sm:top-[20%] left-2 sm:left-10 lg:left-14 z-20 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl animate-in fade-in duration-300 text-left">
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm">UI/UX Design</h4>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-0.5">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* Badge 2: Learning Progress 55% */}
          <div className="absolute top-[22%] sm:top-[24%] right-2 sm:right-8 lg:right-12 z-20 bg-white rounded-2xl p-4 sm:p-5 shadow-xl w-45 sm:w-52.5 animate-in fade-in duration-300 text-left">
            <span className="text-[11px] sm:text-xs font-semibold text-zinc-500">
              Learning Progress
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">55%</div>
            <div className="w-full bg-zinc-100 rounded-full h-2 mt-2.5 overflow-hidden">
              <div className="bg-[#D4FB20] h-full rounded-full w-[55%]" />
            </div>
          </div>

          {/* Badge 3: Happy Students */}
          <div className="absolute bottom-[10%] sm:bottom-[14%] left-0 sm:left-4 lg:left-8 z-20 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl animate-in fade-in duration-300 text-left">
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm tracking-tight leading-none">
              Happy Students
            </h4>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-800 mt-1">
              <span>4.5</span>
              <span className="text-zinc-400 font-normal">(240)</span>
              <Star className="size-3.5 fill-amber-400 text-amber-400 shrink-0" />
            </div>
            <div className="flex items-center mt-2.5">
              {studentAvatars.map((avatar, idx) => (
                <div
                  key={idx}
                  style={{ zIndex: idx + 1 }}
                  className={`relative size-6 sm:size-7 rounded-full overflow-hidden shrink-0 ${
                    idx > 0 ? '-ml-2' : ''
                  }`}
                >
                  <Image src={avatar} alt="Student" fill unoptimized className="object-cover" />
                </div>
              ))}
              <div
                style={{ zIndex: 10 }}
                className="relative -ml-2 size-6 sm:size-7 rounded-full bg-[#D4FB20] text-black text-[9px] sm:text-[10px] font-bold flex items-center justify-center shrink-0"
              >
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
