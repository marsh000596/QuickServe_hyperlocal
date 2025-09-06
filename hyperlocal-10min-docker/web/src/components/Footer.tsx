import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        padding: '30px',
        backgroundColor: '#222',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <p>&copy; 2025 Hyperlocal 10min. All rights reserved.</p>
      <p>
        <a href="#services" style={{ color: '#ff5722', textDecoration: 'none', margin: '0 10px' }}>
          Services
        </a>
        |
        <a href="#booking" style={{ color: '#ff5722', textDecoration: 'none', margin: '0 10px' }}>
          Book Now
        </a>
      </p>
    </footer>
  );
};

export default Footer;
