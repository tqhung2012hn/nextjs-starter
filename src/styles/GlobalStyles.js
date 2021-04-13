import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#1976D2',
            main: '#1F62B0',
            dark: '#174A85',
        },
        secondary: {
            light: '#FF5844',
            main: '#F20519',
            dark: '#B60000',
        },
    },
});

const GlobalStyles = createGlobalStyle`
    html,
    body,
    #__next {
        width: 100%;
        height: 100%;
    }
`;

export { GlobalStyles, theme };
