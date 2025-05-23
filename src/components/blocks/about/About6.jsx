import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn'; // -------- data -------- //
import { aboutList2 } from 'data/about';

const About6 = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center justify-content-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6 align-items-center">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3">About Export Global</h2>

        <p className="lead fs-lg">
          Welcome to Access Exports, a leader in international trade, specializing in the export of a diverse range of high-quality products, from agricultural goods to industrial machinery.
        </p>

        <p className="lead mb-6">
          Founded in 2023 in the dynamic trade hub of western India, Export Global is a premier export company offering an extensive portfolio of products, including fresh produce, textiles, electronics, automotive components, and heavy machinery. Our team of seasoned trade specialists, logistics experts, and strategic planners is dedicated to delivering tailored solutions that ensure efficiency, reliability, and value for our global clients.
        </p>

        <p className="lead mb-6">
          At Export Global, we pride ourselves on our ability to source and deliver a wide variety of products that meet the highest international standards. Our comprehensive services encompass product sourcing, quality assurance, international shipping, customs compliance, and end-to-end supply chain optimization. We build lasting partnerships based on trust, transparency, and a commitment to driving sustainable growth for businesses worldwide.
        </p>

        <p className="lead mb-6">
          Our mission is to empower businesses by providing seamless access to global markets through our diverse product offerings. We are committed to integrity, innovation, and environmental responsibility, adhering to international trade regulations and sustainable practices while investing in our workforce and local communities.
        </p>

        <p className="lead mb-6">
          Looking ahead, Export Global is embracing advanced technologies, expanding our global network, and continuously adapting to the evolving demands of international trade. Join us in exploring how our expertise, diverse product range, and customer-centric approach can elevate your business to new heights in the global marketplace.
        </p>

        <ListColumn list={aboutList2} />
      </div>
    </div>
  );
};

export default About6;