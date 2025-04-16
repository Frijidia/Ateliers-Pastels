
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pastel-black text-white">
      <div className="container mx-auto pt-16 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display mb-4">Les Ateliers Pastels</h3>
            <p className="text-gray-300 mb-4">
              Solutions créatives pour tous vos besoins de communication visuelle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pastel-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-pastel-pink transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#visual-identity" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Identité Visuelle & Design
                </Link>
              </li>
              <li>
                <Link to="/services#printing" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Impression & Production
                </Link>
              </li>
              <li>
                <Link to="/services#goodies" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Goodies Personnalisés
                </Link>
              </li>
              <li>
                <Link to="/services#signage" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Signalétique & Affichage
                </Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-gray-300 hover:text-pastel-pink transition-colors">
                  Services Numériques
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-display mb-4">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-pastel-pink" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-pastel-yellow" />
                <span className="text-gray-300">contact@atelierspastels.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-pastel-turquoise" />
                <span className="text-gray-300">123 Rue de la Création,<br />75001 Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Les Ateliers Pastels. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
