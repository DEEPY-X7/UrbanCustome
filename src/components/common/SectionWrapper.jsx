import React from 'react';
import clsx from 'clsx';
import { useTheme } from '../../context/ThemeContext';

const SectionWrapper = ({ children, bg = null, padding = 'py-20 px-4' }) => {
  const { theme } = useTheme();

  const themeBg =
    bg !== null
      ? bg
      : theme === 'dark'
      ? 'bg-gray-950'
      : 'bg-gray-100';

  return (
    <section className={clsx(themeBg, padding, 'transition-colors duration-500')}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
