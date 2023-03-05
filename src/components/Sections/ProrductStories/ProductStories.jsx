import styles from '../section.module.scss';
import css from './ProductStories.module.scss';

const { productStories, item } = css;
const { wrapper, label, title, textSmall, subTitle } = styles;

const ProductStories = () => {
  return (
    <section className={productStories}>
      <div className={wrapper} style={{ marginLeft: 'auto', width: '530px' }}>
        <p className={label}>OUR PRODUCT STORIES</p>
        <h2 className={title}>Why product stories? Learn more</h2>
        <ul>
          <li className={item}>
            <h3 className={subTitle}>SEO optimized, high Google work</h3>
            <p className={textSmall} style={{ width: '300px' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>
          <li className={item}>
            <h3 className={subTitle}>Fast loading, low bounce rates</h3>
            <p className={textSmall} style={{ width: '300px' }}>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </li>
          <li className={item}>
            <h3 className={subTitle}>SEO optimized, high Google work</h3>
            <p className={textSmall} style={{ width: '300px' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductStories;
