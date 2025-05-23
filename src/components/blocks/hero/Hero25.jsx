import Carousel from 'components/reuseable/Carousel';
import { BlogCard5 } from 'components/reuseable/blog-cards';
import { blogList5 } from 'data/blog';

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

const Hero25 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    touchMove: true,
    centerMode: false, // Ensure no centering to avoid extra margins
    nextArrow: <CustomNextArrow />, // Pass the custom next arrow
    prevArrow: <CustomPrevArrow />, // Pass the custom previous arrow
  };

  const carouselBreakpoints = {
    0: {
      slidesPerView:1,
    },
    500:{
      slidesPerView:2,
    },
    992: {
      slidesPerView: 3,
    },
  };

  return (
    <div
      className="swiper-container blog grid-view mb-8 mx-10"
      style={{
        padding: 0, // No padding
        margin: '0 auto', // Center the carousel container
        maxWidth: '100%', // Ensure it spans the full width
      }}
    >

      
      <Carousel {...settings} breakpoints={carouselBreakpoints}>
        {blogList5.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '0', // Remove any padding between items
              margin: '0', // Remove any margin
            }}
          >
            <BlogCard5 {...item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero25;
