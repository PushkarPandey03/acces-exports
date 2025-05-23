// ./pages/docs/blocks/navbar.jsx
import { Fragment } from 'react';
import {
  markup1,
  markup2,
  markup3,
  markup4,
  markup5,
  markup6,
  markup7,
  markup8,
  markup9,
  markup10,
} from '../../markups/elements/navbar'; // Adjust path as needed

const NavbarDocs = () => {
  return (
    <Fragment>
      <h1>Navbar Variations</h1>
      <p>This page demonstrates different navbar configurations.</p>

      <section>
        <h2>Navbar 1</h2>
        {markup1()}
      </section>
      <section>
        <h2>Navbar 2</h2>
        {markup2()}
      </section>
      <section>
        <h2>Navbar 3</h2>
        {markup3()}
      </section>
      <section>
        <h2>Navbar 4</h2>
        {markup4()}
      </section>
      <section>
        <h2>Navbar 5</h2>
        {markup5()}
      </section>
      <section>
        <h2>Navbar 6</h2>
        {markup6()}
      </section>
      <section>
        <h2>Navbar 7</h2>
        {markup7()}
      </section>
      <section>
        <h2>Navbar 8</h2>
        {markup8()}
      </section>
      <section>
        <h2>Navbar 9</h2>
        {markup9()}
      </section>
      <section>
        <h2>Navbar 10</h2>
        {markup10()}
      </section>
    </Fragment>
  );
};

export default NavbarDocs;