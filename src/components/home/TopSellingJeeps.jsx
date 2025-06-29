import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext'; // ✅ Theme Context added

const jeeps = [
  {
    title: 'Urban Thar Xtreme',
    image: 'https://res.cloudinary.com/dadp7h2k1/image/upload/v1751081667/IMG_20250628_085847_uuzjfb.jpg',
    description: 'Heavy-duty tires, custom matte black bodywork, and beast grille.',
  },
  {
    title: 'Desert Storm Edition',
    image: 'https://res.cloudinary.com/dadp7h2k1/image/upload/v1751081653/IMG_20250628_085348_rj6zml.jpg',
    description: 'Sandblasted finish with open roll cage and high-suspension kit.',
  },
  {
    title: 'Mountain Crawler 4x4',
    image: 'https://res.cloudinary.com/dadp7h2k1/image/upload/v1751081619/IMG_20250628_085821_rpnsjf.jpg',
    description: 'Trail-ready build with off-road LED kit and winch assembly.',
  },
];

const TopSellingJeeps = () => {
  const themeContext = useTheme(); // ✅ Accessing current theme
  const theme = themeContext?.theme || 'light';

  return (
    <section
      id="top-sellers"
      className={`py-20 px-6 transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-5xl font-bold mb-12 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Top Selling Jeeps
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {jeeps.map((jeep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group transition-colors duration-500 ${
                theme === 'dark' ? 'bg-neutral-800' : 'bg-gray-100'
              }`}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={jeep.image}
                  alt={jeep.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {jeep.title}
                </h3>
                <p
                  className={`text-sm transition-colors duration-500 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {jeep.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingJeeps;
