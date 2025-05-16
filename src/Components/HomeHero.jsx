import React from 'react';
import { FaGlobe, FaHandHoldingHeart } from 'react-icons/fa';

const HomeHero = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left: Light Orange Stats Box */}
          <div className="bg-amber-100 rounded-xl p-8 shadow-md lg:w-2/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-6">
                <FaGlobe className="text-amber-600 text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Served Over</h3>
              </div>
              
              <div className="text-5xl font-bold text-amber-700 mb-2">15+</div>
              <p className="text-lg text-gray-700 mb-8">Countries in Ethiopia</p>
            </div>
            
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full lg:w-auto">
              View Our Programs
            </button>
          </div>

          {/* Right: Who Are We */}
          <div className="lg:w-3/5 bg-gray-50 rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Who <span className="text-amber-500">Are We?</span>
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start">
                <FaHandHoldingHeart className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span>The Bereket Epilepsy Foundation is a non-profit organization dedicated to improving the lives of children with epilepsy in underserved communities.</span>
              </p>
              
              <p>Founded in memory of Bereket, a young girl who suffered from epilepsy stigma in rural Ethiopia, we provide:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Medical supplies and treatment access</li>
                <li>Community education programs</li>
                <li>School-based epilepsy awareness</li>
                <li>Family support networks</li>
              </ul>
              
              <p>Our mission is to eliminate epilepsy stigma and ensure every child receives proper care regardless of geography or economic status.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;