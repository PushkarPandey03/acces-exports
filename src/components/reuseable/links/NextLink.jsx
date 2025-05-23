import Link from 'next/link';

// ==============================================================
const NextLink = props => {
  const {
    href,
    className,
    title
  } = props;
  return <Link href={href} className={className} style={{ color: '#111' }}>
      {title}
    </Link>;
};

export default NextLink;