import IconBox from 'components/reuseable/IconBox';
import TeleMarketer from 'icons/lineal/TeleMarketer';

const Contact7 = () => {
  return <section className="wrapper bg-light angled upper-end lower-end">
      <div className="container pb-5 ">
        <div className="row  gx-xl-12 gy-10 align-items-center">
          <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative">
            <div className="shape bg-dot primary rellax w-17 h-21" style={{
            top: '-2rem',
            left: '-1.4rem'
          }} />

            <figure className="rounded">
              <img src="/img/contacthome.jpg" srcSet="/img/photos/about4@2x.jpg 2x" alt="" />
            </figure>
          </div>

          <div className="col-lg-6">
            <TeleMarketer className="icon-svg-md mb-4" />

            <h2 className="display-4 mb-8">Convinced yet? Let's make something great together.</h2>
            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-location-pin-alt" />
              </div>

              <div>
                <h5 className="mb-1">Address</h5>
                <address>
                F-705, West Coast Park,
                <br className="d-none d-md-block" />
                Shivane, Pune, MH, IND 411 023
                </address>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-phone-volume" />
              </div>

              <div>
                <h5 className="mb-1">Phone</h5>
                <p>+91 9637 422525</p>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-envelope" />
              </div>

              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0">
                  <a href="mailto:business@export.net" className="link-body">
                  business@export.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact7;