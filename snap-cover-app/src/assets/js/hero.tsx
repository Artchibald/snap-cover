import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './hero.module.scss';
import heroUser from '../img/hero_user.png'
const Hero: React.FC = () => {
    return (
        <Box className={styles.hero}>
            <Box className={styles.herocontent}>
                <Box className={styles.herotext}>
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
                </Box>
                <Box className={styles.heroimage}>
                    <img src={heroUser} alt="Hero" />
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;
