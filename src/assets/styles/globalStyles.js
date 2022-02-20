import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  html {
    box-sizing: border-box;
    @media (max-height: 750px){
      font-size: 12px;
    }
    @media (max-height: 600px){
      font-size: 9px;
    }
    @media (max-width: 500px){
      font-size: 12px;
    }
    @media (max-width: 400px){
      font-size: 9px;
    }
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin:0;
    padding: 0;
  }
  body {
    font-family: 'Monserrat', sans-serif;
  }
`;
