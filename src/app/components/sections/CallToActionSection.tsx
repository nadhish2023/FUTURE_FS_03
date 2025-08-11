'use client';

import { motion } from 'framer-motion';

const CallToActionSection = () => {
  const officialBMWLink = 'https://www.bmwusa.com/build-your-own.html';

  const handleNavigate = () => {
    const userConfirmed = window.confirm(
      "You are now leaving this conceptual site and will be redirected to the official BMW Build Your Own page. Do you want to continue?"
    );

    if (userConfirmed) {
      window.location.href = officialBMWLink;
    }
  };

  return (
    <section className="bg-base-dark py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-bold text-4xl md:text-5xl text-white">
          Craft Your Legacy
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          The M experience is waiting. Build your ultimate driving machine on the official BMW site.
        </p>

        <motion.button
          onClick={handleNavigate}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block font-bold text-lg text-white bg-component-dark py-4 px-10 rounded-lg
                     border-2 border-transparent transition-all duration-300
                     hover:border-bmw-light-blue hover:shadow-[0_0_15px_rgba(0,153,255,0.5)]"
        >
          Design & Price
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;