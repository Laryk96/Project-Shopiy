import instagram from '../../images/instagram.svg';
import linkedIn from '../../images/linkedIn.svg';
import gitHub from '../../images/gitHub.svg';
import twitter from '../../images/twitter.svg';
import css from './Network.module.scss';
import { Link } from 'react-router-dom';
const { social, social__item, icon } = css;

const Network = () => {
  return (
    <ul className={social}>
      <li className={social__item}>
        <Link to="https://instagram.com/mr__lary">
          <img className={icon} src={instagram} alt="instagram" />
        </Link>
      </li>
      <li className={social__item}>
        <Link to="/">
          <img className={icon} src={twitter} alt="twitter" />
        </Link>
      </li>
      <li className={social__item}>
        <Link to="https://github.com/Laryk96">
          <img className={icon} src={gitHub} alt="gitHub" />
        </Link>
      </li>
      <li className={social__item}>
        <Link to="https://www.linkedin.com/in/%D0%BB%D0%B0%D1%80%D0%B8-%D0%B0%D0%B3%D1%83%D0%B5%D0%B1%D0%BE%D1%80-b8aab2244/">
          <img className={icon} src={linkedIn} alt="linkedIn" />
        </Link>
      </li>
    </ul>
  );
};

export default Network;
