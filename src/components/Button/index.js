import PropTypes from 'prop-types';

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
    color: '#000',
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
