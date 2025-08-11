'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

const techStats = [
  {
    value: 617,
    label: 'Max Horsepower',
    accentColor: 'bg-bmw-light-blue',
  },
  {
    value: 553,
    label: 'Peak Torque (lb-ft)',
    accentColor: 'bg-bmw-dark-blue',
  },
  {
    value: 3.2,
    label: '0-60 MPH (sec)',
    accentColor: 'bg-bmw-red',
  },
];

const TechSpecsSection = () => {
  return (
    <section className="bg-component-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-4xl md:text-5xl text-center mb-16 text-white"
        >
          Performance by the Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {techStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="font-bold text-6xl md:text-7xl lg:text-8xl text-white">
                {stat.label.includes('sec') ? (
                  <>
                    <AnimatedCounter to={Math.floor(stat.value)} />
                    <span>.{String(stat.value).split('.')[1] || '0'}</span>
                  </>
                ) : (
                  <AnimatedCounter to={stat.value} />
                )}
              </div>

              <p className="text-lg text-gray-400 mt-2">{stat.label}</p>
              
              <div className={`h-1 w-20 mx-auto mt-4 ${stat.accentColor}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;