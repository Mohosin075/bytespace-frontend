import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/section-header';

interface LearningPath {
  title: string;
  image: string;
}

const LEARNING_PATHS: LearningPath[] = [
  { title: 'Design', image: '/category/cat6.png' },
  { title: 'Development', image: '/category/cat1.png' },
  { title: 'IT & Software', image: '/category/cat2.png' },
  { title: 'Business', image: '/category/cat3.png' },
  { title: 'Marketing', image: '/category/cat4.png' },
  { title: 'Photography', image: '/category/cat5.png' },
];

export function LearningPathsSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-neutral-50/60">
      <div className="layout-container text-center">
        <SectionHeader
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        {/* Category Icon Cards Grid — Horizontal scroll on mobile, Grid on tablet & desktop */}
        <div className="mt-10 sm:mt-14 flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth flex-nowrap pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {LEARNING_PATHS.map((path) => (
            <Link
              key={path.title}
              href={`/courses?category=${encodeURIComponent(path.title)}`}
              className="w-38 sm:w-auto shrink-0 sm:shrink-initial bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 flex flex-col items-center justify-center gap-4 hover:shadow-2xl hover:border-primary-300 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-115 group-hover:-rotate-3 transition-transform duration-300">
                <Image
                  src={path.image}
                  alt={path.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-satoshi font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors text-sm whitespace-nowrap sm:whitespace-normal">
                {path.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

