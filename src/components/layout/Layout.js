import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header bgWhite />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
