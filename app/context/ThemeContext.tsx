'use client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = (props: any) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};