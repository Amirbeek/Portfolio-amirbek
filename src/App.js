import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

// Import the components we'll create in later parts
// import Header from './components/Header'; // Part 2
// import About from './components/About';   // Part 3
// import Skills from './components/Skills'; // Part 3
// import Projects from './components/Projects'; // Part 4
// import Contact from './components/Contact';   // Part 5

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Header />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </ThemeProvider>
  );
}

export default App;
