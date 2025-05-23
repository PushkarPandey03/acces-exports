// pages/about-1.jsx
import { Fragment } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components that may use plyr to prevent SSR issues
const About6 = dynamic(() => import('components/blocks/about/About6'), { ssr: false });
const Testimonial5 = dynamic(() => import('components/blocks/testimonial/Testimonial5'), { ssr: false });
const Contact7 = dynamic(() => import('components/blocks/contact/Contact7'), { ssr: false });

// Other components (assumed safe, but verify if errors persist)
import { Team3 } from 'components/blocks/team';
import { Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Process7 } from 'components/blocks/process';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';

const About = () => {
  return (
    <Fragment>
      {/* Header Section */}
      <header className="wrapper bg-gray">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* Page Title Section */}
        <section className="wrapper bg-gray">
          <div className="container pt-10 pt-md-14 text-center">
            <div className="row">
              <div className="col-xl-6 mx-auto">
                <h1 className="display-1 mb-4">Hello! This is Sandbox</h1>
                <p className="lead fs-lg mb-0">A company turning ideas into beautiful things.</p>
              </div>
            </div>
          </div>

          <FigureImage
            width={2800}
            height={1000}
            src="/img/photos/bg12.jpg"
            className="position-absolute"
            style={{
              bottom: 0,
              left: 0,
              zIndex: 2,
            }}
          />
        </section>

        <section className="wrapper bg-light angled upper-end lower-end">
          <div className="container py-14 py-md-16">
            {/* About Section */}
            <About6 />

            {/* Process Section */}
            <Process7 />
          </div>
        </section>

        {/* Testimonial Section */}
        <Testimonial5 />

        {/* Team Section */}
        <Team3 />

        {/* Facts Section */}
        <Facts5 />

        {/* Contact Section */}
        <Contact7 />
      </main>

      {/* Footer Section */}
      <Footer8 />
    </Fragment>
  );
};

export default About;