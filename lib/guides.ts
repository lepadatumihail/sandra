import type { Metadata } from 'next';
import type { Locale } from '@/lib/checkout';
// Relative on purpose: next.config.ts imports this file, and its loader can't
// resolve `@/` aliases in nested imports.
import { localeAlternates, siteMetadata } from './site';

export type GuideId =
  | 'bible_becoming_her'
  | 'bible_right_man'
  | 'bible_raising_children'
  | 'bible_becoming_him';

type GuideCopy = {
  slug: string;
  // The <title>: what people actually search for, kept under ~60 characters.
  seoTitle: string;
  pdf: string;
  downloadName: string;
  cover: string;
  pages: number;
  audience: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  intro: string;
  quote: { text: string; cite: string };
  contentsHeading: string;
  contentsCount: string;
  contents: { title: string; note?: string }[];
  howTo: string;
  extras: string[];
  closing: string;
};

export type Guide = {
  id: GuideId;
  theme: 'burgundy' | 'navy';
  en: GuideCopy;
  es: GuideCopy;
};

export const SERIES: Record<Locale, string> = {
  en: 'According to the Bible',
  es: 'según la Biblia',
};

export const GUIDES_HUB_PATH: Record<Locale, string> = {
  en: '/guides',
  es: '/es/guias',
};

export const GUIDES_HUB_COPY: Record<
  Locale,
  { name: string; title: string; description: string }
> = {
  en: {
    name: 'Free Bible Guides',
    title: 'Free Bible Guides (PDF) — Sandra Torres',
    description:
      'Free Bible guides: how to be a godly woman, choose the right man, raise your children and become a godly man. PDF downloads, no sign-up.',
  },
  es: {
    name: 'Guías bíblicas gratis',
    title: 'Guías bíblicas gratis (PDF) — Sandra Torres',
    description:
      'Guías bíblicas gratis: cómo ser una mujer de Dios, elegir al hombre adecuado, criar a tus hijos y ser un hombre de Dios. PDF sin registro.',
  },
};

export const guides: Guide[] = [
  {
    id: 'bible_becoming_her',
    theme: 'burgundy',
    en: {
      slug: 'becoming-her',
      seoTitle: 'Becoming Her: How to Be a Godly Woman — Free Bible Guide',
      pdf: '/bible/becoming-her-en.pdf',
      downloadName: 'Becoming_Her_According_to_the_Bible.pdf',
      cover: '/bible/becoming-her-en.png',
      pages: 40,
      audience: 'For women',
      titleLead: 'Becoming',
      titleAccent: 'Her',
      description:
        'A free guide to becoming a godly woman: 15 chapters on faith, character, emotional maturity, boundaries, discipline and purpose, rooted in Scripture.',
      intro:
        "This isn't a guide to becoming perfect. It's a guide to becoming transformed: 15 chapters on faith, character, boundaries, discipline and love, rooted in Scripture.",
      quote: {
        text: 'Be transformed by the renewing of your mind.',
        cite: 'Romans 12:2',
      },
      contentsHeading: 'Your Becoming Her journey',
      contentsCount: '15 chapters',
      contents: [
        { title: 'God First', note: 'Build the foundation' },
        { title: 'Character Before Image', note: 'Become trustworthy' },
        { title: 'Guard Your Heart', note: 'Protect what shapes you' },
        {
          title: 'Emotional Maturity',
          note: 'Master reactions without suppressing feelings',
        },
        {
          title: 'Love Without Losing Yourself',
          note: 'Truth, forgiveness and boundaries',
        },
        {
          title: 'Stewardship',
          note: 'Body, home, money, time and responsibilities',
        },
        {
          title: 'Discipline',
          note: 'Become consistent when motivation disappears',
        },
        {
          title: 'Comparison & Identity',
          note: 'Stay faithful to your own calling',
        },
        {
          title: 'Relationships & Discernment',
          note: 'Choose character over chemistry',
        },
        {
          title: 'Motherhood & Family',
          note: 'Raise children with love, truth and direction',
        },
        { title: 'Work & Purpose', note: 'Build without worshipping success' },
        { title: 'Speech & Wisdom', note: 'Use words to give life' },
        {
          title: 'Forgiveness & Healing',
          note: 'Release bitterness and grow wiser',
        },
        {
          title: 'Freedom From Approval',
          note: 'Live from conviction, not applause',
        },
        {
          title: 'Renew Your Mind',
          note: 'Let God transform the woman within',
        },
      ],
      howTo:
        'Move slowly. Read one chapter, look up the Scriptures, answer the reflection questions and choose one practical action. Read. Pray. Reflect. Practice. Review.',
      extras: [
        'A morning-to-evening faith rhythm',
        '30 days of Becoming Her prompts',
        'The complete Becoming Her checklist',
        'A prayer for the woman you are becoming',
      ],
      closing: 'Becoming her is a daily decision.',
    },
    es: {
      slug: 'convertirte-en-ella',
      seoTitle: 'Cómo ser una mujer de Dios — guía bíblica gratis',
      pdf: '/bible/becoming-her-es.pdf',
      downloadName: 'Convirtiendote_en_Ella_Segun_la_Biblia.pdf',
      cover: '/bible/becoming-her-es.png',
      pages: 41,
      audience: 'Para mujeres',
      titleLead: 'Convirtiéndote',
      titleAccent: 'en Ella',
      description:
        'Una guía gratuita para convertirte en una mujer de Dios: 15 capítulos sobre fe, carácter, madurez emocional, límites, disciplina y propósito, con raíz en la Escritura.',
      intro:
        'No es una guía para alcanzar la perfección. Es una guía para dejarte transformar: 15 capítulos sobre fe, carácter, límites, disciplina y amor, con raíz en la Escritura.',
      quote: {
        text: 'Transformaos mediante la renovación de vuestra mente',
        cite: 'Romanos 12:2',
      },
      contentsHeading: 'Tu camino para convertirte en ella',
      contentsCount: '15 capítulos',
      contents: [
        { title: 'Dios primero', note: 'Construye el fundamento' },
        {
          title: 'El carácter antes que la imagen',
          note: 'Conviértete en alguien de confianza',
        },
        { title: 'Guarda tu corazón', note: 'Protege lo que te moldea' },
        {
          title: 'Madurez emocional',
          note: 'Domina tus reacciones sin reprimir tus sentimientos',
        },
        {
          title: 'Ama sin perderte a ti misma',
          note: 'Verdad, perdón y límites',
        },
        {
          title: 'Administración responsable',
          note: 'Cuerpo, hogar, dinero, tiempo y responsabilidades',
        },
        {
          title: 'Disciplina',
          note: 'Sé constante cuando desaparezca la motivación',
        },
        {
          title: 'Comparación e identidad',
          note: 'Mantente fiel a tu propio llamado',
        },
        {
          title: 'Relaciones y discernimiento',
          note: 'Elige el carácter por encima de la química',
        },
        {
          title: 'Maternidad y familia',
          note: 'Cría con amor, verdad y orientación',
        },
        { title: 'Trabajo y propósito', note: 'Construye sin adorar el éxito' },
        { title: 'Palabras y sabiduría', note: 'Usa tus palabras para dar vida' },
        {
          title: 'Perdón y sanación',
          note: 'Suelta el resentimiento y crece en sabiduría',
        },
        {
          title: 'Libertad frente a la aprobación',
          note: 'Vive por convicción, no por aplausos',
        },
        {
          title: 'Renueva tu mente',
          note: 'Deja que Dios transforme a la mujer que hay en ti',
        },
      ],
      howTo:
        'Avanza despacio. Lee un capítulo, busca los pasajes bíblicos, responde a las preguntas de reflexión y elige una acción práctica. Lee. Ora. Reflexiona. Practica. Revisa.',
      extras: [
        'Un ritmo práctico de la mañana a la noche',
        '30 días para convertirte en ella',
        'Tu lista completa para convertirte en ella',
        'Una oración por la mujer en la que te estás convirtiendo',
      ],
      closing: 'Convertirte en ella es una decisión diaria.',
    },
  },
  {
    id: 'bible_right_man',
    theme: 'burgundy',
    en: {
      slug: 'the-right-man',
      seoTitle: 'How to Choose the Right Man — Free Bible Workbook',
      pdf: '/bible/right-man-en.pdf',
      downloadName: 'The_Right_Man_According_to_the_Bible.pdf',
      cover: '/bible/right-man-en.png',
      pages: 71,
      audience: 'For women choosing a partner',
      titleLead: 'How to Find & Choose',
      titleAccent: 'the Right Man',
      description:
        'A free 30-lesson biblical workbook for women: how to read character, take red flags seriously and choose a man you can safely build a life with.',
      intro:
        "You're not looking for a perfect man. You're looking for one whose direction, character and actions show you can safely build a life together. 30 lessons to help you see clearly.",
      quote: { text: 'Watch his fruit.', cite: 'Matthew 7:16' },
      contentsHeading: 'Your 30-lesson journey',
      contentsCount: '30 lessons',
      contents: [
        { title: 'Find a man who genuinely seeks God' },
        { title: 'Watch his character when nobody is impressed' },
        { title: 'Watch his actions more than his words' },
        { title: 'Look for consistency' },
        { title: 'Look for emotional maturity' },
        { title: 'Watch how he handles anger' },
        { title: 'Look for a man who can apologize' },
        { title: 'Look for self-control' },
        { title: 'Look for faithfulness' },
        { title: 'Look for a man who respects women' },
        { title: 'Look for responsibility' },
        { title: 'Look at how he handles money' },
        { title: 'Look for a provider mindset' },
        { title: 'Understand biblical leadership correctly' },
        { title: 'See whether he respects your boundaries' },
        { title: 'Look at his sexual values' },
        { title: 'See how he responds to your success' },
        { title: 'Watch how he handles your children' },
        { title: 'Would you want your son to become like him?' },
        { title: 'Do not confuse jealousy with love' },
        { title: 'Choose peace over chaos' },
        { title: 'Do not try to save him' },
        { title: 'Do not let loneliness lower your standards' },
        { title: 'Let time reveal character' },
        { title: 'Listen to wise people around you' },
        { title: 'Do not ignore red flags' },
        { title: 'Look for a man who makes room for your voice' },
        { title: 'Ask what husband and father he wants to become' },
        { title: 'Pray for discernment, not just confirmation' },
        { title: 'Remember: you are choosing a life' },
      ],
      howTo:
        'One lesson a day, or longer when a topic needs it. Read the passage, consider the example, answer the reflection and take one practical step. Write down what you observe, not what you assume.',
      extras: [
        'A Bible reading, an everyday example and a reflection in every lesson',
        'A conversation worksheet',
        'A discernment worksheet',
        'Prayer, purpose and next-step pages',
      ],
      closing: 'Remember: you are choosing a life.',
    },
    es: {
      slug: 'el-hombre-adecuado',
      seoTitle: 'Cómo elegir al hombre adecuado — cuaderno bíblico gratis',
      pdf: '/bible/right-man-es.pdf',
      downloadName: 'El_Hombre_Adecuado_Segun_la_Biblia.pdf',
      cover: '/bible/right-man-es.png',
      pages: 72,
      audience: 'Para mujeres que eligen pareja',
      titleLead: 'Cómo encontrar y elegir',
      titleAccent: 'al hombre adecuado',
      description:
        'Un cuaderno bíblico gratuito de 30 lecciones para mujeres: cómo leer el carácter, tomarte en serio las señales de alarma y elegir a un hombre con quien construir una vida con seguridad.',
      intro:
        'No buscas un hombre perfecto. Buscas un hombre cuyo rumbo, carácter y acciones demuestren que es seguro construir una vida con él. 30 lecciones para ver con claridad.',
      quote: { text: 'Observa sus frutos', cite: 'Mateo 7:16' },
      contentsHeading: 'Tu recorrido de 30 lecciones',
      contentsCount: '30 lecciones',
      contents: [
        { title: 'Busca un hombre que busque sinceramente a Dios' },
        {
          title: 'Observa su carácter cuando no tiene a nadie a quien impresionar',
        },
        { title: 'Observa sus acciones más que sus palabras' },
        { title: 'Busca constancia' },
        { title: 'Busca madurez emocional' },
        { title: 'Observa cómo gestiona la ira' },
        { title: 'Busca un hombre capaz de pedir perdón' },
        { title: 'Busca dominio propio' },
        { title: 'Busca fidelidad' },
        { title: 'Busca un hombre que respete a las mujeres' },
        { title: 'Busca responsabilidad' },
        { title: 'Observa cómo gestiona el dinero' },
        { title: 'Busca mentalidad de proveedor' },
        { title: 'Comprende bien el liderazgo bíblico' },
        { title: 'Comprueba si respeta tus límites' },
        { title: 'Observa sus valores sexuales' },
        { title: 'Observa cómo responde a tu éxito' },
        { title: 'Observa cómo trata a tus hijos' },
        { title: '¿Querrías que tu hijo se convirtiera en un hombre como él?' },
        { title: 'No confundas los celos con amor' },
        { title: 'Elige la paz por encima del caos' },
        { title: 'No intentes salvarlo' },
        { title: 'No dejes que la soledad rebaje tus criterios' },
        { title: 'Deja que el tiempo revele el carácter' },
        { title: 'Escucha a las personas sabias de tu entorno' },
        { title: 'No ignores las señales de alarma' },
        { title: 'Busca un hombre que deje espacio para tu voz' },
        { title: 'Pregunta qué esposo y padre quiere llegar a ser' },
        { title: 'Ora por discernimiento, no solo por confirmación' },
        { title: 'Recuerda: estás eligiendo una vida' },
      ],
      howTo:
        'Una lección al día, o más tiempo cuando un tema lo necesite. Lee el pasaje, considera el ejemplo, responde a la reflexión y da un paso práctico. Escribe lo que observas, no lo que supones.',
      extras: [
        'Una lectura bíblica, un ejemplo cotidiano y una reflexión en cada lección',
        'Una hoja de conversación',
        'Una hoja de discernimiento',
        'Páginas de oración, propósito y próximos pasos',
      ],
      closing: 'Recuerda: estás eligiendo una vida.',
    },
  },
  {
    id: 'bible_raising_children',
    theme: 'burgundy',
    en: {
      slug: 'raising-children',
      seoTitle: 'How to Raise Children According to the Bible — Free Guide',
      pdf: '/bible/raising-children-en.pdf',
      downloadName: 'Raising_Children_According_to_the_Bible.pdf',
      cover: '/bible/raising-children-en.png',
      pages: 30,
      audience: 'For parents',
      titleLead: 'How to Raise',
      titleAccent: 'Children',
      description:
        'A free biblical parenting workbook: 8 lessons on teaching faith, correcting with love, healthy consequences and building an emotionally safe home.',
      intro:
        "The goal isn't simply obedience. It's character, love for God and others, and a home where your children can learn, grow and stay securely loved.",
      quote: {
        text: 'I love you. This behaviour is not okay. I will help you make it right.',
        cite: 'A phrase to remember',
      },
      contentsHeading: 'Your parenting journey',
      contentsCount: '8 lessons',
      contents: [
        {
          title: 'Teach them about God in everyday life',
          note: 'Deuteronomy 6:6–7',
        },
        {
          title: 'Correct them with love',
          note: 'Ephesians 6:4 · Proverbs 13:24',
        },
        { title: 'Teach obedience and respect', note: 'Ephesians 6:1–3' },
        { title: 'Teach kindness and forgiveness', note: 'Matthew 22:37–39' },
        {
          title: 'Let them experience healthy consequences',
          note: 'Proverbs 22:6',
        },
        {
          title: 'Be the example you want them to follow',
          note: '1 Corinthians 11:1',
        },
        { title: 'Create an emotionally safe home', note: 'Colossians 3:21' },
        { title: 'Pray with them and for them', note: 'Philippians 4:6' },
      ],
      howTo:
        'One lesson at a time. Start with connection, give a clear limit, teach the next step and repair when needed. Firm boundaries and warmth belong together.',
      extras: [
        'Notes for younger and older children in every lesson',
        'Family rules and a daily rhythm',
        'A correction plan and weekly reflection',
        'A short prayer to pray with your children',
      ],
      closing: 'Grace and discipline belong together.',
    },
    es: {
      slug: 'criar-a-tus-hijos',
      seoTitle: 'Cómo criar a tus hijos según la Biblia — guía gratis',
      pdf: '/bible/raising-children-es.pdf',
      downloadName: 'Como_Criar_a_Tus_Hijos_Segun_la_Biblia.pdf',
      cover: '/bible/raising-children-es.png',
      pages: 31,
      audience: 'Para madres y padres',
      titleLead: 'Cómo criar a tus',
      titleAccent: 'hijos',
      description:
        'Un cuaderno bíblico gratuito para madres y padres: 8 lecciones para enseñar la fe, corregir con amor, permitir consecuencias saludables y crear un hogar emocionalmente seguro.',
      intro:
        'El objetivo no es simplemente la obediencia. Es cultivar el carácter, enseñar amor a Dios y a los demás y crear un hogar donde tus hijos aprendan, crezcan y se sientan queridos con seguridad.',
      quote: {
        text: 'Te quiero. Esta conducta no está bien. Te ayudaré a arreglarlo',
        cite: 'Una frase para recordar',
      },
      contentsHeading: 'Tu camino en la crianza',
      contentsCount: '8 lecciones',
      contents: [
        {
          title: 'Enséñales sobre Dios en la vida cotidiana',
          note: 'Deuteronomio 6:6–7',
        },
        {
          title: 'Corrígelos con amor',
          note: 'Efesios 6:4 · Proverbios 13:24',
        },
        { title: 'Enseña obediencia y respeto', note: 'Efesios 6:1–3' },
        { title: 'Enseña bondad y perdón', note: 'Mateo 22:37–39' },
        { title: 'Permite consecuencias saludables', note: 'Proverbios 22:6' },
        {
          title: 'Sé el ejemplo que quieres que sigan',
          note: '1 Corintios 11:1',
        },
        {
          title: 'Crea un hogar emocionalmente seguro',
          note: 'Colosenses 3:21',
        },
        { title: 'Ora con ellos y por ellos', note: 'Filipenses 4:6' },
      ],
      howTo:
        'Una lección cada vez. Empieza conectando, establece un límite claro, enseña el siguiente paso y repara cuando sea necesario. Los límites firmes y la calidez van juntos.',
      extras: [
        'Adaptaciones para niños pequeños y mayores en cada lección',
        'Normas familiares y un ritmo diario',
        'Un plan de corrección y una reflexión semanal',
        'Una oración breve para hacer con tus hijos',
      ],
      closing: 'La gracia y la disciplina van juntas.',
    },
  },
  {
    id: 'bible_becoming_him',
    theme: 'navy',
    en: {
      slug: 'becoming-him',
      seoTitle: 'Becoming Him: How to Be a Godly Man — Free Bible Guide',
      pdf: '/bible/becoming-him-en.pdf',
      downloadName: 'Becoming_Him_According_to_the_Bible.pdf',
      cover: '/bible/becoming-him-en.png',
      pages: 33,
      audience: 'For men',
      titleLead: 'Becoming',
      titleAccent: 'Him',
      description:
        'A free biblical guide to becoming a godly man: 16 chapters on integrity, self-control, work, money, leadership, marriage, fatherhood and legacy.',
      intro:
        "A godly man isn't defined by status, money or control. Scripture points deeper: 16 chapters on integrity, self-control, work, money, leadership, marriage and fatherhood.",
      quote: {
        text: 'Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love.',
        cite: '1 Corinthians 16:13–14',
      },
      contentsHeading: 'The 16 chapters',
      contentsCount: '16 chapters',
      contents: [
        { title: 'God First', note: 'Establish the foundation' },
        {
          title: 'Identity & Integrity',
          note: 'Become the same man in private',
        },
        {
          title: 'Self-Control',
          note: 'Master impulses before trying to lead others',
        },
        { title: 'Strength & Courage', note: 'Strong without becoming harsh' },
        { title: 'Discipline', note: 'Build consistency and resilience' },
        { title: 'Work & Excellence', note: 'Become diligent and useful' },
        {
          title: 'Money & Provision',
          note: 'Steward resources responsibly',
        },
        { title: 'Leadership', note: 'Authority expressed through service' },
        {
          title: 'Relationships & Dating',
          note: 'Love with honour and discernment',
        },
        {
          title: 'Marriage',
          note: 'Sacrificial love, faithfulness and partnership',
        },
        {
          title: 'Fatherhood',
          note: 'Presence, instruction, protection and example',
        },
        {
          title: 'Communication & Conflict',
          note: 'Truth without aggression',
        },
        {
          title: 'Brotherhood & Counsel',
          note: 'Choose men who sharpen you',
        },
        {
          title: 'Temptation & Sexual Integrity',
          note: 'Protect your mind and commitments',
        },
        {
          title: 'Purpose, Ambition & Business',
          note: 'Build without worshipping success',
        },
        {
          title: 'Humility, Repentance & Legacy',
          note: 'Finish as a man of good fruit',
        },
      ],
      howTo:
        'Use this guide slowly. Read the passages in context, reflect honestly and practice one concrete change at a time.',
      extras: [
        'Real-life examples throughout',
        '30 days to become a stronger godly man',
        'The godly man checklist',
        'A prayer for the man you are becoming',
      ],
      closing:
        "It isn't about looking powerful. It's about becoming trustworthy with power.",
    },
    es: {
      slug: 'convertirte-en-el',
      seoTitle: 'Cómo ser un hombre de Dios — guía bíblica gratis',
      pdf: '/bible/becoming-him-es.pdf',
      downloadName: 'Convirtiendote_en_El_Segun_la_Biblia.pdf',
      cover: '/bible/becoming-him-es.png',
      pages: 39,
      audience: 'Para hombres',
      titleLead: 'Convirtiéndote',
      titleAccent: 'en Él',
      description:
        'Una guía bíblica gratuita para ser un hombre de Dios: 16 capítulos sobre integridad, dominio propio, trabajo, dinero, liderazgo, matrimonio, paternidad y legado.',
      intro:
        'Un hombre de Dios no se define por el estatus, el dinero ni el control. La Escritura apunta más hondo: 16 capítulos sobre integridad, dominio propio, trabajo, dinero, liderazgo, matrimonio y paternidad.',
      quote: {
        text: 'Estad alerta, manteneos firmes en la fe, comportaos con valentía y sed fuertes. Hacedlo todo con amor',
        cite: '1 Corintios 16:13–14',
      },
      contentsHeading: 'Los 16 capítulos',
      contentsCount: '16 capítulos',
      contents: [
        { title: 'Dios primero', note: 'Establece el fundamento' },
        {
          title: 'Identidad e integridad',
          note: 'Sé el mismo hombre en privado',
        },
        {
          title: 'Dominio propio',
          note: 'Domina tus impulsos antes de intentar dirigir a otros',
        },
        { title: 'Fortaleza y valentía', note: 'Sé fuerte sin volverte duro' },
        { title: 'Disciplina', note: 'Desarrolla constancia y resiliencia' },
        { title: 'Trabajo y excelencia', note: 'Sé diligente y útil' },
        {
          title: 'Dinero y provisión',
          note: 'Administra los recursos responsablemente',
        },
        {
          title: 'Liderazgo',
          note: 'Autoridad expresada mediante el servicio',
        },
        {
          title: 'Relaciones y noviazgo',
          note: 'Ama con respeto y discernimiento',
        },
        {
          title: 'Matrimonio',
          note: 'Amor sacrificado, fidelidad y compañerismo',
        },
        {
          title: 'Paternidad',
          note: 'Presencia, enseñanza, protección y ejemplo',
        },
        { title: 'Comunicación y conflicto', note: 'Verdad sin agresividad' },
        {
          title: 'Hermandad y consejo',
          note: 'Elige hombres que te ayuden a mejorar',
        },
        {
          title: 'Tentación e integridad sexual',
          note: 'Protege tu mente y tus compromisos',
        },
        {
          title: 'Propósito, ambición y negocios',
          note: 'Construye sin adorar el éxito',
        },
        {
          title: 'Humildad, arrepentimiento y legado',
          note: 'Termina como un hombre de buenos frutos',
        },
      ],
      howTo:
        'Usa esta guía despacio. Lee los pasajes en su contexto, reflexiona con honestidad y practica un cambio concreto cada vez.',
      extras: [
        'Ejemplos de la vida real a lo largo de la guía',
        '30 días para ser un hombre de Dios más fuerte',
        'La lista de revisión del hombre de Dios',
        'Una oración por el hombre en el que te estás convirtiendo',
      ],
      closing:
        'No consiste en parecer poderoso. Consiste en ser digno de confianza con el poder.',
    },
  },
];

export function findGuide(locale: Locale, slug: string) {
  return guides.find((guide) => guide[locale].slug === slug);
}

export function guideHref(guide: Guide, locale: Locale) {
  return `${GUIDES_HUB_PATH[locale]}/${guide[locale].slug}`;
}

// The slice of guide data the client-side nav needs, so it doesn't bundle all the copy.
export function navGuides(locale: Locale) {
  return guides.map((guide) => ({
    href: guideHref(guide, locale),
    theme: guide.theme,
    titleLead: guide[locale].titleLead,
    titleAccent: guide[locale].titleAccent,
    audience: guide[locale].audience,
    cover: guide[locale].cover,
  }));
}

export type NavGuide = ReturnType<typeof navGuides>[number];

export function guideTitle(guide: Guide, locale: Locale) {
  const { titleLead, titleAccent } = guide[locale];
  return `${titleLead} ${titleAccent} ${SERIES[locale]}`;
}

export function guideMetadata(guide: Guide, locale: Locale): Metadata {
  const { seoTitle: title, description } = guide[locale];
  const url = guideHref(guide, locale);

  return {
    title,
    description,
    alternates: localeAlternates(
      { en: guideHref(guide, 'en'), es: guideHref(guide, 'es') },
      locale,
    ),
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function guidesHubMetadata(locale: Locale): Metadata {
  const { title, description } = GUIDES_HUB_COPY[locale];
  const site = siteMetadata(locale);

  return {
    title,
    description,
    alternates: localeAlternates(GUIDES_HUB_PATH, locale),
    openGraph: {
      ...site.openGraph,
      title,
      description,
      url: GUIDES_HUB_PATH[locale],
    },
    twitter: { ...site.twitter, title, description },
  };
}
