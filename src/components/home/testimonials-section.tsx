'use client';

import React from 'react';
import Image from 'next/image';
import { MOCK_TESTIMONIALS } from '@/constants/mock-data';
import { SectionTitle } from '@/components/ui/section-header';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden font-satoshi">
      {/* ── Ambient Radial Glows (Exact to Screenshot) ── */}
      {/* 1. Top Center/Right Lime Ambient Glow */}
      <div
        className="absolute -top-24 sm:-top-32 left-[52%] -translate-x-1/2 w-[700px] sm:w-[900px] lg:w-[1050px] h-[500px] sm:h-[620px] rounded-full blur-[100px] pointer-events-none select-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(var(--secondary-rgb), 0.48) 0%, rgba(var(--secondary-rgb), 0.22) 42%, rgba(var(--secondary-rgb), 0.05) 70%, transparent 100%)',
        }}
      />

      {/* 2. Top Right Lime Accent */}
      <div
        className="absolute -top-16 -right-20 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full blur-[95px] pointer-events-none select-none"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--secondary-rgb), 0.35) 0%, rgba(var(--secondary-rgb), 0.14) 48%, transparent 75%)',
        }}
      />

      {/* 3. Bottom Left Corner Soft Blue Glow (behind Sarah M.) */}
      <div
        className="absolute -bottom-24 sm:-bottom-32 -left-20 sm:-left-28 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full blur-[90px] pointer-events-none select-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.20) 0%, rgba(147, 197, 253, 0.16) 42%, rgba(var(--primary-rgb), 0.02) 68%, transparent 100%)',
        }}
      />

      {/* 4. Top Left Soft Blue Accent */}
      <div
        className="absolute top-[4%] -left-28 w-[450px] h-[450px] rounded-full blur-[90px] pointer-events-none select-none"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--primary-rgb), 0.10) 0%, rgba(129, 197, 255, 0.06) 45%, transparent 75%)',
        }}
      />

      <div className="layout-container relative z-10">
        {/* Section Header: Title on Left, Subtitle on Right */}
        <ScrollReveal direction="up" distance={20} duration={600}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
            <div className="lg:col-span-6">
              <SectionTitle className="text-left font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] text-neutral-950 leading-tight">
                Discover What Our <br className="hidden sm:inline" /> Community Is Saying
              </SectionTitle>
            </div>
            <div className="lg:col-span-6 flex items-center">
              <p className="text-neutral-500 font-satoshi text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Testimonials Cards Grid */}
        <ScrollReveal direction="up" delay={150} distance={24} duration={650}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {MOCK_TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[28px] p-6 sm:p-7 border border-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* User Profile */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-100 shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-satoshi font-bold text-neutral-950 text-base leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-primary-600 font-medium mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-neutral-600 font-satoshi text-xs sm:text-[13px] leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
