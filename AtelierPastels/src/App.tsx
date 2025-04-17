import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingPage from './page/LoadingPage';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        {/* Ajoutez ici les autres routes lorsque les pages seront créées */}
        <Route path="/services" element={<Navigate to="/accueil" />} /> {/* Temporaire */}
        <Route path="/projets" element={<Navigate to="/accueil" />} /> {/* Temporaire */}
        <Route path="/contact" element={<Navigate to="/accueil" />} /> {/* Temporaire */}
        {/* Rediriger les autres chemins vers la page d'accueil */}
        <Route path="*" element={<Navigate to="/accueil" />} />
      </Routes>
    </Router>
  );
};

export default App;