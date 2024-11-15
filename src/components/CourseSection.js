'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Brain, Atom } from 'lucide-react';

const CourseSection = () => {
  const courses = [
    {
      id: 'BahasaInggris', // Path untuk Bahasa Inggris
      title: 'Bahasa Inggris',
      description: 'Dive into the basics of English with interactive modules and exercises.',
      icon: Atom,
      stats: {
        kode_matakuliah: 'FI1201',
        modul: '8',
        semester: '3'
      }
    },
    {
      id: 'BahasaIndonesia',
      title: 'Bahasa Indonesia',
      description: 'Explore the fundamentals of the Indonesian language through interactive modules.',
      icon: Beaker,
      stats: {
        kode_matakuliah: 'KI1002',
        modul: '10',
        semester: '2'
      }
    },
    {
      id: 'Berpikir Komputasional',
      title: 'Berpikir Komputasional',
      description: 'Learn programming with hands-on coding challenges and real-time feedback.',
      icon: Brain,
      stats: {
        kode_matakuliah: 'IF1102',
        modul: '12',
        semester: '4'
      }
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience hands-on learning through our state-of-the-art virtual laboratories
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <course.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-8">{course.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(course.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-semibold text-gray-900">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Link
                    href={`/courses/${course.id}`} // Path dinamis untuk setiap course
                    className="inline-flex items-center justify-center w-full px-6 py-4 rounded-2xl
                             bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold
                             transform transition-all duration-300
                             hover:scale-[1.02] hover:shadow-lg"
                  >
                    Enter Lab
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
