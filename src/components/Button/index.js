import PropTypes from 'prop-types';

import { theme } from '@/styles/GlobalStyles';

import Spinner from '../Spinner';

import { BaseButton } from './styles';

const Button = ({ loading, disabled, children, ...restProps }) => {
    return (
        <BaseButton disabled={disabled || loading} {...restProps}>
            {loading ? <Spinner color={restProps.color} /> : children}
        </BaseButton>
    );
};

Button.defaultProps = {
    color: theme.colors.black,
    loading: false,
    disabled: false,
    children: null,
};

Button.propTypes = {
    color: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export default Button;
