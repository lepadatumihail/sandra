import Image from 'next/image';

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: 'left' | 'right' | 'none';
  className?: string;
}

export function Polaroid({
  src,
  alt,
  caption,
  rotation = 'none',
  className = '',
}: PolaroidProps) {
  const rotationClass =
    rotation === 'left' ? '-rotate-3' : rotation === 'right' ? 'rotate-3' : '';

  return (
    <div
      className={`
        bg-white p-4 pb-12 sm:p-5 sm:pb-16 shadow-xl 
        border border-cream-dark transition-transform duration-500 hover:scale-[1.02]
        ${rotationClass} ${className}
      `}
    >
      <div className='relative w-full aspect-[4/5] overflow-hidden bg-ivory'>
        <Image
          src={src}
          alt={alt}
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className='object-cover object-center transition-transform duration-1000 hover:scale-105'
        />
      </div>
      {caption && (
        <div className='absolute bottom-3 left-0 right-0 text-center px-4'>
          <p className='font-handwriting text-2xl sm:text-3xl text-charcoal/80 tracking-wide'>
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
