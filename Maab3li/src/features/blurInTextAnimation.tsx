'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
 
export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: .7 }}
      className=""
    >
      {children}
    </motion.div>
  );
};