'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const legacyPoints = [
  {
    year: '1972',
    title: 'The Birth of an Icon',
    description: 'BMW Motorsport GmbH is founded. A small team with a grand vision: to dominate the racetrack.',
    image: '/images/legacy-1972.jpg',
  },
  {
    year: '1986',
    title: 'A Legend is Unleashed',
    description: 'The first BMW M3 (E30) is born, becoming the most successful touring car in history.',
    image: '/images/legacy-1986.jpg',
  },
  {
    year: 'Today',
    title: 'The Dream Continues',
    description: 'Five decades of engineering passion, culminating in the most powerful M models ever created.',
    image: '/images/legacy-today.jpg',
  },
];

const LegacySection = () => {
  return (
    <section className="bg-base-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-bold text-4xl md:text-5xl text-center mb-4 text-white"
        >
          Forged in Competition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg text-gray-400 mb-20"
        >
          Every M is a direct descendant of a racing legend.
        </motion.p>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-component-dark"></div>

          {legacyPoints.map((point, index) => (
            <div key={index} className="relative mb-16 flex items-center justify-between w-full">
              <div className={`flex w-full items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                
                <motion.div 
                  className="w-1/2 p-4"
                  initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <Image src={point.image} alt={point.title} layout="fill" objectFit="cover" />
                  </div>
                </motion.div>

                <motion.div 
                  className={`w-1/2 p-4 ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, x: index % 2 !== 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <p className="text-3xl font-bold text-bmw-light-blue">{point.year}</p>
                  <h3 className="text-2xl font-bold text-white mt-2">{point.title}</h3>
                  <p className="text-gray-400 mt-2">{point.description}</p>
                </motion.div>
              </div>

              <motion.div 
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-base-dark"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              ></motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;