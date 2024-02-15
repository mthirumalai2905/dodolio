import React, { useState } from 'react';
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

const FullScreenPopup = ({ onClose }) => {
  return (
    <div className="full-screen-popup">
      <div className="popup-content">
        <h2>Use Desktop for Better Experience</h2>
        <p>We recommend using a desktop device for the best experience of our website.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <FullScreenPopup onClose={handleClosePopup} />}
      <Home />
      <Skills />
      <Projects />
      <Leetcode />
      <Footer />
    </div>
  )
}

export default App;
