import styled from 'styled-components';

export const Text = styled.p`
    margin: 0;
    letter-spacing: ${(props) => props.theme.spacing.smaller};
    font-weight: bold;
    color: #fff;
    text-align: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 1rem;
    background-color: ${(props) => props.theme.colors.black};
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;
