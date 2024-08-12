// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif', // Set the default font
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#ffd439',
                    textDecoration: 'underline',
                    '&:hover': {
                        textDecoration: 'none',
                    },
                },
            },
        },
    },
});

export default theme;
