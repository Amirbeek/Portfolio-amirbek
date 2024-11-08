import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      color: hsla(0,0%,100%,0.88);
      font-family:PP Neue Machine, Inter, sans-serif;
  }
`;


export default GlobalStyle;
