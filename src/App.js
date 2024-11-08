import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme'; // Your theme definition
// import Footer from './sections/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <Header />
        <About />
        <Skills />
        <Projects />
        {/* <Footer/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
