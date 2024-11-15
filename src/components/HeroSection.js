'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const interactiveBubbleRef = useRef(null);

  useEffect(() => {
    const interBubble = interactiveBubbleRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      if (interBubble) {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    return () => {
      window.removeEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* SVG Filter */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="mb-6 text-5xl md:text-7xl font-extrabold text-gray-900">
            Virtual Learning Lab
            <br />
            TPB ITB
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-semibold text-gray-700 max-w-2xl mx-auto">
            Platform pembelajaran interaktif dengan materi lengkap, simulasi virtual, dan hands-on coding untuk mata kuliah TPB ITB
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
              <svg className="w-8 h-8 mb-2 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-gray-900 text-lg font-bold mb-2">Materi Pembelajaran</h3>
              <p className="text-gray-700 text-sm font-semibold">Materi kuliah interaktif dengan visualisasi dan contoh aplikasi dunia nyata</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
              <svg className="w-8 h-8 mb-2 mx-auto text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <h3 className="text-gray-900 text-lg font-bold mb-2">Simulasi Interaktif</h3>
              <p className="text-gray-700 text-sm font-semibold">Eksperimen dengan simulasi virtual untuk pemahaman konsep yang lebih dalam</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
              <svg className="w-8 h-8 mb-2 mx-auto text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-gray-900 text-lg font-bold mb-2">Hands-on Coding</h3>
              <p className="text-gray-700 text-sm font-semibold">Latihan pemrograman langsung di browser dengan feedback real-time</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-x-4">
            <Link
              href="#courses"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-full hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Mulai Belajar
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Jelajahi Materi
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </div>

          {/* Available Courses */}
          <div className="mt-8 text-gray-900">
            <p className="text-lg font-bold">Tersedia untuk mata kuliah:</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {[
                'Fisika Dasar IA & IB', 
                'Kimia Dasar IA & IB', 
                'Pengenalan Komputasi',
                'Matematika IA & IB'
              ].map((subject) => (
                <span key={subject} className="px-4 py-2 bg-gray-200 bg-opacity-80 rounded-full text-sm text-gray-800 font-semibold">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Background */}
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />
          <div className="g5" />
          <div ref={interactiveBubbleRef} className="interactive" />
        </div>
      </div>
      <div className="grid-background"></div>
    </section>
  );
};

export default HeroSection;
