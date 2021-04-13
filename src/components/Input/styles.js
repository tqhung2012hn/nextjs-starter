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

    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;

    &:focus,
    &:not([value='']) {
        border-color: #000;
    }

    & ~ label {
        display: inline-block;
        position: absolute;
        left: 18px;
        top: 12px;
        font-size: 14px;
        pointer-events: none;
        z-index: 1;
        color: #767676;
        opacity: 0.5;

        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
    }

    &:focus ~ label,
    &:not([value='']) ~ label {
        top: -12px;
        left: 8px;
        opacity: 1;
        padding: 1px 8px;
        border-radius: 2px;
    }

    &:not([value='']) ~ label {
        background-color: #fff;
        color: #000;
    }

    &:focus ~ label {
        background-color: #000;
        color: #fff;
    }
`;

export const Label = styled.label``;
