import Image from "next/image";
import Link from "next/link";
import { AnimatedImagineSection } from "@/components/AnimatedImagineSection";

function Divider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="w-16 h-px bg-linear-to-r from-transparent via-blush to-transparent" />
    </div>
  );
}

function CTAButton({ className = "", text = "Descargar Ahora" }: { className?: string, text?: string }) {
  return (
    <a
      href="#"
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
      <span className="relative z-10">{text}</span>
      <span className="ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
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
        ${light ? "text-cream" : "text-burgundy"}
      `}
    >
      {children}
    </h2>
  );
}

const phases = [
  {
    number: "01",
    title: "Reinicio de Identidad",
    description:
      "Define en quién te estás convirtiendo. Cambia de tu versión pasada a tu yo futuro.",
  },
  {
    number: "02",
    title: "Trabajo Interior y Sanación",
    description:
      "Entiende tus detonantes. Libera patrones emocionales. Sana las heridas que moldean tus reacciones.",
  },
  {
    number: "03",
    title: "Autovalor y Estándares",
    description:
      "Construye un amor propio profundo. Establece estándares no negociables. Deja de aceptar menos.",
  },
  {
    number: "04",
    title: "Disciplina y Poder",
    description:
      "Crea hábitos que se alineen con tu yo más elevado. Haz lo que debe hacerse — incluso cuando sea incómodo.",
  },
  {
    number: "05",
    title: "Expresión Magnética",
    description:
      "Conviértete en la mujer que la gente siente. Muévete con confianza, presencia y certeza.",
  },
];

export default function HomeES() {
  return (
    <main>
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-8">
        <div className="font-serif text-xl sm:text-2xl text-cream italic tracking-wide">Sandra Torres</div>
        <div className="flex items-center gap-6 font-sans text-sm font-semibold tracking-[0.2em] uppercase text-cream">
          <Link href="/" className="text-cream/60 hover:text-cream transition-colors">EN</Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/branding/hero-lily.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-burgundy/80 via-burgundy/50 to-burgundy-deep/95" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 max-w-4xl mx-auto mt-12">
          <p className="animate-fade-in-up text-blush/90 text-xs sm:text-sm uppercase tracking-[0.35em] font-sans font-medium mb-8">
            Un Método Probado por Sandra Torres
          </p>

          <h1 className="animate-fade-in-up animate-delay-100 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium text-cream leading-[0.95] tracking-tight mb-8 drop-shadow-lg">
            Becoming
            <br />
            <span className="italic">Her</span>
            <span className="text-blush"> Method</span>
            <span className="text-rose text-3xl sm:text-4xl align-super ml-1">
              ™
            </span>
          </h1>

          <div className="animate-fade-in-up animate-delay-200 space-y-3 mb-12">
            <p className="text-cream/90 font-sans text-lg sm:text-2xl leading-relaxed max-w-2xl font-light">
              No te conviertes en ella de la noche a la mañana.
              <br />
              Te conviertes en ella a través de elecciones diarias.
            </p>
          </div>

          <div className="animate-fade-in-up animate-delay-300">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ── Early CTA ── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-blush/20">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-3/4 shadow-2xl rounded-sm overflow-hidden">
                <Image
                  src="/branding/becoming-her-cover.png"
                  alt="Becoming Her Method™ — portada del curso"
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-serif text-5xl sm:text-6xl font-medium text-burgundy leading-[0.95] tracking-tight">
                Conviértete en
                <br />
                <span className="italic text-rose">Ella.</span>
              </h2>

              <p className="mt-8 font-sans text-charcoal/70 text-xl leading-relaxed font-light">
                Comienza tu transformación ahora.
                <br />
                Accede al Método Becoming Her™ hoy.
              </p>

              <div className="mt-10">
                <CTAButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Opening Manifesto ── */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8 text-charcoal/80 font-sans text-lg sm:text-xl leading-relaxed">
            <p className="tracking-wide">Cada acción construye tu identidad.<br/>Cada decisión moldea tu futuro.</p>
            <Divider />
            <p className="text-burgundy font-serif text-3xl sm:text-4xl lg:text-5xl italic leading-tight font-medium mt-8">
              No persigues la vida que quieres&hellip;
              <br />
              <span className="text-rose">Te conviertes en la mujer que la atrae.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── This Is For You If… ── */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <SectionHeading>Esto Es Para Ti Si&hellip;</SectionHeading>

            <ul className="mt-12 space-y-8">
              {[
                "Sientes que tienes mucho potencial... pero no lo estás viviendo plenamente.",
                "Estás cansada de pensar demasiado, de dudar de ti misma y de conformarte con menos de lo que mereces.",
                "Quieres sentirte segura, poderosa, con claridad y en control de tu vida.",
                "Quieres convertirte en esa mujer — la que entra en una habitación y se hace sentir.",
              ].map((text, i) => (
                <li key={i} className="flex gap-5 items-start">
                  <span className="mt-2.5 block w-1.5 h-1.5 rounded-full bg-rose shrink-0" />
                  <p className="font-sans text-charcoal/80 text-lg sm:text-xl leading-relaxed font-light">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/sandy/IMG_4324.jpg" alt="Sandra Torres" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* ── Not Just An Ebook ── */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading>
            Esto No Es Solo un Ebook.
          </SectionHeading>

          <p className="mt-6 font-serif text-2xl sm:text-3xl italic text-burgundy/80 leading-relaxed">
            Esto es un cambio de identidad.
          </p>

          <p className="mt-8 font-sans text-charcoal/70 text-xl leading-relaxed font-light max-w-2xl mx-auto">
            El Método Becoming Her™ es una guía paso a paso diseñada para ayudarte a:
          </p>

          <div className="mt-12 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-blush/20 text-left">
            <ul className="space-y-6">
              {[
                "Romper patrones emocionales que te mantienen estancada",
                "Reprogramar las creencias que limitan tu crecimiento",
                "Construir un amor propio profundo y un respeto inquebrantable",
                "Desarrollar disciplina y estándares que eleven tu vida",
                "Volverte magnética sin perseguir validación",
              ].map((text, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <span className="text-rose/50 font-serif text-2xl mt-0.5">—</span>
                  <p className="font-sans text-charcoal/80 text-lg sm:text-xl leading-relaxed font-light">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <p className="font-serif text-2xl sm:text-3xl text-burgundy leading-relaxed italic">
              Se trata de convertirte en una mujer que no se conforma, no persigue y no se pierde a sí misma.
            </p>
          </div>
        </div>
      </section>

      {/* ── What You Will Experience (Parallax image) ── */}
      <section className="relative py-32 sm:py-48 overflow-hidden">
        <Image src="/sandy/IMG_4337.jpg" alt="Background" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-burgundy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-burgundy-deep/60 to-burgundy-deep/90" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionHeading light>Lo Que Experimentarás</SectionHeading>

          <div className="mt-16 space-y-12">
            {[
              {
                from: "Dejarás de reaccionar…",
                to: "y empezarás a responder con poder.",
              },
              {
                from: "Dejarás de buscar validación…",
                to: "y empezarás a elegirte a ti misma.",
              },
              {
                from: "Dejarás de sentirte perdida…",
                to: "y empezarás a moverte con claridad.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <p className="font-sans text-cream/40 text-lg sm:text-xl line-through decoration-cream/20 font-light">
                  {item.from}
                </p>
                <p className="font-sans text-cream text-xl sm:text-2xl font-medium tracking-wide">
                  {item.to}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="w-24 h-px bg-rose/50 mx-auto mb-10" />
            <p className="font-serif text-2xl sm:text-3xl italic text-blush leading-relaxed">
              Aquí es donde dejas de ser controlada por tus emociones&hellip;
              <br />
              y empiezas a usarlas como guía.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Method (Phases) ── */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-rose text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4">
              Las 5 Fases
            </p>
            <SectionHeading>El Método</SectionHeading>
          </div>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="group relative flex flex-col sm:flex-row gap-6 sm:gap-12 py-8 px-8 bg-white rounded-2xl shadow-sm border border-blush/10 hover:shadow-md transition-shadow"
              >
                <div className="shrink-0">
                  <span className="font-serif text-5xl sm:text-6xl font-medium text-rose/20 group-hover:text-rose/40 transition-colors">
                    {phase.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-4">
                    {phase.title}
                  </h3>
                  <p className="font-sans text-charcoal/70 text-lg leading-relaxed font-light">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This Works ── */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
             <Image src="/sandy/IMG_4326.JPG" alt="Sandra Torres" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10">
            <SectionHeading>Por Qué Esto Funciona</SectionHeading>

            <p className="mt-8 font-sans text-charcoal/70 text-xl leading-relaxed font-light">
              Porque no se enfoca en motivación superficial.
            </p>

            <p className="mt-6 font-serif text-3xl sm:text-4xl italic text-rose leading-snug font-medium">
              Cambia quién estás siendo.
            </p>

            <div className="mt-12 space-y-5 text-charcoal/60 font-sans text-xl font-light">
              <p>Cuando tu identidad cambia&hellip;</p>
              <p className="text-charcoal/70">
                tus estándares cambian.
              </p>
              <p className="text-charcoal/80">
                tus acciones cambian.
              </p>
              <p className="text-burgundy font-medium text-2xl pt-2">
                toda tu vida cambia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Imagine This Version of You ── */}
      <AnimatedImagineSection
        heading="Imagina Esta Versión de Ti"
        lines={[
          { text: "Entras en una habitación y no cuestionas tu valor." },
          { beforeHighlight: "No persigues la atención — ", highlight: "la atraes." },
          { beforeHighlight: "No toleras la confusión — ", highlight: "eliges la claridad." },
          { beforeHighlight: "No te abandonas a ti misma — ", highlight: "te mantienes en tu poder." }
        ]}
        conclusion={
          <>
            Esa versión de ti ya existe.<br />
            Este método te muestra cómo convertirte en ella.
          </>
        }
      />

      {/* ── Turning Point & Become Her ── */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionHeading>Este Es Tu Punto de Inflexión</SectionHeading>

            <div className="mt-10 space-y-4 font-sans text-xl text-charcoal/70 leading-relaxed font-light">
              <p>Puedes quedarte donde estás&hellip;</p>
              <p className="text-burgundy font-medium text-2xl">
                o puedes decidir que este es el momento en que todo cambia.
              </p>
            </div>

            <div className="mt-16 flex flex-col items-center gap-4">
              <p className="font-sans text-charcoal/50 text-lg tracking-[0.2em] uppercase">
                No más esperas.
              </p>
              <p className="font-sans text-charcoal/60 text-lg tracking-[0.2em] uppercase">
                No más conformismo.
              </p>
              <p className="font-sans text-burgundy/80 font-bold text-lg tracking-[0.2em] uppercase">
                No más hacerte pequeña.
              </p>
            </div>
          </div>

          <div className="mt-32 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-blush/20">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-3/4 shadow-2xl rounded-sm overflow-hidden">
                <Image
                  src="/branding/becoming-her-cover.png"
                  alt="Becoming Her Method™ — course cover"
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-serif text-5xl sm:text-6xl font-medium text-burgundy leading-[0.95] tracking-tight">
                Conviértete en
                <br />
                <span className="italic text-rose">Ella.</span>
              </h2>

              <p className="mt-8 font-sans text-charcoal/70 text-xl leading-relaxed font-light">
                Comienza tu transformación ahora.
                <br />
                Accede al Método Becoming Her™ hoy.
              </p>

              <div className="mt-10">
                <CTAButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-burgundy-deep py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl text-cream italic mb-6">Sandra Torres</p>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-8">
            Un Método Probado para Desbloquear Tu Potencial
          </p>
          <div className="flex justify-center gap-6 mb-8 text-cream/60 text-sm">
            <Link href="/" className="hover:text-cream transition-colors">EN</Link>
            <span>|</span>
            <Link href="/es" className="text-cream hover:text-cream transition-colors">ES</Link>
          </div>
          <p className="font-sans text-[11px] text-cream/20">
            &copy; {new Date().getFullYear()} Becoming Her Method™. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
