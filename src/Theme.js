import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  background: '#0e0e0e',
  primary: '#007bff',         
  secondaryBackground: '#0e0e0e',
  heading: '#343a40',
  text: '#495057',
  face_color:'#2d2d2d',
  face_color_hover:  '#f2994a',
  primary_color: '#8862f8'
};

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default theme;
