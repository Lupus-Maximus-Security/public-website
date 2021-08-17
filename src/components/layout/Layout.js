import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Helmet from './Helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet />
      <Header bgWhite />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
