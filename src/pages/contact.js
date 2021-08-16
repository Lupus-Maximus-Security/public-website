import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section id="about" className="py-10 lg:pb-20 lg:pt-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Contact Us</h2>
      </div>
    </section>

    <section id="contact" className="container mx-auto ">
      <SplitSection
        id="contact"
        primarySlot={
          <div>
            <h1 className="text-xl mb-16">
              Email us for more information or to discuss what problem we may be able to help you
              solve. Someone will get back to you shortly.
            </h1>
            <a href="mailto:info@bigbadwolfsecurity.com" className="text-2xl">
              info@bigbadwolfsecurity.com
            </a>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
    </section>
  </Layout>
);

export default Index;
