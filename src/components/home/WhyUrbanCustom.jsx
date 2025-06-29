import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1751075912/high-impact-red-neon-wrench-cog-icon-with-dark-background_462839-2457_opfh1j.jpg", // 🔧 Wrench Cog (Neon Red)
    title: "Precision Modifications",
    description: "Expert customization tailored for your dream off-road experience.",
  },
  {
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1751075531/Jeep_Grill_SVG_mfpxzr.png", // 🛡️ Jeep Grill Icon
    title: "Rugged Reliability",
    description: "Only the strongest builds with top-grade parts and quality assurance.",
  },
  {
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1751081532/file_000000004be461f7a2661be5e69662ff_icxllq.png", // 📋 Step-by-step Icon
    title: "Pan India Delivery",
    description: "Get your modified Jeep/Thar delivered at your doorstep anywhere in India.",
  },
];

const WhyUrbanCustom = () => {
  return (
    <SectionTitle className="bg-gray-100 dark:bg-[#121212] py-20 px-6" id="why-us">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔥 Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Why Choose UrbanCustom?
        </motion.h2>

        {/* 🧠 Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-14"
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
              className="bg-white dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-xl transition p-6 text-left"
            >
              {/* 🌟 Feature Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-contain mb-4 rounded"
              />

              {/* 🏷️ Feature Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>

              {/* 🧾 Feature Description */}
              <p className="text-gray-600 dark:text-gray-400">
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
