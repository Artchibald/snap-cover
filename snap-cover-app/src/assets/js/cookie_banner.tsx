import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CookieBannerProps {
    open?: boolean;
    onClose?: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ open = true, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check local storage to see if the banner has been dismissed
        const cookieBannerDismissed = localStorage.getItem('cookieBannerDismissed');
        if (!cookieBannerDismissed) {
            setIsOpen(true);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('cookieBannerDismissed', 'true'); // Store user's choice in local storage
        if (onClose) onClose();
    };

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

    if (!isOpen) {
        return null; // Return null if the banner should not be displayed
    }

    return (
        <Box
            ref={ref}
            component={motion.div}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            sx={{
                position: 'fixed', // Fixed positioning to stay at the bottom of the viewport
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
                borderRadius: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Default layout for larger screens
                maxWidth: '100%',
                textAlign: 'left',
                zIndex: 1300, // Ensure it appears above other content
                '@media (max-width:600px)': {
                    flexDirection: 'column', // Stack vertically on mobile
                    alignItems: 'center',    // Center align items on mobile
                    textAlign: 'center',     // Center align text on mobile
                },
            }}
        >
            <motion.div variants={slideUp} transition={{ duration: 0.8, delay: 0.2 }}>
                <Typography
                    sx={{
                        marginRight: 2, // Space between text and button
                        fontSize: 'body1',
                        '@media (max-width:600px)': {
                            marginRight: 0, // Remove margin on mobile
                            marginBottom: 2, // Space between text and button on mobile
                        },
                    }}
                    variant="body1"
                >
                    This website uses cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
                </Typography>
            </motion.div>
            <Button
                className="button primary"
                onClick={handleClose}
                sx={{
                    '@media (max-width:600px)': {
                        marginTop: 2, // Space between text and button on mobile
                    },
                }}
            >
                Accept
            </Button>
        </Box>
    );
};

export default CookieBanner;
