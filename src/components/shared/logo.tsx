import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ variant = 'light', className = '', iconOnly = false }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href={ROUTES.HOME} className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Lime 'b' logo vector */}
      <div className="relative w-8 h-8 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 shrink-0">
        <Image
          src="/logo.svg"
          alt="ByteSpace Logo"
          width={29}
          height={32}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {!iconOnly && (
        <span
          className={`font-clash font-bold text-[24px] leading-none tracking-normal transition-colors ${
            isLight ? 'text-white' : 'text-neutral-950'
          }`}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}

