import React from 'react';
import OnePiece from './Components/OnePiece';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import Electronics from './Components/Electronics';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="onepiece" element={<OnePiece />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="about" element={<About/>} />
        <Route path="careers" element={<Careers/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
