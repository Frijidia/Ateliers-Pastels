import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex justify-between items-center p-8 md:p-12 lg:p-24 overflow-hidden"
        style={{ backgroundImage: 'url("../asset/fond.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full md:w-1/2 text-white z-10">
          <h1 className="text-4xl font-bold mb-4">Bienvenue aux Ateliers Pastels</h1>
          <p className="text-lg mb-8 max-w-lg">
            Nous sommes spécialisés dans la création de designs colorés et innovants pour donner vie à vos projets.
          </p>
          <Link to="/services" className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition duration-300">
            Découvrir nos services
          </Link>
        </div>
        <div className="hidden md:block w-2/5">
          <img src="../asset/art.png" alt="Illustration créative" className="w-full h-auto" />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon="🎨" 
            title="Design Graphique" 
            description="Création d'identités visuelles, logos et supports de communication." 
          />
          <ServiceCard 
            icon="💻" 
            title="Développement Web" 
            description="Sites web responsives et applications adaptées à vos besoins." 
          />
          <ServiceCard 
            icon="📱" 
            title="Design UX/UI" 
            description="Interfaces utilisateur intuitives et expériences utilisateur optimisées." 
          />
          <ServiceCard 
            icon="📷" 
            title="Photographie" 
            description="Séances photo professionnelles pour mettre en valeur vos produits." 
          />
          <ServiceCard 
            icon="🎥" 
            title="Production Vidéo" 
            description="Création de contenus vidéo pour promouvoir votre marque." 
          />
          <ServiceCard 
            icon="📊" 
            title="Stratégie Digitale" 
            description="Conseils et accompagnement pour votre présence en ligne." 
          />
        </div>
        <Link to="/services" className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
          Tous nos services
        </Link>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">Projets et Atelier</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img src="/api/placeholder/400/300" alt="Projet 1" className="w-full h-auto" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img src="/api/placeholder/400/300" alt="Projet 2" className="w-full h-auto" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img src="/api/placeholder/400/300" alt="Projet 3" className="w-full h-auto" />
          </div>
        </div>
        <Link to="/projets" className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
          Voir plus
        </Link>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-8 bg-pink-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à discuter votre projet?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Contactez-nous dès aujourd'hui pour transformer vos idées en réalité. Notre équipe est à votre écoute 
          pour vous accompagner dans la réalisation de vos projets créatifs.
        </p>
        <Link to="/contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md transition duration-300">
          Nous contacter
        </Link>
      </section>
      
      <Footer />
    </div>
  );
};

// Composant ServiceCard
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-pink-500">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  );
};

export default HomePage;