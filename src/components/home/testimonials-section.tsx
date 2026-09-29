import React from 'react';
import { MOCK_TESTIMONIALS } from '@/constants/mock-data';
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-header';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden bg-[radial-gradient(ellipse_70%_70%_at_100%_60%,rgba(203,252,1,0.28),transparent_70%)]">
      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <SectionTitle className="text-left">
              Discover What Our <br /> Community Is Saying
            </SectionTitle>
          </div>
          <div className="lg:col-span-7">
            <SectionSubtitle className="text-left">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </SectionSubtitle>
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
                    <p className="font-poppins font-semibold text-neutral-950 text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-primary-600 font-medium">{item.role}</p>
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
  );
}
