import React, { useState, useEffect } from 'react';
import Header from './sections/Header';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Theme';
import { themes } from './Theme';
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./sections/Footer";
import Blog from "./pages/Blog";
import ThreePage from "./pages/ThreePage";
import Tinthrove from "./pages/Tinthrove";
import Globe from "./pages/Globe";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.background}!important;
        margin: 0;
        font-family: Inter, sans-serif;
    }
`;

const Container = styled.div`
    min-height: 100vh;
`;

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'light' ? themes.lightTheme : themes.darkTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        setTheme(savedTheme === 'light' ? themes.lightTheme : themes.darkTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === themes.darkTheme ? themes.lightTheme : themes.darkTheme;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme === themes.darkTheme ? 'dark' : 'light');
    };

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const storedProject = localStorage.getItem('project');
        if (storedProject) {
            const parsedProject = JSON.parse(storedProject);
            console.log("Parsed project:", parsedProject);
            setProjectData(parsedProject);
        }
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <Router>
                    <Header toggleTheme={toggleTheme} theme={localStorage.getItem('theme') || 'dark'} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path={'/threejs'} element={<ThreePage />} />
                        <Route path={'/tintthrove'} element={<Tinthrove />} />
                        <Route path={'/gitglobe'} element={<Globe />} />

                    </Routes>
                    <Footer/>
                </Router>
            </Container>
        </ThemeProvider>
    );
}

export default App;
