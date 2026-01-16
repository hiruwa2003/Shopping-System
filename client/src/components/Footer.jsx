import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram,
  faGithub,
  
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info & Logo */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-black-500 to-black-600 flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-full blur-lg"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-black-400 to-orange-500 bg-clip-text text-transparent">
                  CeylonCart
                </h2>
                <p className="text-gray-400 text-sm">Professional Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We deliver cutting-edge solutions with excellence and innovation at our core.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group">
                <FontAwesomeIcon icon={faFacebookF} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 transition-all duration-300 flex items-center justify-center group">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 transition-all duration-300 flex items-center justify-center group">
                <FontAwesomeIcon icon={faInstagram} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <FontAwesomeIcon icon={faChevronRight} className="text-orange-500 text-xs mr-3 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 'SEO Optimization', 'Cloud Solutions'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <FontAwesomeIcon icon={faChevronRight} className="text-orange-500 text-xs mr-3 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 mt-1 mr-3" />
                <span className="text-gray-300">colombo<br />Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-orange-500 mr-3" />
                <a href="tel:+(94) 77 695 7704" className="text-gray-300 hover:text-white transition-colors">(+94 77 695 7704) </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 mr-3" />
                <a href="hirushadilshan890@gmail.com" className="text-gray-300 hover:text-white transition-colors">hirushadilshan890@gmail.com</a>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-r-lg font-medium hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

       

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© {currentYear} codeCraft All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;