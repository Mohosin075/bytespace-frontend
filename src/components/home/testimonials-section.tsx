import React from 'react';
import { MOCK_TESTIMONIALS } from '@/constants/mock-data';

export function TestimonialsSection() {
  return (
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
                    <p className="font-poppins font-semibold text-neutral-950 text-sm">
                      {item.name}
                    </p>
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
  );
}
