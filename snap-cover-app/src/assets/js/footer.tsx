import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './footer.module.scss';
import logo from '../img/snap-cover-logo-white.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Twitter from '../img/twitter-icon.png';
import Telegram from '../img/telegram-icon.png';
import Metamask from '../img/metamask-icon.png';

// Define animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

interface FooterProps {
    onOpenModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
    // useInView hook to trigger animation when the component is in view
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1,    // Trigger when 10% of the component is visible
    });

    return (
        <Box ref={ref}>
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={styles.footer}
            >
                <Box className={styles.footerContent}>
                    <motion.div
                        id="contact"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className={styles.footerColumn}
                    >
                        <img src={logo} alt="Snap Cover Logo" className={styles.logoImage} />
                        <Typography variant="h6" component="h6" className={styles.logo}>
                            SNAP&nbsp;
                            <span>COVER</span>
                        </Typography>
                        <Typography variant="body1">
                            <LocationOnIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: "relative" }} />
                            <Link href="https://maps.app.goo.gl/yhL6apa7QHzFGTK49" target="_blank">We are based in central London, United Kingdom</Link>
                        </Typography>
                        <Typography variant="body1">
                            <EmailIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: "relative" }} />
                            <Link href="mailto:info@snapcover.io">info@snapcover.io</Link>
                        </Typography>
                        <Typography variant="h6" component="h6" className={styles.connect}>
                            CONNECT WITH US
                        </Typography>
                        {/* <Link href="https://x.com/red_pulse_china?lang=en" target="_blank">
                            <img src={Twitter} alt="Twitter Logo" className={styles.socialIcon} />
                        </Link> */}
                        <Link href="https://t.me/snapcover" target="_blank">
                            <img src={Telegram} alt="Telegram Logo" className={styles.socialIcon} />
                        </Link>
                        <Link href="https://metamask.io/snaps/" target="_blank">
                            <img src={Metamask} alt="Metamask Snaps Logo" className={styles.socialIcon} />
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={styles.footerColumn}
                    >
                        <Grid container spacing={4} className={styles.footerGrid}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" component="h6" className={styles.connect}>
                                    LEGAL
                                </Typography>
                                <Typography variant="body1">
                                    <GavelIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <span onClick={onOpenModal}>TERMS</span>
                                </Typography>
                                <Typography variant="body1">
                                    <PolicyIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <span onClick={onOpenModal}>CONDITIONS</span>
                                </Typography>
                                <Typography variant="body1">
                                    <CopyrightIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <span onClick={onOpenModal}>PRIVACY</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" component="h6" className={styles.connect}>
                                    NAVIGATE
                                </Typography>
                                <Typography variant="body1">
                                    <HomeIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="/" >HOME</Link>
                                </Typography>
                                <Typography variant="body1">
                                    <PsychologyIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="#how-it-works" >HOW IT WORKS</Link>
                                </Typography>
                                <Typography variant="body1">
                                    <SmartphoneIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="https://metamask.io/" target="_blank">GET DAPP</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Box>
            </motion.div>
            <Typography variant="body2" className={styles.footerBottom}>
                2024 - SNAP COVER - All rights reserved, see  <span onClick={onOpenModal}>terms</span> and  <span onClick={onOpenModal}>conditions</span>.
            </Typography>
        </Box>
    );
};

export default Footer;
