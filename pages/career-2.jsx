import { Fragment } from 'react';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const CareerTwo = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* Header Section */}
      <header className="wrapper bg-soft-primary">
        <Navbar language />
      </header>

      {/* Main Content */}
      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary position-relative">
          <div className="container pt-10 pb-17 pt-md-14 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto mb-5">
                <h2 className=" text-uppercase text-muted mb-3">Join Our Team</h2>
                <h3 className="display-1 mb-6">Send Us Your Resume</h3>
                <p className=" mb-5">
                  Email: <a href="mailto:business@export.net" className="link-body">business@export.net</a>
                  <br />
                  Phone: <a href="tel:+919637422525" className="link-body">+91 9637 422525</a>
                </p>
                <p className=" text-muted">
                  We look forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer8 />
    </Fragment>
  );
};

export default CareerTwo;
