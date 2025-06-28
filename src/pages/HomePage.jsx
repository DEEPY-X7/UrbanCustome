import React from 'react'
import Navbar from '../components/common/Navbar'
import ThemeWrapper from '../context/ThemeContext';
import HeroSection from '../components/home/HeroSection';
import WhyUrbanCustom from '../components/home/WhyUrbanCustom';
import TopSellingJeeps from '../components/home/TopSellingJeeps';
import ThreeDViewer from '../components/home/ThreeDViewer';

function HomePage() {
  return (
    <div>
      <ThemeWrapper>
        <Navbar />
        <HeroSection />
        <WhyUrbanCustom />
        <TopSellingJeeps/>
        <ThreeDViewer/>
      </ThemeWrapper>

    </div>
  )
}

export default HomePage