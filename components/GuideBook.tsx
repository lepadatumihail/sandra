import Image from 'next/image';

// A guide's PDF cover dressed as a physical book.
export function GuideBook({
  src,
  alt,
  sizes,
  eager = false,
  className = '',
}: {
  src: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[900/1273] ${className}`}>
      {/* Page edges peeking out behind the cover */}
      <div className='absolute inset-0 translate-x-2 translate-y-2 rounded-[3px] bg-cream-dark' />
      <div className='absolute inset-0 translate-x-1 translate-y-1 rounded-[3px] bg-cream' />
      <div className='absolute inset-0 overflow-hidden rounded-[3px]'>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={eager ? 'eager' : undefined}
          fetchPriority={eager ? 'high' : undefined}
          className='object-cover'
        />
        {/* Spine shading */}
        <div className='absolute inset-y-0 left-0 w-[7%] bg-linear-to-r from-black/30 via-white/10 to-transparent' />
      </div>
    </div>
  );
}
