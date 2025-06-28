// src/context/ThemeWrapper.jsx

import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

const ThemeApplier = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('preferred-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

const ThemeWrapper = ({ children }) => {
  return (
    <ThemeProvider>
      <ThemeApplier>{children}</ThemeApplier>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
