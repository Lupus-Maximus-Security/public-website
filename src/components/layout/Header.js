import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import { Link } from 'gatsby';

const Header = ({}) => (
  <header className={`sticky top-0 shadow bg-white z-50`}>
    <div className="container flex flex-row justify-start items-center mx-auto py-4 px-8">
      <Link href="/" className="flex flex-col text-2xl lg:mr-20 sm:mr-4">
        <div style={{ fontFamily: 'Rubik', marginBottom: -10 }}>Big Bad Wolf</div>
        <div style={{ fontFamily: 'Rubik', fontSize: '1rem', letterSpacing: '.7rem' }}>
          Security
        </div>
      </Link>
      <div className="flex flex-auto mt-4 sm:mt-0">
        <Link className="px-4" href="/about">
          About
        </Link>
        <Link className="visible md:invisible px-4" href="/contact">
          Contact
        </Link>
      </div>
      <div className="invisible md:visible self-end justify-self-end">
        <Button className="text-sm" href="/contact">
          Contact Us
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
