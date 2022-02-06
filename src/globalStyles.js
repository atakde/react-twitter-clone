import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    max-width: 1280px;
    margin: auto;
    background: #000000;
    font-family: system-ui;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
