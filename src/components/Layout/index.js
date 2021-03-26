import PropTypes from 'prop-types';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Content, Wrapper } from './styles';

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Wrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
