import React from 'react';
import { Link } from 'react-router-dom';
import art from '../assets/art.png';
import vases from '../assets/assortiment-vases-modernes.png';
import carnaval from '../assets/celebration-du-carnaval-art-numerique.png';
import vedette from '../assets/vedette.png';
import fond from '../assets/fond.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <div>
  <img 
    src={carnaval} 
    alt="Image principale" 
    className="w-full h-[400px] object-cover"
  />
</div> */}

      <section className="relative h-[600px] bg-gradient-to-b from-blue-200 to-blue-400 overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <div className="text-pink-500 animate-spin-slow">
          </div>
        </div>
        <div className="absolute inset-0">
          <img 
            src={carnaval} 
            alt="Image principale" 
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* Bienvenue Section */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
              Bienvenue aux Ateliers Pastels
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative transform hover:scale-105 transition-all duration-500">
                <div className="w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={art} 
                    alt="Art décoratif" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 animate-slide-in">
                <p className="text-gray-600">
                  Création d'histoires visuelles depuis 2020
                </p>
                <p className="text-gray-600">
                  Les Ateliers Pastels est une agence créative spécialisée dans le design graphique et la production artistique. Nous mettons notre passion et notre expertise à votre disposition pour créer des communications visuelles exceptionnelles pour tous vos besoins.
                </p>
                <Link
                  to="/a-propos"
                  className="inline-block px-6 py-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Découvrez Notre Histoire
                </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bannière Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Créativité & Excellence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Notre passion pour le design et notre engagement envers la qualité nous permettent de créer des solutions visuelles uniques qui font briller votre marque.
            </p>
          </div>
        </div>
      </section>
      
      {/* Nos Cibles Section */}
      <section className="py-20 bg-pink-50 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nos Cibles
          </h2>
          <p className="text-center text-gray-600 mb-12 text-xl">
            Des solutions adaptées pour chaque type de client
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-6 flex justify-center">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Entreprises</h3>
              <div className="text-gray-600 space-y-3">
                <p className="text-center mb-4">Solutions professionnelles pour votre communication</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>PME et startups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Grandes entreprises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Organisations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-6 flex justify-center">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Créatifs</h3>
              <div className="text-gray-600 space-y-3">
                <p className="text-center mb-4">Support aux projets créatifs et culturels</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Artistes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Créateurs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Associations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Galeries d'art</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-6 flex justify-center">👥</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Particuliers</h3>
              <div className="text-gray-600 space-y-3">
                <p className="text-center mb-4">Impressions personnalisées pour vos projets</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Événements personnels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Projets créatifs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cadeaux personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Décorations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projets en Vedette Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">
            Projets en Vedette
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Une sélection de nos travaux récents dans différents secteurs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
              <img 
                src={vedette} 
                alt="Projet Vedette" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
              <img 
                src={vedette} 
                alt="Projet Vedette" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
              <img 
                src={vedette} 
                alt="Projet Vedette" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-block px-6 py-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Voir Tout le Portfolio
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Donnons vie à votre vision avec nos solutions créatives de design et d'impression de haute qualité.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Contactez-nous
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;