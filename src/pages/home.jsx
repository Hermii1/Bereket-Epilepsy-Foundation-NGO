import React from 'react';
import HeroSection from '../Components/HeroSection';
import HomeHero from '../Components/HomeHero';
const Home = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <HeroSection />
            <HomeHero />
            {/* Add any additional content or components here */}   

            
        </div>
    );
  };
  
  export default Home;