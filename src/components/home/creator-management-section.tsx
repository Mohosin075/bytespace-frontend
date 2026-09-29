import Image from 'next/image';
import { Check, Star } from 'lucide-react';
import { AvatarGroup } from '@/components/ui/avatar-group';
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-header';

const CHECKLIST_ITEMS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export function CreatorManagementSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      {/* Background gradient: lime bottom-left, blue-purple top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 0% 100%, rgba(203,252,1,0.30) 0%, transparent 55%), radial-gradient(ellipse 70% 65% at 100% 60%, rgba(200,215,255,0.40) 0%, transparent 60%)',
        }}
      />

      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* ── LEFT: Visual Composition ── */}
          <div className="relative h-[500px] sm:h-[540px] w-full max-w-[500px] mx-auto">

            {/* Total Revenue Card — top-left */}
            <div className="absolute top-0 left-0 z-20 bg-[#1C39C4] text-white rounded-2xl px-5 py-4 shadow-[0_16px_40px_rgba(28,57,196,0.30)] w-[185px]">
              <p className="font-satoshi text-[11px] text-white/75 font-medium">Total Revenue</p>
              <p className="font-satoshi text-[10px] text-white/55 mt-0.5">July 1-28</p>
              <p className="font-satoshi font-bold text-2xl mt-2 mb-3">$120.29</p>
              {/* Progress bar */}
              <div className="w-full bg-white/20 h-[5px] rounded-full overflow-hidden">
                <div className="bg-[#CBFC01] h-full rounded-full w-[62%]" />
              </div>
            </div>

            {/* Year to Date Card — mid-left */}
            <div className="absolute top-[165px] left-0 z-20 bg-[#1C39C4] text-white rounded-2xl px-5 py-4 shadow-[0_16px_40px_rgba(28,57,196,0.30)] w-[185px]">
              <p className="font-satoshi text-[11px] text-white/75 font-medium">Year to Date</p>
              <p className="font-satoshi text-[10px] text-white/55 mt-0.5">2023</p>
              <p className="font-satoshi font-bold text-2xl mt-2 mb-3">$1,200.38</p>
              <span className="inline-block font-satoshi text-[11px] bg-[#CBFC01] text-black font-bold px-3 py-1 rounded-full">
                +12$
              </span>
            </div>

            {/* Lime squiggle icon — right-center, behind creator */}
            <div className="absolute top-[130px] right-[25px] sm:right-[45px] z-10 w-[95px] sm:w-[110px] pointer-events-none">
              <Image
                src="/growth/icon-growth.svg"
                alt="Lime squiggle shape"
                width={110}
                height={135}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Creator figure — main center image */}
            <div className="absolute bottom-0 left-[100px] sm:left-[120px] z-20 w-[280px] sm:w-[320px] pointer-events-none">
              <Image
                src="/growth/growth-bottom.png"
                alt="Course creator with headphones holding tablet"
                width={360}
                height={460}
                className="w-full h-auto object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>

            {/* Happy Students Card — bottom-right */}
            <div className="absolute bottom-4 right-0 z-30 bg-white rounded-2xl px-4 py-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-neutral-100/80 w-[195px]">
              <p className="font-satoshi font-bold text-[13px] text-neutral-900">Happy Students</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="font-satoshi text-[12px] font-bold text-neutral-900">4.5</span>
                <span className="font-satoshi text-[11px] text-neutral-400">(240)</span>
                <Star className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01] ml-0.5" />
              </div>
              <div className="mt-2.5">
                <AvatarGroup extraCount="2K+" size={26} />
              </div>
            </div>

          </div>

          {/* ── RIGHT: Text Content ── */}
          <div className="space-y-6">
            <SectionTitle className="text-left">
              Create &amp; Manage <br /> Courses Easily.
            </SectionTitle>

            <SectionSubtitle className="text-left max-w-[460px]">
              <strong className="text-neutral-950 font-semibold">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and administration of
              educational courses.
            </SectionSubtitle>

            {/* Checklist */}
            <div className="space-y-4 pt-1">
              {CHECKLIST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  {/* Solid blue circle checkmark matching reference */}
                  <div className="w-5 h-5 rounded-full bg-[#1C39C4] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span className="font-satoshi font-medium text-neutral-900 text-[16px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
