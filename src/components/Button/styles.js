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
    letter-spacing: 5px;

    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;

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
                      letter-spacing: 10px;
                      box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
                          0px 5px 8px 0px rgba(0, 0, 0, 0.14),
                          0px 1px 14px 0px rgba(0, 0, 0, 0.12);
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
