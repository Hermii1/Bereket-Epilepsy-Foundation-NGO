import React from "react";
import volunteerImage from "../Assets/download.jpg"; // Update with your actual image path

const VolunteerCard = () => {
  return (
    <section className="w-full bg-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <img 
              className="w-full h-full object-cover min-h-[300px]"
              src={volunteerImage}
              alt="Volunteers working together"
            />
          </div>
          
          {/* Right side - Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Become a Volunteer</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  type="tel"
                  id="phone"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="availability">Availability</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  id="availability"
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">Why do you want to volunteer?</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  id="message"
                  rows="3"
                  placeholder="Tell us about your motivation"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCard;