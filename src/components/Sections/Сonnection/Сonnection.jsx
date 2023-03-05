import css from './Сonnection.module.scss';
import styles from '../section.module.scss';
import Button from 'components/buttons/Buttons';

const { connection, btnWrapper, form, input } = css;
const { wrapper, title, text } = styles;

const Connection = () => {
  return (
    <section className={connection}>
      <div
        className={wrapper}
        style={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <h2 className={title}>Contact with us.</h2>
        <p
          className={text}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          More than 50,000+ companies trusted our business
        </p>
        <form className={form}>
          <input
            type="text"
            className={input}
            placeholder="Type your messages.."
            name="email"
          />
          <div className={btnWrapper}>
            <Button type={'yellow'}>Sign up</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Connection;
