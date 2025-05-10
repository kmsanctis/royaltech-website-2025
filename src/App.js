import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Clientele from './pages/Clientele';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Brochure from './pages/Brochure';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/products" element={<Products />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
