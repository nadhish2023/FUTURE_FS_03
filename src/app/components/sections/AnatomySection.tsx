'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const anatomyHotspots = [
  {
    id: 1,
    title: 'M TwinPower Turbo Engine',
    description: 'The high-revving inline 6-cylinder engine delivers up to 503 hp with instantaneous response and a signature sound.',
    position: { top: '45%', left: '30%' },
  },
  {
    id: 2,
    title: 'Carbon Ceramic Brakes',
    description: 'Optional M Carbon Ceramic brakes provide ultimate, fade-resistant stopping power and reduce unsprung weight for sharper handling.',
    position: { top: '59%', left: '26%' },
  },
  {
    id: 3,
    title: 'Aerodynamic Diffuser',
    description: 'The carbon fiber diffuser manages underbody airflow, increasing downforce and ensuring high-speed stability.',
    position: { top: '57%', left: '80%' },
  },
  {
    id: 4,
    title: 'M Carbon Bucket Seats',
    description: 'Lightweight, race-inspired seats provide perfect lateral support while connecting the driver directly to the chassis.',
    position: { top: '40%', left: '55%' },
  },
];

const AnatomySection = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const currentHotspot = activeHotspot ? anatomyHotspots.find(h => h.id === activeHotspot) : null;

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-bold text-4xl md:text-5xl text-center mb-4 text-white"
        >
          Anatomy of a Predator
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg text-gray-400 mb-16"
        >
          Explore the engineering that defines the BMW M4.
        </motion.p>

        <div className="relative aspect-[16/9]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src="/images/m4-anatomy.png"
              alt="BMW M4 Anatomy"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          {anatomyHotspots.map((hotspot) => (
            <motion.div
              key={hotspot.id}
              className="absolute w-6 h-6"
              style={{ top: hotspot.position.top, left: hotspot.position.left }}
              onHoverStart={() => setActiveHotspot(hotspot.id)}
              onHoverEnd={() => setActiveHotspot(null)}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + hotspot.id * 0.2 }}
            >
              <div className="absolute w-full h-full bg-bmw-light-blue rounded-full cursor-pointer animate-pulse" />
            </motion.div>
          ))}

          <AnimatePresence>
            {currentHotspot && (
              <motion.div
                className="absolute p-4 rounded-lg bg-component-dark/80 backdrop-blur-md shadow-2xl w-64 border border-white/10"
                style={{ top: currentHotspot.position.top, left: currentHotspot.position.left, x: '-50%', y: '-120%' }}
                initial={{ opacity: 0, scale: 0.9, y: '-110%' }}
                animate={{ opacity: 1, scale: 1, y: '-120%' }}
                exit={{ opacity: 0, scale: 0.9, y: '-110%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <h4 className="font-bold text-lg text-bmw-light-blue">{currentHotspot.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{currentHotspot.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AnatomySection;