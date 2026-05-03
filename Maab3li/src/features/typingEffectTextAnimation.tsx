"use client"
 
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
 
export function TypingEffect({ text = 'Typing Effect', time =0 }: { text: string, time:number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [timer, setTimer] = useState(0)

  const myTimer = setTimeout(() => {
    setTimer(1)
    clearTimeout(myTimer)
  },time)

  return (
    <div
      ref={ref}
      className=""
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView&&timer==1 ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}