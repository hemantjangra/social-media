import styled from 'styled-components';

interface IButtonProp{
    floatProp?: string,
    color: string
}

export const StyledButton = styled.button`
    background-color: ${prop => prop.color};
    color:#fff;
    border:${(prop: IButtonProp) => prop.color};
    border-radius: 3px;
    width: auto;
    padding: 5px;
    float: ${(prop: IButtonProp) => prop.floatProp || 'none'};
`