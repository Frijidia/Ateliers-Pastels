import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavbarBg = (path: string) => {
    switch (path) {
      case '/accueil':
        return 'bg-cyan-400';
      case '/a-propos':
        return 'bg-blue-100';
      case '/services':
        return 'bg-red-100';
      case '/portfolio':
        return 'bg-green-100';
      case '/contact':
        return 'bg-yellow-100';
      case '/mentions':
        return 'bg-blue-400';
      default:
        return 'bg-white';
    }
  };

  return (
    <nav className={`w-full z-50 py-4 shadow-md `}> {/* ${getNavbarBg(location.pathname)}`>*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/accueil">
              <img src={logo} alt="Atelier Pastèle" className="h-12" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/accueil" 
              className={`text-lg font-medium transition-colors duration-200 ${isActive('/accueil') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              Accueil
            </Link>
            <Link 
              to="/a-propos" 
              className={`text-lg font-medium transition-colors duration-200 ${isActive('/a-propos') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              À Propos
            </Link>
            <Link 
              to="/services" 
              className={`text-lg font-medium transition-colors duration-200 ${isActive('/services') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-lg font-medium transition-colors duration-200 ${isActive('/portfolio') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-white font-medium bg-blue-950 rounded-md hover:bg-blue-900 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white  shadow-lg">
            <Link 
              to="/accueil" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/accueil') ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/a-propos" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/a-propos') ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/portfolio') ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-950 text-white hover:bg-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;