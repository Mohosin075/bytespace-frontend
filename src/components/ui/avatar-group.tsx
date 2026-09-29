import Image from 'next/image';

interface AvatarGroupProps {
  avatars?: string[];
  extraCount?: string | number;
  size?: number;
}

export function AvatarGroup({
  avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&auto=format&fit=crop&q=80',
  ],
  extraCount = '26+',
  size = 24,
}: AvatarGroupProps) {
  return (
    <div className="flex items-center -space-x-1.5">
      {avatars.slice(0, 4).map((src, i) => (
        <div
          key={i}
          className="relative rounded-full border-2 border-white overflow-hidden bg-neutral-200"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="Student"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {extraCount && (
        <div
          className="rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center border-2 border-white"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {extraCount}
        </div>
      )}
    </div>
  );
}
