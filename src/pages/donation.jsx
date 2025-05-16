import React from "react";
import { FaHandHoldingHeart, FaUsers, FaChartLine } from "react-icons/fa";
// Import your images
import donationHeroImage from "../Assets/download (3).jpg"; // Update path to your image
import impactImage1 from "../Assets/download.jpg"; // Sample impact images
import impactImage2 from "../Assets/download.jpg";
import impactImage3 from "../Assets/download.jpg";

const Donation = () => {
  // Impact data with imported images
  const impactStats = [
    { 
      icon: <FaHandHoldingHeart className="text-3xl" />, 
      image: impactImage1,
      value: "500+", 
      label: "Lives Impacted" 
    },
    { 
      icon: <FaUsers className="text-3xl" />, 
      image: impactImage2,
      value: "50+", 
      label: "Active Volunteers" 
    },
    { 
      icon: <FaChartLine className="text-3xl" />, 
      image: impactImage3,
      value: "80%", 
      label: "Funds to Programs" 
    }
  ];

  const donationOptions = [
    { amount: 50, description: "Provides medication for 1 month" },
    { amount: 100, description: "Supports a family education session" },
    { amount: 250, description: "Funds a community awareness program" },
    { amount: 500, description: "Sponsors a child's annual treatment" },
    { amount: 1000, description: "Equips a mobile clinic for rural areas" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src={donationHeroImage} 
          alt="Making a difference through donations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Giving is Good</h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
              Your donation helps fight epilepsy and restore hope to families in need
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="mb-2">{stat.icon}</div>
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                      <p className="text-lg">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Make a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-orange-500 mb-3">${option.amount}</h3>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition">
                  Donate ${option.amount}
                </button>
              </div>
            ))}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">Other Amount</h3>
              <input 
                type="number" 
                placeholder="Enter amount" 
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Donation Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">First Name*</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Last Name*</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email*</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Donation Amount ($)*</label>
              <input type="number" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Payment Method*</label>
              <select className="w-full p-2 border border-gray-300 rounded" required>
                <option value="">Select payment method</option>
                <option value="credit-card">Credit Card</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="mobile-payment">Mobile Payment</option>
              </select>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg text-lg font-bold transition">
                Complete Donation
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Donation;