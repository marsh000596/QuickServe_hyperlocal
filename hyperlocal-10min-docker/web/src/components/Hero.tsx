import React from 'react';

const Hero: React.FC = () => {
  const heroStyle = {
    height: '100vh',
    backgroundImage: 'url("https://wallpapercave.com/wp/wp2757951.gif")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 5px black'
  };

  const buttonStyle = {
    padding: '15px 30px',
    marginTop: '20px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#ff5722',
    color: 'white',
    transition: '0.3s'
  };

  return (
    <div style={heroStyle}>
      <h1 style={{ fontSize: '60px', margin: 0 }}>Test run Service for a 10 Minutes app</h1>
      <p style={{ fontSize: '24px', marginTop: '10px' }}>Plumber, Electrician, Teacher or whatsoever – Just Tap🤞😁!!!</p>
      <button
        style={buttonStyle}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e64a19')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#ff5722')}
      >
        Book Now
      </button>
    </div>
  );
};

export default Hero;
