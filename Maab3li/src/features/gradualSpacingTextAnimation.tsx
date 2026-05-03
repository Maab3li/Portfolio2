'use client';
 
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
 
export function GradualSpacing({ text = 'Gradual Spacing' }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex space-x-1 justify-center px-10">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.div
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="h-[5rem] text-[2.5rem] sm:text-[3rem] font-bold bg-clip-text place-content-center text-transparent bg-linear-to-r from-[#FDC700] via-[#FFFBEB] to-[]"
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}