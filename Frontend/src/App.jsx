import React from 'react';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Services from './component/Services';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
