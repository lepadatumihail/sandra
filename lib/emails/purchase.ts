type Locale = 'en' | 'es';

type EmailContent = {
  subject: string;
  html: string;
  text: string;
  attachmentFilename: string;
};

const EN_TEXT = `Welcome.

Your copy of the Becoming Her Method is attached to this email as a PDF. Save it somewhere you'll come back to.

This isn't a book you read once. Read it slowly. Start with whichever chapter your body is pulling you toward.

I'm proud of you for deciding to do this.

— Sandra`;

const EN_HTML = `<div style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #2a1a1a; max-width: 560px;">
  <p>Welcome.</p>
  <p>Your copy of the <strong>Becoming Her Method</strong> is attached to this email as a PDF. Save it somewhere you'll come back to.</p>
  <p>This isn't a book you read once. Read it slowly. Start with whichever chapter your body is pulling you toward.</p>
  <p>I'm proud of you for deciding to do this.</p>
  <p style="margin-top: 32px; font-style: italic;">— Sandra</p>
</div>`;

const ES_TEXT = `Bienvenida.

Tu copia del Método Becoming Her está adjunta a este correo como un PDF. Guárdalo en un lugar al que vayas a volver.

Este no es un libro que se lee una sola vez. Léelo despacio. Empieza con el capítulo al que tu cuerpo te esté llamando.

Estoy orgullosa de ti por tomar esta decisión.

— Sandra`;

const ES_HTML = `<div style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #2a1a1a; max-width: 560px;">
  <p>Bienvenida.</p>
  <p>Tu copia del <strong>Método Becoming Her</strong> está adjunta a este correo como un PDF. Guárdalo en un lugar al que vayas a volver.</p>
  <p>Este no es un libro que se lee una sola vez. Léelo despacio. Empieza con el capítulo al que tu cuerpo te esté llamando.</p>
  <p>Estoy orgullosa de ti por tomar esta decisión.</p>
  <p style="margin-top: 32px; font-style: italic;">— Sandra</p>
</div>`;

export function buildPurchaseEmail(locale: Locale): EmailContent {
  if (locale === 'es') {
    return {
      subject: 'Tu copia del Método Becoming Her ya está aquí',
      html: ES_HTML,
      text: ES_TEXT,
      attachmentFilename: 'Becoming_Her_Method_Libro_Completo.pdf',
    };
  }
  return {
    subject: 'Your copy of Becoming Her Method is here',
    html: EN_HTML,
    text: EN_TEXT,
    attachmentFilename: 'Becoming_Her_Method_Full_Book.pdf',
  };
}
