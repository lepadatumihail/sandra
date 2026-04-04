import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedImagineSection } from '@/components/AnimatedImagineSection';
import { TestimonialsES } from '@/components/TestimonialsES';
import { FAQES } from '@/components/FAQES';
import { StickyMobileCTAES } from '@/components/StickyMobileCTAES';
import { HandwrittenTitle } from '@/components/HandwrittenTitle';

const CHECKOUT_URL = 'https://REPLACE_WITH_LEMONSQUEEZY_URL';

export const metadata: Metadata = {
  title: 'Becoming Her Method™ — por Sandra Torres',
  description:
    'Un método probado paso a paso para ayudarte a romper patrones emocionales, construir amor propio profundo y convertirte en la versión más poderosa de ti misma.',
  openGraph: {
    title: 'Becoming Her Method™ — por Sandra Torres',
    description:
      'Un método probado paso a paso para ayudarte a romper patrones emocionales, construir amor propio profundo y convertirte en la versión más poderosa de ti misma.',
    images: [{ url: '/branding/og-image.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'es_ES',
  },
};

function CTAButton({
  className = '',
  text = 'Empieza a Convertirte en Ella',
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
    title: 'Reinicio de Identidad',
    description:
      'Define en quién te estás convirtiendo. Pasa de tu versión pasada a tu yo futuro.',
  },
  {
    number: '02',
    title: 'Trabajo Interior y Sanación',
    description:
      'Comprende tus detonantes. Libera patrones emocionales. Sana las heridas que moldean tus reacciones.',
  },
  {
    number: '03',
    title: 'Autoestima y Estándares',
    description:
      'Construye un amor propio profundo. Establece estándares innegociables. Deja de aceptar menos.',
  },
  {
    number: '04',
    title: 'Disciplina y Poder',
    description:
      'Crea hábitos alineados con tu mejor versión. Haz lo que hay que hacer — incluso cuando sea incómodo.',
  },
  {
    number: '05',
    title: 'Expresión Magnética',
    description:
      'Conviértete en la mujer que la gente siente. Muévete con confianza, presencia y certeza.',
  },
];

export default function HomeES() {
  return (
    <main lang='es'>
      <div className='fixed top-0 left-0 right-0 z-[60] bg-burgundy-deep/95 backdrop-blur-sm'>
        <a
          href='#free-guides'
          className='flex items-center justify-center gap-2 py-2.5 text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.2em] text-cream/90 hover:text-cream transition-colors'
        >
          <span>&darr;</span>
          <span>Ver Gu&iacute;as Gratis</span>
          <span>&darr;</span>
        </a>
      </div>

      <header className='absolute top-10 left-0 right-0 z-50 flex items-center justify-end px-6 sm:px-12 py-8'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cream/30 bg-cream/10 backdrop-blur-sm text-cream/80 hover:text-cream hover:bg-cream/20 hover:border-cream/50 transition-all duration-300 text-sm font-sans font-medium tracking-wide'
        >
          <span className='text-base leading-none'>&#127468;&#127463;</span>
          <span>English</span>
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
            Un Método Probado por Sandra Torres
          </p>

          <HandwrittenTitle />

          <div className='animate-fade-in-up animate-delay-200 space-y-3 mb-12'>
            <p className='text-cream/90 font-sans text-lg sm:text-2xl leading-relaxed max-w-2xl font-light'>
              No te conviertes en ella de la noche a la mañana.
              <br />
              Te conviertes en ella a través de decisiones diarias.
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
                Únete a más de 500 mujeres transformando sus vidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifiesto de Apertura ── */}
      <section className='bg-cream py-20 sm:py-24'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <div className=' text-charcoal/80 font-sans text-lg sm:text-xl leading-relaxed'>
            <p className='text-burgundy font-serif text-3xl sm:text-4xl lg:text-5xl italic leading-tight font-medium mt-8'>
              No persigues la vida que quieres&hellip;
              <br />
              <span className='text-rose'>
                Te conviertes en la mujer que la atrae.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Esto Es Para Ti Si… ── */}
      <section className='bg-ivory py-24 sm:py-24'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center'>
          <div className='w-full lg:w-1/2'>
            <SectionHeading>Esto Es Para Ti Si&hellip;</SectionHeading>

            <ul className='mt-12 space-y-8'>
              {[
                'Sientes que tienes tanto potencial… pero no lo estás viviendo plenamente.',
                'Estás cansada de pensar demasiado, dudar de ti misma y conformarte con menos de lo que mereces.',
                'Quieres sentirte segura, poderosa, clara y en control de tu vida.',
                'Quieres convertirte en esa mujer — la que entra a un lugar y se hace sentir.',
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

      {/* ── No Es Solo Un Libro ── */}
      <section className='bg-cream py-24 sm:py-24 relative overflow-hidden'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <div className='relative w-full max-w-[420px] mx-auto aspect-[3/4] shadow-2xl rounded-sm overflow-hidden border border-cream-dark z-10 hover:scale-[1.02] transition-transform duration-700'>
              <Image
                src='/branding/becoming-her-cover.png'
                alt='Becoming Her Method™ — portada'
                fill
                sizes='(max-width: 768px) 90vw, 420px'
                className='object-cover'
              />
            </div>
          </div>

          <div className='w-full lg:w-1/2'>
            <SectionHeading>Esto No Es Solo un Libro.</SectionHeading>
            <p className='mt-4 font-serif text-2xl sm:text-3xl italic text-burgundy/80 leading-relaxed'>
              Es un cambio de identidad.
            </p>

            <div className='mt-5 space-y-6'>
              {[
                '5 módulos profundos con hojas de trabajo guiadas para aplicar cada fase',
                'Ejercicios basados en identidad que reprograman cómo piensas y actúas',
                'Sana patrones emocionales y reprograma creencias limitantes',
                'Construye autorespeto inquebrantable, estándares y límites',
                'Un contrato de confianza contigo misma que firmas tú',
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
                Se trata de convertirte en una mujer que no se conforma, no
                persigue y no se pierde a sí misma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lo Que Vas a Experimentar ── */}
      <section className='relative py-24  overflow-hidden'>
        <Image
          src='/sandy/IMG_4337.jpg'
          alt='Fondo'
          fill
          className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-burgundy/80 mix-blend-multiply' />
        <div className='absolute inset-0 bg-linear-to-b from-burgundy-deep/60 to-burgundy-deep/90' />

        <div className='relative z-10 max-w-3xl mx-auto px-6 text-center'>
          <SectionHeading light>Lo Que Vas a Experimentar</SectionHeading>

          <div className='mt-16 space-y-12'>
            {[
              {
                from: 'Dejarás de reaccionar…',
                to: 'y empezarás a responder con poder.',
              },
              {
                from: 'Dejarás de buscar validación…',
                to: 'y empezarás a elegirte a ti misma.',
              },
              {
                from: 'Dejarás de sentirte perdida…',
                to: 'y empezarás a moverte con claridad.',
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
              Aquí es donde dejas de ser controlada por tus emociones&hellip;
              <br />y empiezas a usarlas como guía.
            </p>
          </div>
        </div>
      </section>

      {/* ── El Método (Fases) ── */}
      <section className='bg-ivory py-24'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center mb-10'>
            <p className='text-rose text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4'>
              Las 5 Fases
            </p>
            <SectionHeading>El Método</SectionHeading>
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

      {/* ── Por Qué Funciona ── */}
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
            <SectionHeading>Por Qué Funciona</SectionHeading>

            <p className='mt-8 font-sans text-charcoal/70 text-xl leading-relaxed font-light'>
              Porque no se enfoca en motivación superficial.
            </p>

            <p className='mt-6 font-serif text-3xl sm:text-4xl italic text-rose leading-snug font-medium'>
              Cambia quién estás siendo.
            </p>

            <div className='mt-12 space-y-5 text-charcoal/60 font-sans text-xl font-light'>
              <p>Cuando tu identidad cambia&hellip;</p>
              <p className='text-charcoal/70'>tus estándares cambian.</p>
              <p className='text-charcoal/80'>tus acciones cambian.</p>
              <p className='text-burgundy font-medium text-2xl pt-2'>
                toda tu vida cambia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sobre Sandra ── */}
      <section className='bg-white py-24'>
        <div className='max-w-4xl mx-auto px-6 flex flex-col sm:flex-row gap-12 items-center'>
          <div className='w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg shrink-0 border-2 border-blush/30'>
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
              Sobre la Autora
            </p>
            <h3 className='font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-4'>
              Conoce a Sandra
            </h3>
            <p className='font-sans text-charcoal/70 text-lg leading-relaxed font-light'>
              Sandra se fue de casa a los 18 a&ntilde;os, se mud&oacute;
              sola al Reino Unido y reconstruy&oacute; toda su vida
              despu&eacute;s de dejar una relaci&oacute;n&mdash;con sus
              hijos a su lado. Tras a&ntilde;os trabajando con mujeres en
              diferentes campos, cre&oacute; el Becoming Her
              Method&trade; para dar a otras mujeres el marco que ella
              dese&oacute; haber tenido: un camino real de sobrevivir a
              prosperar.
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonios ── */}
      <TestimonialsES />

      {/* ── Nueva Versión de Ti ── */}
      <AnimatedImagineSection
        heading='Nueva Versión de Ti'
        lines={[
          { text: 'Entras a un lugar y no te cuestionas.' },
          {
            beforeHighlight: 'No persigues atención — ',
            highlight: 'la atraes.',
          },
          {
            beforeHighlight: 'No toleras confusión — ',
            highlight: 'eliges claridad.',
          },
          {
            beforeHighlight: 'No te abandonas a ti misma — ',
            highlight: 'te mantienes en tu poder.',
          },
        ]}
        conclusion={
          <>
            Esa versión de ti ya existe.
            <br />
            Este método te muestra cómo convertirte en ella.
          </>
        }
      />

      {/* ── Guías Gratis ── */}
      <section id='free-guides' className='bg-cream py-24'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <p className='text-rose text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4'>
              Recursos Gratuitos
            </p>
            <SectionHeading>Gu&iacute;as Gratis</SectionHeading>
            <p className='mt-6 font-sans text-charcoal/60 text-lg sm:text-xl leading-relaxed font-light max-w-2xl mx-auto'>
              Comienza tu camino con estos recursos gratuitos &mdash; una vista
              previa de lo que ofrece el m&eacute;todo completo.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-2xl border border-blush/20 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col'>
              <p className='text-rose text-xs uppercase tracking-[0.25em] font-sans font-bold mb-3'>
                Vista Previa
              </p>
              <h3 className='font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-3'>
                M&oacute;dulo 1: Reinicio de Identidad
              </h3>
              <p className='font-sans text-charcoal/70 text-lg leading-relaxed font-light mb-8 flex-1'>
                El primer paso del Becoming Her Method&trade;. Define en
                qui&eacute;n te est&aacute;s convirtiendo y comienza a pasar de
                tu versi&oacute;n pasada a tu yo futuro.
              </p>
              <a
                href='/becoming-her-module-1-spanish.pdf'
                download='Becoming_Her_Module_1.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.15em] border-2 border-burgundy/30 text-burgundy bg-transparent hover:bg-burgundy hover:text-cream transition-colors duration-300 rounded-sm'
              >
                <span>Descargar PDF Gratis</span>
                <span className='ml-2 shrink-0'>&darr;</span>
              </a>
            </div>

            <div className='bg-white rounded-2xl border border-blush/20 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col'>
              <p className='text-rose text-xs uppercase tracking-[0.25em] font-sans font-bold mb-3'>
                Gu&iacute;a Gratis
              </p>
              <h3 className='font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-3'>
                Sistema de Decisiones del Ciclo Femenino
              </h3>
              <p className='font-sans text-charcoal/70 text-lg leading-relaxed font-light mb-8 flex-1'>
                Aprende a moverte y actuar en armon&iacute;a con tu ciclo.
                Comprende tus fases de energ&iacute;a para tomar mejores
                decisiones sin esfuerzo.
              </p>
              <a
                href='/feminine-cycle.pdf'
                download='Feminine_Cycle_Decision_System.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.15em] border-2 border-burgundy/30 text-burgundy bg-transparent hover:bg-burgundy hover:text-cream transition-colors duration-300 rounded-sm'
              >
                <span>Descargar PDF Gratis</span>
                <span className='ml-2 shrink-0'>&darr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Punto de Inflexión ── */}
      <section className='bg-ivory py-24'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <SectionHeading>Este Es Tu Punto de Inflexión</SectionHeading>

            <div className='mt-16 flex flex-col items-center gap-4'>
              <p className='font-sans text-charcoal/50 text-lg tracking-[0.2em] uppercase'>
                No más esperar.
              </p>
              <p className='font-sans text-charcoal/60 text-lg tracking-[0.2em] uppercase'>
                No más conformarte.
              </p>
              <p className='font-sans text-burgundy/80 font-bold text-lg tracking-[0.2em] uppercase'>
                No más achicarte.
              </p>
            </div>
          </div>

          <div className='mt-20 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-blush/20'>
            <div className='w-full md:w-1/2 flex justify-center'>
              <div className='relative w-full max-w-[420px] aspect-3/4 shadow-2xl rounded-sm overflow-hidden'>
                <Image
                  src='/branding/becoming-her-cover.png'
                  alt='Becoming Her Method™ — portada'
                  fill
                  sizes='(max-width: 768px) 90vw, 420px'
                  className='object-cover'
                />
              </div>
            </div>

            <div className='w-full md:w-1/2 text-center md:text-left'>
              <h2 className='font-serif text-5xl sm:text-6xl font-medium text-burgundy leading-[0.95] tracking-tight'>
                Conviértete en
                <br />
                <span className='italic text-rose'>Ella.</span>
              </h2>

              <p className='mt-8 font-sans text-charcoal/70 text-lg leading-relaxed font-light'>
                Comienza tu transformaci&oacute;n ahora.
              </p>

              <ul className='mt-6 space-y-3'>
                {[
                  'Gu&iacute;a digital de 40 p&aacute;ginas',
                  '5 m&oacute;dulos profundos',
                  'Hojas de trabajo interactivas en cada m&oacute;dulo',
                  'La historia personal de Sandra y su marco de trabajo',
                  'Sistema de Decisiones del Ciclo Femenino (bonus)',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <span className='mt-1.5 block w-1.5 h-1.5 rounded-full bg-rose shrink-0' />
                    <span className='font-sans text-charcoal/70 text-base leading-relaxed font-light' dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>

              <div className='mt-8'>
                <CTAButton text='&iquest;Lista para Convertirte en Ella?' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Preguntas Frecuentes ── */}
      <FAQES />

      {/* ── Footer ── */}
      <footer className='bg-burgundy-deep py-12'>
        <div className='max-w-2xl mx-auto px-6 text-center'>
          <p className='font-serif text-2xl text-cream italic mb-6'>
            Sandra Torres
          </p>
          <p className='font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-8'>
            Un Método Probado para Desbloquear Tu Potencial
          </p>
          <div className='flex justify-center gap-6 mb-8 text-cream/60 text-sm'>
            <Link href='/' className='hover:text-cream transition-colors'>
              EN
            </Link>
            <span>|</span>
            <Link
              href='/es'
              className='text-cream hover:text-cream transition-colors'
            >
              ES
            </Link>
          </div>
          <p className='font-sans text-[11px] text-cream/20'>
            &copy; {new Date().getFullYear()} Becoming Her Method™. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>

      <StickyMobileCTAES />
    </main>
  );
}
