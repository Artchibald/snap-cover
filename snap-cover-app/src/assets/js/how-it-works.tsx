import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './how-it-works.module.scss';
import thumbnail1 from '../img/illustration1.png'; // Replace with actual image paths
import thumbnail2 from '../img/illustration2.png';
import thumbnail3 from '../img/illustration3.png';
import thumbnail4 from '../img/illustration4.png';

const HowItWorks: React.FC = () => {
    return (
        <Box className={styles.HowItWorks}>
            <Box className={styles.HowItWorksInner}>
                <Typography variant="h3" className={styles.title}>
                    HOW SNAP <span className='light_weight'>COVER</span> WORKS
                </Typography>
                <Typography variant="body1" className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </Typography>
                <Box className={styles.thumbnailGrid}>
                    <Box className={styles.thumbnailColumn}>
                        <img src={thumbnail1} className={styles.illustration1} alt="illustration 1" />
                        <Typography variant="h4" className={styles.smallTitle}>
                            LOG INTO METAMASK
                        </Typography>
                        <Typography variant="body1" className={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                        </Typography>

                        <img src={thumbnail3} className={styles.illustration2} alt="illustration 2" />
                        <Typography variant="h4" className={styles.smallTitle}>
                            PAY IN CRYPTO
                        </Typography>
                        <Typography variant="body1" className={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                        </Typography>
                    </Box>
                    <Box className={styles.thumbnailColumn}>
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
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HowItWorks;
