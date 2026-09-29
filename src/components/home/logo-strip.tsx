import React from 'react';

interface LogoItem {
  id: string;
  name: string;
  svg: React.ReactNode;
}

const PARTNER_LOGOS: LogoItem[] = [
  {
    id: 'logo-1',
    name: 'Logoipsum',
    svg: (
      <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    id: 'logo-2',
    name: 'Logoipsum',
    svg: (
      <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
      </svg>
    ),
  },
  {
    id: 'logo-3',
    name: 'Logoipsum',
    svg: (
      <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5l-1.5 2.5-1-4h-2l4-8-1 5.5h2l-0.5 4z" />
      </svg>
    ),
  },
  {
    id: 'logo-4',
    name: 'Logoipsum',
    svg: (
      <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
        <path d="M12 2c1.1 2.9 3.1 4.9 6 6-2.9 1.1-4.9 3.1-6 6-1.1-2.9-3.1-4.9-6-6 2.9-1.1 4.9-3.1 6-6z M12 10c1.1 2.9 3.1 4.9 6 6-2.9 1.1-4.9 3.1-6 6-1.1-2.9-3.1-4.9-6-6 2.9-1.1 4.9-3.1 6-6z" />
      </svg>
    ),
  },
  {
    id: 'logo-5',
    name: 'Logoipsum',
    svg: (
      <svg className="w-8 h-8 fill-current text-neutral-700" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export function LogoStrip() {
  return (
    <section className="border-b border-neutral-200/80 bg-white py-12 relative z-10">
      <div className="layout-container">
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center gap-2.5 font-poppins font-bold text-neutral-700 text-xl tracking-tight"
            >
              {logo.svg}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
