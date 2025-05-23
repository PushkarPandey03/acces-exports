import dayjs from 'dayjs';
import Link from 'next/link';
import NextLink from '../links/NextLink'; // ======================================================

// ======================================================
const BlogCard5 = props => {
  const {
    image,
   
  } = props;
  return <figure className="overlay caption caption-overlay rounded mb-0">
      <Link href="#" passHref legacyBehavior>
        <a>
          <img src={image} alt="" />
          <span className="bg" />
        </a>
      </Link>


    </figure>;
};

export default BlogCard5;