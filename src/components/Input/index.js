import PropTypes from 'prop-types';

import { BaseInput, InputGroup, Label } from './styles';

const Input = ({ label, placeholder, ...restProps }) => {
    return (
        <InputGroup>
            <BaseInput placeholder={label ? '' : placeholder} {...restProps} />
            {label && <Label htmlFor={restProps.id}>{label}</Label>}
        </InputGroup>
    );
};

Input.defaultProps = {
    label: '',
    placeholder: '',
};

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
