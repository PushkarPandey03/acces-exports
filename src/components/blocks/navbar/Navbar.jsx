// src/components/blocks/navbar/Navbar.jsx
import { Fragment, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// Custom hook for sticky navbar
const useSticky = (offset) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > offset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return isSticky;
};

// Reusable link components
const NextLink = ({ href, title, className }) => (
  <Link href={href} className={className}>
    {title}
  </Link>
);

const ListItemLink = ({ href, title, linkClassName }) => (
  <li>
    <Link href={href} className={linkClassName}>
      {title}
    </Link>
  </li>
);

const DropdownToggleLink = ({ title, className }) => (
  <a className={className} href="#" data-bs-toggle="dropdown">
    {title}
  </a>
);

const NavLink = ({ title, href, className }) => (
  <Link href={href} className={className}>
    {title}
  </Link>
);

const Button = ({ title, className, downloadLink }) => (
  <a href={downloadLink} className={className} download>
    {title}
  </a>
);

// SocialLinks component
const SocialLinks = () => (
  <div className="social-links">
    <a href="https://facebook.com" className="uil uil-facebook-f" aria-label="Facebook" />
    <a href="https://twitter.com" className="uil uil-twitter" aria-label="Twitter" />
    <a href="https://instagram.com" className="uil uil-instagram" aria-label="Instagram" />
  </div>
);

// Offcanvas components
const Info = () => (
  <div
    id="offcanvas-info"
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    aria-labelledby="offcanvasInfoLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasInfoLabel">Information</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <p>Company information goes here.</p>
    </div>
  </div>
);

const Search = () => (
  <div
    id="offcanvas-search"
    className="offcanvas offcanvas-top"
    tabIndex="-1"
    aria-labelledby="offcanvasSearchLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasSearchLabel">Search</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <input type="text" className="form-control" placeholder="Search..." />
    </div>
  </div>
);

const Signin = () => (
  <div
    id="offcanvas-signin"
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    aria-labelledby="offcanvasSigninLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasSigninLabel">Sign In</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <p>Sign in form goes here.</p>
    </div>
  </div>
);

const Signup = () => (
  <div
    id="offcanvas-signup"
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    aria-labelledby="offcanvasSignupLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasSignupLabel">Sign Up</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <p>Sign up form goes here.</p>
    </div>
  </div>
);

const MiniCart = () => (
  <div
    id="offcanvas-cart"
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    aria-labelledby="offcanvasCartLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasCartLabel">Cart</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <p>Cart contents go here.</p>
    </div>
  </div>
);

// Navigation data
const navigation = {
  aboutus: [
    { id: 1, title: 'Who We Are', url: '/whoweare' },
    { id: 2, title: 'Our Values', url: '/ourvalues' },
  ],
  products: [
    {
      id: 1,
      title: 'Split Packaging',
      subItems: [
        { id: 11, title: 'Closure', url: '/closure' },
        { id: 12, title: 'Glass Bottles', url: '/glassbottles' },
      ],
    },
    {
      id: 2,
      title: 'Food Beverages',
      subItems: [
        { id: 21, title: 'Closures Jars', url: '/closure-jars' },
      ],
    },
    {
      id: 3,
      title: 'Battery',
      subItems: [
        { id: 31, title: 'Lead Acid', url: '/lead-acid' },
      ],
    },
    {
      id: 4,
      title: 'Sausage',
      subItems: [
        { id: 41, title: 'Product List Sauces', url: '/sausage' },
      ],
    },
    {
      id: 5,
      title: 'Steel Wires',
      subItems: [
        { id: 51, title: 'Stainless Steel', url: '/stainless-steel' },
        { id: 52, title: 'Welding Wire', url: '/welding-wire' },
      ],
    },
    {
      id: 6,
      title: 'Grains Spices',
      subItems: [
        { id: 61, title: 'Basmati Rice', url: '/basmati-rice' },
      ],
    },
  ],
};

// Translations
const translations = {
  en: {
    about_us: 'About Us',
    who_we_are: 'Who We Are',
    our_values: 'Our Values',
    products: 'Products',
    split_packaging: 'Spirit Packaging',
    closure: 'Closure',
    glass_bottles: 'Glass Bottles',
    food_beverages: 'Food & Beverages',
    closures_jars: 'Closures and Jars',
    battery: 'Battery',
    lead_acid: 'Lead Acid Battery',
    sausage: 'Sausage',
    product_list_sauces: 'Product List (Sauces)',
    steel_wires: 'Steel Wires',
    stainless_steel: 'Stainless Steel',
    welding_wire: 'Welding Wire',
    grains_spices: 'Grains & Spices',
    basmati_rice: '1121 Basmati Rice',
    contact_us: 'Contact Us',
    download_brochure: 'Download Brochure',
    brand_name: 'Export',
  },
  hi: {
    about_us: 'हमारे बारे में',
    who_we_are: 'हम कौन हैं',
    our_values: 'हमारे मूल्य',
    products: 'उत्पाद',
    split_packaging: 'विभाजित पैकेजिंग',
    closure: 'बंद करना',
    glass_bottles: 'कांच की बोतलें',
    food_beverages: 'खाद्य और पेय',
    closures_jars: 'बंद और जार',
    battery: 'बैटरी',
    lead_acid: 'लेड एसिड बैटरी',
    sausage: 'सॉसेज',
    product_list_sauces: 'उत्पाद सूची (सॉस)',
    steel_wires: 'स्टील के तार',
    stainless_steel: 'स्टेनलेस स्टील',
    welding_wire: 'वेल्डिंग वायर',
    grains_spices: 'अनाज और मसाले',
    basmati_rice: '1121 बासमती चावल',
    contact_us: 'हमसे संपर्क करें',
    download_brochure: 'ब्रोशर डाउनलोड करें',
    brand_name: 'निर्यात',
  },
  fr: {
    about_us: 'À propos de nous',
    who_we_are: 'Qui nous sommes',
    our_values: 'Nos valeurs',
    products: 'Produits',
    split_packaging: 'Emballage fractionné',
    closure: 'Fermeture',
    glass_bottles: 'Bouteilles en verre',
    food_beverages: 'Aliments et boissons',
    closures_jars: 'Fermetures et bocaux',
    battery: 'Batterie',
    lead_acid: 'Batterie au plomb',
    sausage: 'Saucisse',
    product_list_sauces: 'Liste de produits (sauces)',
    steel_wires: 'Fils d’acier',
    stainless_steel: 'Acier inoxydable',
    welding_wire: 'Fil de soudage',
    grains_spices: 'Grains et épices',
    basmati_rice: 'Riz basmati 1121',
    contact_us: 'Nous contacter',
    download_brochure: 'Télécharger la brochure',
    brand_name: 'Exportation',
  },
  es: {
    about_us: 'Sobre nosotros',
    who_we_are: 'Quiénes somos',
    our_values: 'Nuestros valores',
    products: 'Productos',
    split_packaging: 'Embalaje dividido',
    closure: 'Cierre',
    glass_bottles: 'Botellas de vidrio',
    food_beverages: 'Alimentos y bebidas',
    closures_jars: 'Cierres y frascos',
    battery: 'Batería',
    lead_acid: 'Batería de plomo-ácido',
    sausage: 'Salchicha',
    product_list_sauces: 'Lista de productos (salsas)',
    steel_wires: 'Alambres de acero',
    stainless_steel: 'Acero inoxidable',
    welding_wire: 'Alambre de soldadura',
    grains_spices: 'Granos y especias',
    basmati_rice: 'Arroz basmati 1121',
    contact_us: 'Contáctanos',
    download_brochure: 'Descargar folleto',
    brand_name: 'Exportación',
  },
  de: {
    about_us: 'Über uns',
    who_we_are: 'Wer wir sind',
    our_values: 'Unsere Werte',
    products: 'Produkte',
    split_packaging: 'Geteilte Verpackung',
    closure: 'Verschluss',
    glass_bottles: 'Glasflaschen',
    food_beverages: 'Lebensmittel und Getränke',
    closures_jars: 'Verschlüsse und Gläser',
    battery: 'Batterie',
    lead_acid: 'Blei-Säure-Batterie',
    sausage: 'Wurst',
    product_list_sauces: 'Produktliste (Saucen)',
    steel_wires: 'Stahldrähte',
    stainless_steel: 'Edelstahl',
    welding_wire: 'Schweißdraht',
    grains_spices: 'Körner und Gewürze',
    basmati_rice: '1121 Basmatireis',
    contact_us: 'Kontaktieren Sie uns',
    download_brochure: 'Broschüre herunterladen',
    brand_name: 'Export',
  },
};

const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'fr', name: 'Français (French)' },
  { code: 'es', name: 'Español (Spanish)' },
  { code: 'de', name: 'Deutsch (German)' },
];

const Navbar = ({
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
  info = false,
  search = false,
  social = false,
  language = true,
  button = true,
  cart = false,
  fancy = false,
  navOtherClass = 'navbar-other w-100 d-flex ms-auto',
  stickyBox = true,
  logoAlt = 'logo-dark',
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  // Load Bootstrap JavaScript client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  const logo = sticky ? 'logo-dark' : logoAlt;
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const renderLinks = (links) => {
    return links.map((item) => (
      <ListItemLink
        href={item.url}
        title={translations[selectedLanguage][item.title.toLowerCase().replace(/\s/g, '_')]}
        linkClassName="dropdown-item"
        key={item.id}
      />
    ));
  };

  const headerContent = (
    <Fragment>
      <style jsx>{`
        .dropdown-submenu {
          position: relative;
        }
        .dropdown-submenu .dropdown-menu.sub-menu-right {
          top: 0;
          left: 100%;
          margin-top: 0;
          display: none;
          z-index: 1000;
          min-width: 200px;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .dropdown-submenu:hover .dropdown-menu.sub-menu-right {
          display: block;
        }
        .dropdown-submenu:hover > .dropdown-menu {
          display: block;
        }
        @media (max-width: 991.98px) {
          .dropdown-submenu .dropdown-menu.sub-menu-right {
            position: static;
            left: 0;
            display: none;
          }
          .dropdown-submenu.show .dropdown-menu.sub-menu-right {
            display: block;
          }
        }
        .navbar-logo {
          max-height: 45px;
          width: auto;
          display: block;
        }
        .language-dropdown .dropdown-menu {
          min-width: 150px;
        }
        .language-dropdown .dropdown-item {
          cursor: pointer;
        }
      `}</style>

      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <img
              alt="logo"
              src="/img/photos/export_logo.png"
              className="navbar-logo"
            />
          }
        />
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">{translations[selectedLanguage].brand_name}</h3>
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <DropdownToggleLink
                title={translations[selectedLanguage].about_us}
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu">
                {renderLinks(navigation.aboutus)}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <DropdownToggleLink
                title={translations[selectedLanguage].products}
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu">
                {navigation.products.map((item) => (
                  <li className="dropdown dropdown-submenu" key={item.id}>
                    <DropdownToggleLink
                      title={translations[selectedLanguage][item.title.toLowerCase().replace(/\s/g, '_')]}
                      className="dropdown-item dropdown-toggle"
                    />
                    <ul className="dropdown-menu sub-menu-right">
                      {renderLinks(item.subItems)}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                title={translations[selectedLanguage].contact_us}
                href="/contact-2"
                className="nav-link"
              />
            </li>
          </ul>

          {button && (
            <div className="mt-3 d-lg-none">
              <Button
                title={translations[selectedLanguage].download_brochure}
                className="btn btn-primary w-100"
                downloadLink="https://pdfobject.com/pdf/sample.pdf"
              />
            </div>
          )}

          <div className="offcanvas-footer d-lg-none mt-auto">
            <div>
              <NextLink
                title="info@export.net"
                className="link-inverse"
                href="mailto:info@export.net"
              />
              <br />
              <NextLink href="tel:9637422525" title="+91-9637422525" />
              <br />
              {social && <SocialLinks />}
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {info && (
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-info"
              >
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )}

          {search && (
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-search"
              >
                <i className="uil uil-search" />
              </a>
            </li>
          )}

          {language && (
            <li className="nav-item dropdown language-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {languageOptions.find((lang) => lang.code === selectedLanguage)?.name}
              </a>
              <ul className="dropdown-menu">
                {languageOptions.map((lang) => (
                  <li key={lang.code}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setSelectedLanguage(lang.code)}
                    >
                      {lang.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )}

          <li className="nav-item d-lg-none">
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-nav"
              className="hamburger offcanvas-nav-btn"
            >
              <span />
            </button>
          </li>
        </ul>

        {button && (
          <div className="ms-auto d-none d-lg-block">
            <Button
              title={translations[selectedLanguage].download_brochure}
              className="btn btn-primary"
              downloadLink="https://pdfobject.com/pdf/sample.pdf"
            />
          </div>
        )}
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && (
        <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight || 0 : 0 }} />
      )}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>

      <Signin />
      <Signup />
      {info && <Info />}
      {search && <Search />}
      {cart && <MiniCart />}
    </Fragment>
  );
};

// PropTypes for type checking
Navbar.propTypes = {
  navClassName: PropTypes.string,
  info: PropTypes.bool,
  search: PropTypes.bool,
  social: PropTypes.bool,
  language: PropTypes.bool,
  button: PropTypes.bool,
  cart: PropTypes.bool,
  fancy: PropTypes.bool,
  navOtherClass: PropTypes.string,
  stickyBox: PropTypes.bool,
  logoAlt: PropTypes.string,
};

export default Navbar;