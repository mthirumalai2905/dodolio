import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import avatar from './images/avatar.png';
import right from './images/right.png';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <img src='https://images.unsplash.com/photo-1521911528923-9c3838123490?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='banner' />
        <div className='avatar'><img src={avatar} alt='avatar'/></div>
        <h1>Hey I'm Thiru</h1>
        <div className='intro'>
          <div className='actual-intro'>
            <p>"Dive into the world of web development excellence with a seasoned freelancer, crafting digital wonders across global platforms like Fiverr, Instagram, and a plethora of open-source ventures. Ready to amplify your projects? Let's connect! Reach out via email at <span>mthirumalai2905@gmail.com</span> <br />or find me on LinkedIn: mthirumalai2905."</p>
          <div className='projects'><p>20+ projects expertly completed, demonstrating my proficiency and commitment.</p></div>
          <div className='socials'>
              {/* FontAwesome social media icons */}
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagram} />
              {/* Add more social media icons as needed */}
            </div>
          </div>
          <div className='actual-right'><img src='https://images.unsplash.com/photo-1593953443285-bf7335acbca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='right-banner'/></div>
        </div>
      </div>
    </div>
  )
}

export default App;
