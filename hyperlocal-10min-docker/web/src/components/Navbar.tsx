import React from 'react';

const Navbar: React.FC = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 50px',
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    position: 'fixed' as 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000
  };

  const linkStyle = { margin: '0 15px', cursor: 'pointer', color: 'white', textDecoration: 'none' };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Hyperlocal Test</div>
      <div>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#booking" style={linkStyle}>Book Now</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
