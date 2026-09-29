import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';
import { AvatarGroup } from '@/components/ui/avatar-group';
import { DecorativeSquiggle } from '@/components/ui/decorative-squiggle';
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-header';

const CHECKLIST_ITEMS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export function CreatorManagementSection() {
  return (
    <section className="py-24 bg-neutral-50/70">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Visual Image with Revenue Badges & 3D Lime Shape */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            {/* 3D Lime Squiggle background decoration */}
            <div className="absolute top-28 -right-6 w-32 h-44 pointer-events-none z-0 -rotate-12">
              <DecorativeSquiggle />
            </div>

            <div className="relative mx-auto max-w-md z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 flex items-center justify-center">
                <Image
                  src="/growth/growth-bottom.png"
                  alt="Course Creator"
                  width={440}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Total Revenue Badge */}
              <div className="absolute top-4 -left-6 bg-primary-600 text-white rounded-2xl p-4 shadow-2xl w-44">
                <p className="text-[11px] text-white/80 font-medium">Total Revenue</p>
                <p className="text-[10px] text-white/60">July 1-28</p>
                <p className="font-satoshi font-bold text-xl mt-1">$120.29</p>
              </div>

              {/* Year to Date Badge */}
              <div className="absolute top-28 -left-6 bg-primary-600 text-white rounded-2xl p-4 shadow-2xl w-44">
                <p className="text-[11px] text-white/80 font-medium">Year to Date</p>
                <p className="text-[10px] text-white/60">2023</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="font-satoshi font-bold text-xl">$1,200.38</p>
                  <span className="text-[10px] bg-secondary-500 text-black font-bold px-1.5 py-0.5 rounded-full">+12%</span>
                </div>
              </div>

              {/* Happy Students Badge */}
              <div className="absolute -bottom-4 right-2 bg-white rounded-2xl p-3.5 shadow-2xl border border-neutral-100">
                <div className="flex items-center gap-1.5">
                  <p className="font-satoshi font-semibold text-xs text-neutral-900">Happy Students</p>
                  <div className="flex items-center text-[11px] font-bold text-neutral-900">
                    <span>4.5</span>
                    <span className="text-neutral-400 font-normal ml-0.5">(240)</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400 ml-1" />
                  </div>
                </div>
                <div className="mt-2">
                  <AvatarGroup extraCount="2K+" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <SectionTitle className="text-left">
              Create &amp; Manage <br /> Courses Easily.
            </SectionTitle>

            <SectionSubtitle className="text-left">
              <strong className="text-neutral-950 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </SectionSubtitle>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {CHECKLIST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 fill-primary-50 shrink-0" />
                  <span className="font-medium text-neutral-800 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
