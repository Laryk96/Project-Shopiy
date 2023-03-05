import Button from 'components/buttons/Buttons';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import css from './Header.module.scss';

const { header, ButtonsList } = css;

const Header = () => {
  return (
    <header className={header}>
      <Logo />
      <Navigation />
      <ul className={ButtonsList}>
        <li>
          <Button type={'transparent'}>Sign in</Button>
        </li>
        <li>
          <Button type={'yellow'}>Try Free</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
