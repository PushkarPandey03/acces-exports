// ==========================================================
// ==========================================================
const NavLinko = props => {
    const {
      title,
      className,
      ...others
    } = props;
    return <a  className={className || 'dropdown-item dropdown-toggle'} {...others}>
        {title}
      </a>;
  };
  
  export default NavLinko;