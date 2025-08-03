import React from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold">Global Park</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Leading the way in technological innovation and global trade solutions. 
              We bridge the gap between cutting-edge technology and practical business applications.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-lg transition-colors duration-300">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-lg transition-colors duration-300">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-lg transition-colors duration-300">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-lg transition-colors duration-300">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#partnership" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                <p className="text-gray-300 text-sm sm:text-base">
                  123 Global Park Avenue<br />
                  Tech City, State 12345
                </p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <p className="text-gray-300 text-sm sm:text-base">+91 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <p className="text-gray-300 text-sm sm:text-base">info@globalpark.com</p>
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </footer>
  );
};

export default Footer;
