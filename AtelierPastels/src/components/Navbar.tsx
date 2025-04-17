import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/accueil" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <div className="relative w-8 h-8 mr-2">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-sm transform rotate-12"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-pink-400 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-300 rounded-sm transform -rotate-12"></div>
                </div>
                <span className="font-bold text-xl text-gray-800">Ateliers Pastels</span>
              </div>
            </Link>
          </div>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:ml-6 md:flex md:items-center">
            <div className="flex space-x-4">
              <Link 
                to="/accueil" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/accueil') ? 'text-pink-500 font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              >
                Accueil
              </Link>
              <Link 
                to="/a-propos" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/a-propos') ? 'text-pink-500 font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              >
                À Propos
              </Link>
              <Link 
                to="/services" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/services') ? 'text-pink-500 font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              >
                Services
              </Link>
              <Link 
                to="/projets" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/projets') ? 'text-pink-500 font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              >
                Projets
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-pink-500 font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact button - Desktop */}
          <div className="hidden md:flex md:items-center">
            <Link to="/contact" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 transition duration-200">
              Prendre Rendez-vous
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-pink-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/accueil" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/accueil') ? 'bg-pink-100 text-pink-500' : 'text-gray-600 hover:bg-gray-100 hover:text-pink-500'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/a-propos" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/a-propos') ? 'bg-pink-100 text-pink-500' : 'text-gray-600 hover:bg-gray-100 hover:text-pink-500'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            À Propos
          </Link>
          <Link 
            to="/services" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'bg-pink-100 text-pink-500' : 'text-gray-600 hover:bg-gray-100 hover:text-pink-500'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/projets" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projets') ? 'bg-pink-100 text-pink-500' : 'text-gray-600 hover:bg-gray-100 hover:text-pink-500'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'bg-pink-100 text-pink-500' : 'text-gray-600 hover:bg-gray-100 hover:text-pink-500'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium bg-pink-500 text-white hover:bg-pink-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;