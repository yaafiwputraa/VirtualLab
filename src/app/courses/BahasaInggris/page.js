'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen, Play, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const EnglishCoursePage = () => {
  const [activeModule, setActiveModule] = useState(null);
  
  // Mock completed modules data (in real app, this would come from backend/database)
  const [completedModules, setCompletedModules] = useState([1, 3]); // Module 1 and 3 completed for demo

  const modules = [
    {
      id: 1,
      title: "Introduction to English Basics",
      description: "Start your journey in English language learning with fundamental concepts.",
      icon: "📚",
      topics: [
        "Alphabet and Pronunciation",
        "Basic Sentence Structure",
        "Numbers and Counting",
        "Days and Months"
      ]
    },
    {
      id: 2,
      title: "Grammar Essentials",
      description: "Master the core grammar rules that form the foundation of English language.",
      icon: "✍️",
      topics: [
        "Parts of Speech",
        "Present Simple Tense",
        "Past Simple Tense",
        "Basic Punctuation"
      ]
    },
    {
      id: 3,
      title: "Basic Vocabulary and Common Phrases",
      description: "Learn essential words and phrases for everyday communication.",
      icon: "💭",
      topics: [
        "Greetings and Introductions",
        "Colors and Shapes",
        "Food and Drinks",
        "Daily Activities"
      ]
    },
    {
      id: 4,
      title: "Listening and Speaking Practice",
      description: "Develop your listening skills and speaking confidence through interactive exercises.",
      icon: "🎧",
      topics: [
        "Basic Conversations",
        "Pronunciation Drills",
        "Listening Comprehension",
        "Speaking Exercises"
      ]
    },
    {
      id: 5,
      title: "Reading Comprehension",
      description: "Build your reading skills with engaging texts and stories.",
      icon: "📖",
      topics: [
        "Short Stories",
        "Simple Articles",
        "Reading Strategies",
        "Vocabulary in Context"
      ]
    }
  ];

  const isModuleCompleted = (moduleId) => completedModules.includes(moduleId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Master English Today
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Unlock your potential with our comprehensive English language course
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <Play size={20} />
              Start Learning
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <BookOpen size={20} />
              View Syllabus
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modules Section */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="space-y-6">
          {modules.map((module, index) => {
            const completed = isModuleCompleted(module.id);

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                    ${activeModule === module.id ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-br ${completed ? 'from-green-100 to-emerald-100' : 'from-blue-100 to-indigo-100'} rounded-xl flex items-center justify-center text-3xl`}>
                          {module.icon}
                        </div>
                        {completed && (
                          <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                            <CheckCircle size={16} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                          {completed && (
                            <span className="text-sm text-green-600 font-medium">
                              Completed
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-2">{module.description}</p>
                      </div>
                      <div className="text-blue-500">
                        {activeModule === module.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      </div>
                    </div>

                    {/* Topics */}
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: activeModule === module.id ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pl-22 grid grid-cols-2 gap-4">
                        {module.topics.map((topic, index) => (
                          <div key={index} className="flex items-center gap-3 text-gray-600">
                            <div className={`w-2 h-2 rounded-full ${completed ? 'bg-green-500' : 'bg-blue-500'}`} />
                            {topic}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex justify-end">
                        {module.id === 5 ? (
                          <Link 
                            href="/courses/BahasaInggris/module1"
                            className={`px-6 py-3 bg-gradient-to-r 
                              ${completed ? 'from-green-600 to-emerald-600' : 'from-blue-600 to-purple-600'}
                              text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}
                          >
                            {completed ? 'Review Module' : 'Begin Module'}
                          </Link>
                        ) : (
                          <button 
                            className={`px-6 py-3 bg-gradient-to-r 
                              ${completed ? 'from-green-600 to-emerald-600' : 'from-blue-600 to-purple-600'}
                              text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}
                          >
                            {completed ? 'Review Module' : 'Begin Module'}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnglishCoursePage;