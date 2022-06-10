import { useState } from "react";
import { useQuery } from "react-query";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Cart from "./pages/modules/private/Cart";
import { Container, StyledButton, Content } from "./styles/styles.app";
import Item from "./components/modules/layouts/CardProdutos";
import { IProducts } from "./types/types";

const getProducts = async (): Promise<IProducts[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as IProducts[]);
  const { data, isLoading, error } = useQuery<IProducts[]>(
    "products",
    getProducts
  );

  // Pega o item de comprar e joga pro carrinho
  const getTotalItems = (items: IProducts[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: IProducts) => {
    setCartItems((prev) => {
      // Se caso o item for adicionado ao Carrinho
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // Aqui ele retorna se o item foi adicionado ao carrinho;
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  // Removando o item do carrinho
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as IProducts[])
    );
  };

  // Carregando API
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Deu erro na api...</div>;

  return (
    <>
      <Container>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>

        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge
            badgeContent={getTotalItems(cartItems)}
            color="primary"
          ></Badge>
          🛒
        </StyledButton>
        <Content>
          {data?.map((item) => (
            <Grid item key={item.id}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Home;
