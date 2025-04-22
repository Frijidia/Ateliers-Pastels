// import React from 'react';
import '../styles/animations.css';
import '../styles/hover.css';

// Ajout des styles pour les nuages dans la même page
const cloudStyles = `
  @keyframes float {
    0% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-20px) translateX(20px); }
    100% { transform: translateY(0px) translateX(0px); }
  }

  @keyframes float2 {
    0% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(20px) translateX(-20px); }
    100% { transform: translateY(0px) translateX(0px); }
  }

  @keyframes float3 {
    0% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-15px) translateX(-15px); }
    100% { transform: translateY(0px) translateX(0px); }
  }

  .cloud {
    position: absolute;
    opacity: 0.8;
    pointer-events: none;
  }

  .cloud1 {
    animation: float 8s ease-in-out infinite;
  }

  .cloud2 {
    animation: float2 12s ease-in-out infinite;
  }

  .cloud3 {
    animation: float3 10s ease-in-out infinite;
  }
`;

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <style>{cloudStyles}</style>

      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up" style={{
        background: 'linear-gradient(to right, rgba(237, 56, 143, 0.61) 41%, rgba(255, 255, 132, 1) 69%, rgba(152, 166, 255, 1) 100%)'
      }}>
        <div className="cloud cloud1 hover-scale" style={{ top: '10%', left: '5%' }}>
          <svg width="100" height="60" viewBox="0 0 100 60" fill="white" opacity="0.8">
            <path d="M90,40 C90,50 80,60 50,60 C20,60 10,50 10,40 C10,30 20,20 30,20 C30,10 40,0 50,0 C60,0 70,10 70,20 C80,20 90,30 90,40 Z" />
          </svg>
        </div>

        <div className="cloud cloud2 hover-scale" style={{ top: '30%', right: '10%' }}>
          <svg width="120" height="72" viewBox="0 0 100 60" fill="white" opacity="0.6">
            <path d="M90,40 C90,50 80,60 50,60 C20,60 10,50 10,40 C10,30 20,20 30,20 C30,10 40,0 50,0 C60,0 70,10 70,20 C80,20 90,30 90,40 Z" />
          </svg>
        </div>

        <div className="cloud cloud3 hover-scale" style={{ bottom: '20%', left: '15%' }}>
          <svg width="80" height="48" viewBox="0 0 100 60" fill="white" opacity="0.7">
            <path d="M90,40 C90,50 80,60 50,60 C20,60 10,50 10,40 C10,30 20,20 30,20 C30,10 40,0 50,0 C60,0 70,10 70,20 C80,20 90,30 90,40 Z" />
          </svg>
        </div>

        <div className="cloud cloud1 hover-scale" style={{ bottom: '30%', right: '20%' }}>
          <svg width="90" height="54" viewBox="0 0 100 60" fill="white" opacity="0.5">
            <path d="M90,40 C90,50 80,60 50,60 C20,60 10,50 10,40 C10,30 20,20 30,20 C30,10 40,0 50,0 C60,0 70,10 70,20 C80,20 90,30 90,40 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold mb-8 text-gray-900">
              Notre Histoire
            </h1>
            <p className="text-2xl text-gray-800 max-w-2xl mx-auto mb-8 leading-relaxed">
              Bienvenue dans notre univers pastel, où chaque création est une empreinte unique.
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto italic">
              Depuis 2023, nous donnons vie à vos idées à travers des créations uniques et personnalisées.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-12 text-center animate-fade-in-up">
            À Propos des Ateliers Pastels
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 mb-16 animate-fade-in-up delay-200">
              <p className="text-gray-600 leading-relaxed text-lg text-justify hyphens-auto">
                Les Ateliers Pastels, c'est l'histoire d'une passion pour la création, les couleurs et l'excellence. Fondée il y a deux ans, notre agence créative s'est rapidement imposée comme un partenaire de confiance dans le domaine de l'impression et de la communication visuelle.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg text-justify hyphens-auto">
                Derrière ce projet se trouve Mme Pamela BOSSOU, fondatrice et directrice de l'agence, animée par une vision claire : proposer des solutions d'impression sur-mesure, audacieuses et de qualité professionnelle pour répondre aux besoins des marques, entreprises et particuliers.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg text-justify hyphens-auto">
                Depuis notre création, nous avons eu l'opportunité de collaborer avec des structures d'envergure telles que KAWERU GROUP et AFRICA BARBECUE, HOQ pour la conception et l'impression de supports de communication variés : affiches, flyers, bannières, packaging, goodies, etc.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg text-justify hyphens-auto">
                Notre studio allie créativité, réactivité et expertise technique pour accompagner chaque client, de l'idée à la réalisation. Que vous ayez besoin d'une communication percutante, d'une identité visuelle forte ou de supports imprimés de haute qualité, Les Ateliers Pastels est là pour donner vie à vos projets.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-200"></div>
              <div className="space-y-24 relative">
                <div className="flex items-center justify-end md:justify-between animate-fade-in-left delay-100">
                  <div className="w-5/12 hidden md:block"></div>
                  <div className="w-2.5 h-2.5 bg-pink-300 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-5/12 pl-4 md:pl-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2021: Fondation</h3>
                    <p className="text-gray-600">Création des Ateliers Pastels par Mme Pamela BOSSOU.</p>
                  </div>
                </div>
                <div className="flex items-center justify-start md:justify-between animate-fade-in-right delay-200">
                  <div className="w-5/12 pr-4 text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2022: Premiers Partenariats</h3>
                    <p className="text-gray-600">Collaboration avec KAWERU GROUP et AFRICA BARBECUE.</p>
                  </div>
                  <div className="w-2.5 h-2.5 bg-blue-300 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-5/12 hidden md:block"></div>
                </div>
                <div className="flex items-center justify-end md:justify-between animate-fade-in-left delay-300">
                  <div className="w-5/12 hidden md:block"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-5/12 pl-4 md:pl-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2023: Expansion des Services</h3>
                    <p className="text-gray-600">Développement de l'offre de services et diversification de la clientèle.</p>
                  </div>
                </div>
                <div className="flex items-center justify-start md:justify-between animate-fade-in-right delay-400">
                  <div className="w-5/12 pr-4 text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Aujourd'hui</h3>
                    <p className="text-gray-600">Une agence créative complète offrant des solutions sur-mesure en communication visuelle et impression.</p>
                  </div>
                  <div className="w-2.5 h-2.5 bg-pink-300 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-5/12 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Notre Équipe</h2>
          <div className="grid  gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <img src="/team-member-1.jpg" alt="Pamela BOSSOU" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-2">Pamela BOSSOU</h3>
                <p className="text-gray-600 text-lg">Fondatrice & Directrice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-pink-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="font-bold text-2xl mb-6 hover:text-pink-600 transition-colors duration-300">Design Graphique</h3>
              <ul className="text-gray-600 text-left space-y-3 text-lg">
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-pink-600">
                  <span className="mr-2">•</span>
                  <span>Conception de logos</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-pink-600">
                  <span className="mr-2">•</span>
                  <span>Création de chartes graphiques</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-pink-600">
                  <span className="mr-2">•</span>
                  <span>Design de papeterie</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-pink-600">
                  <span className="mr-2">•</span>
                  <span>Visuels réseaux sociaux</span>
                </li>
              </ul>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
                <span className="text-4xl">🖨️</span>
              </div>
              <h3 className="font-bold text-2xl mb-6 hover:text-blue-600 transition-colors duration-300">Impression & production</h3>
              <ul className="text-gray-600 text-left space-y-3 text-lg">
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-blue-600">
                  <span className="mr-2">•</span>
                  <span>Impression numérique et offset</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-blue-600">
                  <span className="mr-2">•</span>
                  <span>Sérigraphie</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-blue-600">
                  <span className="mr-2">•</span>
                  <span>Supports marketing</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-blue-600">
                  <span className="mr-2">•</span>
                  <span>Packaging personnalisé</span>
                </li>
              </ul>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
                <span className="text-4xl">🎁</span>
              </div>
              <h3 className="font-bold text-2xl mb-6 hover:text-green-600 transition-colors duration-300">Goodies & Objets Pub</h3>
              <ul className="text-gray-600 text-left space-y-3 text-lg">
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600">
                  <span className="mr-2">•</span>
                  <span>Articles promotionnels</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600">
                  <span className="mr-2">•</span>
                  <span>Objets personnalisés</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600">
                  <span className="mr-2">•</span>
                  <span>Cadeaux d'entreprise</span>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600">
                  <span className="mr-2">•</span>
                  <span>Textile personnalisé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Témoignages Clients
          </h2>
          <p className="text-center text-gray-600 mb-16 text-xl">
            Ce que nos clients disent de leur collaboration avec Les Ateliers Pastels
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-xl font-semibold text-pink-600 mr-4 transform transition-all duration-300 hover:rotate-12 hover:scale-110">
                  H
                </div>
                <div>
                  <h3 className="font-bold text-xl hover:text-pink-600 transition-colors duration-300">Hugues AMOUSSOU</h3>
                  <p className="text-gray-600">Gérant de KAWERU GROUP</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic leading-relaxed hover:text-gray-800 transition-colors duration-300">
                "Travailler avec LES ATELIERS PASTELS a été une expérience marquante. Leur sens du détail, leur capacité d’écoute et leur créativité ont grandement contribué à valoriser l’image de notre groupe. Une équipe professionnelle et passionnée que je recommande sans hésiter."
              </blockquote>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-semibold text-blue-600 mr-4 transform transition-all duration-300 hover:rotate-12 hover:scale-110">
                  O
                </div>
                <div>
                  <h3 className="font-bold text-xl hover:text-blue-600 transition-colors duration-300">Odilon CHODATON</h3>
                  <p className="text-gray-600">Gérant d’AFRICA BARBECUE</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic leading-relaxed hover:text-gray-800 transition-colors duration-300">
                "Nous avions besoin d’un accompagnement authentique pour refléter l’esprit convivial de notre marque, et LES ATELIERS PASTELS ont su capter l’essence même de notre univers. Leur approche humaine et sur mesure fait toute la différence."
              </blockquote>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-xl font-semibold text-yellow-600 mr-4 transform transition-all duration-300 hover:rotate-12 hover:scale-110">
                  T
                </div>
                <div>
                  <h3 className="font-bold text-xl hover:text-yellow-600 transition-colors duration-300">Terence QUENUM</h3>
                  <p className="text-gray-600">Promoteur de HOQ</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic leading-relaxed hover:text-gray-800 transition-colors duration-300">
                "À chaque étape de notre projet, LES ATELIERS PASTELS ont fait preuve d’un professionnalisme irréprochable. Leur vision artistique, alliée à une rigueur stratégique, a donné vie à une identité forte et cohérente pour HOQ."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;