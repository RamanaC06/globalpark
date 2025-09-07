import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => navigate('/')} className="flex items-center space-x-2">
            <img
              src="https://strange-silver-9oy5rclwas.edgeone.app/logo.png"
              alt="Global Park Logo"
              className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 ${
                isScrolled ? 'transform scale-90' : 'transform scale-100'
              }`}
            />
            
            <span className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Global Park
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm lg:text-base hover:text-blue-500 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => navigateToPage('/services')}
              className={`text-sm lg:text-base hover:text-blue-500 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => navigateToPage('/partnership')}
              className={`text-sm lg:text-base hover:text-blue-500 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Partnership
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm lg:text-base hover:text-blue-500 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 hover:text-blue-500 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => navigateToPage('/services')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => navigateToPage('/partnership')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-300"
            >
              Partnership
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
