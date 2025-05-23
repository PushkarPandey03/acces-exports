import { Fragment } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const StainlessSteelWires = () => {
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
            src="/img/stainless-steel/stainless-steel-header.jpg"
            alt="Stainless Steel Wires Header"
            layout="responsive"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Brief Information about Stainless Steel Wires */}
        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            At export Internationals, we offer a premium range of stainless steel wires engineered
            for durability, precision, and versatility. From industrial applications to specialized
            uses, our wires meet the highest standards for quality and performance.
          </p>
        </div>
      </header>

      {/* ========== main content ========== */}
      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* ========== stainless steel wires section ========== */}
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
                STAINLESS STEEL WIRES
              </h1>
            </div>

            {/* Spring Wire */}
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
                src="/img/photos/image (12).jpg" // Update with appropriate image path
                alt="Spring Wire"
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
                  Spring Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Our Spring Wire is designed for high-strength and elasticity, perfect for
                  manufacturing springs in automotive, aerospace, and industrial applications.
                  Crafted with precision, it ensures consistent performance and durability under
                  stress.
                </p>
              </div>
            </div>

            {/* Fine Wire */}
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
                src="/img/photos/image (13).jpg" // Update with appropriate image path
                alt="Fine Wire"
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
                  Fine Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Fine Wire is engineered for precision applications, such as medical devices and
                  electronics. Its ultra-thin diameter and high corrosion resistance make it ideal
                  for intricate, high-performance uses.
                </p>
              </div>
            </div>

            {/* Electro Polish Wire */}
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
                src="/img/photos/electropolishing.jpeg" // Update with appropriate image path
                alt="Electro Polish Wire"
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
                  Electro Polish Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Electro Polish Wire offers a smooth, polished surface for enhanced aesthetics and
                  corrosion resistance. Perfect for medical and food-grade applications, it ensures
                  hygiene and durability in demanding environments.
                </p>
              </div>
            </div>

            {/* Lashing Wire */}
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
                src="/img/photos/image (14).jpg" // Update with appropriate image path
                alt="Lashing Wire"
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
                  Lashing Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Lashing Wire is designed for securing cables in telecommunications and utility
                  applications. Its high tensile strength and flexibility ensure reliable
                  performance in outdoor and harsh conditions.
                </p>
              </div>
            </div>

            {/* Free Cutting Wire */}
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
                src="/img/photos/image (15).jpg" // Update with appropriate image path
                alt="Free Cutting Wire"
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
                  Free Cutting Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Free Cutting Wire is optimized for machining processes, offering excellent
                  cutability and precision. Ideal for manufacturing components in automotive and
                  industrial sectors, it ensures efficiency and quality.
                </p>
              </div>
            </div>

            {/* Cold Heading Wire */}
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
                src="/img/photos/image (16).jpg" // Update with appropriate image path
                alt="Cold Heading Wire"
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
                  Cold Heading Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Cold Heading Wire is crafted for forming fasteners and components through cold
                  forging. Its high strength and formability make it essential for producing
                  reliable bolts, screws, and other industrial parts.
                </p>
              </div>
            </div>

            {/* Redraw Wire */}
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
                src="/img/photos/image (17).jpg" // Update with appropriate image path
                alt="Redraw Wire"
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
                  Redraw Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Redraw Wire is designed for further processing into finer wires. Its consistent
                  quality and versatility make it ideal for manufacturers requiring customized wire
                  diameters for specialized applications.
                </p>
              </div>
            </div>

            {/* Vine Yard Wire */}
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
                src="/img/photos/image (18).jpg" // Update with appropriate image path
                alt="Vine Yard Wire"
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
                  Vine Yard Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Vine Yard Wire is tailored for agricultural use, particularly in vineyards for
                  trellising. Its corrosion resistance and durability ensure long-lasting support
                  for vines in various weather conditions.
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

export default StainlessSteelWires;