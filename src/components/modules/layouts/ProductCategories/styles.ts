import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 40px;
  justify-content: center;
  gap: 20px;
`;

export const Content = styled.div`
  max-width: 240px;
  max-height: 390px;

  padding: 10px 10px;

  border: 1px solid;
  border-radius: 10px;

  background: white;
`;

export const CardCategory = styled.div`
  display: flex;
  justify-content: space-between;

  span:nth-child(2) {
    color: white;
    font-size: 16px;
    background-color: #546a1e;
  }
`;

export const CardImagem = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 50%;
    height: 50%;

    max-height: 100%;
    max-width: 100%;
  }
`;

export const CardNameProduct = styled.div``;

export const ValueAndBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #546a1e;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }
`;
