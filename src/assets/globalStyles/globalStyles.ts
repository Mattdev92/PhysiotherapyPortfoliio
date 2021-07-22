import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap');
*, *:before, *:after {
  box-sizing: border-box;
}
  body {
    margin:0 140px;
    padding:0;
    background: rgb(251,251,251);
  }
`;
