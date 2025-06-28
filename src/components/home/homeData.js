// client/src/data/homeData.js

import {
  FaCogs,
  FaTruckPickup,
  FaRegThumbsUp,
  FaTools,
  FaBolt,
  FaGlobeAsia,
} from "react-icons/fa";

// 🎥 Hero Section Content
export const heroContent = {
  title: "Reinvent Your Ride",
  subtitle: "India’s #1 Jeep & Thar Customization Studio",
  tagline: "Built for the Bold. Designed by Urban Custom.",
  videoUrl:
    "https://res.cloudinary.com/your-cloud-name/video/upload/v1710000000/hero-bg-video.mp4",
};

// ✅ Why Urban Custom Points
export const whyUrbanPoints = [
  {
    icon: FaCogs,
    title: "Precision Engineering",
    description:
      "Each modification is crafted with expert-grade tools and methods.",
  },
  {
    icon: FaTools,
    title: "Tailored to You",
    description:
      "From color to configuration, it’s 100% personalized to your vision.",
  },
  {
    icon: FaTruckPickup,
    title: "All India Delivery",
    description:
      "Your customized beast, delivered anywhere across the country.",
  },
  {
    icon: FaRegThumbsUp,
    title: "Customer Satisfaction",
    description:
      "Rated 5★ by Jeep lovers and auto enthusiasts nationwide.",
  },
];

// 🛠️ How It Works Steps
export const howItWorksSteps = [
  {
    step: 1,
    title: "Connect with Us",
    description:
      "Call or message on WhatsApp to discuss your dream design with our experts.",
  },
  {
    step: 2,
    title: "Customization & Build",
    description:
      "We bring your vision to life using top-quality parts and handcrafted detailing.",
  },
  {
    step: 3,
    title: "Nationwide Delivery",
    description:
      "Once ready, your custom ride is safely delivered to your doorstep.",
  },
];

// ⭐ Testimonials
export const testimonials = [
  {
    name: "Amit Sharma",
    quote:
      "My Thar looks completely next level! People literally stop me to ask where I got it done.",
    location: "Mumbai",
    rating: 5,
  },
  {
    name: "Preeti Verma",
    quote:
      "Urban Custom made my Jeep a beast. Flawless finishing and fast delivery.",
    location: "Delhi",
    rating: 5,
  },
];

// 🚙 Top-Selling Jeeps
export const topSellingJeeps = [
  {
    id: "1",
    title: "Blackout Thar X",
    imageUrl:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1710000000/top-jeep1.jpg",
  },
  {
    id: "2",
    title: "Desert Camo Edition",
    imageUrl:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1710000000/top-jeep2.jpg",
  },
  {
    id: "3",
    title: "Red Dragon",
    imageUrl:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1710000000/top-jeep3.jpg",
  },
];

// 📩 Contact Section Config
export const contactConfig = {
  heading: "Let's Build Your Dream Ride",
  subtext: "Drop us a message — our team will reach out shortly.",
  formFields: ["name", "email", "phone", "message"],
};
