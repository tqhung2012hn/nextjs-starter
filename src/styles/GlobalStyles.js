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
    typography: {
        fontFamily: ['"Roboto Slab"', 'sans-serif'].join(','),
    },
});

const GlobalStyles = createGlobalStyle`
    html,
    body,
    #__next {
        width: 100%;
        height: 100%;
    }

    /* roboto-slab-100 - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 100;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-100.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-100.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-100.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-100.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-100.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-100.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }

    /* roboto-slab-200 - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 200;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-200.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-200.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-200.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-200.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-200.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-200.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }

    /* roboto-slab-300 - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-300.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-300.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-300.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-300.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-300.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-300.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }

    /* roboto-slab-regular - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-regular.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-regular.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-regular.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-regular.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-regular.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }

    /* roboto-slab-500 - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-500.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-500.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-500.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-500.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-500.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-500.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }

    /* roboto-slab-600 - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 600;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-600.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-600.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-600.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-600.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-600.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-600.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }

    /* roboto-slab-700 - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-700.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-700.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-700.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-700.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-700.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-700.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }

    /* roboto-slab-800 - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-800.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-800.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-800.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-800.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-800.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-800.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }

    /* roboto-slab-900 - vietnamese_latin */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 900;
        src: url('/fonts/roboto-slab-v13-vietnamese_latin-900.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-slab-v13-vietnamese_latin-900.eot?#iefix')
                format('embedded-opentype'),
            /* IE6-IE8 */
                url('/fonts/roboto-slab-v13-vietnamese_latin-900.woff2')
                format('woff2'),
            /* Super Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-900.woff')
                format('woff'),
            /* Modern Browsers */
                url('/fonts/roboto-slab-v13-vietnamese_latin-900.ttf')
                format('truetype'),
            /* Safari, Android, iOS */
                url('/fonts/roboto-slab-v13-vietnamese_latin-900.svg#RobotoSlab')
                format('svg'); /* Legacy iOS */
    }
`;

export { GlobalStyles, theme };
