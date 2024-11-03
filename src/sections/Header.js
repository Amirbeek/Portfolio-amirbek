import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.primary};
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
    color: #ffdd57 !important; // Accent color on hover
  }
`;

function Header() {
  return (
    <StyledNavbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Logo>Amirbek's Portfolio</Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Header;
