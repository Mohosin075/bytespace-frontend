import React from 'react';

export default function CoursesLoading() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-28 pb-20 font-satoshi">
      <div className="layout-container space-y-10">
        {/* Header Skeleton */}
        <div className="space-y-4 max-w-xl">
          <div className="h-4 w-32 bg-neutral-200 rounded-full animate-pulse" />
          <div className="h-10 w-3/4 bg-neutral-200 rounded-xl animate-pulse" />
          <div className="h-4 w-full bg-neutral-200 rounded-md animate-pulse" />
        </div>

        {/* Filter Bar Skeleton */}
        <div className="flex gap-3 overflow-hidden py-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-28 bg-neutral-200 rounded-full shrink-0 animate-pulse" />
          ))}
        </div>

        {/* Course Cards Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-[24px] border border-neutral-200 p-4 space-y-4 animate-pulse">
              <div className="aspect-[1.5/1] bg-neutral-200 rounded-[18px]" />
              <div className="space-y-2">
                <div className="h-5 bg-neutral-200 rounded-md w-4/5" />
                <div className="h-3 bg-neutral-200 rounded-md w-1/2" />
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="h-6 w-16 bg-neutral-200 rounded-full" />
                <div className="h-8 w-20 bg-neutral-200 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
