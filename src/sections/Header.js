import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

const StyledNavbar = styled(Navbar)`
    background-color: ${props => props.theme.background};
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
`;

const Logo = styled.h1`
    color: ${props => props.theme.text_color_header};
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: 576px) {
        font-size: 1.5rem;
    }
`;

const NavItem = styled(Nav.Link)`
    color: ${props => props.theme.text_color_header} !important;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
        color: hsla(0, 0%, 100%, 0.88);
    }

    @media (max-width: 576px) {
        font-size: 0.9rem;
    }
`;

const ModeToggle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    @media (max-width: 576px) {
        font-size: 1.2rem;
    }
`;

const Fomo = styled.span`
    color: #8862f8;
`;

function Header({ toggleTheme, theme }) {
    return (
        <StyledNavbar expand="lg">
            <Navbar.Brand href="/">
                <Logo>AmirbekShom <Fomo>_</Fomo></Logo>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavItem href="/blog">
                        Blog
                    </NavItem>
                    <NavItem href="../portfolio/my_portfolio.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </NavItem>
                    <NavItem href="https://github.com/Amirbeek" target="_blank" rel="noopener noreferrer">
                        Github
                    </NavItem>
                    <NavItem href="/contact">
                        Contact
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
            <ModeToggle onClick={toggleTheme}>
                {theme === 'light' ? (
                    <FaSun size={24} color="#f2994a" />
                ) : (
                    <FaMoon size={24} color="#f2994a" />
                )}
            </ModeToggle>
        </StyledNavbar>
    );
}

export default Header;
