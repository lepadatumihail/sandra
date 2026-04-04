'use client';

import { useState } from 'react';

export function FAQES() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Es esto solo otro libro genérico de autoayuda?',
      answer:
        'No. La autoayuda genérica te dice que pienses positivo. El Becoming Her Method™ te obliga a desmantelar los patrones subconscientes que te mantienen estancada, para que puedas encarnar naturalmente una nueva identidad.',
    },
    {
      question: '¿En qué se diferencia este método de la terapia?',
      answer:
        'Mientras que la terapia a menudo se enfoca en entender tu pasado, este método se enfoca en construir activamente tu futuro. Te da un marco de acción paso a paso para cambiar tu realidad ahora mismo.',
    },
    {
      question: '¿Cuánto tiempo toma ver un cambio en mi realidad?',
      answer:
        'El cambio comienza en el momento en que tomas la decisión de no tolerar más tu realidad actual. Muchas mujeres experimentan un cambio interno profundo durante la primera semana de aplicar el marco.',
    },
    {
      question: '¿Qué recibo después de comprar?',
      answer:
        'Recibes una descarga digital instantánea a través de Lemon Squeezy — una guía de 40 páginas con 5 módulos profundos, hojas de trabajo interactivas para cada fase, y el Sistema de Decisiones del Ciclo Femenino como bonus. Todo llega a tu correo inmediatamente después de la compra.',
    },
    {
      question: '¿Hay una vista previa gratuita?',
      answer:
        'Sí. Baja a la sección de Guías Gratis para descargar el Módulo 1: Reinicio de Identidad y el Sistema de Decisiones del Ciclo Femenino — ambos completamente gratis. Te darán una muestra real del método antes de comprometerte.',
    },
  ];

  return (
    <section className='bg-cream-dark py-24 sm:py-24'>
      <div className='max-w-3xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl sm:text-5xl font-medium tracking-tight text-burgundy'>
            Preguntas Frecuentes
          </h2>
          <p className='font-serif italic text-3xl text-burgundy mt-4'>
            Elimina la duda.
          </p>
        </div>

        <div className='space-y-4'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className='bg-white rounded-2xl border border-blush/20 overflow-hidden transition-all duration-300'
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className='w-full px-6 py-6 text-left flex justify-between items-center group'
                >
                  <span className='font-sans text-lg font-medium text-charcoal/90 group-hover:text-burgundy transition-colors'>
                    {faq.question}
                  </span>
                  <span className='ml-6 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-cream text-burgundy transition-transform duration-300'>
                    {isOpen ? (
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M20 12H4'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 4v16m8-8H4'
                        />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className='font-sans text-charcoal/70 leading-relaxed font-light'>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
