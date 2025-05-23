// pages/_app.js
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import ThemeProvider
const ThemeProvider = dynamic(() => import('theme/ThemeProvider'), { ssr: false });

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically load CSS
    Promise.all([
      import('animate.css'),
      import('swiper/css'),
      import('swiper/css/free-mode'),
      import('swiper/css/navigation'),
      import('swiper/css/pagination'),
      import('swiper/css/thumbs'),
      import('plyr-react/plyr.css'),
      import('glightbox/dist/css/glightbox.css'),
      import('plugins/scrollcue/scrollCue.css'),
      import('assets/scss/style.scss'),
    ]).catch((err) => console.error('Failed to load CSS:', err));

    // Load Bootstrap
    import('bootstrap').catch((err) => console.error('Failed to load Bootstrap:', err));

    // Load ScrollCue
    import('plugins/scrollcue')
      .then((module) => {
        const scrollCue = module.default;
        scrollCue.init({
          interval: -400,
          duration: 700,
          percentage: 0.8,
        });
        scrollCue.update();
      })
      .catch((err) => console.error('Failed to load ScrollCue:', err));
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