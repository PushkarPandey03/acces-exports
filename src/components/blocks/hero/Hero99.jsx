import React from 'react';

const Hero99 = () => {
  const singleImage = {
    image: '/img/photos/whoweare.jpeg',
    heading: 'export',
  };

  return (
    <section className="wrapper bg-light" style={{ margin: '0 25px', textAlign: 'center' }}>
      <figure className="rounded-container">
        <div
          className="card image-wrapper rounded"
          style={{
            backgroundImage: `url(${singleImage.image})`,
            // Adjust height based on viewport for responsiveness
            height: typeof window !== 'undefined' && window.innerWidth > 768 ? '50vh' : '25vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 'inherit',
            }}
          />
          <h1
            className="display-2"
            style={{
              zIndex: 2,
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            {singleImage.heading}
          </h1>
        </div>
      </figure>

      <style jsx>{`
        .rounded-container {
          padding: 10px;
          border-radius: 15px;
          overflow: hidden; 
        }

        .image-wrapper {
          background-size: cover;
          background-position: center;
          border-radius: 15px;
        }

        @media (max-width: 768px) {
          .image-wrapper {
            border-radius: 10px;
          }
          .display-2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .image-wrapper {
            border-radius: 8px;
          }
          .display-2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero99;
