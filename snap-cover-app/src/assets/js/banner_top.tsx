import React from 'react';
import { Typography, Link } from '@mui/material';
import styles from './banner_top.module.scss';
import { motion } from 'framer-motion';

const BannerTop: React.FC = () => {
    return (
        <motion.div
            className={styles.banner}
            initial={{ opacity: 0, y: -20 }} // Initial state before animation
            animate={{ opacity: 1, y: 0 }}  // Final state after animation
            transition={{ duration: 0.5 }}  // Animation duration
        >
            <Typography
                variant="h6"
                component="h2"
                sx={{ fontSize: '16px' }}
            >
                All our services are currently online, find us on the official Metamask&nbsp;<Link href="#">Snaps</Link>&nbsp;page page now
            </Typography>

        </motion.div>

    );
};

export default BannerTop;
