import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import styles from './footer.module.scss';
import logo from '../img/snap-cover-logo-white.svg'
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
                            22 George street, W2 5DT, Strand, London, UK
                        </Typography>
                        <Typography variant="body1">
                            info@snapcover.com
                        </Typography>
                        <Typography variant="body1">
                            +44(0)208 932 2343
                        </Typography>
                        <Typography variant="h6" component="h6" className={styles.connect}>
                            CONNECT WITH US
                        </Typography>
                    </Box>
                    <Box className={styles.footerColumn}>
                        <Typography variant="h6" className={styles.footerTitle}>
                            Quick Links
                        </Typography>
                        <Link href="#" className={styles.footerLink}>Terms of Service</Link><br />
                        <Link href="#" className={styles.footerLink}>Privacy Policy</Link><br />
                        <Link href="#" className={styles.footerLink}>Contact Us</Link>
                    </Box>
                </Box>

            </Box>
            <Typography variant="body2" className={styles.footerBottom}>
                2024 - SNAP COVER - All rights reserved, see terms and conditions.
            </Typography>
        </>
    );
};

export default Footer;
