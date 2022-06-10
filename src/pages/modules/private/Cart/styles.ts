import styled from "styled-components";

export const Container = styled.aside`
  padding: 20px;

  width: 800px;

  h2 {
    margin-bottom: 10px;
  }

  > span {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 25px;
  }

  > p {
    font-size: 17px;
    font-weight: 500;
  }

  > button {
    display: flex;

    align-items: center;
    margin-top: 30px;
    justify-content: center;
    background: #0076a3;
    color: #fff;
    width: 100%;
    height: 40px;
    border-radius: 100px;
    cursor: pointer;
  }
`;
