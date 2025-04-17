import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './HomePage.tsx'
const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 30);
    
    const redirectTimer = setTimeout(() => {
      navigate('/accueil');
    }, 3500);
    
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);
  
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
      <div style={{ zIndex: 10, textAlign: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <img
            src={logo}
            alt="Les Ateliers Pastels"
            style={{ width: '288px', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </div>
        
        <div style={loaderContainerStyle}>
          <div style={progressBarStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;