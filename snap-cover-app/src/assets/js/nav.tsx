import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../img/snap-cover-logo.svg';
import firefox from '../img/firefox.png';
import { motion } from 'framer-motion';
import styles from './nav.module.scss';

const Nav: React.FC = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    const handleScroll = () => {
        setIsSticky(window.scrollY > 50);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileNavOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        // Cleanup listeners on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.navWrap}>
            <motion.div
                className={`${styles.mainNav} ${isSticky ? styles.sticky : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <a href="/#">
                    <img src={logo} alt="Snap Cover Logo" className={styles.logoImage} />
                </a>
                <Typography variant="h6" component="div" className={styles.logo}>
                    <a href="/#" className={styles.logolink}>SNAP&nbsp;
                        <span>COVER</span></a>
                </Typography>

                <Box className={styles.navLinks}>
                    <a className={styles.textlink} href="/#">Home</a>
                    <a className={styles.textlink} href="#how-it-works">How It Works</a>
                    <a className={styles.textlink} href="#dapp">Dapp</a>
                    <a className={styles.textlink} href="#contact">Contact</a>
                    <a href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement">
                        <img src={firefox} alt="Firefox Logo" className={styles.firefox} />
                    </a>
                </Box>
                <IconButton
                    className={styles.burgerMenu}
                    aria-label="menu"
                    onClick={toggleMobileNav}
                >
                    <MenuIcon />
                </IconButton>

                {mobileNavOpen && (
                    <motion.div
                        className={styles.mobileNav}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 40, duration: 0.25 }}
                    >
                        <IconButton
                            className={styles.closeButton}
                            aria-label="close"
                            onClick={toggleMobileNav}
                        >
                            <CloseIcon style={{ color: 'white', fontSize: '3rem' }} />
                        </IconButton>
                        <a href="/#" onClick={toggleMobileNav}>Home</a>
                        <a href="#how-it-works" onClick={toggleMobileNav}>How It Works</a>
                        <a href="#dapp" onClick={toggleMobileNav}>Dapp</a>
                        <a href="#contact" onClick={toggleMobileNav}>Contact</a>
                        <a href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement">
                            <img src={firefox} alt="Firefox Logo" />
                        </a>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default Nav;
