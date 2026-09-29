import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ variant = 'light', className = '', iconOnly = false }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href={ROUTES.HOME} className={`inline-flex items-center gap-2 group ${className}`}>
      {/* Lime 'b' icon */}
      <div className="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center font-bold text-black text-xl shadow-sm transform group-hover:scale-105 transition-transform duration-200">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-black"
        >
          <path d="M7 4v16M7 12a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-6" />
        </svg>
      </div>

      {!iconOnly && (
        <span
          className={`font-poppins font-bold text-xl tracking-tight transition-colors ${
            isLight ? 'text-white' : 'text-neutral-950'
          }`}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
