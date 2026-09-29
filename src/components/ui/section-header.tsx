import React from 'react';

export interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: 'center' | 'left' | 'right';
  maxWidth?: string;
}

export function SectionTitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-poppins font-semibold text-3xl sm:text-4xl md:text-[44px] text-neutral-950 leading-[120%] tracking-[-0.01em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-satoshi font-normal text-base md:text-[18px] text-neutral-400 leading-[160%] tracking-normal ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  align = 'center',
  maxWidth = 'max-w-3xl',
}: SectionHeaderProps) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'left'
        ? 'text-left'
        : 'text-right ml-auto';

  return (
    <div className={`space-y-4 ${maxWidth} ${alignClass} ${className}`}>
      <SectionTitle className={titleClassName}>{title}</SectionTitle>
      {subtitle && (
        <SectionSubtitle className={subtitleClassName}>
          {subtitle}
        </SectionSubtitle>
      )}
    </div>
  );
}
