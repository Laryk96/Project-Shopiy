import css from './Creative.module.scss';
import styles from '../section.module.scss';

const { creative } = css;
const { wrapper, label, title, text } = styles;

const Creative = () => {
  return (
    <section className={creative}>
      <div className={wrapper}>
        <p className={label}>CREATIVE PROCESS</p>
        <h2 className={title}>Know your ads inside & out-perform</h2>
        <p className={text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
    </section>
  );
};

export default Creative;
