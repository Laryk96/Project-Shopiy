import MainLayout from 'mainLayout/MainLayout';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Products from 'pages/Products';
import Service from 'pages/Service';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
