import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './green_banner.module.scss';
const GreenBanner: React.FC = () => {
    return (
        <Box
            className={styles.green_banner}
        >
            <Typography variant="h4" className={styles.smallTitle}>
                GET STARTED NOW
            </Typography>
            <Typography
                variant="body1"
                sx={{ fontSize: '16px' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </Typography>
            <Button className="button primary" href="#get-started">
                GET THE DAPP NOW
            </Button>

        </Box>

    );
};

export default GreenBanner;
