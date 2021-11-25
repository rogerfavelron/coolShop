import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { OnePiece } from './Components/ProductCategories';
import { Electronics } from './Components/ProductCategories';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { About } from './Pages';
import { Careers } from './Pages';
import { Home } from './Pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coolShop" element={<Home />} />
        <Route path="onepiece" element={<OnePiece />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
