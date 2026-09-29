import React from 'react';

interface DecorativeSquiggleProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export function DecorativeSquiggle({
  className = '',
  color = '#cbfc01',
  strokeWidth = 32,
}: DecorativeSquiggleProps) {
  return (
    <svg
      viewBox="0 0 140 180"
      fill="none"
      className={`w-full h-full drop-shadow-xl ${className}`}
    >
      <path
        d="M 30 20 Q 140 30 110 70 Q 20 110 130 130 Q 30 170 120 170"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
