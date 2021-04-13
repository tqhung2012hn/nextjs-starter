import { createGlobalStyle } from 'styled-components';

const theme = {};

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body,
    #__next {
        width: 100%;
        height: 100%;
    }

    body {
        padding: 0;
        margin: 0;
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export { GlobalStyles, theme };
