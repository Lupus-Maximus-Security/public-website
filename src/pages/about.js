import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import brickhouse from '../img/brickhouse.jpg';
import karl from '../img/karl-macmillan-small.jpg';

const Index = () => (
  <Layout>
    <section id="about" className="py-10 lg:pb-20 lg:pt-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">About Us</h2>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Our Story</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Lupus Maximus Security, LLC was founded in 2014 by Karl MacMillan with two goals: provide
            specialized security consulting and develop interesting new technology. So far, we have
            helped many customers, have contributed to a range of open source projects, and have
            spun off two new products. We would love to help you with whatever security challenging
            is keeping you up.
          </p>
        </div>
      }
      secondarySlot={<img alt="karl macmillan" src={karl} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Our Name</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            There are two reasons for the name. First is just that it's a fun metaphor: we are a
            defensive computer security company, so we are building brick houses to provide
            protection from the big bad wolves in the world (Lupus Maximus means big wolf in Latin). The other reason is that the MacMillan
            family has a long history of building with bricks. James Wilson MacMillan, a direct
            ancestor of Karl MacMillan,{' '}
            <a href="https://www.scottishbrickhistory.co.uk/j-w-mcmillan-glasgow-scotland-to-milledgeville-georgia-usa/">
              owned a prominent brick factory in Georgia
            </a>{' '}
            in the early twentienth century, even providing some bricks for{' '}
            <a href="https://assortedregards.com/2021/05/11/mcmillan-bricks-at-andalusia/">
              Flannery O'Connor's house.
            </a>
          </p>
        </div>
      }
      secondarySlot={<img alt="macmillan bricks" src={brickhouse} />}
    />
  </Layout>
);

export default Index;
