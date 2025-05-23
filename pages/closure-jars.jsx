import { Fragment } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const Demo28 = () => {
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
            src="/img/cardimg/closures-jars-header.jpg" // Update with appropriate image path
            alt="Closures and Jars Header"
            layout="responsive"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Brief Information about Closures and Jars */}
        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            At export Internationals, we specialize in high-quality closures and jars designed
            for durability, functionality, and aesthetic appeal. Our innovative packaging
            solutions cater to diverse industries, ensuring product safety and customer
            satisfaction.
          </p>
        </div>
      </header>

      {/* ========== main content ========== */}
      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* ========== closures and jars section ========== */}
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
                CLOSURES AND JARS
              </h1>
            </div>

            {/* Lug Caps */}
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
                src="/img/photos/image (6).jpg" // Update with appropriate image path
                alt="Lug Caps"
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
                  Lug Caps
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Our Lug Caps, also known as twist-off caps, provide a secure and user-friendly
                  sealing solution for glass jars and bottles. Crafted from high-quality metal
                  with a corrosion-resistant coating, these caps ensure airtight preservation
                  for food products like jams, sauces, and pickles. Available in various sizes
                  and finishes, they combine durability with ease of use, enhancing product
                  shelf life and appeal.
                </p>
              </div>
            </div>

            {/* Olive Oil Caps */}
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
                src="/img/photos/image (7).jpg" // Update with appropriate image path
                alt="Olive Oil Caps"
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
                  Olive Oil Caps
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Our Olive Oil Caps are designed for premium functionality and aesthetic
                  appeal, tailored for the edible oil industry. Made from durable materials,
                  these caps feature pourer inserts and tamper-evident seals to ensure product
                  freshness and safety. Available in customizable designs, they enhance the
                  user experience while protecting high-value products like olive oil from
                  contamination and spillage.
                </p>
              </div>
            </div>

            {/* Jars */}
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
                src="/img/photos/image (8).jpg" // Update with appropriate image path
                alt="Jars"
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
                  Jars
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Our glass jars offer versatile and reliable packaging for food, cosmetics, and
                  specialty products. Crafted from high-quality glass, they provide excellent
                  clarity and durability, ensuring product safety and visual appeal. Available
                  in a variety of shapes and sizes, these jars are compatible with our range of
                  closures, making them ideal for customized, high-quality packaging solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo28;