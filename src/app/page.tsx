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
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { CourseCard } from '@/components/ui/course-card';
import { AvatarGroup } from '@/components/ui/avatar-group';
import {
  DonutShape,
  SquiggleShape,
  ConeShape,
  CylinderShape,
} from '@/components/ui/decorative-shapes';
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
          HERO SECTION (Royal Blue Blueprint Grid)
          ========================================================================= */}
      <section className="bg-hero-grid relative overflow-hidden text-white pb-20 pt-2">
        {/* Navbar inside hero */}
        <Navbar variant="blue" />

        {/* Floating 3D Shapes */}
        <DonutShape className="absolute top-28 -left-12 w-44 h-44 opacity-90 transform -rotate-12" />
        <CylinderShape className="absolute top-24 right-10 w-28 h-40 opacity-90 transform rotate-12" />
        <SquiggleShape className="absolute bottom-16 left-8 w-40 h-24 opacity-80" />
        <ConeShape className="absolute top-64 right-28 w-24 h-28 opacity-75 transform rotate-45" />

        <div className="layout-container pt-12 text-center relative z-10">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.15] max-w-4xl mx-auto tracking-tight">
            Get Access to Hundreds <br /> Courses Available
          </h1>

          <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-9 max-w-2xl mx-auto">
            <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl border border-white/20">
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
                className="px-8 py-3 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Hero Visual Showcase with Floating Badges */}
          <div className="mt-14 relative max-w-3xl mx-auto">
            {/* Center Student Image with Lime Halo */}
            <div className="relative mx-auto w-72 sm:w-96 aspect-square rounded-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[#cbfc01] rounded-full scale-105 opacity-90 filter blur-xs" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
                  alt="Student with tablet"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Overlaid Badge 1: UI/UX Design */}
            <div className="absolute top-6 left-2 sm:-left-8 bg-white text-neutral-900 rounded-2xl p-3.5 shadow-xl border border-neutral-100 flex items-center gap-3 text-left animate-bounce-subtle">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <p className="font-poppins font-semibold text-sm leading-tight">UI/UX Design</p>
                <p className="text-xs text-neutral-500">200 Courses • 1000+ Students</p>
              </div>
            </div>

            {/* Overlaid Badge 2: Learning Progress */}
            <div className="absolute top-8 right-2 sm:-right-8 bg-white text-neutral-900 rounded-2xl p-4 shadow-xl border border-neutral-100 text-left w-48">
              <p className="text-xs text-neutral-500 font-medium">Learning Progress</p>
              <p className="font-poppins font-bold text-2xl mt-0.5 text-neutral-900">55%</p>
              <div className="w-full bg-neutral-100 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#cbfc01] h-full rounded-full w-[55%]" />
              </div>
            </div>

            {/* Overlaid Badge 3: Happy Students */}
            <div className="absolute -bottom-4 left-4 sm:left-4 bg-white text-neutral-900 rounded-2xl p-3 shadow-xl border border-neutral-100 text-left">
              <div className="flex items-center gap-1.5">
                <p className="font-poppins font-semibold text-xs">Happy Students</p>
                <div className="flex items-center text-[11px] font-bold">
                  <span>4.5</span>
                  <span className="text-neutral-400 font-normal ml-0.5">(240)</span>
                  <Star className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24] ml-1" />
                </div>
              </div>
              <div className="mt-2">
                <AvatarGroup extraCount="2K+" size={26} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LOGO STRIP SECTION
          ========================================================================= */}
      <section className="border-b border-neutral-100 bg-white py-10">
        <div className="layout-container">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {['Logoipsum 1', 'Logoipsum 2', 'Logoipsum 3', 'Logoipsum 4', 'Logoipsum 5'].map((name, i) => (
              <div key={i} className="flex items-center gap-2.5 font-poppins font-semibold text-neutral-600 text-lg">
                <div className="w-7 h-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                  {i + 1}
                </div>
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
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">
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
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
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
      <section className="py-20 bg-neutral-50/50 border-t border-b border-neutral-100">
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
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:border-neutral-300 transition-all duration-300 group"
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
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-950 leading-tight">
                Your Path to Professional Growth Starts Here!
              </h2>

              <p className="text-neutral-600 text-base leading-relaxed">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats Row */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-neutral-100">
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">12K</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">Students</p>
                </div>
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">70+</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">Courses</p>
                </div>
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950">16</p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">Creators</p>
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
                <div className="absolute top-4 -left-6 bg-white rounded-2xl p-3 shadow-xl border border-neutral-100 w-52">
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 mb-2">
                    <span className="bg-neutral-100 px-2 py-0.5 rounded-full">17 Lessons</span>
                    <span className="bg-neutral-100 px-2 py-0.5 rounded-full">2 hours 16 mins</span>
                  </div>
                  <p className="font-poppins font-semibold text-xs leading-snug">Learn Figma from Basic</p>
                  <p className="text-[10px] text-primary-600 mt-0.5">by purepearl studio</p>
                  <div className="mt-2 pt-1 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-neutral-600">Beginner</span>
                    <span className="font-bold text-primary-600">$25</span>
                  </div>
                </div>

                {/* Overlaid Progress Card */}
                <div className="absolute bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-neutral-100 w-48">
                  <p className="text-xs text-neutral-500">Learning Progress</p>
                  <p className="font-poppins font-bold text-2xl text-neutral-900 mt-0.5">55%</p>
                  <div className="w-full bg-neutral-100 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#cbfc01] h-full rounded-full w-[55%]" />
                  </div>
                </div>

                {/* Lime Decorative Element */}
                <SquiggleShape className="absolute -top-10 -right-8 w-28 h-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CREATE & MANAGE COURSES EASILY (Split Section 2)
          ========================================================================= */}
      <section className="py-24 bg-neutral-50">
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
                <div className="absolute top-4 -left-6 bg-primary-600 text-white rounded-2xl p-3.5 shadow-xl w-44">
                  <p className="text-[11px] text-white/80">Total Revenue</p>
                  <p className="text-[10px] text-white/60">July 1-28</p>
                  <p className="font-poppins font-bold text-xl mt-1">$120.29</p>
                </div>

                {/* Year to Date Badge */}
                <div className="absolute top-28 -left-6 bg-primary-600 text-white rounded-2xl p-3.5 shadow-xl w-44">
                  <p className="text-[11px] text-white/80">Year to Date</p>
                  <p className="text-[10px] text-white/60">2023</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="font-poppins font-bold text-xl">$1,200.38</p>
                    <span className="text-[10px] bg-[#cbfc01] text-black font-bold px-1.5 py-0.5 rounded-full">+12%</span>
                  </div>
                </div>

                {/* Happy Students Badge */}
                <div className="absolute -bottom-4 right-2 bg-white rounded-2xl p-3 shadow-xl border border-neutral-100">
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
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-950 leading-tight">
                Create &amp; Manage <br /> Courses Easily.
              </h2>

              <p className="text-neutral-600 text-base leading-relaxed">
                <strong className="text-neutral-900 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
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
                    <CheckCircle2 className="w-5 h-5 text-primary-600 fill-primary-50 shrink-0" />
                    <span className="font-medium text-neutral-800 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UNLOCK YOUR POTENTIAL AS A CREATOR BANNER (Blueprint Grid)
          ========================================================================= */}
      <section className="bg-hero-grid relative overflow-hidden py-24 text-white text-center">
        <SquiggleShape className="absolute top-8 left-10 w-36 h-20 opacity-80" />
        <ConeShape className="absolute bottom-6 right-16 w-24 h-28 opacity-80 transform -rotate-12" />
        <DonutShape className="absolute -bottom-10 left-1/4 w-32 h-32 opacity-75" />

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
              className="inline-block px-8 py-3.5 rounded-full bg-[#cbfc01] text-black font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-xl"
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DISCOVER WHAT OUR COMMUNITY IS SAYING (Testimonials)
          ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-5">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-neutral-950 leading-tight">
                Discover What Our <br /> Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* 3 Testimonials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
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
                      <p className="font-poppins font-semibold text-neutral-900 text-sm">{item.name}</p>
                      <p className="text-xs text-primary-600 font-medium">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
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
