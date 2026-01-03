import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitiationPortal from './components/InitiationPortal';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portal" element={<InitiationPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
