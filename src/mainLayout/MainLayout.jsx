import { Outlet } from 'react-router-dom';

import css from './MainLayout.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const { container, wrapper } = css;

const MainLayout = () => {
  return (
    <div className={wrapper}>
      <Header />
      <div className={container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
