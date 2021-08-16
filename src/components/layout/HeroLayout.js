import React from 'react';
import Footer from './Footer';
import Header from './Header';
import heroimg from '../../img/brickhouse.jpg';

const HeroLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="absolute -z-40 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-gray-500 bg-opacity-50"></div>
        <div
          className="bg-cover min-h-screen bg-center"
          style={{ backgroundImage: `url(${heroimg})` }}
        />
      </div>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default HeroLayout;
