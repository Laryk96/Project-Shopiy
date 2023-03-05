import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import Network from 'components/Network/Network';
import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Logo />
      <Navigation />
      <Network />
    </footer>
  );
};

export default Footer;
