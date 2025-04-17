import React from 'react';

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
            <li>À Propos</li>
            <li>Nos Services</li>
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
            <li>📞 +33 1 23 45 67 89</li>
            <li>📧 contact@atelierspastels.com</li>
            <li>📍 123 Rue de la Création, 75001 Paris, France</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        © 2025 Les Ateliers Pastels. Tous droits réservés.
      </p>
    </footer>
  );
}
