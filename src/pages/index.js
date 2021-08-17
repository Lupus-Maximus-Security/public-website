import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import HeroLayout from '../components/layout/HeroLayout';
import mercklogo from '../img/merck.png';
import afrllogo from '../img/afrl.png';
import zdatalogo from '../img/zdata.png';
import hyporilogo from '../img/hypori.jpg';
import idteclogo from '../img/idtec.png';
import sealinglogo from '../img/sealingtech.png';
import decisivlogo from '../img/decisiv.png';
import forcepointlogo from '../img/forcepoint.png';
import linux from '../img/tux.png';
import aws from '../img/aws.png';
import android from '../img/android.png';

const Index = () => (
  <HeroLayout>
    <section>
      <div className="mx-auto px-8 flex flex-col h-screen md:justify-center justify-items-center items-center content-center">
        <div
          className="text-center mb-4 md:mb-12 text-3xl lg:text-wumbo lg:leading-wumbo leading-10 mt-4 md:mt-6 font-bold mx-4 md:mx-24 text-white"
          style={{ textShadow: '1px 1px 2px #000' }}
        >
          We build brick houses to protect what matters most to your organization.
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="relative h-20 w-20 md:h-48 md:w-48 m-2 md:m-8 rounded-full bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img class="object-contain" src={linux} />
            <div
              class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
              style={{ textShadow: '4px 4px 8px #000' }}
            >
              Linux
            </div>
          </div>
          <div className="relative h-20 w-20 md:h-48 md:w-48 m-2 md:m-8 rounded-full bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img class="object-contain" src={aws} />
          </div>
          <div className="relative h-20 w-20 md:h-48 md:w-48 m-2 md:m-8 rounded-full bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img class="object-contain" src={android} />
            <div
              class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
              style={{ textShadow: '4px 4px 8px #000' }}
            >
              Android
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features" className="py-10 lg:pb-20 lg:pt-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Services</h2>
        <div className="flex flex-col md:flex-row items-stretch sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Software Development</p>
              <p className="mt-4">
                While security is our focus, software development is often what we do. We build
                secure software and security solutions for our clients. This can be a small solution
                all the way up to building your next product.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Security Analysis</p>
              <p className="mt-4">
                Knowing whether a system is secure is often as challenging as making it secure in
                the first place. We have decades of experience in the formal security analysis of
                security critical systems. A particular area of expertise is SELinux policy
                analysis.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Research</p>
              <p className="mt-4">
                Solving challenging problems requires more than practical engineering - it requires
                breaking new ground and applying the best academic community has to offer. We have a
                long track record of successful applied research for leading government research and
                academic institutions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-10 lg:py-20">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">
          Some of the great companies we are proud to have worked with
        </LabelText>
        <div className="flex flex-row justify-center flex-wrap md:flex-row md:-mx-3">
          <CustomerCard title="Merck" logo={mercklogo} />
          <CustomerCard title="AFRL" logo={afrllogo} />
          <CustomerCard title="Zdata" logo={zdatalogo} />
          <CustomerCard title="Hypori" logo={hyporilogo} />
          <CustomerCard title="Sealing Technologies" logo={sealinglogo} />
          <CustomerCard title="IDTec" logo={idteclogo} />
          <CustomerCard title="Forcepoint" logo={forcepointlogo} />
          <CustomerCard title="Decisiv" logo={decisivlogo} />
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Want to learn more?</h3>
      <p className="mt-8">
        <Button size="xl" href="/contact">
          Contact Us
        </Button>
      </p>
    </section>
  </HeroLayout>
);

export default Index;
