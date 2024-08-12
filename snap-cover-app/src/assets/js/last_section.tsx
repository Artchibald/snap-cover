import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './last_section.module.scss';
import LastSectionUser from '../img/LastSectionUser.png'
const LastSection: React.FC = () => {
    return (
        <Box className={styles.last_section}>
            <Box className={styles.herocontent}>
                <Box className={styles.heroimage}>
                    <img src={LastSectionUser} alt="Last section user" />
                </Box>
                <Box className={styles.herotext}>
                    <Typography variant="h2" className='highlighted'>
                        PERFECT FOR YOUR
                    </Typography>
                    <Typography variant="h2" className='highlighted'>
                        PEACE OF MIND.
                    </Typography>
                    <Typography variant="body1" className={styles.hero_p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Typography variant="body1" className={styles.hero_p}>
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
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
            </Box>
        </Box>
    );
};

export default LastSection;
