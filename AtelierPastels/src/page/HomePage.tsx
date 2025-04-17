import React from 'react';
import { Globe, Menu } from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

interface ProjectCardProps {
  imageSrc: string;
  title: string;
}

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <section className="bg-cyan-400 py-16 px-4 relative">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2400&q=80" 
          alt="Fond décoratif" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-64 w-full">
                <div className="absolute left-4 top-4 w-40 h-40 rounded-full bg-blue-500 opacity-80"></div>
                <div className="absolute right-16 bottom-4 w-32 h-32 bg-yellow-300 opacity-80"></div>
                <div className="absolute right-4 top-8 w-24 h-24 bg-red-400 rounded-lg transform rotate-12 opacity-80"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2" fill="none" />
                    <path d="M30 50 A20 20 0 0 1 70 50 A20 20 0 0 1 30 50" stroke="black" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Bienvenue aux Ateliers Pastels</h1>
              <p className="text-lg mb-6">Nous sommes spécialisés dans la création de designs colorés et innovants pour donner vie à vos projets.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon="🎨" 
              title="Design Graphique" 
              description="Création d'identités visuelles uniques et mémorables pour votre marque" 
            />
            <ServiceCard 
              icon="💻" 
              title="Développement Web" 
              description="Sites web responsives et performants adaptés à vos besoins" 
            />
            <ServiceCard 
              icon="📱" 
              title="Design UX/UI" 
              description="Interfaces utilisateur intuitives centrées sur l'expérience utilisateur" 
            />
            <ServiceCard 
              icon="📷" 
              title="Photographie" 
              description="Séances photo professionnelles pour mettre en valeur votre activité" 
            />
            <ServiceCard 
              icon="🎥" 
              title="Production Vidéo" 
              description="Création de contenus vidéo engageants et de qualité" 
            />
            <ServiceCard 
              icon="📊" 
              title="Stratégie Digitale" 
              description="Conseils personnalisés pour optimiser votre présence en ligne" 
            />
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projets et Atelier</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              imageSrc="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80"
              title="Design d'Intérieur Moderne"
            />
            <ProjectCard 
              imageSrc="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
              title="Identité de Marque"
            />
            <ProjectCard 
              imageSrc="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
              title="Design Web Créatif"
            />
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-pink-500 hover:bg-pink-600 transition-colors text-white py-3 px-8 rounded-lg text-lg">
              Voir plus
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-pink-50 p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Prêt à discuter votre projet?</h2>
          <p className="text-lg text-center mb-8">
            Contactez-nous dès aujourd'hui pour transformer vos idées en réalité.
          </p>
          <div className="text-center">
            <button className="bg-pink-500 hover:bg-pink-600 transition-colors text-white py-3 px-8 rounded-lg text-lg">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
      
      <footer className="py-12 px-4 bg-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Ateliers Pastels</h3>
            <p className="text-gray-600">Création de designs colorés et innovants pour donner vie à vos projets créatifs.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-600">contact@atelierspastels.com</p>
            <p className="text-gray-600">+33 1 23 45 67 89</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Projets</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default HomePage;