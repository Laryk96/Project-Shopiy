import CustomNavLink from 'components/CustomNavLink/CustomNavLink';
import css from './Navigation.module.scss';

const { nav, nav__List } = css;

const Navigation = () => {
  return (
    <nav className={nav}>
      <u className={nav__List}>
        <li>
          <CustomNavLink to="/">About</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="product">Product</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="service">Service</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="contact">Contact</CustomNavLink>
        </li>
      </u>
    </nav>
  );
};

export default Navigation;
