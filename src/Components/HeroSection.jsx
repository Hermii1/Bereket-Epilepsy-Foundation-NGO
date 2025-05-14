import React from "react";
import heroImage from "../Assets/download (4).jpg"; // Replace with the actual path to your image

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-300 text-gray-900 py-16 md:py-24 px-4 min-h-screen flex items-center w-full">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white opacity-30"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-10 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Fighting Epilepsy, <br />
            <span className="text-yellow-500">Restoring Hope</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Bereket Epilepsy Foundation is dedicated to improving lives affected by epilepsy through awareness, support, and research initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300">
              Donate Now
            </button>
            <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Learn About Epilepsy
            </button>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="lg:w-2/3 flex justify-center mt-10 lg:mt-0 px-6">
          <img
            src={heroImage}
            alt="Bereket Epilepsy Foundation Hero"
            className="rounded-xl shadow-2xl w-full object-cover h-[500px] md:h-[600px] lg:h-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;