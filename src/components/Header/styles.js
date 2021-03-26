import styled from 'styled-components';

export const Brand = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    letter-spacing: ${(props) => props.theme.spacing.smaller};
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 1rem;
    background: ${(props) => props.theme.colors.blue};
    display: flex;
    align-items: center;
`;
