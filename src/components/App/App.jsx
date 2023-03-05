import MainLayout from 'mainLayout/MainLayout';
import About from 'pages/About';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<About />} />
      </Route>
    </Routes>
  );
};
