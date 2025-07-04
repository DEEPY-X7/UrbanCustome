// client/src/pages/Home/Testimonials.jsx

import React from "react";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: 'Rohit Sharma',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/user1.jpg',
    message: 'Urban Custom turned my Thar into a beast! The detailing and finish were top-notch. Highly recommended!',
    rating: 5
  },
  {
    name: 'Simran Kaur',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/user2.jpg',
    message: 'Loved the 3D preview and the custom recommendations. Delivery was on time and service was great.',
    rating: 4
  },
  {
    name: 'Rajveer Singh',
    image: 'https://res.cloudinary.com/demo/image/upload/v1710000000/user3.jpg',
    message: 'Their design team gave life to my ideas. It’s like driving a dream every day!',
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <SectionTitle className="bg-gray-100 dark:bg-neutral-900 py-20 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              className="bg-white dark:bg-neutral-800 shadow-md dark:shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={`Testimonial from ${item.name}`}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover ring-2 ring-primary"
              />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 italic">"{item.message}"</p>
              <div className="flex justify-center gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-400"
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionTitle>
  );
};

export default Testimonials;
