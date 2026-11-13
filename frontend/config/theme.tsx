import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import shadows from './shadows';

// Create a theme instance.
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    minWidth: '120px !important',
                    height: '46px',
                    color: '#fff',
                    fontSize: '1rem',
                    borderRadius: '24px !important',
                },
                containedPrimary: {
                    backgroundColor: 'linear-gradient(15deg, #f9be17 1%, #f9be17 99%)',
                },
                outlinedPrimary: {
                    color: '#f9be17',
                },
                outlined: {
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#f9be17',
        },
        secondary: {
            main: 'rgba(0,0,0,0.6)',
            contrastText: '#ffcc00',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#FFFFFF',
        },
        text: {
            primary: 'rgba(0,0,0,0.6)',
        },
    },
    spacing: 4,
    shadows: shadows.dark,
});

export default theme;
