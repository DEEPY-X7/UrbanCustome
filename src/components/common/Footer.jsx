// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/home/logo.png";

const Footer = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-neutral-950" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-800";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const linkHoverColor =
    theme === "dark" ? "hover:text-orange-400" : "hover:text-orange-600";

  return (
    <footer className={`transition-colors duration-500 pt-12 px-6 ${bgColor} ${textColor}`}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-600/20 pb-10">
        
        {/* 1. Logo & Tagline */}
        <div>
          <img src={logo} alt="Urban Custom Logo" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed">
            India’s Leading Jeep Modification Workshop. <br />
            <span className="text-orange-500 font-semibold">Bold. Custom. Delivered.</span>
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className={`${linkHoverColor} transition`}>Home</Link></li>
            <li><Link to="/gallery" className={`${linkHoverColor} transition`}>Gallery</Link></li>
            <li><Link to="/services" className={`${linkHoverColor} transition`}>Services</Link></li>
            <li><Link to="/about" className={`${linkHoverColor} transition`}>About</Link></li>
            <li><Link to="/contact" className={`${linkHoverColor} transition`}>Contact</Link></li>
          </ul>
        </div>

        {/* 3. Contact Info */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Contact</h3>
          <p className="text-sm mb-2">📍 Mandi Dabwali 125104, Haryana, India</p>
          <p className="text-sm mb-2">📞 +91 99964 30689</p>
          <p className="text-sm mb-2">✉️ arpanabhi24@gmail.com</p>
        </div>

        {/* 4. Social Links */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://www.instagram.com/urbancustome?igsh=dGF6dXRuYmw3dXJy" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="https://www.facebook.com/JAGUAARABHI/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="https://wa.me/c/919996430689" target="_blank" rel="noreferrer" className="hover:text-green-500 transition"><FaWhatsapp /></a>
            <a href="mailto:arpanabhi24@gmail.com" className="hover:text-red-400 transition"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* 5. Bottom Line */}
      <div className="text-center text-xs py-6 text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold">Urban Custom</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
