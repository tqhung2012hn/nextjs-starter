import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '@/contexts/Auth';
import { GlobalStyles, theme } from '@/styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MyApp;
