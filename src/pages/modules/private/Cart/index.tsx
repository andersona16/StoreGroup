import { FC } from "react";
import { Footer } from "../../../../components/modules/layouts/Footer";
import { Header } from "../../../../components/modules/layouts/Header";
import { Container } from "./styles";

const Cart: FC = () => {
  return (
    <>
      <Container>
        <Header />
        <h1>Car</h1>
        <Footer />
      </Container>
    </>
  );
};

export { Cart };
