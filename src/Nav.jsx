// src/Nav.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  PawPrint,
  Info,
  LogIn,
  UserPlus,
  Phone,
  HelpCircle
} from 'lucide-react';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${
        scrolled ? 'bg-white shadow-md scale-105' : 'bg-white bg-opacity-0 backdrop-blur-md scale-100'
      }`}
    >
      <div className="px-0">
        <div className="flex items-center h-16">
          {/* Logo */}
          <img
            src="/adopt.png"
            alt="Logo"
            className="h-full w-66 object-contain"
          />

          {/* Navigation Links */}
          <div className="flex items-center space-x-7 text-xs font-semibold text-gray-700 uppercase ml-4" style={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>
            <Link to="/" className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
              <HomeIcon size={16} /> Home
            </Link>
            <Link to="/browse" className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
              <PawPrint size={16} /> Browse-Pets
            </Link>
            <Link to="/about" className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
              <Info size={16} /> About Us
            </Link>
            <Link to="/login" className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
              <LogIn size={16} /> Login
            </Link>
            <Link to="/register" className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
              <UserPlus size={16} /> Register
            </Link>
            <Link to="/contact" className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
  <Phone size={16} /> Contact
</Link>

            <Link to="#" className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
              <HelpCircle size={16} /> Donate
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
