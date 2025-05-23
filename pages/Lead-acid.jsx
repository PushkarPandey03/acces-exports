import { Fragment } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const Demo6 = () => {
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
            src="/img/cardimg/lead-acid-battery-header.jpg" // Update with appropriate image path
            alt="Lead Acid Battery Header"
            layout="responsive"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Brief Information about Lead Acid Batteries */}
        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            At export Internationals, we provide high-performance lead acid batteries engineered
            for reliability and efficiency. Our innovative battery solutions power diverse
            applications, from automotive to industrial systems, ensuring durability and
            customer satisfaction.
          </p>
        </div>
      </header>

      {/* ========== main content ========== */}
      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* ========== lead acid battery section ========== */}
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
                LEAD ACID BATTERY
              </h1>
            </div>

            {/* Sealed Lead Acid Batteries */}
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
                src="/img/photos/image (9).jpg" // Update with appropriate image path
                alt="Sealed Lead Acid Batteries"
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
                  Sealed Lead Acid Batteries
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Our Sealed Lead Acid (SLA) Batteries are designed for maintenance-free
                  operation, offering reliable power for applications like UPS systems, emergency
                  lighting, and telecommunications. Built with robust lead plates and a sealed
                  electrolyte system, these batteries ensure safety, longevity, and consistent
                  performance across demanding environments.
                </p>
              </div>
            </div>

            {/* Flooded Lead Acid Batteries */}
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
                src="/img/photos/image (10).jpg" // Update with appropriate image path
                alt="Flooded Lead Acid Batteries"
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
                  Flooded Lead Acid Batteries
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Our Flooded Lead Acid Batteries deliver high-capacity power for automotive,
                  industrial, and renewable energy applications. Featuring a liquid electrolyte
                  and durable lead plates, these batteries offer excellent energy density and
                  rechargeability. Designed for easy maintenance, they provide cost-effective
                  solutions for heavy-duty power needs.
                </p>
              </div>
            </div>

            {/* Battery Components */}
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
                src="/img/photos/image (11).jpg" // Update with appropriate image path
                alt="Battery Components"
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
                  Battery Components
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Our Battery Components, including high-purity lead plates, electrolytes, and
                  separators, are engineered for optimal performance in lead acid batteries.
                  Designed to enhance efficiency and durability, these components ensure reliable
                  power delivery and extended service life, supporting a wide range of
                  industrial and automotive applications.
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

export default Demo6;