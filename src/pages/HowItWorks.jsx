import React from 'react';
import { FaHeart, FaShareAlt, FaHandsHelping } from 'react-icons/fa';
import HeroImage from '../assets/Charity Gift Catalog _ Gifts That Give Back _ World Vision.jpg'; // Hero image
import HopeCampaignImage from '../assets/download (3).jpg'; // Step 1 image
import ShareCampaignImage from '../assets/download (3).jpg'; // Step 2 image

const HowItWorks = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section (Half Screen) */}
      <section
        className="h-[50vh] bg-blue-900 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How <span className="text-yellow-400">It Works</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Our simple process to bring hope and healing to children with epilepsy in Ethiopia
          </p>
        </div>
      </section>

      {/* Step 1 Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="md:w-5/12">
              <img
                src={HopeCampaignImage}
                alt="Children receiving medical care"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="md:w-7/12">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 w-16 h-16 rounded-full text-2xl font-bold mb-6">
                  1
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Hope for Every Child</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The "Hope for Every Child" campaign aims to raise funds to support children with epilepsy in rural Ethiopia. By providing medical supplies, educational resources, and community awareness programs, we can help improve the lives of these children and reduce the stigma associated with epilepsy.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <FaHeart className="text-yellow-500 text-4xl mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Impact</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>500+ children provided with medication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>20 rural communities educated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>50 schools equipped with emergency kits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 Section (Reversed) */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Image */}
            <div className="md:w-5/12">
              <img
                src={ShareCampaignImage}
                alt="Community sharing hope"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="md:w-7/12">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 w-16 h-16 rounded-full text-2xl font-bold mb-6">
                  2
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Share with Family and Friends</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Join us in making a difference! Every donation, no matter the size, can bring hope and support to children suffering from epilepsy. Together, we can create a brighter future for these children and their families.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <FaShareAlt className="text-yellow-500 text-4xl mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">How You Can Help</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Share our mission on social media</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Organize a fundraising event</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Become a monthly donor</span>
                    </li>
                  </ul>
                  <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300">
                    Share Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-blue-900 rounded-xl p-8 shadow-lg">
            <FaHandsHelping className="text-yellow-400 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Make a Difference?</h3>
            <p className="text-white mb-6">
              Your support can change lives. Join our movement today and help us bring hope to children with epilepsy.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;