import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-gray-950 shadow-md'
            : 'bg-white shadow-md'
          : 'bg-transparent'
      } ${scrolled ? '' : 'text-white dark:text-white'}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* 🌀 Logo + Brand Name with Animation */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <motion.img
              src="https://res.cloudinary.com/dadp7h2k1/image/upload/v1751072322/My%20Brand/logo_guebsg.jpg"
              alt="Urban Custom Logo"
              className="h-10 w-10 object-cover rounded-full"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            />
            <span
              className={`text-2xl font-bold tracking-tight ${
                scrolled
                  ? theme === 'dark'
                    ? 'text-white'
                    : 'text-black'
                  : 'text-white dark:text-white'
              }`}
            >
              Urban Custom
            </span>
          </Link>
        </motion.div>

        {/* 🧭 Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:underline ${
                  isActive
                    ? 'text-orange-600 dark:text-orange-400'
                    : scrolled
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-black'
                    : 'text-white dark:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* 🌗 Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full transition ${
              scrolled
                ? theme === 'dark'
                  ? 'hover:bg-gray-700'
                  : 'hover:bg-gray-200'
                : 'hover:bg-white/10'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-white" />
            ) : (
              <MoonIcon className="w-5 h-5 text-black" />
            )}
          </button>
        </nav>

        {/* 📱 Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu Panel */}
      {isMobileOpen && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-950 transition-all duration-300">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsMobileOpen(false)}
              className={`block py-2 border-b text-sm font-medium transition ${
                isActive(path)
                  ? 'text-orange-600 dark:text-orange-400'
                  : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              {label}
            </NavLink>
          ))}

          {/* 🌙 Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="mt-3 flex items-center gap-2 text-gray-800 dark:text-gray-200"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            <span className="text-sm">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
