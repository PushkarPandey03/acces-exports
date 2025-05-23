// pages/_app.js
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import ThemeProvider if it uses client-side APIs
const ThemeProvider = dynamic(() => import('theme/ThemeProvider'), { ssr: false });

// Dynamically import CSS to avoid SSR issues
const loadStyles = async () => {
  if (typeof window === 'undefined') return;

  await import('animate.css');
  await import('swiper/css');
  await import('swiper/css/free-mode');
  await import('swiper/css/navigation');
  await import('swiper/css/pagination');
  await import('swiper/css/thumbs');
  await import('plyr-react/plyr.css');
  await import('glightbox/dist/css/glightbox.css');
  await import('plugins/scrollcue/scrollCue.css');
  await import('assets/scss/style.scss');
};

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Load Bootstrap and ScrollCue on client side
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load styles
    loadStyles();

    // Load Bootstrap
    import('bootstrap');

    // Load ScrollCue
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  // Manage loading status
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sandbox - Modern & Multipurpose NextJS Template</title>
      </Head>

      <ThemeProvider>
        {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;