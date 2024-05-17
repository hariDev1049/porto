'use client';
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
const Footer = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className={
        theme.isDark
          ? 'text-pink w-full h-12 flex justify-center items-center'
          : ' text-slate-800 w-full h-12 flex justify-center items-center'
      }
    >
      <p className="text-center my-2 text-sm sm:text-lg">
        Copyrights reserved by{' '}
        <span className="font-bold ml-1">Hariprasad M V.</span>
      </p>
    </div>
  );
};

export default Footer;
