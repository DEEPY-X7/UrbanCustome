import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const HeroSection = () => {
  const themeContext = useTheme();
  const theme = themeContext?.theme || 'light';

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden border-b border-neutral-200 dark:border-neutral-700"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dadp7h2k1/video/upload/v1751072093/YouCut_20250627_060914786_sdor7u.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🌗 Theme Overlay */}
      <div
        className={`absolute inset-0 z-10 transition-colors duration-500 ${
          theme === 'dark' ? 'bg-black/60' : 'bg-white/20'
        }`}
      />

      {/* 🌟 Foreground Text Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-xl ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Unleash the Beast
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={`text-base sm:text-lg md:text-xl mb-10 max-w-2xl leading-relaxed ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Custom Open Jeeps & Thar Modifications delivered across India.
          Built for thrill. Engineered to dominate.
        </motion.p>

        <motion.a
          href="#gallery"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300"
        >
          Explore Gallery <ArrowRight className="ml-2" size={20} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
