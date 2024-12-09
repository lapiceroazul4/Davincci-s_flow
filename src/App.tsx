import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Beliefs from './components/Beliefs';
import History from './components/History';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Beliefs />
      <History />
      <Contact />
    </div>
  );
}

export default App;