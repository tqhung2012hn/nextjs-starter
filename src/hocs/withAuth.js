import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { LOGIN_ROUTE } from '@/constants/routes';
import { useAuth } from '@/contexts/Auth';

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const { user } = useAuth();
        const router = useRouter();

        if (!user) {
            router.push(LOGIN_ROUTE);
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

withAuth.propTypes = {
    WrappedComponent: PropTypes.node.isRequired,
};

export default withAuth;
