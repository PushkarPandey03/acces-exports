import { Fragment } from 'react';
import { serviceList10 } from 'data/service';
import NextLink from 'next/link'; // Import the Next.js Link component

const Services20 = () => {
  return (
    <Fragment>
      {/* Heading Section */}
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h1 className="fs-32 text-uppercase text-gradient gradient-7 mb-3" style={{ color: 'white', fontWeight: 'bold' }}>
          </h1>
          <h5 className="display-4 mb-9 px-xl-09" style={{ color: 'white', fontWeight: 'bold' }}>
            Explore our diverse range of services
          </h5>
        </div>
      </div>

      {/* Card Section */}
      <div className="row gy-8 mb-17">
        {serviceList10.map(({ id, title, backgroundImage, linkUrl }) => (
          <div className="col-md-6 col-lg-4" key={id} style={{ marginBottom: '30px' }}>
            {/* Wrap each card with a NextLink to make it clickable */}
            <NextLink href={linkUrl} passHref>
              <div
                className="service-card"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  padding: '30px',
                  margin: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '250px',
                  width: '100%',
                  height: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(73, 7, 7, 0.1)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div className="service-card-content">
                  <h3
                    className="service-title"
                    style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      margin: '0 auto',
                      textAlign: 'center',
                    }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            </NextLink>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Services20;
