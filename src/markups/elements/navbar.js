// components/navbars.js
import dynamic from 'next/dynamic';
import NextLink from 'components/reuseable/links/NextLink';

// Dynamically import Navbar to avoid SSR issues
const Navbar = dynamic(() => import('components/blocks/navbar'), { ssr: false });

// Dynamically import Plyr only on the client side (if used in Navbar or /about-1)
const Plyr = dynamic(() => import('plyr'), { ssr: false });

export const markup1 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />} />
`;

export const markup2 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  language
  logoAlt="logo-light"
  navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark"
  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
/>
`;

export const markup3 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  language
  navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
/>
`;

export const markup4 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  language
  logoAlt="logo-light"
  navClassName="navbar navbar-expand-lg center-nav navbar-dark navbar-bg-dark"
  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
/>
`;

export const markup5 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  fancy
  language
  logoAlt="logo-purple"
  navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"
  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
/>
`;

export const markup6 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg classic transparent navbar-light"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
      Sign In
    </a>
  }
/>
`;

export const markup7 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  logoAlt="logo-light"
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg classic transparent navbar-dark"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-white rounded-pill">
      Sign In
    </a>
  }
/>
`;

export const markup8 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg classic navbar-light navbar-bg-light"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
      Sign In
    </a>
  }
/>
`;

export const markup9 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  logoAlt="logo-light"
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg classic navbar-dark navbar-bg-dark"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
      Sign In
    </a>
  }
/>
`;

export const markup10 = `
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  fancy
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
      Sign In
    </a>
  }
/>
`;