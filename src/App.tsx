import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Services from './pages/Services';
import Partnership from './pages/Partnership';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    // Smooth scrolling
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;