import { Star, BarChart2 } from 'lucide-react';
import { AvatarGroup } from '@/components/ui/avatar-group';
import { DonutShape, SquiggleShape, ConeShape } from '@/components/ui/decorative-shapes';

interface AuthVisualStackProps {
  title: string;
  subtitle: string;
}

export function AuthVisualStack({ title, subtitle }: AuthVisualStackProps) {
  return (
    <div className="relative text-white flex flex-col justify-between h-full max-w-lg">
      <div className="space-y-3">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white tracking-tight">
          {title}
        </h2>
        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md font-normal">
          {subtitle}
        </p>
      </div>

      {/* Decorative Interactive Stack */}
      <div className="relative mt-12 mb-8 py-10">
        {/* Floating Shapes */}
        <DonutShape className="absolute -top-6 -left-8 w-28 h-28 opacity-90 z-20" />
        <ConeShape className="absolute -bottom-8 -left-6 w-24 h-28 opacity-90 z-20" />
        <SquiggleShape className="absolute bottom-12 -right-8 w-32 h-20 opacity-80 z-20" />

        {/* Card 1: Behind (Build Digital Asset) */}
        <div className="absolute top-4 -left-6 w-72 bg-white text-neutral-900 rounded-2xl p-4 shadow-xl border border-neutral-100 opacity-90 transform -rotate-3 pointer-events-none">
          <div className="relative rounded-lg overflow-hidden h-28 bg-neutral-200 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80"
              alt="Build Digital Asset"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/80 text-[10px] font-medium">
              17 Lessons
            </div>
          </div>
          <p className="font-satoshi font-semibold text-sm">Build Digital Asset</p>
          <p className="text-[10px] text-primary-600">by purepearl studio</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs font-bold text-primary-600">$25/lifetime</span>
          </div>
        </div>

        {/* Card 2: Front Focus (the Power of Big Data) */}
        <div className="relative z-10 mx-auto w-80 bg-white text-neutral-900 rounded-3xl p-4 shadow-2xl border border-neutral-100">
          <div className="relative rounded-2xl overflow-hidden h-36 bg-neutral-900 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80"
              alt="the Power of Big Data"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-medium text-neutral-800">
              <span className="px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-md">17 Lessons</span>
              <span className="px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-md">2 hours 16 mins</span>
              <span className="px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-md">59 Comments</span>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <p className="font-satoshi font-bold text-base text-neutral-900 leading-snug">
              the Power of Big Data
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-neutral-900">
              <span>4.5</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <p className="text-xs text-primary-600 font-medium mt-0.5">by purepearl studio</p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
              <BarChart2 className="w-3.5 h-3.5 text-neutral-600" />
              <span>Beginner</span>
            </div>
            <AvatarGroup extraCount="26+" size={22} badgeBg="black" />
          </div>

          <div className="mt-3 pt-2 border-t border-neutral-100 flex items-baseline gap-1">
            <span className="font-satoshi font-bold text-lg text-primary-600">$25</span>
            <span className="text-[11px] text-neutral-500">/lifetime</span>
          </div>
        </div>

        {/* Lime Card: Happy Students */}
        <div className="relative z-10 -mt-6 ml-16 bg-secondary-500 text-black rounded-2xl p-3.5 shadow-xl border border-black/5 w-64">
          <div className="flex items-center justify-between">
            <p className="font-satoshi font-bold text-xs">Happy Students</p>
            <div className="flex items-center text-[11px] font-bold">
              <span>4.5</span>
              <span className="text-black/60 font-normal ml-0.5">(240)</span>
              <Star className="w-3 h-3 fill-black text-black ml-1" />
            </div>
          </div>
          <div className="mt-2">
            <AvatarGroup extraCount="2K+" size={24} badgeBg="black" />
          </div>
        </div>
      </div>
    </div>
  );
}
