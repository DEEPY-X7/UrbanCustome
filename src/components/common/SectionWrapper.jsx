import React from 'react';
import clsx from 'clsx';
import { useTheme } from '../../context/ThemeContext';

/**
 * SectionWrapper standardizes vertical spacing, theme-based backgrounds,
 * and ensures scroll navigation behaves consistently across all sections.
 */
const SectionWrapper = ({
  children,
  bg = null,
  padding = 'py-16 md:py-24 px-4',
  id = '',
  className = '',
}) => {
  const { theme } = useTheme();

  // Intelligent background fallback based on theme
  const themeBg =
    bg !== null
      ? bg
      : theme === 'dark'
      ? 'bg-[#0b0b0b]'
      : 'bg-[#f8f9fa]';

  return (
    <section
      id={id}
      className={clsx(
        themeBg,
        padding,
        'scroll-mt-24 transition-colors duration-500 ease-in-out',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
