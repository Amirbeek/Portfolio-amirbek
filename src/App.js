import React, { useState, useEffect } from 'react';
import Header from './sections/Header';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Theme';  // Assuming ThemeProvider is in Theme.js
import { themes } from './Theme';

function App() {
    const [theme, setTheme] = useState(themes.darkTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setTheme(themes.lightTheme);
        } else {
            setTheme(themes.darkTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === themes.darkTheme ? themes.lightTheme : themes.darkTheme;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme === themes.darkTheme ? 'dark' : 'light');
    };

    return (
        <ThemeProvider theme={theme}> {/* Wrap the entire app in ThemeProvider */}
            <Router>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
