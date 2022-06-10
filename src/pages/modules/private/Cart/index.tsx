import { FC } from "react";
import CartItem from "../../../../components/modules/layouts/ProdutoCart";
import { IProducts } from "../../../../types/types";
import { Container } from "./styles";

type Props = {
  cartItems: IProducts[];
  addToCart: (clickedItem: IProducts) => void;
  removeFromCart: (id: number) => void;
};

const Cart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: IProducts[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Container>
      <h2>Seu carrinho de compras</h2>
      {cartItems.length === 0 ? <p>Sem item no carrinho.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <span>
        Total das suas compras: ${calculateTotal(cartItems).toFixed(2)}
      </span>

      <button>Finalizar compra</button>
    </Container>
  );
};

export default Cart;
