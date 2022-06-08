import { FC } from 'react';
import { Footer } from '../../../../components/modules/layouts/Footer';
import { Header } from '../../../../components/modules/layouts/Header';
import { ProductCategories } from '../../../../components/modules/layouts/ProductCategories';

const Home: FC = () => {
  return (
    <>
      <Header />
      <ProductCategories />
      <Footer />
    </>
  );
};

export { Home };
