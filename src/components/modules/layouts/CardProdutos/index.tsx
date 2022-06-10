import { FC } from "react";
import { IProducts } from "../../../../types/types";

import {
  CardCategory,
  Container,
  Content,
  CardImagem,
  CardNameProduct,
  ValueAndBuy,
} from "./styles";

type Props = {
  item: IProducts;
  handleAddToCart: (clickedItem: IProducts) => void;
};

const CardProdutos: FC<Props> = ({ item, handleAddToCart }) => (
  <Container>
    <Content>
      <CardCategory>
        <span>{item.category}</span>
        <strong>⭐{item.rating.rate}</strong>
      </CardCategory>
      <CardImagem>
        <img src={item.image} />
      </CardImagem>

      <CardNameProduct>
        <h1>{item.title}</h1>
      </CardNameProduct>

      <ValueAndBuy>
        <span>${item.price}</span>

        <button onClick={() => handleAddToCart(item)}>🛒 Comprar</button>
      </ValueAndBuy>
    </Content>
  </Container>
);

export default CardProdutos;
