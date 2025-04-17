import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Importer directement l'image
import logo from '../assets/logo.png';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate progressive loading
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 30);
    
    // Redirect to home page once loading is complete
    const redirectTimer = setTimeout(() => {
      navigate('/accueil');
    }, 3500);
    
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);
  
  // Styles explicites pour garantir l'affichage
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffd6e0",
    position: 'relative',
    overflow: 'hidden'
  };
  
  const loaderContainerStyle = {
    width: '320px',
    height: '12px',
    backgroundColor: '#e2e8f0',
    borderRadius: '9999px',
    overflow: 'hidden',
    marginTop: '24px'
  };
  
  const progressBarStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#3b82f6',
    transition: 'width 100ms ease-out'
  };
  
  return (
    <div style={containerStyle}>
      {/* Logo and content container */}
      <div style={{ zIndex: 10, textAlign: 'center' }}>
        {/* Logo image */}
        <div style={{ marginBottom: '32px' }}>
          <img
            src={logo}
            alt="Les Ateliers Pastels"
            style={{ width: '288px', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </div>
        
        {/* Loading bar */}
        <div style={loaderContainerStyle}>
          <div style={progressBarStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;