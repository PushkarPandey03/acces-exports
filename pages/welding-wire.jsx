import { Fragment } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer16 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const Demo25 = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" social />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== welding wires section ========== */}
        <section
          style={{
            padding: '4rem 2rem',
            backgroundColor: '#ffffff',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          <div className="container">
            {/* Full-Width Image */}
            <div style={{ marginBottom: '1rem', padding: '0 1rem' }}>
              <Image
                src="/img/welding/welding-header.jpg"
                alt="Welding Wires Header"
                layout="responsive"
                width={1920}
                height={200}
                style={{
                  borderRadius: '15px',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Brief Information about Welding Wires */}
            <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
              <p style={{ fontSize: '1.4rem', color: '#555' }}>
                At export Internationals, we offer a premium range of welding wires engineered
                for precision, strength, and reliability. Our wires cater to various welding
                applications, ensuring superior performance and quality welds.
              </p>
            </div>

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
                WELDING WIRES
              </h1>
            </div>

            {/* TIG Wire */}
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
                src="/img/photos/image (19).jpg" // Update with appropriate image path
                alt="TIG Wire"
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
                  TIG Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Our TIG Wire is crafted for precision welding, ideal for applications requiring
                  clean, high-quality welds. Perfect for aerospace, automotive, and industrial
                  uses, it offers excellent control and durability in TIG welding processes.
                </p>
              </div>
            </div>

            {/* MIG Wire */}
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
                src="/img/photos/image (20).jpg" // Update with appropriate image path
                alt="MIG Wire"
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
                  MIG Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  MIG Wire is designed for versatility and efficiency in MIG welding. Suitable for
                  automotive repairs, construction, and manufacturing, it provides consistent
                  feeding and strong welds, enhancing productivity and weld quality.
                </p>
              </div>
            </div>

            {/* Core Wire */}
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
                  src="/img/photos/digwire.jpeg"
                  alt="Core Wire"
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
                  Core Wire
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Core Wire, including flux-cored varieties, is engineered for high-deposition
                  welding in challenging environments. Ideal for construction and heavy industry,
                  it ensures robust welds with excellent penetration and minimal spatter.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer16 />
    </Fragment>
  );
};

export default Demo25;