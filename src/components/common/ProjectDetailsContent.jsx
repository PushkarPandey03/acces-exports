import NextLink from 'components/reuseable/links/NextLink'; // =======================================================

// =======================================================
const ProjectDetailsContent = ({
  title,
  contentRowClass = 'row gx-0',
  titleClass = 'display-6 mb-4'
}) => {
  return <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2 className={titleClass}>{title}</h2>

        <div className={contentRowClass}>
          <div className="col-md-9 text-justify">
            <p>
            export Internationals provides a comprehensive range of cutting-edge chemicals specifically formulated for oilfield and refinery applications. These solutions are engineered to address the unique challenges faced in the oil and gas industry, including extreme conditions, complex operations, and the need for high performance
            </p>
            <p>
           Our chemicals are designed to enhance the efficiency and safety of various processes in the oilfield and refinery sectors. Whether it's in drilling, production, refining, or maintenance, our products are developed to deliver consistent, reliable results that boost overall productivity.

            </p>
          </div>

          <div className="col-md-2 ms-auto">
            <ul className="list-unstyled">
              <li>
                <h5 className="mb-1"></h5>
                <p></p>
              </li>

              <li>
                <h5 className="mb-1"></h5>
                <p></p>
              </li>
            </ul>

            {/* <NextLink title="See Project" href="#" className="more hover" /> */}
          </div>
        </div>
      </div>
    </div>;
};

export default ProjectDetailsContent;