'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, BarChart2, Heart } from 'lucide-react';
import { Course } from '@/types';
import { ROUTES } from '@/constants/routes';
import { AvatarGroup } from '@/components/ui/avatar-group';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/context/toast-context';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { toggleWishlist, isWishlisted } = useAuth();
  const { showToast } = useToast();
  const wishlisted = isWishlisted(course.id);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(course.id);
    showToast(
      added ? `Added "${course.title}" to Wishlist` : `Removed "${course.title}" from Wishlist`,
      added ? 'success' : 'info'
    );
  };

  return (
    <div className="bg-white rounded-[24px] border border-neutral-200/90 p-4 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group relative">
      {/* Thumbnail area */}
      <div className="relative rounded-[18px] overflow-hidden aspect-[1.5/1] bg-neutral-100 mb-4">
        <Image
          src={course.image}
          alt={course.title}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Favorite Bookmark Button */}
        <button
          type="button"
          onClick={handleHeartClick}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md active:scale-90 ${
            wishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-neutral-700 hover:bg-white hover:text-red-500'
          }`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Floating lesson & duration pills overlay */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
          <div className="px-2.5 py-1 rounded-full bg-neutral-200/85 backdrop-blur-xs text-[11px] font-medium text-neutral-800 shadow-xs">
            {course.lessonsCount} Lessons
          </div>
          <div className="px-2.5 py-1 rounded-full bg-neutral-200/85 backdrop-blur-xs text-[11px] font-medium text-neutral-800 shadow-xs">
            {course.duration}
          </div>
          <div className="px-2.5 py-1 rounded-full bg-neutral-200/85 backdrop-blur-xs text-[11px] font-medium text-neutral-800 shadow-xs">
            {course.commentsCount} Comments
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3.5 flex-1 flex flex-col justify-between">
        {/* Title and Rating */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              href={ROUTES.COURSE_DETAIL(course.slug)}
              className="font-satoshi font-bold text-[17px] text-neutral-950 group-hover:text-primary-600 transition-colors line-clamp-1 leading-snug"
            >
              {course.title}
            </Link>
            <div className="flex items-center gap-1 shrink-0 text-sm font-semibold text-neutral-900">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
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
          <div className="inline-flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
            <BarChart2 className="w-3.5 h-3.5 text-neutral-600" />
            <span>{course.level}</span>
          </div>

          <AvatarGroup badgeBg="lime" />
        </div>

        {/* Price and Enroll Button */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="font-satoshi font-bold text-xl text-primary-600">
              ${course.price}
            </span>
            <span className="text-xs text-neutral-500 font-normal">
              /{course.priceType || 'lifetime'}
            </span>
          </div>

          <Link
            href={ROUTES.COURSE_DETAIL(course.slug)}
            className="px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-[#cbfc01] text-neutral-900 hover:text-black font-semibold text-xs transition-colors duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
