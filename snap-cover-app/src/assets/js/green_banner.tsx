import React from 'react';
import { Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './green_banner.module.scss';




const GreenBanner: React.FC = () => {
    // useInView hook to trigger animation when the component is in view
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.1,    // Trigger when 10% of the component is visible
    });

    // Define the animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        //  exit: { opacity: 0 } // Exit animation for fade in
    };

    const slideUp = {
        hidden: { y: 25 },
        visible: { y: 0 },
        exit: { y: 25 } // Exit animation for slide up
    };

    return (

        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="exit"
            variants={fadeIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.green_banner}
        >
            <motion.div
                variants={slideUp}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Typography variant="h4" className={styles.smallTitle}>
                    GET STARTED NOW
                </Typography>
            </motion.div>
            <motion.div
                variants={slideUp}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Typography
                    variant="body1"
                    sx={{ fontSize: '16px' }}
                >
                    Starting at just $2 per week for $5,000 in coverage, why risk it? SnapCover simplifies the process of purchasing and renewing protection for your portfolio, offering easy access to affordable coverage from top underwriters.
                </Typography>
            </motion.div>
            <motion.div
                variants={slideUp}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <Button className="button primary" href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement">
                    GET THE DAPP NOW
                </Button>
            </motion.div>

        </motion.div>
    );
};

export default GreenBanner;
