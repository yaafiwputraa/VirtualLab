'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DiscussionSection = () => {
  const features = [
    {
      icon: "💭",
      title: "Real-time Discussions",
      description: "Engage in live discussions with peers and instructors about experiments and concepts"
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Get help and insights from a supportive community of learners and experts"
    },
    {
      icon: "🎯",
      title: "Topic-based Forums",
      description: "Find discussions organized by subject, making it easy to focus on your interests"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100/25" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Our Learning Community
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Connect with fellow students and instructors in our vibrant discussion forums. Share insights, ask questions, and deepen your understanding through meaningful interactions.
              </p>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/discussion"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white 
                           bg-gradient-to-r from-blue-600 to-purple-600
                           rounded-full shadow-lg hover:shadow-xl
                           transform transition-all duration-300
                           hover:scale-105"
                >
                  Explore Discussions
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image/Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                
                {/* Main content container */}
                <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  {/* Mock discussion threads */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div 
                        key={item} 
                        className="p-4 bg-gray-50 rounded-xl animate-pulse"
                      >
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussionSection;