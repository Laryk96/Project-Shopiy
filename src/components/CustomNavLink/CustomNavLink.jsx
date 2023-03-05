import { NavLink } from 'react-router-dom';
import css from './CustomNavLink.module.scss';

const isActive = ({ isActive }) =>
  isActive ? `${css.nav__link} active-link` : `${css.nav__link}`;

const CustomNavLink = prop => {
  const { children } = prop;

  return (
    <NavLink {...prop} className={isActive}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
