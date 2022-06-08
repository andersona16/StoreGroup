import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 50px;
  max-width: 100%;
  > nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 40px;
    margin: 0 auto;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%);

    > ul:nth-child(1) {
      span {
        font-size: 1.4rem;
        font-weight: bold;
        color: #473636;

        &:hover {
          color: #0076a3;
        }
      }
    }

    > ul:nth-child(2) {
      display: flex;
      gap: 20px;

      a {
        font-size: 1.2rem;
        color: #000;
        font-weight: 600;

        &:hover {
          color: #0076a3;
        }
      }
    }
  }
`;
