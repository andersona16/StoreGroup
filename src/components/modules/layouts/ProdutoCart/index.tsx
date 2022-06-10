import { FC } from "react";
import { IProducts } from "../../../../types/types";
import { AddOrDecrease, Container, Content, PriceAndTotal } from "./styles";

type Props = {
  item: IProducts;
  addToCart: (clickedItem: IProducts) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Container>
    <Content>
      <h1>{item.title}</h1>
      <PriceAndTotal>
        <span>Price: ${item.price}</span>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </PriceAndTotal>
      <AddOrDecrease>
        <button onClick={() => removeFromCart(item.id)}>-</button>
        <span>{item.amount}</span>
        <button onClick={() => addToCart(item)}>+</button>
      </AddOrDecrease>
    </Content>
    <img src={item.image} alt={item.title} />
  </Container>
);

export default CartItem;
