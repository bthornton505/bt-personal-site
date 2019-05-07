import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Landing />
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
