import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Get in <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for inquiries, partnerships, or to learn how you can support our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Address</h4>
                    <p className="text-gray-700">123 Medical Plaza, Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Number</h4>
                    <p className="text-gray-700">+251 123 456 789</p>
                    <p className="text-gray-700">+251 987 654 321 (Emergency)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Address</h4>
                    <p className="text-gray-700">info@bereketepilepsy.org</p>
                    <p className="text-gray-700">support@bereketepilepsy.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Working Hours</h4>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Find Us on Map</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual map embed */}
                <div className="w-full h-64 flex items-center justify-center text-gray-500">
                  <p>Map will be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;