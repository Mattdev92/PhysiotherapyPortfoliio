import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@300;400;500;600;700;800&family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Smooch+Sans:wght@100&display=swap');
*, *:before, *:after {
  box-sizing: border-box;
}
html{
  font-size: 16px;
}
  body {
    margin:0;
    padding:0;
    background: rgb(251,251,251);
  }
`;
