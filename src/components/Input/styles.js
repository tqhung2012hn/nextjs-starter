import styled from 'styled-components';

export const InputGroup = styled.div`
    width: 100%;
    height: 48px;
    display: block;
    position: relative;
    font-size: inherit;
    box-sizing: border-box;
`;

export const BaseInput = styled.input`
    width: 100%;
    height: 48px;
    border: 2px solid #767676;
    padding: 16px;
    display: block;
    position: relative;
    font-size: inherit;
    box-sizing: border-box;
    outline: none;

    transition: all 0.2s ${(props) => props.theme.transitions.easing.sharp};
    -moz-transition: all 0.2s ${(props) => props.theme.transitions.easing.sharp};
    -webkit-transition: all 0.2s
        ${(props) => props.theme.transitions.easing.sharp};

    &:focus,
    &:not([value='']) {
        border-color: ${(props) => props.theme.colors.black};
    }

    & ~ label {
        display: inline-block;
        position: absolute;
        left: 18px;
        top: 12px;
        font-size: ${(props) => props.theme.colors.big};
        pointer-events: none;
        z-index: 1;
        color: #767676;
        opacity: 0.5;

        transition: all 0.2s ${(props) => props.theme.transitions.easing.sharp};
        -moz-transition: all 0.2s
            ${(props) => props.theme.transitions.easing.sharp};
        -webkit-transition: all 0.2s
            ${(props) => props.theme.transitions.easing.sharp};
    }

    &:focus ~ label,
    &:not([value='']) ~ label {
        top: -12px;
        left: 8px;
        font-size: ${(props) => props.theme.font.sizes.normal};
        opacity: 1;
        padding: 1px 8px;
        border-radius: 2px;
    }

    &:not([value='']) ~ label {
        background-color: #fff;
        color: ${(props) => props.theme.colors.black};
    }

    &:focus ~ label {
        background-color: ${(props) => props.theme.colors.black};
        color: #fff;
    }
`;

export const Label = styled.label``;
