import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styles from './hero.module.scss';
import heroUser from '../img/hero_user.png';

const Hero: React.FC = () => {
    return (
        <Box className={styles.hero}>
            <Box className={styles.herocontent}>
                {/* Animated Text Section */}
                <motion.div
                    className={styles.herotext}
                    initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
                    animate={{ opacity: 1, x: 0 }}  // Animate to its normal position
                    transition={{ duration: 0.2 }}  // Animation duration
                >
                    <Typography variant="h2" className='highlighted'>
                        SECURING YOUR DIGITAL ASSETS.
                    </Typography>
                    <Typography variant="h2" className='highlighted'>
                        WITH CONFIDENCE.
                    </Typography>
                    <Typography variant="body1" className={styles.hero_p}>
                        SnapCover offers users access to multiple Crypto insurers and Cover providers via a simple user interface and API   </Typography>
                    <Typography variant="body1" className={styles.hero_p}>
                        Snapcover allows savvy Crypto and DeF investors a way to quickly and easily safeguard their portfolio from various types of hacks and onchain risks. Protect yourself against smart contract vulnerabilities, oracle failures, stablecoin de-pegging and more, with coverage from trusted onchain underwriters. </Typography>
                    <Box className={styles.buttonContainer}>
                        <Button className="button primary" href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement">
                            GET THE DAPP NOW
                        </Button>
                        <Button className="button secondary" href="mailto:info@snapcover.io">
                            CONTACT A SPECIALIST
                        </Button>
                    </Box>
                </motion.div>

                {/* Animated Image Section */}
                <motion.div
                    className={styles.heroimage}
                    initial={{ opacity: 0, x: 100 }}  // Start off-screen to the right
                    animate={{ opacity: 1, x: 0 }}   // Animate to its normal position
                    transition={{ duration: 0.4, delay: 0.3 }}  // Delay slightly after text animation
                >
                    <img src={heroUser} alt="Hero" />
                </motion.div>
            </Box>
        </Box>
    );
};

export default Hero;
