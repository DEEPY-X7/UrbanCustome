import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../common/SectionWrapper';
import { useTheme } from '../../context/ThemeContext';

const sampleGallery = [
  {
    title: 'Beast Edition Thar',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/thar1.jpg',
  },
  {
    title: 'All Black Edition',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/thar2.jpg',
  },
  {
    title: 'Military Green Mod',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/thar3.jpg',
  },
];

const GalleryPreview = () => {
  const { theme } = useTheme(); // 🌗 Access current theme

  const sectionBg = theme === 'dark' ? 'bg-black' : 'bg-white';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-black';
  const cardBg = theme === 'dark' ? 'bg-gray-900 border border-gray-700' : 'bg-white shadow-lg';
  const cardTitle = theme === 'dark' ? 'text-white' : 'text-black';
  const buttonBg = theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800';

  return (
    <SectionWrapper bg={sectionBg} id="gallery">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-5xl font-bold mb-10 uppercase tracking-wide ${headingColor}`}
        >
          Explore Our Masterpieces
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleGallery.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden transition hover:shadow-2xl ${cardBg}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className={`text-lg font-semibold ${cardTitle}`}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to="/gallery"
          className={`inline-block mt-10 px-6 py-2 rounded-full text-sm font-medium transition ${buttonBg}`}
        >
          View Full Gallery
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default GalleryPreview;
