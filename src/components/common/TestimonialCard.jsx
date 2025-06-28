import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const TestimonialCard = ({ name, message, image, rating = 5 }) => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

  return (
    <motion.div
      className={`p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border ${bgColor} ${borderColor}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{name}</h4>
          <div className="text-yellow-400 text-sm mt-1">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </div>
        </div>
      </div>
      <p className={`text-sm leading-relaxed ${textColor} italic`}>
        “{message}”
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
