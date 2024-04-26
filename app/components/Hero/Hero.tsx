import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
const Hero = () => {
  const themeState = useContext(ThemeContext);

  return (
    <motion.div
      className="flex flex-col flex-grow items-center justify-center"
      initial={{ opacity: 0, left: 100 }}
      animate={{ opacity: 1, left: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div>
        <Image
          src="/profile.jpeg"
          width={200}
          height={200}
          alt="Picture of the author"
          style={{
            objectFit: 'cover',
            borderRadius: '100px', //👈 and here you can select border radius
          }}
        />
      </div>
      <div className="flex mt-5">
        <h1
          className={
            themeState.isDark
              ? 'text-(f0d6d6) text-6xl'
              : 'text-slate-800 text-6xl'
          }
        >
          Hello, I'm {''}
        </h1>
        <h1
          className={
            themeState.isDark
              ? 'text-(f0d6d6) font-bold ml-2 text-6xl'
              : 'text-slate-800 font-bold ml-2 text-6xl'
          }
        >
          <Typewriter
            options={{
              strings: [' Hariprasad.', 'a Frontend Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <motion.div
        className={
          themeState.isDark
            ? 'my-4 text-balance text-(f0d6d6) text-center text-xl w-3/5 text-pink'
            : 'text-slate-800 my-4 text-balance text-center text-xl w-3/5'
        }
        initial={{ opacity: 0, left: 100 }}
        animate={{ opacity: 1, left: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        With over 3 years of frontend development experience, my passion for
        React and Next.js drives me to build scalable and efficient
        applications. My portfolio reflects a track record of delivering
        impactful solutions that seamlessly blend user-centric design with
        cutting-edge technology.
      </motion.div>
      <div className="mt-5 flex gap-5">
        <button
          className={
            themeState.isDark
              ? 'bg-slate-100 text-slate-800 p-3 rounded hover:bg-slate-200 hover:text-slate-900'
              : 'bg-slate-800 text-white p-3 rounded hover:bg-slate-700'
          }
        >
          Download CV
        </button>
        <button
          className={
            themeState.isDark
              ? 'bg-slate-800 text-white p-3 rounded hover:bg-slate-700'
              : 'bg-slate-100 border-transparent text-slate-800 p-3 rounded hover:bg-slate-200 hover:text-slate-900 hover:border-slate-800'
          }
        >
          Hire Me
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
