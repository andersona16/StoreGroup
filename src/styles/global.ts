import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     outline: 0;
     background-color: #F4F4F4;
  }

  html, body, input {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    cursor: pointer;

    background: transparent;
    border: none;

    height: auto;
    width: auto;

    border-radius: 10px;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: inherit;
      color: inherit;

      height: 100%;

      &:hover {
        text-decoration: inherit;
        color: inherit;
      }
    }
  }
`;
