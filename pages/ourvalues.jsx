import { Fragment } from 'react'; // -------- custom component -------- //

import { Team8 } from 'components/blocks/team';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Clients1 } from 'components/blocks/clients';
import { Process8 } from 'components/blocks/process';
import Carousel from 'components/reuseable/Carousel';
import ProgressList from 'components/common/ProgressList';
import NextLink from 'components/reuseable/links/NextLink';
import AccordionList from 'components/common/AccordionList';
import { TestimonialCard2 } from 'components/reuseable/testimonial-cards'; // -------- icons component -------- //

import Target from 'icons/lineal/Target';
import BarChart from 'icons/lineal/BarChart';
import Megaphone from 'icons/lineal/Megaphone';
import SettingsThree from 'icons/lineal/SettingsThree'; // -------- data -------- //

import { testimonialList2 } from 'data/testimonial-list';
const serviceList2 = [{
  id: 1,
  title: 'Marketing',
  Icon: <Megaphone />,
  description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
}, {
  id: 2,
  title: 'Strategy',
  Icon: <Target className="icon-svg-md text-green mb-3" />,
  description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
}, {
  id: 3,
  title: 'Development',
  Icon: <SettingsThree />,
  description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
}, {
  id: 4,
  Icon: <BarChart />,
  title: 'Data Analysis',
  description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
}];

const Ourvalues = () => {
  return <Fragment>
      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== page title section ========== */
      }
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-25 pt-md-14 pb-md-23 text-center">
            <div className="row">
              <div className="col-xl-5 mx-auto mb-6">
                <h1 className="display-1 mb-3 text-gradient gradient-8">Our Values</h1>
               
              </div>
            </div>
          </div>
        </section>

        {
        /* ========== services section ========== */
      }
        <section className="wrapper bg-light">
          <div className="container pb-12 pb-md-4">
            <div className="row text-center mb-12 mb-md-15">
              <div className="col-md-12 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
                <figure>
                  <img alt="" className="w-auto" src="/img/photos/bg12.jpg" srcSet="/img/photos/bg12.jpg" />
                </figure>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
              {/* <div className="col-lg-6 order-lg-2">
                <ProgressList />
              </div> */}

              <div className="col-lg-20 text-center">
                <h3 className="display-5 mb-5 text-uppercase text-gradient gradient-8 mb-3">
                Business, as I have seen it, places one great demand on you: it needs
                you to self-impose a framework of ethics, values, fairness and
                objectivity on yourself at all times.” - Ratan N Tata
                </h3>

                
              </div>
            </div>

            {/* <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
              {serviceList2.map(({
              id,
              Icon,
              title,
              description
            }) => <div className="col-md-6 col-lg-3" key={id}>
                  {Icon}
                  <h4>{title}</h4>
                  <p className="mb-2">{description}</p>
                </div>)}
            </div> */}
          </div>
        </section>

        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-5">
            {
            /* ========== how it work section ========== */
          }
            {/* <Process8 /> */}

            {
            /* ========== why choose us section ========== */
          }
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7 order-lg-2">
                <figure>
                  <img alt="" className="w-auto" src="" />
                </figure>
              </div>

              <div className="col-lg-12">
                <h2 className="fs-15 text-uppercase text-line text-primary mb-3">CODE OF VALUES</h2>
                <h3 className="display-5 mb-7">A few reasons why our valued customers choose us.</h3>
                <AccordionList />
              </div>
            </div>
          </div>
        </section>

        {
        /* ========== team section ========== */
      }
        {/* <Team8 /> */}

        <section className="wrapper bg-gray">
          {/* <div className="container py-14 py-md-16"> */}
            {
            /* ========== testimonial section ========== */
          }
            {/* <div className="row gx-lg-8 gx-xl-12 gy-6 mb-15 align-items-center">
              <div className="col-lg-7 order-lg-2">
                <figure>
                  <img alt="" className="w-auto" src="/img/illustrations/i4.png" srcSet="/img/illustrations/i4@2x.png 2x" />
                </figure>
              </div>

              <div className="col-lg-5 mt-lg-12">
                <div className="swiper-container dots-closer mb-6">
                  <Carousel grabCursor slidesPerView={1} navigation={false}>
                    {testimonialList2.map((item, i) => <TestimonialCard2 key={i} {...item} />)}
                  </Carousel>
                </div>
              </div>
            </div> */}

            {
            /* ========== clients section ========== */
          }
            {/* <div className="px-lg-5">
              <Clients1 />
            </div> */}
          {/* </div> */}
        </section>

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

export default Ourvalues;