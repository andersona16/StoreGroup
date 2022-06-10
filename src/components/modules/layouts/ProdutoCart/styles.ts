import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  border: 1px solid gray;

  img {
    max-width: 40%;
    max-height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  h1 {
    font-size: 20px;
  }
`;

export const PriceAndTotal = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin-bottom: 10px;

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const AddOrDecrease = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    width: 100px;
    height: 30px;
    background: #0076a3;
    color: #fff;
    border: none;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
    max-width: 100%;
    cursor: pointer;
    border-radius: 5px;
  }
`;
