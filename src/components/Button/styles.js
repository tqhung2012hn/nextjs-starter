import styled, { css } from 'styled-components';

export const BaseButton = styled.button`
    width: 100%;

    ${({ block }) =>
        !block &&
        css`
            max-width: 300px;
        `}

    height: 48px;
    border: 0;
    background-color: ${(props) => props.color};
    color: #fff;
    letter-spacing: ${(props) => props.theme.spacing.smaller};

    transition: all 0.2s ${(props) => props.theme.transitions.easing.sharp};
    -moz-transition: all 0.2s ${(props) => props.theme.transitions.easing.sharp};
    -webkit-transition: all 0.2s
        ${(props) => props.theme.transitions.easing.sharp};

    &:focus {
        outline: none;
    }

    ${({ disabled }) =>
        disabled
            ? css`
                  cursor: not-allowed;
                  filter: brightness(0.85);
              `
            : css`
                  cursor: pointer;

                  &:hover,
                  &:active {
                      font-weight: bold;
                      letter-spacing: ${(props) => props.theme.spacing.small};
                      box-shadow: ${(props) => props.theme.shadows[6]};
                  }
              `}

    ${({ outline }) =>
        outline &&
        css`
            border: 2px solid ${(props) => props.color};
            background-color: #fff;
            color: ${(props) => props.color};

            ${({ disabled }) =>
                !disabled &&
                css`
                    &:hover,
                    &:active {
                        background-color: ${(props) => props.color};
                        color: #fff;
                    }
                `}
        `}
`;
