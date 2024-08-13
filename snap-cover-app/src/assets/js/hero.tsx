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
                        CRYPTO COVER.
                    </Typography>
                    <Typography variant="h2" className='highlighted'>
                        IN YOUR METAMASK.
                    </Typography>
                    <Typography variant="body1" className={styles.hero_p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </Typography>
                    <Box className={styles.buttonContainer}>
                        <Button className="button primary" href="#get-started">
                            GET THE DAPP NOW
                        </Button>
                        <Button className="button secondary" href="#learn-more">
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
