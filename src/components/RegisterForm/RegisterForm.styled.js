import styled from 'styled-components';

export const RegForm = styled.form`
    width: fit-content;
    padding: 20px;
    border: 1px solid black;
`;

export const RegFormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`; 

export const RegFormSpan = styled.span`
    display: block;
    margin-bottom: 10px;
`;

export const RegFormButton = styled.button`
    display: block;
    cursor: pointer;

    &.hover {
        background-color: aqua;
    }
`;