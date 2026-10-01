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
    if (!trimmed) {
      router.push('/courses');
    } else {
      router.push(`/courses?search=${encodeURIComponent(query.trim())}`);
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

      {/* ── 6 Decorative 3D / Doodle Shapes (Hidden on mobile to prevent layout clutter) ── */}
      <div className="hidden md:block absolute -left-10 lg:left-0 top-[20%] w-40 sm:w-48 lg:w-[267px] pointer-events-none select-none z-10 animate-float">
        <Image
          src="/home/Hero/left1.png"
          alt="Decorative Shape"
          width={267}
          height={387}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="hidden md:block absolute left-4 sm:left-12 lg:left-24 top-[46%] w-24 sm:w-32 lg:w-[177px] pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/home/Hero/left2.png"
          alt="Decorative Shape"
          width={177}
          height={176}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="hidden md:block absolute -left-12 sm:-left-6 lg:left-0 bottom-0 w-44 sm:w-56 lg:w-[346px] pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/home/Hero/left3.png"
          alt="Decorative Shape"
          width={346}
          height={343}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="hidden md:block absolute -right-8 lg:right-0 top-[18%] w-32 sm:w-40 lg:w-[213px] pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/home/Hero/right1.svg"
          alt="Decorative Shape"
          width={213}
          height={372}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="hidden md:block absolute right-6 sm:right-14 lg:right-28 top-[44%] w-24 sm:w-32 lg:w-[190px] pointer-events-none select-none z-10 animate-float">
        <Image
          src="/home/Hero/right2.svg"
          alt="Decorative Shape"
          width={190}
          height={189}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="hidden md:block absolute -right-10 lg:right-0 bottom-4 w-40 sm:w-52 lg:w-[317px] pointer-events-none select-none z-10 animate-float-reverse">
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
        <h1 className="font-poppins text-center font-bold tracking-tight text-white text-3xl sm:text-5xl md:text-6xl lg:text-[76px] leading-snug sm:leading-[1.08] max-w-4xl animate-reveal-up">
          Get Access to Hundreds
          <br className="hidden sm:inline" />
          Courses Available
        </h1>

        <p className="mt-4 sm:mt-6 text-center text-xs sm:text-base md:text-lg text-white/90 max-w-xl font-normal leading-relaxed animate-reveal-up delay-100">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* ── Search Bar + Dropdown ── */}
        <div ref={searchRef} className="relative mt-6 sm:mt-10 w-full max-w-xl z-50 animate-reveal-up delay-200">
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 bg-white/0">
            <div className="relative flex-1 w-full text-zinc-900 group">
              <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 size-4.5 sm:size-5 text-zinc-400 group-focus-within:text-primary-600 transition-colors stroke-2 pointer-events-none" />
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
                className="w-full h-12 sm:h-14 pl-11 sm:pl-13 pr-10 rounded-full bg-white placeholder:text-zinc-400 text-sm sm:text-base font-normal shadow-lg shadow-blue-950/20 focus:outline-none focus:ring-3 focus:ring-[#D4FB20] focus:shadow-xl transition-all duration-200"
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
              className="w-full sm:w-auto h-12 sm:h-14 px-8 rounded-full bg-[#D4FB20] text-black font-semibold text-sm sm:text-base hover:bg-[#c3ea1a] hover:shadow-lg hover:shadow-black/15 active:scale-[0.97] transition-all duration-200 shadow-md shadow-black/10 shrink-0 cursor-pointer"
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
        <div className="relative w-full max-w-4xl mt-8 sm:mt-16 flex justify-center items-end min-h-[300px] sm:min-h-[480px] lg:min-h-[560px]">
          {/* Center Back Halo Arc */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[850px] pointer-events-none select-none z-0 animate-pulse-glow">
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
          <div className="relative z-10 w-[260px] sm:w-[480px] lg:w-[640px] flex justify-center pointer-events-none select-none">
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
          <div className="absolute top-[8%] sm:top-[18%] left-1 sm:left-6 lg:left-12 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-[0_12px_32px_rgba(0,15,80,0.18)] border border-white/60 text-left scale-85 sm:scale-100 origin-top-left animate-float hover:scale-105 transition-transform duration-300">
            <h4 className="font-bold text-zinc-900 text-[11px] sm:text-sm">UI/UX Design</h4>
            <p className="text-[9px] sm:text-xs text-zinc-500 font-medium mt-0.5">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* Badge 2: Learning Progress 55% */}
          <div className="absolute top-[12%] sm:top-[22%] right-1 sm:right-6 lg:right-10 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-[0_12px_32px_rgba(0,15,80,0.18)] border border-white/60 w-36 sm:w-50 text-left scale-85 sm:scale-100 origin-top-right animate-float-reverse hover:scale-105 transition-transform duration-300">
            <span className="text-[10px] sm:text-xs font-semibold text-zinc-500">
              Learning Progress
            </span>
            <div className="text-xl sm:text-3xl font-extrabold text-zinc-900 mt-0.5 sm:mt-1">55%</div>
            <div className="w-full bg-zinc-100 rounded-full h-1.5 sm:h-2 mt-1.5 sm:mt-2.5 overflow-hidden">
              <div className="bg-[#D4FB20] h-full rounded-full w-[55%] transition-all duration-1000 ease-out" />
            </div>
          </div>

          {/* Badge 3: Happy Students */}
          <div className="absolute bottom-[6%] sm:bottom-[12%] left-0 sm:left-4 lg:left-8 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-[0_12px_32px_rgba(0,15,80,0.18)] border border-white/60 text-left scale-85 sm:scale-100 origin-bottom-left animate-float-slow hover:scale-105 transition-transform duration-300">
            <h4 className="font-satoshi font-bold text-zinc-900 text-[11px] sm:text-sm tracking-tight leading-none">
              Happy Students
            </h4>
            <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-zinc-800 mt-1">
              <span>4.5</span>
              <span className="text-zinc-400 font-normal">(240)</span>
              <Star className="size-3 sm:size-3.5 fill-amber-400 text-amber-400 shrink-0" />
            </div>
            <div className="flex items-center mt-2 sm:mt-2.5">
              {studentAvatars.slice(0, 4).map((avatar, idx) => (
                <div
                  key={idx}
                  style={{ zIndex: idx + 1 }}
                  className={`relative size-5 sm:size-7 rounded-full overflow-hidden shrink-0 border border-white/80 ${
                    idx > 0 ? '-ml-1.5 sm:-ml-2' : ''
                  }`}
                >
                  <Image src={avatar} alt="Student" fill unoptimized className="object-cover" />
                </div>
              ))}
              <div
                style={{ zIndex: 10 }}
                className="relative -ml-1.5 sm:-ml-2 size-5 sm:size-7 rounded-full bg-[#D4FB20] text-black text-[8px] sm:text-[10px] font-bold flex items-center justify-center shrink-0 border border-white/80"
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
