import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"; // ✅ Correct
import Navbar from './components/Navbar';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from './components/Contact';
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
     
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
     
      
    </>
  );
}

export default App;
