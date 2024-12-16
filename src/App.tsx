import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
          © {new Date().getFullYear()} Venkata Sai Anurag Kannepalli. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;