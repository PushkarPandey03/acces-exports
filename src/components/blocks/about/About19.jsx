import { Fragment } from 'react';
import { Tiles11 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn'; // -------- data -------- //

import { aboutList2, aboutList3 } from 'data/about';

const About19 = () => {
  return (
    <Fragment>
      <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
        <div className="col-lg-11">
          <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3"></h2>
          <h3 className="display-4 mb-2 text-uppercase text-gradient gradient-8 mb-5 text-center">
            Welcome to the Forefront of Global Product Exports
          </h3>
          <p className="mb-6">
            Access Exports is a global leader in the export of diverse products, established in India in 2023.
            <br />
            We offer a wide range of products including fresh produce, textiles, electronics, automotive components, and heavy machinery, along with services like product sourcing, international shipping, and supply chain optimization.
            <br />
            Our expert team and global network provide specialized solutions to boost productivity and profitability for businesses worldwide.
          </p>

          {/* <ListColumn rowClass="gx-xl-8" list={aboutList2} /> */}
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-18">
        {aboutList3.map(({ id, title, description }) => (
          <div className="col-lg-4" key={id}>
            <div className="d-flex flex-row">
              <div>
                <div className="icon btn btn-circle pe-none btn-soft-primary me-4">
                  <span className="number fs-18">{id}</span>
                </div>
              </div>

              <div>
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default About19;