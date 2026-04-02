'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this just another generic self-help book?',
      answer:
        'No. Generic self-help tells you to think positive. The Becoming Her Method™ forces you to dismantle the subconscious patterns that are keeping you stuck, so you can naturally embody a new identity.',
    },
    {
      question: 'How is this method different from therapy?',
      answer:
        'While therapy is often focused on understanding your past, this method is focused on actively building your future. It gives you an actionable, step-by-step framework to shift your reality right now.',
    },
    {
      question: 'How long does it take to see a shift in my reality?',
      answer:
        'The shift begins the moment you make the decision to no longer tolerate your current reality. Many women experience a profound internal shift within the first week of applying the framework.',
    },
    {
      question: 'Do I get immediate access after downloading?',
      answer:
        'Yes. As soon as you complete your purchase, you will receive an email with instant access to the digital guide so you can begin immediately.',
    },
  ];

  return (
    <section className='bg-cream-dark py-24 sm:py-32 relative'>
      {/* Decorative dreamy glows */}
      <div className='absolute top-0 right-1/4 w-[20rem] h-[20rem] bg-rose/10 rounded-full blur-[80px] pointer-events-none' />

      <div className='max-w-3xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl sm:text-5xl font-medium tracking-tight text-burgundy'>
            Frequently Asked Questions
          </h2>
          <p className='font-handwriting text-3xl text-rose mt-4 rotate-[-1deg]'>
            Eliminate the doubt.
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
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 12H4' />
                      </svg>
                    ) : (
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
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
