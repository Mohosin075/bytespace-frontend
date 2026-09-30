import Image from 'next/image';

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
  return (
    <section className="border-b border-neutral-200/80 bg-white py-12 sm:py-16 md:py-20 relative z-10 overflow-hidden">
      <div className="layout-container">
        <div className="flex items-center justify-start md:justify-between gap-10 sm:gap-12 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth flex-nowrap py-2 px-1 opacity-75 hover:opacity-100 transition-opacity duration-300">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="relative h-9 sm:h-10 w-32 sm:w-36 shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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
      </div>
    </section>
  );
}

