import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from "../common/SectionTitle";
import { useTheme } from '../../context/ThemeContext';

const features = [
  {
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1751075912/high-impact-red-neon-wrench-cog-icon-with-dark-background_462839-2457_opfh1j.jpg",
    title: "Precision Modifications",
    description: "Expert customization tailored for your dream off-road experience.",
  },
  {
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1751081594/lock-icon-cyber-data-protection-600nw-2471541471_rm4v1s.jpg",
    title: "Rugged Reliability",
    description: "Only the strongest builds with top-grade parts and quality assurance.",
  },
  {
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1751082927/truck-jeep-icon-neon-fast-delivery_ghghd9.jpg",
    title: "Pan India Delivery",
    description: "Get your modified Jeep/Thar delivered at your doorstep anywhere in India.",
  },
];

const WhyUrbanCustom = () => {
  const { theme } = useTheme(); // 🧠 Hook to get current theme

  const sectionBg = theme === 'dark' ? 'bg-[#121212]' : 'bg-gray-100';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const cardBg = theme === 'dark' ? 'bg-neutral-900' : 'bg-white';
  const cardTitle = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const cardDesc = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <SectionTitle className={`${sectionBg} py-20 px-6`} id="why-us">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔥 Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-5xl font-bold mb-6 ${titleColor}`}
        >
          Why Choose UrbanCustom?
        </motion.h2>

        {/* 🧠 Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`max-w-2xl mx-auto text-lg mb-14 ${subtitleColor}`}
        >
          We don’t just modify Jeeps — we craft iconic machines with soul, power, and performance.
        </motion.p>

        {/* 📦 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`${cardBg} rounded-xl shadow-md hover:shadow-xl transition p-6 text-left`}
            >
              {/* 🌟 Feature Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-contain mb-4 rounded"
              />

              {/* 🏷️ Feature Title */}
              <h3 className={`text-xl font-semibold mb-2 ${cardTitle}`}>
                {feature.title}
              </h3>

              {/* 🧾 Feature Description */}
              <p className={`${cardDesc}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTitle>
  );
};

export default WhyUrbanCustom;
