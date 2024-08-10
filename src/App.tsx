import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Bar } from './Start/Bar/Bar';
import { Home } from './Start/Pages/Home';
import { About } from './Start/Pages/About';
import { Pricing } from './Start/Pages/Pricing';
import { FAQ } from './Start/Pages/FAQ';
import { Contact } from './Start/Pages/Contact';
import './App.scss';

function App() {
  return (
    <>
      <div className="subtle-gradient-bg">
        <div className="StarterBar">
          <Bar />
        </div>
        <div className="StarterLinks">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
