import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar - noir avec logo */}
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">LOGO</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Menu</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Hero Section avec formes 3D */}
      <section className="bg-cyan-400 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Formes 3D */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-64 w-full">
                {/* Cercle bleu */}
                <div className="absolute left-4 top-4 w-40 h-40 rounded-full bg-blue-500"></div>
                {/* Cube jaune */}
                <div className="absolute right-16 bottom-4 w-32 h-32 bg-yellow-300"></div>
                {/* Forme rouge */}
                <div className="absolute right-4 top-8 w-24 h-24 bg-red-400 rounded-lg transform rotate-12"></div>
                {/* Logo wireframe au centre */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2" fill="none" />
                    <path d="M30 50 A20 20 0 0 1 70 50 A20 20 0 0 1 30 50" stroke="black" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Texte de bienvenue */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-4">Bienvenue aux Ateliers Pastels</h1>
              <p className="mb-6">Nous sommes spécialisés dans la création de designs colorés et innovants pour donner vie à vos projets.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - fond blanc */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Nos Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              icon="🎨" 
              title="Design Graphique" 
              description="Création d'identités visuelles" 
            />
            <ServiceCard 
              icon="💻" 
              title="Développement Web" 
              description="Sites web responsives" 
            />
            <ServiceCard 
              icon="📱" 
              title="Design UX/UI" 
              description="Interfaces utilisateur intuitives" 
            />
            <ServiceCard 
              icon="📷" 
              title="Photographie" 
              description="Séances photo professionnelles" 
            />
            <ServiceCard 
              icon="🎥" 
              title="Production Vidéo" 
              description="Création de contenus vidéo" 
            />
            <ServiceCard 
              icon="📊" 
              title="Stratégie Digitale" 
              description="Conseils pour votre présence en ligne" 
            />
          </div>
        </div>
      </section>
      
      {/* Portfolio Section - fond rose pâle */}
      <section className="py-12 px-4 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Projets et Atelier</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard 
              imageSrc="/api/placeholder/400/300"
              title="Projet 1"
            />
            <ProjectCard 
              imageSrc="/api/placeholder/400/300"
              title="Projet 2"
            />
            <ProjectCard 
              imageSrc="/api/placeholder/400/300"
              title="Projet 3"
            />
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-pink-500 text-white py-2 px-6 rounded">
              Voir plus
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section - fond blanc avec encadré rose */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-pink-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Prêt à discuter votre projet?</h2>
          <p className="text-center mb-6">
            Contactez-nous dès aujourd'hui pour transformer vos idées en réalité.
          </p>
          <div className="text-center">
            <button className="bg-pink-500 text-white py-2 px-6 rounded">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer - fond blanc */}
      <footer className="py-8 px-4 bg-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Ateliers Pastels</h3>
            <p>Création de designs colorés et innovants</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>contact@atelierspastels.com</p>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Liens</h3>
            <ul>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Projets</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Composant ServiceCard
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Composant ProjectCard
const ProjectCard = ({ imageSrc, title }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default HomePage;