import style from '../section.module.scss';
import css from './Services.module.scss';

const { title, textSmall, label, wrapper } = style;
const { services, quantityBox, rightBox, leftBox, quantity } = css;

const Services = () => {
  return (
    <section className={services}>
      <div className={wrapper}>
        <p className={label}>SERVICES WE PROVIDES</p>
        <h2 className={title}>
          Build on both: Google web stories and AMP website format
        </h2>
        <div className={quantityBox}>
          <div className={rightBox} style={{ width: '200px' }}>
            <strong className={quantity} style={{ color: ' #FFBE0B' }}>
              5660
            </strong>
            <p className={textSmall}>Product sale per day working and sales</p>
          </div>
          <div className={leftBox} style={{ width: '200px' }}>
            <strong className={quantity} style={{ color: '#FB5607' }}>
              4M+
            </strong>
            <p className={textSmall}>Downloaded saled in your good.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
