import Accordion from 'components/reuseable/accordion'; // -------- data -------- //

const accordions = [{
  no: 'One',
  expand: true,
  heading: 'INTEGRITY',
  body: 'Integrity is much more about being whole, entire, and undiminished. It is about every single individual digging to their core. It is what makes us trustworthy,fair, honest, transparent and ethical in our conduct.'
}, {
  no: 'Two',
  expand: false,
  heading: 'RESPONSIBILITY',
  body: 'We will incorporate social values in our business, making sure that what comes from the people are returned to them many times over. '
}, {
  no: 'Three',
  expand: false,
  heading: 'EXCELLENCE',
  body: 'We will be passionate about achieving the highest standards of quality.'
},{
  no: 'Four',
  expand: false,
  heading: 'UNITY',
  body: 'We will invest in our people and partners, enable continuous learning, and build caring and collaborative relationships based on trust and mutual respect.'
},{
  no: 'Five',
  expand: false,
  heading: 'RESPECTFUL',
  body: 'We look out for each other and promote open communication that supports our development as individuals and as an organization. We support constructive dialogue and active listening while respecting cultural diversity.'
}];

const AccordionList = () => {
  return <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map(item => <Accordion type="plain" key={item.no} {...item} />)}
    </div>;
};

export default AccordionList;