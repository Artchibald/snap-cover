import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './last_section.module.scss';
import LastSectionUser from '../img/LastSectionUser.png';

const LastSection: React.FC = () => {
    // useInView hook to trigger animation when the component is in view
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1,    // Trigger when 10% of the component is visible
    });

    // Define the animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const slideLeft = {
        hidden: { x: 50 },
        visible: { x: 0 },
    };

    const slideRight = {
        hidden: { x: -50 },
        visible: { x: 0 },
    };

    return (
        <motion.div
            id="dapp"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.last_section}
        >
            <Box className={styles.herocontent}>
                <motion.div
                    variants={slideLeft}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.heroimage}
                >
                    <img src={LastSectionUser} alt="Last section user" />
                </motion.div>
                <motion.div
                    variants={slideRight}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.herotext}
                >
                    <Typography variant="h2" className="highlighted">
                        PERFECT FOR YOUR
                    </Typography>
                    <Typography variant="h2" className="highlighted">
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
                </motion.div>
            </Box >
        </motion.div >
    );
};

export default LastSection;
