'use client';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
const AllComp = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const themeContext = useContext(ThemeContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={
        themeContext.isDark
          ? 'toggleDark min-h-screen flex flex-col'
          : 'toggleLight min-h-screen flex flex-col'
      }
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AllComp;
