import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
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
import PhoneIcon from '@mui/icons-material/Phone';
import Twitter from '../img/twitter-icon.png';
import Telegram from '../img/telegram-icon.png';
import Metamask from '../img/metamask-icon.png';

const Footer: React.FC = () => {
    return (
        <>
            <Box className={styles.footer}>
                <Box className={styles.footerContent}>
                    <Box className={styles.footerColumn}>
                        <img src={logo} alt="Snap Cover Logo" className={styles.logoImage} />
                        <Typography variant="h6" component="h6" className={styles.logo}>
                            SNAP&nbsp;
                            <span>COVER</span>
                        </Typography>
                        <Typography variant="body1">
                            <LocationOnIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: "relative" }} />
                            <Link href="22 George street, W2 5DT, Strand, London, UK"> 22 George street, W2 5DT, Strand, London, UK</Link>
                        </Typography>
                        <Typography variant="body1">
                            <EmailIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: "relative" }} />
                            <Link href="mailto:info@snapcover.com">info@snapcover.com</Link>
                        </Typography>
                        <Typography variant="body1">
                            <PhoneIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: "relative" }} />
                            <Link href="callto:00442089322343">+44(0)208 932 2343</Link>
                        </Typography>
                        <Typography variant="h6" component="h6" className={styles.connect}>
                            CONNECT WITH US
                        </Typography>
                        <Link href="https://x.com/red_pulse_china?lang=en"><img src={Twitter} alt="Twitter Logo" className={styles.socialIcon} /></Link>
                        <Link href="tg://resolve?domain=username"> <img src={Telegram} alt="Telegram Logo" className={styles.socialIcon} /></Link>
                        <Link href="https://metamask.io/snaps/">  <img src={Metamask} alt="Metmask Snaps Logo" className={styles.socialIcon} /></Link>
                    </Box>

                    <Box className={styles.footerColumn}>
                        <Grid container spacing={4} className={styles.footerGrid}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" component="h6" className={styles.connect}>
                                    BRINGING PEACE OF MIND
                                </Typography>
                                <Typography variant="body1">
                                    <GavelIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="#">TERMS</Link>
                                </Typography>
                                <Typography variant="body1">
                                    <PolicyIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="#">CONDITIONS</Link>
                                </Typography>
                                <Typography variant="body1">
                                    <CopyrightIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="#">PRIVACY</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" component="h6" className={styles.connect}>
                                    NAVIGATE
                                </Typography>
                                <Typography variant="body1">
                                    <HomeIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="/" target="_blank">HOME</Link>
                                </Typography>
                                <Typography variant="body1">
                                    <PsychologyIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="https://t.me/snapcover" target="_blank">HOW IT WORKS</Link>
                                </Typography>
                                <Typography variant="body1">
                                    <SmartphoneIcon sx={{ marginRight: '8px', color: 'gray', top: '8px', position: 'relative' }} />
                                    <Link href="https://metamask.io/" target="_blank">GET DAPP</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Typography variant="body2" className={styles.footerBottom}>
                2024 - SNAP COVER - All rights reserved, see  <Link href="#" target="_blank">terms</Link> and  <Link href="#" target="_blank">conditions</Link>.
            </Typography>
        </>
    );
};

export default Footer;
