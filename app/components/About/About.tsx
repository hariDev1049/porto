import React from 'react';
import ImageCaraousel from '../ImageCaraousel/ImageCaraousel';
import { ThemeContext } from '@/app/context/ThemeContext';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <motion.div
      className={
        theme.isDark
          ? 'text-pink flex items-start flex-col'
          : 'text-slate-800 flex items-start flex-col'
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-sm:flex flex-col items-center">
        <h3
          className={
            theme.isDark
              ? 'text-white font-bold md:mt-20'
              : 'font-bold md:mt-20'
          }
        >
          About Me
        </h3>
        <p className="text-balance w-5/6 pt-6 mb-3 max-sm:text-center sm:items-center">
          Outside of coding, you'll find me indulging in hobbies like painting,
          gymming, trekking, and cooking, where I find inspiration and balance
          to fuel my creativity.
        </p>
      </div>
      <ImageCaraousel />
    </motion.div>
  );
};

export default About;
