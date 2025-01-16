import React, { useState } from 'react';
import styled from 'styled-components';
import {AppBar, Button, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem} from '@mui/material';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import NavbarDialog from "../components/NavbarDialog";
import { motion, useSpring, useScroll } from "motion/react"

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
`;

const Logo = styled(Link)`
    color: ${(props) => props.theme.text_color_header};
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
`;

const NavButton = styled(Button)`
    color: ${(props) => props.theme.text_second_color}!important;
    font-weight: 500!important;
    margin-left: 1rem;
    font-size: 1.1rem;

    &:hover {
        color: #4209ed!important;
    }

    @media (max-width: 768px) {
        display: none; // Hide in small devices
    }
`;

const ModeToggle = styled(IconButton)`
    color: ${(props) => props.theme.text_color_header};
`;

const MobileMenuIcon = styled(FaBars)`
    display: none;

    @media (max-width: 768px) {
        display: block;
        color: ${(props) => props.theme.text_color_header};
        font-size: 1.8rem;
    }
`;
const Fomo = styled.span`
    color: ${(props) => props.theme.primary_color};
`;

const Header = ({ toggleTheme, theme }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const [showDialog, setShowDialog] = useState(false);

    const handleDialogOpen = () => setShowDialog(true);
    const handleDialogClose = () => setShowDialog(false);
    const themeMui = useTheme();
    const isMobile = useMediaQuery(themeMui.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
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
                    height: 6,
                    originX: 0,
                    backgroundColor: "#5a2de4",
                }}
            />
            <NavbarContainer>
                <Logo to={'/'}>AmirbekShom <Fomo>_</Fomo></Logo>

                <div>
                    {isMobile ? (
                        <IconButton onClick={handleDrawerToggle}>
                            <MobileMenuIcon/>
                        </IconButton>
                    ) : (
                        <>
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
                                        href={require('../portfolio/Amirbek-Shomurodov-CV.pdf')}
                                        download
                                        style={{textDecoration: 'none', color: 'inherit'}}
                                    >
                                        Download
                                    </a>
                                </MenuItem>
                            </Menu>
                            <NavButton href="https://github.com/Amirbeek" target="_blank"
                                       rel="noopener noreferrer">Github</NavButton>
                            <NavButton href="/contact">Contact</NavButton>
                        </>
                    )}

                    <ModeToggle onClick={toggleTheme}>
                        {theme === 'light' ? <FaSun size={24} color="#f2994a"/> : <FaMoon size={24} color="#f2994a"/>}
                    </ModeToggle>
                </div>
            </NavbarContainer>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                <List>
                    <ListItem button component="a" href="/blog">
                        <ListItemText primary="Blog"/>
                    </ListItem>
                    <ListItem button component="a" onClick={handleDialogOpen}>
                        <ListItemText primary="Resume"/>
                    </ListItem>
                    <ListItem button component="a" href="https://github.com/Amirbeek" target="_blank"
                              rel="noopener noreferrer">
                        <ListItemText primary="Github"/>
                    </ListItem>
                    <ListItem button component="a" href="/contact">
                        <ListItemText primary="Contact"/>
                    </ListItem>
                </List>
            </Drawer>

            <NavbarDialog showDialog={showDialog} handleDialogClose={handleDialogClose}/>
        </StyledAppBar>
    );
};

export default Header;
