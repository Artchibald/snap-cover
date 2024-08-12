import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../img/snap-cover-logo.svg'
import firefox from '../img/firefox.png'
import styles from './nav.module.scss';

const Nav: React.FC = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileNavOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box className={styles.mainNav}>
            <img src={logo} alt="Snap Cover Logo" className={styles.logoImage} />
            <Typography variant="h6" component="div" className={styles.logo}>
                SNAP&nbsp;
                <span>COVER</span>
            </Typography>
            <Box className={styles.navLinks}>
                <a className={styles.textlink} href="#home">Home</a>
                <a className={styles.textlink} href="#about">How It Works</a>
                <a className={styles.textlink} href="#services">Dapp</a>
                <a className={styles.textlink} href="#contact">Contact</a>
                <a href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement" ><img src={firefox} alt="Firefox Logo" className={styles.firefox} /></a>
            </Box>
            <IconButton
                className={styles.burgerMenu}
                aria-label="menu"
                onClick={toggleMobileNav}
            >
                <MenuIcon />
            </IconButton>

            {mobileNavOpen && (
                <Box className={styles.mobileNav}>
                    <IconButton
                        className={styles.closeButton}
                        aria-label="close"
                        onClick={toggleMobileNav}
                    >
                        <CloseIcon style={{ color: 'white', fontSize: '3rem' }} />
                    </IconButton>
                    <a href="#home" onClick={toggleMobileNav}>Home</a>
                    <a href="#about" onClick={toggleMobileNav}>About</a>
                    <a href="#services" onClick={toggleMobileNav}>Services</a>
                    <a href="#contact" onClick={toggleMobileNav}>Contact</a>
                    <a href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement" ><img src={firefox} alt="Firefox Logo" /></a>
                </Box>
            )}
        </Box>
    );
};

export default Nav;
