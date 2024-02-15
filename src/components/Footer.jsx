import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='foot'>
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Thirumalai. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
