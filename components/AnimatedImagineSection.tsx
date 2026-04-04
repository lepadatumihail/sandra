"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export function AnimatedImagineSection({
  heading,
  lines,
  conclusion,
}: {
  heading: string;
  lines: { text?: string; highlight?: string; beforeHighlight?: string }[];
  conclusion: React.ReactNode;
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto"
        >
          <Image
            src="/sandra/IMG_4336.JPG"
            alt="Sandra Torres"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-burgundy-deep/30 hidden lg:block" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-burgundy-deep/40 lg:hidden" />
        </motion.div>

        {/* Text side */}
        <div className="w-full lg:w-1/2 bg-burgundy-deep flex items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="px-8 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-24"
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-cream mb-14"
            >
              {heading}
            </motion.h2>

            <div className="space-y-6">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="font-sans text-lg sm:text-xl leading-relaxed font-light text-cream/70 border-l-2 border-rose/30 pl-6"
                >
                  {line.beforeHighlight}
                  {line.highlight && (
                    <span className="text-cream font-medium">{line.highlight}</span>
                  )}
                  {line.text}
                </motion.p>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-14">
              <div className="w-12 h-px bg-rose/50 mb-8" />
              <p className="font-serif text-xl sm:text-2xl italic text-blush leading-relaxed">
                {conclusion}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
