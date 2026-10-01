'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Star } from 'lucide-react';
import { Course } from '@/types';
import { ROUTES } from '@/constants/routes';
import { AvatarGroup } from '@/components/ui/avatar-group';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = React.memo(function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState(course.image);

  return (
    <Link
      href={ROUTES.COURSE_DETAIL(course.slug)}
      className="bg-white rounded-[30px] border border-[#e5e6e8] p-3.5 sm:p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between group relative select-none font-satoshi cursor-pointer block"
    >
      {/* Top Banner Image with 3 Frosted Bottom Badges */}
      <div className="relative block rounded-[20px] overflow-hidden aspect-[1.55/1] bg-neutral-100">
        <Image
          src={imgSrc}
          alt={course.title}
          fill
          unoptimized
          onError={() => setImgSrc('/skill/skil1.jpg')}
          className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
        />

        {/* 3 Translucent Frosted Glass Pills (Lessons, Duration, Comments) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[11px] sm:text-[12px] font-medium text-neutral-800 shadow-xs border border-white/40 whitespace-nowrap">
            {course.lessonsCount ?? 17} Lessons
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[11px] sm:text-[12px] font-medium text-neutral-800 shadow-xs border border-white/40 whitespace-nowrap truncate">
            {course.duration || '2 hours 16 mins'}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[11px] sm:text-[12px] font-medium text-neutral-800 shadow-xs border border-white/40 whitespace-nowrap">
            {course.commentsCount ?? 59} Comments
          </span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="pt-4 flex-1 flex flex-col justify-between">
        {/* Title and Rating Row */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-satoshi font-bold text-xl sm:text-[22px] text-neutral-950 group-hover:text-[#0052FE] transition-colors line-clamp-1 leading-snug tracking-tight">
              {course.title}
            </h3>

            {/* Rating with Silver/Gray Star */}
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <span className="font-satoshi text-base sm:text-lg text-neutral-700 font-normal">
                {course.rating.toFixed(1)}
              </span>
              <Star className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#ced0d3] fill-[#ced0d3] -mt-0.5" />
            </div>
          </div>

          {/* Creator byline */}
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-normal">
            by{' '}
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                router.push(ROUTES.CREATOR_DETAIL(course.creator.id));
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  router.push(ROUTES.CREATOR_DETAIL(course.creator.id));
                }
              }}
              className="text-[#0052FE] hover:underline font-normal transition-colors cursor-pointer"
            >
              {course.creator.name}
            </span>
          </p>
        </div>

        {/* Level Badge & Avatar Stack */}
        <div className="mt-4 sm:mt-5 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 bg-[#f4f5f6] px-4 py-2 rounded-full">
            <svg className="w-3.5 h-3.5 text-neutral-700 shrink-0" viewBox="0 0 16 16" fill="currentColor">
              <rect x="2" y="8" width="2.5" height="6" rx="1.25" />
              <rect x="6.75" y="5" width="2.5" height="9" rx="1.25" />
              <rect x="11.5" y="2" width="2.5" height="12" rx="1.25" />
            </svg>
            <span className="font-satoshi text-xs sm:text-[13px] font-medium text-neutral-700">
              {course.level || 'Beginner'}
            </span>
          </div>

          <AvatarGroup
            avatars={course.studentAvatars}
            extraCount="26+"
            size={28}
            badgeBg="lime"
          />
        </div>

        {/* Price Row (No buttons, clean text) */}
        <div className="mt-4 sm:mt-5 pt-0.5 flex items-baseline gap-1">
          <span className="font-satoshi font-extrabold text-2xl sm:text-[26px] text-[#0052FE] tracking-tight leading-none">
            ${course.price}
          </span>
          <span className="font-satoshi text-xs sm:text-sm font-normal text-neutral-500">
            /{course.priceType || 'lifetime'}
          </span>
        </div>
      </div>
    </Link>
  );
});
