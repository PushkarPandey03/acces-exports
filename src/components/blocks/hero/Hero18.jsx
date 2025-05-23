import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="slick-prev slick-arrow"
    style={{
      display: 'block',
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '50%',
      border: 'none',
      width: '40px',
      height: '40px',
      color: '#fff',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    &#10094;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    type="button"
    className="slick-next slick-arrow"
    style={{
      display: 'block',
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '50%',
      border: 'none',
      width: '40px',
      height: '40px',
      color: '#fff',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    &#10095;
  </button>
);

const Hero18 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    swipeToSlide: true,
    touchMove: true,
    centerMode: true,
    centerPadding: '0px',
  };

  const slides = [
    {
      id: 1,
      image: '/img/photos/bg28.jpg',
      heading: 'Innovative Solutions',
    },
    {
      id: 2,
      image: '/img/photos/bg29.jpg',
      heading: 'Connecting the World',
    },
    {
      id: 3,
      image: '/img/photos/bg30.jpg',
      heading: 'Empowering Businesses',
    },
    {
      id: 4,
      image: '/img/photos/bg31.jpg',
      heading: 'Driving Innovation',
    },
  ];

  return (
    <section className="wrapper bg-light" style={{ margin: '0 25px', textAlign: 'center' }}>
      <Slider {...settings}>
  {slides.map((slide) => (
    <figure key={slide.id} className="rounded-container">
      <div
        className="card image-wrapper rounded"
        style={{
          backgroundImage: `url(${slide.image})`,
          height: window.innerWidth > 768 ? '80vh' : '40vh', // 80vh for desktop, 40vh for mobile
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden', // Ensure the border radius is respected
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
            borderRadius: 'inherit', // Ensure overlay respects border radius
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
          {slide.heading}
        </h1>
      </div>
    </figure>
  ))}
</Slider>

      <style jsx>{`
        .rounded-container {
          padding: 10px;
          border-radius: 15px;
          overflow: hidden; /* Prevents overflow and maintains the rounded corners */
        }

        .image-wrapper {
          background-size: cover;
          background-position: center;
          border-radius: 15px; /* Apply consistent border radius */
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

export default Hero18;
