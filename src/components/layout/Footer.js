import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="py-16 px-4 mt-48 mb-8 text-white bg-black">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Lupus Maximus Security</h2>
        <p className="mt-5">Silver Spring, MD</p>
        <p>&copy; 2021 - All Rights Reserved</p>
      </div>
      <div className="flex-1 px-3 text-center">
        <ul className="leading-loose">
          <li>
            <Link className="text-red-200" to="/legal">
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3 text-right">
        <ul className="leading-loose">
          <li>
            <Link className="text-red-200" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-red-200" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-red-200" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
