import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import ETAStatus from './components/ETAStatus';
import ProviderDashboard from './components/ProviderDashboard';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Services />
      <BookingForm />
      <ETAStatus />
      <ProviderDashboard />
      <AdminPanel />
      <Footer />
    </div>
  );
};

export default App;
