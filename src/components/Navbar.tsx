
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'À Propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300', 
        scrolled ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-3xl font-display font-bold">
            <span className="text-pastel-pink">Les</span> 
            <span className="text-pastel-black">Ateliers</span> 
            <span className="text-pastel-turquoise">Pastels</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-pastel-black hover:text-pastel-pink transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild>
            <Link to="/contact" className="bg-pastel-turquoise text-pastel-black hover:bg-pastel-pink transition-colors">
              Demander un Devis
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-pastel-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="space-y-8 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-2xl font-display text-pastel-black hover:text-pastel-pink transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="mt-6">
            <Link 
              to="/contact" 
              className="bg-pastel-turquoise text-pastel-black hover:bg-pastel-pink transition-colors"
              onClick={toggleMenu}
            >
              Demander un Devis
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
