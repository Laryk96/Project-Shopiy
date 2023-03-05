import { NavLink } from 'react-router-dom';
import css from './CustomNavLink.module.scss';

// const isActive = ({ active }) => (active ? { color: 'red' } : '');

const CustomNavLink = prop => {
  const { children } = prop;

  return (
    <NavLink
      {...prop}
      className={css.nav__link}
      style={({ isActive }) => ({
        backgroundColor: isActive ? 'orange' : '',
        color: isActive ? 'black' : '',
      })}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
