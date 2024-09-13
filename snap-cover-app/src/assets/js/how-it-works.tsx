import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './how-it-works.module.scss';
import thumbnail1 from '../img/illustration1.png'; // Replace with actual image paths
import thumbnail2 from '../img/illustration2.png';
import thumbnail3 from '../img/illustration3.png';
import thumbnail4 from '../img/illustration4.png';

const HowItWorks: React.FC = () => {
    // useInView hook to trigger animation when the component is in view
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2,    // Trigger when 20% of the component is visible
    });

    // Define the animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Box className={styles.HowItWorks} ref={ref} id="how-it-works">
            <motion.div
                className={styles.HowItWorksInner}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            >
                <Typography variant="h3" className={styles.title}>
                    HOW SNAP <span className='light_weight'>COVER</span> WORKS
                </Typography>
                <Typography variant="body1" className={styles.paragraph}>
                    Protect your onchain portfolio from protocol hacks and critical economic disruptions, including oracle manipulations and governance attacks. Enjoy peace of mind with coverage across 20+ top protocols, including Curve, Uniswap, and Aave.
                </Typography>
                <Box className={styles.thumbnailGrid}>
                    <motion.div
                        className={styles.thumbnailColumn}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src={thumbnail1} className={styles.illustration1} alt="illustration 1" />
                        <Typography variant="h4" className={styles.smallTitle}>
                            CONNECT YOUR WALLET
                        </Typography>
                        <Typography variant="body1" className={styles.paragraph}>
                            Simply connect your wallet and SnapCover will identify available cover for the digital assets in your wallet.
                        </Typography>

                        <img src={thumbnail3} className={styles.illustration2} alt="illustration 2" />
                        <Typography variant="h4" className={styles.smallTitle}>
                            SPECIFY YOUR COVER AMOUNT
                        </Typography>
                        <Typography variant="body1" className={styles.paragraph}>
                            Specify the assets you want to cover and the amount of time you would like the cover to last. SnapCover will provide a quote from one of the leading onchain underwriters.
                        </Typography>
                    </motion.div>

                    <motion.div
                        className={styles.thumbnailColumn}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img src={thumbnail2} className={styles.illustration3} alt="illustration 3" />
                        <Typography variant="h4" className={styles.smallTitle}>
                            CHOOSE YOUR COVER
                        </Typography>
                        <Typography variant="body1" className={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                        </Typography>

                        <img src={thumbnail4} className={styles.illustration4} alt="illustration 4" />
                        <Typography variant="h4" className={styles.smallTitle}>
                            FOCUS ON THINGS THAT MATTER
                        </Typography>
                        <Typography variant="body1" className={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                        </Typography>
                    </motion.div>
                </Box>
            </motion.div>
        </Box>
    );
};

export default HowItWorks;
