import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const jeeps = [
  {
    title: 'Urban Thar Xtreme',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/thar1.jpg',
    description: 'Heavy-duty tires, custom matte black bodywork, and beast grille.',
  },
  {
    title: 'Desert Storm Edition',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/thar2.jpg',
    description: 'Sandblasted finish with open roll cage and high-suspension kit.',
  },
  {
    title: 'Mountain Crawler 4x4',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/thar3.jpg',
    description: 'Trail-ready build with off-road LED kit and winch assembly.',
  },
];

const TopSellingJeeps = () => {
  return (
    <SectionTitle className="bg-white dark:bg-[#121212] py-20 px-6" id="top-sellers">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
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
              className="bg-gray-100 dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {jeep.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{jeep.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTitle>
  );
};

export default TopSellingJeeps;
