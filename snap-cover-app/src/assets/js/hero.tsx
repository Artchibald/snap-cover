import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './hero.module.scss';
import heroUser from '../img/hero_user.png';

// const fadeInOut = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 }
// };

const slideLeftRight = {
    hidden: { x: -100 },
    visible: { x: 0 },
    exit: { x: 100 } // Slide out to the right
};

const slideRightLeft = {
    hidden: { x: 100 },
    visible: { x: 0 },
    exit: { x: -100 } // Slide out to the left
};

const Hero: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.2,    // Trigger when 20% of the component is visible
    });

    return (
        <Box className={styles.hero}>
            <AnimatePresence>
                <Box className={styles.herocontent}>
                    {/* Animated Text Section */}
                    <motion.div
                        className={styles.herotext}
                        initial="hidden"
                        ref={ref}
                        animate={inView ? "visible" : "hidden"}
                        exit="exit"
                        variants={slideLeftRight} // Apply sliding variants
                        transition={{ duration: 0.2 }}  // Animation duration
                    >
                        <Typography variant="h2" className='highlighted'>
                            SECURING YOUR DIGITAL ASSETS.
                        </Typography>
                        <Typography variant="h2" className='highlighted'>
                            WITH CONFIDENCE.
                        </Typography>
                        <Typography variant="body1" className={styles.hero_p}>
                            SnapCover offers users access to multiple Crypto insurers and Cover providers via a simple user interface and API.
                        </Typography>
                        <Typography variant="body1" className={styles.hero_p}>
                            Snapcover allows savvy Crypto and DeFi investors a way to quickly and easily safeguard their portfolio from various types of hacks and on-chain risks. Protect yourself against smart contract vulnerabilities, oracle failures, stablecoin de-pegging, and more, with coverage from trusted on-chain underwriters.
                        </Typography>
                        <Box className={styles.buttonContainer}>
                            <Button className="button primary" href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement">
                                GET THE DAPP NOW
                            </Button>
                            <Button className="button secondary" href="#contact">
                                CONTACT A SPECIALIST
                            </Button>
                        </Box>
                    </motion.div>

                    {/* Animated Image Section */}
                    <motion.div
                        className={styles.heroimage}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={slideRightLeft} // Apply sliding variants
                        transition={{ duration: 0.4, delay: 0.3 }}  // Delay slightly after text animation
                    >
                        <img src={heroUser} alt="Hero" />
                    </motion.div>
                </Box>
            </AnimatePresence>
        </Box>

    );
};

export default Hero;
