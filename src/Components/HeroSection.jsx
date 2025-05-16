import React from "react";
import heroImage from "../Assets/download (3).jpg"; // Replace with the actual path to your image

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bereket Epilepsy Foundation Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Centered content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Fighting Epilepsy, <span className="text-yellow-400">Restoring Hope</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Bereket Epilepsy Foundation is dedicated to improving lives affected by epilepsy 
          through awareness, support, and research initiatives.
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300">
            Donate Now
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
            Learn About Epilepsy
          </button>
        </div>
      </div>
      
      {/* Scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;