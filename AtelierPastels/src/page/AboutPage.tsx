import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 px-8 text-center text-gray-800"
        style={{ background: 'linear-gradient(135deg, #ffb6c1, #87cefa)' }}>
        <h1 className="text-4xl font-bold mb-4">Notre Histoire</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Découvrez l'évolution des Ateliers Pastels, notre passion pour le design et notre vision créative.
        </p>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">L'équipe des Ateliers Pastels</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="mb-6">
                  Fondés en 2015, Les Ateliers Pastels sont nés de la passion commune de quatre créatifs désireux
                  de fusionner leurs talents et leur vision artistique au service d'une approche différente du design.
                  Notre studio s'est construit sur des valeurs fortes : créativité sans limites, excellence technique,
                  engagement écologique et proximité avec nos clients.
                </p>
                <p className="mb-6">
                  Aujourd'hui, nous sommes fiers d'accompagner des entreprises de toutes tailles dans leurs projets
                  créatifs, en leur offrant des solutions sur mesure qui répondent parfaitement à leurs objectifs de
                  communication et à leur identité propre. Notre approche collaborative nous permet de créer des designs
                  qui racontent des histoires authentiques et établissent des connexions émotionnelles avec les publics visés.
                </p>
                <p className="mb-6">
                  Notre équipe pluridisciplinaire regroupe des talents complémentaires, tous animés par la même passion
                  pour l'excellence créative et l'innovation. Chaque projet est pour nous une nouvelle opportunité
                  d'explorer de nouvelles voies, de repousser les limites de notre créativité et de surprendre nos clients
                  avec des créations uniques qui reflètent leur essence même.
                </p>
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <MilestoneCard 
                  year="2015" 
                  title="Création" 
                  description="Fondation des Ateliers Pastels par quatre passionnés de design."
                />
                <MilestoneCard 
                  year="2017" 
                  title="Expansion" 
                  description="Ouverture de nos nouveaux locaux et agrandissement de l'équipe."
                />
                <MilestoneCard 
                  year="2020" 
                  title="Innovation" 
                  description="Lancement de notre département de design digital et UX/UI."
                />
                <MilestoneCard 
                  year="2023" 
                  title="International" 
                  description="Premiers projets à l'international et nouvelles collaborations."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Rencontrez Notre Équipe</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              image="/api/placeholder/150/150" 
              name="Sophie Martin" 
              role="Directrice Créative" 
            />
            <TeamMember 
              image="/api/placeholder/150/150" 
              name="Thomas Laurent" 
              role="Développeur Frontend" 
            />
            <TeamMember 
              image="/api/placeholder/150/150" 
              name="Emma Robert" 
              role="Designer UX/UI" 
            />
            <TeamMember 
              image="/api/placeholder/150/150" 
              name="Lucas Dubois" 
              role="Responsable Projet" 
            />
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Nos Valeurs</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon="✨" 
              title="Créativité" 
              description="Nous cultivons un environnement qui encourage l'innovation et la pensée créative sans limites." 
            />
            <ValueCard 
              icon="🤝" 
              title="Collaboration" 
              description="Travailler ensemble, partager des idées et apprendre les uns des autres pour créer quelque chose d'extraordinaire." 
            />
            <ValueCard 
              icon="💯" 
              title="Qualité" 
              description="Nous ne faisons aucun compromis sur la qualité de notre travail et visons toujours l'excellence." 
            />
            <ValueCard 
              icon="🌱" 
              title="Durabilité" 
              description="Nous nous engageons à adopter des pratiques respectueuses de l'environnement dans tous nos projets." 
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Témoignages Clients</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Les Ateliers Pastels ont transformé notre identité visuelle avec un design frais et moderne qui représente parfaitement notre marque." 
              author="Marie Dupont, CEO de StartupLab" 
            />
            <TestimonialCard 
              quote="Une équipe talentueuse et professionnelle qui a su comprendre nos besoins et y répondre avec créativité et efficacité." 
              author="Pierre Leroy, Directeur Marketing chez TechPro" 
            />
            <TestimonialCard 
              quote="La collaboration avec Les Ateliers Pastels a été un vrai plaisir. Leur approche créative et leur expertise technique ont fait toute la différence." 
              author="Claire Fontaine, Fondatrice de GreenLife" 
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Composant MilestoneCard
interface MilestoneCardProps {
  year: string;
  title: string;
  description: string;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ year, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-pink-500 mb-2">{year} - {title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

// Composant TeamMember
interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex justify-center space-x-4 text-gray-400">
        <span>🔗</span>
        <span>📷</span>
        <span>🐦</span>
      </div>
    </div>
  );
};

// Composant ValueCard
interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6">
      <div className="text-4xl text-pink-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

// Composant TestimonialCard
interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="font-medium text-gray-900">{author}</p>
    </div>
  );
};

export default AboutPage;