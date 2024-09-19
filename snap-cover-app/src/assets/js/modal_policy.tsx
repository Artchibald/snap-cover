import React from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './modal_policy.module.scss';

interface ModalPolicyProps {
    open: boolean;
    onClose: () => void;
}

const FadeInModal: React.FC<ModalPolicyProps> = ({ open, onClose }) => {


    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1,    // Trigger when 10% of the component is visible
    });

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const slideUp = {
        hidden: { y: 25 },
        visible: { y: 0 },
    };

    //     <Button onClick={handleOpen} variant="contained" color="primary">
    //     Open Modal
    // </Button>

    return (
        <>

            <Modal open={open} onClose={onClose}>
                <Box
                    ref={ref}
                    className={styles.modalBox}
                    component={motion.div}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeIn}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 0,
                        maxWidth: 500,
                        textAlign: 'center',
                    }}
                >
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <motion.div variants={slideUp} transition={{ duration: 0.8, delay: 0.2 }}>

                        <Typography
                            sx={{
                                marginTop: 2,
                                marginBottom: 4,

                            }}
                            variant="h5"
                            gutterBottom>
                            Terms of use
                        </Typography>
                    </motion.div>
                    <motion.div variants={slideUp} transition={{ duration: 0.8, delay: 0.4 }}>
                        <motion.div variants={slideUp} transition={{ duration: 0.8, delay: 0.4 }}>
                            <Typography variant="body1" sx={{ marginBottom: '16px', textAlign: 'left' }}>
                                <strong>Effective Date:</strong> September 2024
                                <br /><br />
                                At SnapCover, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, store, and share your information when you use our platform.
                                <br /><br />
                                <strong>1. Information We Collect:</strong> We collect personal information, transaction data, and technical data to provide and improve our services.
                                <br /><br />
                                <strong>2. How We Use Your Information:</strong> We use your information to provide services, process payments, improve our platform, and communicate with you.
                                <br /><br />
                                <strong>3. How We Share Your Information:</strong> We do not sell your information, but we may share it with service providers or for legal reasons.
                                <br /><br />
                                <strong>4. Data Security:</strong> We implement industry-standard measures to protect your data from unauthorized access, though no system is fully secure.
                                <br /><br />
                                <strong>5. Your Rights:</strong> You have the right to access, update, or delete your personal information, as well as to withdraw consent for data processing.
                            </Typography>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={slideUp} transition={{ duration: 0.8, delay: 0.6 }}>
                        {/* <Button
                            variant="contained"
                            color="primary"
                            href="https://snaps.metamask.io/?utm_source=metamask&utm_medium=website&utm_campaign=snaps_open_beta_announcement"
                        >
                            Get the Dapp Now
                        </Button> */}
                    </motion.div>
                </Box>
            </Modal>
        </>
    );
};

export default FadeInModal;
