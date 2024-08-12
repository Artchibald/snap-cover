import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../img/snap-cover-logo.svg'
import styles from './nav.module.scss';

const Nav: React.FC = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <Box className={styles.mainNav}>
            <img src={logo} alt="Snap Cover Logo" className={styles.logoImage} />
            <Typography variant="h6" component="div" className={styles.logo}>

                SNAP COVER
            </Typography>
            <Box className={styles.navLinks}>
                <a href="#home">Home</a>
                <a href="#about">How It Works</a>
                <a href="#services">Dapp</a>
                <a href="#contact">Contact</a>
                <a href="#contact">Firefox</a>
            </Box>
            <IconButton
                className={styles.burgerMenu}
                aria-label="menu"
                onClick={toggleMobileNav}
            >
                <MenuIcon style={{ color: 'white' }} />
            </IconButton>

            {mobileNavOpen && (
                <Box className={styles.mobileNav}>
                    <IconButton
                        className={styles.closeButton}
                        aria-label="close"
                        onClick={toggleMobileNav}
                    >
                        <CloseIcon style={{ color: 'white' }} />
                    </IconButton>
                    <a href="#home" onClick={toggleMobileNav}>Home</a>
                    <a href="#about" onClick={toggleMobileNav}>About</a>
                    <a href="#services" onClick={toggleMobileNav}>Services</a>
                    <a href="#contact" onClick={toggleMobileNav}>Contact</a>
                </Box>
            )}
        </Box>
    );
};

export default Nav;
