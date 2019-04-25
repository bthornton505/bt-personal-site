import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Footer />
    </div>
  );
}

export default App;
