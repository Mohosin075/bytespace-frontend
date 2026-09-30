import React from 'react';

export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-6 font-satoshi">
      <div className="relative flex items-center justify-center">
        {/* Animated Glow Pulsing Ring */}
        <div className="absolute w-24 h-24 rounded-full bg-primary-500/20 animate-ping" />
        <div className="relative w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/30 animate-pulse">
          <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
      <p className="mt-6 font-poppins font-semibold text-sm text-neutral-600 tracking-wide uppercase animate-pulse">
        Loading ByteSpace...
      </p>
    </div>
  );
}
