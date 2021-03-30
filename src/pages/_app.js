import '@/styles/styles.less';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { AuthProvider } from '@/contexts/Auth';
import { GlobalStyles, theme } from '@/styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
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
