import styles from '../section.module.scss';
import css from './WhatWeDo.module.scss';
import Report from '../../../images/Report.svg';
import Conversion from '../../../images/Conversion.svg';
import ContentForSales from '../../../images/ContentForSales.svg';
import GrowYourTraffic from '../../../images/GrowYourTraffic.svg';

const { WeDo, box, list, item, imgWrapper } = css;
const { wrapper, label, title, text, textSmall, subTitle } = styles;

const WhatWeDo = () => {
  return (
    <section className={WeDo}>
      <div className={wrapper} style={{ marginTop: '-180px' }}>
        <p className={label}>WHAT WE DO</p>
        <h2 className={title}>Our creative process for your business</h2>
        <p className={text}>
          As our motto, we always provide the best service especially for you
          and your company by growing your company to be better.
        </p>
      </div>
      <div className={box}>
        <ul className={list}>
          <li className={item}>
            <div className={imgWrapper} style={{ backgroundColor: '#3E3125' }}>
              <img src={GrowYourTraffic} alt="Grow Your Traffic" />
            </div>
            <h3 className={subTitle}>Grow your traffic</h3>
            <p className={textSmall}>
              We always help your company to grow with us.
            </p>
          </li>

          <li className={item}>
            <div className={imgWrapper} style={{ backgroundColor: ' #172656' }}>
              <img src={ContentForSales} alt="Content For Sales" />
            </div>
            <h3 className={subTitle}>Content for sales</h3>
            <p className={textSmall}>
              Every company that we handel. We always content more sales.
            </p>
          </li>
          <li className={item}>
            <div className={imgWrapper} style={{ backgroundColor: '#3E0B39' }}>
              <img src={Report} alt="Report" />
            </div>
            <h3 className={subTitle}>Reporting & analytics</h3>
            <p className={textSmall}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </li>
          <li className={item}>
            <div className={imgWrapper} style={{ backgroundColor: '#3D1C25' }}>
              <img src={Conversion} alt="Conversion" />
            </div>
            <h3 className={subTitle}>Better Conversion</h3>
            <p className={textSmall}>
              We always help your company to grow with us.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
