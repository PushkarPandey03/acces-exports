import { Fragment } from 'react'; // -------- custom component -------- //

import { Footer8 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import { Portfolio1 } from 'components/blocks/portfolio';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';

const ProjectDetails = () => {
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar language stickyBox={false} logoAlt="logo-light" navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark" button={<NextLink title="Contact" href="#" className="btn btn-sm btn-white rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== heading section ========== */
      }
        <section className="wrapper image-wrapper bg-image bg-overlay text-white" style={{
        backgroundImage: 'url()'
      }}>
          <div className="container pt-17 pb-12 pt-md-19 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line text-white">
                    <NextLink title="export" href="#" className="text-reset" />
                  </div>

                  <h1 className="display-1 mb-3 text-white">Engineering Services</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                  export Internationals offers comprehensive engineering services from basic design to plant commissioning, including procurement, 3D modeling, instrumentation, piping, civil design, site work, and energy management.  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {
        /* ========== navigation section ========== */
      }
        <ProjectDetailsNavigation />
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer8 />
    </Fragment>;
};

export default ProjectDetails;