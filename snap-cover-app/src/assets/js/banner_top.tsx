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
                Our Snap Cover App is currently offline, find us very soon on the official Metamask&nbsp;<Link href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement">Snaps</Link>&nbsp;page
            </Typography>

        </motion.div>

    );
};

export default BannerTop;
