import React from 'react';
import Layout from '../components/layout/Layout';

const Index = () => (
  <Layout>
    <section id="about" className="py-10 lg:pb-20 lg:pt-28">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold">Careers</h1>
      </div>
      <div className="container mx-auto">
        <p>Big Bad Wolf Security offers a place where you can do interesting, impactful technology work with great co-workers. This isn't just another run-of-the-mill services company that does
          the same old development for hire. We have a reputation for being able to solve hard problems well, which attracts good customers with good work. We typically do consulting work
          work with a product mindset (we're in the middle of building two products right now and have launched a third product in the past). We are small, but growing so there is plenty of room for you to have an impact.
        </p>
        <p>Other things to keep in mind about working with us:</p>
        <div class="container mx-auto px-12 mt-4 mb-4">
          <ul class="list-disc">
            <li><b>100% remote - </b> we are a remote first company started by people that have been working remotely for years. We know how to build a happy, functioning
              remote working culture. You are free to live where you like as long as you have good overlap in working hours with the team.</li>
            <li><b>Work life boundaries - </b> we organize the company so that you can work clear, reasonable hours and then live your life. There are no expectations
              that you constantly check your email or Slack while you are not at work (you can view our <a href="https://bigbadwolfsecurity.notion.site/Deep-Work-and-Tools-cd4dc29abdb94d4ab8cdcd63c4692d40">actual company policy</a>
              on encouraging deep work, avoiding distractions, and maintaining work separation). No gimmicks like unlimited vacation: you know what vacation time you have and are free to take that time. We all work hard while at work and then enjoy the rest of our lives.</li>
            <li><b>Great coworkers - </b> life is too short to work with jerks, so we have a strict no jerk policy. We also have an interesting group of people that use their non-work
              time well, whether that's <a href="https://www.facebook.com/AdamPryorOfficial">playing music</a> or <a href="https://www.thecantelope.com/">sustainable farming</a>.</li>
            <li><b>Generous benefits - </b>we offer 100% employer paid health, dental, vision, 401k, and generous paid time off.</li>
          </ul>
        </div>
        <p>Unfortunately, because some of our work is for the U.S. government we are only hiring U.S. Citizens living in the U.S. at the moment. We hate that this excludes
          lots of great people, but that's the nature of our work. If that changes, we will update this page.</p>

        <h2 className="text-2xl lg:text-2xl font-semibold mt-4 mb-4">Open Positions</h2>

        <div>
          <p>
            <p><b>Rust Developer / Developer in Test</b></p>
          </p>
          <p>
            Help build a Linux desktop secure virtualization product that will be deployed to tens of thousands of users. This is a unique opportunity to build
            a desktop-focused Linux product with a great tech stack: KVM, libvirt, rust, rpm-ostree. We are a small team of very experienced Linux developers
            looking to add another developer that will work on both development and test automation, including test as part of continuos integration. Automating the testing
            of this particular product is going to be challenging, so this should have some fun technical challenges beyond the normal test automation. Experience we are looking for:
          </p>
          <div class="container mx-auto px-12 mt-4 mb-4">
            <ul class="list-disc">
              <li><b>Linux - </b> in-depth understanding and experience with Linux development, packaging, and how distributions are built. Sort of "full-stack" Linux
                development. This project will both write all of the application code, but also package that into an installable RHEL-based distribution and provide
                updates. So it's crucial that you be able to contribute to all aspects of that process. Your experience doesn't have to be with Red Hat based
                distros, though that would be great.</li>
              <li><b>Software Development - </b>this is ultimately a software development role, so you need to be a strong developer. Most of the new code will be in Rust,
                so experience with Rust is welcome, but experience with other compiled, statically typed languages is fine. Much of the development will be "systems
                programming", so knowledge and experience with low-level operating system details is helpful. But there is also going to be user interface development,
                scripting, and other bits to bring the whole system together, so a breadth of experience is welcome.</li>
              <li><b>Test Automation - </b>this role is split between development and development in test, meaning test automation will be an important aspect of the role. The test 
              automation will be both for the Linux desktop product itself and a range of connected infrastructure, which will include Linux, Windows, and networking infrastructure, so 
              general IT knowledge and experience with a range of platforms is required.</li>
              <li><b>Security - </b> this is a security product (the virtualization is being used to provide separation and data confidentiality), so some experience
                with security fundamentals is helpful. At a minimum, knowledge of secure coding practices and basic Linux access control is required. Knowledge of other aspects of security is a plus
                (encryption, advanced access control, secure design). A strong desire to learn more about security is a must.</li>
              <li><b>Good writing skills - </b>creating good documentation is part of the core principles of the project. You don't have to be Shakespeare, but you need
                to be able to write clearly.</li>
            </ul>
          </div>
          <p>For this Linux Developer / Developer in Test position we are targeting someone with at least 3 - 4 years of experience, but are open to more experienced developers (and
            welcome older developers in general).
          </p>
        </div>

        <div class="mt-4">
          <p>
            <p><b>Lead Software QA / Documentation</b></p>
          </p>
          <p>
            Help build a Linux desktop secure virtualization product that will be deployed to tens of thousands of users. This is a unique opportunity to build
            a desktop-focused Linux product with a great tech stack: KVM, libvirt, rust, rpm-ostree. We are a small team of very experienced Linux developers
            looking to add quality assurance professional that can also help create the technical documentation. This is a unique role - we are looking for a creative QA person that
            can use their attention to detail and clear communication skills to help also deliver a large package of formal documentation. Experience we are looking for:
          </p>
          <div class="container mx-auto px-12 mt-4 mb-4">
            <ul class="list-disc">
              <li><b>Testing - </b> experience creating and executing formal test plans for a complex software product throughout the development process. You will be creating the test plans
              from scratch from developer documentation and descriptions, so this is an opportunity to do things right from the start, but it also means that you need to have a strong understanding
              of how to structure testing to ensure software quality. You also need to understand how to balance the use of test automation and manual testing for cost of development and execution.</li>
              <li><b>Linux, Windows, and Networking - </b> at least some experience with Linux, Windows, and basic networking to aid with debugging and test creation.</li>
              <li><b>Security - </b> this is a security product (the virtualization is being used to provide separation and data confidentiality), so some experience
                with security fundamentals is helpful. A portion of the tests will be security tests in addition to functional tests.</li>
              <li><b>Good writing skills - </b>creating good documentation is part of the core principles of the project and a portion of this position is to organize and polish the documentation created
              by the team as a whole. As such, you should have very strong writing skills, including copy-editing of technical documentation.</li>
            </ul>
          </div>
          <p>For this Lead Software QA / Documentation position we are targeting someone with at least 3 - 4 years of experience, but are open to more experienced candidates (and
            welcome older candidates in general).
          </p>
        </div>

        <div class="mt-4">
          <p>
            <p><b>SELinux Developer</b></p>
          </p>
          <p>
            If you are interested in SELinux, this is an opportunity to dive deep by working on systems that use SELinux to its full potential and work with one of the most experienced SELinux developers
            in the world. If you have SELinux experience or Linux security experience and a desire to learn SELinux please contact us.
          </p>
        </div>
      </div>
    </section>

  </Layout>
);

export default Index;
