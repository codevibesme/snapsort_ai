import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import { StickyScrollRevealDemo } from '@/components/HomePage/StickyScrollRevealDemo/StickyScrollRevealDemo';
import React from 'react';


const Home: React.FC = () => {

 
  return (
    <div>
      <HeroSection />
      <StickyScrollRevealDemo />
  
    </div>
  );
};

export default Home;