// pages/about-1.jsx
import { Fragment } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import all components that may use client-side libraries or browser-specific APIs
const Testimonial5 = dynamic(() => import('components/blocks/testimonial/Testimonial5'), { ssr: false });
const Contact7 = dynamic(() => import('components/blocks/contact/Contact7'), { ssr: false });
const Tiles5 = dynamic(() => import('components/elements/tiles/Tiles5'), { ssr: false });
const ListColumn = dynamic(() => import('components/reuseable/ListColumn'), { ssr: false });
const Team3 = dynamic(() => import('components/blocks/team/Team3'), { ssr: false });
const Facts5 = dynamic(() => import('components/blocks/facts/Facts5'), { ssr: false });
const Process7 = dynamic(() => import('components/blocks/process/Process7'), { ssr: false });
const Footer8 = dynamic(() => import('components/blocks/footer/Footer8'), { ssr: false });
const About6 = dynamic(() => import('components/blocks/about'), { ssr: false });
const Navbar = dynamic(() => import('components/blocks/navbar'), { ssr: false });
const FigureImage = dynamic(() => import('components/reuseable/FigureImage'), { ssr: false });

// Safe component (NextLink is unlikely to cause issues)
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

// Optional: Add getStaticProps for static site generation
export async function getStaticProps() {
  try {
    // Add data fetching logic here if needed (e.g., for About6, Team3, etc.)
    return {
      props: {},
      revalidate: 60, // Enable Incremental Static Regeneration (ISR) if needed
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {},
    };
  }
}