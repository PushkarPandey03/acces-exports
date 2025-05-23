// pages/basmati-rice.jsx
import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import components
const Navbar = dynamic(() => import('components/blocks/navbar'), { ssr: false });
const Footer8 = dynamic(() => import('components/blocks/footer'), { ssr: false });
const PageProgress = dynamic(() => import('components/common/PageProgress'), { ssr: false });

// Safe component
import NextLink from 'components/reuseable/links/NextLink';

const ProjectDetails = () => {
  return (
    <Fragment>
      <PageProgress />

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

      <header style={{ backgroundColor: '#f3f8fc', padding: '1rem 0' }}>
        <div style={{ marginBottom: '1rem', padding: '0 1rem' }}>
          <Image
            src="/img/cardimg/basmati-rice.jpg"
            alt="Basmati Rice 1121 Header"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
            }}
            priority
          />
        </div>

        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            Discover the finest Basmati Rice 1121, known for its exceptional aroma, long grains, and superior quality. 
            Sourced from the best regions, it’s the perfect choice for gourmet dishes.
          </p>
        </div>
      </header>

      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
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
              <Image
                src="/img/photos/image-21.jpg"
                alt="Basmati Rice 1121"
                width={400}
                height={300}
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
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
          {/* Additional content can go here */}
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;

export async function getStaticProps() {
  try {
    return {
      props: {},
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {},
    };
  }
}