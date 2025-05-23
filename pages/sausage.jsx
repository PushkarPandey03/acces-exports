import { Fragment } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const Demo1 = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header style={{ backgroundColor: '#f3f8fc', padding: '1rem 0' }}>
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

        {/* Full-Width Image */}
        <div style={{ marginBottom: '1rem', padding: '0 1rem' }}>
          <Image
            src="/img/cardimg/sausages-header.jpg" // Update with appropriate image path
            alt="Sausages Header"
            layout="responsive"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Brief Information about Sausages */}
        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            At export Internationals, we offer a premium range of sausages crafted for exceptional
            flavor and quality. From spicy to savory, our sausages cater to diverse culinary
            preferences, ensuring satisfaction for every palate.
          </p>
        </div>
      </header>

      {/* ========== main content ========== */}
      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* ========== sausages section ========== */}
        <section
          style={{
            padding: '4rem 2rem',
            backgroundColor: '#ffffff',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          <div className="container">
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
                SAUSAGES
              </h1>
            </div>

            {/* Replaced Product List with Image */}
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto 4rem',
                textAlign: 'center',
              }}
            >
              <Image
                src="/img/photos/WhatsApp Image 2025-04-13 at 08.56.57_00b6b7cc.jpg" // Update this path with the actual path to your sauces image
                alt="Sauces Collection"
                layout="responsive"
                width={1200}
                height={1600}
                style={{
                  borderRadius: '10px',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo1;