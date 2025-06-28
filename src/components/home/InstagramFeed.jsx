import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { useTheme } from "../../context/ThemeContext";

const posts = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/your-cloud-name/image/upload/v1710000000/insta1.jpg",
    postUrl: "https://www.instagram.com/p/POST1/",
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/your-cloud-name/image/upload/v1710000000/insta2.jpg",
    postUrl: "https://www.instagram.com/p/POST2/",
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/your-cloud-name/image/upload/v1710000000/insta3.jpg",
    postUrl: "https://www.instagram.com/p/POST3/",
  },
  {
    id: 4,
    imageUrl: "https://res.cloudinary.com/your-cloud-name/image/upload/v1710000000/insta4.jpg",
    postUrl: "https://www.instagram.com/p/POST4/",
  },
];

const InstagramFeed = () => {
  const { theme } = useTheme();

  return (
    <SectionTitle
      className={`py-20 px-6 md:px-20 transition-colors duration-500 ${
        theme === "dark" ? "bg-neutral-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
      id="instagram"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          Follow Us on Instagram
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg"
            >
              <motion.img
                src={post.imageUrl}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
            </a>
          ))}
        </div>
      </motion.div>
    </SectionTitle>
  );
};

export default InstagramFeed;
