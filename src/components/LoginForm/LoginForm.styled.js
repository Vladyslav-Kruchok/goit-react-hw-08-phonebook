import styled from 'styled-components';

export const LogForm = styled.form`
    width: fit-content;
    padding: 20px;
    border: 1px solid black;
`;

export const LogFormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`; 

export const LogFormSpan = styled.span`
    display: block;
    margin-bottom: 10px;
`;

export const LogFormButton = styled.button`
    display: block;
    cursor: pointer;

    &.hover {
        background-color: aqua;
    }
`;