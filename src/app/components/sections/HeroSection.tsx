'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';

const triColors: string[] = [
  'text-bmw-light-blue',
  'text-bmw-dark-blue',
  'text-bmw-red',
];

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const chevronVariants: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: [0, 1, 0],
    y: [-10, 0, 10],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3.2,
    },
  },
};

const HeroSection = () => {
  useEffect(() => {
    const startupSound = new Audio('/sounds/m-startup.mp3');
    startupSound.volume = 0.4;

    const playTimeout = setTimeout(() => {
      startupSound.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }, 800);

    return () => clearTimeout(playTimeout);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      <div className="relative z-20 text-center text-white p-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase"
        >
          <motion.span
            initial={{ backgroundSize: "400% 400%", backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{
              duration: 2.0,
              delay: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            }}
            className="bg-gradient-to-r from-bmw-light-blue via-bmw-dark-blue to-bmw-red text-transparent bg-clip-text"
          >
            Future of Sport
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-4 max-w-xl text-lg md:text-xl font-light text-gray-300"
        >
          Discover the Pinnacle of BMW M Performance
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        {[...Array(3)].map((_, i) => (
          <motion.svg
            key={i}
            variants={chevronVariants}
            className={`w-6 h-6 ${triColors[i]}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;