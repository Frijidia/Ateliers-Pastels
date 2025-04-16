
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { Users, Award, Shield, Clock } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <Hero
        title="Notre Histoire"
        subtitle="Créativité, expertise et passion pour la communication visuelle"
        image="https://images.unsplash.com/photo-1586041828039-b8d193d6d1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        overlayOpacity="opacity-70"
      />

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="À Propos des Ateliers Pastels" />
            <p className="text-lg text-gray-700 mb-6">
              Fondés en 2010, Les Ateliers Pastels sont une agence créative dédiée à aider les entreprises et les particuliers
              à donner vie à leurs idées grâce à un design innovant et une production d'imprimés de haute qualité.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Ce qui a commencé comme un petit studio de design graphique a évolué en une agence créative complète offrant une large
              gamme de services, notamment le développement d'identité visuelle, la production d'imprimés, la signalétique, les objets promotionnels personnalisés,
              et des solutions de design numérique.
            </p>
            <p className="text-lg text-gray-700">
              Notre nom "Les Ateliers Pastels" reflète notre approche du design—doux et nuancé comme les couleurs pastel, mais vibrant
              et percutant. Nous croyons en la création d'expériences visuelles à la fois esthétiques et stratégiquement efficaces.
            </p>

            {/* Timeline/Milestones */}
            <div className="mt-16 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-pastel-pink before:to-transparent">
              {/* Milestone 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pastel-pink shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-white">1</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-display font-bold text-pastel-black">2010: Fondation</h3>
                  <p className="text-gray-600 mt-2">Établi comme un studio de design graphique spécialisé dans le design d'impression.</p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pastel-turquoise shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-white">2</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-display font-bold text-pastel-black">2013: Expansion</h3>
                  <p className="text-gray-600 mt-2">Ajout de capacités d'impression internes et expansion de notre équipe de designers.</p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pastel-yellow shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-white">3</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-display font-bold text-pastel-black">2016: Nouveaux Services</h3>
                  <p className="text-gray-600 mt-2">Introduction d'objets promotionnels personnalisés et de solutions de signalétique.</p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pastel-pink shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-white">4</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-display font-bold text-pastel-black">2020: Évolution Numérique</h3>
                  <p className="text-gray-600 mt-2">Ajout de services de design numérique en complément de nos offres d'impression.</p>
                </div>
              </div>

              {/* Milestone 5 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pastel-turquoise shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-white">5</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-display font-bold text-pastel-black">Aujourd'hui: Agence Complète</h3>
                  <p className="text-gray-600 mt-2">Maintenant une agence créative complète servant des clients dans de multiples industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Rencontrez Notre Équipe" 
            subtitle="Les esprits créatifs derrière Les Ateliers Pastels" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Sophie Martin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold">Sophie Martin</h3>
                <p className="text-pastel-pink font-medium">Directrice Créative</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Plus de 15 ans d'expérience en design graphique et stratégie de marque.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Thomas Dubois" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold">Thomas Dubois</h3>
                <p className="text-pastel-turquoise font-medium">Responsable Production</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Expert en production d'imprimés avec un sens aigu du détail et de la qualité.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Marie Laurent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold">Marie Laurent</h3>
                <p className="text-pastel-yellow font-medium">Designer Senior</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Spécialiste en identité visuelle et design d'emballage pour marques de luxe.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Lucas Bernard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold">Lucas Bernard</h3>
                <p className="text-pastel-pink font-medium">Designer Numérique</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Crée des expériences de marque cohérentes à travers les supports imprimés et numériques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Nos Valeurs" 
            subtitle="Les principes qui guident notre travail et nos relations clients" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Value 1 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover-scale">
              <div className="bg-pastel-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-pastel-black" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Focus Client</h3>
              <p className="text-gray-600">
                Nous plaçons les besoins de nos clients au centre de tout ce que nous faisons, assurant que leur vision soit réalisée.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover-scale">
              <div className="bg-pastel-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-pastel-black" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Excellence de Qualité</h3>
              <p className="text-gray-600">
                Nous maintenons les plus hauts standards en design et production, sans jamais compromettre la qualité.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover-scale">
              <div className="bg-pastel-turquoise w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-pastel-black" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Intégrité</h3>
              <p className="text-gray-600">
                Nous opérons avec honnêteté et transparence dans toutes nos interactions avec les clients et nos pratiques commerciales.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover-scale">
              <div className="bg-pastel-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-pastel-black" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Ponctualité</h3>
              <p className="text-gray-600">
                Nous respectons les délais et travaillons efficacement pour livrer les projets à temps, à chaque fois.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Témoignages Clients" 
            subtitle="Ce que nos clients disent de leur collaboration avec Les Ateliers Pastels" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-pastel-pink flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div>
                  <h4 className="font-bold">Laura Moreau</h4>
                  <p className="text-sm text-gray-600">Directrice Marketing, Hôtels Bellevue</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Les Ateliers Pastels ont transformé notre identité de marque avec un système de design sophistiqué et cohérent. Leur attention aux détails et leur compréhension de nos objectifs étaient impressionnantes."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-pastel-turquoise flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h4 className="font-bold">Marc Dupont</h4>
                  <p className="text-sm text-gray-600">Fondateur, Jardin Bio</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Travailler avec cette équipe a été un plaisir du début à la fin. Ils ont pris notre projet d'emballage écologique et ont dépassé nos attentes avec des solutions créatives et durables."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-pastel-yellow flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Legrand</h4>
                  <p className="text-sm text-gray-600">Responsable Événements, Musée de la Ville</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "La signalétique et les supports promotionnels créés pour notre exposition étaient magnifiques. L'équipe a été réactive, professionnelle, et a tout livré dans des délais serrés."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
