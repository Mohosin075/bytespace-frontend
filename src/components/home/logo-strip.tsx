import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface LogoItem {
  id: string;
  name: string;
  src: string;
}

const PARTNER_LOGOS: LogoItem[] = [
  {
    id: 'logo-1',
    name: 'Brand Logo 1',
    src: '/brand/Frame.png',
  },
  {
    id: 'logo-2',
    name: 'Brand Logo 2',
    src: '/brand/Frame (1).png',
  },
  {
    id: 'logo-3',
    name: 'Brand Logo 3',
    src: '/brand/Frame (2).png',
  },
  {
    id: 'logo-4',
    name: 'Brand Logo 4',
    src: '/brand/Frame (3).png',
  },
  {
    id: 'logo-5',
    name: 'Brand Logo 5',
    src: '/brand/Frame (4).png',
  },
];

export function LogoStrip() {
  // Duplicate logos for seamless infinite looping
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="bg-neutral-100/80 border-b border-neutral-200/60 py-8 sm:py-12 md:py-16 relative z-10 overflow-hidden select-none">
      <ScrollReveal direction="up" distance={16} duration={500} className="w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-24 py-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="relative h-9 sm:h-10 w-32 sm:w-36 shrink-0 flex items-center justify-center grayscale hover:grayscale-0 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

