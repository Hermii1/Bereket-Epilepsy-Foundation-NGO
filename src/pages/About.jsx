import React from 'react';
import AboutHero from '../Components/AboutHeroImage';
import OurHistory from '../Components/OurHistory';

const About = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <AboutHero />
            <OurHistory />
        </div>
    );
};

export default About;