import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingPage from './page/LoadingPage';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import Services from './page/Services';
import Portfolio from './page/Portfolio';
import Contact from './page/Contact';

import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/a-propos" element={<AboutPage />} />

        <Route path="/contact" element={<Contact />} />
        {/* Rediriger les autres chemins vers la page d'accueil */}
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Navigate to="/accueil" />} />
      </Routes>
    </Router>
  );
};

export default App;