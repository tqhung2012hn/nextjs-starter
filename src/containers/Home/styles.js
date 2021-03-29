import styled from 'styled-components';

export const Welcome = styled.h1`
    color: ${(props) => props.theme.colors.blue};
    letter-spacing: ${(props) => props.theme.spacing.smaller};
    user-select: none;
    transition: all 0.3s ease;

    &:after {
        display: block;
        content: '';
        border-bottom: 3px solid ${(props) => props.theme.colors.blue};
        transform: scaleX(0);
        transition: all 0.3s ease;
    }

    &:hover {
        letter-spacing: ${(props) => props.theme.spacing.small};

        &:after {
            transform: scaleX(1);
        }
    }
`;

export const Text = styled.p`
    font-style: italic;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
