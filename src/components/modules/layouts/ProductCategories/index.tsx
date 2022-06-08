import { FC } from "react";
import {
  CardImagem,
  CardCategory,
  Container,
  Content,
  CardNameProduct,
  ValueAndBuy,
} from "./styles";

import { useApi } from "../../../../hooks/useApi";

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
  const { data: products, isFetching } = useApi<IProducts[]>("/products");

  return (
    <>
      <Container>
        {isFetching && <h3>Carregando dados da API...</h3>}

        {products?.map((product) => {
          return (
            <Content key={product.title}>
              <CardCategory>
                <span>{product.category}</span>
                <strong>⭐ {product.rating.rate}</strong>
              </CardCategory>

              <CardImagem>
                <img src={product.image} alt="" />
              </CardImagem>
              <CardNameProduct>
                <h1>{product.title}</h1>
              </CardNameProduct>

              <ValueAndBuy>
                <span>💰 {product.price}</span>

                <button>🛒 Comprar</button>
              </ValueAndBuy>
            </Content>
          );
        })}
      </Container>
    </>
  );
};

export { ProductCategories };
