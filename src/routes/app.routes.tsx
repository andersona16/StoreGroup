import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart } from '../pages/modules/private/Cart';
import { Home } from '../pages/modules/private/Home';

const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export { AppRoutes };
