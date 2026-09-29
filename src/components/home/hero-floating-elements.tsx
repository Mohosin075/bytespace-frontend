import React from 'react';

interface FloatingElementConfig {
  id: string;
  src: string;
  alt: string;
  containerStyle: React.CSSProperties;
}

const FLOATING_ELEMENTS: FloatingElementConfig[] = [
  {
    id: 'left1',
    src: '/hero/hero-3d-lime-ribbon.svg',
    alt: '3D Lime Ribbon',
    containerStyle: { left: '0', top: '18%', width: '12%', minWidth: '90px', maxWidth: '180px', zIndex: 10 },
  },
  {
    id: 'left2',
    src: '/hero/hero-3d-white-ring.svg',
    alt: '3D White Ring',
    containerStyle: { left: '7%', top: '42%', width: '20%', minWidth: '110px', maxWidth: '240px', zIndex: 10 },
  },
  {
    id: 'left3',
    src: '/hero/hero-3d-white-torus.svg',
    alt: '3D White Donut',
    containerStyle: { left: '3%', bottom: '5%', width: '17%', minWidth: '110px', maxWidth: '220px', zIndex: 20 },
  },
  {
    id: 'right1',
    src: '/hero/hero-3d-lime-capsule.svg',
    alt: '3D Lime Capsule',
    containerStyle: { right: '0', top: '12%', width: '10%', minWidth: '80px', maxWidth: '160px', zIndex: 10 },
  },
  {
    id: 'right2',
    src: '/hero/hero-3d-white-pyramid.svg',
    alt: '3D White Triangle',
    containerStyle: { right: '11%', top: '38%', width: '19%', minWidth: '100px', maxWidth: '240px', zIndex: 10 },
  },
  {
    id: 'right3',
    src: '/hero/hero-3d-white-wave.svg',
    alt: '3D White Wave',
    containerStyle: { right: '2%', bottom: '5%', width: '23%', minWidth: '130px', maxWidth: '300px', zIndex: 20 },
  },
];

export function HeroFloatingElements() {
  return (
    <>
      {FLOATING_ELEMENTS.map((item) => (
        <div
          key={item.id}
          className="absolute pointer-events-none"
          style={item.containerStyle}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      ))}
    </>
  );
}
