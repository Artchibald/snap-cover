import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import styles from './banner_top.module.scss';
const BannerTop: React.FC = () => {
    return (
        <Box
            className={styles.banner}
        >
            <Typography variant="h6" component="h2">
                All our services are currently online, find us on the official Metamask&nbsp;<Link href="#">Snaps</Link>&nbsp;page page now
            </Typography>

        </Box>
    );
};

export default BannerTop;
