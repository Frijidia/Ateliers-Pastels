import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoadingPage from './page/LoadingPage';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import Services from './page/Services';
import './index.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const location = useLocation();

  const isLoadingPage = location.pathname === "/";

  return (
    <>
      {!isLoadingPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Navigate to="/accueil" />} />
      </Routes>
      {!isLoadingPage && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
