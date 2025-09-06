import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking requested: ${service} at ${location}`);
  };

  return (
    <section id="booking" style={{ padding: '50px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book a Service</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
      >
        <input
          type="text"
          placeholder="Service (Plumber, Electrician...)"
          value={service}
          onChange={e => setService(e.target.value)}
          required
          style={{ padding: '10px 15px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
          style={{ padding: '10px 15px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 25px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#ff5722',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: '0.3s'
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e64a19')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#ff5722')}
        >
          Book Now
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
