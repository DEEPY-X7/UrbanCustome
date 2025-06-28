import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Eye, Truck, Smile } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';

const steps = [
  {
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: 'Visualize Your Dream',
    desc: 'Explore our gallery and 3D viewers to get inspired by real custom builds.',
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: 'Customize It Your Way',
    desc: 'Choose from premium designs, finishes, and accessories tailored for you.',
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: 'We Build & Deliver',
    desc: 'Our team crafts your vision with precision and ships it across India.',
  },
  {
    icon: <Smile className="w-8 h-8 text-primary" />,
    title: 'Drive with Pride',
    desc: 'Get behind the wheel of your Urban Custom masterpiece and turn heads.',
  },
];

const HowItWorks = () => {
  const { theme } = useTheme();

  return (
    <SectionTitle className={`py-20 px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`} id="how-it-works">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className={`text-3xl md:text-5xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How Urban Custom Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                theme === 'dark' ? 'bg-neutral-800 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-center justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTitle>
  );
};

export default HowItWorks;
