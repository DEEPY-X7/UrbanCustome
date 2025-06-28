import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-md bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? (
        <MdDarkMode className="text-2xl" />
      ) : (
        <MdLightMode className="text-2xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
