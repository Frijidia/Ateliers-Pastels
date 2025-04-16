
import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Printer, Gift, Megaphone, PenTool, LucideIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

// Sample Projects Data
const featuredProjects = [
  {
    id: "project1",
    title: "Identité de Marque pour Fleuriste",
    category: "Identité Visuelle",
    image: "https://images.unsplash.com/photo-1586041828039-b8d193d6d1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "project2",
    title: "Design de Catalogue Corporate",
    category: "Design d'Impression",
    image: "https://images.unsplash.com/photo-1601295550036-db3d157bbd66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "project3",
    title: "Emballage Écologique",
    category: "Design d'Emballage",
    image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "project4",
    title: "Signalétique pour Boutique",
    category: "Signalétique & Affichage",
    image: "https://images.unsplash.com/photo-1581095095619-9284f94afc4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

// Services Data
interface ServiceType {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const services: ServiceType[] = [
  {
    title: "Identité Visuelle & Design Graphique",
    description: "Créez une identité visuelle distinctive qui rend votre marque mémorable et reconnaissable.",
    icon: Palette,
    color: "bg-pastel-yellow",
  },
  {
    title: "Impression & Production",
    description: "Services d'impression de haute qualité pour tous vos supports de communication, des cartes de visite aux catalogues.",
    icon: Printer,
    color: "bg-pastel-pink",
  },
  {
    title: "Goodies Personnalisés",
    description: "Promouvez votre marque avec des objets promotionnels personnalisés qui laissent une impression durable.",
    icon: Gift,
    color: "bg-pastel-turquoise",
  },
  {
    title: "Signalétique & Affichage",
    description: "Attirez l'attention avec une signalétique efficace et des présentoirs qui mettent en valeur vos produits.",
    icon: Megaphone,
    color: "bg-pastel-yellow",
  },
  {
    title: "Services Numériques",
    description: "Étendez votre identité visuelle aux plateformes numériques avec des solutions de design en ligne cohérentes.",
    icon: PenTool,
    color: "bg-pastel-pink",
  },
];

const Index = () => {
  return (
    <Layout>
      <Hero
        title="Solutions Créatives de Design et d'Impression"
        subtitle="Nous donnons vie à vos idées avec un design innovant et des services d'impression de haute qualité"
        buttonText="Commencer"
        image="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="À propos des Ateliers Pastels"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <SectionTitle 
                title="Bienvenue aux Ateliers Pastels" 
                align="left" 
                subtitle="Création d'histoires visuelles depuis 2010"
              />
              <p className="mb-6 text-gray-600">
                Les Ateliers Pastels est une agence créative spécialisée dans le design graphique et la production d'imprimés. Nous combinons créativité, expertise et passion pour offrir des communications visuelles exceptionnelles aux entreprises de toutes tailles.
              </p>
              <p className="mb-6 text-gray-600">
                Notre équipe de designers et de spécialistes de la production travaillent ensemble pour transformer vos idées en supports visuels impactants qui vous aident à vous démarquer sur le marché concurrentiel d'aujourd'hui.
              </p>
              <Button asChild className="bg-pastel-pink text-white hover:bg-pastel-black transition-colors">
                <Link to="/about">Découvrez Notre Histoire</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Nos Services"
            subtitle="Des solutions complètes pour tous vos besoins en communication visuelle"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={<service.icon size={32} />}
                color={service.color}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-pastel-turquoise text-pastel-black hover:bg-pastel-pink hover:text-white transition-colors">
              <Link to="/services">Explorez Tous les Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Projets en Vedette"
            subtitle="Une sélection de nos travaux récents dans différents secteurs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-pastel-pink text-white hover:bg-pastel-black transition-colors">
              <Link to="/portfolio">Voir Tout le Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-pastel-turquoise via-white to-pastel-yellow">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Donnons vie à votre vision avec nos solutions créatives de design et d'impression de haute qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-pastel-black text-white hover:bg-pastel-pink transition-colors">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-pastel-black text-pastel-black hover:bg-pastel-black hover:text-white transition-colors">
              <Link to="/contact">Demandez un Devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
