import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header: FC = () => {
  return (
    <>
      <Container>
        <nav>
          <ul>
            <Link to="/">
              <span>StoreGroup</span>
            </Link>
          </ul>

          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Carrinho</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export { Header };
