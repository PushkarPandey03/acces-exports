import { Fragment } from 'react'; // -------- custom component -------- //

import { Team3 } from 'components/blocks/team';
import { About6 } from 'components/blocks/about';
import { Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Contact7 } from 'components/blocks/contact';
import { Testimonial5 } from 'components/blocks/testimonial';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import { Hero99} from 'components/blocks/hero';


const Whoweare = () => {
  return <Fragment>
      {
      /* header section */
    }
      <header className="wrapper bg-gray">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== page title section ========== */
      }
      <Hero99 />
        {/* <section className="wrapper bg-gray">
          <div className="container pt-10 pt-md-14 text-center">
            <div className="row">
              <div className="col-xl-6 mx-auto">
                <h1 className="display-1 mb-4 text-uppercase text-gradient gradient-8 mb-3">Who we Are</h1>
                <p className="lead fs-lg mb-0"></p>
              </div>
            </div>
          </div>

          <FigureImage width={2800} height={1000} src="/img/photos/bg12.jpg" className="position-absoute" style={{
          bottom: 0,
          left: 0,
          zIndex: 2
        }} />
        </section> */}

        <section className="wrapper bg-light  upper-end lower-end">
          <div className="container py-7 py-md-8">
            {
            /* ========== about section ========== */
          }
            <About6 />

            {
            /* ========== process section ========== */
          }
            {/* <Process7 /> */}
      

          </div>
        </section>

        {
        /* ========== testimonial section ========== */
      }
        {/* <Testimonial5 /> */}

        {
        /* ========== team section ========== */
      }
        {/* <Team3 /> */}

        {
        /* ========== facts section ========== */
      }
        {/* <Facts5 /> */}

        {
        /* ========== contact section ========== */
      }
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer8 />
    </Fragment>;
};

export default Whoweare;