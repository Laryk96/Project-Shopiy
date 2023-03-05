import style from '../components/Sections/section.module.scss';
import React from 'react';

const { wrapper, title, text, subTitle } = style;
const Contact = () => {
  return (
    <main className="section">
      <div className={wrapper}>
        <h1 className={title}>Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className={subTitle}>Location</h2>
            <p className={text}>Kyiv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className={subTitle}>Telegram / WhatsApp</h2>
            <p>
              <a className={text} href="tel:+79051234567">
                +38 (068) 291-52-60
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className={subTitle}>Email</h2>
            <p>
              <a className={text} href="mailto:webdev@protonmail.com">
                lary96bk@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className={wrapper}></div>
    </main>
  );
};

export default Contact;
