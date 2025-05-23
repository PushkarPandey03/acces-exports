import { Fragment } from 'react'; // -------- custom hook -------- //

import useProgressbar from 'hooks/useProgressbar'; // -------- custom component -------- //

import { Hero18} from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import {  Contact7,  } from 'components/blocks/contact';
import { Services20 } from 'components/blocks/services';
import {  About19 } from 'components/blocks/about';
import PageProgress from 'components/common/PageProgress';


const Demo18 = () => {
  // used for the animated line
  useProgressbar();
  return <Fragment>
      <PageProgress />

      {
      /* ========== header ========== */
    }
      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      {
      /* ========== main content ========== */
    }
      <main className="content-wrapper">
        {
        /* ========== hero section ========== */
      }

        <Hero18 />



        <section className="wrapper bg-light">
          <div className="container pt-14 pt-md-17">
            {
            /* ========== what we do section ========== */
          }
          <About19 />
            

            {
            /* ========== have perfect section ========== */
          }
          <Services20 />
  

            {
            /* ========== what makes section ========== */
          }
    
          {/* <Contact7 /> */}

          </div>
        </section>
        </main>

      <Footer11 />
    </Fragment>;
};

export default Demo18;