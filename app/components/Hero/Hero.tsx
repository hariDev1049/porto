import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
import { useRouter } from 'next/navigation';
const Hero = () => {
  const themeState = useContext(ThemeContext);
  const router = useRouter();

  if (!themeState) {
    return <div>Loading...</div>;
  }

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
            borderRadius: '100px',
          }}
        />
      </div>
      <div className="md:flex text-center sm:mt-5 text-balance mt-2">
        <h1
          className={
            themeState.isDark
              ? 'text-(f0d6d6) sm:text-6xl text-balance'
              : 'text-slate-800 sm:text-6xl text-balance'
          }
        >
          Hello, I'm {''}
        </h1>
        <h1
          className={
            themeState.isDark
              ? 'text-(f0d6d6) font-bold ml-2 sm:text-6xl'
              : 'text-slate-800 font-bold ml-2 sm:text-6xl'
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
            ? 'my-4 text-balance text-(f0d6d6) text-center text-xl w-4/5 sm:w-3/5 text-pink'
            : 'text-slate-800 my-4 text-balance text-center text-xl w-4/5 sm:3/5'
        }
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <p className="text-xs sm:text-lg w-full">
          With over 4+ years of frontend development experience, my passion for
          <span
            className={`mx-2 font-extrabold ${
              themeState.isDark ? 'text-white' : 'text-slate-800'
            }`}
          >
            React
          </span>
          and{' '}
          <span
            className={`mx-2 font-extrabold ${
              themeState.isDark ? 'text-white' : 'text-slate-800'
            }`}
          >
            Next.js
          </span>{' '}
          drives me to build scalable and efficient applications. My portfolio
          reflects a track record of delivering impactful solutions that
          seamlessly blend user-centric design with cutting-edge technology.
        </p>
      </motion.div>
      <div className=" sm:mt-5 flex gap-5">
        <a href="/Hariprasad_M_V_CV.pdf" download="Hariprasad_M_V_CV.pdf">
          <button
            className={
              themeState.isDark
                ? 'bg-slate-100 text-slate-800 p-2 sm:p-3 rounded hover:bg-slate-200 hover:text-slate-900 sm:text-lg text-sm'
                : 'bg-slate-800 text-white p-2 sm:p-3 rounded hover:bg-slate-700 sm:text-lg text-sm'
            }
          >
            Download CV
          </button>
        </a>
        <button
          className={
            themeState.isDark
              ? 'bg-slate-800 text-white sm:p-3 p-2 rounded hover:bg-slate-700 sm:text-lg text-sm'
              : 'bg-slate-100 border-transparent text-slate-800 sm:p-3 p-2 rounded hover:bg-slate-200 hover:text-slate-900 hover:border-slate-800 sm:text-lg text-sm'
          }
          onClick={() => router.push('/contact')}
        >
          DM Me
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
