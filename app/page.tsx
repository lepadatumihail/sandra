import Image from 'next/image';
import Link from 'next/link';
import { AnimatedImagineSection } from '@/components/AnimatedImagineSection';

function Divider() {
  return (
    <div className='flex items-center justify-center py-2'>
      <div className='w-16 h-px bg-linear-to-r from-transparent via-blush to-transparent' />
    </div>
  );
}

function CTAButton({
  className = '',
  text = 'Download Now',
}: {
  className?: string;
  text?: string;
}) {
  return (
    <a
      href='#'
      className={`
        group relative inline-flex items-center justify-center
        px-10 py-4 text-sm font-sans font-semibold uppercase tracking-[0.25em]
        text-burgundy bg-cream shadow-lg
        transition-all duration-500 ease-out
        hover:bg-white hover:tracking-[0.3em] hover:shadow-xl hover:-translate-y-0.5
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream
        ${className}
      `}
    >
      <span className='relative z-10'>{text}</span>
      <span className='ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1'>
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
        font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight
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
      <header className='absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-8'>
        <div className='font-serif text-xl sm:text-2xl text-cream italic tracking-wide'>
          Sandra Torres
        </div>
        <div className='flex items-center gap-6 font-sans text-sm font-semibold tracking-[0.2em] uppercase text-cream'>
          <Link
            href='/es'
            className='text-cream/60 hover:text-cream transition-colors'
          >
            ES
          </Link>
        </div>
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
        <div className='absolute inset-0 bg-linear-to-b from-burgundy/80 via-burgundy/50 to-burgundy-deep/95' />

        <div className='relative z-10 flex flex-col items-center text-center px-6 py-24 max-w-4xl mx-auto mt-12'>
          <p className='animate-fade-in-up text-blush/90 text-xs sm:text-sm uppercase tracking-[0.35em] font-sans font-medium mb-8'>
            A Proven Method by Sandra Torres
          </p>

          <h1 className='animate-fade-in-up animate-delay-100 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium text-cream leading-[0.95] tracking-tight mb-8 drop-shadow-lg'>
            Becoming
            <br />
            <span className='italic'>Her</span>
            <span className='text-blush'> Method</span>
            <span className='text-rose text-3xl sm:text-4xl align-super ml-1'>
              ™
            </span>
          </h1>

          <div className='animate-fade-in-up animate-delay-200 space-y-3 mb-12'>
            <p className='text-cream/90 font-sans text-lg sm:text-2xl leading-relaxed max-w-2xl font-light'>
              You don&apos;t become her overnight.
              <br />
              You become her through daily choices.
            </p>
          </div>

          <div className='animate-fade-in-up animate-delay-300'>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ── Opening Manifesto ── */}
      <section className='bg-cream py-24 sm:py-32'>
        <div className='max-w-3xl mx-auto px-6 text-center'>
          <div className='space-y-8 text-charcoal/80 font-sans text-lg sm:text-xl leading-relaxed'>
            <p className='tracking-wide'>
              Every action builds your identity.
              <br />
              Every decision shapes your future.
            </p>
            <Divider />
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
      <section className='bg-ivory py-24 sm:py-32'>
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
          <div className='w-full lg:w-1/2 relative h-[500px] sm:h-[700px] rounded-2xl overflow-hidden shadow-2xl'>
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
      <section className='bg-cream py-24 sm:py-32'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <SectionHeading>This Is Not Just an Ebook.</SectionHeading>

          <p className='mt-6 font-serif text-2xl sm:text-3xl italic text-burgundy/80 leading-relaxed'>
            This is a shift in identity.
          </p>

          <p className='mt-8 font-sans text-charcoal/70 text-xl leading-relaxed font-light max-w-2xl mx-auto'>
            The Becoming Her Method™ is a step-by-step guide designed to help
            you:
          </p>

          <div className='mt-12 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-blush/20 text-left'>
            <ul className='space-y-6'>
              {[
                'Break emotional patterns that keep you stuck',
                'Reprogram the beliefs that limit your growth',
                'Build deep self-love and unshakable self-respect',
                'Develop discipline and standards that elevate your life',
                'Become magnetic without chasing validation',
              ].map((text, i) => (
                <li key={i} className='flex gap-6 items-start'>
                  <span className='text-rose/50 font-serif text-2xl mt-0.5'>
                    —
                  </span>
                  <p className='font-sans text-charcoal/80 text-lg sm:text-xl leading-relaxed font-light'>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-16 max-w-2xl mx-auto'>
            <p className='font-serif text-2xl sm:text-3xl text-burgundy leading-relaxed italic'>
              This is about becoming a woman who doesn&apos;t settle,
              doesn&apos;t chase, and doesn&apos;t lose herself.
            </p>
          </div>
        </div>
      </section>

      {/* ── What You Will Experience (Parallax image) ── */}
      <section className='relative py-32 sm:py-48 overflow-hidden'>
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
      <section className='bg-ivory py-24 sm:py-32'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center mb-20'>
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
      <section className='bg-cream py-24 sm:py-32'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-16 items-center'>
          <div className='w-full lg:w-1/2 relative h-[500px] sm:h-[700px] rounded-2xl overflow-hidden shadow-2xl'>
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

      {/* ── Turning Point & Become Her ── */}
      <section className='bg-ivory py-24 sm:py-32'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <SectionHeading>This Is Your Turning Point</SectionHeading>

            <div className='mt-10 space-y-4 font-sans text-xl text-charcoal/70 leading-relaxed font-light'>
              <p>You can stay where you are&hellip;</p>
              <p className='text-burgundy font-medium text-2xl'>
                or you can decide that this is the moment everything changes.
              </p>
            </div>

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

          <div className='mt-32 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-blush/20'>
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

              <p className='mt-8 font-sans text-charcoal/70 text-xl leading-relaxed font-light'>
                Start your transformation now.
                <br />
                Access the Becoming Her Method™ today.
              </p>

              <div className='mt-10'>
                <CTAButton />
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
