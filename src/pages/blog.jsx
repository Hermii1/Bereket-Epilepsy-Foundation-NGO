import React from 'react';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

// Import images
import BlogEpilepsyMyths from '../Assets/download.jpg';
import BlogOutreach from '../Assets/download.jpg';
import BlogCaregiving from '../Assets/download.jpg';

// Sample blog data - replace with your actual content or API fetch
const blogPosts = [
  {
    id: 1,
    title: "Understanding Epilepsy: Myths vs. Facts",
    excerpt: "Debunking common misconceptions about epilepsy and sharing scientific truths to combat stigma.",
    date: "May 15, 2023",
    author: "Dr. Alemayehu Teklu",
    category: "Education",
    image: BlogEpilepsyMyths, // Use imported image
  },
  {
    id: 2,
    title: "Our Community Outreach Program Results",
    excerpt: "How our 2023 rural initiative provided care to 200+ underserved children with epilepsy.",
    date: "April 2, 2023",
    author: "Bereket Team",
    category: "News",
    image: BlogOutreach, // Use imported image
  },
  {
    id: 3,
    title: "Caring for a Child with Epilepsy",
    excerpt: "Practical advice for parents and caregivers on daily management and emergency preparedness.",
    date: "March 10, 2023",
    author: "Nurse Selamawit Kebede",
    category: "Caregiving",
    image: BlogCaregiving, // Use imported image
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our <span className="text-yellow-500">Blog</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Insights, stories, and updates about epilepsy awareness, treatment, and our foundation's work.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1 text-yellow-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-1 text-yellow-500" />
                    {post.author}
                  </span>
                </div>

                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-900 bg-blue-100 rounded-full mb-2">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold text-blue-900 mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>

                <a
                  href={`/blog/${post.id}`}
                  className="flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition-colors"
                >
                  Read More <FaArrowRight className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination/CTA */}
        <div className="mt-12 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;