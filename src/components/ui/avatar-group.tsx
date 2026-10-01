import Image from 'next/image';

interface AvatarGroupProps {
  avatars?: string[];
  extraCount?: string | number;
  size?: number;
  badgeBg?: 'lime' | 'black';
}

export function AvatarGroup({
  avatars = [
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  ],
  extraCount = '26+',
  size = 28,
  badgeBg = 'lime',
}: AvatarGroupProps) {
  const isLime = badgeBg === 'lime';

  return (
    <div className="flex items-center -space-x-1.5">
      {avatars.slice(0, 4).map((src, i) => (
        <div
          key={i}
          className="relative rounded-full border-2 border-white overflow-hidden bg-neutral-200"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <Image
            src={src}
            alt="Student"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      ))}
      {extraCount && (
        <div
          className={`rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white ${
            isLime ? 'bg-secondary-500 text-black' : 'bg-black text-white'
          }`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {extraCount}
        </div>
      )}
    </div>
  );
}
