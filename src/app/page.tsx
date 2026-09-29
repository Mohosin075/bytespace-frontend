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
      <section className="bg-hero-grid relative overflow-hidden text-white" style={{ minHeight: '780px' }}>
        <Navbar variant="blue" />

        {/* ══════════════════════════════════════════════════════════════════
            ALL 6 FLOATING 3D SHAPE ELEMENTS
            Positions matched pixel-perfect to reference design image.
            Reference canvas: 1024×636px hero section

            LEFT SIDE:
              left1 (lime wavy ribbon):  left edge, top ~18%
              left2 (white O/ring):      left ~10%, vertically centered ~45%
              left3 (white donut):       left ~3%, bottom ~5%

            RIGHT SIDE:
              right1 (lime capsule):     right edge, top ~12%
              right2 (white triangle):   right ~11%, top ~38%
              right3 (white wavy):       right ~2%, bottom ~5%
        ══════════════════════════════════════════════════════════════════ */}

        {/* TOP-LEFT: Lime wavy ribbon — left1.svg */}
        <div className="absolute pointer-events-none" style={{ left: '0', top: '18%', width: '12%', minWidth: '90px', maxWidth: '180px', zIndex: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/left1.svg" alt="3D Lime Ribbon" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* MID-LEFT: White 3D ring/O shape — left2.svg */}
        <div className="absolute pointer-events-none" style={{ left: '7%', top: '42%', width: '20%', minWidth: '110px', maxWidth: '240px', zIndex: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/left2.svg" alt="3D White Ring" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* BOTTOM-LEFT: White 3D donut/torus — left3.svg */}
        <div className="absolute pointer-events-none" style={{ left: '3%', bottom: '5%', width: '17%', minWidth: '110px', maxWidth: '220px', zIndex: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/left3.svg" alt="3D White Donut" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* TOP-RIGHT: Lime tall capsule/cylinder — right1.svg */}
        <div className="absolute pointer-events-none" style={{ right: '0', top: '12%', width: '10%', minWidth: '80px', maxWidth: '160px', zIndex: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/right1.svg" alt="3D Lime Capsule" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* MID-RIGHT: White 3D triangle/pyramid — right2.svg */}
        <div className="absolute pointer-events-none" style={{ right: '11%', top: '38%', width: '19%', minWidth: '100px', maxWidth: '240px', zIndex: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/right2.svg" alt="3D White Triangle" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* BOTTOM-RIGHT: White wavy helical ribbon — right3.svg */}
        <div className="absolute pointer-events-none" style={{ right: '2%', bottom: '5%', width: '23%', minWidth: '130px', maxWidth: '300px', zIndex: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/right3.svg" alt="3D White Wave" className="w-full h-auto drop-shadow-2xl" />
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

        {/* ══════════════════════════════════════════════════════════════════
            HERO BOTTOM VISUAL STAGE
            Fixed 960px wide stage centered in section.
            Layer order (bottom → top):
              z-0  : Lime green circle (centerbackshpae.svg)
              z-10 : Boy/student image (centerman.svg)
              z-30 : Floating info cards
        ══════════════════════════════════════════════════════════════════ */}
        <div className="relative w-full flex justify-center overflow-visible" style={{ height: '460px', marginTop: '36px' }}>
          <div className="relative" style={{ width: '960px', height: '460px' }}>

            {/* ── Lime green full circle backdrop ──
                The SVG is a circle centered at cx=574.5, cy=574.5 with r=414.5 + stroke-width=320.
                Outer radius = 414.5 + 160 = 574.5px  → matches the SVG viewBox width (1149px = 2×574.5).
                We need the TOP HALF only visible. Position it so its vertical center
                sits at the bottom edge of the 460px stage → top = 460 - 574px ≈ -114px.
                Width = 960px so it fills the stage exactly. */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: '860px',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '-30px',
                zIndex: 0,
                overflow: 'hidden',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero/centerbackshpae.svg"
                alt="Lime semicircle background"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* ── Student / Boy image ──
                Centered horizontally, anchored to bottom of stage.
                Width slightly narrower than lime circle so circle peeks out on sides. */}
            <div
              className="absolute"
              style={{
                width: '480px',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '0',
                zIndex: 10,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero/centerman.svg"
                alt="Student with headphones holding laptop"
                className="w-full h-auto object-contain"
                style={{ display: 'block' }}
              />
            </div>

            {/* ── Card 1: UI/UX Design (top-left of stage) ── */}
            <div
              className="absolute z-30 bg-white rounded-2xl border border-neutral-100 text-left"
              style={{
                left: '40px',
                top: '90px',
                padding: '14px 18px',
                minWidth: '210px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              }}
            >
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: '#1a1a1a' }}>UI/UX Design</p>
              <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>200 Courses • 1000+ Students</p>
            </div>

            {/* ── Card 2: Learning Progress 55% (top-right of stage) ── */}
            <div
              className="absolute z-30 bg-white rounded-2xl border border-neutral-100 text-left"
              style={{
                right: '40px',
                top: '80px',
                padding: '14px 20px',
                minWidth: '190px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              }}
            >
              <p style={{ fontSize: '11px', color: '#888', fontWeight: 500 }}>Learning Progress</p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '34px', lineHeight: 1, marginTop: '4px', color: '#111' }}>55%</p>
              <div style={{ width: '100%', background: '#f0f0f0', borderRadius: '99px', height: '6px', marginTop: '10px', overflow: 'hidden' }}>
                <div style={{ width: '55%', height: '100%', background: '#cbfc01', borderRadius: '99px' }} />
              </div>
            </div>

            {/* ── Card 3: Happy Students (bottom-left of stage) ── */}
            <div
              className="absolute z-30 bg-white rounded-2xl border border-neutral-100 text-left"
              style={{
                left: '40px',
                bottom: '60px',
                padding: '12px 16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '12px', color: '#111' }}>Happy Students</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '11px' }}>
                  <span style={{ fontWeight: 700, color: '#333' }}>4.5</span>
                  <span style={{ color: '#aaa' }}>(240)</span>
                  <Star className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24]" />
                </div>
              </div>
              <div className="mt-2">
                <AvatarGroup extraCount="2K+" size={28} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LOGO STRIP SECTION
          ========================================================================= */}
      <section className="border-b border-neutral-200/80 bg-white py-12 relative z-10">
        <div className="layout-container">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {/* Logo 1: Leaf / Drop swirl */}
            <div className="flex items-center gap-2.5 font-poppins font-bold text-neutral-700 text-xl tracking-tight">
              <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span>Logoipsum</span>
            </div>

            {/* Logo 2: Radiant star / burst */}
            <div className="flex items-center gap-2.5 font-poppins font-bold text-neutral-700 text-xl tracking-tight">
              <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
              </svg>
              <span>Logoipsum</span>
            </div>

            {/* Logo 3: Lightning bolt in circle */}
            <div className="flex items-center gap-2.5 font-poppins font-bold text-neutral-700 text-xl tracking-tight">
              <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5l-1.5 2.5-1-4h-2l4-8-1 5.5h2l-0.5 4z" />
              </svg>
              <span>Logoipsum</span>
            </div>

            {/* Logo 4: 4-petal flower / diamond */}
            <div className="flex items-center gap-2.5 font-poppins font-bold text-neutral-700 text-xl tracking-tight">
              <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
                <path d="M12 2c1.1 2.9 3.1 4.9 6 6-2.9 1.1-4.9 3.1-6 6-1.1-2.9-3.1-4.9-6-6 2.9-1.1 4.9-3.1 6-6z M12 10c1.1 2.9 3.1 4.9 6 6-2.9 1.1-4.9 3.1-6 6-1.1-2.9-3.1-4.9-6-6 2.9-1.1 4.9-3.1 6-6z" />
              </svg>
              <span>Logoipsum</span>
            </div>

            {/* Logo 5: Segmented globe / halftone */}
            <div className="flex items-center gap-2.5 font-poppins font-bold text-neutral-700 text-xl tracking-tight">
              <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>Logoipsum</span>
            </div>
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
              const isMore = category === '+ More';
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#cbfc01] text-black font-semibold shadow-xs'
                      : isMore
                        ? 'bg-transparent text-[#0445ff] font-semibold hover:underline'
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
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">12K</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">Students</p>
                </div>
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">70+</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">Courses</p>
                </div>
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">16</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">Creators</p>
                </div>
              </div>
            </div>

            {/* Right Visual Image with Overlays & 3D Lime Squiggle */}
            <div className="lg:col-span-6 relative">
              {/* 3D Lime Squiggle behind right side */}
              <div className="absolute -top-10 -right-4 w-32 h-44 pointer-events-none z-0 rotate-12">
                <svg viewBox="0 0 140 180" fill="none" className="w-full h-full drop-shadow-xl">
                  <path d="M 30 20 Q 140 30 110 70 Q 20 110 130 130 Q 30 170 120 170" stroke="#cbfc01" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative mx-auto max-w-md z-10">
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
            {/* Left Visual Image with Revenue Badges & 3D Lime Shape */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              {/* 3D Lime Squiggle behind image */}
              <div className="absolute top-28 -right-6 w-32 h-44 pointer-events-none z-0 -rotate-12">
                <svg viewBox="0 0 140 180" fill="none" className="w-full h-full drop-shadow-xl">
                  <path d="M 30 20 Q 140 30 110 70 Q 20 110 130 130 Q 30 170 120 170" stroke="#cbfc01" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative mx-auto max-w-md z-10">
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
        {/* Floating 3D Shapes on Creator Banner */}
        {/* Mid-Left: White wavy ribbon */}
        <div className="absolute top-1/3 left-4 xl:left-12 w-24 h-28 pointer-events-none z-10 -rotate-12 opacity-90">
          <svg viewBox="0 0 100 120" fill="none" className="w-full h-full drop-shadow-xl">
            <path d="M 15 20 Q 90 25 70 60 Q 15 95 80 105" stroke="#ffffff" strokeWidth="22" strokeLinecap="round" />
          </svg>
        </div>

        {/* Bottom-Left: White torus / donut ring */}
        <div className="absolute -bottom-12 -left-8 w-44 h-44 pointer-events-none z-10 -rotate-12 opacity-95">
          <svg viewBox="0 0 240 240" fill="none" className="w-full h-full drop-shadow-2xl">
            <path d="M 120 16 A 104 104 0 1 0 120 224 A 104 104 0 1 0 120 16 M 120 64 A 56 56 0 1 1 120 176 A 56 56 0 1 1 120 64" fill="#ffffff" />
          </svg>
        </div>

        {/* Top-Right: Lime pyramid / cone */}
        <div className="absolute top-6 right-16 xl:right-32 w-24 h-28 pointer-events-none z-10 rotate-12 opacity-90">
          <svg viewBox="0 0 120 140" fill="none" className="w-full h-full drop-shadow-xl">
            <polygon points="60,8 114,124 60,134" fill="#cbfc01" />
            <polygon points="60,8 60,134 6,104" fill="#8cb400" />
          </svg>
        </div>

        {/* Mid-Right: White vertical cylinder */}
        <div className="absolute top-1/4 -right-6 xl:right-6 w-24 h-48 pointer-events-none z-10 rotate-6 opacity-90">
          <svg viewBox="0 0 120 240" fill="none" className="w-full h-full drop-shadow-xl">
            <rect x="10" y="10" width="100" height="220" rx="50" fill="#ffffff" />
          </svg>
        </div>

        {/* Bottom-Right: Lime wavy squiggle ribbon */}
        <div className="absolute -bottom-8 right-12 xl:right-24 w-32 h-36 pointer-events-none z-10 rotate-12 opacity-95">
          <svg viewBox="0 0 140 180" fill="none" className="w-full h-full drop-shadow-xl">
            <path d="M 30 20 Q 140 30 110 70 Q 20 110 130 130 Q 30 170 120 170" stroke="#cbfc01" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="layout-container max-w-4xl mx-auto relative z-20 space-y-6">
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
