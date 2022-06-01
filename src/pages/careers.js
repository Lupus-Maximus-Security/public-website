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
            <p><b>Lead Rust / Linux Developer</b></p>
          </p>
          <p>
            Help build a Linux desktop secure virtualization product that will be deployed to tens of thousands of users. This is a unique oppurtunity to build
            a desktop-focused Linux product with a great tech stack: KVM, libvirt, rust, rpm-ostree. We are a small team of very experienced Linux developers
            looking to add another experienced developer. Experience we are looking for:
          </p>
          <div class="container mx-auto px-12 mt-4 mb-4">
            <ul class="list-disc">
              <li><b>Linux - </b> in-depth understanding and experience with Linux development, packaging, and how distributions are built. Sort of "full-stack" Linux
                development. This project will both write all of the application code, but also package that into an installable RHEL-based distribution and provide
                updates. So it's crucial that you be able to contribute to all aspects of that process. Your experience doesn't have to be with Red Hat based
                distros, though that would be great.</li>
              <li><b>Software Development - </b> this is ultimately a software development role, so you need to be a strong developer. Most of the new code will be in Rust,
                so experience with Rust is welcome, but experience with other compiled, statically typed languages is fine. Much of the development will be "systems
                programming", so knowledge and experience with low-level operating system details is helpful. But there is also going to be user interface development,
                scripting, and other bits to bring the whole system together, so a breadth of experience is welcome.</li>
              <li><b>Security - </b> this is a security product (the virtualization is being used to provide separation and data confidentiality), so some experience
                with security fundamentals is helpful. At a minimum, knowledge of secure coding practices and basic Linux access control is required. Knowledge of other aspects of security is a plus
                (encryption, advanced access control, secure design). A strong desire to learn more about security is a must.</li>
              <li><b>Good writing skills - </b>creating good documentation is part of the core principles of the project. You don't have to be Shakespeare, but you need
                to be able to write clearly.</li>
              <li><b>Leadership - </b>as a lead developer on this project, you need to be capable of both writing code and providing team leadership. So that means experience organizing work,
                assisting more junior team members, interfacing with the customer, and generally making the project a success beyond just individual contribution.
              </li>
            </ul>
          </div>
          <p>For this Lead Rust / Linux Developer position we are targeting someone with at least 5 - 6 years of experience, but are open to more experienced developers (and
            welcome older developers in general).
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

        <div class="mt-4">
          <p>
            <p><b>SEL4 Developer</b></p>
          </p>
          <p>
            We have some upcoming projects using SEL4 (<a href="https://sel4.systems">https://sel4.systems</a>). If you have experience with secure operating systems / microkernels and are interested in SEL4 please get in
            touch. This is the practical application of SEL4 to real systems not the formal verification work, so you do not need a formal verification background (though it's certainly
            welcome if you have that experience).
          </p>
        </div>
      </div>
    </section>

  </Layout>
);

export default Index;
