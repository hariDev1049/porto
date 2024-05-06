'use client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext<Theme | null>(null);
interface Theme {
  isDark: boolean;
  setIsDark: Function;
  // Other properties if exist
}

export const ThemeProvider = (props: any) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
