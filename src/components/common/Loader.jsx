import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Loader = () => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-neutral-900' : 'bg-white';
  const spinnerColor = theme === 'dark' ? 'border-white' : 'border-black';

  return (
    <div
      className={`fixed inset-0 z-[9999] flex justify-center items-center transition-colors duration-300 ${bgColor}`}
    >
      <motion.div
        className={`w-16 h-16 border-4 border-t-transparent rounded-full animate-spin ${spinnerColor}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
};

export default Loader;
