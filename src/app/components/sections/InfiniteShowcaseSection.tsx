'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const cars = [
  { name: 'M4 Competition', image: '/images/m4-coupe.png' },
  { name: 'M8 Gran Coupé', image: '/images/m8-gran-coupe.png' },
  { name: 'M2 Coupé', image: '/images/m2-coupe.png' },
  { name: 'M5 Competition', image: '/images/m5-sedan.png' },
  { name: 'M3 Sedan', image: '/images/m3-sedan.png' }, 
];

const doubledCars = [...cars, ...cars, ...cars];

const InfiniteShowcaseSection = () => {
  return (
    <section className="w-full py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-bold text-4xl md:text-5xl text-white tracking-wider"
        >
          EXPLORE THE LINEUP
        </motion.h2>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden 
                     [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll hover:[animation-play-state:paused]">
          {doubledCars.map((car, index) => (
            <li key={index} className="flex-shrink-0 group">
              <div className="relative w-[300px] h-[200px] md:w-[450px] md:h-[300px]">
                
                <div 
                  className="absolute inset-0 rounded-2xl transition-opacity duration-500 ease-in-out
                             opacity-0 group-hover:opacity-100
                             animated-glowing-border"
                >
                  <div className="w-full h-full rounded-[14px] bg-black/40"></div>
                </div>

                <div className="relative z-10 w-full h-[75%]">
                  <Image
                    className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={car.image}
                    alt={car.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div className="absolute inset-0 flex items-end justify-center z-20 h-full pb-4
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <p className="font-bold text-xl text-white tracking-widest text-shadow">
                    {car.name}
                  </p>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InfiniteShowcaseSection;