import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';         // Nav.jsx is in src/
import Home from './Home';       // Home.jsx is in src/
import About from './About';     // About.jsx is in src/
import Login from './Login';     // ✅ Import Login.jsx
import Register from './Register'; // ✅ Import Register.jsx
import Contact from './Contact'; // Import Contact.jsx
import Browse from './Browse'; 


import 'animate.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />  {/* ✅ Added Login route */}
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Router>
  );
}

export default App;
