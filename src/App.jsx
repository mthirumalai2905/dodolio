import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import avatar from './images/avatar.png';
import right from './images/right.png';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Home from './components/Home';
import Leetcode from './components/Leetcode';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <Leetcode />
      <Footer />
    </div>
  )
}

export default App;
