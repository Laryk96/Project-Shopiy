import { Link } from 'react-router-dom';

import check from '../../../images/Check.svg';
import email from '../../../images/Email.svg';
import Button from 'components/buttons/Buttons';
import css from './Main.module.scss';
import style from '../section.module.scss';
import play from '../../../images/play.svg';
const { mainTitle, text, label, wrapper } = style;
const {
  main,
  icon,
  form,
  input,
  form__label,
  checkbox,
  btnWrapper,
  checkboxWrapper,
  board,
  board__title,
  board__text,
  board__Btn,
  iconEmail,
} = css;

const Main = () => {
  return (
    <section className={main}>
      <div className={wrapper}>
        <p className={label}>100% SATISFIED GUARANTEE</p>
        <h1 className={mainTitle}>Power up your shopify products</h1>
        <p className={text}>
          More than 90,000+ companies trust our business. Get help from a
          dedicated shopify developer today.
        </p>
        <form className={form}>
          <label className={form__label}>
            <input
              type="text"
              className={input}
              placeholder="Your email address"
              name="email"
            />
            <img className={iconEmail} src={email} alt="email" />
          </label>
          <div className={checkboxWrapper}>
            <label className={form__label}>
              <input className={checkbox} type="checkbox" name="NoCredit" />
              <img src={check} alt="check" className={icon} />
              <span> 30 days free trial</span>;
            </label>
            <label className={form__label}>
              <input className={checkbox} type="checkbox" name="NoCredit" />
              <img src={check} alt="" className={icon} />
              <span>No credit card required</span>
            </label>
          </div>
          <div className={btnWrapper}>
            <Button type={'yellow'}>Sign up</Button>
          </div>
        </form>

        <div className={board}>
          <h2 className={board__title}>Margaret Philips</h2>
          <p className={board__text}>Watch our best services</p>
          <Link to="/" className={board__Btn}>
            <img src={play} alt="play" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
