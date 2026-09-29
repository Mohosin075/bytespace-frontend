'use client';

import Link from 'next/link';
import { Star, BarChart2 } from 'lucide-react';
import { Course } from '@/types';
import { ROUTES } from '@/constants/routes';
import { AvatarGroup } from '@/components/ui/avatar-group';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200/80 p-3.5 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group">
      {/* Thumbnail area */}
      <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-neutral-100 mb-3.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Floating lesson & duration pills overlay */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-medium text-neutral-800 shadow-xs">
            <span>{course.lessonsCount} Lessons</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-medium text-neutral-800 shadow-xs">
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-medium text-neutral-800 shadow-xs">
            <span>{course.commentsCount} Comments</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        {/* Title and Rating */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              href={ROUTES.COURSE_DETAIL(course.slug)}
              className="font-poppins font-semibold text-[17px] text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-1 leading-snug"
            >
              {course.title}
            </Link>
            <div className="flex items-center gap-1 shrink-0 text-sm font-semibold text-neutral-800">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]" />
            </div>
          </div>

          <p className="text-xs text-neutral-500 mt-1">
            by{' '}
            <Link
              href={ROUTES.CREATOR_DETAIL(course.creator.id)}
              className="text-primary-600 hover:underline font-medium"
            >
              {course.creator.name}
            </Link>
          </p>
        </div>

        {/* Level and Avatar Group */}
        <div className="flex items-center justify-between pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-[11px] font-medium text-neutral-700">
            <BarChart2 className="w-3 h-3 text-neutral-600" />
            <span>{course.level}</span>
          </div>

          <AvatarGroup />
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-neutral-100 flex items-baseline gap-1">
          <span className="font-poppins font-bold text-xl text-primary-600">
            ${course.price}
          </span>
          <span className="text-xs text-neutral-500">
            /{course.priceType || 'lifetime'}
          </span>
        </div>
      </div>
    </div>
  );
}
