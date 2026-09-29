import React from 'react';
import Link from 'next/link';
import {
  Palette,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  LucideIcon,
} from 'lucide-react';
import { ROUTES } from '@/constants/routes';

interface LearningPath {
  title: string;
  icon: LucideIcon;
}

const LEARNING_PATHS: LearningPath[] = [
  { title: 'Design', icon: Palette },
  { title: 'Development', icon: Code2 },
  { title: 'IT & Software', icon: Laptop },
  { title: 'Business', icon: Building2 },
  { title: 'Marketing', icon: Megaphone },
  { title: 'Photography', icon: Camera },
];

export function LearningPathsSection() {
  return (
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
          {LEARNING_PATHS.map((path) => {
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
  );
}
