import { Fragment } from 'react';
import CountUp from 'react-countup';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import useReplaceMe from 'hooks/useReplaceMe';
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
import Layers from 'icons/solid/Layers';
import useLightBox from 'hooks/useLightBox';
import Safe from 'icons/solid/Safe';
import Share from 'icons/solid-mono/Share';
import Puzzle from 'icons/solid-mono/Puzzle';
import PenTool from 'icons/solid-duo/PenTool';
import Devices from 'icons/solid-mono/Devices';
import GlobeTwo from 'icons/solid-mono/GlobeTwo';
import Demo18 from './demo-18';

const Home = () => {
  // used for hero area text change
  useReplaceMe(); // use for show popup on the images

  useLightBox();
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }


     <Demo18></Demo18>
     

    </Fragment>;
};

export default Home;