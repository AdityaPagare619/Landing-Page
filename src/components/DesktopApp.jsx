import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './desktop/LandingPage';
import InitiationPortal from './desktop/InitiationPortal';

const DesktopApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<InitiationPortal />} />
      </Routes>
    </Router>
  );
};

export default DesktopApp;
