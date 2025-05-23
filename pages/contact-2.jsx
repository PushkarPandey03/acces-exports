import { Fragment } from 'react';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';

const ContactTwo = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* Header Section */}
      <header className="wrapper bg-soft-primary">
        <Navbar language button={<a href="#" className="btn btn-sm btn-primary rounded-pill">Contact</a>} />
      </header>

      {/* Main Section */}
      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 mb-3">Get in Touch with Us</h1>
                <ContactForm />
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

export default ContactTwo;
