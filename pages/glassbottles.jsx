import { Fragment } from 'react';
import Image from 'next/image'; // Added for image rendering
// -------- custom component -------- //
import Topbar from 'components/elements/Topbar';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { Hero10 } from 'components/blocks/hero';
import { Facts7 } from 'components/blocks/facts';
import { About11 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Contact5 } from 'components/blocks/contact';
import { Clients1 } from 'components/blocks/clients';
import { TestimonialCard4 } from 'components/reuseable/testimonial-cards';

const Demo10 = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== topbar ========== */}
      <Topbar bgColor="bg-navy" />

      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={
            <NextLink
              title="Contact"
              href="#"
              className="btn btn-sm btn-primary rounded"
            />
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero10 />

        {/* ========== glass bottles section ========== */}
        <section
          style={{
            padding: '4rem 2rem',
            backgroundColor: '#ffffff',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {/* Centered Heading */}
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '4rem',
                color: '#1a1a1a',
                textTransform: 'uppercase',
              }}
            >
              GLASS BOTTLES
            </h1>
          </div>

          {/* Ampoules */}
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto 4rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div style={{ flex: '1', minWidth: '300px' }}>
              <Image
                src="/img/photos/image (3).jpg" // Update with appropriate image path
                alt="Ampoules"
                width={500}
                height={300}
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#1a1a1a',
                }}
              >
                Ampoules
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Our glass ampoules provide a hermetically sealed solution for storing sensitive
                pharmaceuticals and chemicals. Crafted from high-quality borosilicate glass, they
                offer superior resistance to thermal shock and chemical corrosion. Ideal for
                single-dose applications, these ampoules ensure product sterility and integrity,
                meeting stringent industry standards for safety and reliability.
              </p>
            </div>
          </div>

          {/* Vials */}
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto 4rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div style={{ flex: '1', minWidth: '300px' }}>
              <Image
                src="/img/photos/image (4).jpg" // Update with appropriate image path
                alt="Vials"
                width={500}
                height={300}
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#1a1a1a',
                }}
              >
                Vials
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Our glass vials are designed for versatility, catering to pharmaceuticals,
                diagnostics, and laboratory applications. Made from premium glass, they provide
                excellent clarity and durability, ensuring safe storage of liquids and powders.
                Available in various sizes and closure options, these vials support
                customization to meet specific packaging needs while maintaining product safety.
              </p>
            </div>
          </div>

          {/* Bottles */}
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto 4rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div style={{ flex: '1', minWidth: '300px' }}>
              <Image
                src="/img/photos/image (5).jpg" // Update with appropriate image path
                alt="Bottles"
                width={500}
                height={300}
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#1a1a1a',
                }}
              >
                Bottles
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Our glass bottles offer robust and elegant packaging solutions for beverages,
                cosmetics, and food products. Manufactured from high-grade glass, they ensure
                product freshness and safety while enhancing shelf appeal. Available in a range
                of shapes, sizes, and finishes, these bottles are customizable to align with
                brand aesthetics and functional requirements.
              </p>
            </div>
          </div>
        </section>

        {/* ========== fact section ========== */}
        <Facts7 />

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== testimonial section ========== */}
            <TestimonialCard4 className="mt-n18 mt-md-n23 mb-14 mb-md-18" />

            {/* ========== about section ========== */}
            <About11 />

            {/* ========== contact section ========== */}
            <Contact5 />

            {/* ========== clients section ========== */}
            <div className="px-lg-5">
              <Clients1 />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo10;