import React from "react";
import { FaHeart, FaHandsHelping, FaChild, FaBookMedical } from "react-icons/fa";

const OurHistory = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Our <span className="text-yellow-500">History</span>
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Discover the journey of Bereket Epilepsy Foundation, from its humble beginnings to its mission of transforming lives through care, education, and empowerment.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex flex-col items-center h-full">
              <FaChild className="text-3xl text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">The Encounter</h3>
              <p className="text-gray-700 flex-grow">
                During a 2020 measles intervention in West Omo, our MSF team found 12-year-old Bereket—thrown out of her home and stigmatized because her community believed epilepsy was contagious.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex flex-col items-center h-full">
              <FaHandsHelping className="text-3xl text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">The Intervention</h3>
              <p className="text-gray-700 flex-grow">
                Our team provided medication, financial support, and psychological care for five months. Bereket started school and thrived with her nanny, dreaming of becoming a heart surgeon.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex flex-col items-center h-full">
              <FaHeart className="text-3xl text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">The Struggle</h3>
              <p className="text-gray-700 flex-grow">
                When Bereket returned home, we continued support despite her mother's financial struggles. Tragically, she passed from malaria—revealing hundreds of similar abandoned children in her community.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex flex-col items-center h-full">
              <FaBookMedical className="text-3xl text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Bereket's Legacy</h3>
              <p className="text-gray-700 flex-grow">
                Today, we honor her smile and dreams by providing medical care, education materials, and fighting stigma—ensuring no child suffers as Bereket did.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
            Support Our Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;