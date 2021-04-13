import styled from 'styled-components';

export const Welcome = styled.h1`
    color: darkblue;
    letter-spacing: 5px;
    user-select: none;
    transition: all 0.3s ease;

    &:after {
        display: block;
        content: '';
        border-bottom: 3px solid darkblue;
        transform: scaleX(0);
        transition: all 0.3s ease;
    }

    &:hover {
        letter-spacing: 7.5px;

        &:after {
            transform: scaleX(1);
        }
    }
`;

export const Text = styled.p`
    font-style: italic;
`;

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
