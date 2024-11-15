"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { LogOut, ChevronDown, Award } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPoints, setUserPoints] = useState(0);
  const [userName, setUserName] = useState("User");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    // Ambil data user dari localStorage setelah login
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserPoints(user.points || 0);
      setUserName(user.name || "User"); // Pastikan name atau default ke 'User'
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Hapus data user di localStorage
    setIsLoggedIn(false);
    setUserName("User"); // Reset nama pengguna ke 'User' setelah logout
    setUserPoints(0); // Reset points ke 0 setelah logout
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown')) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform duration-300"
            >
              <img
                src="/logo_itb_1024.png"
                alt="ITB Logo"
                className="h-12 w-auto brightness-0 invert group-hover:brightness-90"
              />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent hover:from-violet-600 hover:to-cyan-600 transition-all duration-300">
              EduLab ITB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            
            {!isLoggedIn ? (
              <>
                {/* Button Sign Up */}
                <Link href="/signup" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-medium hover:from-purple-600 hover:to-violet-600 hover:shadow-lg transition-all duration-300"
                  >
                    Sign Up
                  </motion.button>
                </Link>

                {/* Button Login */}
                <Link href="/login" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-medium hover:from-violet-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Login
                  </motion.button>
                </Link>
              </>
            ) : (
              // Profile Dropdown
              <div className="relative profile-dropdown">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-medium hover:from-violet-600 hover:to-cyan-600 transition-all duration-300"
                >
                  <img
                    src="/api/placeholder/32/32"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{userName}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isProfileOpen ? 'rotate-180' : ''
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                    >
                      <div className="p-4 border-b">
                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-violet-500" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Points Earned</p>
                            <p className="text-lg font-bold text-violet-600">{userPoints}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-700 p-2 hover:text-gray-900 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

const NavLinks = ({ mobile, setIsMenuOpen }) => {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return links.map((link) => (
    <Link key={link.name} href={link.href} passHref>
      <motion.div
        className={`relative text-gray-700 hover:text-gray-900 group transition-colors duration-300 ${
          mobile ? 'py-2' : ''
        }`}
        onClick={() => mobile && setIsMenuOpen(false)}
        whileHover={{ x: mobile ? 5 : 0 }}
      >
        {link.name}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  ));
};

export default Navbar;
