'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, BarChart2, Heart, ArrowUpRight, ShoppingBag, Check } from 'lucide-react';
import { Course } from '@/types';
import { ROUTES } from '@/constants/routes';
import { AvatarGroup } from '@/components/ui/avatar-group';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/context/toast-context';
import { useCart } from '@/context/cart-context';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { toggleWishlist, isWishlisted } = useAuth();
  const { showToast } = useToast();
  const { addToCart, isInCart } = useCart();

  const wishlisted = isWishlisted(course.id);
  const inCart = isInCart(course.id);
  const [imgSrc, setImgSrc] = useState(course.image);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(course.id);
    showToast(
      added ? `Added "${course.title}" to Wishlist` : `Removed "${course.title}" from Wishlist`,
      added ? 'success' : 'info'
    );
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inCart) {
      addToCart(course);
      showToast(`Added "${course.title}" to Cart`, 'success');
    } else {
      showToast(`"${course.title}" is already in your Cart`, 'info');
    }
  };

  return (
    <div className="bg-white rounded-[24px] border border-neutral-200/90 p-4 card-hover-motion hover:border-primary-300 flex flex-col justify-between group relative select-none">
      {/* Thumbnail area wrapped in Link with smooth zoom and gradient overlay */}
      <Link
        href={ROUTES.COURSE_DETAIL(course.slug)}
        className="relative block rounded-[18px] overflow-hidden aspect-[1.5/1] bg-neutral-100 mb-4 cursor-pointer"
      >
        <Image
          src={imgSrc}
          alt={course.title}
          fill
          unoptimized
          onError={() =>
            setImgSrc('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80')
          }
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Ambient Dark Gradient Bottom Overlay for Tag Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent pointer-events-none transition-opacity duration-300" />

        {/* Favorite Bookmark Heart Button */}
        <button
          type="button"
          onClick={handleHeartClick}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md hover:scale-110 active:scale-90 ${
            wishlisted
              ? 'bg-red-500 text-white shadow-red-500/30'
              : 'bg-white/85 text-neutral-800 hover:bg-white hover:text-red-500'
          }`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Floating lesson & duration pills overlay */}
        <div className="absolute bottom-2.5 left-2 left-2.5 right-2 sm:right-2.5 flex items-center justify-between gap-1 sm:gap-1.5 z-10">
          <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-neutral-950/70 backdrop-blur-md text-[10px] sm:text-[11px] font-medium text-white shadow-xs border border-white/15 whitespace-nowrap shrink-0">
            {course.lessonsCount} Lessons
          </div>
          <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-neutral-950/70 backdrop-blur-md text-[10px] sm:text-[11px] font-medium text-white shadow-xs border border-white/15 whitespace-nowrap truncate max-w-[42%] sm:max-w-none text-center">
            {course.duration}
          </div>
          <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-neutral-950/70 backdrop-blur-md text-[10px] sm:text-[11px] font-medium text-white shadow-xs border border-white/15 whitespace-nowrap shrink-0">
            {course.commentsCount} Comments
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="space-y-3.5 flex-1 flex flex-col justify-between">
        {/* Title and Rating */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              href={ROUTES.COURSE_DETAIL(course.slug)}
              className="font-satoshi font-bold text-[17px] text-neutral-950 group-hover:text-primary-600 group-hover:underline transition-colors line-clamp-1 leading-snug"
            >
              {course.title}
            </Link>
            <div className="flex items-center gap-1 shrink-0 text-sm font-semibold text-neutral-900 bg-amber-50/80 px-2 py-0.5 rounded-full border border-amber-200/50">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>

          <p className="text-xs text-neutral-500 mt-1">
            by{' '}
            <Link
              href={ROUTES.CREATOR_DETAIL(course.creator.id)}
              className="text-primary-600 hover:underline font-semibold transition-colors"
            >
              {course.creator.name}
            </Link>
          </p>
        </div>

        {/* Level and Avatar Group */}
        <div className="flex items-center justify-between pt-1">
          <div className="inline-flex items-center gap-1.5 text-xs text-neutral-600 font-medium bg-neutral-100 px-2.5 py-1 rounded-full">
            <BarChart2 className="w-3.5 h-3.5 text-neutral-600" />
            <span>{course.level}</span>
          </div>

          <AvatarGroup badgeBg="lime" />
        </div>

        {/* Price and Action Buttons */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1">
            <span className="font-satoshi font-bold text-xl text-primary-600">
              ${course.price}
            </span>
            <span className="text-xs text-neutral-500 font-normal">
              /{course.priceType || 'lifetime'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleCartClick}
              title={inCart ? 'In Cart' : 'Add to Cart'}
              aria-label={inCart ? 'In Cart' : 'Add to Cart'}
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                inCart
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {inCart ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            </button>

            <Link
              href={ROUTES.COURSE_DETAIL(course.slug)}
              className="px-3.5 py-2 rounded-full bg-neutral-950 text-white font-bold text-xs hover:bg-[#cbfc01] hover:text-black hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1 group/btn"
            >
              <span>Enroll</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
