'use client';

import { useEffect, useRef, useState } from 'react';

export function HandwrittenTitle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className='mb-8 drop-shadow-lg'>
      <h1 className='font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium text-cream leading-[0.95] tracking-normal'>
        <span
          className='inline-block'
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(100%)',
            transition:
              'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
          }}
        >
          Becoming
        </span>
        <br />
        <span className='overflow-hidden inline-block pr-3'>
          <span
            className='inline-block italic'
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(100%)',
              transition:
                'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.8s ease 0.15s',
            }}
          >
            Her
          </span>
        </span>
        <span className='overflow-hidden inline-block'>
          <span
            className='inline-block text-blush'
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(100%)',
              transition:
                'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.8s ease 0.3s',
            }}
          >
            <span className='inline-block w-3 sm:w-4 md:w-5' />
            Method
          </span>
        </span>
      </h1>

      {/* Elegant underline that draws itself */}
      <div className='flex justify-center mt-4'>
        <div
          className='h-px bg-blush/60'
          style={{
            width: animate ? '160px' : '0px',
            transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
          }}
        />
      </div>
    </div>
  );
}
