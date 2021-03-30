import PropTypes from 'prop-types';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Content, Wrapper } from './styles';

const AppLayout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Wrapper>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
