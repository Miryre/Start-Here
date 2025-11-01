import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import LivingEssentials from './pages/LivingEssentials';
import EmergencyAid from './pages/EmergencyAid';
import AcademicSupport from './pages/AcademicSupport';
import Activities from './pages/Activities';
import Career from './pages/Career';
import Community from './pages/Community';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/living-essentials" element={<LivingEssentials />} />
          <Route path="/emergency" element={<EmergencyAid />} />
          <Route path="/academic" element={<AcademicSupport />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/career" element={<Career />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
