
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-lg px-6">
          <h1 className="text-8xl font-display font-bold text-pastel-black mb-6">404</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-pastel-yellow via-pastel-pink to-pastel-turquoise mx-auto mb-8"></div>
          <h2 className="text-3xl font-display font-bold mb-4">Page Non Trouvée</h2>
          <p className="text-xl text-gray-600 mb-8">
            La page que vous recherchez a peut-être été supprimée, son nom a changé, ou elle est temporairement indisponible.
          </p>
          <Button asChild size="lg" className="bg-pastel-black hover:bg-pastel-pink transition-colors">
            <Link to="/">Retour à l'Accueil</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
