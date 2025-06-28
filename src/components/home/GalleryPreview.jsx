import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../common/SectionWrapper';

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
  return (
    <SectionWrapper bg="bg-white dark:bg-black" id="gallery">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-black dark:text-white uppercase tracking-wide"
        >
          Explore Our Masterpieces
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleGallery.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition dark:bg-gray-900 dark:border dark:border-gray-700"
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
                <h3 className="text-lg font-semibold text-black dark:text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to="/gallery"
          className="inline-block mt-10 text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-medium transition"
        >
          View Full Gallery
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default GalleryPreview;
