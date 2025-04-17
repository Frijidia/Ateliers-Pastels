import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4 text-sm">
        <div>
          <h4 className="font-bold mb-2">Les Ateliers Pastels</h4>
          <p>Solutions créatives pour tous vos besoins de communication visuelle.</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Liens Rapides</h4>
          <ul className="space-y-1">
            <li>
              <Link className='hover-blue' to='/a-propos'> À Propos </Link>
            </li>
            <li>
              <Link className='hover-blue' to='/sevices'> Nos Services </Link>
            </li>
            <li>Portfolio</li>
            <li>Contactez-nous</li>
            <li>Mentions Légales</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Nos Services</h4>
          <ul className="space-y-1">
            <li>Identité Visuelle & Design</li>
            <li>Impression & Production</li>
            <li>Goodies Personnalisés</li>
            <li>Signalétique & Affichage</li>
            <li>Services Numériques</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Contactez-nous</h4>
          <ul className="space-y-1">
            <li>📞 +229 01 95 52 36 54</li>
            <li>📧 lesatelierspastels1@gmail.com</li>
            <li>📍 Quartier Ménontin, Cotonou, Bénin</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        © 2025 Les Ateliers Pastels. Tous droits réservés.
      </p>
    </footer>
  );
}
