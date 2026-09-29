'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  CheckCircle2,
  Palette,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  Star,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { CourseCard } from '@/components/ui/course-card';
import { AvatarGroup } from '@/components/ui/avatar-group';
import {
  MOCK_COURSES,
  MOCK_TESTIMONIALS,
  CATEGORIES,
} from '@/constants/mock-data';
import { ROUTES } from '@/constants/routes';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const learningPaths = [
    { title: 'Design', icon: Palette },
    { title: 'Development', icon: Code2 },
    { title: 'IT & Software', icon: Laptop },
    { title: 'Business', icon: Building2 },
    { title: 'Marketing', icon: Megaphone },
    { title: 'Photography', icon: Camera },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* =========================================================================
          HERO SECTION — 100% matched to reference design image
          Electric Blue blueprint grid background
          Large lime semicircle at bottom center
          Student centered on circle with 3 floating cards
          ========================================================================= */}
      <section className="bg-hero-grid relative overflow-hidden text-white" style={{ minHeight: '760px' }}>
        <Navbar variant="blue" />

        {/* ── 3D Floating Graphic Elements ── */}
        {/* TOP-LEFT: Lime blob / snake shape */}
        <div className="absolute top-14 left-6 xl:left-16 w-[140px] h-[180px] pointer-events-none z-10">
          <svg viewBox="0 0 140 180" fill="none" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="limeBlob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#faffc5" />
                <stop offset="40%" stopColor="#cbfc01" />
                <stop offset="80%" stopColor="#8cb400" />
                <stop offset="100%" stopColor="#546b09" />
              </linearGradient>
            </defs>
            <path d="M 30 20 Q 140 30 110 70 Q 20 110 130 130 Q 30 170 120 170" stroke="url(#limeBlob)" strokeWidth="38" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* MID-LEFT: White wavy ribbon */}
        <div className="absolute top-[58%] left-[9%] xl:left-[13%] w-[90px] h-[110px] pointer-events-none z-10 -rotate-12">
          <svg viewBox="0 0 100 120" fill="none" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="whiteWaveL" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
            <path d="M 15 20 Q 90 25 70 60 Q 15 95 80 105" stroke="url(#whiteWaveL)" strokeWidth="22" strokeLinecap="round" />
          </svg>
        </div>

        {/* BOTTOM-LEFT: Giant white torus ring */}
        <div className="absolute bottom-0 -left-16 xl:-left-8 w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] pointer-events-none z-20 -rotate-12">
          <svg viewBox="0 0 240 240" fill="none" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="whiteTorus" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="85%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
            <path d="M 120 16 A 104 104 0 1 0 120 224 A 104 104 0 1 0 120 16 M 120 64 A 56 56 0 1 1 120 176 A 56 56 0 1 1 120 64" fill="url(#whiteTorus)" />
          </svg>
        </div>

        {/* TOP-RIGHT: Lime tall capsule/cylinder */}
        <div className="absolute top-8 right-6 xl:right-16 w-[120px] h-[240px] xl:w-[140px] xl:h-[280px] pointer-events-none z-10 rotate-12">
          <svg viewBox="0 0 120 260" fill="none" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="limeCapsule" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdffe4" />
                <stop offset="35%" stopColor="#cbfc01" />
                <stop offset="75%" stopColor="#8cb400" />
                <stop offset="100%" stopColor="#465a0d" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="100" height="240" rx="50" fill="url(#limeCapsule)" />
          </svg>
        </div>

        {/* MID-RIGHT: White 3D triangle / pyramid */}
        <div className="absolute top-[42%] right-[9%] xl:right-[14%] w-[90px] h-[100px] pointer-events-none z-10 rotate-6">
          <svg viewBox="0 0 120 140" fill="none" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="triGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="triGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d1d9e8" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
            <polygon points="60,8 114,124 60,134" fill="url(#triGrad1)" />
            <polygon points="60,8 60,134 6,104" fill="url(#triGrad2)" />
          </svg>
        </div>

        {/* BOTTOM-RIGHT: White wavy ribbon */}
        <div className="absolute bottom-16 right-6 xl:right-14 w-[110px] h-[130px] pointer-events-none z-20 rotate-12">
          <svg viewBox="0 0 130 160" fill="none" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="whiteWaveR" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
            <path d="M 15 20 Q 120 20 90 70 Q 15 120 115 145" stroke="url(#whiteWaveR)" strokeWidth="26" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── Hero Text Content ── */}
        <div className="layout-container pt-10 text-center relative z-20">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-[64px] leading-[1.12] max-w-4xl mx-auto tracking-tight">
            Get Access to Hundreds <br />Courses Available
          </h1>
          <p className="mt-5 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-[540px] mx-auto relative z-30">
            <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-neutral-800 placeholder:text-neutral-400 text-sm md:text-base focus:outline-none"
              />
              <Link
                href={ROUTES.COURSES}
                className="px-7 py-3 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                Search
              </Link>
            </div>
          </div>
        </div>

        {/* ── Hero Bottom Visual: Lime Circle + Student + Floating Cards ── */}
        <div className="relative w-full flex justify-center items-end overflow-visible" style={{ height: '420px', marginTop: '48px' }}>

          {/* Giant Lime semi-circle at the very bottom center */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-[#cbfc01] pointer-events-none z-0"
            style={{ width: '700px', height: '700px', bottom: '-350px' }}
          />

          {/* Student photo — sits centered ON the lime circle */}
          <div className="relative z-10" style={{ width: '380px', height: '460px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-student.jpg"
              alt="Student with headphones holding laptop"
              className="w-full h-full object-cover object-top"
              style={{ borderRadius: '200px 200px 0 0' }}
            />
          </div>

          {/* ── Floating Card: UI/UX Design (LEFT of student) ── */}
          <div
            className="absolute z-30 bg-white rounded-2xl shadow-2xl border border-neutral-100 text-left"
            style={{ left: 'calc(50% - 340px)', top: '80px', padding: '14px 18px', minWidth: '195px' }}
          >
            <p className="font-poppins font-bold text-sm text-neutral-950">UI/UX Design</p>
            <p className="text-[12px] text-neutral-500 mt-1">200 Courses • 1000+ Students</p>
          </div>

          {/* ── Floating Card: Learning Progress 55% (RIGHT of student) ── */}
          <div
            className="absolute z-30 bg-white rounded-2xl shadow-2xl border border-neutral-100 text-left"
            style={{ right: 'calc(50% - 340px)', top: '70px', padding: '14px 18px', minWidth: '185px' }}
          >
            <p className="text-[11px] text-neutral-500 font-medium">Learning Progress</p>
            <p className="font-poppins font-bold text-[32px] leading-none mt-1 text-neutral-950">55%</p>
            <div className="w-full bg-neutral-100 rounded-full mt-3 overflow-hidden" style={{ height: '6px' }}>
              <div className="bg-[#cbfc01] h-full rounded-full" style={{ width: '55%' }} />
            </div>
          </div>

          {/* ── Floating Card: Happy Students (BOTTOM LEFT) ── */}
          <div
            className="absolute z-30 bg-white rounded-2xl shadow-2xl border border-neutral-100 text-left"
            style={{ left: 'calc(50% - 320px)', bottom: '60px', padding: '12px 16px' }}
          >
            <div className="flex items-center gap-2">
              <p className="font-poppins font-semibold text-xs text-neutral-950">Happy Students</p>
              <div className="flex items-center gap-0.5 text-[11px]">
                <span className="font-bold text-neutral-800">4.5</span>
                <span className="text-neutral-400">(240)</span>
                <Star className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24]" />
              </div>
            </div>
            <div className="mt-2">
              <AvatarGroup extraCount="2K+" size={28} />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          LOGO STRIP SECTION
          ========================================================================= */}
      <section className="border-b border-neutral-200/80 bg-white py-12 relative z-10">
        <div className="layout-container">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-65 hover:opacity-100 transition-opacity duration-300">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex items-center gap-2.5 font-poppins font-bold text-neutral-700 text-xl tracking-tight">
                <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>Logoipsum</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DISCOVER YOUR PASSION, BUILD YOUR SKILLS (Courses Grid)
          ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] text-neutral-950 leading-tight">
              Discover Your Passion, <br className="hidden sm:inline" /> Build Your Skills
            </h2>
            <p className="text-neutral-600 text-[15px] leading-relaxed">
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category Chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#cbfc01] text-black font-semibold shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* 6 Course Cards Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXPLORE DIVERSE LEARNING PATHS AT BYTESPACE
          ========================================================================= */}
      <section className="py-20 bg-neutral-50/60 border-t border-b border-neutral-200/80">
        <div className="layout-container text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="text-neutral-600 text-[15px] leading-relaxed">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>

          {/* Category Icon Cards Grid */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {learningPaths.map((path) => {
              const Icon = path.icon;
              return (
                <Link
                  key={path.title}
                  href={ROUTES.COURSES}
                  className="bg-white rounded-2xl p-7 border border-neutral-200/90 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#cbfc01] flex items-center justify-center text-black shadow-xs group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>
                  <span className="font-poppins font-semibold text-neutral-900 text-sm">
                    {path.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          YOUR PATH TO PROFESSIONAL GROWTH STARTS HERE (Split Section 1)
          ========================================================================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] text-neutral-950 leading-tight">
                Your Path to Professional Growth Starts Here!
              </h2>

              <p className="text-neutral-600 text-base leading-relaxed">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats Row */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-neutral-100">
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-[#0445ff]">12K</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">Students</p>
                </div>
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-[#0445ff]">70+</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">Courses</p>
                </div>
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-[#0445ff]">16</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">Creators</p>
                </div>
              </div>
            </div>

            {/* Right Visual Image with Overlays */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
                    alt="Professional Learning"
                    className="w-full h-[420px] object-cover"
                  />
                </div>

                {/* Overlaid Mini Course Card */}
                <div className="absolute top-4 -left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-neutral-100 w-56">
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 mb-2">
                    <span className="bg-neutral-100 px-2 py-0.5 rounded-full">17 Lessons</span>
                    <span className="bg-neutral-100 px-2 py-0.5 rounded-full">2 hours 16 mins</span>
                  </div>
                  <p className="font-poppins font-semibold text-xs leading-snug">Learn Figma from Basic</p>
                  <p className="text-[10px] text-[#0445ff] font-medium mt-0.5">by purepearl studio</p>
                  <div className="mt-2 pt-1 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-neutral-600">Beginner</span>
                    <span className="font-bold text-[#0445ff]">$25</span>
                  </div>
                </div>

                {/* Overlaid Progress Card */}
                <div className="absolute bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-neutral-100 w-48">
                  <p className="text-xs text-neutral-500 font-medium">Learning Progress</p>
                  <p className="font-poppins font-bold text-2xl text-neutral-900 mt-0.5">55%</p>
                  <div className="w-full bg-neutral-100 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#cbfc01] h-full rounded-full w-[55%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CREATE & MANAGE COURSES EASILY (Split Section 2)
          ========================================================================= */}
      <section className="py-24 bg-neutral-50/70">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Visual Image with Revenue Badges */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
                    alt="Course Creator"
                    className="w-full h-[440px] object-cover"
                  />
                </div>

                {/* Total Revenue Badge */}
                <div className="absolute top-4 -left-6 bg-[#0445ff] text-white rounded-2xl p-4 shadow-2xl w-44">
                  <p className="text-[11px] text-white/80 font-medium">Total Revenue</p>
                  <p className="text-[10px] text-white/60">July 1-28</p>
                  <p className="font-poppins font-bold text-xl mt-1">$120.29</p>
                </div>

                {/* Year to Date Badge */}
                <div className="absolute top-28 -left-6 bg-[#0445ff] text-white rounded-2xl p-4 shadow-2xl w-44">
                  <p className="text-[11px] text-white/80 font-medium">Year to Date</p>
                  <p className="text-[10px] text-white/60">2023</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="font-poppins font-bold text-xl">$1,200.38</p>
                    <span className="text-[10px] bg-[#cbfc01] text-black font-bold px-1.5 py-0.5 rounded-full">+12%</span>
                  </div>
                </div>

                {/* Happy Students Badge */}
                <div className="absolute -bottom-4 right-2 bg-white rounded-2xl p-3.5 shadow-2xl border border-neutral-100">
                  <div className="flex items-center gap-1.5">
                    <p className="font-poppins font-semibold text-xs">Happy Students</p>
                    <div className="flex items-center text-[11px] font-bold">
                      <span>4.5</span>
                      <span className="text-neutral-400 font-normal ml-0.5">(240)</span>
                      <Star className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24] ml-1" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <AvatarGroup extraCount="2K+" size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] text-neutral-950 leading-tight">
                Create &amp; Manage <br /> Courses Easily.
              </h2>

              <p className="text-neutral-600 text-base leading-relaxed">
                <strong className="text-neutral-950 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* Checklist */}
              <div className="space-y-4 pt-2">
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0445ff] fill-primary-50 shrink-0" />
                    <span className="font-medium text-neutral-800 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UNLOCK YOUR POTENTIAL AS A CREATOR BANNER (Electric Blue Blueprint Grid)
          ========================================================================= */}
      <section className="bg-hero-grid relative overflow-hidden py-24 text-white text-center">
        <div className="layout-container max-w-4xl mx-auto relative z-10 space-y-6">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Unlock Your Potential as a <br /> Creator with ByteSpace
          </h2>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="pt-4">
            <Link
              href={ROUTES.AUTH.REGISTER}
              className="inline-block px-9 py-3.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-2xl"
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DISCOVER WHAT OUR COMMUNITY IS SAYING (Testimonials with Soft Lime Glow)
          ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#f5ffc8]/50 via-[#f9ffe2]/30 to-white">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-5">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950 leading-tight">
                Discover What Our <br /> Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-neutral-700 text-[15px] leading-relaxed">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* 3 Testimonials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-neutral-200"
                    />
                    <div>
                      <p className="font-poppins font-semibold text-neutral-950 text-sm">{item.name}</p>
                      <p className="text-xs text-[#0445ff] font-medium">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <Footer />
    </div>
  );
}
