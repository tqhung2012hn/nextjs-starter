import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const rotate = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

const Spinner = styled.div`
    display: flex;
    justify-content: center;

    &::after {
        content: '';
        width: 1rem;
        height: 1rem;
        border: 5px solid #e2e2e2;
        border-top-color: ${(props) => props.color || '#000'};
        border-radius: 50%;
        animation: ${rotate} 1s ease infinite;
    }
`;

Spinner.propTypes = {
    color: PropTypes.string,
};

export default Spinner;
