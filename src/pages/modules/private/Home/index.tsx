import { FC } from 'react';
import { Header } from '../../../../components/modules/layouts/Header';
import { ProductCategories } from '../../../../components/modules/layouts/ProductCategories';

const Home: FC = () => {
  return (
    <>
      <Header />
      <ProductCategories />
    </>
  );
};

export { Home };
