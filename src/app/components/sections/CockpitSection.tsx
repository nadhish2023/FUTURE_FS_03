'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CockpitSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image
            src="/images/cockpit-view.png"
            alt="BMW M Cockpit View"
            layout="fill"
            objectFit="cover"
            className="scale-125"
          />
        </motion.div>

        <div className="absolute inset-0 z-10 bg-black/40"></div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white">
          <motion.h2 
            className="font-bold text-4xl md:text-6xl"
            style={{ opacity: scrollYProgress }}
          >
            Command Center
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
            style={{ opacity: scrollYProgress }}
          >
            Every button, every surface, every line is obsessively engineered for a singular purpose: pure driving focus.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CockpitSection;