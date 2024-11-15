import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Dropdown, Modal, Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

const StyledNavbar = styled(Navbar)`
    background-color: ${(props) => props.theme.background};
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
`;

const Logo = styled.h1`
    color: ${(props) => props.theme.text_color_header};
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: 576px) {
        font-size: 1.5rem;
    }
`;

const NavItem = styled(Nav.Link)`
    color: ${(props) => props.theme.text_color_header} !important;
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
    const [showModal, setShowModal] = React.useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <StyledNavbar expand="lg">
            <Navbar.Brand href="/">
                <Logo>AmirbekShom <Fomo>_</Fomo></Logo>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavItem href="/blog">Blog</NavItem>

                    {/* Resume Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle as={NavItem} id="resumeDropdown">
                            Resume
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleShow}>Quick View</Dropdown.Item>
                            <Dropdown.Item href={require('../portfolio/Amirbek.pdf')} download>
                                Download
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <NavItem href="https://github.com/Amirbeek" target="_blank" rel="noopener noreferrer">
                        Github
                    </NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </Nav>
            </Navbar.Collapse>
            <ModeToggle onClick={toggleTheme}>
                {theme === 'light' ? (
                    <FaSun size={24} color="#f2994a" />
                ) : (
                    <FaMoon size={24} color="#f2994a" />
                )}
            </ModeToggle>
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Quick View - Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        src={require('../portfolio/Amirbek.pdf')}
                        style={{width: '100%', height: '500px'}}
                        frameBorder="0"
                    ></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </StyledNavbar>
    );
}

export default Header;
