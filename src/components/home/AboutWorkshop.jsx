import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import SectionTitle from "../common/SectionTitle";

const AboutWorkshop = () => {
  return (
    <SectionWrapper bg="bg-black text-white">
      {/* Title Section */}
      <SectionTitle
        title="Inside Our Workshop"
        subtitle="Built to conquer roads, crafted with precision. Get a sneak peek inside India's most badass Jeep customization workshop."
        center={true}
      />

      {/* Image + Text Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
        {/* Workshop Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://res.cloudinary.com/your-cloud-name/image/upload/v1710000000/workshop-image.jpg"
            alt="Urban Custom Workshop"
            className="rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-orange-500">
            Why Urban Custom?
          </h3>
          <p className="text-base leading-relaxed mb-4">
            Urban Custom is not just a Jeep modification company — it’s a movement. 
            With cutting-edge tools, a dedicated team of engineers, and a relentless passion for excellence,
            we design and deliver modifications that turn heads across India.
          </p>
          <p className="text-sm text-gray-400">
            From paint to performance — your dream ride is engineered here.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutWorkshop;
