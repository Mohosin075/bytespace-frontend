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
    <section className="border-b border-neutral-200/80 bg-white py-20 relative z-10">
      <div className="layout-container">
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="relative h-10 w-36 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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

