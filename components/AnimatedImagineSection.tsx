"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AnimatedImagineSection({
  heading,
  lines,
  conclusion,
}: {
  heading: string;
  lines: { text?: string; highlight?: string; beforeHighlight?: string; afterHighlight?: string }[];
  conclusion: React.ReactNode;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative bg-burgundy-deep overflow-hidden pt-32 sm:pt-48">
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight text-cream">
              {heading}
            </h2>
          </motion.div>

          <div className="mt-16 space-y-8 font-sans text-xl sm:text-2xl leading-relaxed font-light text-cream/80">
            {lines.map((line, i) => (
              <motion.p key={i} variants={itemVariants}>
                {line.beforeHighlight}
                {line.highlight && <span className="text-cream font-medium">{line.highlight}</span>}
                {line.afterHighlight}
                {line.text}
              </motion.p>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-20">
            <div className="w-16 h-px bg-cream/30 mx-auto mb-10" />
            <p className="font-serif text-2xl sm:text-3xl italic text-blush leading-relaxed">
              {conclusion}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full max-w-2xl mx-auto h-[400px] sm:h-[500px] md:h-[600px] mt-16 sm:mt-24 pointer-events-none"
      >
        {/* Soft edge fades to blend perfectly into the solid background */}
        <div className="absolute inset-0 z-10" style={{ 
          background: 'linear-gradient(to top, var(--burgundy-deep) 0%, transparent 20%, transparent 80%, var(--burgundy-deep) 100%)' 
        }} />
        <div className="absolute inset-0 z-10" style={{ 
          background: 'linear-gradient(to right, var(--burgundy-deep) 0%, transparent 25%, transparent 75%, var(--burgundy-deep) 100%)' 
        }} />
        <Image 
          src="/sandy/IMG_4336.JPG" 
          alt="Sandra Torres" 
          fill 
          className="object-cover object-[center_35%] scale-110"
        />
      </motion.div>
    </section>
  );
}
