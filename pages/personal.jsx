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
            src="/img/cardimg/homecarebss.jpg"
            alt="export Header"
            layout="responsive"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Brief Information about export */}
        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            export Internationals is a leader in providing specialized Plastic & Rubber
            chemicals that enhance efficiency and productivity. We strive for innovation and
            excellence in every solution we deliver.
          </p>
        </div>
      </header>

      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* Centered Heading and Subpoints */}
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
  PERSONAL & HOME CARE
</h1>
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    textAlign: 'left',
  }}
>
  <ul
    style={{
      paddingLeft: '1.5rem',
      listStyleType: 'disc',
      color: '#333',
      fontSize: '1.3rem',
      lineHeight: '1.8',
    }}
  >
    <li><strong>Surfactants:</strong> Enhance cleaning and foaming properties in detergents and shampoos.</li>
    <li><strong>Emulsifiers:</strong> Stabilize mixtures of oil and water in lotions and creams.</li>
    <li><strong>Conditioning Agents:</strong> Improve hair softness and manageability in personal care products.</li>
    <li><strong>Moisturizers:</strong> Retain water to keep skin hydrated and healthy.</li>
  </ul>
  <ul
    style={{
      paddingLeft: '1.5rem',
      listStyleType: 'disc',
      color: '#333',
      fontSize: '1.3rem',
      lineHeight: '1.8',
    }}
  >
    <li><strong>Fragrances:</strong> Add pleasant scents to personal care and cleaning products.</li>
    <li><strong>Preservatives:</strong> Extend the shelf life by preventing microbial growth.</li>
    <li><strong>Thickening Agents:</strong> Improve the texture and viscosity of creams and gels.</li>
    <li><strong>Antimicrobial Agents:</strong> Reduce bacteria and ensure hygiene in personal care products.</li>
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
