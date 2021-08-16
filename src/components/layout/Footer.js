import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Big Bad Wolf Security</h2>
        <p className="mt-5">Silver Spring, MD</p>
        <p>&copy; 2021 - All Rights Reserved</p>
      </div>
      <div className="flex-1 px-3 text-center">
        <ul className="leading-loose">
          <li>
            <Link href="/legal">Terms &amp; Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3 text-right">
        <ul className="leading-loose">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
