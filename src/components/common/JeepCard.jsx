import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const JeepCard = ({ title, description, imageUrl, ctaText = "View", onClick }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300
        ${theme === 'dark' ? 'bg-neutral-800 text-white' : 'bg-white text-black'}
      `}
    >
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transform hover:scale-105 hover:brightness-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-48">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
        <p className={`text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'}`}>
          {description}
        </p>
        <button
          onClick={onClick}
          className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded transition-colors duration-300"
        >
          {ctaText}
        </button>
      </div>
    </motion.div>
  );
};

export default JeepCard;
