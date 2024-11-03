import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  background: '#f8f9fa',  
  primary: '#007bff',         
  secondaryBackground: '#ffffff', 
  heading: '#343a40',         
  text: '#495057'             
};

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default theme;
