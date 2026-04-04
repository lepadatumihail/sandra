import Image from 'next/image';
import Link from 'next/link';
import { AnimatedImagineSection } from '@/components/AnimatedImagineSection';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { HandwrittenTitle } from '@/components/HandwrittenTitle';

const CHECKOUT_URL = 'https://REPLACE_WITH_LEMONSQUEEZY_URL';

function CTAButton({
  className = '',
  text = 'Start Becoming Her',
}: {
  className?: string;
  text?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      rel='noopener noreferrer'
      className={`
        group relative inline-flex items-center justify-center
        px-8 sm:px-10 py-4 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]
        text-burgundy bg-cream shadow-lg
        transition-all duration-500 ease-out
        hover:bg-white hover:shadow-xl hover:-translate-y-0.5
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream
        ${className}
      `}
    >
      <span className='relative z-10 text-center'>{text}</span>
      <span className='ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1 shrink-0'>
        &rarr;
      </span>
    </a>
  );
}

function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`
        font-serif text-4xl sm:text-5xl md:text-5xl font-medium tracking-tight leading-tight
        ${light ? 'text-cream' : 'text-burgundy'}
      `}
    >
      {children}
    </h2>
  );
}

const phases = [
  {
    number: '01',
    title: 'Identity Reset',
    description:
      'Define who you are becoming. Shift from your past version into your future self.',
  },
  {
    number: '02',
    title: 'Inner Work & Healing',
    description:
      'Understand your triggers. Release emotional patterns. Heal the wounds that shape your reactions.',
  },
  {
    number: '03',
    title: 'Self-Worth & Standards',
    description:
      'Build deep self-love. Set non-negotiable standards. Stop accepting less.',
  },
  {
    number: '04',
    title: 'Discipline & Power',
    description:
      "Create habits that align with your highest self. Do what needs to be done — even when it's uncomfortable.",
  },
  {
    number: '05',
    title: 'Magnetic Expression',
    description:
      'Become the woman people feel. Move with confidence, presence, and certainty.',
  },
];

export default function Home() {
  return (
    <main>
      <div className='fixed top-0 left-0 right-0 z-[60] bg-burgundy-deep/95 backdrop-blur-sm'>
        <a
          href='#free-guides'
          className='flex items-center justify-center gap-2 py-2.5 text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.2em] text-cream/90 hover:text-cream transition-colors'
        >
          <span>&darr;</span>
          <span>Check Free Guides</span>
          <span>&darr;</span>
        </a>
      </div>

      <header className='absolute top-10 left-0 right-0 z-50 flex items-center justify-end px-6 sm:px-12 py-8'>
        <Link
          href='/es'
          className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cream/30 bg-cream/10 backdrop-blur-sm text-cream/80 hover:text-cream hover:bg-cream/20 hover:border-cream/50 transition-all duration-300 text-sm font-sans font-medium tracking-wide'
        >
          <span className='text-base leading-none'>&#127466;&#127480;</span>
          <span>Espa&ntilde;ol</span>
        </Link>
      </header>

      {/* ── Hero ── */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <Image
          src='/branding/hero-lily.png'
          alt=''
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-linear-to-b from-burgundy/80 via-burgundy/50 to-burgundy-deep/95 opacity-90' />

        <div className='relative z-10 flex flex-col items-center text-center px-6 py-24 max-w-4xl mx-auto mt-12'>
          <p className='animate-fade-in-up text-blush/90 text-xs sm:text-sm uppercase tracking-[0.35em] font-sans font-medium mb-8'>
            A Proven Method by Sandra Torres
          </p>

          <HandwrittenTitle />

          <div className='animate-fade-in-up animate-delay-200 space-y-3 mb-12'>
            <p className='text-cream/90 font-sans text-lg sm:text-2xl leading-relaxed max-w-2xl font-light'>
              You don&apos;t become her overnight.
              <br />
              You become her through daily choices.
            </p>
          </div>

          <div className='animate-fade-in-up animate-delay-300 flex flex-col items-center'>
            <CTAButton />
            <div className='mt-6 flex flex-col items-center gap-2'>
              <div className='flex gap-1 text-blush'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className='w-4 h-4 fill-current'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <p className='text-cream/80 text-xs sm:text-sm font-sans font-light tracking-wider uppercase'>
                Join 500+ women transforming their lives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Opening Manifesto ── */}
      <section className='bg-cream py-20 sm:py-24'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <div className=' text-charcoal/80 font-sans text-lg sm:text-xl leading-relaxed'>
            <p className='text-burgundy font-serif text-3xl sm:text-4xl lg:text-5xl italic leading-tight font-medium mt-8'>
              You don&apos;t chase the life you want&hellip;
              <br />
              <span className='text-rose'>
                You become the woman who attracts it.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── This Is For You If… ── */}
      <section className='bg-ivory py-24 sm:py-24'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center'>
          <div className='w-full lg:w-1/2'>
            <SectionHeading>This Is For You If&hellip;</SectionHeading>

            <ul className='mt-12 space-y-8'>
              {[
                "You feel like you have so much potential… but you're not fully living it.",
                "You're tired of overthinking, doubting yourself, and settling for less than you deserve.",
                'You want to feel confident, powerful, clear, and in control of your life.',
                'You want to become that woman — the one who walks into a room and is felt.',
              ].map((text, i) => (
                <li key={i} className='flex gap-5 items-start'>
                  <span className='mt-2.5 block w-1.5 h-1.5 rounded-full bg-rose shrink-0' />
                  <p className='font-sans text-charcoal/80 text-lg sm:text-xl leading-relaxed font-light'>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full lg:w-1/2 relative h-[500px] sm:h-[600px] overflow-hidden shadow-2xl'>
            <Image
              src='/sandy/IMG_4324.jpg'
              alt='Sandra Torres'
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover object-center hover:scale-105 transition-transform duration-1000'
            />
          </div>
        </div>
      </section>

      {/* ── Not Just An Ebook ── */}
      <section className='bg-cream py-24 sm:py-24 relative overflow-hidden'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <div className='relative w-full max-w-[420px] mx-auto aspect-[3/4] shadow-2xl rounded-sm overflow-hidden border border-cream-dark z-10 hover:scale-[1.02] transition-transform duration-700'>
              <Image
                src='/branding/becoming-her-cover.png'
                alt='Becoming Her Method™ — course cover'
                fill
                sizes='(max-width: 768px) 90vw, 420px'
                className='object-cover'
              />
            </div>
          </div>

          <div className='w-full lg:w-1/2'>
            <SectionHeading>This Is Not Just a Book.</SectionHeading>
            <p className='mt-4 font-serif text-2xl sm:text-3xl italic text-burgundy/80 leading-relaxed'>
              This is a shift in identity.
            </p>

            <div className='mt-5 space-y-6'>
              {[
                '5 deep modules with guided worksheets to apply each phase',
                'Identity-based exercises that rewire how you think and act',
                'Heal emotional patterns and reprogram limiting beliefs',
                'Build unshakable self-respect, standards, and boundaries',
                'A self-trust contract you sign with yourself',
              ].map((text, i) => (
                <div key={i} className='flex gap-6 items-start'>
                  <span className='text-rose/50 font-serif text-2xl mt-0.5'>
                    —
                  </span>
                  <p className='font-sans text-charcoal/80 text-lg sm:text-xl leading-relaxed font-light'>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className='mt-4 p-8 bg-white rounded-2xl shadow-sm border border-blush/20'>
              <p className='font-serif text-xl text-burgundy leading-relaxed italic'>
                This is about becoming a woman who doesn&apos;t settle,
                doesn&apos;t chase, and doesn&apos;t lose herself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You Will Experience (Parallax image) ── */}
      <section className='relative py-24  overflow-hidden'>
        <Image
          src='/sandy/IMG_4337.jpg'
          alt='Background'
          fill
          className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-burgundy/80 mix-blend-multiply' />
        <div className='absolute inset-0 bg-linear-to-b from-burgundy-deep/60 to-burgundy-deep/90' />

        <div className='relative z-10 max-w-3xl mx-auto px-6 text-center'>
          <SectionHeading light>What You Will Experience</SectionHeading>

          <div className='mt-16 space-y-12'>
            {[
              {
                from: 'You will stop reacting…',
                to: 'and start responding with power.',
              },
              {
                from: 'You will stop seeking validation…',
                to: 'and start choosing yourself.',
              },
              {
                from: 'You will stop feeling lost…',
                to: 'and start moving with clarity.',
              },
            ].map((item, i) => (
              <div key={i} className='space-y-2'>
                <p className='font-sans text-cream/40 text-lg sm:text-xl line-through decoration-cream/20 font-light'>
                  {item.from}
                </p>
                <p className='font-sans text-cream text-xl sm:text-2xl font-medium tracking-wide'>
                  {item.to}
                </p>
              </div>
            ))}
          </div>

          <div className='mt-20'>
            <div className='w-24 h-px bg-rose/50 mx-auto mb-10' />
            <p className='font-serif text-2xl sm:text-3xl italic text-blush leading-relaxed'>
              This is where you stop being controlled by your emotions&hellip;
              <br />
              and start using them as guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Method (Phases) ── */}
      <section className='bg-ivory py-24'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center mb-10'>
            <p className='text-rose text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4'>
              The 5 Phases
            </p>
            <SectionHeading>The Method</SectionHeading>
          </div>

          <div className='space-y-8'>
            {phases.map((phase, i) => (
              <div
                key={i}
                className='group relative flex flex-col sm:flex-row gap-6 sm:gap-12 py-8 px-8 bg-white rounded-2xl shadow-sm border border-blush/10 hover:shadow-md transition-shadow'
              >
                <div className='shrink-0'>
                  <span className='font-serif text-5xl sm:text-6xl font-medium text-rose/20 group-hover:text-rose/40 transition-colors'>
                    {phase.number}
                  </span>
                </div>
                <div className='pt-2'>
                  <h3 className='font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-4'>
                    {phase.title}
                  </h3>
                  <p className='font-sans text-charcoal/70 text-lg leading-relaxed font-light'>
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This Works ── */}
      <section className='bg-cream py-24'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-16 items-center'>
          <div className='w-full lg:w-1/2 relative h-[500px] sm:h-[600px] overflow-hidden shadow-2xl'>
            <Image
              src='/sandy/IMG_4326.JPG'
              alt='Sandra Torres'
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover object-center'
            />
          </div>
          <div className='w-full lg:w-1/2 lg:pl-10'>
            <SectionHeading>Why This Works</SectionHeading>

            <p className='mt-8 font-sans text-charcoal/70 text-xl leading-relaxed font-light'>
              Because it doesn&apos;t focus on surface-level motivation.
            </p>

            <p className='mt-6 font-serif text-3xl sm:text-4xl italic text-rose leading-snug font-medium'>
              It changes who you are being.
            </p>

            <div className='mt-12 space-y-5 text-charcoal/60 font-sans text-xl font-light'>
              <p>When your identity shifts&hellip;</p>
              <p className='text-charcoal/70'>your standards shift.</p>
              <p className='text-charcoal/80'>your actions shift.</p>
              <p className='text-burgundy font-medium text-2xl pt-2'>
                your entire life shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Sandra ── */}
      <section className='bg-white py-24'>
        <div className='max-w-4xl mx-auto px-6 flex flex-col sm:flex-row gap-12 items-center'>
          <div className='w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg shrink-0 border-2 border-blush/30'>
            <Image
              src='/sandy/IMG_4329.jpg'
              alt='Sandra Torres'
              width={192}
              height={192}
              className='object-cover w-full h-full'
            />
          </div>
          <div>
            <p className='text-rose text-xs uppercase tracking-[0.3em] font-sans font-bold mb-3'>
              About the Author
            </p>
            <h3 className='font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-4'>
              Meet Sandra
            </h3>
            <p className='font-sans text-charcoal/70 text-lg leading-relaxed font-light'>
              Sandra left home at 18, moved alone to the UK, and rebuilt
              her entire life after leaving a relationship&mdash;with her
              children by her side. After years working with women in
              different fields, she created the Becoming Her Method&trade;
              to give other women the framework she wished she&apos;d had:
              a real path from surviving to thriving.
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Imagine This Version of You ── */}
      <AnimatedImagineSection
        heading='New Version of You'
        lines={[
          { text: "You walk into a room and you don't question yourself." },
          {
            beforeHighlight: "You don't chase attention — ",
            highlight: 'you attract it.',
          },
          {
            beforeHighlight: "You don't tolerate confusion — ",
            highlight: 'you choose clarity.',
          },
          {
            beforeHighlight: "You don't abandon yourself — ",
            highlight: 'you stand in your power.',
          },
        ]}
        conclusion={
          <>
            That version of you already exists.
            <br />
            This method shows you how to become her.
          </>
        }
      />

      {/* ── Free Guides ── */}
      <section id='free-guides' className='bg-cream py-24'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <p className='text-rose text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4'>
              Free Resources
            </p>
            <SectionHeading>Free Guides</SectionHeading>
            <p className='mt-6 font-sans text-charcoal/60 text-lg sm:text-xl leading-relaxed font-light max-w-2xl mx-auto'>
              Start your journey with these free resources &mdash; a preview of
              what the full method offers.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-2xl border border-blush/20 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col'>
              <p className='text-rose text-xs uppercase tracking-[0.25em] font-sans font-bold mb-3'>
                Preview
              </p>
              <h3 className='font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-3'>
                Module 1: Identity Reset
              </h3>
              <p className='font-sans text-charcoal/70 text-lg leading-relaxed font-light mb-8 flex-1'>
                The first step of the Becoming Her Method&trade;. Define who you
                are becoming and begin shifting from your past version into your
                future self.
              </p>
              <a
                href='/becoming-her-module-1.pdf'
                download='Becoming_Her_Module_1.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.15em] border-2 border-burgundy/30 text-burgundy bg-transparent hover:bg-burgundy hover:text-cream transition-colors duration-300 rounded-sm'
              >
                <span>Download Free PDF</span>
                <span className='ml-2 shrink-0'>&darr;</span>
              </a>
            </div>

            <div className='bg-white rounded-2xl border border-blush/20 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col'>
              <p className='text-rose text-xs uppercase tracking-[0.25em] font-sans font-bold mb-3'>
                Free Guide
              </p>
              <h3 className='font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-3'>
                Feminine Cycle Decision System
              </h3>
              <p className='font-sans text-charcoal/70 text-lg leading-relaxed font-light mb-8 flex-1'>
                Learn to move and act in alignment with your cycle. Understand
                your energy phases so you can make better decisions
                effortlessly.
              </p>
              <a
                href='/feminine-cycle.pdf'
                download='Feminine_Cycle_Decision_System.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.15em] border-2 border-burgundy/30 text-burgundy bg-transparent hover:bg-burgundy hover:text-cream transition-colors duration-300 rounded-sm'
              >
                <span>Download Free PDF</span>
                <span className='ml-2 shrink-0'>&darr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Turning Point & Become Her ── */}
      <section className='bg-ivory py-24'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <SectionHeading>This Is Your Turning Point</SectionHeading>

            <div className='mt-16 flex flex-col items-center gap-4'>
              <p className='font-sans text-charcoal/50 text-lg tracking-[0.2em] uppercase'>
                No more waiting.
              </p>
              <p className='font-sans text-charcoal/60 text-lg tracking-[0.2em] uppercase'>
                No more settling.
              </p>
              <p className='font-sans text-burgundy/80 font-bold text-lg tracking-[0.2em] uppercase'>
                No more shrinking.
              </p>
            </div>
          </div>

          <div className='mt-20 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-blush/20'>
            <div className='w-full md:w-1/2 flex justify-center'>
              <div className='relative w-full max-w-[420px] aspect-3/4 shadow-2xl rounded-sm overflow-hidden'>
                <Image
                  src='/branding/becoming-her-cover.png'
                  alt='Becoming Her Method™ — course cover'
                  fill
                  sizes='(max-width: 768px) 90vw, 420px'
                  className='object-cover'
                />
              </div>
            </div>

            <div className='w-full md:w-1/2 text-center md:text-left'>
              <h2 className='font-serif text-5xl sm:text-6xl font-medium text-burgundy leading-[0.95] tracking-tight'>
                Become
                <br />
                <span className='italic text-rose'>Her.</span>
              </h2>

              <p className='mt-8 font-sans text-charcoal/70 text-lg leading-relaxed font-light'>
                Start your transformation now.
              </p>

              <ul className='mt-6 space-y-3'>
                {[
                  '40-page digital guide',
                  '5 deep-dive modules',
                  'Interactive worksheets with every module',
                  "Sandra's personal story & framework",
                  'Feminine Cycle Decision System (bonus)',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <span className='mt-1.5 block w-1.5 h-1.5 rounded-full bg-rose shrink-0' />
                    <span className='font-sans text-charcoal/70 text-base leading-relaxed font-light'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className='mt-8'>
                <CTAButton text='Ready to Become Her?' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Footer ── */}
      <footer className='bg-burgundy-deep py-12'>
        <div className='max-w-2xl mx-auto px-6 text-center'>
          <p className='font-serif text-2xl text-cream italic mb-6'>
            Sandra Torres
          </p>
          <p className='font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-8'>
            A Proven Method to Unlock Your Potential
          </p>
          <div className='flex justify-center gap-6 mb-8 text-cream/60 text-sm'>
            <Link
              href='/'
              className='text-cream hover:text-cream transition-colors'
            >
              EN
            </Link>
            <span>|</span>
            <Link href='/es' className='hover:text-cream transition-colors'>
              ES
            </Link>
          </div>
          <p className='font-sans text-[11px] text-cream/20'>
            &copy; {new Date().getFullYear()} Becoming Her Method™. All rights
            reserved.
          </p>
        </div>
      </footer>

      <StickyMobileCTA />
    </main>
  );
}
