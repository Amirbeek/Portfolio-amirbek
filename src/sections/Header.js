import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

const StyledNavbar = styled(Navbar)`
  background-color: #0e0e0e;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
`;

const NavItem = styled(Nav.Link)`
  color: white !important;
  font-weight: 500;
  transition: color 0.3s;
  &:hover {
    color: hsla(0, 0%, 100%, 0.88);
  }
`;

const Kome = styled.span`
  color: #8862f8;
`;

function Header() {
  return (
    <StyledNavbar expand="lg" fixed="top">

        <Navbar.Brand href="#home">
          <Logo>AmirbekShom <Kome>_</Kome></Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavItem href="../portfolio/my_portfolio.pdf" target="_blank" rel="noopener noreferrer">Resume</NavItem>
            <NavItem href="https://github.com/Amirbeek" target="_blank" rel="noopener noreferrer">Github</NavItem>
            <NavItem href="#projects">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
    </StyledNavbar>
  );
}

export default Header;
