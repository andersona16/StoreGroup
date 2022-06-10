import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 40px;
  justify-content: center;
  gap: 20px;

  h3 {
    text-align: center;
    height: 1000px;
    width: 1000px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: white;

  border: 1px solid;
  border-radius: 10px;

  max-height: 100%;
  height: 440px;
  width: 300px;
  padding: 10px;
`;

export const CardCategory = styled.div`
  display: flex;
  justify-content: space-between;

  span:nth-child(1) {
    background-color: #0076a3;
    width: 140px;
    text-align: center;

    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const CardImagem = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    height: 250px;
    width: auto;
  }
`;

export const CardNameProduct = styled.div`
  h1 {
    font-size: 16px;
  }
`;

export const ValueAndBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 15px;
    color: #000;
    font-weight: 700;
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #0076a3;
    color: #fff;
    width: 100px;
    height: 40px;
    border-radius: 100px;
  }
`;
