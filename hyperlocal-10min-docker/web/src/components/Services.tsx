import React from 'react';

const serviceCard = (title: string, desc: string, emoji: string) => (
  <div
    style={{
      backgroundColor: 'white',
      color: '#333',
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'center' as 'center',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      transition: '0.3s',
      cursor: 'pointer'
    }}
    onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
    onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
  >
    <div style={{ fontSize: '50px' }}>{emoji}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const Services: React.FC = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    padding: '50px',
    backgroundColor: '#f5f5f5'
  };

  return (
    <section id="services" style={containerStyle}>
      {serviceCard('Plumber', 'Fix water issues instantly!', '🔧')}
      {serviceCard('Electrician', 'Instant electrical repairs', '💡')}
      {serviceCard('Teacher', 'Book a tutor anytime', '📚')}
    </section>
  );
};

export default Services;
