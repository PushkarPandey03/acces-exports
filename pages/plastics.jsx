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
            src="/img/cardimg/basmati-rice.jpg"
            alt="Basmati Rice 1121 Header"
            layout="responsive"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Brief Information about Basmati Rice 1121 */}
        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            Discover the finest Basmati Rice 1121, known for its exceptional aroma, long grains, and superior quality. 
            Sourced from the best regions, it’s the perfect choice for gourmet dishes.
          </p>
        </div>
      </header>

      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* Centered Heading and Information */}
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
              BASMATI RICE 1121
            </h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                textAlign: 'left',
              }}
            >
              {/* Image of Basmati Rice 1121 */}
              <Image
                src="/img/photos/image (21).jpg" // Update with appropriate image path
                alt="Basmati Rice 1121"
                width={400}
                height={300}
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
              
              {/* Information about Basmati Rice 1121 */}
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  listStyleType: 'disc',
                  color: '#333',
                  fontSize: '1.3rem',
                  lineHeight: '1.8',
                  maxWidth: '600px',
                }}
              >
                <li><strong>Grain Length:</strong> Extra-long grains, averaging 8.3mm, perfect for premium dishes.</li>
                <li><strong>Aroma:</strong> Distinctive nutty fragrance that enhances culinary experiences.</li>
                <li><strong>Texture:</strong> Non-sticky and fluffy when cooked, ideal for biryanis and pilafs.</li>
                <li><strong>Origin:</strong> Sourced from the fertile regions of Punjab, India.</li>
                <li><strong>Quality:</strong> 100% pure, aged for 1-2 years to enhance flavor and texture.</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: '4rem 2rem',
            backgroundColor: '#ffffff',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {/* Additional content can go here if needed */}
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;