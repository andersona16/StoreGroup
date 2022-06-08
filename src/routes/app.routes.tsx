import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/modules/private/Home';
import { Cart } from '../pages/modules/private/Cart';

const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export { AppRoutes };
