'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

type AnimatedCounterProps = {
  to: number;
  from?: number;
  className?: string;
};

const AnimatedCounter = ({ to, from = 0, className }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to]);

  return <span ref={ref} className={className} />;
};

export default AnimatedCounter;