import Image from 'next/image';
import { Fragment } from 'react';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const ProjectDetails = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* Navbar Section */}
      <Navbar
        language
        button={
          <NextLink
            title="Contact"
            href="#"
            className="btn btn-sm btn-primary rounded-pill"
          />
        }
      />

      {/* Header Section */}
      <header style={{ backgroundColor: '#f3f8fc', padding: '1rem 0' }}>
        {/* Full-Width Image */}
        <div style={{ marginBottom: '1rem', padding: '0 1rem' }}>
          <Image
            src="/img/cardimg/closures-header.jpg" // Update with appropriate image path
            alt="Closures Header"
            layout="responsive"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Brief Information about Closures */}
        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            At export Internationals, we specialize in high-quality closures designed for safety,
            durability, and functionality. Our innovative closure solutions cater to diverse
            industries, ensuring product integrity and customer satisfaction.
          </p>
        </div>
      </header>

      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* Centered Heading */}
        <section style={{ padding: '4rem 2rem', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#1a1a1a',
                textTransform: 'uppercase',
              }}
            >
              CLOSURES
            </h1>
          </div>
        </section>

        {/* Closure Sections */}
        <section
          style={{
            padding: '2rem',
            backgroundColor: '#ffffff',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {/* Aluminium ROPP Caps */}
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
                src="/img/photos/image.jpg" // Update with appropriate image path
                alt="Aluminium ROPP Caps"
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
                Aluminium ROPP Caps
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Our Aluminium Roll-On Pilfer-Proof (ROPP) Caps offer a secure and tamper-evident
                sealing solution for beverages, pharmaceuticals, and spirits. Crafted from
                high-grade aluminium, these caps ensure product freshness and integrity while
                providing excellent resistance to corrosion. Available in various sizes and
                customizable finishes, they combine functionality with aesthetic appeal, making
                them ideal for premium packaging.
              </p>
            </div>
          </div>

          {/* Plastic Caps */}
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
                src="/img/photos/image (1).jpg" // Update with appropriate image path
                alt="Plastic Caps"
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
                Plastic Caps
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Our Plastic Caps are designed for versatility and durability, catering to a wide
                range of industries including food and beverage, cosmetics, and household
                products. Made from high-quality polymers, these caps offer excellent sealing
                properties and are available in screw-on, snap-on, and flip-top variants.
                Customizable in color and design, they provide a cost-effective and reliable
                closure solution.
              </p>
            </div>
          </div>

          {/* Child Resistant Caps */}
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div style={{ flex: '1', minWidth: '300px' }}>
              <Image
                src="/img/photos/image (2).jpg" // Update with appropriate image path
                alt="Child Resistant Caps"
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
                Child Resistant Caps
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Child Resistant Caps are engineered to enhance safety by preventing unauthorized
                access, making them ideal for pharmaceuticals, chemicals, and other sensitive
                products. These caps feature a dual-action mechanism requiring specific motions
                to open, ensuring compliance with safety regulations. Available in various sizes
                and materials, they offer robust protection without compromising ease of use for
                adults.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;