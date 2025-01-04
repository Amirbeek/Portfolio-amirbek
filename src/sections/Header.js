import React from 'react';
import styled from 'styled-components';
import { AppBar, Button, Menu, MenuItem, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {motion, useScroll, useSpring} from 'framer-motion';

const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1300px;  
    margin: 10px auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledAppBar = styled(AppBar)`
    background: ${(props) => props.theme.background}!important;
    box-shadow: none !important;
    transition:  0.3s ease-in-out!important;
`;

const Logo = styled(Link)`
    color: ${(props) => props.theme.text_color_header};
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
`;

const NavButton = styled(motion(Button))`
    color: ${(props) => props.theme.text_second_color}!important;
    font-weight: 500!important;
    margin-left: 1rem;
    font-size: 1.1rem;

    &:hover {
        color: #4209ed!important;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const ModeToggle = styled(IconButton)`
    color: ${(props) => props.theme.text_color_header};

    @media (max-width: 576px) {
        font-size: 1.2rem;
    }
`;

const Fomo = styled.span`
    color: ${(props) => props.theme.primary_color};
`;

const Header = ({ toggleTheme, theme }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showDialog, setShowDialog] = React.useState(false);
    const { scrollYProgress } = useScroll()

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDialogOpen = () => setShowDialog(true);
    const handleDialogClose = () => setShowDialog(false);
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return (
        <StyledAppBar position="relative">
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    originX: 0,
                    backgroundColor: "rgb(66,9,237)",
                }}
            />
            <NavbarContainer>
                <Logo to={'/'}>AmirbekShom <Fomo>_</Fomo></Logo>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    <NavButton href="/blog">Blog</NavButton>

                    <NavButton onClick={handleMenuClick}>Resume</NavButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleDialogOpen}>Quick View</MenuItem>

                        <MenuItem onClick={handleMenuClose}>
                            <a
                                href={require('../portfolio/Amirbek.pdf')}
                                download
                                style={{textDecoration: 'none', color: 'inherit'}}
                            >
                                Download
                            </a>
                        </MenuItem>
                    </Menu>


                    <NavButton href="https://github.com/Amirbeek" target="_blank" rel="noopener noreferrer">
                        Github
                    </NavButton>
                    <NavButton href="/contact">Contact</NavButton>

                    <ModeToggle onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <FaSun size={24} color="#f2994a"/>
                        ) : (
                            <FaMoon size={24} color="#f2994a"/>
                        )}
                    </ModeToggle>
                </div>
            </NavbarContainer>

            <Dialog open={showDialog} onClose={handleDialogClose} maxWidth="md" fullWidth>
                <DialogTitle>Quick View - Resume</DialogTitle>
                <DialogContent>
                    <iframe
                        src={require('../portfolio/Amirbek.pdf')}
                        style={{width: '100%', height: '500px', border: 'none'}}
                        title="Resume Quick View"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledAppBar>
    );
};

export default Header;
