// import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CallToActionSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-pastel-yellow via-white to-pastel-turquoise">
      <div className="container mx-auto text-center pt-12 pb-12"> {/* Padding ajouté ici */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Prêt à Démarrer Votre Propre Projet ?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Créons ensemble quelque chose d'extraordinaire qui aide votre marque à se démarquer.
        </p>
        <Button asChild size="lg" className="bg-pastel-black text-white hover:bg-pastel-pink transition-colors">
          <Link to="/contact">Contactez-nous</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
