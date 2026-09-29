import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
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
    <section className="py-20 bg-neutral-50/60 border-t border-b border-neutral-200/80">
      <div className="layout-container text-center">
        <SectionHeader
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        {/* Category Icon Cards Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {LEARNING_PATHS.map((path) => (
            <Link
              key={path.title}
              href={ROUTES.COURSES}
              className="bg-white rounded-2xl p-7 border border-neutral-200/90 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 group"
            >
              <div className="relative w-16 h-16 group-hover:scale-110 transition-transform">
                <Image
                  src={path.image}
                  alt={path.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-satoshi font-semibold text-neutral-900 text-sm">
                {path.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

