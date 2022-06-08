import { FC } from 'react';
import {
  CardImagem,
  CardCategory,
  Container,
  Content,
  CardNameProduct,
  ValueAndBuy,
} from './styles';

import { useApi } from '../../../../hooks/useApi';

interface IProducts {
  title: string;
  category: string;
  price: string;
  description: string;
  image: string;
  rating: {
    rate: string;
  };
}

const ProductCategories: FC = () => {
  const { data: products, isFetching } = useApi<IProducts[]>('/products');

  return (
    <>
      {isFetching && <h3>Carregando dados da API...</h3>}
      <Container>
        {products?.map(product => {
          return (
            <Content key={product.title}>
              <CardCategory>
                <strong>{product.category}</strong>
                <strong>{product.rating.rate}</strong>
              </CardCategory>
              <h1>{product.title}</h1>
              <CardImagem>
                <img src={product.image} alt="" />
              </CardImagem>

              <ValueAndBuy>
                <span>{product.price}</span>

                <button>buy</button>
              </ValueAndBuy>
            </Content>
          );
        })}
      </Container>
    </>
  );
};

export { ProductCategories };
