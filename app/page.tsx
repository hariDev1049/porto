'use client';
import { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Hero />
    </>
  );
}
