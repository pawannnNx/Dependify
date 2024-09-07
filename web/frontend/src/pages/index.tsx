import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to Dependify</h2>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
