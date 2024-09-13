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
                        TALK WITH
                    </Typography>
                    <Typography variant="h2" className="highlighted">
                        A SPECIALIST.
                    </Typography>
                    <Typography variant="body1" className={styles.hero_p}>
                        Whether you want to explore your options before securing coverage or need customized protection for your organization, we're here to assist. Connect with a real person for personalized support or join the SnapCover community.
                    </Typography>

                    <Box className={styles.buttonContainer}>
                        {/* <Button className="button primary" href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement">
                            GET THE DAPP NOW
                        </Button> */}
                        <Button className="button secondary" href="mailto:info@snapcover.io">
                            CONTACT OUR TEAM
                        </Button>
                    </Box>
                </motion.div>
            </Box >
        </motion.div >
    );
};

export default LastSection;
