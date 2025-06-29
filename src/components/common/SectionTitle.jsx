import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const SectionTitle = ({
  title,
  subtitle,
  center = false,
  className = "",
  id,
  children,
}) => {
  const { theme } = useTheme();

  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subtitleColor = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <section id={id} className={`${className}`}>
      <motion.div
        className={`mb-10 px-4 ${center ? "text-center" : "text-left"}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title && (
          <h2
            className={`text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-2 ${titleColor}`}
          >
            {title}
          </h2>
        )}

        {subtitle && (
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto ${subtitleColor}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* ✅ Finally render the children content */}
      <div>{children}</div>
    </section>
  );
};

export default SectionTitle;
