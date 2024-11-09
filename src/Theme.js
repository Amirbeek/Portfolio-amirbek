import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const darkTheme = {
  background: '#0e0e0e',
  secondaryBackground: '#0e0e0e',
  heading: '#343a40',
  text: '#495057',
  face_color: '#2d2d2d',
  text_color_header: '#fff', // Corrected the text color for header
  face_color_hover: '#f2994a',
  primary_color: '#8862f8',
  skill_color: '#2d2d2d',
};

const lightTheme = {
  background: '#ffffff',
  secondaryBackground: '#fff',
  skill_color: '#f8f8f8',
  text_color_header: '#0e0e0e', // Correct text color for header in light theme
  heading: '#333333',
  text: '#444444',
  face_color: '#f2f2f2',
  face_color_hover: '#f2994a',
  primary_color: '#8862f8'
};

export const themes = { darkTheme, lightTheme };

export const ThemeProvider = ({ children, theme }) => (
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
