// client/src/pages/Home/HomePage.jsx


import React from 'react';
import { useTheme } from '../context/ThemeContext';

import HeroSection from '../components/home/HeroSection';
import WhyUrbanCustom from '../components/home/WhyUrbanCustom';
import TopSellingJeeps from '../components/home/TopSellingJeeps';
import ThreeDViewer from '../components/home/ThreeDViewer';
import Testimonials from '../components/home/Testimonials';
import HowItWorks from '../components/home/HowItWorks';
import GalleryPreview from '../components/home/GalleryPreview';
import ContactForm from '../components/home/ContactForm';
import AboutWorkshop from '../components/home/AboutWorkshop';
import InstagramFeed from '../components/home/InstagramFeed';

import ScrollToTopButton from '../components/common/ScrollToTopButton';


const HomePage = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`transition-colors duration-500 ease-in-out ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      {/* 🚀 Hero Section - Fullscreen with video */}
      <HeroSection />

      <div className="relative z-10 space-y-20 md:space-y-32">
        {/* 💡 Why Choose Urban Custom */}
        <WhyUrbanCustom />

        {/* 🛻 Top Selling Jeeps with animation */}
        <TopSellingJeeps />

        {/* 🧠 Interactive 3D Jeep Viewer */}
        <ThreeDViewer />

        {/* 🌟 Testimonials - Real Reviews */}
        <Testimonials />

        {/* 🛠️ How It Works - 3 Steps Process */}
        <HowItWorks />

        {/* 🖼️ Gallery Preview - 3 sample cards */}
        <GalleryPreview />

        {/* 📞 Contact Form */}
        <ContactForm />

        {/* 🏭 Workshop Highlight */}
        <AboutWorkshop />

        {/* 📸 Instagram Reel Feed */}
        <InstagramFeed />
      </div>

      {/* 🔼 Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
};

export default HomePage;
