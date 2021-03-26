import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '@/styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MyApp;
