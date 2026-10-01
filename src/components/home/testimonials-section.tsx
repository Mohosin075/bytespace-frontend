'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { MOCK_TESTIMONIALS } from '@/constants/mock-data';
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-header';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function TestimonialsSection() {
  const [filterRole, setFilterRole] = useState<'all' | 'student' | 'creator'>('all');

  const extraTestimonials = [
    ...MOCK_TESTIMONIALS,
    {
      id: 't4',
      name: 'Alex Rivera',
      role: 'UI Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      content:
        'The interactive lessons and real-world projects on ByteSpace helped me transition from freelance design into a full-time senior product designer role.',
    },
    {
      id: 't5',
      name: 'Marcus Chen',
      role: 'Content Creator & Developer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      content:
        'Publishing my web development courses on ByteSpace allowed me to reach 10,000+ enthusiastic learners and build a thriving passive income stream.',
    },
  ];

  const filtered = extraTestimonials.filter((item) => {
    if (filterRole === 'all') return true;
    if (filterRole === 'creator') return item.role.toLowerCase().includes('creator');
    if (filterRole === 'student') return !item.role.toLowerCase().includes('creator');
    return true;
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden bg-[radial-gradient(ellipse_70%_70%_at_100%_60%,rgba(203,252,1,0.28),transparent_70%)] font-satoshi">
      <div className="layout-container relative z-10">
        <ScrollReveal direction="up" distance={20} duration={600}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5">
              <SectionTitle className="text-left">
                Discover What Our <br className="hidden sm:inline" /> Community Is Saying
              </SectionTitle>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <SectionSubtitle className="text-left">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.
              </SectionSubtitle>

              {/* Filter Toggle Buttons */}
              <div className="flex items-center gap-2 pt-2">
                {[
                  { id: 'all', label: 'All Community' },
                  { id: 'student', label: 'Learners' },
                  { id: 'creator', label: 'Creators' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilterRole(tab.id as 'all' | 'student' | 'creator')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                      filterRole === tab.id
                        ? 'bg-neutral-900 text-white shadow-xs scale-105'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Testimonials Grid with ScrollReveal */}
        <ScrollReveal direction="up" delay={150} distance={24} duration={650}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-xs hover:shadow-[0_20px_45px_-12px_rgba(0,15,80,0.1)] hover:border-neutral-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-satoshi font-semibold text-neutral-950 text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-primary-600 font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-neutral-700 text-sm leading-relaxed">
                  &ldquo;{item.content}&rdquo;
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
