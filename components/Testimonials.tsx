export function Testimonials() {
  const testimonials = [
    {
      quote:
        "I used to constantly question my worth and chase people who couldn't see it. This method rewired how I see myself. I've never felt so powerful.",
      author: 'A.',
      highlight: 'I stopped chasing and started attracting.',
    },
    {
      quote:
        "The shift isn't just in my head, it's in how I walk, how I speak, and how people respond to me. I finally feel like the woman I was meant to be.",
      author: 'M.',
      highlight: 'Everything around me changed.',
    },
    {
      quote:
        "I've read countless self-help books, but this was different. It's not about fixing yourself, it's about stepping into a completely new identity.",
      author: 'S.',
      highlight: "It's an identity shift.",
    },
  ];

  return (
    <section className='bg-cream py-24 sm:py-24'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16 sm:mb-24'>
          <p className='font-serif italic text-3xl text-rose tracking-wider mb-4'>
            Real transformations
          </p>
          <h2 className='font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-burgundy'>
            Women Who Became Her
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12'>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className='bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-blush/20 relative group hover:-translate-y-1 transition-transform duration-500'
            >
              <p className='font-serif italic text-2xl text-rose/80 mb-6 group-hover:text-rose transition-colors duration-500'>
                {t.highlight}
              </p>

              <div className='mb-6 text-blush/50'>
                <svg className='w-8 h-8 fill-current' viewBox='0 0 32 32'>
                  <path d='M9.333 13.333c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4v2.667c0 4.417-3.583 8-8 8v-2.667c2.943 0 5.333-2.391 5.333-5.333h-1.333zM22.667 13.333c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4v2.667c0 4.417-3.583 8-8 8v-2.667c2.943 0 5.333-2.391 5.333-5.333h-1.333z' />
                </svg>
              </div>

              <p className='font-sans text-charcoal/70 text-lg leading-relaxed font-light mb-8'>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className='flex items-center gap-4 border-t border-blush/10 pt-6'>
                <div className='w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center font-serif text-burgundy italic text-lg'>
                  {t.author}
                </div>
                <div>
                  <div className='flex gap-0.5 text-rose mb-1'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className='w-3 h-3 fill-current'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-xs uppercase tracking-widest text-charcoal/40 font-sans font-medium'>
                    Verified
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
