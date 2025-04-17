import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirection vers la page d'accueil après 3 secondes
    const timer = setTimeout(() => {
      navigate('/accueil');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-pink-100">
      <div className="mb-10 w-64">
        <img src="/logo.png" alt="Les Ateliers Pastels Logo" className="w-full h-auto" />
      </div>
      <div className="w-full max-w-md bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-4 bg-gradient-to-r from-blue-400 to-gray-200 rounded-full"
          style={{
            animation: 'loading 3s forwards',
            width: '0%',
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes loading {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;